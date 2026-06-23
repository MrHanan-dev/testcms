import type { GlobalConfig } from "payload";
import { logGlobalChange } from "@/lib/activityLogger";
import { seoTab } from "@/lib/seoFields";

/**
 * Consulting Page — Consulting services content.
 */
export const Consulting: GlobalConfig = {
  slug: "consultingPage",
  label: "Consulting",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "💼 Service Pages",
    description: "Edit the Consulting services page — service cards, outcomes, and FAQs.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "🎯 Hero Section",
          description: "The banner at the top",
          fields: [
            {
              name: "heroTitle",
              type: "text",
              label: "Page Title",
              admin: { placeholder: "e.g. Consulting" },
            },
            {
              name: "heroDescription",
              type: "textarea",
              label: "Description",
              admin: { placeholder: "Brief description of consulting services..." },
            },
            {
              name: "heroBreadcrumb",
              type: "text",
              label: "Breadcrumb Label",
              admin: { placeholder: "e.g. Our Services" },
            },
          ],
        },
        {
          label: "📝 Introduction",
          description: "Opening section content",
          fields: [
            {
              name: "introEyebrow",
              type: "text",
              label: "Section Label",
              admin: { placeholder: "e.g. Project Maturity" },
            },
            {
              type: "row",
              fields: [
                {
                  name: "introHeadingLine1",
                  type: "text",
                  label: "Heading Line 1",
                  admin: { placeholder: "e.g. Creating Calm Across", width: "50%" },
                },
                {
                  name: "introHeadingLine2",
                  type: "text",
                  label: "Heading Line 2",
                  admin: { placeholder: "e.g. Your Projects", width: "50%" },
                },
              ],
            },
            {
              name: "introParagraph",
              type: "textarea",
              label: "Introduction Text",
            },
          ],
        },
        {
          label: "💼 Services",
          description: "The service cards",
          fields: [
            {
              name: "serviceCards",
              type: "array",
              label: "Service Cards",
              labels: { singular: "Service", plural: "Services" },
              admin: {
                description: "💡 Icons and colors are set automatically by position",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Service Title",
                  required: true,
                  admin: { placeholder: "e.g. Business Analysis" },
                },
                {
                  name: "desc",
                  type: "textarea",
                  label: "Description",
                },
              ],
            },
          ],
        },
        {
          label: "🎯 Outcomes",
          description: "What clients achieve",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "outcomeBadgeHeading",
                  type: "text",
                  label: "Badge Title",
                  admin: { placeholder: "e.g. Strategic Value", width: "50%" },
                },
                {
                  name: "outcomeHeading",
                  type: "text",
                  label: "Section Heading",
                  admin: { placeholder: "e.g. Delivering Exceptional Results", width: "50%" },
                },
              ],
            },
            {
              name: "outcomeBadgeText",
              type: "textarea",
              label: "Badge Description",
            },
            {
              name: "outcomeParagraph",
              type: "textarea",
              label: "Outcome Description",
            },
            {
              name: "outcomeChecklist",
              type: "array",
              label: "Key Outcomes",
              labels: { singular: "Outcome", plural: "Outcomes" },
              admin: { description: "💡 Checkmark list of outcomes" },
              fields: [
                {
                  name: "text",
                  type: "text",
                  label: "Outcome",
                  required: true,
                  admin: { placeholder: "e.g. Objective, independent reviews" },
                },
              ],
            },
            {
              name: "outcomeButtonText",
              type: "text",
              label: "Button Text",
              admin: { placeholder: "e.g. Discuss Your Roadmap" },
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
              name: "faqItems",
              type: "array",
              label: "FAQ Items",
              labels: { singular: "Question", plural: "Questions" },
              admin: {
                description: "💡 Leave empty to use default FAQs",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "question",
                  type: "text",
                  label: "Question",
                  required: true,
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
