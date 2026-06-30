import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Pricing Plans — Service packages and pricing tables.
 * WordPress-style pricing management.
 */
export const PricingPlans: CollectionConfig = {
  slug: "pricing-plans",
  labels: { singular: "Pricing Plan", plural: "Pricing Plans" },
  admin: {
    group: "📝 Content",
    description: "Manage service packages, pricing tiers, and special offers.",
    useAsTitle: "name",
    defaultColumns: ["name", "price", "category", "featured", "status"],
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
          label: "Plan Name",
          required: true,
          admin: { width: "50%", placeholder: "e.g. PMP Certification Course" },
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "active",
          admin: { width: "25%" },
          options: [
            { label: "✅ Active", value: "active" },
            { label: "⏸️ Hidden", value: "hidden" },
            { label: "🗄️ Archived", value: "archived" },
          ],
        },
        {
          name: "featured",
          type: "checkbox",
          label: "Featured",
          defaultValue: false,
          admin: { width: "25%", description: "Highlight this plan" },
        },
      ],
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle/Tagline",
      admin: { placeholder: "e.g. Most Popular Choice" },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      admin: { placeholder: "Brief description of what's included..." },
    },
    {
      name: "category",
      type: "select",
      label: "Category",
      options: [
        { label: "🎓 Certification Training", value: "certification" },
        { label: "💼 Consulting Services", value: "consulting" },
        { label: "📚 Workshops", value: "workshop" },
        { label: "🎯 Coaching", value: "coaching" },
        { label: "📦 Bundles", value: "bundle" },
      ],
    },
    {
      type: "collapsible",
      label: "💰 Pricing",
      admin: { initCollapsed: false },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "price",
              type: "number",
              label: "Price",
              required: true,
              admin: { width: "25%" },
            },
            {
              name: "currency",
              type: "select",
              label: "Currency",
              defaultValue: "NZD",
              admin: { width: "25%" },
              options: [
                { label: "NZD $", value: "NZD" },
                { label: "USD $", value: "USD" },
                { label: "AUD $", value: "AUD" },
                { label: "GBP £", value: "GBP" },
                { label: "EUR €", value: "EUR" },
              ],
            },
            {
              name: "billingPeriod",
              type: "select",
              label: "Billing",
              defaultValue: "one-time",
              admin: { width: "25%" },
              options: [
                { label: "One-time", value: "one-time" },
                { label: "Per Month", value: "monthly" },
                { label: "Per Year", value: "yearly" },
                { label: "Per Person", value: "per-person" },
                { label: "Custom", value: "custom" },
              ],
            },
            {
              name: "priceNote",
              type: "text",
              label: "Price Note",
              admin: { width: "25%", placeholder: "+GST" },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "originalPrice",
              type: "number",
              label: "Original Price (for discounts)",
              admin: { width: "33%" },
            },
            {
              name: "discountLabel",
              type: "text",
              label: "Discount Badge",
              admin: { width: "33%", placeholder: "e.g. Save 20%" },
            },
            {
              name: "discountEnds",
              type: "date",
              label: "Discount Ends",
              admin: { width: "33%", date: { pickerAppearance: "dayOnly" } },
            },
          ],
        },
      ],
    },
    {
      name: "features",
      type: "array",
      label: "Features Included",
      labels: { singular: "Feature", plural: "Features" },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              admin: { width: "70%", placeholder: "e.g. 35 hours of instruction" },
            },
            {
              name: "included",
              type: "checkbox",
              label: "Included",
              defaultValue: true,
              admin: { width: "15%" },
            },
            {
              name: "highlight",
              type: "checkbox",
              label: "Highlight",
              defaultValue: false,
              admin: { width: "15%" },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "🔘 Call to Action",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "buttonText",
              type: "text",
              label: "Button Text",
              defaultValue: "Enroll Now",
              admin: { width: "50%" },
            },
            {
              name: "buttonUrl",
              type: "text",
              label: "Button URL",
              admin: { width: "50%", placeholder: "/contact?plan=pmp" },
            },
          ],
        },
        {
          name: "buttonStyle",
          type: "select",
          label: "Button Style",
          defaultValue: "primary",
          options: [
            { label: "Primary (Filled)", value: "primary" },
            { label: "Secondary (Outline)", value: "secondary" },
            { label: "Accent", value: "accent" },
          ],
        },
      ],
    },
    {
      name: "additionalInfo",
      type: "richText",
      label: "Additional Information",
      admin: { description: "Extra details, terms, etc." },
    },
    // Sidebar
    {
      name: "order",
      type: "number",
      label: "Display Order",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
    {
      name: "badge",
      type: "text",
      label: "Badge Text",
      admin: { position: "sidebar", placeholder: "e.g. Best Value" },
    },
    {
      name: "icon",
      type: "text",
      label: "Icon (emoji)",
      admin: { position: "sidebar", placeholder: "🎓" },
    },
  ],
};
