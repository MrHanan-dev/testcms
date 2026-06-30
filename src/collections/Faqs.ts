import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * FAQs — Frequently Asked Questions manager.
 * WordPress-style FAQ management with categories.
 */
export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  admin: {
    group: "📝 Content",
    description: "Manage frequently asked questions organized by category.",
    useAsTitle: "question",
    defaultColumns: ["question", "category", "order", "status"],
  },
  hooks: {
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === "admin" || user?.role === "editor",
  },
  fields: [
    {
      name: "question",
      type: "text",
      label: "Question",
      required: true,
      admin: { placeholder: "e.g. How long is the PMP certification valid?" },
    },
    {
      name: "answer",
      type: "textarea",
      label: "Answer",
      required: true,
      admin: {
        rows: 4,
        placeholder: "Provide a clear, helpful answer...",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "category",
          type: "select",
          label: "Category",
          required: true,
          admin: { width: "50%" },
          options: [
            { label: "📋 General", value: "general" },
            { label: "🎓 PMP Certification", value: "pmp" },
            { label: "🎓 CAPM Certification", value: "capm" },
            { label: "🎓 PMI-CP Certification", value: "pmi-cp" },
            { label: "📊 Project Management", value: "project-management" },
            { label: "💰 Cost Estimation", value: "cost-estimation" },
            { label: "📝 Contract Management", value: "contract-management" },
            { label: "💼 Consulting", value: "consulting" },
            { label: "📚 Training", value: "training" },
            { label: "💳 Pricing & Payment", value: "pricing" },
            { label: "🤝 Partnership", value: "partnership" },
            { label: "📞 Contact & Support", value: "support" },
          ],
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "published",
          admin: { width: "50%" },
          options: [
            { label: "✅ Published", value: "published" },
            { label: "📝 Draft", value: "draft" },
          ],
        },
      ],
    },
    {
      name: "relatedPage",
      type: "select",
      label: "Show on Page",
      hasMany: true,
      options: [
        { label: "Home", value: "home" },
        { label: "About", value: "about" },
        { label: "PMP", value: "pmp" },
        { label: "CAPM", value: "capm" },
        { label: "PMI-CP", value: "pmi-cp" },
        { label: "Consulting", value: "consulting" },
        { label: "Training", value: "training" },
        { label: "Contact", value: "contact" },
      ],
      admin: { description: "Select which pages should display this FAQ" },
    },
    // Sidebar
    {
      name: "order",
      type: "number",
      label: "Display Order",
      defaultValue: 0,
      admin: { position: "sidebar", description: "Lower numbers appear first" },
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured",
      defaultValue: false,
      admin: { position: "sidebar", description: "Highlight this FAQ" },
    },
    {
      name: "helpfulCount",
      type: "number",
      label: "Helpful Votes",
      defaultValue: 0,
      admin: { position: "sidebar", readOnly: true },
    },
  ],
};
