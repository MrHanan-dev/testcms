import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Testimonials — Client reviews and testimonials.
 * WordPress-style testimonial management.
 */
export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Testimonial", plural: "Testimonials" },
  admin: {
    group: "📝 Content",
    description: "Manage client testimonials and reviews displayed on your website.",
    useAsTitle: "name",
    defaultColumns: ["name", "company", "rating", "featured", "status"],
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
          name: "name",
          type: "text",
          label: "Client Name",
          required: true,
          admin: { width: "50%", placeholder: "e.g. John Smith" },
        },
        {
          name: "position",
          type: "text",
          label: "Position/Title",
          admin: { width: "50%", placeholder: "e.g. Project Manager" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "company",
          type: "text",
          label: "Company",
          admin: { width: "50%", placeholder: "e.g. ABC Construction Ltd" },
        },
        {
          name: "location",
          type: "text",
          label: "Location",
          admin: { width: "50%", placeholder: "e.g. Auckland, NZ" },
        },
      ],
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Photo",
      admin: {
        description: "Client photo (square, min 200x200px)",
      },
    },
    {
      name: "content",
      type: "textarea",
      label: "Testimonial",
      required: true,
      admin: {
        placeholder: "What did the client say about your services?",
        rows: 4,
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "rating",
          type: "select",
          label: "Rating",
          defaultValue: "5",
          admin: { width: "33%" },
          options: [
            { label: "⭐⭐⭐⭐⭐ 5 Stars", value: "5" },
            { label: "⭐⭐⭐⭐ 4 Stars", value: "4" },
            { label: "⭐⭐⭐ 3 Stars", value: "3" },
            { label: "⭐⭐ 2 Stars", value: "2" },
            { label: "⭐ 1 Star", value: "1" },
          ],
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "published",
          admin: { width: "33%" },
          options: [
            { label: "✅ Published", value: "published" },
            { label: "📝 Draft", value: "draft" },
            { label: "🗄️ Archived", value: "archived" },
          ],
        },
        {
          name: "featured",
          type: "checkbox",
          label: "Featured",
          defaultValue: false,
          admin: { width: "33%", description: "Show on homepage" },
        },
      ],
    },
    {
      name: "service",
      type: "select",
      label: "Related Service",
      options: [
        { label: "PMP Certification", value: "pmp" },
        { label: "CAPM Certification", value: "capm" },
        { label: "PMI-CP Certification", value: "pmi-cp" },
        { label: "Project Management", value: "project-management" },
        { label: "Cost Estimation", value: "cost-estimation" },
        { label: "Contract Management", value: "contract-management" },
        { label: "Consulting", value: "consulting" },
        { label: "Training", value: "training" },
        { label: "General", value: "general" },
      ],
    },
    {
      name: "videoUrl",
      type: "text",
      label: "Video Testimonial URL",
      admin: {
        placeholder: "https://youtube.com/watch?v=...",
        description: "Optional: YouTube or Vimeo URL",
      },
    },
    // Sidebar
    {
      name: "date",
      type: "date",
      label: "Date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayOnly" } },
    },
    {
      name: "order",
      type: "number",
      label: "Display Order",
      defaultValue: 0,
      admin: { position: "sidebar", description: "Lower numbers appear first" },
    },
  ],
};
