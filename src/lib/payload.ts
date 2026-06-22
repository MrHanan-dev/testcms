import "server-only";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Server-side access to Payload's local API (no HTTP round-trip).
 *
 * Wrapped defensively: if Payload/DB is unreachable, page lookups return null so
 * the caller can fall back rather than crashing the site.
 */
export async function getPageBySlug(slug: string, draft = false) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "pages",
      where: { slug: { equals: slug } },
      draft,
      limit: 1,
      overrideAccess: draft,
    });
    return result.docs[0] ?? null;
  } catch (err) {
    console.error("[payload] getPageBySlug failed:", (err as Error).message);
    return null;
  }
}
