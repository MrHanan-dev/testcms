import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Duplicate Post API — Clone a blog post.
 * WordPress-style content duplication.
 * 
 * POST /api/posts/duplicate
 * Body: { "id": "post-id" }
 */
export async function POST(request: Request) {
  try {
    const payload = await getPayload({ config });
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Post ID required" }, { status: 400 });
    }

    // Fetch the original post
    const original = await payload.findByID({
      collection: "posts",
      id,
      depth: 0,
    });

    if (!original) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Create duplicate with modified fields
    const { id: _, createdAt, updatedAt, ...postData } = original as any;
    
    const duplicate = await payload.create({
      collection: "posts",
      data: {
        ...postData,
        title: `${postData.title} (Copy)`,
        slug: `${postData.slug}-copy-${Date.now()}`,
        status: "draft",
        publishDate: null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Post duplicated successfully",
      original: { id, title: original.title },
      duplicate: { id: duplicate.id, title: duplicate.title },
      editUrl: `/admin/collections/posts/${duplicate.id}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Duplication failed", details: String(error) },
      { status: 500 }
    );
  }
}
