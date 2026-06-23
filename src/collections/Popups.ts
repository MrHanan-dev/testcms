import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Popups — Modal popups and notifications.
 * WordPress-style popup builder.
 */
export const Popups: CollectionConfig = {
  slug: "popups",
  labels: { singular: "Popup", plural: "Popups" },
  admin: {
    group: "📝 Content",
    description: "Create promotional popups, announcements, and newsletter signups.",
    useAsTitle: "title",
    defaultColumns: ["title", "type", "trigger", "status"],
  },
  hooks: {
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Popup Name",
          required: true,
          admin: { width: "60%", placeholder: "e.g. Newsletter Signup" },
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "active",
          admin: { width: "40%" },
          options: [
            { label: "✅ Active", value: "active" },
            { label: "⏸️ Paused", value: "paused" },
            { label: "📅 Scheduled", value: "scheduled" },
          ],
        },
      ],
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "📝 Content",
          fields: [
            {
              name: "type",
              type: "select",
              label: "Popup Type",
              defaultValue: "modal",
              options: [
                { label: "🔲 Modal (Center)", value: "modal" },
                { label: "📌 Slide-in (Corner)", value: "slidein" },
                { label: "📢 Banner (Top/Bottom)", value: "banner" },
                { label: "🖼️ Fullscreen", value: "fullscreen" },
              ],
            },
            {
              name: "heading",
              type: "text",
              label: "Heading",
              admin: { placeholder: "e.g. Get 20% Off Your First Course!" },
            },
            {
              name: "content",
              type: "richText",
              label: "Content",
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Image",
            },
            {
              type: "collapsible",
              label: "🔘 Buttons",
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "primaryButtonText",
                      type: "text",
                      label: "Primary Button",
                      admin: { width: "50%", placeholder: "e.g. Subscribe Now" },
                    },
                    {
                      name: "primaryButtonUrl",
                      type: "text",
                      label: "Button URL",
                      admin: { width: "50%", placeholder: "/signup" },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "secondaryButtonText",
                      type: "text",
                      label: "Secondary Button",
                      admin: { width: "50%", placeholder: "e.g. Learn More" },
                    },
                    {
                      name: "secondaryButtonUrl",
                      type: "text",
                      label: "Button URL",
                      admin: { width: "50%" },
                    },
                  ],
                },
              ],
            },
            {
              name: "showForm",
              type: "checkbox",
              label: "Include Form",
              defaultValue: false,
            },
            {
              name: "form",
              type: "relationship",
              relationTo: "forms",
              label: "Select Form",
              admin: {
                condition: (data) => data?.showForm,
              },
            },
          ],
        },
        {
          label: "⚡ Trigger",
          fields: [
            {
              name: "trigger",
              type: "select",
              label: "Show Popup When",
              defaultValue: "delay",
              options: [
                { label: "⏱️ After Delay", value: "delay" },
                { label: "📜 On Scroll", value: "scroll" },
                { label: "🚪 Exit Intent", value: "exit" },
                { label: "🖱️ On Click", value: "click" },
                { label: "📄 On Page Load", value: "load" },
              ],
            },
            {
              name: "delaySeconds",
              type: "number",
              label: "Delay (seconds)",
              defaultValue: 5,
              admin: {
                condition: (data) => data?.trigger === "delay",
              },
            },
            {
              name: "scrollPercentage",
              type: "number",
              label: "Scroll Percentage",
              defaultValue: 50,
              admin: {
                description: "Show after scrolling this % of page",
                condition: (data) => data?.trigger === "scroll",
              },
            },
            {
              name: "clickSelector",
              type: "text",
              label: "CSS Selector",
              admin: {
                placeholder: ".open-popup, #newsletter-btn",
                condition: (data) => data?.trigger === "click",
              },
            },
          ],
        },
        {
          label: "🎯 Targeting",
          fields: [
            {
              name: "showOnPages",
              type: "select",
              label: "Show on Pages",
              hasMany: true,
              options: [
                { label: "All Pages", value: "all" },
                { label: "Home Only", value: "home" },
                { label: "Blog Posts", value: "blog" },
                { label: "Training Pages", value: "training" },
                { label: "Certification Pages", value: "certification" },
              ],
            },
            {
              name: "excludePages",
              type: "text",
              label: "Exclude URLs (comma-separated)",
              admin: { placeholder: "/checkout, /thank-you" },
            },
            {
              type: "row",
              fields: [
                {
                  name: "showToNewVisitors",
                  type: "checkbox",
                  label: "New Visitors Only",
                  defaultValue: false,
                  admin: { width: "50%" },
                },
                {
                  name: "showOnMobile",
                  type: "checkbox",
                  label: "Show on Mobile",
                  defaultValue: true,
                  admin: { width: "50%" },
                },
              ],
            },
            {
              name: "frequencyCap",
              type: "select",
              label: "Show Frequency",
              defaultValue: "session",
              options: [
                { label: "Once per session", value: "session" },
                { label: "Once per day", value: "day" },
                { label: "Once per week", value: "week" },
                { label: "Once ever", value: "once" },
                { label: "Every time", value: "always" },
              ],
            },
          ],
        },
        {
          label: "🎨 Styling",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "backgroundColor",
                  type: "text",
                  label: "Background",
                  defaultValue: "#ffffff",
                  admin: { width: "33%", placeholder: "#ffffff" },
                },
                {
                  name: "textColor",
                  type: "text",
                  label: "Text Color",
                  defaultValue: "#1e293b",
                  admin: { width: "33%", placeholder: "#1e293b" },
                },
                {
                  name: "accentColor",
                  type: "text",
                  label: "Button Color",
                  defaultValue: "#0B3C5D",
                  admin: { width: "33%", placeholder: "#0B3C5D" },
                },
              ],
            },
            {
              name: "size",
              type: "select",
              label: "Size",
              defaultValue: "medium",
              options: [
                { label: "Small", value: "small" },
                { label: "Medium", value: "medium" },
                { label: "Large", value: "large" },
              ],
            },
            {
              name: "animation",
              type: "select",
              label: "Animation",
              defaultValue: "fade",
              options: [
                { label: "Fade", value: "fade" },
                { label: "Slide Up", value: "slideUp" },
                { label: "Slide Down", value: "slideDown" },
                { label: "Zoom", value: "zoom" },
                { label: "None", value: "none" },
              ],
            },
          ],
        },
      ],
    },
    // Sidebar
    {
      name: "startDate",
      type: "date",
      label: "Start Date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
    },
    {
      name: "endDate",
      type: "date",
      label: "End Date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
    },
    {
      name: "views",
      type: "number",
      label: "Views",
      defaultValue: 0,
      admin: { position: "sidebar", readOnly: true },
    },
    {
      name: "conversions",
      type: "number",
      label: "Conversions",
      defaultValue: 0,
      admin: { position: "sidebar", readOnly: true },
    },
  ],
};
