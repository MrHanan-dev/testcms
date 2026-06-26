import { Metadata } from "next";
import { getPosts, getGlobal } from "@/lib/payload";
import { resolveBlogPostsList } from "@/lib/resolveBlogPost";
import BlogPageClient from "./BlogPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const reading = await getGlobal("readingSettings");
  const title = typeof reading.postsPage === "string" && reading.postsPage
    ? `Blog | TheAgileNest`
    : "Blog | TheAgileNest";
  return {
    title,
    description: "Expert insights on project management, PMP certification, and professional development.",
  };
}

export default async function BlogPage() {
  const [cmsDocs, reading] = await Promise.all([getPosts(), getGlobal("readingSettings")]);
  const posts = resolveBlogPostsList(cmsDocs);

  return (
    <BlogPageClient
      posts={posts}
      postsPerPage={Number(reading.postsPerPage) || 10}
      showAuthor={reading.showAuthor !== false}
      showDate={reading.showDate !== false}
      showCategories={reading.showCategories !== false}
    />
  );
}
