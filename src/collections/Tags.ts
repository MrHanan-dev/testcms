import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "../lib/activityLogger";

/**
 * Tags — WordPress-style tags for organizing blog content.
 */
export const Tags: CollectionConfig = {
  slug: "tags",
  labels: { singular: "Tag", plural: "Tags" },
  admin: {
    group: "📝 Content",
    description: "Create tags to organize and categorize blog posts.",
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "color"],
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
          label: "Tag Name",
          required: true,
          admin: { placeholder: "e.g. Project Management", width: "50%" },
        },
        {
          name: "slug",
          type: "text",
          label: "URL Slug",
          required: true,
          unique: true,
          admin: {
            placeholder: "e.g. project-management",
            description: "Used in URLs (auto-generated from name)",
            width: "50%",
          },
        },
      ],
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      admin: { placeholder: "Brief description of this tag (for SEO)..." },
    },
    {
      name: "color",
      type: "select",
      label: "Tag Color",
      defaultValue: "blue",
      admin: { description: "Display color for this tag" },
      options: [
        { label: "🔵 Blue", value: "blue" },
        { label: "🟢 Green", value: "green" },
        { label: "🟡 Yellow", value: "yellow" },
        { label: "🟠 Orange", value: "orange" },
        { label: "🔴 Red", value: "red" },
        { label: "🟣 Purple", value: "purple" },
        { label: "⚫ Gray", value: "gray" },
      ],
    },
  ],
};
