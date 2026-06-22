import type { Block } from "payload";

/**
 * A heading + grid of cards (the "Why Choose…" pattern used across the site).
 * Reproduces the rounded white card grid in the brand style.
 */
export const FeatureCards: Block = {
  slug: "featureCards",
  interfaceName: "FeatureCardsBlock",
  labels: { singular: "Feature cards", plural: "Feature cards" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "intro", type: "textarea" },
    {
      name: "cards",
      type: "array",
      minRows: 1,
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
