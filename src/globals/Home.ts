import type { GlobalConfig } from "payload";

/**
 * Editable Home page content — one tab per on-page section. Every field is
 * optional and each section's component falls back to its built-in defaults when
 * empty, so the live homepage is byte-identical until the client edits it.
 *
 * Field names are kept flat (unnamed tabs) so existing data/wiring is stable.
 * Icons, colours and animations stay in code (design); the client edits text,
 * images, links, and list items.
 */
export const Home: GlobalConfig = {
  slug: "home",
  label: "Home Page",
  access: { read: () => true },
  admin: { group: "Site Content" },
  fields: [
    {
      type: "tabs",
      tabs: [
        // ── Hero ───────────────────────────────────────────────────────────
        {
          label: "Hero",
          fields: [
            {
              name: "heroSlides",
              type: "array",
              label: "Hero slides",
              admin: {
                description: "The rotating hero banner. Empty = built-in slides.",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "variant",
                  type: "select",
                  defaultValue: "image",
                  options: [
                    { label: "Photo background", value: "image" },
                    { label: "Infographic (dark panel)", value: "infographic" },
                    { label: "Certifications collage", value: "collage" },
                  ],
                },
                { name: "image", type: "upload", relationTo: "media" },
                { name: "tag", type: "text" },
                {
                  name: "headline",
                  type: "textarea",
                  required: true,
                  admin: { description: "Line breaks stack lines; a period (.) renders in accent." },
                },
                { name: "description", type: "textarea" },
                { name: "alt", type: "text" },
              ],
            },
          ],
        },
        // ── Feature strip ──────────────────────────────────────────────────
        {
          label: "Feature strip",
          fields: [
            {
              name: "featureItems",
              type: "array",
              label: "Feature highlights",
              admin: { description: "The row of check-marked highlights under the hero." },
              fields: [{ name: "text", type: "text", required: true }],
            },
          ],
        },
        // ── Expertise (services) ───────────────────────────────────────────
        {
          label: "Expertise",
          fields: [
            { name: "expertiseEyebrow", type: "text" },
            { name: "expertiseHeadingLead", type: "text", admin: { description: "Dark first part of the heading." } },
            { name: "expertiseHeadingMuted", type: "text", admin: { description: "Grey second part of the heading." } },
            {
              name: "expertiseCards",
              type: "array",
              label: "Service cards",
              admin: { description: "The 3 expertise cards (icons stay fixed by position)." },
              fields: [
                { name: "subtitle", type: "text" },
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea" },
                { name: "href", type: "text" },
                { name: "buttonText", type: "text" },
              ],
            },
          ],
        },
        // ── Certifications ─────────────────────────────────────────────────
        {
          label: "Certifications",
          fields: [
            { name: "certEyebrow", type: "text" },
            { name: "certHeadingLead", type: "text" },
            { name: "certHeadingMuted", type: "text" },
            {
              name: "certItems",
              type: "array",
              label: "Certification cards",
              fields: [
                { name: "name", type: "text", required: true },
                { name: "title", type: "text" },
                { name: "href", type: "text" },
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },
        // ── About summary ──────────────────────────────────────────────────
        {
          label: "About",
          fields: [
            { name: "aboutHeadingLead", type: "text" },
            { name: "aboutHeadingMuted", type: "text" },
            { name: "aboutIdentityTitle", type: "text" },
            {
              name: "aboutParagraphs",
              type: "array",
              label: "Identity paragraphs",
              fields: [{ name: "text", type: "textarea", required: true }],
            },
            { name: "aboutCol1Title", type: "text" },
            {
              name: "aboutCol1Items",
              type: "array",
              label: "Certification training list",
              fields: [{ name: "text", type: "text", required: true }],
            },
            { name: "aboutCol2Title", type: "text" },
            { name: "aboutCol2Text", type: "textarea" },
            { name: "whyHeading", type: "text" },
            {
              name: "whyItems",
              type: "array",
              label: "Why-choose items",
              fields: [
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea" },
              ],
            },
            { name: "heritageEyebrow", type: "text" },
            { name: "heritageHeading", type: "text" },
            { name: "heritageText", type: "textarea" },
            { name: "heritageLinkText", type: "text" },
            { name: "heritageLinkHref", type: "text" },
          ],
        },
        // ── Stats ──────────────────────────────────────────────────────────
        {
          label: "Stats",
          fields: [
            {
              name: "stats",
              type: "array",
              label: "Result stats",
              fields: [
                { name: "value", type: "text", required: true },
                { name: "suffix", type: "text" },
                { name: "label", type: "text", required: true },
              ],
            },
          ],
        },
        // ── Testimonials ───────────────────────────────────────────────────
        {
          label: "Testimonials",
          fields: [
            { name: "testimonialsEyebrow", type: "text" },
            { name: "testimonialsHeadingLead", type: "text" },
            { name: "testimonialsHeadingMuted", type: "text" },
            {
              name: "testimonials",
              type: "array",
              fields: [
                { name: "quote", type: "textarea", required: true },
                { name: "author", type: "text" },
                { name: "role", type: "text" },
                { name: "company", type: "text" },
              ],
            },
          ],
        },
        // ── Google reviews ─────────────────────────────────────────────────
        {
          label: "Reviews",
          fields: [
            { name: "reviewsEyebrow", type: "text" },
            { name: "reviewsHeading", type: "text" },
            { name: "reviewsRating", type: "text" },
            { name: "reviewsGoogleUrl", type: "text" },
            {
              name: "reviewItems",
              type: "array",
              label: "Reviews",
              admin: { description: "The individual review cards." },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "name", type: "text", required: true, admin: { width: "60%" } },
                    { name: "date", type: "text", admin: { width: "40%", description: 'e.g. "a month ago".' } },
                  ],
                },
                {
                  name: "rating",
                  type: "number",
                  defaultValue: 5,
                  min: 1,
                  max: 5,
                  admin: { description: "Star rating 1–5." },
                },
                { name: "text", type: "textarea" },
              ],
            },
          ],
        },
        // ── Final CTA ──────────────────────────────────────────────────────
        {
          label: "Final CTA",
          fields: [
            { name: "ctaHeadingLead", type: "text" },
            { name: "ctaHeadingAccent", type: "text" },
            { name: "ctaParagraph", type: "textarea" },
            { name: "ctaPrimaryText", type: "text" },
            { name: "ctaSecondaryText", type: "text" },
          ],
        },
      ],
    },
  ],
};
