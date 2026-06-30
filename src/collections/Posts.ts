import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

/**
 * Blog Posts — WordPress-style blog with scheduling, tags, SEO, and revisions.
 */
export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Blog Post", plural: "Blog Posts" },
  admin: {
    group: "📝 Content",
    description: "Create and manage blog articles with scheduling, tags, and SEO optimization.",
    useAsTitle: "title",
    defaultColumns: ["title", "status", "author", "publishDate", "updatedAt"],
    listSearchableFields: ["title", "abstract", "author", "category"],
    preview: (doc) => {
      if (doc?.slug) {
        return `${process.env.NEXT_PUBLIC_SITE_URL || ""}/blog/${doc.slug}`;
      }
      return null;
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 30000, // 30 seconds
      },
    },
    maxPerDoc: 10,
  },
  hooks: {
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      // Public can only see published, non-deleted posts
      return {
        status: { equals: "published" },
        isDeleted: { not_equals: true },
      };
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => {
      if (!user) return false;
      if (user.role === "admin" || user.role === "editor") return true;
      // Authors can only edit their own posts (simplified)
      return { authorUser: { equals: user.id } };
    },
    delete: ({ req: { user } }) => user?.role === "admin" || user?.role === "editor",
  },
  fields: [
    // Title & Status Row
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Article Title",
          required: true,
          admin: { placeholder: "e.g. How to Pass the PMP Exam on Your First Attempt", width: "70%" },
        },
        {
          name: "status",
          type: "select",
          label: "Status",
          defaultValue: "draft",
          admin: { width: "30%" },
          options: [
            { label: "📝 Draft", value: "draft" },
            { label: "👀 Pending Review", value: "pending" },
            { label: "✅ Published", value: "published" },
            { label: "📅 Scheduled", value: "scheduled" },
            { label: "🗄️ Archived", value: "archived" },
          ],
        },
      ],
    },
    
    // URL & Category
    {
      type: "row",
      fields: [
        {
          name: "slug",
          type: "text",
          label: "URL Slug",
          required: true,
          unique: true,
          index: true,
          admin: {
            placeholder: "e.g. how-to-pass-pmp-exam",
            description: "💡 The URL: /blog/your-slug-here",
            width: "50%",
          },
        },
        {
          name: "category",
          type: "select",
          label: "Category",
          admin: { width: "50%" },
          options: [
            { label: "📊 Project Management", value: "Project Management" },
            { label: "🎓 PMP Certification", value: "PMP Certification" },
            { label: "💰 Construction Cost Estimation", value: "Construction Cost Estimation" },
            { label: "🏢 PMO & Governance", value: "PMO & Governance" },
          ],
        },
      ],
    },

    // Summary
    {
      name: "abstract",
      type: "textarea",
      label: "Summary / Excerpt",
      admin: {
        placeholder: "Brief 2-3 sentence summary for previews and SEO...",
        description: "Shown on the blog listing page and in search results",
      },
    },

    // Tabs for organized content
    {
      type: "tabs",
      tabs: [
        // Content Tab
        {
          label: "📝 Content",
          fields: [
            {
              name: "body",
              type: "richText",
              label: "Article Content",
              admin: {
                description: "💡 Use the editor to add headings, images, lists, and more",
              },
            },
          ],
        },

        // Media Tab
        {
          label: "🖼️ Media",
          fields: [
            {
              name: "featuredImage",
              type: "upload",
              relationTo: "media",
              label: "Featured Image",
              admin: {
                description: "💡 Main image (1200x630px recommended for social sharing)",
              },
            },
            {
              name: "imageUrl",
              type: "text",
              label: "Or Static Image Path",
              admin: {
                placeholder: "/blog/article-image.jpg",
                description: "Alternative: path to existing image (used if no upload)",
              },
            },
            {
              name: "gallery",
              type: "array",
              label: "Image Gallery",
              labels: { singular: "Image", plural: "Images" },
              admin: { description: "Additional images for the article" },
              fields: [
                {
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "caption",
                  type: "text",
                  label: "Caption",
                },
              ],
            },
          ],
        },

        // SEO Tab
        {
          label: "🔍 SEO",
          description: "Search engine optimization settings",
          fields: [
            {
              name: "metaTitle",
              type: "text",
              label: "SEO Title",
              admin: {
                placeholder: "Custom title for search engines (leave empty to use article title)",
                description: "💡 Recommended: 50-60 characters",
              },
            },
            {
              name: "metaDescription",
              type: "textarea",
              label: "SEO Description",
              admin: {
                placeholder: "Custom description for search results...",
                description: "💡 Recommended: 150-160 characters",
              },
            },
            {
              name: "ogImage",
              type: "upload",
              relationTo: "media",
              label: "Social Share Image",
              admin: {
                description: "Custom image for Facebook/Twitter/LinkedIn sharing (defaults to featured image)",
              },
            },
            {
              name: "noIndex",
              type: "checkbox",
              label: "Hide from Search Engines",
              defaultValue: false,
              admin: {
                description: "Check this to prevent search engines from indexing this post",
              },
            },
          ],
        },

        // FAQ Tab
        {
          label: "❓ FAQ",
          fields: [
            {
              name: "faqItems",
              type: "array",
              label: "Article FAQ",
              labels: { singular: "FAQ", plural: "FAQs" },
              admin: {
                description: "💡 Add FAQs related to this article (great for SEO)",
                initCollapsed: true,
              },
              fields: [
                {
                  name: "question",
                  type: "text",
                  label: "Question",
                  required: true,
                },
                {
                  name: "answer",
                  type: "textarea",
                  label: "Answer",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },

    // Sidebar Fields
    {
      name: "publishDate",
      type: "date",
      label: "Publish Date",
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayAndTime" },
        description: "Schedule for future publishing",
      },
    },
    {
      name: "author",
      type: "text",
      label: "Author Name",
      admin: {
        position: "sidebar",
        placeholder: "e.g. Engr. Syed Amjad Iqbal",
      },
    },
    {
      name: "authorUser",
      type: "relationship",
      relationTo: "users",
      label: "Author (User)",
      admin: {
        position: "sidebar",
        description: "Link to team member profile",
      },
    },
    {
      name: "date",
      type: "text",
      label: "Display Date",
      admin: {
        position: "sidebar",
        placeholder: "e.g. June 23, 2026",
      },
    },
    {
      name: "readTime",
      type: "text",
      label: "Read Time",
      admin: {
        position: "sidebar",
        placeholder: "e.g. 8 min read",
      },
    },
    {
      name: "isFeatured",
      type: "checkbox",
      label: "Featured Post",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Show in featured section",
      },
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      label: "Tags",
      admin: {
        position: "sidebar",
        description: "Select relevant tags",
      },
    },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      label: "Related Posts",
      admin: {
        position: "sidebar",
        description: "Link to related articles",
      },
    },
    // Trash/Soft Delete
    {
      name: "deletedAt",
      type: "date",
      label: "Deleted At",
      admin: {
        position: "sidebar",
        readOnly: true,
        description: "When this post was moved to trash",
        condition: (data) => Boolean(data?.deletedAt),
      },
    },
    {
      name: "isDeleted",
      type: "checkbox",
      label: "In Trash",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Move to trash instead of permanent delete",
      },
    },
  ],
};
