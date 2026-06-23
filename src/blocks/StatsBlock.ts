import type { Block } from "payload";

/**
 * Stats block — display key numbers and metrics
 */
export const StatsBlock: Block = {
  slug: "stats",
  interfaceName: "StatsBlock",
  labels: { singular: "Stats", plural: "Stats" },
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    {
      name: "style",
      type: "select",
      defaultValue: "dark",
      options: [
        { label: "Dark Background", value: "dark" },
        { label: "Light Background", value: "light" },
        { label: "Accent Background", value: "accent" },
      ],
    },
    {
      name: "stats",
      type: "array",
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: "value", type: "text", required: true, admin: { placeholder: "e.g. 98" } },
        { name: "suffix", type: "text", admin: { placeholder: "e.g. %, +, K" } },
        { name: "label", type: "text", required: true, admin: { placeholder: "e.g. Success Rate" } },
      ],
    },
  ],
};
