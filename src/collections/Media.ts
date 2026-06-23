import type { CollectionConfig } from "payload";

/**
 * Media library (images/files used across pages, blog, and email).
 *
 * Alt text is required for accessibility/SEO. Local disk in development;
 * Vercel Blob when BLOB_READ_WRITE_TOKEN is set (see payload.config.ts).
 */
export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: true,
};
