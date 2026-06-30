import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Sliders — Image carousels and hero sliders.
 * WordPress-style slider builder.
 */
export const Sliders: CollectionConfig = {
  slug: "sliders",
  labels: { singular: "Slider", plural: "Sliders" },
  admin: {
    group: "📝 Content",
    description: "Create image carousels and hero sliders for your pages.",
    useAsTitle: "title",
    defaultColumns: ["title", "location", "slideCount", "status"],
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
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Slider Name",
          required: true,
          admin: { width: "60%", placeholder: "e.g. Homepage Hero" },
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "active",
          admin: { width: "40%" },
          options: [
            { label: "✅ Active", value: "active" },
            { label: "⏸️ Inactive", value: "inactive" },
          ],
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      label: "Slider ID",
      required: true,
      unique: true,
      admin: { placeholder: "homepage-hero" },
    },
    {
      name: "location",
      type: "select",
      label: "Location",
      options: [
        { label: "🏠 Homepage Hero", value: "homepage-hero" },
        { label: "📄 Page Header", value: "page-header" },
        { label: "🖼️ Content Section", value: "content" },
        { label: "📱 Sidebar", value: "sidebar" },
        { label: "🎓 Testimonials", value: "testimonials" },
        { label: "🤝 Partners/Clients", value: "partners" },
        { label: "📁 Custom", value: "custom" },
      ],
    },
    {
      name: "slides",
      type: "array",
      label: "Slides",
      labels: { singular: "Slide", plural: "Slides" },
      admin: { initCollapsed: false },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Background Image",
          required: true,
        },
        {
          name: "mobileImage",
          type: "upload",
          relationTo: "media",
          label: "Mobile Image (optional)",
          admin: { description: "Different image for mobile screens" },
        },
        {
          type: "row",
          fields: [
            {
              name: "heading",
              type: "text",
              label: "Heading",
              admin: { width: "50%" },
            },
            {
              name: "subheading",
              type: "text",
              label: "Subheading",
              admin: { width: "50%" },
            },
          ],
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
        },
        {
          type: "row",
          fields: [
            {
              name: "buttonText",
              type: "text",
              label: "Button Text",
              admin: { width: "50%", placeholder: "e.g. Learn More" },
            },
            {
              name: "buttonUrl",
              type: "text",
              label: "Button URL",
              admin: { width: "50%", placeholder: "/page-url" },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "secondButtonText",
              type: "text",
              label: "Second Button",
              admin: { width: "50%" },
            },
            {
              name: "secondButtonUrl",
              type: "text",
              label: "Second Button URL",
              admin: { width: "50%" },
            },
          ],
        },
        {
          name: "textPosition",
          type: "select",
          label: "Text Position",
          defaultValue: "center",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        {
          name: "overlay",
          type: "select",
          label: "Overlay",
          defaultValue: "medium",
          options: [
            { label: "None", value: "none" },
            { label: "Light", value: "light" },
            { label: "Medium", value: "medium" },
            { label: "Dark", value: "dark" },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "⚙️ Slider Settings",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "autoplay",
              type: "checkbox",
              label: "Autoplay",
              defaultValue: true,
              admin: { width: "25%" },
            },
            {
              name: "autoplaySpeed",
              type: "number",
              label: "Speed (ms)",
              defaultValue: 5000,
              admin: { width: "25%" },
            },
            {
              name: "pauseOnHover",
              type: "checkbox",
              label: "Pause on Hover",
              defaultValue: true,
              admin: { width: "25%" },
            },
            {
              name: "infinite",
              type: "checkbox",
              label: "Loop",
              defaultValue: true,
              admin: { width: "25%" },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "showArrows",
              type: "checkbox",
              label: "Show Arrows",
              defaultValue: true,
              admin: { width: "33%" },
            },
            {
              name: "showDots",
              type: "checkbox",
              label: "Show Dots",
              defaultValue: true,
              admin: { width: "33%" },
            },
            {
              name: "effect",
              type: "select",
              label: "Transition",
              defaultValue: "slide",
              admin: { width: "33%" },
              options: [
                { label: "Slide", value: "slide" },
                { label: "Fade", value: "fade" },
                { label: "Zoom", value: "zoom" },
              ],
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "height",
              type: "text",
              label: "Height",
              defaultValue: "600px",
              admin: { width: "50%", placeholder: "600px or 80vh" },
            },
            {
              name: "mobileHeight",
              type: "text",
              label: "Mobile Height",
              defaultValue: "400px",
              admin: { width: "50%" },
            },
          ],
        },
      ],
    },
    // Sidebar
    {
      name: "slideCount",
      type: "number",
      label: "Slides",
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            return siblingData?.slides?.length || 0;
          },
        ],
      },
    },
  ],
};
