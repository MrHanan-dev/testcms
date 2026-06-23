import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";
import { notifyNewLead } from "@/lib/emailNotifications";

/**
 * CRM Leads — every website enquiry (contact, booking, cost-estimation forms)
 * lands here as a lead the team can work through a pipeline. Populated
 * server-side by /api/send-email, so the public forms are unchanged.
 *
 * Access: only authenticated CMS users can read/manage leads (never public).
 */
export const Leads: CollectionConfig = {
  slug: "leads",
  labels: { singular: "Lead", plural: "Leads" },
  admin: {
    group: "📬 CRM",
    description: "Manage enquiries from website forms — track status, add notes, assign to team.",
    useAsTitle: "name",
    defaultColumns: ["name", "email", "message", "status", "formType", "createdAt"],
    listSearchableFields: ["name", "email", "phone", "company", "subject", "message"],
    pagination: { defaultLimit: 25 },
  },
  // Newest enquiries first in the list.
  defaultSort: "-createdAt",
  hooks: {
    afterChange: [logCollectionChange, notifyNewLead],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user), // server persists via overrideAccess
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    // ── Main column: who they are + what they said ──────────────────────────
    {
      type: "row",
      fields: [
        { name: "name", type: "text", admin: { width: "50%" } },
        { name: "email", type: "text", admin: { width: "50%" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "phone", type: "text", admin: { width: "50%" } },
        { name: "company", type: "text", admin: { width: "50%" } },
      ],
    },
    {
      name: "subject",
      type: "text",
      admin: { description: "Course / project / batch of interest." },
    },
    {
      name: "message",
      type: "textarea",
      admin: { description: "The enquiry message the visitor submitted.", rows: 6 },
    },
    {
      name: "notes",
      type: "array",
      labels: { singular: "Note", plural: "Notes" },
      admin: { description: "Internal follow-up notes / activity log." },
      fields: [
        { name: "note", type: "textarea", required: true },
        {
          type: "row",
          fields: [
            { name: "addedBy", type: "relationship", relationTo: "users", admin: { width: "50%" } },
            {
              name: "at",
              type: "date",
              defaultValue: () => new Date().toISOString(),
              admin: { width: "50%", date: { pickerAppearance: "dayAndTime" } },
            },
          ],
        },
      ],
    },
    {
      name: "raw",
      type: "json",
      label: "Raw submission",
      admin: {
        description: "Full submitted payload (reference).",
        readOnly: true,
      },
    },
    // ── Sidebar: pipeline / triage ──────────────────────────────────────────
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      admin: { position: "sidebar", description: "Where this lead is in your pipeline." },
      options: [
        { label: "🟦 New", value: "new" },
        { label: "🟨 Contacted", value: "contacted" },
        { label: "🟧 Qualified", value: "qualified" },
        { label: "🟩 Won", value: "won" },
        { label: "⬜ Lost", value: "lost" },
      ],
    },
    {
      name: "assignedTo",
      type: "relationship",
      relationTo: "users",
      admin: { position: "sidebar", description: "Owner responsible for follow-up." },
    },
    {
      name: "formType",
      type: "text",
      admin: { position: "sidebar", readOnly: true, description: "Form the enquiry came from." },
    },
  ],
};
