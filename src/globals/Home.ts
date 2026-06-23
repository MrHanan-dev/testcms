import type { GlobalConfig } from "payload";
import { logGlobalChange } from "@/lib/activityLogger";
import { seoTab } from "@/lib/seoFields";

/**
 * Home Page — The main landing page visitors see first.
 * Organized into easy-to-navigate tabs for each section.
 */
export const Home: GlobalConfig = {
  slug: "home",
  label: "Home Page",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "🏠 Main Pages",
    description: "Edit the homepage hero slides, testimonials, stats, and all sections visitors see first.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // ── Hero Banner ─────────────────────────────────────────────────────
        {
          label: "🎯 Hero Banner",
          description: "The rotating banner at the top of the homepage",
          fields: [
            {
              name: "heroSlides",
              type: "array",
              label: "Banner Slides",
              labels: { singular: "Slide", plural: "Slides" },
              admin: {
                description: "💡 Add multiple slides that rotate automatically. Leave empty to use default slides.",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "variant",
                  type: "select",
                  label: "Slide Style",
                  defaultValue: "image",
                  admin: { description: "Choose how this slide looks" },
                  options: [
                    { label: "📷 Photo Background", value: "image" },
                    { label: "📊 Infographic (Dark Panel)", value: "infographic" },
                    { label: "🏆 Certifications Collage", value: "collage" },
                  ],
                },
                {
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                  label: "Background Image",
                  admin: { description: "Upload a high-quality image (1920x1080 recommended)" },
                },
                {
                  name: "tag",
                  type: "text",
                  label: "Tag Label",
                  admin: {
                    placeholder: "e.g. PMI Authorized Training Partner",
                    description: "Small label shown above the headline",
                  },
                },
                {
                  name: "headline",
                  type: "textarea",
                  label: "Main Headline",
                  required: true,
                  admin: {
                    placeholder: "Your Success.\nOur Mission.",
                    description: "💡 Use line breaks for multiple lines. Add a period (.) for accent color.",
                  },
                },
                {
                  name: "description",
                  type: "textarea",
                  label: "Supporting Text",
                  admin: { placeholder: "Brief description shown below the headline" },
                },
                {
                  name: "alt",
                  type: "text",
                  label: "Image Description (for accessibility)",
                  admin: { placeholder: "Describe the image for screen readers" },
                },
              ],
            },
            {
              type: "collapsible",
              label: "🔘 Hero Buttons (CTAs)",
              admin: { initCollapsed: true },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "heroPrimaryCtaText",
                      type: "text",
                      label: "Primary Button Text",
                      defaultValue: "Initiate Strategy",
                      admin: { width: "50%", placeholder: "e.g. Get Started" },
                    },
                    {
                      name: "heroPrimaryCtaUrl",
                      type: "text",
                      label: "Primary Button URL",
                      defaultValue: "#contact",
                      admin: { width: "50%", placeholder: "e.g. /contact or #contact" },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "heroSecondaryCtaText",
                      type: "text",
                      label: "Secondary Button Text",
                      defaultValue: "Our Pillars",
                      admin: { width: "50%", placeholder: "e.g. Learn More" },
                    },
                    {
                      name: "heroSecondaryCtaUrl",
                      type: "text",
                      label: "Secondary Button URL",
                      defaultValue: "#services",
                      admin: { width: "50%", placeholder: "e.g. /about or #services" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Feature Strip ───────────────────────────────────────────────────
        {
          label: "✨ Feature Strip",
          description: "The row of highlights below the hero",
          fields: [
            {
              name: "featureItems",
              type: "array",
              label: "Feature Highlights",
              labels: { singular: "Feature", plural: "Features" },
              admin: {
                description: "💡 Short bullet points shown with checkmarks under the hero banner",
              },
              fields: [
                {
                  name: "text",
                  type: "text",
                  label: "Feature Text",
                  required: true,
                  admin: { placeholder: "e.g. PMI Authorized Training Partner" },
                },
              ],
            },
          ],
        },

        // ── Expertise Section ───────────────────────────────────────────────
        {
          label: "💼 Our Expertise",
          description: "The 3 main service areas",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "expertiseEyebrow",
                  type: "text",
                  label: "Section Label",
                  admin: { placeholder: "e.g. Our Expertise", width: "33%" },
                },
                {
                  name: "expertiseHeadingLead",
                  type: "text",
                  label: "Heading (Dark Part)",
                  admin: { placeholder: "e.g. Elevating Projects", width: "33%" },
                },
                {
                  name: "expertiseHeadingMuted",
                  type: "text",
                  label: "Heading (Grey Part)",
                  admin: { placeholder: "e.g. & People", width: "33%" },
                },
              ],
            },
            {
              name: "expertiseCards",
              type: "array",
              label: "Service Cards",
              labels: { singular: "Service", plural: "Services" },
              admin: {
                description: "💡 The 3 main expertise cards. Icons are set automatically.",
                initCollapsed: true,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "subtitle",
                      type: "text",
                      label: "Subtitle",
                      admin: { placeholder: "e.g. Professional Services", width: "50%" },
                    },
                    {
                      name: "title",
                      type: "text",
                      label: "Title",
                      required: true,
                      admin: { placeholder: "e.g. Project Management", width: "50%" },
                    },
                  ],
                },
                {
                  name: "description",
                  type: "textarea",
                  label: "Description",
                  admin: { placeholder: "Brief description of this service..." },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "href",
                      type: "text",
                      label: "Link URL",
                      admin: { placeholder: "/project-management", width: "50%" },
                    },
                    {
                      name: "buttonText",
                      type: "text",
                      label: "Button Text",
                      admin: { placeholder: "Learn More", width: "50%" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Certifications ──────────────────────────────────────────────────
        {
          label: "🎓 Certifications",
          description: "The certification logos and links",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "certEyebrow",
                  type: "text",
                  label: "Section Label",
                  admin: { placeholder: "e.g. Certifications", width: "33%" },
                },
                {
                  name: "certHeadingLead",
                  type: "text",
                  label: "Heading (Dark Part)",
                  admin: { placeholder: "e.g. Industry-Leading", width: "33%" },
                },
                {
                  name: "certHeadingMuted",
                  type: "text",
                  label: "Heading (Grey Part)",
                  admin: { placeholder: "e.g. Credentials", width: "33%" },
                },
              ],
            },
            {
              name: "certItems",
              type: "array",
              label: "Certification Cards",
              labels: { singular: "Certification", plural: "Certifications" },
              admin: { initCollapsed: true },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "name",
                      type: "text",
                      label: "Short Name",
                      required: true,
                      admin: { placeholder: "e.g. PMP", width: "30%" },
                    },
                    {
                      name: "title",
                      type: "text",
                      label: "Full Title",
                      admin: { placeholder: "e.g. Project Management Professional", width: "70%" },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "href",
                      type: "text",
                      label: "Link URL",
                      admin: { placeholder: "/pmp", width: "50%" },
                    },
                    {
                      name: "image",
                      type: "upload",
                      relationTo: "media",
                      label: "Badge Image",
                      admin: { width: "50%" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── About Summary ───────────────────────────────────────────────────
        {
          label: "👥 About Us",
          description: "Company introduction on the homepage",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "aboutHeadingLead",
                  type: "text",
                  label: "Heading (Dark)",
                  admin: { placeholder: "e.g. Who We Are", width: "50%" },
                },
                {
                  name: "aboutHeadingMuted",
                  type: "text",
                  label: "Heading (Grey)",
                  admin: { placeholder: "e.g. & What We Do", width: "50%" },
                },
              ],
            },
            {
              name: "aboutIdentityTitle",
              type: "text",
              label: "Identity Title",
              admin: { placeholder: "e.g. Our Identity" },
            },
            {
              name: "aboutParagraphs",
              type: "array",
              label: "About Paragraphs",
              labels: { singular: "Paragraph", plural: "Paragraphs" },
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
              label: "📋 Two-Column Content",
              admin: { initCollapsed: true },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "aboutCol1Title",
                      type: "text",
                      label: "Left Column Title",
                      admin: { width: "50%" },
                    },
                    {
                      name: "aboutCol2Title",
                      type: "text",
                      label: "Right Column Title",
                      admin: { width: "50%" },
                    },
                  ],
                },
                {
                  name: "aboutCol1Items",
                  type: "array",
                  label: "Left Column List Items",
                  fields: [{ name: "text", type: "text", required: true }],
                },
                {
                  name: "aboutCol2Text",
                  type: "textarea",
                  label: "Right Column Text",
                },
              ],
            },
            {
              type: "collapsible",
              label: "🏆 Why Choose Us",
              admin: { initCollapsed: true },
              fields: [
                {
                  name: "whyHeading",
                  type: "text",
                  label: "Section Heading",
                },
                {
                  name: "whyItems",
                  type: "array",
                  label: "Reasons",
                  labels: { singular: "Reason", plural: "Reasons" },
                  fields: [
                    { name: "title", type: "text", label: "Title", required: true },
                    { name: "description", type: "textarea", label: "Description" },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "🏛️ Heritage Section",
              admin: { initCollapsed: true },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "heritageEyebrow", type: "text", label: "Label", admin: { width: "50%" } },
                    { name: "heritageHeading", type: "text", label: "Heading", admin: { width: "50%" } },
                  ],
                },
                { name: "heritageText", type: "textarea", label: "Description" },
                {
                  type: "row",
                  fields: [
                    { name: "heritageLinkText", type: "text", label: "Link Text", admin: { width: "50%" } },
                    { name: "heritageLinkHref", type: "text", label: "Link URL", admin: { width: "50%" } },
                  ],
                },
              ],
            },
          ],
        },

        // ── Stats ───────────────────────────────────────────────────────────
        {
          label: "📊 Stats",
          description: "Key numbers and achievements",
          fields: [
            {
              name: "stats",
              type: "array",
              label: "Statistics",
              labels: { singular: "Stat", plural: "Stats" },
              admin: {
                description: "💡 Add impressive numbers like '500+' projects, '98%' success rate, etc.",
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "value",
                      type: "text",
                      label: "Number",
                      required: true,
                      admin: { placeholder: "e.g. 500", width: "30%" },
                    },
                    {
                      name: "suffix",
                      type: "text",
                      label: "Suffix",
                      admin: { placeholder: "e.g. +", width: "20%" },
                    },
                    {
                      name: "label",
                      type: "text",
                      label: "Label",
                      required: true,
                      admin: { placeholder: "e.g. Projects Delivered", width: "50%" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Testimonials ────────────────────────────────────────────────────
        {
          label: "💬 Testimonials",
          description: "Client success stories",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "testimonialsEyebrow",
                  type: "text",
                  label: "Section Label",
                  admin: { placeholder: "e.g. What Our Clients Say", width: "33%" },
                },
                {
                  name: "testimonialsHeadingLead",
                  type: "text",
                  label: "Heading (Dark)",
                  admin: { width: "33%" },
                },
                {
                  name: "testimonialsHeadingMuted",
                  type: "text",
                  label: "Heading (Grey)",
                  admin: { width: "33%" },
                },
              ],
            },
            {
              name: "testimonials",
              type: "array",
              label: "Testimonials",
              labels: { singular: "Testimonial", plural: "Testimonials" },
              admin: { initCollapsed: true },
              fields: [
                {
                  name: "quote",
                  type: "textarea",
                  label: "Quote",
                  required: true,
                  admin: { placeholder: "What the client said..." },
                },
                {
                  type: "row",
                  fields: [
                    { name: "author", type: "text", label: "Name", admin: { width: "33%" } },
                    { name: "role", type: "text", label: "Job Title", admin: { width: "33%" } },
                    { name: "company", type: "text", label: "Company", admin: { width: "33%" } },
                  ],
                },
              ],
            },
          ],
        },

        // ── Google Reviews ──────────────────────────────────────────────────
        {
          label: "⭐ Reviews",
          description: "Google reviews showcase",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "reviewsEyebrow",
                  type: "text",
                  label: "Section Label",
                  admin: { placeholder: "e.g. Google Reviews", width: "33%" },
                },
                {
                  name: "reviewsHeading",
                  type: "text",
                  label: "Heading",
                  admin: { width: "33%" },
                },
                {
                  name: "reviewsRating",
                  type: "text",
                  label: "Overall Rating",
                  admin: { placeholder: "e.g. 4.9", width: "33%" },
                },
              ],
            },
            {
              name: "reviewsGoogleUrl",
              type: "text",
              label: "Google Reviews URL",
              admin: { placeholder: "https://g.page/r/..." },
            },
            {
              name: "reviewItems",
              type: "array",
              label: "Individual Reviews",
              labels: { singular: "Review", plural: "Reviews" },
              admin: { initCollapsed: true },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "name",
                      type: "text",
                      label: "Reviewer Name",
                      required: true,
                      admin: { width: "50%" },
                    },
                    {
                      name: "date",
                      type: "text",
                      label: "Date",
                      admin: { placeholder: "e.g. a month ago", width: "25%" },
                    },
                    {
                      name: "rating",
                      type: "number",
                      label: "Stars",
                      defaultValue: 5,
                      min: 1,
                      max: 5,
                      admin: { width: "25%" },
                    },
                  ],
                },
                {
                  name: "text",
                  type: "textarea",
                  label: "Review Text",
                },
              ],
            },
          ],
        },

        // ── FAQ ────────────────────────────────────────────────────────────
        {
          label: "❓ FAQ",
          description: "Frequently asked questions section",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "faqEyebrow",
                  type: "text",
                  label: "Section Label",
                  defaultValue: "FAQ",
                  admin: { placeholder: "e.g. FAQ", width: "25%" },
                },
                {
                  name: "faqTitle",
                  type: "text",
                  label: "Title",
                  admin: { placeholder: "e.g. Answers to Fuel Your", width: "37.5%" },
                },
                {
                  name: "faqSubtitle",
                  type: "text",
                  label: "Subtitle (grey)",
                  admin: { placeholder: "e.g. Project Journey", width: "37.5%" },
                },
              ],
            },
            {
              name: "faqDescription",
              type: "textarea",
              label: "Description",
              admin: { placeholder: "Brief description of the FAQ section..." },
            },
            {
              name: "faqItems",
              type: "array",
              label: "FAQ Questions",
              labels: { singular: "Question", plural: "Questions" },
              admin: { 
                initCollapsed: true,
                description: "💡 Leave empty to use default FAQ questions" 
              },
              fields: [
                { name: "question", type: "text", label: "Question", required: true },
                { name: "answer", type: "textarea", label: "Answer", required: true },
              ],
            },
            {
              type: "collapsible",
              label: "Contact CTA",
              admin: { initCollapsed: true },
              fields: [
                {
                  name: "faqContactPrompt",
                  type: "text",
                  label: "Contact Prompt",
                  defaultValue: "Have a specific question or corporate requirement?",
                  admin: { placeholder: "e.g. Have a specific question?" },
                },
                {
                  name: "faqContactLinkText",
                  type: "text",
                  label: "Contact Link Text",
                  defaultValue: "Contact us today",
                  admin: { placeholder: "e.g. Contact us today" },
                },
                {
                  name: "faqContactSuffix",
                  type: "text",
                  label: "Suffix Text",
                  defaultValue: "for a tailored solution.",
                  admin: { placeholder: "e.g. for a tailored solution." },
                },
              ],
            },
          ],
        },

        // ── Final CTA ───────────────────────────────────────────────────────
        {
          label: "🚀 Call to Action",
          description: "The final banner encouraging visitors to contact you",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "ctaHeadingLead",
                  type: "text",
                  label: "Heading (Main)",
                  admin: { placeholder: "e.g. Ready to Start", width: "50%" },
                },
                {
                  name: "ctaHeadingAccent",
                  type: "text",
                  label: "Heading (Accent)",
                  admin: { placeholder: "e.g. Your Journey?", width: "50%" },
                },
              ],
            },
            {
              name: "ctaParagraph",
              type: "textarea",
              label: "Description",
              admin: { placeholder: "Encourage visitors to take action..." },
            },
            {
              type: "row",
              fields: [
                {
                  name: "ctaPrimaryText",
                  type: "text",
                  label: "Primary Button",
                  admin: { placeholder: "e.g. Contact Us", width: "50%" },
                },
                {
                  name: "ctaSecondaryText",
                  type: "text",
                  label: "Secondary Button",
                  admin: { placeholder: "e.g. View Courses", width: "50%" },
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
