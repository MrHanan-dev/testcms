import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Redirects — WordPress-style URL redirect manager.
 * Handle 301/302 redirects for moved or renamed content.
 */
export const Redirects: CollectionConfig = {
  slug: "redirects",
  labels: { singular: "Redirect", plural: "Redirects" },
  admin: {
    group: "⚙️ Settings",
    description: "Manage URL redirects for moved or renamed pages.",
    useAsTitle: "from",
    defaultColumns: ["from", "to", "type", "hits", "isActive"],
  },
  hooks: {
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: () => true, // Middleware needs to read these
    create: ({ req: { user } }) => user?.role === "admin" || user?.role === "editor",
    update: ({ req: { user } }) => user?.role === "admin" || user?.role === "editor",
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "from",
          type: "text",
          label: "From URL",
          required: true,
          unique: true,
          admin: {
            width: "50%",
            placeholder: "/old-page-url",
            description: "The old URL path (without domain)",
          },
        },
        {
          name: "to",
          type: "text",
          label: "To URL",
          required: true,
          admin: {
            width: "50%",
            placeholder: "/new-page-url or https://external.com/page",
            description: "The new destination URL",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "type",
          type: "select",
          label: "Redirect Type",
          defaultValue: "301",
          required: true,
          admin: { width: "33%" },
          options: [
            { label: "301 — Permanent", value: "301" },
            { label: "302 — Temporary", value: "302" },
            { label: "307 — Temporary (preserve method)", value: "307" },
            { label: "308 — Permanent (preserve method)", value: "308" },
          ],
        },
        {
          name: "isActive",
          type: "checkbox",
          label: "Active",
          defaultValue: true,
          admin: { width: "33%", description: "Enable this redirect" },
        },
        {
          name: "hits",
          type: "number",
          label: "Hit Count",
          defaultValue: 0,
          admin: {
            width: "33%",
            readOnly: true,
            description: "Times this redirect was used",
          },
        },
      ],
    },
    {
      name: "note",
      type: "textarea",
      label: "Internal Note",
      admin: {
        placeholder: "Why was this redirect created?",
        description: "For your reference only (not public)",
      },
    },
    {
      name: "expiresAt",
      type: "date",
      label: "Expires",
      admin: {
        description: "Optional: auto-disable after this date",
        date: { pickerAppearance: "dayOnly" },
      },
    },
  ],
};
