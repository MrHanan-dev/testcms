import "server-only";
import {
  getTeamMembers,
  getPricingPlans,
  getFeaturedTestimonials,
  getGalleryBySlug,
  getFormById,
  mapPricingPlan,
  mapTeamMember,
  mapTestimonialDoc,
  mediaDoc,
} from "./cmsCollections";

type Block = { blockType: string; [key: string]: unknown };

function relId(value: unknown): string | undefined {
  if (!value) return undefined;
  if (typeof value === "string") return value;
  if (typeof value === "object" && value !== null && "id" in value) {
    return String((value as { id: unknown }).id);
  }
  return undefined;
}

export async function enrichPageBlocks(blocks?: Block[]): Promise<Block[] | undefined> {
  if (!blocks?.length) return blocks;

  return Promise.all(
    blocks.map(async (block) => {
      if (block.blockType === "team" && block.source === "collection") {
        const limit = typeof block.limit === "number" ? block.limit : 6;
        const members = await getTeamMembers(limit);
        return { ...block, members: members.map((m) => mapTeamMember(m as Record<string, unknown>)) };
      }

      if (block.blockType === "pricing" && block.source === "collection") {
        const plans = await getPricingPlans();
        return { ...block, plans: plans.map((p) => mapPricingPlan(p as Record<string, unknown>)) };
      }

      if (block.blockType === "testimonials" && block.source === "collection") {
        const limit = typeof block.limit === "number" ? block.limit : 6;
        const items = await getFeaturedTestimonials(limit);
        return {
          ...block,
          testimonials: items.map((t) => {
            const mapped = mapTestimonialDoc(t as Record<string, unknown>);
            return {
              quote: mapped.quote,
              author: mapped.author,
              role: mapped.role,
              company: mapped.company,
              photo: mapped.photo,
              rating: mapped.rating,
            };
          }),
        };
      }

      if (block.blockType === "gallery" && block.source === "collection") {
        const galleryId = relId(block.gallery);
        const gallerySlug = typeof block.gallerySlug === "string" ? block.gallerySlug : undefined;
        let galleryDoc: Record<string, unknown> | null = null;

        if (galleryId) {
          const { getPayload } = await import("payload");
          const payloadConfig = (await import("@payload-config")).default;
          const payload = await getPayload({ config: payloadConfig });
          try {
            galleryDoc = (await payload.findByID({
              collection: "galleries",
              id: galleryId,
              depth: 2,
            })) as Record<string, unknown>;
          } catch {
            galleryDoc = null;
          }
        } else if (gallerySlug) {
          const { getGalleryBySlug } = await import("./cmsCollections");
          galleryDoc = (await getGalleryBySlug(gallerySlug)) as Record<string, unknown> | null;
        }

        if (galleryDoc) {
          const images = ((galleryDoc.images as Record<string, unknown>[]) ?? []).map((img) => ({
            image: mediaDoc(img.image),
            caption: img.caption,
            alt: img.alt,
          }));
          return {
            ...block,
            heading: block.heading || galleryDoc.title,
            description: block.description || galleryDoc.description,
            layout: block.layout || galleryDoc.layout || "grid",
            images,
          };
        }
      }

      if (block.blockType === "contactForm") {
        const formId = relId(block.form);
        if (formId) {
          const form = await getFormById(formId);
          if (form) {
            return { ...block, formDoc: form };
          }
        }
      }

      return block;
    }),
  );
}
