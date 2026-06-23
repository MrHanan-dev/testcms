import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Scheduled Publisher — Checks for posts that need to be published
 * and automatically publishes them when their scheduled time arrives.
 */

export async function publishScheduledPosts() {
  try {
    const payload = await getPayload({ config });
    const now = new Date();

    // Find all posts and filter for scheduled ones
    // This approach is more robust for development environments
    let scheduledPosts: any[] = [];
    
    try {
      // Try direct query first
      const result = await payload.find({
        collection: "posts",
        limit: 500,
        depth: 0,
      });
      
      // Filter for scheduled posts with past publish dates
      scheduledPosts = result.docs.filter((post: any) => {
        if (post.status !== "scheduled") return false;
        if (!post.publishDate) return false;
        return new Date(post.publishDate) <= now;
      });
    } catch (queryError) {
      console.error("Scheduled publisher query error:", queryError);
      return { published: 0, message: "Query error - schema may need migration" };
    }

    if (scheduledPosts.length === 0) {
      return { published: 0, message: "No scheduled posts to publish" };
    }

    // Publish each post
    const results = await Promise.all(
      scheduledPosts.map(async (post: any) => {
        try {
          await payload.update({
            collection: "posts",
            id: post.id,
            data: {
              status: "published",
            },
            overrideAccess: true,
            context: { disableActivityLog: true },
          });
          return { id: post.id, title: post.title, success: true };
        } catch (error) {
          return { id: post.id, title: post.title, success: false, error };
        }
      })
    );

    const successCount = results.filter((r) => r.success).length;
    return {
      published: successCount,
      total: scheduledPosts.length,
      results,
      message: `Published ${successCount} of ${scheduledPosts.length} scheduled posts`,
    };
  } catch (error) {
    console.error("Error publishing scheduled posts:", error);
    return { published: 0, error: String(error) };
  }
}
