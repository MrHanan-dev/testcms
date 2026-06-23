import { getPosts } from "@/lib/payload";
import { resolveBlogPostsList } from "@/lib/resolveBlogPost";
import BlogPageClient from "./BlogPageClient";

export default async function BlogPage() {
  const cmsDocs = await getPosts();
  const posts = resolveBlogPostsList(cmsDocs);
  return <BlogPageClient posts={posts} />;
}
