import type { GlobalConfig } from "payload";
import { logGlobalChange } from "@/lib/activityLogger";
import { seoTab } from "@/lib/seoFields";

/**
 * About Page — Company story and values.
 */
export const About: GlobalConfig = {
  slug: "about",
  label: "About Page",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "🏠 Main Pages",
    description: "Edit the About page — founder story, company values, and FAQs.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // ── Hero ────────────────────────────────────────────────────────────
        {
          label: "🎯 Hero Section",
          description: "The banner at the top of the About page",
          fields: [
            {
              name: "heroHeadline",
              type: "textarea",
              label: "Main Headline",
              admin: { placeholder: "e.g. Where Knowledge Meets Experience" },
            },
            {
              name: "heroSubheading",
              type: "textarea",
              label: "Subheading",
              admin: { placeholder: "Brief description of the company mission..." },
            },
          ],
        },

        // ── Founder Story ───────────────────────────────────────────────────
        {
          label: "👤 Founder Story",
          description: "The founder's biography and photo",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "storyEyebrow",
                  type: "text",
                  label: "Section Label",
                  admin: { placeholder: "e.g. Our Founder's Story", width: "50%" },
                },
                {
                  name: "storyHeading",
                  type: "text",
                  label: "Heading",
                  admin: { placeholder: "e.g. Passion, Purpose, and 17 Years of Delivery", width: "50%" },
                },
              ],
            },
            {
              name: "storyParagraphs",
              type: "array",
              label: "Story Paragraphs",
              labels: { singular: "Paragraph", plural: "Paragraphs" },
              admin: {
                description: "💡 Leave empty to keep the current built-in biography",
              },
              fields: [
                {
                  name: "text",
                  type: "textarea",
                  label: "Paragraph",
                  required: true,
                },
              ],
            },
            {
              type: "collapsible",
              label: "📷 Founder Photo & Details",
              fields: [
                {
                  name: "founderImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Founder Photo",
                  admin: { description: "Professional headshot (recommended: 800x1000px)" },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "founderName",
                      type: "text",
                      label: "Name",
                      admin: { placeholder: "e.g. Engr. Syed Amjad Iqbal", width: "50%" },
                    },
                    {
                      name: "founderTitle",
                      type: "text",
                      label: "Title",
                      admin: { placeholder: "e.g. CEO & Certified Trainer", width: "50%" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Why Choose Us ───────────────────────────────────────────────────
        {
          label: "🏆 Why Choose Us",
          description: "Key differentiators and value propositions",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "whyEyebrow",
                  type: "text",
                  label: "Section Label",
                  admin: { placeholder: "e.g. Who We Are", width: "50%" },
                },
                {
                  name: "whyHeading",
                  type: "text",
                  label: "Heading",
                  admin: { placeholder: "e.g. Why Choose TheAgileNest", width: "50%" },
                },
              ],
            },
            {
              name: "whyIntro",
              type: "textarea",
              label: "Introduction Text",
              admin: { placeholder: "Brief intro paragraph..." },
            },
            {
              name: "whyCards",
              type: "array",
              label: "Value Cards",
              labels: { singular: "Card", plural: "Cards" },
              admin: {
                description: "💡 Add cards highlighting your key strengths",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Title",
                  required: true,
                  admin: { placeholder: "e.g. Real-World Expertise" },
                },
                {
                  name: "description",
                  type: "textarea",
                  label: "Description",
                  admin: { placeholder: "Explain this value proposition..." },
                },
              ],
            },
            {
              name: "whyQuote",
              type: "textarea",
              label: "Closing Quote",
              admin: {
                placeholder: "e.g. TheAgileNest — Where knowledge meets experience...",
                description: "Displayed in italics at the bottom of the section",
              },
            },
          ],
        },

        // ── Evolution Timeline ──────────────────────────────────────────────
        {
          label: "📅 Evolution",
          description: "Company journey timeline",
          fields: [
            {
              name: "evoEyebrow",
              type: "text",
              label: "Section Label",
              admin: { placeholder: "e.g. Our Evolution" },
            },
            {
              name: "evoHeading",
              type: "text",
              label: "Heading",
              admin: { placeholder: "e.g. A 17-Year Journey in Project Management" },
            },
            {
              name: "evoSubtitle",
              type: "textarea",
              label: "Subtitle",
              admin: { placeholder: "e.g. From PMBOK 3rd to 8th Edition..." },
            },
            {
              name: "evoMilestones",
              type: "array",
              label: "Timeline Milestones",
              labels: { singular: "Milestone", plural: "Milestones" },
              admin: {
                description: "💡 Leave empty to use the default PMBOK evolution timeline",
                initCollapsed: true,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "year",
                      type: "text",
                      label: "Year",
                      required: true,
                      admin: { placeholder: "e.g. 2007", width: "20%" },
                    },
                    {
                      name: "title",
                      type: "text",
                      label: "Title",
                      required: true,
                      admin: { placeholder: "e.g. PMBOK 3rd Edition", width: "40%" },
                    },
                    {
                      name: "color",
                      type: "select",
                      label: "Accent Color",
                      defaultValue: "blue",
                      admin: { width: "40%" },
                      options: [
                        { label: "Blue", value: "blue" },
                        { label: "Green", value: "green" },
                        { label: "Purple", value: "purple" },
                        { label: "Orange", value: "orange" },
                        { label: "Teal", value: "teal" },
                        { label: "Gold", value: "gold" },
                      ],
                    },
                  ],
                },
                {
                  name: "description",
                  type: "textarea",
                  label: "Description",
                  required: true,
                  admin: { placeholder: "Brief description of this milestone..." },
                },
              ],
            },
          ],
        },

        // ── Features/Advantage ──────────────────────────────────────────────
        {
          label: "✨ Advantages",
          description: "Why train with us section",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "featuresEyebrow",
                  type: "text",
                  label: "Section Label",
                  admin: { placeholder: "e.g. The Advantage", width: "25%" },
                },
                {
                  name: "featuresTitlePrefix",
                  type: "text",
                  label: "Heading Prefix",
                  admin: { placeholder: "e.g. Why choose", width: "25%" },
                },
                {
                  name: "featuresHighlightedName",
                  type: "text",
                  label: "Highlighted Name",
                  admin: { placeholder: "e.g. TheAgileNest", width: "25%" },
                },
                {
                  name: "featuresTitleSuffix",
                  type: "text",
                  label: "Heading Suffix",
                  admin: { placeholder: "e.g. Certification Journey", width: "25%" },
                },
              ],
            },
            {
              name: "featuresDescription",
              type: "textarea",
              label: "Description",
              admin: { placeholder: "Explain your training advantage..." },
            },
            {
              name: "featuresDescSuffix",
              type: "text",
              admin: { hidden: true },
            },
            {
              type: "collapsible",
              label: "📷 Feature Image & Badge",
              fields: [
                {
                  name: "featuresImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Feature Image",
                },
                {
                  name: "featuresImageAlt",
                  type: "text",
                  label: "Image Description",
                  admin: { placeholder: "Describe the image for accessibility" },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "featuresBadgeValue",
                      type: "text",
                      label: "Badge Text",
                      admin: { placeholder: "e.g. Proven", width: "50%" },
                    },
                    {
                      name: "featuresBadgeLabel",
                      type: "textarea",
                      label: "Badge Label",
                      admin: { placeholder: "e.g. Exam Success\\nOn First Attempt", width: "50%" },
                    },
                  ],
                },
              ],
            },
            {
              name: "featuresCards",
              type: "array",
              label: "Advantage Cards",
              labels: { singular: "Advantage", plural: "Advantages" },
              admin: {
                description: "💡 Icons are set automatically by position",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Title",
                  required: true,
                },
                {
                  name: "description",
                  type: "textarea",
                  label: "Description",
                },
              ],
            },
          ],
        },

        // ── Success Quotes ──────────────────────────────────────────────────
        {
          label: "💬 Success Quotes",
          description: "Inspiring quotes from successful students",
          fields: [
            {
              name: "quoteCards",
              type: "array",
              label: "Quote Cards",
              labels: { singular: "Quote", plural: "Quotes" },
              fields: [
                {
                  name: "quote",
                  type: "text",
                  label: "Quote Text",
                  required: true,
                  admin: { placeholder: "e.g. I passed on my first attempt!" },
                },
                {
                  name: "subtitle",
                  type: "textarea",
                  label: "Context/Details",
                  admin: { placeholder: "Additional context about the achievement..." },
                },
              ],
            },
          ],
        },

        // ── FAQ ─────────────────────────────────────────────────────────────
        {
          label: "❓ FAQ",
          description: "Frequently asked questions",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "faqTitle",
                  type: "text",
                  label: "Section Title",
                  admin: { placeholder: "e.g. Frequently Asked Questions", width: "50%" },
                },
                {
                  name: "faqSubtitle",
                  type: "text",
                  label: "Subtitle",
                  admin: { width: "50%" },
                },
              ],
            },
            {
              name: "faqDescription",
              type: "textarea",
              label: "Description",
            },
            {
              type: "row",
              fields: [
                {
                  name: "faqContactPrompt",
                  type: "text",
                  label: "Contact Prompt",
                  admin: { placeholder: "e.g. Still have questions?", width: "50%" },
                },
                {
                  name: "faqContactLinkText",
                  type: "text",
                  label: "Contact Link Text",
                  admin: { placeholder: "e.g. Contact us", width: "50%" },
                },
              ],
            },
            {
              name: "faqItems",
              type: "array",
              label: "FAQ Items",
              labels: { singular: "Question", plural: "Questions" },
              admin: { initCollapsed: true },
              fields: [
                {
                  name: "question",
                  type: "text",
                  label: "Question",
                  required: true,
                  admin: { placeholder: "e.g. How long is the training program?" },
                },
                {
                  name: "answer",
                  type: "textarea",
                  label: "Answer",
                  required: true,
                },
              ],
            },
          ],
        },
        // SEO Tab
        seoTab,
      ],
    },
  ],
};
