import type { GlobalConfig } from "payload";

/**
 * Editable Consulting page content. Every field optional with built-in
 * fallbacks on the page, so the live page is identical until edited. Icons,
 * colours and the decorative outcome panel stay in code; the client edits text
 * and list items.
 */
export const Consulting: GlobalConfig = {
  slug: "consultingPage",
  label: "Consulting Page",
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
            { name: "heroBreadcrumb", type: "text", admin: { description: 'Shown as "Back to Home / ___".' } },
          ],
        },
        {
          label: "Intro",
          fields: [
            { name: "introEyebrow", type: "text" },
            { name: "introHeadingLine1", type: "text" },
            { name: "introHeadingLine2", type: "text", admin: { description: "Second line of the heading (after the break)." } },
            { name: "introParagraph", type: "textarea" },
          ],
        },
        {
          label: "Services grid",
          fields: [
            {
              name: "serviceCards",
              type: "array",
              label: "Service cards",
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
              label: "Checklist",
              fields: [{ name: "text", type: "text", required: true }],
            },
            { name: "outcomeButtonText", type: "text" },
          ],
        },
      ],
    },
  ],
};
