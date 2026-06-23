import type { CollectionConfig } from "payload";
import { logCollectionDelete, logActivity } from "@/lib/activityLogger";

/**
 * Track user logins without blocking the login response.
 * Awaiting DB writes here caused Neon "idle-in-transaction timeout" (60s+ hangs).
 */
const afterLogin = async ({ user, req }: { user: any; req: any }) => {
  const { payload } = req;

  void payload
    .update({
      collection: "users",
      id: user.id,
      data: { lastLogin: new Date().toISOString() },
      overrideAccess: true,
      context: { disableActivityLog: true },
    })
    .then(() =>
      logActivity({
        payload,
        action: "login",
        collection: "users",
        documentId: String(user.id),
        documentTitle: user.name || user.email,
        user,
      }),
    )
    .catch((err: unknown) => console.error("Failed to track login:", err));

  return user;
};

/**
 * Users — WordPress-style user management with roles and permissions.
 */
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Team Member", plural: "Team Members" },
  admin: {
    group: "⚙️ Settings",
    description: "Manage who can access the CMS — add or remove team members with different permission levels.",
    useAsTitle: "name",
    defaultColumns: ["name", "email", "role", "lastLogin"],
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 7, // 7 days
    maxLoginAttempts: 5,
    lockTime: 600 * 1000, // 10 minutes
  },
  hooks: {
    afterLogin: [afterLogin],
    afterDelete: [logCollectionDelete],
  },
  access: {
    // Admins can do everything, others can only read and update themselves
    read: ({ req: { user } }) => {
      if (!user) return false;
      if (user.role === "admin") return true;
      return { id: { equals: user.id } };
    },
    create: ({ req: { user } }) => user?.role === "admin",
    update: ({ req: { user } }) => {
      if (!user) return false;
      if (user.role === "admin") return true;
      // Non-admins can only update themselves
      return { id: { equals: user.id } };
    },
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Full Name",
          required: true,
          admin: { placeholder: "e.g. John Smith", width: "50%" },
        },
        {
          name: "role",
          type: "select",
          label: "User Role",
          required: true,
          defaultValue: "editor",
          admin: { width: "50%" },
          options: [
            { label: "👑 Administrator — Full access to everything", value: "admin" },
            { label: "✏️ Editor — Can edit all content, but no settings", value: "editor" },
            { label: "📝 Author — Can only manage their own posts", value: "author" },
            { label: "👀 Viewer — Read-only access", value: "viewer" },
          ],
        },
      ],
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Profile Photo",
      admin: { description: "Upload a profile picture (optional)" },
    },
    {
      type: "collapsible",
      label: "📋 Additional Info",
      admin: { initCollapsed: true },
      fields: [
        {
          name: "bio",
          type: "textarea",
          label: "Short Bio",
          admin: { placeholder: "Brief description for author profiles..." },
        },
        {
          type: "row",
          fields: [
            {
              name: "jobTitle",
              type: "text",
              label: "Job Title",
              admin: { placeholder: "e.g. Content Manager", width: "50%" },
            },
            {
              name: "phone",
              type: "text",
              label: "Phone",
              admin: { placeholder: "+64 21 123 4567", width: "50%" },
            },
          ],
        },
      ],
    },
    {
      name: "lastLogin",
      type: "date",
      label: "Last Login",
      admin: {
        readOnly: true,
        position: "sidebar",
        date: { pickerAppearance: "dayAndTime" },
      },
    },
  ],
};
