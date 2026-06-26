import type { GlobalConfig } from "payload";
import { seoFields } from "@/lib/seoFields";
import { logGlobalChange } from "../lib/activityLogger";

/**
 * Terms of Service — Legal page content.
 */
export const Terms: GlobalConfig = {
  slug: "termsPage",
  label: "Terms of Service",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "📋 Legal Pages",
    description: "Edit the Terms of Service page content.",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Page Title",
          defaultValue: "Terms of Service",
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
      label: "Terms Sections",
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
          admin: { placeholder: "e.g. User Responsibilities" },
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
