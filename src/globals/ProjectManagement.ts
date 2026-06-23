import type { GlobalConfig } from "payload";

/**
 * Editable Project Management page content. Every field optional with page-level
 * fallbacks (identical until edited). Icons/colours stay in code; the client
 * edits all text, the service cards (incl. their bullet lists), and the FAQ.
 */
export const ProjectManagement: GlobalConfig = {
  slug: "projectManagementPage",
  label: "Project Management Page",
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
          label: "How we help",
          fields: [
            { name: "helpEyebrow", type: "text" },
            { name: "helpHeadingLine1", type: "text" },
            { name: "helpHeadingLine2", type: "text" },
            { name: "helpIntro", type: "textarea" },
            { name: "helpLeftPara1", type: "textarea" },
            { name: "helpLeftPara2", type: "textarea" },
            { name: "helpButtonText", type: "text" },
            { name: "sectorTitle", type: "text" },
            { name: "sectorText", type: "textarea" },
          ],
        },
        {
          label: "Services grid",
          fields: [
            { name: "gridHeading", type: "text" },
            { name: "gridSubtitle", type: "text" },
            {
              name: "subServices",
              type: "array",
              label: "Service cards",
              admin: { description: "Icons/colours stay fixed by position.", initCollapsed: true },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
                {
                  name: "bullets",
                  type: "array",
                  label: "Bullet list",
                  fields: [{ name: "text", type: "text", required: true }],
                },
              ],
            },
          ],
        },
        {
          label: "Consultancy",
          fields: [
            { name: "consEyebrow", type: "text" },
            { name: "consHeadingLine1", type: "text" },
            { name: "consHeadingLine2", type: "text" },
            { name: "consPara1", type: "textarea" },
            { name: "consPara2", type: "textarea" },
            {
              name: "consCards",
              type: "array",
              label: "Consultancy cards",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
          ],
        },
        {
          label: "FAQ",
          fields: [
            { name: "faqEyebrow", type: "text" },
            { name: "faqHeadingLine1", type: "text" },
            { name: "faqHeadingLine2", type: "text" },
            {
              name: "faqItems",
              type: "array",
              fields: [
                { name: "question", type: "text", required: true },
                { name: "answer", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "CTA",
          fields: [
            { name: "ctaHeading", type: "text" },
            { name: "ctaParagraph", type: "textarea" },
            { name: "ctaButtonText", type: "text" },
          ],
        },
      ],
    },
  ],
};
