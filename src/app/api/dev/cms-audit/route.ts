import { NextResponse } from "next/server";
import { runCmsAudit } from "@/lib/cmsAudit";

/**
 * Full CMS audit — tests every collection, global, auth, and env config.
 * Dev only: GET /api/dev/cms-audit
 */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Disabled in production" }, { status: 403 });
  }

  const report = await runCmsAudit();
  return NextResponse.json(report, {
    status: report.status === "fail" ? 500 : 200,
  });
}
