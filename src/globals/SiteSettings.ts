import type { GlobalConfig } from "payload";

const list = (name: string, label?: string) => ({
  name,
  type: "array" as const,
  ...(label ? { label } : {}),
  fields: [{ name: "text", type: "text" as const, required: true }],
});

const linkList = (name: string, label?: string) => ({
  name,
  type: "array" as const,
  ...(label ? { label } : {}),
  fields: [
    { name: "label", type: "text" as const, required: true },
    { name: "href", type: "text" as const, required: true },
  ],
});

/**
 * Site-wide settings the client can edit without a developer — logo, contact,
 * header navigation, footer copy and link columns.
 */
export const SiteSettings: GlobalConfig = {
  slug: "siteSettings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  admin: { group: "Site Content" },
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
        {
          label: "Navigation",
          fields: [
            { name: "contactButton", type: "text", admin: { description: "Header CTA button label." } },
            {
              name: "navCategories",
              type: "array",
              admin: { description: "Main nav dropdowns. Icons are fixed in code by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "href", type: "text" },
                {
                  name: "items",
                  type: "array",
                  fields: [
                    { name: "name", type: "text", required: true },
                    { name: "desc", type: "text" },
                    { name: "href", type: "text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Footer",
          fields: [
            { name: "contactEyebrow", type: "text" },
            { name: "contactHeading", type: "text" },
            { name: "contactIntro", type: "textarea" },
            { name: "clientsHeading", type: "text" },
            { name: "footerBrandPara1", type: "textarea" },
            { name: "footerTagline", type: "text" },
            { name: "footerBrandPara2", type: "textarea" },
            { name: "footerOurServicesHeading", type: "text" },
            linkList("footerOurServices", "Our services links"),
            { name: "footerTrainingHeading", type: "text" },
            linkList("footerTraining", "Training links"),
            { name: "footerResourcesHeading", type: "text" },
            linkList("footerResources", "Resources links"),
            { name: "footerContactHeading", type: "text" },
            {
              name: "offices",
              type: "array",
              fields: [
                { name: "label", type: "text", required: true },
                { name: "address", type: "textarea" },
              ],
            },
            list("footerPhones", "Phone numbers"),
            { name: "footerEmail", type: "text" },
            { name: "copyrightText", type: "text" },
            { name: "privacyLabel", type: "text" },
            { name: "privacyHref", type: "text" },
            { name: "termsLabel", type: "text" },
            { name: "termsHref", type: "text" },
          ],
        },
        {
          label: "Company bio",
          fields: [
            { name: "companyBioHeadingLead", type: "text" },
            { name: "companyBioHeadingAccent", type: "text" },
            list("companyBioParagraphs", "Bio paragraphs"),
            {
              name: "companyBioFeatures",
              type: "array",
              admin: { description: "4 feature cards. Icons are fixed in code by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
