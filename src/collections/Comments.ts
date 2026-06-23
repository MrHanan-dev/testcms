import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";
import { notifyNewComment } from "@/lib/emailNotifications";

/**
 * Comments — WordPress-style comment system for blog posts.
 * Supports moderation, replies, and spam filtering.
 */
export const Comments: CollectionConfig = {
  slug: "comments",
  labels: { singular: "Comment", plural: "Comments" },
  admin: {
    group: "📝 Content",
    description: "Manage blog comments — approve, reply, or mark as spam.",
    useAsTitle: "author",
    defaultColumns: ["author", "post", "status", "createdAt"],
  },
  hooks: {
    afterChange: [logCollectionChange, notifyNewComment],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      // Public can only see approved comments
      return { status: { equals: "approved" } };
    },
    create: () => true, // Anyone can submit a comment
    update: ({ req: { user } }) => Boolean(user), // Only admins can moderate
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  defaultSort: "-createdAt",
  fields: [
    // Status & Post
    {
      type: "row",
      fields: [
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "pending",
          required: true,
          admin: { width: "30%" },
          options: [
            { label: "⏳ Pending", value: "pending" },
            { label: "✅ Approved", value: "approved" },
            { label: "🚫 Spam", value: "spam" },
            { label: "🗑️ Trash", value: "trash" },
          ],
        },
        {
          name: "post",
          type: "relationship",
          relationTo: "posts",
          label: "Blog Post",
          required: true,
          admin: { width: "70%" },
        },
      ],
    },

    // Author Info
    {
      type: "row",
      fields: [
        {
          name: "author",
          type: "text",
          label: "Author Name",
          required: true,
          admin: { width: "50%", placeholder: "Commenter's name" },
        },
        {
          name: "email",
          type: "email",
          label: "Author Email",
          required: true,
          admin: { width: "50%", placeholder: "email@example.com" },
        },
      ],
    },
    {
      name: "website",
      type: "text",
      label: "Website (optional)",
      admin: { placeholder: "https://example.com" },
    },

    // Comment Content
    {
      name: "content",
      type: "textarea",
      label: "Comment",
      required: true,
      admin: {
        placeholder: "The comment text...",
        description: "Markdown is supported",
      },
    },

    // Reply to another comment
    {
      name: "parentComment",
      type: "relationship",
      relationTo: "comments",
      label: "Reply To",
      admin: {
        description: "If this is a reply, select the parent comment",
      },
    },

    // Admin response
    {
      name: "adminReply",
      type: "textarea",
      label: "Admin Reply",
      admin: {
        description: "Optional reply from site admin (shown publicly)",
        condition: (data) => data?.status === "approved",
      },
    },

    // Metadata (sidebar)
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
    {
      name: "isNotified",
      type: "checkbox",
      label: "Notification Sent",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Email notification sent to author",
      },
    },
  ],
};
