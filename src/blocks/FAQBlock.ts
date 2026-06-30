import type { Block } from "payload";

/**
 * FAQ block — accordion-style frequently asked questions
 */
export const FAQBlock: Block = {
  slug: "faq",
  interfaceName: "FAQBlock",
  labels: { singular: "FAQ", plural: "FAQs" },
  fields: [
    { name: "eyebrow", type: "text", defaultValue: "FAQ" },
    { name: "heading", type: "text", required: true, admin: { placeholder: "e.g. Frequently Asked Questions" } },
    { name: "description", type: "textarea" },
    {
      name: "items",
      type: "array",
      minRows: 1,
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
    { 
      name: "contactPrompt", 
      type: "text", 
      defaultValue: "Have a specific question?",
      admin: { description: "CTA text shown below FAQs" }
    },
    { 
      name: "contactLinkText", 
      type: "text", 
      defaultValue: "Contact us today",
    },
  ],
};
