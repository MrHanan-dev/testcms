import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Menus — Navigation menu builder.
 * WordPress-style menu management.
 */
export const Menus: CollectionConfig = {
  slug: "menus",
  labels: { singular: "Menu", plural: "Menus" },
  admin: {
    group: "⚙️ Settings",
    description:
      "Create and manage navigation menus for your website. Menus defined here will override the default navigation in Site Settings when active.",
    useAsTitle: "name",
    defaultColumns: ["name", "location", "isActive", "itemCount"],
  },
  hooks: {
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Menu Name",
          required: true,
          admin: { width: "50%", placeholder: "e.g. Main Navigation" },
        },
        {
          name: "location",
          type: "select",
          label: "Location",
          required: true,
          admin: { width: "50%" },
          options: [
            { label: "🔝 Header (Primary)", value: "header-primary" },
            { label: "📱 Mobile Menu", value: "mobile" },
            { label: "📄 Footer Column 1", value: "footer-1" },
            { label: "📄 Footer Column 2", value: "footer-2" },
            { label: "📄 Footer Column 3", value: "footer-3" },
            { label: "📍 Footer Bottom", value: "footer-bottom" },
            { label: "📱 Social Links", value: "social" },
          ],
        },
      ],
    },
    {
      name: "items",
      type: "array",
      label: "Menu Items",
      labels: { singular: "Item", plural: "Items" },
      admin: { initCollapsed: false },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "label",
              type: "text",
              label: "Label",
              required: true,
              admin: { width: "40%", placeholder: "e.g. About Us" },
            },
            {
              name: "url",
              type: "text",
              label: "URL",
              admin: { width: "40%", placeholder: "/about or https://..." },
            },
            {
              name: "openInNewTab",
              type: "checkbox",
              label: "New Tab",
              defaultValue: false,
              admin: { width: "20%" },
            },
          ],
        },
        {
          name: "type",
          type: "select",
          label: "Link Type",
          defaultValue: "link",
          options: [
            { label: "🔗 Link", value: "link" },
            { label: "📂 Dropdown Parent", value: "dropdown" },
            { label: "➖ Divider", value: "divider" },
            { label: "📢 Heading (no link)", value: "heading" },
          ],
        },
        {
          name: "icon",
          type: "text",
          label: "Icon (emoji or class)",
          admin: { placeholder: "🏠 or icon-home" },
        },
        {
          name: "description",
          type: "text",
          label: "Description",
          admin: { placeholder: "Shown in mega menus" },
        },
        {
          name: "children",
          type: "array",
          label: "Submenu Items",
          admin: {
            condition: (_, siblingData) => siblingData?.type === "dropdown",
          },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "label",
                  type: "text",
                  required: true,
                  admin: { width: "40%" },
                },
                {
                  name: "url",
                  type: "text",
                  admin: { width: "40%" },
                },
                {
                  name: "openInNewTab",
                  type: "checkbox",
                  defaultValue: false,
                  admin: { width: "20%" },
                },
              ],
            },
            {
              name: "description",
              type: "text",
              label: "Description",
            },
            {
              name: "icon",
              type: "text",
              label: "Icon",
            },
          ],
        },
        {
          name: "highlight",
          type: "checkbox",
          label: "Highlight (e.g. CTA button)",
          defaultValue: false,
        },
        {
          name: "cssClass",
          type: "text",
          label: "CSS Class",
          admin: { placeholder: "custom-class" },
        },
      ],
    },
    // Sidebar
    {
      name: "itemCount",
      type: "number",
      label: "Items",
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            return siblingData?.items?.length || 0;
          },
        ],
      },
    },
    {
      name: "isActive",
      type: "checkbox",
      label: "Active",
      defaultValue: true,
      admin: { position: "sidebar" },
    },
  ],
};
