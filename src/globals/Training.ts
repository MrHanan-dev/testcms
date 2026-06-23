import type { GlobalConfig } from "payload";

/** Editable Training page (incl. the monthly schedule). Icons fixed in code. */
export const Training: GlobalConfig = {
  slug: "trainingPage",
  label: "Training Page",
  access: { read: () => true },
  admin: { group: "Service Pages" },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            { name: "heroTitle", type: "text" },
            { name: "heroDescription", type: "textarea" },
            { name: "heroBreadcrumb", type: "text" },
          ],
        },
        {
          label: "Intro",
          fields: [
            { name: "introEyebrow", type: "text" },
            { name: "introHeadingLine1", type: "text" },
            { name: "introHeadingLine2", type: "text" },
            { name: "introParagraph", type: "textarea" },
          ],
        },
        {
          label: "Categories",
          fields: [
            {
              name: "categories",
              type: "array",
              admin: { description: "Icons fixed by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
                {
                  name: "links",
                  type: "array",
                  fields: [{ name: "text", type: "text", required: true }],
                },
              ],
            },
          ],
        },
        {
          label: "Bespoke",
          fields: [
            { name: "bespokeHeading", type: "text" },
            { name: "bespokeParagraph", type: "textarea" },
            {
              name: "bespokeServices",
              type: "array",
              admin: { description: "Icons fixed by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
            { name: "bespokeBadgeTitle", type: "text" },
            { name: "bespokeBadgeText", type: "textarea" },
          ],
        },
        {
          label: "Resources",
          fields: [
            {
              name: "resources",
              type: "array",
              admin: { description: "Icons fixed by position." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "desc", type: "textarea" },
              ],
            },
          ],
        },
        {
          label: "Schedule",
          fields: [
            { name: "scheduleEyebrow", type: "text" },
            { name: "scheduleHeading", type: "text" },
            { name: "scheduleParagraph", type: "textarea" },
            {
              name: "scheduleItems",
              type: "array",
              label: "Course batches",
              admin: { initCollapsed: true },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "month", type: "text", required: true, admin: { width: "50%" } },
                    { name: "dates", type: "text", admin: { width: "50%" } },
                  ],
                },
                { name: "course", type: "text", required: true },
                {
                  type: "row",
                  fields: [
                    { name: "time", type: "text", admin: { width: "50%" } },
                    { name: "format", type: "text", admin: { width: "50%" } },
                  ],
                },
                {
                  name: "status",
                  type: "select",
                  defaultValue: "Open",
                  options: [
                    { label: "Open", value: "Open" },
                    { label: "Filling Fast", value: "Filling Fast" },
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
