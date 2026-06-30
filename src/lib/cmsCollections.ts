import "server-only";
import { getPayload } from "payload";
import config from "@payload-config";
import { getGlobal } from "./payload";

type MediaDoc = { url?: string; alt?: string } | string | null | undefined;

export function mediaDoc(value: unknown): { url?: string; alt?: string } | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return { url: value };
  if (typeof value === "object" && value !== null && "url" in value) {
    return value as { url?: string; alt?: string };
  }
  return undefined;
}

export async function getReadingSettings() {
  return getGlobal("readingSettings");
}

export async function getActivePopups() {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "popups",
      where: { status: { equals: "active" } },
      limit: 20,
      depth: 2,
    });
    return result.docs;
  } catch (err) {
    console.error("[cms] getActivePopups failed:", (err as Error).message);
    return [];
  }
}

export async function getSliderByLocation(location: string) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "sliders",
      where: {
        and: [
          { location: { equals: location } },
          { status: { equals: "active" } },
        ],
      },
      limit: 1,
      depth: 2,
    });
    return result.docs[0] ?? null;
  } catch (err) {
    console.error(`[cms] getSliderByLocation(${location}) failed:`, (err as Error).message);
    return null;
  }
}

export async function getTeamMembers(limit = 6) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "team-members",
      where: { status: { equals: "active" } },
      sort: "order",
      limit,
      depth: 1,
    });
    return result.docs;
  } catch (err) {
    console.error("[cms] getTeamMembers failed:", (err as Error).message);
    return [];
  }
}

export async function getPricingPlans(limit = 12) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "pricing-plans",
      where: { status: { equals: "active" } },
      sort: "order",
      limit,
      depth: 0,
    });
    return result.docs;
  } catch (err) {
    console.error("[cms] getPricingPlans failed:", (err as Error).message);
    return [];
  }
}

export async function getFeaturedTestimonials(limit = 6) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "testimonials",
      where: {
        and: [
          { status: { equals: "published" } },
          { featured: { equals: true } },
        ],
      },
      limit,
      depth: 1,
      sort: "-createdAt",
    });
    if (result.docs.length > 0) return result.docs;

    const fallback = await payload.find({
      collection: "testimonials",
      where: { status: { equals: "published" } },
      limit,
      depth: 1,
      sort: "-createdAt",
    });
    return fallback.docs;
  } catch (err) {
    console.error("[cms] getFeaturedTestimonials failed:", (err as Error).message);
    return [];
  }
}

export async function getGalleryBySlug(slug: string) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "galleries",
      where: {
        and: [
          { slug: { equals: slug } },
          { status: { equals: "published" } },
        ],
      },
      limit: 1,
      depth: 2,
    });
    return result.docs[0] ?? null;
  } catch (err) {
    console.error(`[cms] getGalleryBySlug(${slug}) failed:`, (err as Error).message);
    return null;
  }
}

export async function getFormById(id: string) {
  try {
    const payload = await getPayload({ config });
    return await payload.findByID({
      collection: "forms",
      id,
      depth: 0,
    });
  } catch (err) {
    console.error(`[cms] getFormById(${id}) failed:`, (err as Error).message);
    return null;
  }
}

export async function getCommentsForPost(postId: string, limit = 20) {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "comments",
      where: {
        and: [
          { post: { equals: postId } },
          { status: { equals: "approved" } },
        ],
      },
      limit,
      sort: "-createdAt",
      depth: 0,
    });
    return result.docs;
  } catch (err) {
    console.error("[cms] getCommentsForPost failed:", (err as Error).message);
    return [];
  }
}

export async function getAppearanceCss(): Promise<string> {
  const appearance = await getGlobal("appearance");
  const primary = appearance?.primaryColor as string | undefined;
  const accent = appearance?.accentColor as string | undefined;
  if (!primary && !accent) return "";

  const lines: string[] = [];
  if (primary) lines.push(`--color-primary: ${primary};`);
  if (accent) lines.push(`--color-accent: ${accent};`);
  return `:root { ${lines.join(" ")} }`;
}

export function mapTestimonialDoc(doc: Record<string, unknown>) {
  return {
    quote: String(doc.content ?? ""),
    author: String(doc.name ?? ""),
    role: String(doc.position ?? ""),
    company: String(doc.company ?? ""),
    photo: mediaDoc(doc.photo),
    rating: Number(doc.rating ?? 5),
  };
}

export function mapPricingPlan(doc: Record<string, unknown>) {
  const currency = String(doc.currency ?? "NZD");
  const price = doc.price as number;
  const priceNote = doc.priceNote ? ` ${doc.priceNote}` : "";
  const periodMap: Record<string, string> = {
    monthly: "/month",
    yearly: "/year",
    "per-person": "/person",
    "one-time": "",
    custom: "",
  };
  const billing = String(doc.billingPeriod ?? "one-time");
  const period = periodMap[billing] ?? "";

  const currencySymbol =
    currency === "USD" ? "$" : currency === "AUD" ? "A$" : currency === "GBP" ? "£" : currency === "EUR" ? "€" : "$";

  const features = ((doc.features as { text?: string; included?: boolean }[]) ?? [])
    .filter((f) => f.included !== false)
    .map((f) => ({ text: String(f.text ?? "") }));

  return {
    id: String(doc.id ?? ""),
    name: String(doc.name ?? ""),
    price: `${currencySymbol}${price}${priceNote}`,
    period: period || undefined,
    description: String(doc.description ?? doc.subtitle ?? ""),
    featured: Boolean(doc.featured),
    features,
    buttonText: String(doc.buttonText ?? "Get Started"),
    buttonUrl: String(doc.buttonUrl ?? "#contact"),
  };
}

export function mapTeamMember(doc: Record<string, unknown>) {
  return {
    id: String(doc.id ?? ""),
    name: String(doc.name ?? ""),
    position: String(doc.position ?? ""),
    photo: mediaDoc(doc.photo),
    bio: String(doc.bio ?? ""),
  };
}
