import type { Field, Tab } from "payload";

/**
 * Reusable SEO fields that can be added to any global or collection.
 * WordPress-style meta information for search engine optimization.
 */

export const seoFields: Field[] = [
  {
    type: "row",
    fields: [
      {
        name: "metaTitle",
        type: "text",
        label: "SEO Title",
        admin: {
          width: "50%",
          placeholder: "Page title for search engines (50-60 characters)",
          description: "If left empty, the page title will be used",
        },
      },
      {
        name: "metaDescription",
        type: "textarea",
        label: "Meta Description",
        admin: {
          width: "50%",
          placeholder: "Brief description for search results (150-160 characters)",
          description: "Summarize the page content for search engines",
        },
      },
    ],
  },
  {
    name: "ogImage",
    type: "upload",
    relationTo: "media",
    label: "Social Share Image",
    admin: {
      description: "Image shown when page is shared on social media (1200x630px recommended)",
    },
  },
  {
    type: "row",
    fields: [
      {
        name: "noIndex",
        type: "checkbox",
        label: "Hide from Search Engines",
        admin: {
          width: "50%",
          description: "Check to prevent search engines from indexing this page",
        },
      },
      {
        name: "noFollow",
        type: "checkbox",
        label: "No Follow Links",
        admin: {
          width: "50%",
          description: "Check to tell search engines not to follow links on this page",
        },
      },
    ],
  },
  {
    name: "canonicalUrl",
    type: "text",
    label: "Canonical URL",
    admin: {
      placeholder: "https://theagilenest.co.nz/page-name",
      description: "Use if this content exists at another URL (prevents duplicate content)",
    },
  },
];

/**
 * SEO tab for globals with tabs structure
 */
export const seoTab: Tab = {
  label: "🔍 SEO",
  description: "Search engine optimization settings",
  fields: seoFields,
};
