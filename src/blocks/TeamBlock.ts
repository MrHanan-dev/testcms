import type { Block } from "payload";

/**
 * Team block — display team members from the collection or custom entries
 */
export const TeamBlock: Block = {
  slug: "team",
  interfaceName: "TeamBlock",
  labels: { singular: "Team", plural: "Team" },
  fields: [
    { name: "eyebrow", type: "text", admin: { placeholder: "e.g. Our Team" } },
    { name: "heading", type: "text", required: true, admin: { placeholder: "e.g. Meet the Experts" } },
    { name: "description", type: "textarea" },
    {
      name: "source",
      type: "select",
      defaultValue: "collection",
      options: [
        { label: "From Team Members Collection", value: "collection" },
        { label: "Custom (define below)", value: "custom" },
      ],
    },
    {
      name: "members",
      type: "array",
      admin: { 
        condition: (_, siblingData) => siblingData?.source === "custom",
        description: "Add team members manually if not using the collection" 
      },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "position", type: "text", required: true },
        { name: "photo", type: "upload", relationTo: "media" },
        { name: "bio", type: "textarea" },
        { name: "linkedin", type: "text" },
        { name: "email", type: "text" },
      ],
    },
    {
      name: "limit",
      type: "number",
      defaultValue: 6,
      admin: { 
        condition: (_, siblingData) => siblingData?.source === "collection",
        description: "Number of team members to show" 
      },
    },
  ],
};
