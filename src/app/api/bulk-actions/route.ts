import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

// Collections that support bulk actions
const ALLOWED_COLLECTIONS = ['posts', 'pages', 'comments', 'leads', 'media', 'testimonials'];

/**
 * Bulk Actions API — WordPress-style bulk operations.
 * Perform actions on multiple items at once.
 * 
 * REQUIRES AUTHENTICATION — only logged-in CMS users can perform bulk actions.
 * 
 * POST /api/bulk-actions
 * Body: {
 *   "collection": "posts",
 *   "action": "publish" | "draft" | "trash" | "delete" | "feature" | "unfeature",
 *   "ids": ["id1", "id2", ...]
 * }
 */
export async function POST(request: Request) {
  try {
    const payload = await getPayload({ config });

    // Authentication check — require logged-in user
    const { user } = await payload.auth({ headers: request.headers });
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized — login required" },
        { status: 401 }
      );
    }

    // Only admin/editor can perform bulk actions
    if (user.role !== "admin" && user.role !== "editor") {
      return NextResponse.json(
        { error: "Forbidden — admin or editor role required" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { collection, action, ids } = body;

    // Validate collection is allowed for bulk operations
    if (!ALLOWED_COLLECTIONS.includes(collection)) {
      return NextResponse.json(
        { error: `Bulk actions not allowed on collection: ${collection}` },
        { status: 403 }
      );
    }

    if (!collection || !action || !ids || !Array.isArray(ids)) {
      return NextResponse.json(
        { error: "Missing required fields: collection, action, ids" },
        { status: 400 }
      );
    }

    if (ids.length === 0) {
      return NextResponse.json({ error: "No items selected" }, { status: 400 });
    }

    if (ids.length > 100) {
      return NextResponse.json(
        { error: "Maximum 100 items per bulk action" },
        { status: 400 }
      );
    }

    const results: { id: string; success: boolean; error?: string }[] = [];

    for (const id of ids) {
      try {
        switch (action) {
          case "publish":
            await payload.update({
              collection,
              id,
              data: { status: "published", isDeleted: false },
            });
            break;

          case "draft":
            await payload.update({
              collection,
              id,
              data: { status: "draft" },
            });
            break;

          case "trash":
            await payload.update({
              collection,
              id,
              data: { isDeleted: true, deletedAt: new Date().toISOString() },
            });
            break;

          case "restore":
            await payload.update({
              collection,
              id,
              data: { isDeleted: false, deletedAt: null },
            });
            break;

          case "delete":
            await payload.delete({
              collection,
              id,
            });
            break;

          case "feature":
            await payload.update({
              collection,
              id,
              data: { isFeatured: true },
            });
            break;

          case "unfeature":
            await payload.update({
              collection,
              id,
              data: { isFeatured: false },
            });
            break;

          case "approve":
            await payload.update({
              collection,
              id,
              data: { status: "approved" },
            });
            break;

          case "spam":
            await payload.update({
              collection,
              id,
              data: { status: "spam" },
            });
            break;

          default:
            results.push({ id, success: false, error: "Unknown action" });
            continue;
        }
        results.push({ id, success: true });
      } catch (error) {
        results.push({ id, success: false, error: String(error) });
      }
    }

    const successCount = results.filter((r) => r.success).length;

    return NextResponse.json({
      success: true,
      action,
      collection,
      total: ids.length,
      succeeded: successCount,
      failed: ids.length - successCount,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Bulk action failed", details: String(error) },
      { status: 500 }
    );
  }
}
