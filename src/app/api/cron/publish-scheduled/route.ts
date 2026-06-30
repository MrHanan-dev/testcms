import { NextResponse } from "next/server";
import { publishScheduledPosts } from "@/lib/scheduledPublisher";

/**
 * Cron endpoint to publish scheduled posts.
 * Vercel Hobby allows one cron per day — see vercel.json (daily at 08:00 UTC).
 * Pro plan can use a tighter schedule (e.g. every 5 minutes).
 *
 * Set CRON_SECRET in your environment to secure this endpoint.
 */
export async function GET(request: Request) {
  // Verify cron secret — REQUIRED in production
  const cronSecret = process.env.CRON_SECRET;
  const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;

  if (isProduction && !cronSecret) {
    return NextResponse.json(
      { error: "CRON_SECRET must be set in production" },
      { status: 500 }
    );
  }

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
