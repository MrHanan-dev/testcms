import type { GlobalConfig } from "payload";

/**
 * Editable Home page content. Phase 1 starts with the hero slider (the most
 * important, most-edited section). The Hero component renders these slides if
 * present, otherwise it falls back to its built-in defaults — so the live design
 * is byte-identical until the client edits something here.
 *
 * More home sections (services, stats, testimonials…) are added incrementally.
 */
export const Home: GlobalConfig = {
  slug: "home",
  label: "Home Page",
  access: { read: () => true },
  admin: { group: "Site Content" },
  fields: [
    {
      name: "heroSlides",
      type: "array",
      label: "Hero slides",
      admin: {
        description:
          "The rotating hero banner. Leave empty to use the current built-in slides.",
        initCollapsed: true,
      },
      fields: [
        {
          name: "variant",
          type: "select",
          defaultValue: "image",
          options: [
            { label: "Photo background", value: "image" },
            { label: "Infographic (dark panel)", value: "infographic" },
            { label: "Certifications collage", value: "collage" },
          ],
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          admin: { description: "Background image (not used for the collage variant)." },
        },
        { name: "tag", type: "text", admin: { description: "Small label above the headline." } },
        {
          name: "headline",
          type: "textarea",
          required: true,
          admin: {
            description:
              "Use line breaks for stacked lines. A period (.) renders in the accent colour, matching the current design.",
          },
        },
        { name: "description", type: "textarea" },
        { name: "alt", type: "text", admin: { description: "Image alt text (accessibility/SEO)." } },
      ],
    },
  ],
};
