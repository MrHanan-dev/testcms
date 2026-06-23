import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Galleries — Photo galleries and portfolios.
 * WordPress-style gallery management.
 */
export const Galleries: CollectionConfig = {
  slug: "galleries",
  labels: { singular: "Gallery", plural: "Galleries" },
  admin: {
    group: "📝 Content",
    description: "Create photo galleries and portfolio showcases.",
    useAsTitle: "title",
    defaultColumns: ["title", "category", "imageCount", "status"],
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
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Gallery Title",
          required: true,
          admin: { width: "60%", placeholder: "e.g. Training Workshop 2026" },
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "published",
          admin: { width: "40%" },
          options: [
            { label: "✅ Published", value: "published" },
            { label: "📝 Draft", value: "draft" },
            { label: "🔒 Private", value: "private" },
          ],
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      label: "URL Slug",
      required: true,
      unique: true,
      admin: { placeholder: "training-workshop-2026" },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      admin: { placeholder: "Brief description of this gallery..." },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      label: "Cover Image",
      admin: { description: "Featured image for gallery thumbnail" },
    },
    {
      name: "category",
      type: "select",
      label: "Category",
      options: [
        { label: "📸 Events", value: "events" },
        { label: "🏢 Office", value: "office" },
        { label: "👥 Team", value: "team" },
        { label: "🎓 Training", value: "training" },
        { label: "🏆 Awards", value: "awards" },
        { label: "📊 Projects", value: "projects" },
        { label: "🤝 Clients", value: "clients" },
        { label: "📁 Other", value: "other" },
      ],
    },
    {
      name: "images",
      type: "array",
      label: "Gallery Images",
      labels: { singular: "Image", plural: "Images" },
      admin: { initCollapsed: false },
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
          label: "Caption",
          admin: { placeholder: "Optional caption for this image" },
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
          admin: { placeholder: "Describe the image for accessibility" },
        },
      ],
    },
    {
      type: "collapsible",
      label: "🎨 Display Settings",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "layout",
              type: "select",
              label: "Layout Style",
              defaultValue: "grid",
              admin: { width: "50%" },
              options: [
                { label: "Grid", value: "grid" },
                { label: "Masonry", value: "masonry" },
                { label: "Carousel", value: "carousel" },
                { label: "Justified", value: "justified" },
              ],
            },
            {
              name: "columns",
              type: "select",
              label: "Columns",
              defaultValue: "3",
              admin: { width: "50%" },
              options: [
                { label: "2 Columns", value: "2" },
                { label: "3 Columns", value: "3" },
                { label: "4 Columns", value: "4" },
                { label: "5 Columns", value: "5" },
              ],
            },
          ],
        },
        {
          name: "enableLightbox",
          type: "checkbox",
          label: "Enable Lightbox",
          defaultValue: true,
          admin: { description: "Click to enlarge images" },
        },
        {
          name: "showCaptions",
          type: "checkbox",
          label: "Show Captions",
          defaultValue: true,
        },
      ],
    },
    // Sidebar
    {
      name: "imageCount",
      type: "number",
      label: "Image Count",
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            return siblingData?.images?.length || 0;
          },
        ],
      },
    },
    {
      name: "date",
      type: "date",
      label: "Date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayOnly" } },
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured",
      defaultValue: false,
      admin: { position: "sidebar" },
    },
  ],
};
