import type { GlobalConfig } from "payload";
import { seoTab } from "@/lib/seoFields";

/**
 * Editable Project Management page content. Every field optional with page-level
 * fallbacks (identical until edited). Icons/colours stay in code; the client
 * edits all text, the service cards (incl. their bullet lists), and the FAQ.
 */
export const ProjectManagement: GlobalConfig = {
  slug: "projectManagementPage",
  label: "Project Management",
  access: { read: () => true },
  admin: {
    group: "💼 Service Pages",
    description: "Edit the Project Management services page — all PM service offerings and FAQs.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "🎯 Hero Section",
          description: "The banner at the top",
          fields: [
            { name: "heroTitle", type: "text", label: "Page Title", admin: { placeholder: "e.g. Project Management" } },
            { name: "heroDescription", type: "textarea", label: "Description" },
            { name: "heroBreadcrumb", type: "text", label: "Breadcrumb Label" },
          ],
        },
        {
          label: "🤝 How We Help",
          description: "Main value proposition",
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
          label: "💼 Services Grid",
          description: "All PM service offerings",
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
          label: "📊 Consultancy",
          description: "Additional consulting services",
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
          label: "❓ FAQ",
          description: "Frequently asked questions",
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
          label: "🚀 Call to Action",
          description: "Final CTA section",
          fields: [
            { name: "ctaHeading", type: "text" },
            { name: "ctaParagraph", type: "textarea" },
            { name: "ctaButtonText", type: "text" },
          ],
        },
        seoTab,
      ],
    },
  ],
};
