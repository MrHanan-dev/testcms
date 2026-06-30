import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { verifyCmsSeed } from "@/lib/cmsSeedVerify";

/**
 * Verify all CMS globals and collections are seeded with original content.
 * GET /api/dev/cms-seed-verify?secret=<PAYLOAD_SECRET>
 */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse("Disabled in production", { status: 403 });
  }
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const payload = await getPayload({ config });
    const result = await verifyCmsSeed(payload);
    return NextResponse.json({
      success: result.failed === 0,
      passed: result.passed,
      failed: result.failed,
      total: result.checks.length,
      checks: result.checks,
      hint: result.failed > 0 ? "Run GET /api/seed-all?secret=...&force=1 then re-verify" : undefined,
    });
  } catch (err) {
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
