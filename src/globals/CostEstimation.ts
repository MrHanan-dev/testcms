import type { GlobalConfig } from "payload";

/**
 * Editable Cost Estimation page. Every field optional with page-level fallbacks
 * (from src/data/ceContent.ts). Icons/colours/form stay in code; the client
 * edits all text, service cards (incl. images), industries, testimonials, FAQ.
 */
export const CostEstimation: GlobalConfig = {
  slug: "costEstimationPage",
  label: "Cost Estimation Page",
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
            { name: "introHeading", type: "textarea" },
            { name: "introParagraph", type: "textarea" },
          ],
        },
        {
          label: "Services",
          fields: [
            {
              name: "mainServices",
              type: "array",
              label: "Service blocks",
              admin: { initCollapsed: true },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
                { name: "image", type: "upload", relationTo: "media", admin: { description: "Leave empty to keep the current image." } },
                { name: "containImage", type: "checkbox", admin: { description: "Fit the image inside (contain) instead of cover." } },
              ],
            },
          ],
        },
        {
          label: "Why choose",
          fields: [
            { name: "whyEyebrow", type: "text" },
            { name: "whyHeadingLine1", type: "text" },
            { name: "whyHeadingLine2", type: "text" },
            { name: "whyParagraph", type: "textarea" },
            {
              name: "whyChecklist",
              type: "array",
              fields: [{ name: "text", type: "text", required: true }],
            },
          ],
        },
        {
          label: "Industries",
          fields: [
            { name: "sectorsEyebrow", type: "text" },
            { name: "sectorsHeadingLead", type: "text" },
            { name: "sectorsHeadingMuted", type: "text" },
            { name: "sectorsParagraph", type: "textarea" },
            {
              name: "industries",
              type: "array",
              admin: { description: "Icons stay fixed by position." },
              fields: [{ name: "name", type: "text", required: true }],
            },
          ],
        },
        {
          label: "Testimonials",
          fields: [
            { name: "testEyebrow", type: "text" },
            { name: "testHeading", type: "text" },
            {
              name: "testimonials",
              type: "array",
              fields: [
                { name: "quote", type: "textarea", required: true },
                { name: "author", type: "text" },
              ],
            },
          ],
        },
        {
          label: "FAQ",
          fields: [
            { name: "faqTitle", type: "text" },
            { name: "faqSubtitle", type: "text" },
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
          label: "Quote form",
          fields: [
            { name: "formEyebrow", type: "text" },
            { name: "formHeading", type: "text" },
            { name: "formParagraph", type: "textarea" },
            { name: "feature1Title", type: "text" },
            { name: "feature1Text", type: "textarea" },
            { name: "feature2Title", type: "text" },
            { name: "feature2Text", type: "textarea" },
            { name: "urgentTitle", type: "text" },
            { name: "urgentText", type: "textarea" },
            { name: "urgentPhone", type: "text" },
          ],
        },
        {
          label: "Career",
          fields: [
            { name: "careerEyebrow", type: "text" },
            { name: "careerHeading", type: "text" },
            { name: "careerParagraph", type: "textarea" },
            { name: "careerButtonText", type: "text" },
          ],
        },
      ],
    },
  ],
};
