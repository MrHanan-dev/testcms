import type { GlobalConfig } from "payload";

/**
 * Editable About page content. Like the Home global, every field is optional and
 * the page falls back to its built-in content when empty, so the live page is
 * unchanged until edited.
 *
 * The founder-story paragraphs contain inline bold, so they are intentionally
 * NOT pre-seeded â€” the page renders the exact built-in paragraphs as the
 * fallback. Editing `storyParagraphs` replaces them with plain paragraphs.
 */
export const About: GlobalConfig = {
  slug: "about",
  label: "About Page",
  access: { read: () => true },
  admin: { group: "Site Content" },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            { name: "heroHeadline", type: "textarea" },
            { name: "heroSubheading", type: "textarea" },
          ],
        },
        {
          label: "Founder story",
          fields: [
            { name: "storyEyebrow", type: "text" },
            { name: "storyHeading", type: "text" },
            {
              name: "storyParagraphs",
              type: "array",
              label: "Story paragraphs",
              admin: { description: "Leave empty to keep the current built-in bio (with bold names)." },
              fields: [{ name: "text", type: "textarea", required: true }],
            },
            { name: "founderImage", type: "upload", relationTo: "media" },
            { name: "founderName", type: "text" },
            { name: "founderTitle", type: "text" },
          ],
        },
        {
          label: "Why choose",
          fields: [
            { name: "whyEyebrow", type: "text" },
            { name: "whyHeading", type: "text" },
            { name: "whyIntro", type: "textarea" },
            {
              name: "whyCards",
              type: "array",
              label: "Cards",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea" },
              ],
            },
            { name: "whyQuote", type: "textarea", admin: { description: "The italic closing line." } },
          ],
        },
        {
          label: "Evolution",
          fields: [
            { name: "evoEyebrow", type: "text" },
            { name: "evoHeading", type: "text" },
            { name: "evoSubtitle", type: "textarea" },
          ],
        },
        {
          label: "Advantage (Features)",
          fields: [
            { name: "featuresEyebrow", type: "text" },
            { name: "featuresTitlePrefix", type: "text" },
            { name: "featuresHighlightedName", type: "text" },
            { name: "featuresTitleSuffix", type: "text", admin: { description: 'Fills "...for Your ___?" in the heading.' } },
            { name: "featuresDescription", type: "textarea" },
            {
              name: "featuresDescSuffix",
              type: "text",
              admin: { hidden: true, description: "Legacy field retained to avoid unsafe DB rename prompts." },
            },
            { name: "featuresImage", type: "upload", relationTo: "media" },
            { name: "featuresImageAlt", type: "text" },
            { name: "featuresBadgeValue", type: "text" },
            { name: "featuresBadgeLabel", type: "textarea", admin: { description: "Use a new line where the badge should break." } },
            {
              name: "featuresCards",
              type: "array",
              label: "Advantage cards",
              admin: { description: "Icons stay fixed by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea" },
              ],
            },
          ],
        },
        {
          label: "Success quotes",
          fields: [
            {
              name: "quoteCards",
              type: "array",
              label: "Quote cards",
              fields: [
                { name: "quote", type: "text", required: true },
                { name: "subtitle", type: "textarea" },
              ],
            },
          ],
        },
        {
          label: "FAQ",
          fields: [
            { name: "faqTitle", type: "text" },
            { name: "faqSubtitle", type: "text" },
            { name: "faqDescription", type: "textarea" },
            { name: "faqContactPrompt", type: "text" },
            { name: "faqContactLinkText", type: "text" },
            {
              name: "faqItems",
              type: "array",
              label: "FAQ items",
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




