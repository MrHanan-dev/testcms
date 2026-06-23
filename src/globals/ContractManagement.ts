import type { GlobalConfig } from "payload";

/** Editable Contract Management page (same structure as Consulting). */
export const ContractManagement: GlobalConfig = {
  slug: "contractManagementPage",
  label: "Contract Management Page",
  access: { read: () => true },
  admin: { group: "Service Pages" },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            { name: "heroTitle", type: "text" },
            { name: "heroDescription", type: "textarea" },
            { name: "heroBreadcrumb", type: "text" },
          ],
        },
        {
          label: "Intro",
          fields: [
            { name: "introEyebrow", type: "text" },
            { name: "introHeadingLine1", type: "text" },
            { name: "introHeadingLine2", type: "text" },
            { name: "introParagraph", type: "textarea" },
          ],
        },
        {
          label: "Services grid",
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
          label: "Outcome",
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
      ],
    },
  ],
};
