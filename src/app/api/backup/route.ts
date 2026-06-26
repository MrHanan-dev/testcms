import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Backup API — WordPress-style full site backup.
 * Export all content, settings, and media references.
 * 
 * GET /api/backup — Create full backup
 * GET /api/backup?type=content — Content only
 * GET /api/backup?type=settings — Settings/globals only
 */

const COLLECTIONS = [
  "posts",
  "pages",
  "media",
  "tags",
  "comments",
  "redirects",
  "leads",
  "forms",
  "form-submissions",
  "testimonials",
  "team-members",
  "galleries",
  "faqs",
  "popups",
  "sliders",
  "pricing-plans",
  "menus",
  "activity-log",
];

const GLOBALS = [
  "home",
  "about",
  "siteSettings",
  "appearance",
  "customCode",
  "readingSettings",
  "consultingPage",
  "trainingPage",
  "pmpPage",
  "capmPage",
  "pmicpPage",
  "partnerPage",
  "privacyPage",
  "termsPage",
  "projectManagementPage",
  "costEstimationPage",
  "contractManagementPage",
];

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const backupType = url.searchParams.get("type") || "full";

    // Authentication REQUIRED in production
    const backupSecret = process.env.BACKUP_SECRET;
    const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;

    if (isProduction && !backupSecret) {
      return NextResponse.json(
        { error: "BACKUP_SECRET must be set in production" },
        { status: 500 }
      );
    }

    if (backupSecret) {
      const authHeader = request.headers.get("authorization");
      if (authHeader !== `Bearer ${backupSecret}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const payload = await getPayload({ config });

    const backup: Record<string, any> = {
      meta: {
        version: "1.0",
        type: backupType,
        createdAt: new Date().toISOString(),
        site: process.env.NEXT_PUBLIC_SITE_URL || "unknown",
      },
      collections: {},
      globals: {},
    };

    // Export collections
    if (backupType === "full" || backupType === "content") {
      for (const slug of COLLECTIONS) {
        try {
          const result = await payload.find({
            collection: slug as any,
            limit: 10000,
            depth: 0,
            overrideAccess: true,
          });
          backup.collections[slug] = {
            count: result.totalDocs,
            docs: result.docs,
          };
        } catch {
          backup.collections[slug] = { error: "Failed to export", count: 0 };
        }
      }
    }

    // Export globals
    if (backupType === "full" || backupType === "settings") {
      for (const slug of GLOBALS) {
        try {
          const data = await payload.findGlobal({
            slug: slug as any,
            depth: 0,
          });
          backup.globals[slug] = data;
        } catch {
          backup.globals[slug] = { error: "Failed to export" };
        }
      }
    }

    // Add summary
    backup.meta.summary = {
      collections: Object.keys(backup.collections).length,
      globals: Object.keys(backup.globals).length,
      totalDocs: Object.values(backup.collections).reduce(
        (sum: number, c: any) => sum + (c.count || 0),
        0
      ),
    };

    // Generate filename
    const date = new Date().toISOString().split("T")[0];
    const filename = `theagilenest-backup-${backupType}-${date}.json`;

    return new NextResponse(JSON.stringify(backup, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Backup failed", details: String(error) },
      { status: 500 }
    );
  }
}

/**
 * POST /api/backup — Restore from backup
 * Uses upsert logic to prevent duplicates on re-import.
 */
const BACKUP_VERSION = "1.0";

export async function POST(request: Request) {
  try {
    // Authentication REQUIRED in production
    const backupSecret = process.env.BACKUP_SECRET;
    const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;

    if (isProduction && !backupSecret) {
      return NextResponse.json(
        { error: "BACKUP_SECRET must be set in production" },
        { status: 500 }
      );
    }

    if (backupSecret) {
      const authHeader = request.headers.get("authorization");
      if (authHeader !== `Bearer ${backupSecret}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const backup = await request.json();

    if (!backup.meta || !backup.collections) {
      return NextResponse.json(
        { error: "Invalid backup format" },
        { status: 400 }
      );
    }

    // Validate backup version
    if (backup.meta.version !== BACKUP_VERSION) {
      return NextResponse.json(
        {
          error: "Incompatible backup version",
          expected: BACKUP_VERSION,
          received: backup.meta.version,
        },
        { status: 400 }
      );
    }

    const payload = await getPayload({ config });
    const results: Record<string, { created: number; updated: number; errors: number }> = {};

    // Restore collections with upsert logic
    for (const [slug, data] of Object.entries(backup.collections)) {
      const collectionData = data as any;
      if (!collectionData.docs || collectionData.error) continue;

      results[slug] = { created: 0, updated: 0, errors: 0 };

      for (const doc of collectionData.docs) {
        try {
          // Remove system fields that shouldn't be restored
          const { createdAt, updatedAt, ...docData } = doc;
          const docId = doc.id;

          // Check if document already exists
          const existing = await payload
            .findByID({
              collection: slug as any,
              id: docId,
              depth: 0,
            })
            .catch(() => null);

          if (existing) {
            // Update existing document
            await payload.update({
              collection: slug as any,
              id: docId,
              data: docData,
              overrideAccess: true,
              context: { disableActivityLog: true },
            });
            results[slug].updated++;
          } else {
            // Create new document (preserving original ID if possible)
            await payload.create({
              collection: slug as any,
              data: docData,
              overrideAccess: true,
              context: { disableActivityLog: true },
            });
            results[slug].created++;
          }
        } catch (err) {
          results[slug].errors++;
          console.error(`Failed to restore ${slug}/${doc.id}:`, err);
        }
      }
    }

    // Restore globals
    for (const [slug, data] of Object.entries(backup.globals || {})) {
      if ((data as any).error) continue;

      try {
        const { id, createdAt, updatedAt, globalType, ...globalData } = data as any;
        await payload.updateGlobal({
          slug: slug as any,
          data: globalData,
          overrideAccess: true,
        });
        results[`global:${slug}`] = { created: 0, updated: 1, errors: 0 };
      } catch (err) {
        results[`global:${slug}`] = { created: 0, updated: 0, errors: 1 };
        console.error(`Failed to restore global ${slug}:`, err);
      }
    }

    // Calculate totals
    const totals = Object.values(results).reduce(
      (acc, r) => ({
        created: acc.created + r.created,
        updated: acc.updated + r.updated,
        errors: acc.errors + r.errors,
      }),
      { created: 0, updated: 0, errors: 0 }
    );

    return NextResponse.json({
      success: true,
      message: `Restore completed: ${totals.created} created, ${totals.updated} updated, ${totals.errors} errors`,
      totals,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Restore failed", details: String(error) },
      { status: 500 }
    );
  }
}
