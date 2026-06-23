import type { GlobalConfig } from "payload";

const list = (name: string, label?: string) => ({
  name,
  type: "array" as const,
  ...(label ? { label } : {}),
  fields: [{ name: "text", type: "text" as const, required: true }],
});

/**
 * Editable Partner (Training Partner Program) page. Icons, form field labels,
 * placeholders and layout stay in code; all marketing copy is editable here.
 */
export const Partner: GlobalConfig = {
  slug: "partnerPage",
  label: "Partner Page",
  access: { read: () => true },
  admin: { group: "Site Content" },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            { name: "heroEyebrow", type: "text" },
            { name: "heroTitleLead", type: "text" },
            { name: "heroTitleAccent", type: "text" },
            { name: "heroDescription", type: "textarea" },
            { name: "heroButton", type: "text" },
          ],
        },
        {
          label: "Introduction",
          fields: [
            { name: "introHeading", type: "text" },
            { name: "introPara1", type: "textarea" },
            { name: "introPara2", type: "textarea" },
            { name: "introQuote", type: "textarea" },
            { name: "introQuoteLabel", type: "text" },
          ],
        },
        {
          label: "Who should apply",
          fields: [
            { name: "whoEyebrow", type: "text" },
            { name: "whoHeading", type: "text" },
            {
              name: "whoCards",
              type: "array",
              admin: { description: "3 cards. Icons are fixed in code by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
            { name: "whoBannerHeading", type: "text" },
            { name: "whoBannerPara", type: "text" },
          ],
        },
        {
          label: "Benefits",
          fields: [
            { name: "benefitsEyebrow", type: "text" },
            { name: "benefitsHeading", type: "text" },
            {
              name: "benefits",
              type: "array",
              admin: { description: "4 benefit cards. Icons are fixed in code by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
          ],
        },
        {
          label: "Lead CTA",
          fields: [
            { name: "leadHeading", type: "text" },
            { name: "leadPara", type: "textarea" },
            { name: "leadButton", type: "text" },
          ],
        },
        {
          label: "Application form",
          fields: [
            { name: "formHeading", type: "text" },
            { name: "formIntro", type: "textarea" },
            list("formSteps", "Application steps"),
            { name: "successHeading", type: "text" },
            { name: "successParaBody", type: "textarea", admin: { description: "Text after the bold TheAgileNest line." } },
            { name: "successButton", type: "text" },
            { name: "submitButton", type: "text" },
            { name: "submittingButton", type: "text" },
          ],
        },
      ],
    },
  ],
};
