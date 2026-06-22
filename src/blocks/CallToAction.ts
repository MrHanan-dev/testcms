import type { Block } from "payload";

/**
 * Call-to-action band — heading + button, reusing the site's .btn-primary style.
 */
export const CallToAction: Block = {
  slug: "cta",
  interfaceName: "CTABlock",
  labels: { singular: "Call to action", plural: "Calls to action" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "buttonLabel", type: "text", required: true },
    { name: "buttonHref", type: "text", required: true, defaultValue: "/training" },
  ],
};
