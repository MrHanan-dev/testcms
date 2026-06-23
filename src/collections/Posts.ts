import type { CollectionConfig } from "payload";

/**
 * Blog posts — editable in the CMS. Metadata and optional rich-text body/FAQs;
 * empty body keeps the page's built-in JSX article until the client replaces it.
 */
export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Post", plural: "Posts" },
  admin: {
    group: "Site Content",
    useAsTitle: "title",
    defaultColumns: ["title", "category", "author", "date"],
    listSearchableFields: ["title", "abstract", "author", "category"],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { description: "URL path under /blog/, e.g. my-post-slug" },
    },
    { name: "abstract", type: "textarea" },
    { name: "date", type: "text", admin: { description: "Display date, e.g. April 07, 2026" } },
    { name: "author", type: "text" },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Project Management", value: "Project Management" },
        { label: "PMP Certification", value: "PMP Certification" },
        { label: "Construction Cost Estimation", value: "Construction Cost Estimation" },
        { label: "PMO & Governance", value: "PMO & Governance" },
      ],
    },
    {
      name: "imageUrl",
      type: "text",
      admin: { description: "Static image path when no featured image upload is set." },
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      admin: { description: "Optional upload; overrides imageUrl when set." },
    },
    { name: "readTime", type: "text" },
    {
      name: "body",
      type: "richText",
      admin: { description: "Optional rich-text body. Leave empty to keep the built-in article." },
    },
    {
      name: "faqItems",
      type: "array",
      admin: { description: "Optional FAQs. Leave empty to keep built-in FAQ copy for this slug." },
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
  ],
};
