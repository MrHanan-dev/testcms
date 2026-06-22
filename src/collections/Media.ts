import type { CollectionConfig } from "payload";

/**
 * Media library (images/files used across pages, blog, and email).
 *
 * Alt text is required for accessibility/SEO. Uploads go to local disk in
 * development; production storage (e.g. Vercel Blob / S3) is wired in the deploy
 * phase since Vercel's filesystem is ephemeral.
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
