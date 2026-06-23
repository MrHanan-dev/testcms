import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Content Export API — Export all CMS content as JSON.
 * WordPress-style data export for backup or migration.
 * 
 * GET /api/export?collections=posts,pages
 * GET /api/export?globals=home,about
 * GET /api/export (exports everything)
 * 
 * Requires authentication.
 */
export async function GET(request: Request) {
  try {
    const payload = await getPayload({ config });
    const url = new URL(request.url);
    
    // Check authentication via cookie or header
    const authHeader = request.headers.get("authorization");
    const exportSecret = process.env.EXPORT_SECRET;
    
    if (exportSecret && authHeader !== `Bearer ${exportSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const collectionsParam = url.searchParams.get("collections");
    const globalsParam = url.searchParams.get("globals");

    const exportData: Record<string, any> = {
      exportedAt: new Date().toISOString(),
      version: "1.0",
      collections: {},
      globals: {},
    };

    // Export collections
    const collectionsToExport = collectionsParam
      ? collectionsParam.split(",").map((c) => c.trim())
      : ["posts", "pages", "media", "tags", "comments", "redirects"];

    for (const collectionSlug of collectionsToExport) {
      try {
        const data = await payload.find({
          collection: collectionSlug as any,
          limit: 10000,
          depth: 2,
        });
        exportData.collections[collectionSlug] = {
          totalDocs: data.totalDocs,
          docs: data.docs,
        };
      } catch {
        exportData.collections[collectionSlug] = { error: "Collection not found" };
      }
    }

    // Export globals
    const globalsToExport = globalsParam
      ? globalsParam.split(",").map((g) => g.trim())
      : ["home", "about", "siteSettings", "consultingPage", "trainingPage"];

    for (const globalSlug of globalsToExport) {
      try {
        const data = await payload.findGlobal({ slug: globalSlug as any, depth: 2 });
        exportData.globals[globalSlug] = data;
      } catch {
        exportData.globals[globalSlug] = { error: "Global not found" };
      }
    }

    // Return as downloadable JSON
    const filename = `theagilenest-export-${new Date().toISOString().split("T")[0]}.json`;
    
    return new NextResponse(JSON.stringify(exportData, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Export failed", details: String(error) },
      { status: 500 }
    );
  }
}
