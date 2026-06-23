import { NextResponse } from "next/server";
import { publishScheduledPosts } from "@/lib/scheduledPublisher";

/**
 * Cron endpoint to publish scheduled posts.
 * Call this from a cron service (e.g., Vercel Cron, GitHub Actions) every minute.
 * 
 * Set CRON_SECRET in your environment to secure this endpoint.
 */
export async function GET(request: Request) {
  // Verify cron secret if set
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const result = await publishScheduledPosts();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to publish scheduled posts", details: String(error) },
      { status: 500 }
    );
  }
}

// Also support POST for flexibility
export async function POST(request: Request) {
  return GET(request);
}
