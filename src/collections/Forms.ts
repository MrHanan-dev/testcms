import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Forms — WordPress-style form builder.
 * Create contact forms, surveys, registration forms, etc.
 */
export const Forms: CollectionConfig = {
  slug: "forms",
  labels: { singular: "Form", plural: "Forms" },
  admin: {
    group: "📝 Content",
    description: "Create and manage custom forms — contact, surveys, registrations, and more.",
    useAsTitle: "title",
    defaultColumns: ["title", "submissions", "status", "updatedAt"],
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
          label: "Form Name",
          required: true,
          admin: { width: "60%", placeholder: "e.g. Contact Form" },
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
            { label: "🗄️ Archived", value: "archived" },
          ],
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      label: "Form ID",
      required: true,
      unique: true,
      admin: {
        placeholder: "contact-form",
        description: "Unique identifier used in code",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "📝 Fields",
          fields: [
            {
              name: "fields",
              type: "array",
              label: "Form Fields",
              labels: { singular: "Field", plural: "Fields" },
              admin: { initCollapsed: false },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "fieldType",
                      type: "select",
                      label: "Field Type",
                      required: true,
                      admin: { width: "30%" },
                      options: [
                        { label: "📝 Text", value: "text" },
                        { label: "📧 Email", value: "email" },
                        { label: "📞 Phone", value: "tel" },
                        { label: "🔢 Number", value: "number" },
                        { label: "📅 Date", value: "date" },
                        { label: "⏰ Time", value: "time" },
                        { label: "📄 Textarea", value: "textarea" },
                        { label: "☑️ Checkbox", value: "checkbox" },
                        { label: "🔘 Radio", value: "radio" },
                        { label: "📋 Select", value: "select" },
                        { label: "📎 File Upload", value: "file" },
                        { label: "🔒 Hidden", value: "hidden" },
                        { label: "➖ Divider", value: "divider" },
                        { label: "📢 Heading", value: "heading" },
                      ],
                    },
                    {
                      name: "name",
                      type: "text",
                      label: "Field Name",
                      required: true,
                      admin: { width: "35%", placeholder: "e.g. email" },
                    },
                    {
                      name: "label",
                      type: "text",
                      label: "Label",
                      required: true,
                      admin: { width: "35%", placeholder: "e.g. Email Address" },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "placeholder",
                      type: "text",
                      label: "Placeholder",
                      admin: { width: "50%", placeholder: "e.g. Enter your email" },
                    },
                    {
                      name: "defaultValue",
                      type: "text",
                      label: "Default Value",
                      admin: { width: "50%" },
                    },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "required",
                      type: "checkbox",
                      label: "Required",
                      defaultValue: false,
                      admin: { width: "25%" },
                    },
                    {
                      name: "halfWidth",
                      type: "checkbox",
                      label: "Half Width",
                      defaultValue: false,
                      admin: { width: "25%" },
                    },
                    {
                      name: "minLength",
                      type: "number",
                      label: "Min Length",
                      admin: { width: "25%" },
                    },
                    {
                      name: "maxLength",
                      type: "number",
                      label: "Max Length",
                      admin: { width: "25%" },
                    },
                  ],
                },
                {
                  name: "options",
                  type: "array",
                  label: "Options (for Select/Radio/Checkbox)",
                  admin: {
                    condition: (_, siblingData) =>
                      ["select", "radio", "checkbox"].includes(siblingData?.fieldType),
                  },
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "label",
                          type: "text",
                          required: true,
                          admin: { width: "50%" },
                        },
                        {
                          name: "value",
                          type: "text",
                          required: true,
                          admin: { width: "50%" },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "helpText",
                  type: "text",
                  label: "Help Text",
                  admin: { placeholder: "Additional instructions for the user" },
                },
              ],
            },
          ],
        },
        {
          label: "⚙️ Settings",
          fields: [
            {
              type: "collapsible",
              label: "📧 Email Notifications",
              admin: { initCollapsed: false },
              fields: [
                {
                  name: "sendEmail",
                  type: "checkbox",
                  label: "Send Email on Submission",
                  defaultValue: true,
                },
                {
                  name: "emailTo",
                  type: "text",
                  label: "Send To",
                  admin: {
                    placeholder: "admin@example.com",
                    condition: (data) => data?.sendEmail,
                  },
                },
                {
                  name: "emailSubject",
                  type: "text",
                  label: "Email Subject",
                  admin: {
                    placeholder: "New Form Submission: {{form_title}}",
                    condition: (data) => data?.sendEmail,
                  },
                },
                {
                  name: "emailReplyTo",
                  type: "text",
                  label: "Reply-To Field",
                  admin: {
                    placeholder: "email",
                    description: "Field name to use as reply-to address",
                    condition: (data) => data?.sendEmail,
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "✅ Confirmation",
              fields: [
                {
                  name: "confirmationType",
                  type: "select",
                  label: "After Submission",
                  defaultValue: "message",
                  options: [
                    { label: "Show Message", value: "message" },
                    { label: "Redirect to Page", value: "redirect" },
                  ],
                },
                {
                  name: "confirmationMessage",
                  type: "textarea",
                  label: "Success Message",
                  defaultValue: "Thank you for your submission!",
                  admin: {
                    condition: (data) => data?.confirmationType === "message",
                  },
                },
                {
                  name: "redirectUrl",
                  type: "text",
                  label: "Redirect URL",
                  admin: {
                    placeholder: "/thank-you",
                    condition: (data) => data?.confirmationType === "redirect",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "🔒 Spam Protection",
              fields: [
                {
                  name: "enableRecaptcha",
                  type: "checkbox",
                  label: "Enable reCAPTCHA",
                  defaultValue: false,
                },
                {
                  name: "enableHoneypot",
                  type: "checkbox",
                  label: "Enable Honeypot",
                  defaultValue: true,
                },
                {
                  name: "rateLimitPerHour",
                  type: "number",
                  label: "Submissions per Hour (per IP)",
                  defaultValue: 10,
                },
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
                  name: "submitButtonText",
                  type: "text",
                  label: "Submit Button Text",
                  defaultValue: "Submit",
                  admin: { width: "50%" },
                },
                {
                  name: "submitButtonColor",
                  type: "text",
                  label: "Button Color",
                  defaultValue: "#0B3C5D",
                  admin: { width: "50%", placeholder: "#0B3C5D" },
                },
              ],
            },
            {
              name: "formWidth",
              type: "select",
              label: "Form Width",
              defaultValue: "medium",
              options: [
                { label: "Small (400px)", value: "small" },
                { label: "Medium (600px)", value: "medium" },
                { label: "Large (800px)", value: "large" },
                { label: "Full Width", value: "full" },
              ],
            },
            {
              name: "labelPosition",
              type: "select",
              label: "Label Position",
              defaultValue: "top",
              options: [
                { label: "Above Field", value: "top" },
                { label: "Inline (Left)", value: "inline" },
                { label: "Floating", value: "floating" },
                { label: "Hidden (Placeholder Only)", value: "hidden" },
              ],
            },
          ],
        },
      ],
    },
    // Sidebar
    {
      name: "submissions",
      type: "number",
      label: "Total Submissions",
      defaultValue: 0,
      admin: { position: "sidebar", readOnly: true },
    },
  ],
};
