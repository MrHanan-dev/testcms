import type { Block } from "payload";

/**
 * Hero section block — a heading + subheading on the brand navy band.
 * Mirrors the existing page hero styling (see e.g. the About page hero).
 */
export const Hero: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  labels: { singular: "Hero", plural: "Heroes" },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      admin: { description: "Optional small uppercase label above the heading." },
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "subheading",
      type: "textarea",
    },
  ],
};
