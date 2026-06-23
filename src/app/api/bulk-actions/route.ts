import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Bulk Actions API — WordPress-style bulk operations.
 * Perform actions on multiple items at once.
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
    const body = await request.json();
    const { collection, action, ids } = body;

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
