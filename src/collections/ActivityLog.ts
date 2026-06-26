import type { CollectionConfig } from "payload";

/**
 * Activity Log — WordPress-style activity tracking.
 * Automatically records who changed what and when.
 */
export const ActivityLog: CollectionConfig = {
  slug: "activity-log",
  labels: { singular: "Activity", plural: "Activity Log" },
  admin: {
    group: "⚙️ Settings",
    description: "View a history of all content changes made by team members.",
    defaultColumns: ["action", "user", "collection", "documentTitle", "createdAt"],
    pagination: { defaultLimit: 50 },
  },
  defaultSort: "-createdAt",
  access: {
    read: ({ req: { user } }) => Boolean(user),
    // Only system (via overrideAccess) or authenticated users can create logs
    // This prevents public API spam of fake audit entries
    create: ({ req: { user } }) => Boolean(user),
    update: () => false, // No editing allowed
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "action",
          type: "select",
          label: "Action",
          required: true,
          admin: { width: "25%" },
          options: [
            { label: "✨ Created", value: "create" },
            { label: "✏️ Updated", value: "update" },
            { label: "🗑️ Deleted", value: "delete" },
            { label: "📤 Published", value: "publish" },
            { label: "📥 Unpublished", value: "unpublish" },
            { label: "🔑 Login", value: "login" },
            { label: "🚪 Logout", value: "logout" },
          ],
        },
        {
          name: "collection",
          type: "text",
          label: "Content Type",
          admin: { width: "25%" },
        },
        {
          name: "documentId",
          type: "text",
          label: "Document ID",
          admin: { width: "25%" },
        },
        {
          name: "documentTitle",
          type: "text",
          label: "Document Title",
          admin: { width: "25%" },
        },
      ],
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      label: "Changed By",
      admin: { description: "The user who performed this action" },
    },
    {
      name: "changes",
      type: "json",
      label: "Changes",
      admin: {
        description: "Detailed record of what was changed",
        readOnly: true,
      },
    },
    {
      name: "ipAddress",
      type: "text",
      label: "IP Address",
      admin: { position: "sidebar", readOnly: true },
    },
    {
      name: "userAgent",
      type: "text",
      label: "Browser/Device",
      admin: { position: "sidebar", readOnly: true },
    },
  ],
};
