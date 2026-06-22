import type { Block } from "payload";

/**
 * Rich text section — a constrained-width prose block, styled with the same
 * `prose` classes the blog body uses, so editor content matches the brand.
 */
export const RichTextBlock: Block = {
  slug: "richText",
  interfaceName: "RichTextBlock",
  labels: { singular: "Rich text", plural: "Rich text" },
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
};
