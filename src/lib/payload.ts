import "server-only";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Server-side access to Payload's local API (no HTTP round-trip).
 *
 * Wrapped defensively: if Payload/DB is unreachable, page lookups return null so
 * the caller can fall back rather than crashing the site.
 */
/** Editable Home page content (hero slides, …). Null-safe. */
export async function getHome() {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "home", depth: 1 });
  } catch (err) {
    console.error("[payload] getHome failed:", (err as Error).message);
    return null;
  }
}

/** Editable About page content. Null-safe. */
export async function getAbout() {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "about", depth: 1 });
  } catch (err) {
    console.error("[payload] getAbout failed:", (err as Error).message);
    return null;
  }
}

/** Site-wide settings global (logo, contact, socials). Null-safe. */
export async function getSiteSettings() {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "siteSettings", depth: 1 });
  } catch (err) {
    console.error("[payload] getSiteSettings failed:", (err as Error).message);
    return null;
  }
}

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
