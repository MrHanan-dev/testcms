import type { Block } from "payload";

/**
 * Image block — single image with optional caption and link
 */
export const ImageBlock: Block = {
  slug: "image",
  interfaceName: "ImageBlock",
  labels: { singular: "Image", plural: "Images" },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "caption",
      type: "text",
      admin: { description: "Optional caption shown below the image" },
    },
    {
      name: "alt",
      type: "text",
      admin: { description: "Accessibility description of the image" },
    },
    {
      name: "link",
      type: "text",
      admin: { description: "Optional URL to link the image to" },
    },
    {
      name: "size",
      type: "select",
      defaultValue: "medium",
      options: [
        { label: "Small (50%)", value: "small" },
        { label: "Medium (75%)", value: "medium" },
        { label: "Full Width", value: "full" },
      ],
    },
  ],
};
