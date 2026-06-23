import type { GlobalConfig } from "payload";

/**
 * Editable About page content. Like the Home global, every field is optional and
 * the page falls back to its built-in content when empty, so the live page is
 * unchanged until edited.
 *
 * The founder-story paragraphs contain inline bold, so they are intentionally
 * NOT pre-seeded — the page renders the exact built-in paragraphs as the
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
      ],
    },
  ],
};
