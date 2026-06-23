import type { Block } from "payload";

/**
 * Gallery block — display a grid of images
 */
export const GalleryBlock: Block = {
  slug: "gallery",
  interfaceName: "GalleryBlock",
  labels: { singular: "Gallery", plural: "Galleries" },
  fields: [
    { name: "heading", type: "text" },
    { name: "description", type: "textarea" },
    {
      name: "layout",
      type: "select",
      defaultValue: "grid",
      options: [
        { label: "Grid (3 columns)", value: "grid" },
        { label: "Masonry", value: "masonry" },
        { label: "Carousel", value: "carousel" },
      ],
    },
    {
      name: "images",
      type: "array",
      minRows: 1,
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "caption", type: "text" },
        { name: "alt", type: "text" },
      ],
    },
    {
      name: "enableLightbox",
      type: "checkbox",
      defaultValue: true,
      admin: { description: "Allow images to open in a fullscreen lightbox" },
    },
  ],
};
