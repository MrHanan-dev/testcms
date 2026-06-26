import { getPayload, Payload } from "payload";
import config from "@payload-config";
import { revalidatePath } from "next/cache";

/**
 * Scheduled Publisher — Checks for posts that need to be published
 * and automatically publishes them when their scheduled time arrives.
 * 
 * Uses efficient DB-level filtering instead of JS filtering.
 */

export async function publishScheduledPosts(payloadInstance?: Payload) {
  try {
    const payload = payloadInstance || (await getPayload({ config }));
    const now = new Date();

    // Query only posts that need publishing (efficient DB-level filter)
    const result = await payload.find({
      collection: "posts",
      where: {
        and: [
          { status: { equals: "scheduled" } },
          { publishDate: { less_than_equal: now.toISOString() } },
        ],
      },
      limit: 100, // Process in batches
      depth: 0,
      overrideAccess: true,
    });

    const postsToPublish = result.docs;
    
    if (postsToPublish.length === 0) {
      return { published: 0, errors: 0, message: "No scheduled posts to publish" };
    }

    let published = 0;
    let errors = 0;
    const results: Array<{ id: string; title: string; success: boolean; error?: string }> = [];

    // Publish each post sequentially to avoid race conditions
    for (const post of postsToPublish) {
      try {
        await payload.update({
          collection: "posts",
          id: post.id,
          data: { status: "published" },
          overrideAccess: true,
          context: { disableActivityLog: true },
        });

        // Revalidate the post's page
        if (post.slug) {
          revalidatePath(`/blog/${post.slug}`);
        }
        
        published++;
        results.push({ id: String(post.id), title: String(post.title || "Untitled"), success: true });
      } catch (err) {
        console.error(`Failed to publish post ${post.id}:`, err);
        errors++;
        results.push({
          id: String(post.id),
          title: String(post.title || "Untitled"),
          success: false,
          error: String(err),
        });
      }
    }

    // Revalidate blog listing if any posts were published
    if (published > 0) {
      revalidatePath("/blog");
    }

    return {
      published,
      errors,
      total: postsToPublish.length,
      results,
      message: `Published ${published} of ${postsToPublish.length} scheduled posts`,
    };
  } catch (error) {
    console.error("Error publishing scheduled posts:", error);
    return { published: 0, errors: 1, error: String(error) };
  }
}
