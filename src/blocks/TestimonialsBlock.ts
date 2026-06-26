import type { Block } from "payload";

/**
 * Testimonials block — display client testimonials in a grid or carousel
 */
export const TestimonialsBlock: Block = {
  slug: "testimonials",
  interfaceName: "TestimonialsBlock",
  labels: { singular: "Testimonials", plural: "Testimonials" },
  fields: [
    { name: "eyebrow", type: "text", admin: { placeholder: "e.g. What Our Clients Say" } },
    { name: "heading", type: "text", required: true, admin: { placeholder: "e.g. Success Stories" } },
    { name: "subheading", type: "textarea" },
    {
      name: "layout",
      type: "select",
      defaultValue: "grid",
      options: [
        { label: "Grid", value: "grid" },
        { label: "Carousel", value: "carousel" },
        { label: "Single Featured", value: "featured" },
      ],
    },
    {
      name: "source",
      type: "select",
      defaultValue: "custom",
      options: [
        { label: "From Testimonials Collection", value: "collection" },
        { label: "Custom (define below)", value: "custom" },
      ],
    },
    {
      name: "limit",
      type: "number",
      defaultValue: 6,
      admin: {
        condition: (_, siblingData) => siblingData?.source === "collection",
        description: "Number of testimonials to show from the collection",
      },
    },
    {
      name: "testimonials",
      type: "array",
      admin: {
        condition: (_, siblingData) => siblingData?.source === "custom",
      },
      minRows: 1,
      fields: [
        { name: "quote", type: "textarea", required: true },
        { name: "author", type: "text", required: true },
        { name: "role", type: "text", admin: { placeholder: "e.g. Project Manager" } },
        { name: "company", type: "text" },
        { name: "photo", type: "upload", relationTo: "media" },
        { name: "rating", type: "number", min: 1, max: 5, defaultValue: 5 },
      ],
    },
  ],
};
