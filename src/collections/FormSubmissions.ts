import type { CollectionConfig, CollectionBeforeChangeHook } from "payload";
import { logCollectionChange, logCollectionDelete } from "../lib/activityLogger";

/**
 * Force "new" status on public submissions to prevent status manipulation via API.
 */
const forceNewStatus: CollectionBeforeChangeHook = ({ data, req, operation }) => {
  if (operation === "create" && !req.user) {
    return { ...data, status: "new" };
  }
  return data;
};

/**
 * Form Submissions — Store all form submissions.
 * WordPress-style form entries management.
 */
export const FormSubmissions: CollectionConfig = {
  slug: "form-submissions",
  labels: { singular: "Submission", plural: "Form Submissions" },
  admin: {
    group: "📬 CRM",
    description: "View and manage all form submissions from your website.",
    useAsTitle: "id",
    defaultColumns: ["form", "data", "status", "createdAt"],
  },
  hooks: {
    beforeChange: [forceNewStatus],
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // Public can submit forms
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  defaultSort: "-createdAt",
  fields: [
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      label: "Form",
      required: true,
      admin: { readOnly: true },
    },
    {
      name: "data",
      type: "json",
      label: "Submission Data",
      required: true,
      admin: {
        description: "All submitted field values",
        readOnly: true,
      },
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      defaultValue: "new",
      options: [
        { label: "🆕 New", value: "new" },
        { label: "👁️ Read", value: "read" },
        { label: "✅ Processed", value: "processed" },
        { label: "🗑️ Spam", value: "spam" },
      ],
    },
    {
      name: "notes",
      type: "textarea",
      label: "Internal Notes",
      admin: { description: "Add notes about this submission" },
    },
    // Metadata
    {
      name: "ipAddress",
      type: "text",
      label: "IP Address",
      admin: { position: "sidebar", readOnly: true },
    },
    {
      name: "userAgent",
      type: "text",
      label: "Browser",
      admin: { position: "sidebar", readOnly: true },
    },
    {
      name: "referrer",
      type: "text",
      label: "Referrer",
      admin: { position: "sidebar", readOnly: true },
    },
  ],
};
