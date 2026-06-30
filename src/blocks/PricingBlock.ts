import type { Block } from "payload";

/**
 * Pricing block — display pricing plans/tiers
 */
export const PricingBlock: Block = {
  slug: "pricing",
  interfaceName: "PricingBlock",
  labels: { singular: "Pricing", plural: "Pricing" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true, admin: { placeholder: "e.g. Choose Your Plan" } },
    { name: "description", type: "textarea" },
    {
      name: "source",
      type: "select",
      defaultValue: "collection",
      options: [
        { label: "From Pricing Plans Collection", value: "collection" },
        { label: "Custom (define below)", value: "custom" },
      ],
    },
    {
      name: "plans",
      type: "array",
      admin: { 
        condition: (_, siblingData) => siblingData?.source === "custom",
      },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "price", type: "text", required: true, admin: { placeholder: "e.g. $499" } },
        { name: "period", type: "text", admin: { placeholder: "e.g. per course" } },
        { name: "description", type: "textarea" },
        { name: "featured", type: "checkbox", defaultValue: false },
        {
          name: "features",
          type: "array",
          fields: [
            { name: "text", type: "text", required: true },
          ],
        },
        { name: "buttonText", type: "text", defaultValue: "Get Started" },
        { name: "buttonUrl", type: "text" },
      ],
    },
  ],
};
