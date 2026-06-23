import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Team Members — Staff directory and profiles.
 * WordPress-style team management.
 */
export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  labels: { singular: "Team Member", plural: "Team Members" },
  admin: {
    group: "📝 Content",
    description: "Manage your team — staff profiles, photos, and social links.",
    useAsTitle: "name",
    defaultColumns: ["name", "position", "department", "order", "status"],
  },
  hooks: {
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Photo",
      admin: {
        description: "Professional headshot (square, min 400x400px)",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Full Name",
          required: true,
          admin: { width: "50%", placeholder: "e.g. Engr. Syed Amjad Iqbal" },
        },
        {
          name: "position",
          type: "text",
          label: "Position/Title",
          required: true,
          admin: { width: "50%", placeholder: "e.g. Director & Principal Consultant" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "department",
          type: "select",
          label: "Department",
          admin: { width: "50%" },
          options: [
            { label: "Leadership", value: "leadership" },
            { label: "Consulting", value: "consulting" },
            { label: "Training", value: "training" },
            { label: "Operations", value: "operations" },
            { label: "Sales", value: "sales" },
            { label: "Marketing", value: "marketing" },
            { label: "Support", value: "support" },
          ],
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "active",
          admin: { width: "50%" },
          options: [
            { label: "✅ Active", value: "active" },
            { label: "🗄️ Inactive", value: "inactive" },
          ],
        },
      ],
    },
    {
      name: "bio",
      type: "textarea",
      label: "Biography",
      admin: {
        placeholder: "Brief professional biography...",
        rows: 4,
      },
    },
    {
      name: "qualifications",
      type: "array",
      label: "Qualifications & Certifications",
      labels: { singular: "Qualification", plural: "Qualifications" },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          admin: { placeholder: "e.g. PMP, MBA, MRICS" },
        },
      ],
    },
    {
      type: "collapsible",
      label: "📞 Contact Information",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "email",
              type: "email",
              label: "Email",
              admin: { width: "50%" },
            },
            {
              name: "phone",
              type: "text",
              label: "Phone",
              admin: { width: "50%" },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "🌐 Social Links",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "linkedin",
              type: "text",
              label: "LinkedIn",
              admin: { width: "50%", placeholder: "https://linkedin.com/in/..." },
            },
            {
              name: "twitter",
              type: "text",
              label: "Twitter/X",
              admin: { width: "50%", placeholder: "https://twitter.com/..." },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "facebook",
              type: "text",
              label: "Facebook",
              admin: { width: "50%", placeholder: "https://facebook.com/..." },
            },
            {
              name: "website",
              type: "text",
              label: "Personal Website",
              admin: { width: "50%", placeholder: "https://..." },
            },
          ],
        },
      ],
    },
    // Sidebar
    {
      name: "order",
      type: "number",
      label: "Display Order",
      defaultValue: 0,
      admin: { position: "sidebar", description: "Lower numbers appear first" },
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured",
      defaultValue: false,
      admin: { position: "sidebar", description: "Show prominently" },
    },
    {
      name: "showOnAbout",
      type: "checkbox",
      label: "Show on About Page",
      defaultValue: true,
      admin: { position: "sidebar" },
    },
  ],
};
