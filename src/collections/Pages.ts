import type { CollectionConfig } from "payload";
import { logCollectionChange, logCollectionDelete } from "@/lib/activityLogger";

import { Hero } from "../blocks/Hero";
import { RichTextBlock } from "../blocks/RichTextBlock";
import { FeatureCards } from "../blocks/FeatureCards";
import { CallToAction } from "../blocks/CallToAction";
import { ImageBlock } from "../blocks/ImageBlock";
import { TestimonialsBlock } from "../blocks/TestimonialsBlock";
import { FAQBlock } from "../blocks/FAQBlock";
import { StatsBlock } from "../blocks/StatsBlock";
import { TeamBlock } from "../blocks/TeamBlock";
import { ContactFormBlock } from "../blocks/ContactFormBlock";
import { GalleryBlock } from "../blocks/GalleryBlock";
import { BannerBlock } from "../blocks/BannerBlock";
import { ServicesGridBlock } from "../blocks/ServicesGridBlock";
import { PricingBlock } from "../blocks/PricingBlock";

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
  labels: { singular: "Custom Page", plural: "Custom Pages" },
  admin: {
    group: "📝 Content",
    description: "Build new pages using drag-and-drop blocks — for landing pages and custom content.",
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    // Published pages are world-readable; drafts require auth.
    read: ({ req: { user } }) => {
      if (user) return true;
      return { _status: { equals: "published" } };
    },
    create: ({ req: { user } }) => Boolean(user) && user?.role !== 'viewer',
    update: ({ req: { user } }) => Boolean(user) && user?.role !== 'viewer',
    delete: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 25,
  },
  hooks: {
    afterChange: [logCollectionChange],
    afterDelete: [logCollectionDelete],
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
              blocks: [
                Hero, 
                RichTextBlock, 
                FeatureCards, 
                CallToAction,
                ImageBlock,
                TestimonialsBlock,
                FAQBlock,
                StatsBlock,
                TeamBlock,
                ContactFormBlock,
                GalleryBlock,
                BannerBlock,
                ServicesGridBlock,
                PricingBlock,
              ],
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
            {
              name: "ogImage",
              type: "upload",
              relationTo: "media",
              label: "Social Share Image",
              admin: { description: "Image shown when shared on social media (1200x630px)" },
            },
            {
              name: "noIndex",
              type: "checkbox",
              label: "Hide from Search Engines",
              admin: { description: "Prevent search engines from indexing this page" },
            },
          ],
        },
        {
          label: "Settings",
          fields: [
            {
              name: "showHeader",
              type: "checkbox",
              defaultValue: true,
              admin: { description: "Show the site header on this page" },
            },
            {
              name: "showFooter",
              type: "checkbox",
              defaultValue: true,
              admin: { description: "Show the site footer on this page" },
            },
            {
              name: "hideContactForm",
              type: "checkbox",
              defaultValue: false,
              admin: { description: "Hide the contact form section in the footer" },
            },
            {
              name: "customCss",
              type: "code",
              admin: { 
                language: "css",
                description: "Custom CSS for this page only" 
              },
            },
          ],
        },
      ],
    },
  ],
};
