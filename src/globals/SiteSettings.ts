import type { GlobalConfig } from "payload";

/**
 * Site-wide settings the client can edit without a developer — starting with the
 * things that appear on EVERY page (logo, contact details, socials).
 *
 * Everything is optional; the front-end falls back to the current hardcoded
 * values when a field is empty, so the live design is unchanged until the client
 * actually overrides something.
 */
export const SiteSettings: GlobalConfig = {
  slug: "siteSettings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Branding",
          fields: [
            {
              name: "logo",
              type: "upload",
              relationTo: "media",
              admin: { description: "Header logo. Leave empty to use the current default logo." },
            },
            {
              name: "companyName",
              type: "text",
              defaultValue: "TheAgileNest",
            },
          ],
        },
        {
          label: "Contact",
          fields: [
            { name: "phone", type: "text" },
            { name: "email", type: "text" },
            { name: "whatsapp", type: "text", admin: { description: "WhatsApp number in international format." } },
            { name: "address", type: "textarea" },
          ],
        },
        {
          label: "Social links",
          fields: [
            {
              name: "socials",
              type: "array",
              fields: [
                { name: "platform", type: "text" },
                { name: "url", type: "text" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
