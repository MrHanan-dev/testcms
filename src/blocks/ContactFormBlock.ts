import type { Block } from "payload";

/**
 * Contact form block — embedded contact form with customizable fields
 */
export const ContactFormBlock: Block = {
  slug: "contactForm",
  interfaceName: "ContactFormBlock",
  labels: { singular: "Contact Form", plural: "Contact Forms" },
  fields: [
    { name: "heading", type: "text", defaultValue: "Get in Touch", required: true },
    { name: "description", type: "textarea" },
    {
      name: "style",
      type: "select",
      defaultValue: "standard",
      options: [
        { label: "Standard", value: "standard" },
        { label: "With Sidebar", value: "sidebar" },
        { label: "Compact", value: "compact" },
      ],
    },
    {
      name: "sidebarContent",
      type: "group",
      admin: { 
        condition: (_, siblingData) => siblingData?.style === "sidebar",
      },
      fields: [
        { name: "title", type: "text", defaultValue: "Let's Talk" },
        { name: "text", type: "textarea" },
        { name: "testimonialQuote", type: "textarea" },
        { name: "testimonialAuthor", type: "text" },
      ],
    },
    { name: "submitButtonText", type: "text", defaultValue: "Send Message" },
    { name: "successTitle", type: "text", defaultValue: "Message Sent!" },
    { name: "successMessage", type: "textarea", defaultValue: "Thank you for reaching out. We'll get back to you within 24 hours." },
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      label: "CMS Form (optional)",
      admin: {
        description: "Link a form from the Forms collection to capture submissions in Form Submissions",
      },
    },
  ],
};
