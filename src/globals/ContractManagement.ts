import type { GlobalConfig } from "payload";
import { seoTab } from "@/lib/seoFields";

/** Editable Contract Management page (same structure as Consulting). */
export const ContractManagement: GlobalConfig = {
  slug: "contractManagementPage",
  label: "Contract Management",
  access: { read: () => true },
  admin: {
    group: "💼 Service Pages",
    description: "Edit the Contract Management page — service cards and outcome section.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "🎯 Hero Section",
          description: "The banner at the top",
          fields: [
            { name: "heroTitle", type: "text" },
            { name: "heroDescription", type: "textarea" },
            { name: "heroBreadcrumb", type: "text" },
          ],
        },
        {
          label: "📝 Introduction",
          description: "Opening section",
          fields: [
            { name: "introEyebrow", type: "text" },
            { name: "introHeadingLine1", type: "text" },
            { name: "introHeadingLine2", type: "text" },
            { name: "introParagraph", type: "textarea" },
          ],
        },
        {
          label: "💼 Services",
          description: "Service offerings",
          fields: [
            {
              name: "serviceCards",
              type: "array",
              admin: { description: "Icons/colours stay fixed by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
          ],
        },
        {
          label: "🎯 Outcomes",
          description: "What clients achieve",
          fields: [
            { name: "outcomeBadgeHeading", type: "text" },
            { name: "outcomeBadgeText", type: "textarea" },
            { name: "outcomeHeading", type: "text" },
            { name: "outcomeParagraph", type: "textarea" },
            {
              name: "outcomeChecklist",
              type: "array",
              fields: [{ name: "text", type: "text", required: true }],
            },
            { name: "outcomeButtonText", type: "text" },
          ],
        },
        seoTab,
      ],
    },
  ],
};
