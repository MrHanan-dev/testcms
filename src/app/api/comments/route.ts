import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (record.count >= 5) return false;
  record.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many comments. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const { postId, author, email, content, website, parentCommentId } = body as {
      postId?: string;
      author?: string;
      email?: string;
      content?: string;
      website?: string;
      parentCommentId?: string;
    };

    if (website) {
      return NextResponse.json({ success: true, message: "Comment submitted for moderation." });
    }

    if (!postId || !author?.trim() || !email?.trim() || !content?.trim()) {
      return NextResponse.json({ error: "postId, author, email, and content are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (content.length > 5000) {
      return NextResponse.json({ error: "Comment is too long" }, { status: 400 });
    }

    const payload = await getPayload({ config });

    const post = await payload.findByID({ collection: "posts", id: postId, depth: 0 }).catch(() => null);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await payload.create({
      collection: "comments",
      data: {
        post: postId,
        author: author.trim(),
        email: email.trim(),
        content: content.trim(),
        status: "pending",
        ...(parentCommentId ? { parentComment: parentCommentId } : {}),
        ipAddress: ip,
        userAgent: req.headers.get("user-agent") ?? undefined,
      },
      overrideAccess: true,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your comment has been submitted and is awaiting moderation.",
    });
  } catch (error) {
    console.error("[comments API]", error);
    return NextResponse.json({ error: "Failed to submit comment" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");
    if (!postId) {
      return NextResponse.json({ error: "postId is required" }, { status: 400 });
    }

    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "comments",
      where: {
        and: [
          { post: { equals: postId } },
          { status: { equals: "approved" } },
        ],
      },
      sort: "-createdAt",
      limit: 50,
      depth: 0,
    });

    return NextResponse.json({
      comments: result.docs.map((c) => ({
        id: c.id,
        author: c.author,
        content: c.content,
        createdAt: c.createdAt,
        adminReply: c.adminReply,
      })),
    });
  } catch (error) {
    console.error("[comments API GET]", error);
    return NextResponse.json({ error: "Failed to load comments" }, { status: 500 });
  }
}
