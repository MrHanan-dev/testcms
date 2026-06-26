import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "../lib/activityLogger";

/**
 * Media Library — WordPress-style media management with folders and metadata.
 */
export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Media File", plural: "Media Library" },
  admin: {
    group: "📝 Content",
    description: "Upload and manage images, documents, and other files.",
    defaultColumns: ["filename", "alt", "folder", "mimeType", "filesize", "updatedAt"],
  },
  hooks: {
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === "admin" || user?.role === "editor",
  },
  upload: {
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 300,
        position: "centre",
      },
      {
        name: "medium",
        width: 800,
        height: undefined,
        position: "centre",
      },
      {
        name: "large",
        width: 1200,
        height: undefined,
        position: "centre",
      },
      {
        name: "og",
        width: 1200,
        height: 630,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*", "application/pdf", "video/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
      required: true,
      admin: {
        placeholder: "Describe the image for accessibility",
        description: "💡 Important for SEO and screen readers",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "folder",
          type: "select",
          label: "Folder",
          admin: { width: "50%" },
          options: [
            { label: "📁 General", value: "general" },
            { label: "🏠 Homepage", value: "homepage" },
            { label: "📝 Blog", value: "blog" },
            { label: "🎓 Certifications", value: "certifications" },
            { label: "💼 Services", value: "services" },
            { label: "👥 Team", value: "team" },
            { label: "🏆 Testimonials", value: "testimonials" },
            { label: "📄 Documents", value: "documents" },
          ],
        },
        {
          name: "tags",
          type: "text",
          label: "Tags",
          admin: {
            placeholder: "e.g. hero, banner, photo",
            description: "Comma-separated tags for searching",
            width: "50%",
          },
        },
      ],
    },
    {
      name: "caption",
      type: "text",
      label: "Caption",
      admin: {
        placeholder: "Optional caption or credit",
      },
    },
    {
      name: "credit",
      type: "text",
      label: "Credit / Source",
      admin: {
        placeholder: "e.g. Photo by John Doe",
      },
    },
  ],
};
