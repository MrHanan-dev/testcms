import type { Payload } from "payload";
import {
  ORIGINAL_FAQS,
  ORIGINAL_FORMS,
  ORIGINAL_MENUS,
  ORIGINAL_TEAM_MEMBERS,
  ORIGINAL_TESTIMONIALS,
} from "@/lib/seedOriginalContent";

type SeedResult = { created: number; updated: number; skipped: number; errors: string[] };

async function upsertByField(
  payload: Payload,
  collection: string,
  matchField: string,
  matchValue: string,
  data: Record<string, unknown>,
  force: boolean,
): Promise<"created" | "updated" | "skipped"> {
  const found = await payload.find({
    collection: collection as never,
    where: { [matchField]: { equals: matchValue } } as never,
    limit: 1,
  });

  const existing = found.docs[0];
  if (existing && !force) return "skipped";

  if (existing) {
    await payload.update({
      collection: collection as never,
      id: existing.id,
      data: data as never,
    });
    return "updated";
  }

  await payload.create({ collection: collection as never, data: data as never });
  return "created";
}

export async function seedOriginalCollections(
  payload: Payload,
  force = false,
): Promise<Record<string, SeedResult>> {
  const empty = (): SeedResult => ({ created: 0, updated: 0, skipped: 0, errors: [] });
  const results: Record<string, SeedResult> = {
    testimonials: empty(),
    faqs: empty(),
    teamMembers: empty(),
    forms: empty(),
    menus: empty(),
  };

  for (const t of ORIGINAL_TESTIMONIALS) {
    try {
      const outcome = await upsertByField(payload, "testimonials", "name", t.name, t as never, force);
      results.testimonials[outcome]++;
    } catch (e) {
      results.testimonials.errors.push(String(e));
    }
  }

  for (const f of ORIGINAL_FAQS) {
    try {
      const outcome = await upsertByField(payload, "faqs", "question", f.question, f as never, force);
      results.faqs[outcome]++;
    } catch (e) {
      results.faqs.errors.push(String(e));
    }
  }

  for (const t of ORIGINAL_TEAM_MEMBERS) {
    try {
      const outcome = await upsertByField(payload, "team-members", "name", t.name, t as never, force);
      results.teamMembers[outcome]++;
    } catch (e) {
      results.teamMembers.errors.push(String(e));
    }
  }

  for (const f of ORIGINAL_FORMS) {
    try {
      const outcome = await upsertByField(payload, "forms", "slug", f.slug, f as never, force);
      results.forms[outcome]++;
    } catch (e) {
      results.forms.errors.push(String(e));
    }
  }

  for (const m of ORIGINAL_MENUS) {
    try {
      const outcome = await upsertByField(payload, "menus", "name", m.name, m as never, force);
      results.menus[outcome]++;
    } catch (e) {
      results.menus.errors.push(String(e));
    }
  }

  return results;
}

/** All page/global seed API routes (original site content). */
export const PAGE_SEED_ROUTES = [
  "seed-site-settings",
  "seed-home",
  "seed-about",
  "seed-pm",
  "seed-ce",
  "seed-consulting",
  "seed-contract",
  "seed-training",
  "seed-pmp",
  "seed-capm",
  "seed-pmicp",
  "seed-partner",
  "seed-posts",
  "seed-privacy",
  "seed-terms",
] as const;

export type PageSeedRoute = (typeof PAGE_SEED_ROUTES)[number];

export async function runPageSeedRoute(
  route: PageSeedRoute,
  secret: string,
  force: boolean,
  origin: string,
): Promise<{ route: string; status: number; body: unknown }> {
  const url = new URL(`${origin}/api/${route}`);
  url.searchParams.set("secret", secret);
  if (force) url.searchParams.set("force", "1");

  const res = await fetch(url.toString(), { method: "GET" });
  const text = await res.text();
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    body = { message: text };
  }
  return { route, status: res.status, body };
}
