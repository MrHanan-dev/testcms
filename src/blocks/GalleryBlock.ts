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
      name: "source",
      type: "select",
      defaultValue: "custom",
      options: [
        { label: "From Galleries Collection", value: "collection" },
        { label: "Custom images (below)", value: "custom" },
      ],
    },
    {
      name: "gallery",
      type: "relationship",
      relationTo: "galleries",
      admin: {
        condition: (_, siblingData) => siblingData?.source === "collection",
        description: "Select a gallery from the Galleries collection",
      },
    },
    {
      name: "gallerySlug",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData?.source === "collection",
        description: "Or enter gallery slug if not using relationship picker",
      },
    },
    {
      name: "images",
      type: "array",
      admin: {
        condition: (_, siblingData) => siblingData?.source !== "collection",
      },
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
