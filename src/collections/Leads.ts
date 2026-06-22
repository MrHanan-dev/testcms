import type { CollectionConfig } from "payload";

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
    group: "CRM",
    useAsTitle: "name",
    defaultColumns: ["name", "email", "status", "formType", "createdAt"],
    // Newest enquiries first.
    pagination: { defaultLimit: 25 },
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user), // server persists via overrideAccess
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      type: "row",
      fields: [
        { name: "name", type: "text", admin: { width: "50%" } },
        {
          name: "status",
          type: "select",
          defaultValue: "new",
          admin: { width: "50%" },
          options: [
            { label: "New", value: "new" },
            { label: "Contacted", value: "contacted" },
            { label: "Qualified", value: "qualified" },
            { label: "Won", value: "won" },
            { label: "Lost", value: "lost" },
          ],
        },
      ],
    },
    {
      type: "row",
      fields: [
        // Plain text (not validated 'email') so a malformed address never causes
        // a lead to be lost on capture.
        { name: "email", type: "text", admin: { width: "50%" } },
        { name: "phone", type: "text", admin: { width: "50%" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "company", type: "text", admin: { width: "50%" } },
        {
          name: "formType",
          type: "text",
          admin: { width: "50%", description: "Which form the enquiry came from." },
        },
      ],
    },
    { name: "subject", type: "text", admin: { description: "Course / project / batch of interest." } },
    { name: "message", type: "textarea" },
    {
      name: "assignedTo",
      type: "relationship",
      relationTo: "users",
      admin: { description: "Team member responsible for following up." },
    },
    {
      name: "notes",
      type: "array",
      labels: { singular: "Note", plural: "Notes" },
      admin: { description: "Internal follow-up notes / activity." },
      fields: [
        { name: "note", type: "textarea", required: true },
        {
          name: "addedBy",
          type: "relationship",
          relationTo: "users",
          admin: { width: "50%" },
        },
        {
          name: "at",
          type: "date",
          defaultValue: () => new Date().toISOString(),
          admin: { width: "50%", date: { pickerAppearance: "dayAndTime" } },
        },
      ],
    },
    {
      name: "raw",
      type: "json",
      admin: {
        description: "Full submitted payload (reference).",
        readOnly: true,
      },
    },
  ],
};
