import type { Block } from "payload";

/**
 * Services Grid block — display service cards in a grid layout
 */
export const ServicesGridBlock: Block = {
  slug: "servicesGrid",
  interfaceName: "ServicesGridBlock",
  labels: { singular: "Services Grid", plural: "Services Grids" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    {
      name: "columns",
      type: "select",
      defaultValue: "3",
      options: [
        { label: "2 Columns", value: "2" },
        { label: "3 Columns", value: "3" },
        { label: "4 Columns", value: "4" },
      ],
    },
    {
      name: "services",
      type: "array",
      minRows: 1,
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "icon", type: "text", admin: { placeholder: "Icon name (e.g. Briefcase, Target)" } },
        { name: "image", type: "upload", relationTo: "media" },
        { name: "linkText", type: "text", admin: { placeholder: "e.g. Learn More" } },
        { name: "linkUrl", type: "text" },
      ],
    },
  ],
};
