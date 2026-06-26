import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import type { Payload } from "payload";

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);

/** Resolve a seed filename from public/ and legacy media/ folders. */
export function resolveSeedFilePath(filename: string): string | undefined {
  const candidates = [
    join(process.cwd(), "public", "images", filename),
    join(process.cwd(), "public", "images", "blog", filename),
    join(process.cwd(), "public", "certifications", filename),
    join(process.cwd(), "media", filename),
  ];
  return candidates.find((p) => existsSync(p));
}

function walkImages(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...walkImages(full));
      continue;
    }
    const ext = entry.slice(entry.lastIndexOf(".")).toLowerCase();
    if (IMAGE_EXT.has(ext)) out.push(full);
  }
  return out;
}

export type SeedMediaResult = {
  created: number;
  updated: number;
  skipped: number;
  missing: string[];
  errors: string[];
};

/** Upload or refresh a single media file by basename. */
export async function upsertSeedMediaFile(
  payload: Payload,
  filename: string,
  alt: string,
  force = false,
): Promise<"created" | "updated" | "skipped" | "missing"> {
  const filePath = resolveSeedFilePath(filename);
  if (!filePath) return "missing";

  const found = await payload.find({
    collection: "media",
    where: { filename: { equals: filename } },
    limit: 1,
  });

  const existing = found.docs[0];
  if (existing) {
    if (force) {
      await payload.update({
        collection: "media",
        id: existing.id,
        data: { alt, folder: guessFolder(filename) },
      });
      return "updated";
    }
    return "skipped";
  }

  await payload.create({
    collection: "media",
    data: { alt, folder: guessFolder(filename) },
    filePath,
  });
  return "created";
}

function guessFolder(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.includes("blog") || lower.includes("pmbok") || lower.includes("pmicp")) return "blog";
  if (lower.endsWith(".webp") && (lower.includes("pmp") || lower.includes("capm") || lower.includes("pmi"))) {
    return "certifications";
  }
  if (lower.includes("hero") || lower.includes("consultant") || lower.includes("agilenest")) return "homepage";
  return "general";
}

/** Scan static asset folders and upload every image into Payload Media (→ Vercel Blob when configured). */
export async function seedAllMedia(payload: Payload, force = false): Promise<SeedMediaResult> {
  const result: SeedMediaResult = {
    created: 0,
    updated: 0,
    skipped: 0,
    missing: [],
    errors: [],
  };

  const scanRoots = [
    join(process.cwd(), "public", "images"),
    join(process.cwd(), "public", "certifications"),
    join(process.cwd(), "media"),
  ];

  const seen = new Set<string>();
  for (const root of scanRoots) {
    for (const filePath of walkImages(root)) {
      const filename = filePath.split(/[/\\]/).pop()!;
      if (seen.has(filename)) continue;
      seen.add(filename);

      const alt = filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
      try {
        const outcome = await upsertSeedMediaFile(payload, filename, alt, force);
        if (outcome === "missing") result.missing.push(filename);
        else result[outcome]++;
      } catch (e) {
        result.errors.push(`${filename}: ${String(e)}`);
      }
    }
  }

  return result;
}

/** Map of filename → media id for page seeds. */
export async function buildMediaIdMap(payload: Payload, force = false): Promise<Map<string, string | number>> {
  await seedAllMedia(payload, force);
  const map = new Map<string, string | number>();
  const all = await payload.find({ collection: "media", limit: 500, depth: 0 });
  for (const doc of all.docs) {
    if (doc.filename) map.set(String(doc.filename), doc.id);
  }
  return map;
}

export async function mediaIdFor(
  payload: Payload,
  filename: string | null | undefined,
  alt: string,
  cache: Map<string, string | number>,
  force = false,
): Promise<string | number | undefined> {
  if (!filename) return undefined;
  if (cache.has(filename) && !force) return cache.get(filename);
  const outcome = await upsertSeedMediaFile(payload, filename, alt, force);
  if (outcome === "missing") return undefined;
  const found = await payload.find({
    collection: "media",
    where: { filename: { equals: filename } },
    limit: 1,
  });
  const id = found.docs[0]?.id;
  if (id != null) cache.set(filename, id);
  return id;
}
