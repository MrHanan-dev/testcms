import type { GlobalConfig } from "payload";
import { logGlobalChange } from "@/lib/activityLogger";

/**
 * Custom Code — WordPress-style custom CSS/JS injection.
 * Add custom styles, scripts, and third-party integrations.
 */
export const CustomCode: GlobalConfig = {
  slug: "customCode",
  label: "Custom Code",
  access: {
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => user?.role === "admin",
  },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "⚙️ Settings",
    description: "Add custom CSS, JavaScript, and third-party code snippets.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // ── Custom CSS ────────────────────────────────────────────────────────
        {
          label: "🎨 Custom CSS",
          description: "Add your own styles",
          fields: [
            {
              name: "customCss",
              type: "code",
              label: "Global Custom CSS",
              admin: {
                language: "css",
                description: "CSS applied to all pages. Use this for custom styling overrides.",
              },
            },
            {
              name: "customCssHeader",
              type: "code",
              label: "Header-specific CSS",
              admin: {
                language: "css",
                description: "CSS specifically for header customization",
              },
            },
            {
              name: "customCssFooter",
              type: "code",
              label: "Footer-specific CSS",
              admin: {
                language: "css",
                description: "CSS specifically for footer customization",
              },
            },
          ],
        },

        // ── Custom JavaScript ─────────────────────────────────────────────────
        {
          label: "⚡ Custom JavaScript",
          description: "Add your own scripts",
          fields: [
            {
              name: "headScripts",
              type: "code",
              label: "Head Scripts",
              admin: {
                language: "javascript",
                description: "⚠️ Scripts added to <head> — loads before page content. Use for tracking pixels, fonts, etc.",
              },
            },
            {
              name: "bodyStartScripts",
              type: "code",
              label: "Body Start Scripts",
              admin: {
                language: "javascript",
                description: "Scripts added right after <body> opens. Good for GTM noscript tags.",
              },
            },
            {
              name: "footerScripts",
              type: "code",
              label: "Footer Scripts",
              admin: {
                language: "javascript",
                description: "Scripts added before </body> — loads after page content. Best for most scripts.",
              },
            },
          ],
        },

        // ── Third-Party Integrations ──────────────────────────────────────────
        {
          label: "🔌 Integrations",
          description: "Connect third-party services",
          fields: [
            {
              type: "collapsible",
              label: "💬 Live Chat",
              fields: [
                {
                  name: "liveChatEnabled",
                  type: "checkbox",
                  label: "Enable Live Chat Widget",
                  defaultValue: false,
                },
                {
                  name: "liveChatProvider",
                  type: "select",
                  label: "Chat Provider",
                  options: [
                    { label: "Intercom", value: "intercom" },
                    { label: "Crisp", value: "crisp" },
                    { label: "Tawk.to", value: "tawk" },
                    { label: "HubSpot", value: "hubspot" },
                    { label: "Zendesk", value: "zendesk" },
                    { label: "Custom", value: "custom" },
                  ],
                  admin: {
                    condition: (data) => data?.liveChatEnabled,
                  },
                },
                {
                  name: "liveChatId",
                  type: "text",
                  label: "Chat Widget ID",
                  admin: {
                    placeholder: "Your widget/app ID",
                    condition: (data) => data?.liveChatEnabled,
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "📧 Email Marketing",
              fields: [
                {
                  name: "mailchimpEnabled",
                  type: "checkbox",
                  label: "Enable Mailchimp Integration",
                  defaultValue: false,
                },
                {
                  name: "mailchimpApiKey",
                  type: "text",
                  label: "Mailchimp API Key",
                  admin: {
                    placeholder: "xxxxxxxx-us1",
                    condition: (data) => data?.mailchimpEnabled,
                  },
                },
                {
                  name: "mailchimpListId",
                  type: "text",
                  label: "Default List/Audience ID",
                  admin: {
                    condition: (data) => data?.mailchimpEnabled,
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "🔔 Push Notifications",
              fields: [
                {
                  name: "pushEnabled",
                  type: "checkbox",
                  label: "Enable Push Notifications",
                  defaultValue: false,
                },
                {
                  name: "oneSignalAppId",
                  type: "text",
                  label: "OneSignal App ID",
                  admin: {
                    condition: (data) => data?.pushEnabled,
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "🗺️ Maps",
              fields: [
                {
                  name: "googleMapsApiKey",
                  type: "text",
                  label: "Google Maps API Key",
                  admin: {
                    placeholder: "AIza...",
                    description: "For embedded maps on contact page",
                  },
                },
              ],
            },
          ],
        },

        // ── Webhooks ──────────────────────────────────────────────────────────
        {
          label: "🔗 Webhooks",
          description: "Send data to external services",
          fields: [
            {
              name: "webhooks",
              type: "array",
              label: "Webhooks",
              labels: { singular: "Webhook", plural: "Webhooks" },
              admin: {
                description: "Automatically send data to external URLs when events occur",
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "name",
                      type: "text",
                      label: "Name",
                      required: true,
                      admin: { width: "40%", placeholder: "e.g. Slack New Lead Alert" },
                    },
                    {
                      name: "event",
                      type: "select",
                      label: "Trigger Event",
                      required: true,
                      admin: { width: "30%" },
                      options: [
                        { label: "New Lead", value: "lead.created" },
                        { label: "New Comment", value: "comment.created" },
                        { label: "Post Published", value: "post.published" },
                        { label: "User Registered", value: "user.created" },
                        { label: "Form Submitted", value: "form.submitted" },
                      ],
                    },
                    {
                      name: "enabled",
                      type: "checkbox",
                      label: "Active",
                      defaultValue: true,
                      admin: { width: "30%" },
                    },
                  ],
                },
                {
                  name: "url",
                  type: "text",
                  label: "Webhook URL",
                  required: true,
                  admin: { placeholder: "https://hooks.slack.com/services/..." },
                },
                {
                  name: "secret",
                  type: "text",
                  label: "Secret (optional)",
                  admin: {
                    placeholder: "For signature verification",
                    description: "Sent as X-Webhook-Secret header",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
