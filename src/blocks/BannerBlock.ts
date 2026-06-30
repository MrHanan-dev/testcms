import type { Block } from "payload";

/**
 * Banner block — full-width promotional banner with CTA
 */
export const BannerBlock: Block = {
  slug: "banner",
  interfaceName: "BannerBlock",
  labels: { singular: "Banner", plural: "Banners" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "text", type: "textarea" },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "style",
      type: "select",
      defaultValue: "primary",
      options: [
        { label: "Primary (Navy)", value: "primary" },
        { label: "Accent (Gold)", value: "accent" },
        { label: "Light", value: "light" },
        { label: "Gradient", value: "gradient" },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "buttonText", type: "text", admin: { width: "50%" } },
        { name: "buttonUrl", type: "text", admin: { width: "50%", placeholder: "/contact or #section" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "secondaryButtonText", type: "text", admin: { width: "50%" } },
        { name: "secondaryButtonUrl", type: "text", admin: { width: "50%" } },
      ],
    },
  ],
};
