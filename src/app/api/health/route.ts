import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Site Health Check API — WordPress-style system status.
 * Checks database, collections, storage, and configuration.
 */

interface HealthCheck {
  name: string;
  status: "good" | "warning" | "critical";
  message: string;
  value?: string | number;
}

export async function GET(request: Request) {
  // Check for HEALTH_SECRET authentication
  const healthSecret = process.env.HEALTH_SECRET;
  const authHeader = request.headers.get("authorization");

  if (healthSecret && authHeader !== `Bearer ${healthSecret}`) {
    // Return minimal public health check for unauthenticated requests
    return NextResponse.json({
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  }

  // Full health check for authenticated requests
  const checks: HealthCheck[] = [];
  let overallStatus: "good" | "warning" | "critical" = "good";

  try {
    const payload = await getPayload({ config });

    // Database Connection
    try {
      await payload.count({ collection: "users" });
      checks.push({
        name: "Database Connection",
        status: "good",
        message: "Connected to PostgreSQL",
      });
    } catch (error) {
      checks.push({
        name: "Database Connection",
        status: "critical",
        message: "Database connection failed",
      });
      overallStatus = "critical";
    }

    // All collections — parallel schema + count check
    const ALL_COLLECTIONS = [
      "pages", "posts", "media", "tags", "comments", "redirects", "forms",
      "form-submissions", "testimonials", "team-members", "galleries", "faqs",
      "popups", "sliders", "pricing-plans", "menus", "leads", "activity-log", "users",
    ] as const;

    const collectionResults = await Promise.all(
      ALL_COLLECTIONS.map(async (slug) => {
        try {
          const r = await payload.count({ collection: slug, overrideAccess: true });
          return { slug, ok: true, count: r.totalDocs };
        } catch {
          return { slug, ok: false, count: 0 };
        }
      }),
    );

    const failedCollections = collectionResults.filter((r) => !r.ok);
    if (failedCollections.length > 0) {
      checks.push({
        name: "CMS Collections",
        status: "critical",
        message: `Failed: ${failedCollections.map((c) => c.slug).join(", ")}`,
      });
      overallStatus = "critical";
    } else {
      const totalDocs = collectionResults.reduce((sum, r) => sum + r.count, 0);
      checks.push({
        name: "CMS Collections",
        status: "good",
        message: `All ${ALL_COLLECTIONS.length} collections OK (${totalDocs} total docs)`,
        value: totalDocs,
      });
    }

    // Legacy content summary (posts, pages, media, users, leads, comments)
    const [posts, pages, media, users, leads, comments] = await Promise.all([
      payload.count({ collection: "posts" }).catch(() => ({ totalDocs: 0 })),
      payload.count({ collection: "pages" }).catch(() => ({ totalDocs: 0 })),
      payload.count({ collection: "media" }).catch(() => ({ totalDocs: 0 })),
      payload.count({ collection: "users" }).catch(() => ({ totalDocs: 0 })),
      payload.count({ collection: "leads" }).catch(() => ({ totalDocs: 0 })),
      payload.count({ collection: "comments" }).catch(() => ({ totalDocs: 0 })),
    ]);

    checks.push({
      name: "Content Status",
      status: "good",
      message: `${posts.totalDocs} posts, ${pages.totalDocs} pages, ${media.totalDocs} media files`,
      value: posts.totalDocs + pages.totalDocs,
    });

    // Check for admin users
    const adminUsers = await payload.count({
      collection: "users",
      where: { role: { equals: "admin" } },
    }).catch(() => ({ totalDocs: 0 }));

    if (adminUsers.totalDocs === 0) {
      checks.push({
        name: "Admin Users",
        status: "warning",
        message: "No admin users found - consider adding one",
      });
      if (overallStatus === "good") overallStatus = "warning";
    } else {
      checks.push({
        name: "Admin Users",
        status: "good",
        message: `${adminUsers.totalDocs} admin user(s) configured`,
        value: adminUsers.totalDocs,
      });
    }

    // Pending Comments
    const pendingComments = await payload.count({
      collection: "comments",
      where: { status: { equals: "pending" } },
    }).catch(() => ({ totalDocs: 0 }));

    if (pendingComments.totalDocs > 10) {
      checks.push({
        name: "Pending Comments",
        status: "warning",
        message: `${pendingComments.totalDocs} comments awaiting moderation`,
        value: pendingComments.totalDocs,
      });
      if (overallStatus === "good") overallStatus = "warning";
    } else {
      checks.push({
        name: "Pending Comments",
        status: "good",
        message: pendingComments.totalDocs > 0 
          ? `${pendingComments.totalDocs} comment(s) pending` 
          : "No pending comments",
        value: pendingComments.totalDocs,
      });
    }

    // New Leads (uncontacted)
    const newLeads = await payload.count({
      collection: "leads",
      where: { status: { equals: "new" } },
    }).catch(() => ({ totalDocs: 0 }));

    if (newLeads.totalDocs > 5) {
      checks.push({
        name: "New Enquiries",
        status: "warning",
        message: `${newLeads.totalDocs} new enquiries need attention`,
        value: newLeads.totalDocs,
      });
      if (overallStatus === "good") overallStatus = "warning";
    } else {
      checks.push({
        name: "New Enquiries",
        status: "good",
        message: newLeads.totalDocs > 0
          ? `${newLeads.totalDocs} new enquiry(ies)`
          : "All enquiries handled",
        value: newLeads.totalDocs,
      });
    }

    // Draft Posts
    const draftPosts = await payload.count({
      collection: "posts",
      where: { status: { equals: "draft" } },
    }).catch(() => ({ totalDocs: 0 }));

    checks.push({
      name: "Draft Posts",
      status: "good",
      message: `${draftPosts.totalDocs} draft post(s)`,
      value: draftPosts.totalDocs,
    });

    // Scheduled Posts
    const scheduledPosts = await payload.count({
      collection: "posts",
      where: { status: { equals: "scheduled" } },
    }).catch(() => ({ totalDocs: 0 }));

    checks.push({
      name: "Scheduled Posts",
      status: "good",
      message: scheduledPosts.totalDocs > 0
        ? `${scheduledPosts.totalDocs} post(s) scheduled`
        : "No scheduled posts",
      value: scheduledPosts.totalDocs,
    });

    // Environment Checks
    const envChecks = [
      { key: "DATABASE_URI", name: "Database" },
      { key: "PAYLOAD_SECRET", name: "Auth Secret" },
      { key: "NEXT_PUBLIC_SITE_URL", name: "Site URL" },
    ];

    let missingEnvs = 0;
    for (const env of envChecks) {
      if (!process.env[env.key]) missingEnvs++;
    }

    if (missingEnvs > 0) {
      checks.push({
        name: "Environment Variables",
        status: "warning",
        message: `${missingEnvs} recommended env variable(s) not set`,
      });
      if (overallStatus === "good") overallStatus = "warning";
    } else {
      checks.push({
        name: "Environment Variables",
        status: "good",
        message: "All required variables configured",
      });
    }

    // Blob Storage — CRITICAL for Vercel deployment
    const isVercel = process.env.VERCEL === "1" || process.env.VERCEL_ENV;
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      checks.push({
        name: "Media Storage",
        status: "good",
        message: "Vercel Blob storage configured — image uploads enabled",
      });
    } else if (isVercel) {
      checks.push({
        name: "Media Storage",
        status: "critical",
        message: "BLOB_READ_WRITE_TOKEN missing — IMAGE UPLOADS WILL FAIL! Add Blob storage in Vercel Dashboard → Storage",
      });
      overallStatus = "critical";
    } else {
      checks.push({
        name: "Media Storage",
        status: "warning",
        message: "Using local storage (OK for dev, but set up Vercel Blob for production)",
      });
      if (overallStatus === "good") overallStatus = "warning";
    }

    return NextResponse.json({
      status: overallStatus,
      timestamp: new Date().toISOString(),
      checks,
      summary: {
        total: checks.length,
        good: checks.filter((c) => c.status === "good").length,
        warnings: checks.filter((c) => c.status === "warning").length,
        critical: checks.filter((c) => c.status === "critical").length,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "critical",
        timestamp: new Date().toISOString(),
        checks: [
          {
            name: "System Error",
            status: "critical",
            message: String(error),
          },
        ],
        summary: { total: 1, good: 0, warnings: 0, critical: 1 },
      },
      { status: 500 }
    );
  }
}
