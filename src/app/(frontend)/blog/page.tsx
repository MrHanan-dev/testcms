import { Metadata } from "next";
import { getPosts } from "@/lib/payload";
import { resolveBlogPostsList } from "@/lib/resolveBlogPost";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog & Resources | TheAgileNest",
  description:
    "Expert insights on project management, PMP certification, construction cost estimation, and PMO governance. Stay updated with the latest industry trends and best practices.",
  openGraph: {
    title: "Blog & Resources | TheAgileNest",
    description:
      "Expert insights on project management, PMP certification, construction cost estimation, and PMO governance.",
    type: "website",
    url: "https://theagilenest.com/blog",
  },
};

export default async function BlogPage() {
  const cmsDocs = await getPosts();
  const posts = resolveBlogPostsList(cmsDocs);
  return <BlogPageClient posts={posts} />;
}
