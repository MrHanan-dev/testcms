import type { ReactNode } from "react";
import { blogPostsMeta, type BlogPostMeta } from "@/data/blogPostsMeta";
import { blogPosts } from "@/data/blogPosts";
import { blogFaqs, type FAQItem } from "@/lib/faqData";
import { resolveMediaUrl } from "@/lib/resolveMediaUrl";

const orUndef = (v: unknown): string | undefined => (typeof v === "string" && v.length > 0 ? v : undefined);

export const hasRich = (v: unknown): v is object =>
  Boolean(v && typeof v === "object" && "root" in (v as Record<string, unknown>));

const postImage = (doc: Record<string, unknown>, fallback: string): string => {
  const img = doc.featuredImage;
  if (img && typeof img === "object" && (img as { url?: string }).url) {
    const rawUrl = (img as { url: string }).url;
    // Use resolveMediaUrl to handle Vercel deployment
    return resolveMediaUrl(rawUrl, fallback) ?? fallback;
  }
  return orUndef(doc.imageUrl) ?? fallback;
};

const metaBySlug = (slug: string) => blogPostsMeta.find((p) => p.slug === slug);

const mergeMeta = (doc: Record<string, unknown>, fb: BlogPostMeta): BlogPostMeta => ({
  id: String(doc.id ?? fb.id),
  slug: orUndef(doc.slug) ?? fb.slug,
  title: orUndef(doc.title) ?? fb.title,
  abstract: orUndef(doc.abstract) ?? fb.abstract,
  date: orUndef(doc.date) ?? fb.date,
  author: orUndef(doc.author) ?? fb.author,
  category: orUndef(doc.category) ?? fb.category,
  imageUrl: postImage(doc, fb.imageUrl),
  readTime: orUndef(doc.readTime) ?? fb.readTime,
});

/** List view: merge CMS fields with built-in metadata; preserve original display order. */
export function resolveBlogPostsList(cmsDocs: Record<string, unknown>[]): BlogPostMeta[] {
  if (!cmsDocs.length) return blogPostsMeta;

  const bySlug = new Map<string, BlogPostMeta>();
  for (const doc of cmsDocs) {
    const slug = String(doc.slug ?? "");
    const fb = metaBySlug(slug);
    if (fb) bySlug.set(slug, mergeMeta(doc, fb));
  }

  return blogPostsMeta.map((fb) => bySlug.get(fb.slug) ?? fb);
}

export type ResolvedBlogPost = BlogPostMeta & {
  bodyRich: object | null;
  content: ReactNode | null;
  faqItems: FAQItem[];
  // SEO fields from CMS
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
};

/** Detail view: merge CMS fields with built-in JSX body and FAQ fallbacks. */
export function resolveBlogPost(cmsDoc: Record<string, unknown> | null | undefined, slug: string): ResolvedBlogPost | null {
  const fbMeta = metaBySlug(slug);
  const fbPost = blogPosts.find((p) => p.slug === slug);
  if (!fbMeta && !cmsDoc) return null;

  const doc = cmsDoc ?? {};
  const meta = fbMeta ? mergeMeta(doc, fbMeta) : mergeMeta(doc, {
    id: String(doc.id ?? slug),
    slug,
    title: orUndef(doc.title) ?? slug,
    abstract: orUndef(doc.abstract) ?? "",
    date: orUndef(doc.date) ?? "",
    author: orUndef(doc.author) ?? "",
    category: orUndef(doc.category) ?? "Project Management",
    imageUrl: postImage(doc, "/images/blog/impact-construction-realistic.png"),
    readTime: orUndef(doc.readTime) ?? "",
  });

  const bodyRich = hasRich(doc.body) ? doc.body : null;
  const cmsFaqs = doc.faqItems as FAQItem[] | undefined;
  const faqItems = cmsFaqs && cmsFaqs.length > 0 ? cmsFaqs : blogFaqs[slug] ?? [];

  // Extract SEO fields from CMS
  const ogImg = doc.ogImage;
  const ogImageUrl = ogImg && typeof ogImg === "object" && (ogImg as { url?: string }).url
    ? (ogImg as { url: string }).url
    : undefined;

  return {
    ...meta,
    bodyRich,
    content: bodyRich ? null : fbPost?.content ?? null,
    faqItems,
    // SEO fields
    metaTitle: orUndef(doc.metaTitle),
    metaDescription: orUndef(doc.metaDescription),
    ogImage: ogImageUrl,
    noIndex: doc.noIndex === true,
  };
}

export function allBlogSlugs(): string[] {
  return blogPostsMeta.map((p) => p.slug);
}
