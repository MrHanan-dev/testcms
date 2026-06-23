import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * Cache Management API — WordPress-style cache control.
 * Clear and manage Next.js cache.
 * 
 * POST /api/cache
 * Body: {
 *   "action": "clear-all" | "clear-path",
 *   "path": "/blog" (for clear-path)
 * }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, path } = body;

    // Verify admin access via secret
    const cacheSecret = process.env.CACHE_SECRET;
    if (cacheSecret) {
      const authHeader = request.headers.get("authorization");
      if (authHeader !== `Bearer ${cacheSecret}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    switch (action) {
      case "clear-all":
        // Revalidate all main paths
        const paths = [
          "/",
          "/about",
          "/consulting",
          "/training",
          "/contact",
          "/blog",
          "/pmp",
          "/capm",
          "/pmi-cp",
          "/project-management",
          "/cost-estimation",
          "/contract-management",
        ];
        
        let clearedCount = 0;
        for (const p of paths) {
          try {
            revalidatePath(p, "page");
            clearedCount++;
          } catch {}
        }
        
        // Also revalidate layout
        try {
          revalidatePath("/", "layout");
        } catch {}
        
        return NextResponse.json({
          success: true,
          action: "clear-all",
          message: "All caches cleared",
          pathsCleared: clearedCount,
        });

      case "clear-path":
        if (!path) {
          return NextResponse.json({ error: "Path required" }, { status: 400 });
        }
        revalidatePath(path, "page");
        return NextResponse.json({
          success: true,
          action: "clear-path",
          path,
          message: `Cache cleared for ${path}`,
        });

      case "clear-layout":
        revalidatePath("/", "layout");
        return NextResponse.json({
          success: true,
          action: "clear-layout",
          message: "Layout cache cleared (affects all pages)",
        });

      default:
        return NextResponse.json(
          { error: "Invalid action. Use: clear-all, clear-path, clear-layout" },
          { status: 400 }
        );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Cache operation failed", details: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/cache — Get cache status info
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    info: {
      provider: "Next.js ISR/On-demand Revalidation",
      actions: [
        { action: "clear-all", description: "Clear all page caches" },
        { action: "clear-path", description: "Clear cache for specific path", params: ["path"] },
        { action: "clear-layout", description: "Clear layout cache (affects all pages)" },
      ],
    },
  });
}
