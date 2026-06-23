import type { GlobalConfig } from "payload";
import { logGlobalChange } from "@/lib/activityLogger";
import { seoTab } from "@/lib/seoFields";

/**
 * Training Page — Course categories and schedule.
 */
export const Training: GlobalConfig = {
  slug: "trainingPage",
  label: "Training Overview",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "🎓 Certification & Training",
    description: "Edit the Training page — course categories, schedule dates, resources, and FAQs.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // ── Hero ────────────────────────────────────────────────────────────
        {
          label: "🎯 Hero Section",
          description: "The banner at the top",
          fields: [
            {
              name: "heroTitle",
              type: "text",
              label: "Page Title",
              admin: { placeholder: "e.g. Professional Training" },
            },
            {
              name: "heroDescription",
              type: "textarea",
              label: "Description",
              admin: { placeholder: "Brief description of your training programs..." },
            },
            {
              name: "heroBreadcrumb",
              type: "text",
              label: "Breadcrumb Label",
              admin: { placeholder: "e.g. Our Services" },
            },
          ],
        },

        // ── Introduction ────────────────────────────────────────────────────
        {
          label: "📝 Introduction",
          description: "Opening section content",
          fields: [
            {
              name: "introEyebrow",
              type: "text",
              label: "Section Label",
              admin: { placeholder: "e.g. Training Programs" },
            },
            {
              type: "row",
              fields: [
                {
                  name: "introHeadingLine1",
                  type: "text",
                  label: "Heading Line 1",
                  admin: { placeholder: "e.g. Empowering", width: "50%" },
                },
                {
                  name: "introHeadingLine2",
                  type: "text",
                  label: "Heading Line 2",
                  admin: { placeholder: "e.g. Project Professionals", width: "50%" },
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

        // ── Course Categories ───────────────────────────────────────────────
        {
          label: "📚 Course Categories",
          description: "The main training categories",
          fields: [
            {
              name: "categories",
              type: "array",
              label: "Training Categories",
              labels: { singular: "Category", plural: "Categories" },
              admin: {
                description: "💡 Icons are set automatically by position",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Category Title",
                  required: true,
                  admin: { placeholder: "e.g. PMI Certifications" },
                },
                {
                  name: "desc",
                  type: "textarea",
                  label: "Description",
                },
                {
                  name: "links",
                  type: "array",
                  label: "Course Links",
                  labels: { singular: "Link", plural: "Links" },
                  fields: [
                    {
                      name: "text",
                      type: "text",
                      label: "Link Text",
                      required: true,
                      admin: { placeholder: "e.g. PMP® Training" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Bespoke Training ────────────────────────────────────────────────
        {
          label: "🎯 Bespoke Training",
          description: "Custom training offerings",
          fields: [
            {
              name: "bespokeHeading",
              type: "text",
              label: "Section Heading",
              admin: { placeholder: "e.g. Bespoke Training Solutions" },
            },
            {
              name: "bespokeParagraph",
              type: "textarea",
              label: "Description",
            },
            {
              name: "bespokeServices",
              type: "array",
              label: "Bespoke Services",
              labels: { singular: "Service", plural: "Services" },
              admin: {
                description: "💡 Icons are set automatically by position",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Service Title",
                  required: true,
                },
                {
                  name: "desc",
                  type: "textarea",
                  label: "Description",
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  name: "bespokeBadgeTitle",
                  type: "text",
                  label: "Badge Title",
                  admin: { width: "50%" },
                },
                {
                  name: "bespokeBadgeText",
                  type: "textarea",
                  label: "Badge Text",
                  admin: { width: "50%" },
                },
              ],
            },
          ],
        },

        // ── Resources ───────────────────────────────────────────────────────
        {
          label: "📦 Resources",
          description: "Additional learning resources",
          fields: [
            {
              name: "resources",
              type: "array",
              label: "Resource Items",
              labels: { singular: "Resource", plural: "Resources" },
              admin: {
                description: "💡 Icons are set automatically by position",
              },
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Title",
                  required: true,
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

        // ── Schedule ────────────────────────────────────────────────────────
        {
          label: "📅 Course Schedule",
          description: "Upcoming training dates",
          fields: [
            {
              name: "scheduleEyebrow",
              type: "text",
              label: "Section Label",
              admin: { placeholder: "e.g. Upcoming Batches" },
            },
            {
              name: "scheduleHeading",
              type: "text",
              label: "Heading",
              admin: { placeholder: "e.g. Training Schedule" },
            },
            {
              name: "scheduleParagraph",
              type: "textarea",
              label: "Description",
            },
            {
              name: "scheduleItems",
              type: "array",
              label: "Scheduled Courses",
              labels: { singular: "Course", plural: "Courses" },
              admin: {
                description: "💡 Add your upcoming training batches here",
                initCollapsed: true,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "month",
                      type: "text",
                      label: "Month",
                      required: true,
                      admin: { placeholder: "e.g. July 2026", width: "30%" },
                    },
                    {
                      name: "dates",
                      type: "text",
                      label: "Dates",
                      admin: { placeholder: "e.g. 15-19", width: "30%" },
                    },
                    {
                      name: "status",
                      type: "select",
                      label: "Status",
                      defaultValue: "Open",
                      admin: { width: "40%" },
                      options: [
                        { label: "🟢 Open for Registration", value: "Open" },
                        { label: "🟡 Filling Fast", value: "Filling Fast" },
                        { label: "🔴 Sold Out", value: "Sold Out" },
                      ],
                    },
                  ],
                },
                {
                  name: "course",
                  type: "text",
                  label: "Course Name",
                  required: true,
                  admin: { placeholder: "e.g. PMP® Exam Prep Boot Camp" },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "time",
                      type: "text",
                      label: "Time",
                      admin: { placeholder: "e.g. 9:00 AM - 5:00 PM NZT", width: "50%" },
                    },
                    {
                      name: "format",
                      type: "text",
                      label: "Format",
                      admin: { placeholder: "e.g. Live Online", width: "50%" },
                    },
                  ],
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
