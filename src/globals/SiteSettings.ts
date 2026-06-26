import type { GlobalConfig } from "payload";
import { logGlobalChange } from "@/lib/activityLogger";

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
    { name: "label", type: "text" as const, required: true, admin: { placeholder: "Link text" } },
    { name: "href", type: "text" as const, required: true, admin: { placeholder: "/page-url" } },
  ],
});

/**
 * Site Settings — Global configuration for the entire website.
 */
export const SiteSettings: GlobalConfig = {
  slug: "siteSettings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "⚙️ Settings",
    description: "Global settings — logo, contact info, navigation menu, footer links, and social media.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // ── Branding ────────────────────────────────────────────────────────
        {
          label: "🎨 Branding",
          description: "Logo, badges, and company identity — PRIMARY location for all branding settings",
          fields: [
            {
              name: "logo",
              type: "upload",
              relationTo: "media",
              label: "Website Logo",
              admin: {
                description: "💡 Upload your logo (PNG with transparent background recommended)",
              },
            },
            {
              name: "logoLight",
              type: "upload",
              relationTo: "media",
              label: "Logo (Light Version)",
              admin: {
                description: "💡 White/light version for dark backgrounds (optional)",
              },
            },
            {
              name: "favicon",
              type: "upload",
              relationTo: "media",
              label: "Favicon",
              admin: {
                description: "💡 Site icon shown in browser tabs (32x32 or 48x48 PNG recommended)",
              },
            },
            {
              name: "companyName",
              type: "text",
              label: "Company Name",
              defaultValue: "TheAgileNest",
              admin: { placeholder: "e.g. TheAgileNest" },
            },
            {
              type: "collapsible",
              label: "🏆 Badges & Certifications",
              admin: { initCollapsed: true },
              fields: [
                {
                  name: "pmiBadge",
                  type: "upload",
                  relationTo: "media",
                  label: "PMI Partner Badge",
                  admin: {
                    description: "💡 PMI Authorized Training Partner badge shown in footer",
                  },
                },
                {
                  name: "pmiBadgeAlt",
                  type: "text",
                  label: "PMI Badge Alt Text",
                  defaultValue: "PMI Authorized Training Partner Premier",
                  admin: { placeholder: "Description for accessibility" },
                },
              ],
            },
            {
              type: "collapsible",
              label: "🤝 Client Logos",
              admin: { 
                initCollapsed: true,
                description: "💡 Logos of your clients shown in the scrolling marquee"
              },
              fields: [
                {
                  name: "clientLogos",
                  type: "array",
                  label: "Client Logos",
                  labels: { singular: "Client Logo", plural: "Client Logos" },
                  fields: [
                    {
                      name: "image",
                      type: "upload",
                      relationTo: "media",
                      label: "Logo Image",
                      required: true,
                    },
                    {
                      name: "name",
                      type: "text",
                      label: "Client Name",
                      admin: { placeholder: "e.g. Company Name (for alt text)" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Contact Info ────────────────────────────────────────────────────
        {
          label: "📞 Contact Info",
          description: "How visitors can reach you",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "phone",
                  type: "text",
                  label: "Phone Number",
                  admin: { placeholder: "e.g. +64 21 123 4567", width: "50%" },
                },
                {
                  name: "email",
                  type: "text",
                  label: "Email Address",
                  admin: { placeholder: "e.g. info@theagilenest.co.nz", width: "50%" },
                },
              ],
            },
            {
              name: "whatsapp",
              type: "text",
              label: "WhatsApp Number",
              admin: {
                placeholder: "e.g. +64211234567",
                description: "International format without spaces (for WhatsApp links)",
              },
            },
            {
              name: "whatsappMessage",
              type: "text",
              label: "WhatsApp Prefilled Message",
              defaultValue: "Hello TheAgileNest, I'd like to inquire about your services.",
            },
            {
              name: "whatsappTooltip",
              type: "text",
              label: "WhatsApp Tooltip Text",
              defaultValue: "NEED HELP? CHAT NOW",
            },
            {
              name: "address",
              type: "textarea",
              label: "Office Address",
              admin: { placeholder: "Full address for the footer" },
            },
          ],
        },

        // ── Social Links ────────────────────────────────────────────────────
        {
          label: "🌐 Social Media",
          description: "Links to your social profiles",
          fields: [
            {
              name: "socials",
              type: "array",
              label: "Social Links",
              labels: { singular: "Social Link", plural: "Social Links" },
              admin: {
                description: "💡 Add links to LinkedIn, Facebook, Instagram, etc.",
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "platform",
                      type: "text",
                      label: "Platform",
                      admin: { placeholder: "e.g. LinkedIn", width: "40%" },
                    },
                    {
                      name: "url",
                      type: "text",
                      label: "URL",
                      admin: { placeholder: "e.g. https://linkedin.com/company/...", width: "60%" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Navigation ──────────────────────────────────────────────────────
        {
          label: "🧭 Navigation Menu",
          description: "Header navigation links",
          fields: [
            {
              name: "contactButton",
              type: "text",
              label: "Contact Button Text",
              admin: {
                placeholder: "e.g. Contact Us",
                description: "The button in the top-right of the header",
              },
            },
            {
              name: "navCategories",
              type: "array",
              label: "Navigation Menu",
              labels: { singular: "Menu Item", plural: "Menu Items" },
              admin: {
                description:
                  "⚠️ Legacy navigation (fallback). For more control, use the Menus collection with location 'Header (Primary)' instead. Icons are set automatically.",
                initCollapsed: true,
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "title",
                      type: "text",
                      label: "Menu Title",
                      required: true,
                      admin: { placeholder: "e.g. Services", width: "50%" },
                    },
                    {
                      name: "href",
                      type: "text",
                      label: "Link (optional)",
                      admin: { placeholder: "e.g. /services", width: "50%" },
                    },
                  ],
                },
                {
                  name: "items",
                  type: "array",
                  label: "Dropdown Items",
                  labels: { singular: "Item", plural: "Items" },
                  fields: [
                    {
                      name: "name",
                      type: "text",
                      label: "Name",
                      required: true,
                      admin: { placeholder: "e.g. Project Management" },
                    },
                    {
                      name: "desc",
                      type: "text",
                      label: "Description",
                      admin: { placeholder: "Brief description" },
                    },
                    {
                      name: "href",
                      type: "text",
                      label: "Link",
                      admin: { placeholder: "/project-management" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Footer ──────────────────────────────────────────────────────────
        {
          label: "📄 Footer",
          description: "Footer content and links",
          fields: [
            {
              type: "collapsible",
              label: "📬 Contact Section",
              fields: [
                {
                  name: "contactEyebrow",
                  type: "text",
                  label: "Label",
                  admin: { placeholder: "e.g. Get In Touch" },
                },
                {
                  name: "contactHeading",
                  type: "text",
                  label: "Heading",
                },
                {
                  name: "contactIntro",
                  type: "textarea",
                  label: "Introduction Text",
                },
                {
                  name: "clientsHeading",
                  type: "text",
                  label: "Clients Heading",
                },
              ],
            },
            {
              type: "collapsible",
              label: "📝 Contact Form",
              admin: { initCollapsed: true },
              fields: [
                {
                  name: "contactFormTitle",
                  type: "text",
                  label: "Form Title",
                  defaultValue: "Get in touch",
                  admin: { placeholder: "e.g. Get in touch" },
                },
                {
                  name: "contactFormSubtitle",
                  type: "textarea",
                  label: "Form Subtitle",
                  defaultValue: "Have questions about our training or consultancy services? We're here to help.",
                  admin: { placeholder: "Brief description..." },
                },
                {
                  name: "contactFormTestimonial",
                  type: "textarea",
                  label: "Testimonial Quote",
                  defaultValue: "TheAgileNest helped us navigate complex project hurdles with ease.",
                  admin: { placeholder: "A short testimonial quote..." },
                },
                {
                  name: "contactFormTestimonialAuthor",
                  type: "text",
                  label: "Testimonial Author",
                  defaultValue: "Project Lead, Auckland",
                  admin: { placeholder: "e.g. Project Lead, Auckland" },
                },
                {
                  name: "contactFormButtonText",
                  type: "text",
                  label: "Submit Button Text",
                  defaultValue: "Send Message",
                  admin: { placeholder: "e.g. Send Message" },
                },
                {
                  name: "contactFormSuccessTitle",
                  type: "text",
                  label: "Success Title",
                  defaultValue: "Message Sent!",
                  admin: { placeholder: "e.g. Message Sent!" },
                },
                {
                  name: "contactFormSuccessMessage",
                  type: "textarea",
                  label: "Success Message",
                  defaultValue: "Thank you for reaching out to TheAgileNest. Our advisors will review your message and get back to you within 24 hours.",
                  admin: { placeholder: "Success message shown after form submission..." },
                },
                {
                  type: "row",
                  fields: [
                    { name: "contactFormSidebarLabel", type: "text", label: "Sidebar Label", defaultValue: "Advisor Support", admin: { width: "50%" } },
                    { name: "contactFormResendText", type: "text", label: "Resend Link Text", defaultValue: "Send another message", admin: { width: "50%" } },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    { name: "contactFormNameLabel", type: "text", label: "Name Label", defaultValue: "Name", admin: { width: "33%" } },
                    { name: "contactFormEmailLabel", type: "text", label: "Email Label", defaultValue: "Email", admin: { width: "33%" } },
                    { name: "contactFormMessageLabel", type: "text", label: "Message Label", defaultValue: "Message", admin: { width: "33%" } },
                  ],
                },
                {
                  type: "row",
                  fields: [
                    { name: "contactFormNamePlaceholder", type: "text", label: "Name Placeholder", defaultValue: "Your name", admin: { width: "33%" } },
                    { name: "contactFormEmailPlaceholder", type: "text", label: "Email Placeholder", defaultValue: "your@email.com", admin: { width: "33%" } },
                    { name: "contactFormMessagePlaceholder", type: "text", label: "Message Placeholder", defaultValue: "How can we help you?", admin: { width: "33%" } },
                  ],
                },
                { name: "contactFormSendingText", type: "text", label: "Sending Button Text", defaultValue: "Sending..." },
              ],
            },
            {
              type: "collapsible",
              label: "🏢 Brand Description",
              fields: [
                {
                  name: "footerBrandPara1",
                  type: "textarea",
                  label: "Brand Paragraph 1",
                },
                {
                  name: "footerTagline",
                  type: "text",
                  label: "Tagline",
                  admin: { placeholder: "e.g. Where Knowledge Meets Experience" },
                },
                {
                  name: "footerBrandPara2",
                  type: "textarea",
                  label: "Brand Paragraph 2",
                },
              ],
            },
            {
              type: "collapsible",
              label: "🔗 Footer Link Columns",
              admin: {
                initCollapsed: true,
                description:
                  "⚠️ Legacy footer links (fallback). For more control, use the Menus collection with Footer locations instead.",
              },
              fields: [
                {
                  name: "footerOurServicesHeading",
                  type: "text",
                  label: "Services Column Title",
                  admin: { placeholder: "e.g. Our Services" },
                },
                linkList("footerOurServices", "Services Links"),
                {
                  name: "footerTrainingHeading",
                  type: "text",
                  label: "Training Column Title",
                  admin: { placeholder: "e.g. Training" },
                },
                linkList("footerTraining", "Training Links"),
                {
                  name: "footerResourcesHeading",
                  type: "text",
                  label: "Resources Column Title",
                  admin: { placeholder: "e.g. Resources" },
                },
                linkList("footerResources", "Resources Links"),
              ],
            },
            {
              type: "collapsible",
              label: "📍 Office Locations",
              fields: [
                {
                  name: "footerContactHeading",
                  type: "text",
                  label: "Contact Heading",
                  admin: { placeholder: "e.g. Contact Us" },
                },
                {
                  name: "offices",
                  type: "array",
                  label: "Office Locations",
                  labels: { singular: "Office", plural: "Offices" },
                  fields: [
                    {
                      name: "label",
                      type: "text",
                      label: "Office Name",
                      required: true,
                      admin: { placeholder: "e.g. Auckland Office" },
                    },
                    {
                      name: "address",
                      type: "textarea",
                      label: "Address",
                    },
                  ],
                },
                list("footerPhones", "Phone Numbers"),
                {
                  name: "footerEmail",
                  type: "text",
                  label: "Email",
                },
              ],
            },
            {
              type: "collapsible",
              label: "⚖️ Legal & Copyright",
              fields: [
                {
                  name: "copyrightText",
                  type: "text",
                  label: "Copyright Text",
                  admin: { placeholder: "e.g. © 2026 TheAgileNest. All rights reserved." },
                },
                {
                  type: "row",
                  fields: [
                    {
                      name: "privacyLabel",
                      type: "text",
                      label: "Privacy Link Text",
                      admin: { placeholder: "e.g. Privacy Policy", width: "25%" },
                    },
                    {
                      name: "privacyHref",
                      type: "text",
                      label: "Privacy URL",
                      admin: { placeholder: "/privacy", width: "25%" },
                    },
                    {
                      name: "termsLabel",
                      type: "text",
                      label: "Terms Link Text",
                      admin: { placeholder: "e.g. Terms of Service", width: "25%" },
                    },
                    {
                      name: "termsHref",
                      type: "text",
                      label: "Terms URL",
                      admin: { placeholder: "/terms", width: "25%" },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ── Company Bio ─────────────────────────────────────────────────────
        {
          label: "📝 Company Bio",
          description: "About section used in various places",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "companyBioHeadingLead",
                  type: "text",
                  label: "Heading (Main)",
                  admin: { width: "50%" },
                },
                {
                  name: "companyBioHeadingAccent",
                  type: "text",
                  label: "Heading (Accent)",
                  admin: { width: "50%" },
                },
              ],
            },
            list("companyBioParagraphs", "Bio Paragraphs"),
            {
              name: "companyBioFeatures",
              type: "array",
              label: "Feature Cards",
              labels: { singular: "Feature", plural: "Features" },
              admin: {
                description: "💡 4 feature cards. Icons are set automatically.",
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
                  name: "desc",
                  type: "textarea",
                  label: "Description",
                },
              ],
            },
          ],
        },

        // ── Site Tools ────────────────────────────────────────────────────────
        {
          label: "🛠️ Site Tools",
          description: "Maintenance mode, redirects, and advanced settings",
          fields: [
            {
              type: "collapsible",
              label: "🚧 Maintenance Mode",
              fields: [
                {
                  name: "maintenanceMode",
                  type: "checkbox",
                  label: "Enable Maintenance Mode",
                  defaultValue: false,
                  admin: {
                    description: "⚠️ When enabled, visitors see a maintenance page instead of your site",
                  },
                },
                {
                  name: "maintenanceTitle",
                  type: "text",
                  label: "Maintenance Title",
                  defaultValue: "We'll Be Back Soon",
                  admin: { placeholder: "e.g. Site Under Maintenance" },
                },
                {
                  name: "maintenanceMessage",
                  type: "textarea",
                  label: "Maintenance Message",
                  defaultValue: "We're performing scheduled maintenance. Please check back in a few hours.",
                  admin: { placeholder: "Message shown to visitors..." },
                },
                {
                  name: "maintenanceAllowedIPs",
                  type: "array",
                  label: "Allowed IP Addresses",
                  labels: { singular: "IP", plural: "IPs" },
                  admin: { description: "IPs that can bypass maintenance mode (e.g., your office)" },
                  fields: [
                    {
                      name: "ip",
                      type: "text",
                      required: true,
                      admin: { placeholder: "e.g. 192.168.1.1" },
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "🤖 SEO & Robots",
              fields: [
                {
                  name: "robotsTxt",
                  type: "code",
                  label: "robots.txt Content",
                  admin: {
                    language: "plaintext",
                    description: "Custom robots.txt rules (leave empty for default)",
                  },
                },
                {
                  name: "googleVerification",
                  type: "text",
                  label: "Google Site Verification",
                  admin: {
                    placeholder: "e.g. abc123xyz",
                    description: "Google Search Console verification code",
                  },
                },
                {
                  name: "bingVerification",
                  type: "text",
                  label: "Bing Site Verification",
                  admin: {
                    placeholder: "e.g. 123ABC456",
                    description: "Bing Webmaster verification code",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "📊 Analytics",
              fields: [
                {
                  name: "googleAnalyticsId",
                  type: "text",
                  label: "Google Analytics ID",
                  admin: {
                    placeholder: "e.g. G-XXXXXXXXXX",
                    description: "Your GA4 measurement ID",
                  },
                },
                {
                  name: "googleTagManagerId",
                  type: "text",
                  label: "Google Tag Manager ID",
                  admin: {
                    placeholder: "e.g. GTM-XXXXXXX",
                    description: "Your GTM container ID",
                  },
                },
                {
                  name: "facebookPixelId",
                  type: "text",
                  label: "Facebook Pixel ID",
                  admin: {
                    placeholder: "e.g. 1234567890",
                    description: "For Facebook/Meta ads tracking",
                  },
                },
              ],
            },
            {
              type: "collapsible",
              label: "📧 Email Settings",
              fields: [
                {
                  name: "emailNotifyNewLead",
                  type: "checkbox",
                  label: "Email on New Lead",
                  defaultValue: true,
                  admin: { description: "Send email notification when new enquiry is received" },
                },
                {
                  name: "emailNotifyNewComment",
                  type: "checkbox",
                  label: "Email on New Comment",
                  defaultValue: true,
                  admin: { description: "Send email notification when new comment is posted" },
                },
                {
                  name: "notificationEmails",
                  type: "array",
                  label: "Notification Recipients",
                  labels: { singular: "Email", plural: "Emails" },
                  admin: { description: "Who should receive notification emails" },
                  fields: [
                    {
                      name: "email",
                      type: "email",
                      required: true,
                      admin: { placeholder: "e.g. admin@theagilenest.co.nz" },
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "🔒 Security",
              fields: [
                {
                  name: "recaptchaSiteKey",
                  type: "text",
                  label: "reCAPTCHA Site Key",
                  admin: {
                    placeholder: "e.g. 6Le...",
                    description: "Google reCAPTCHA v3 site key for form protection",
                  },
                },
                {
                  name: "recaptchaSecretKey",
                  type: "text",
                  label: "reCAPTCHA Secret Key",
                  access: {
                    read: ({ req: { user } }) => Boolean(user),
                  },
                  admin: {
                    placeholder: "e.g. 6Le...",
                    description: "Keep this secret! Used server-side",
                  },
                },
                {
                  name: "honeypotFieldName",
                  type: "text",
                  label: "Honeypot Field Name",
                  defaultValue: "website_url",
                  admin: {
                    description: "Hidden field name for spam bot detection",
                  },
                },
              ],
            },
          ],
        },

        // ── JSON-LD / Structured Data ──────────────────────────────────────────
        {
          label: "📊 Structured Data",
          description: "JSON-LD for Google Search rich results",
          fields: [
            {
              type: "collapsible",
              label: "Organization Schema",
              admin: { initCollapsed: false, description: "Company info shown in Google Knowledge Panel" },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "schemaOrgName", type: "text", label: "Organization Name", admin: { width: "50%", placeholder: "e.g. TheAgileNest" } },
                    { name: "schemaOrgType", type: "text", label: "Organization Type", defaultValue: "ProfessionalService", admin: { width: "50%", placeholder: "e.g. ProfessionalService, EducationalOrganization" } },
                  ],
                },
                { name: "schemaOrgDescription", type: "textarea", label: "Description", admin: { placeholder: "Brief description for search results..." } },
                {
                  name: "schemaOrgImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Organization Image",
                  admin: { description: "Logo or image for structured data (recommended: 1200x630px)" },
                },
                {
                  type: "row",
                  fields: [
                    { name: "schemaFoundingDate", type: "text", label: "Founding Date", admin: { width: "33%", placeholder: "e.g. 2007" } },
                    { name: "schemaFounderName", type: "text", label: "Founder Name", admin: { width: "33%", placeholder: "e.g. Engr. Syed Amjad Iqbal" } },
                    { name: "schemaPriceRange", type: "text", label: "Price Range", defaultValue: "$$", admin: { width: "33%", placeholder: "e.g. $, $$, $$$" } },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "Local Business Schema",
              admin: { initCollapsed: true, description: "Address and contact info for local search" },
              fields: [
                { name: "schemaStreetAddress", type: "text", label: "Street Address", admin: { placeholder: "e.g. 123 Queen Street" } },
                {
                  type: "row",
                  fields: [
                    { name: "schemaCity", type: "text", label: "City", admin: { width: "33%", placeholder: "e.g. Auckland" } },
                    { name: "schemaRegion", type: "text", label: "Region/State", admin: { width: "33%", placeholder: "e.g. Auckland" } },
                    { name: "schemaPostalCode", type: "text", label: "Postal Code", admin: { width: "33%", placeholder: "e.g. 1010" } },
                  ],
                },
                { name: "schemaCountry", type: "text", label: "Country", defaultValue: "NZ", admin: { placeholder: "e.g. NZ, AU, US" } },
                {
                  type: "row",
                  fields: [
                    { name: "schemaLatitude", type: "text", label: "Latitude", admin: { width: "50%", placeholder: "e.g. -36.8485" } },
                    { name: "schemaLongitude", type: "text", label: "Longitude", admin: { width: "50%", placeholder: "e.g. 174.7633" } },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "Services Schema",
              admin: { initCollapsed: true, description: "Define services offered for rich search results" },
              fields: [
                {
                  name: "schemaServices",
                  type: "array",
                  label: "Services",
                  labels: { singular: "Service", plural: "Services" },
                  fields: [
                    { name: "name", type: "text", label: "Service Name", required: true, admin: { placeholder: "e.g. PMP Certification Training" } },
                    { name: "description", type: "textarea", label: "Description", admin: { placeholder: "Brief description of the service..." } },
                    { name: "url", type: "text", label: "Service URL", admin: { placeholder: "e.g. /pmp" } },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "Aggregate Rating",
              admin: { initCollapsed: true, description: "Overall rating shown in search results" },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "schemaRatingValue", type: "text", label: "Rating Value", defaultValue: "4.9", admin: { width: "33%", placeholder: "e.g. 4.9" } },
                    { name: "schemaReviewCount", type: "text", label: "Review Count", defaultValue: "127", admin: { width: "33%", placeholder: "e.g. 127" } },
                    { name: "schemaBestRating", type: "text", label: "Best Rating", defaultValue: "5", admin: { width: "33%", placeholder: "e.g. 5" } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
