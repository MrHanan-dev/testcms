import type { GlobalConfig } from "payload";

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
  label: "PMP Page",
  access: { read: () => true },
  admin: { group: "Certification Pages" },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            { name: "heroTitle", type: "text" },
            { name: "heroSubtitle", type: "text" },
            { name: "heroDescription", type: "textarea" },
          ],
        },
        {
          label: "Overview",
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
          label: "Eligibility",
          fields: [
            { name: "eligibilityHeading", type: "text" },
            { name: "eligibilityIntro", type: "textarea" },
            {
              name: "pathways",
              type: "array",
              label: "Pathways",
              admin: { initCollapsed: true, description: "4 pathways. Leave rich-text empty to keep the current standardized text with its links." },
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
          label: "Curriculum",
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
          label: "Exam",
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
          label: "Why train",
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
          label: "Why right",
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
          label: "Investment",
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
          label: "Registration",
          fields: [
            { name: "corporateEyebrow", type: "text" },
            { name: "corporateHeading", type: "text" },
            { name: "corporatePara", type: "textarea" },
            { name: "corporateButton", type: "text" },
            { name: "testimonialQuote", type: "textarea" },
            { name: "testimonialAuthor", type: "text" },
            { name: "testimonialRole", type: "text" },
          ],
        },
        {
          label: "FAQ",
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
      ],
    },
  ],
};
