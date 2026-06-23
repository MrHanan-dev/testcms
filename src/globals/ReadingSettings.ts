import type { GlobalConfig } from "payload";
import { logGlobalChange } from "@/lib/activityLogger";

/**
 * Reading Settings — WordPress-style content display settings.
 * Control how content is displayed throughout the site.
 */
export const ReadingSettings: GlobalConfig = {
  slug: "readingSettings",
  label: "Reading Settings",
  access: { read: () => true },
  hooks: {
    afterChange: [logGlobalChange],
  },
  admin: {
    group: "⚙️ Settings",
    description: "Configure how your content is displayed — posts per page, excerpts, and more.",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "📄 Homepage",
          fields: [
            {
              name: "homepageDisplay",
              type: "select",
              label: "Your homepage displays",
              defaultValue: "page",
              options: [
                { label: "A static page", value: "page" },
                { label: "Your latest posts", value: "posts" },
              ],
            },
            {
              name: "homepagePage",
              type: "text",
              label: "Homepage",
              admin: {
                placeholder: "home",
                description: "Slug of the page to use as homepage",
                condition: (data) => data?.homepageDisplay === "page",
              },
            },
            {
              name: "postsPage",
              type: "text",
              label: "Posts page",
              admin: {
                placeholder: "blog",
                description: "Slug of the page that displays blog posts",
              },
            },
          ],
        },
        {
          label: "📝 Blog Settings",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "postsPerPage",
                  type: "number",
                  label: "Posts per page",
                  defaultValue: 10,
                  admin: { width: "33%" },
                },
                {
                  name: "postsPerRow",
                  type: "select",
                  label: "Posts per row",
                  defaultValue: "3",
                  admin: { width: "33%" },
                  options: [
                    { label: "1 (List)", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                  ],
                },
                {
                  name: "blogLayout",
                  type: "select",
                  label: "Layout",
                  defaultValue: "grid",
                  admin: { width: "33%" },
                  options: [
                    { label: "Grid", value: "grid" },
                    { label: "List", value: "list" },
                    { label: "Masonry", value: "masonry" },
                  ],
                },
              ],
            },
            {
              name: "excerptLength",
              type: "number",
              label: "Excerpt length (words)",
              defaultValue: 55,
              admin: { description: "Number of words to show in post excerpts" },
            },
            {
              name: "showReadMore",
              type: "checkbox",
              label: "Show 'Read More' link",
              defaultValue: true,
            },
            {
              name: "readMoreText",
              type: "text",
              label: "Read More text",
              defaultValue: "Continue Reading →",
              admin: { condition: (data) => data?.showReadMore },
            },
          ],
        },
        {
          label: "📰 Single Post",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "showAuthor",
                  type: "checkbox",
                  label: "Show author",
                  defaultValue: true,
                  admin: { width: "25%" },
                },
                {
                  name: "showDate",
                  type: "checkbox",
                  label: "Show date",
                  defaultValue: true,
                  admin: { width: "25%" },
                },
                {
                  name: "showCategories",
                  type: "checkbox",
                  label: "Show categories",
                  defaultValue: true,
                  admin: { width: "25%" },
                },
                {
                  name: "showTags",
                  type: "checkbox",
                  label: "Show tags",
                  defaultValue: true,
                  admin: { width: "25%" },
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  name: "showReadTime",
                  type: "checkbox",
                  label: "Show read time",
                  defaultValue: true,
                  admin: { width: "25%" },
                },
                {
                  name: "showShareButtons",
                  type: "checkbox",
                  label: "Social share buttons",
                  defaultValue: true,
                  admin: { width: "25%" },
                },
                {
                  name: "showRelatedPosts",
                  type: "checkbox",
                  label: "Related posts",
                  defaultValue: true,
                  admin: { width: "25%" },
                },
                {
                  name: "relatedPostsCount",
                  type: "number",
                  label: "Related posts count",
                  defaultValue: 3,
                  admin: { width: "25%" },
                },
              ],
            },
            {
              name: "showAuthorBio",
              type: "checkbox",
              label: "Show author bio box",
              defaultValue: true,
            },
            {
              name: "showPrevNext",
              type: "checkbox",
              label: "Show previous/next navigation",
              defaultValue: true,
            },
          ],
        },
        {
          label: "💬 Comments",
          fields: [
            {
              name: "commentsEnabled",
              type: "checkbox",
              label: "Allow comments on new posts",
              defaultValue: true,
            },
            {
              name: "commentModeration",
              type: "select",
              label: "Comment moderation",
              defaultValue: "manual",
              options: [
                { label: "All comments must be approved", value: "all" },
                { label: "First-time commenters need approval", value: "first" },
                { label: "No moderation (auto-approve)", value: "none" },
                { label: "Manual approval for all", value: "manual" },
              ],
            },
            {
              name: "commentsPerPage",
              type: "number",
              label: "Comments per page",
              defaultValue: 20,
            },
            {
              name: "commentOrder",
              type: "select",
              label: "Comment order",
              defaultValue: "newest",
              options: [
                { label: "Newest first", value: "newest" },
                { label: "Oldest first", value: "oldest" },
              ],
            },
            {
              name: "nestedComments",
              type: "checkbox",
              label: "Enable threaded (nested) comments",
              defaultValue: true,
            },
            {
              name: "nestedCommentsDepth",
              type: "number",
              label: "Maximum nesting depth",
              defaultValue: 3,
              admin: { condition: (data) => data?.nestedComments },
            },
            {
              name: "requireEmail",
              type: "checkbox",
              label: "Require email for comments",
              defaultValue: true,
            },
            {
              name: "requireName",
              type: "checkbox",
              label: "Require name for comments",
              defaultValue: true,
            },
          ],
        },
        {
          label: "🔍 Search",
          fields: [
            {
              name: "searchEnabled",
              type: "checkbox",
              label: "Enable site search",
              defaultValue: true,
            },
            {
              name: "searchPlaceholder",
              type: "text",
              label: "Search placeholder",
              defaultValue: "Search...",
            },
            {
              name: "searchResultsPerPage",
              type: "number",
              label: "Results per page",
              defaultValue: 10,
            },
            {
              name: "searchInContent",
              type: "checkbox",
              label: "Search in post content",
              defaultValue: true,
            },
            {
              name: "highlightSearchTerms",
              type: "checkbox",
              label: "Highlight search terms in results",
              defaultValue: true,
            },
          ],
        },
      ],
    },
  ],
};
