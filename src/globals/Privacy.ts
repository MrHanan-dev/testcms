import type { GlobalConfig } from "payload";
import { seoFields } from "@/lib/seoFields";
import { logGlobalChange } from "../lib/activityLogger";

/**
 * Privacy Policy — Legal page content.
 */
export const Privacy: GlobalConfig = {
  slug: "privacyPage",
  label: "Privacy Policy",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "📋 Legal Pages",
    description: "Edit the Privacy Policy page content.",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Page Title",
          defaultValue: "Privacy Policy",
          admin: { width: "50%" },
        },
        {
          name: "lastUpdated",
          type: "text",
          label: "Last Updated",
          admin: { placeholder: "e.g. June 2026", width: "50%" },
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      label: "Full Content (Rich Text)",
      admin: {
        description: "💡 Use this for formatted content with headings, lists, and links",
      },
    },
    {
      name: "sections",
      type: "array",
      label: "Policy Sections",
      labels: { singular: "Section", plural: "Sections" },
      admin: {
        description: "💡 Alternative to rich text — add structured sections",
        initCollapsed: true,
      },
      fields: [
        {
          name: "heading",
          type: "text",
          label: "Section Heading",
          required: true,
          admin: { placeholder: "e.g. Information We Collect" },
        },
        {
          name: "body",
          type: "textarea",
          label: "Section Content",
          required: true,
        },
      ],
    },
    ...seoFields,
  ],
};
