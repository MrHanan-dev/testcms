/**
 * Resolve Payload media URLs for production (Vercel).
 * Local `/api/media/file/*` paths 404 on serverless unless Vercel Blob is configured —
 * map known certification assets to static files in /public/certifications.
 */
const CERT_STATIC: Record<string, string> = {
  "pmp.webp": "/certifications/pmp.webp",
  "capm.webp": "/certifications/capm.webp",
  "pmi-cp.webp": "/certifications/pmi-cp.webp",
};

export function resolveMediaUrl(
  url: string | undefined | null,
  fallback?: string,
): string | undefined {
  if (!url || typeof url !== "string") return fallback;

  const trimmed = url.trim();
  if (!trimmed) return fallback;

  if (trimmed.includes("localhost") || trimmed.startsWith("http://127.0.0.1")) {
    return fallback;
  }

  if (trimmed.includes("/api/media/file/")) {
    const name = trimmed.split("/").pop()?.split("?")[0]?.toLowerCase();
    if (name && CERT_STATIC[name]) return CERT_STATIC[name];
    return fallback ?? trimmed;
  }

  return trimmed;
}

export function payloadUploadUrl(value: unknown): string | undefined {
  if (!value || typeof value !== "object" || !("url" in value)) return undefined;
  const url = (value as { url?: string }).url;
  return typeof url === "string" ? url : undefined;
}

export function payloadUploadUrlWithFallback(
  value: unknown,
  fallback?: string,
): string | undefined {
  return resolveMediaUrl(payloadUploadUrl(value), fallback);
}
