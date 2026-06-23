import type { GlobalConfig } from "payload";
import { seoTab } from "@/lib/seoFields";

const list = (name: string, label?: string) => ({
  name,
  type: "array" as const,
  ...(label ? { label } : {}),
  fields: [{ name: "text", type: "text" as const, required: true }],
});

/**
 * Editable CAPM page — full granular. Icons/charts/gradients stay in code; all
 * text, lists, cards, pricing and the FAQ are editable. The eligibility "Good
 * news" callout has an optional rich-text override (so inline emphasis/links can
 * be preserved); empty = the page's exact built-in markup.
 */
export const Capm: GlobalConfig = {
  slug: "capmPage",
  label: "CAPM Certification",
  access: { read: () => true },
  admin: {
    group: "🎓 Certification & Training",
    description: "Edit the CAPM certification page — eligibility, curriculum, pricing, and FAQs.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "🎯 Hero Section",
          description: "The banner at the top",
          fields: [
            { name: "heroTitle", type: "text", label: "Page Title", admin: { placeholder: "e.g. CAPM® Certification" } },
            { name: "heroSubtitle", type: "text", label: "Subtitle" },
            { name: "heroDescription", type: "textarea", label: "Description" },
            { name: "heroBadgeImage", type: "upload", relationTo: "media", label: "Certification Badge", admin: { description: "💡 Upload the CAPM badge image" } },
          ],
        },
        {
          label: "📋 Overview",
          description: "What is CAPM and who is it for",
          fields: [
            { name: "detailsBadge", type: "text" },
            { name: "detailsHeading", type: "text" },
            { name: "detailsParagraph", type: "textarea" },
            {
              name: "benefits",
              type: "array",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "text" },
              ],
            },
            { name: "whoHeading", type: "text" },
            { name: "whoIntro", type: "textarea" },
            list("whoAudience", "Audience list"),
          ],
        },
        {
          label: "✅ Eligibility",
          description: "Requirements to qualify",
          fields: [
            { name: "eligibilityHeading", type: "text" },
            { name: "eligibilityIntro", type: "textarea" },
            { name: "eduCardTitle", type: "text" },
            { name: "eduCardSubtitle", type: "text" },
            list("eduCardItems", "Education requirements"),
            { name: "pmEduCardTitle", type: "text" },
            { name: "pmEduCardSubtitle", type: "text" },
            list("pmEduCardItems", "PM education requirements"),
            { name: "eligibilityCalloutLead", type: "text" },
            { name: "eligibilityCalloutBody", type: "textarea" },
            { name: "eligibilityCalloutRich", type: "richText", admin: { description: "Optional rich-text override for the callout. Leave empty to keep the current text." } },
          ],
        },
        {
          label: "📚 Curriculum",
          description: "What we teach",
          fields: [
            { name: "curriculumHeading", type: "text" },
            { name: "curriculumSubtitle", type: "text" },
            {
              name: "curriculum",
              type: "array",
              admin: { description: "4 cards. The percentage badge is editable text." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "percent", type: "text" },
                { name: "desc", type: "textarea" },
              ],
            },
            { name: "includedHeading", type: "text" },
            list("included", "What's included"),
            { name: "includedButton", type: "text" },
            { name: "examFormatHeading", type: "text" },
            {
              name: "examFormat",
              type: "array",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "text" },
              ],
            },
          ],
        },
        {
          label: "🏆 Why Train With Us",
          fields: [
            { name: "whyTrainEyebrow", type: "text" },
            { name: "whyTrainHeading", type: "text" },
            { name: "whyTrainPara1", type: "textarea" },
            { name: "whyTrainPara2", type: "textarea" },
            {
              name: "whyTrainFeatures",
              type: "array",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
          ],
        },
        {
          label: "💰 Investment & Pricing",
          fields: [
            { name: "investEyebrow", type: "text" },
            { name: "investHeading", type: "text" },
            { name: "investSubtitle", type: "text" },
            {
              name: "trainingOptions",
              type: "array",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
            { name: "prepHeading", type: "text" },
            list("prepMaterials", "Prep materials"),
            { name: "examFeeHeading", type: "text" },
            { name: "memberFee", type: "text" },
            { name: "nonMemberFee", type: "text" },
            { name: "feeNote", type: "textarea" },
            { name: "courseFeesHeading", type: "text" },
            { name: "courseFeesIntro", type: "textarea" },
            { name: "contactEmail", type: "text" },
            { name: "contactPhone", type: "text" },
            list("discounts", "Discounts"),
            { name: "importantNoteLabel", type: "text" },
            { name: "importantNoteBody", type: "textarea" },
          ],
        },
        {
          label: "📋 Registration",
          fields: [
            {
              type: "collapsible",
              label: "Booking Form",
              fields: [
                { name: "bookingFormTitle", type: "text", defaultValue: "Register Now" },
                { name: "bookingFormSubtitle", type: "text" },
                { name: "bookingSubmitButton", type: "text", defaultValue: "Confirm Registration" },
                { name: "bookingFooterNote", type: "text", defaultValue: "No upfront payment required to register" },
                { name: "bookingSuccessTitle", type: "text", defaultValue: "Booking Received!" },
                { name: "bookingSuccessMessage", type: "textarea" },
              ],
            },
            { name: "registerCardHeading", type: "text" },
            { name: "registerCardPara", type: "textarea" },
            { name: "registerCardButton", type: "text" },
            { name: "testimonialQuote", type: "textarea" },
            { name: "testimonialAuthor", type: "text" },
          ],
        },
        {
          label: "❓ FAQ",
          description: "Frequently asked questions",
          fields: [
            { name: "faqTitle", type: "text" },
            { name: "faqSubtitle", type: "text" },
            { name: "faqDescription", type: "textarea" },
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
        seoTab,
      ],
    },
  ],
};
