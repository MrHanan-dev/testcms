import type { GlobalConfig } from "payload";
import { seoTab } from "@/lib/seoFields";
import { logGlobalChange } from "../lib/activityLogger";

const list = (name: string, label?: string) => ({
  name,
  type: "array" as const,
  ...(label ? { label } : {}),
  fields: [{ name: "text", type: "text" as const, required: true }],
});

/**
 * Editable PMP page — full granular. Icons/charts/gradients stay in code; all
 * text, lists, cards, pricing and the FAQ are editable. The four eligibility
 * pathways' educational-background and mandatory-training notes are optional
 * rich-text (so embedded standards links are preserved); empty = the page's
 * exact built-in markup.
 */
export const Pmp: GlobalConfig = {
  slug: "pmpPage",
  label: "PMP Certification",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "🎓 Certification & Training",
    description: "Edit the PMP certification page — eligibility, curriculum, pricing, and FAQs.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "🎯 Hero Section",
          description: "The banner at the top of the PMP page",
          fields: [
            {
              name: "heroTitle",
              type: "text",
              label: "Page Title",
              admin: { placeholder: "e.g. PMP® Certification" },
            },
            {
              name: "heroSubtitle",
              type: "text",
              label: "Subtitle",
              admin: { placeholder: "e.g. Project Management Professional" },
            },
            {
              name: "heroDescription",
              type: "textarea",
              label: "Description",
              admin: { placeholder: "Brief description of the certification..." },
            },
            {
              name: "heroBadgeImage",
              type: "upload",
              relationTo: "media",
              label: "Certification Badge",
              admin: { description: "💡 Upload the PMP badge image" },
            },
          ],
        },
        {
          label: "📋 Overview",
          description: "What is PMP and who is it for",
          fields: [
            { name: "descEyebrow", type: "text" },
            { name: "descHeading", type: "text" },
            { name: "descSubtitle", type: "text" },
            list("descParagraphs", "Paragraphs"),
            { name: "descCallout", type: "textarea" },
            { name: "gameChangerHeading", type: "text" },
            {
              name: "gameChangerItems",
              type: "array",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "text" },
              ],
            },
            { name: "whoHeading", type: "text" },
            { name: "whoIntro", type: "textarea" },
            list("whoAudience", "Audience list"),
            { name: "atpTitle", type: "text" },
            { name: "atpSubtitle", type: "text" },
          ],
        },
        {
          label: "✅ Eligibility",
          description: "Requirements to qualify for PMP",
          fields: [
            { name: "eligibilityHeading", type: "text", label: "Section Heading" },
            { name: "eligibilityIntro", type: "textarea", label: "Introduction" },
            {
              name: "pathways",
              type: "array",
              label: "Eligibility Pathways",
              labels: { singular: "Pathway", plural: "Pathways" },
              admin: { initCollapsed: true, description: "💡 4 pathways based on education level. Leave rich-text empty to keep defaults." },
              fields: [
                { name: "label", type: "text", required: true },
                { name: "experience", type: "text", admin: { description: 'e.g. "60 months / 5 years".' } },
                { name: "eduBackground", type: "richText", admin: { description: "Educational background (optional override)." } },
                { name: "mandatoryNote", type: "richText", admin: { description: "Mandatory training note (optional override)." } },
              ],
            },
          ],
        },
        {
          label: "📚 Curriculum",
          description: "What we teach in the course",
          fields: [
            { name: "curriculumHeading", type: "text" },
            { name: "curriculumSubtitle", type: "text" },
            {
              name: "domainFeatures",
              type: "array",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
            { name: "whatWeOfferHeading", type: "text" },
            list("whatWeOffer", "What we offer"),
            { name: "syllabusButton", type: "text" },
          ],
        },
        {
          label: "📝 Exam Format",
          description: "About the PMP exam",
          fields: [
            { name: "examFormatHeading", type: "text" },
            {
              name: "examFormat",
              type: "array",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "subtitle", type: "text" },
                { name: "desc", type: "text" },
              ],
            },
            { name: "questionTypesHeading", type: "text" },
            { name: "questionTypesSubtitle", type: "text" },
            {
              name: "questionTypes",
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
          description: "Benefits of our training program",
          fields: [
            { name: "whyTrainEyebrow", type: "text" },
            { name: "whyTrainHeading", type: "text" },
            { name: "whyTrainSubheading", type: "text" },
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
            { name: "whyTrainCtaHeading", type: "text" },
            { name: "whyTrainCtaPara", type: "textarea" },
            { name: "whyTrainCtaButton", type: "text" },
          ],
        },
        {
          label: "✨ Why We're Right",
          description: "What makes us different",
          fields: [
            { name: "rightHeadingLead", type: "text" },
            { name: "rightHeadingAccent", type: "text" },
            { name: "rightParagraph", type: "textarea" },
            {
              name: "rightItems",
              type: "array",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
            { name: "rightCardHeading", type: "text" },
            { name: "rightCardPara", type: "textarea" },
            { name: "rightStat1Value", type: "text" },
            { name: "rightStat1Label", type: "text" },
            { name: "rightStat2Value", type: "text" },
            { name: "rightStat2Label", type: "text" },
            { name: "rightCardButton", type: "text" },
          ],
        },
        {
          label: "💰 Investment & Pricing",
          description: "Course fees and exam costs",
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
            { name: "importantNote", type: "textarea" },
          ],
        },
        {
          label: "📋 Registration",
          description: "How to sign up",
          fields: [
            {
              type: "collapsible",
              label: "Booking Form",
              admin: { initCollapsed: false },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "bookingFormTitle", type: "text", label: "Form Title", defaultValue: "Register Now", admin: { width: "50%" } },
                    { name: "bookingFormSubtitle", type: "text", label: "Form Subtitle", admin: { width: "50%", placeholder: "e.g. Secure your spot..." } },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    { name: "bookingSubmitButton", type: "text", label: "Submit Button", defaultValue: "Confirm Registration", admin: { width: "50%" } },
                    { name: "bookingFooterNote", type: "text", label: "Footer Note", defaultValue: "No upfront payment required to register", admin: { width: "50%" } },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    { name: "bookingSuccessTitle", type: "text", label: "Success Title", defaultValue: "Booking Received!", admin: { width: "50%" } },
                    { name: "bookingSuccessMessage", type: "textarea", label: "Success Message", admin: { width: "50%", placeholder: "Custom success message..." } },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "Corporate Training Section",
              admin: { initCollapsed: true },
              fields: [
                { name: "corporateEyebrow", type: "text" },
                { name: "corporateHeading", type: "text" },
                { name: "corporatePara", type: "textarea" },
                { name: "corporateButton", type: "text" },
              ],
            },
            {
              type: "collapsible",
              label: "Testimonial",
              admin: { initCollapsed: true },
              fields: [
                { name: "testimonialQuote", type: "textarea" },
                { name: "testimonialAuthor", type: "text" },
                { name: "testimonialRole", type: "text" },
              ],
            },
          ],
        },
        {
          label: "❓ FAQ",
          description: "Frequently asked questions",
          fields: [
            {
              type: "row",
              fields: [
                { name: "faqTitle", type: "text", label: "Section Title", admin: { width: "50%" } },
                { name: "faqSubtitle", type: "text", label: "Subtitle", admin: { width: "50%" } },
              ],
            },
            { name: "faqDescription", type: "textarea", label: "Description" },
            {
              name: "faqItems",
              type: "array",
              label: "FAQ Items",
              labels: { singular: "Question", plural: "Questions" },
              admin: { initCollapsed: true },
              fields: [
                { name: "question", type: "text", label: "Question", required: true },
                { name: "answer", type: "textarea", label: "Answer", required: true },
              ],
            },
          ],
        },
        seoTab,
      ],
    },
  ],
};
