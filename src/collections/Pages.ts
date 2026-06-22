import type { CollectionConfig } from "payload";

import { Hero } from "../blocks/Hero";
import { RichTextBlock } from "../blocks/RichTextBlock";
import { FeatureCards } from "../blocks/FeatureCards";
import { CallToAction } from "../blocks/CallToAction";

/**
 * Pages — the WordPress-style page-builder. Each page is a `slug` plus an
 * ordered `layout` of blocks the editor can add, reorder, and remove. Rendered
 * by the public site via the page renderer.
 *
 * Drafts are enabled so editors can stage changes and preview before publishing
 * (autosave + draft/publish), matching the "edit any page" expectation.
 */
export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    // Published pages are world-readable; drafts require auth.
    read: ({ req: { user } }) => {
      if (user) return true;
      return { _status: { equals: "published" } };
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 25,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'URL path for the page, e.g. "about" → /about. Use "home" for the homepage.',
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              label: "Sections",
              blocks: [Hero, RichTextBlock, FeatureCards, CallToAction],
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            {
              name: "metaTitle",
              type: "text",
              admin: { description: "Overrides the browser/SEO title. Falls back to the page title." },
            },
            {
              name: "metaDescription",
              type: "textarea",
              admin: { description: "Search-result description (~150–160 chars)." },
            },
          ],
        },
      ],
    },
  ],
};
