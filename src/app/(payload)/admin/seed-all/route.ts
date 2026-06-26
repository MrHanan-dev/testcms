import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";
import { seedOriginalCollections } from "@/lib/seedCollections";

/**
 * Seed CMS collections with original site content from `src/data/*`.
 * Does NOT seed invented demo pricing or duplicate placeholder entries.
 *
 * GET /admin/seed-all?secret=<PAYLOAD_SECRET>[&force=1]
 *
 * For full site seed (globals + collections), use /api/seed-all instead.
 */
export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    return NextResponse.json({ error: "Disabled in production" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  if (secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const force = searchParams.get("force") === "1";

  try {
    const payload = await getPayload({ config });
    const results = await seedOriginalCollections(payload, force);

    return NextResponse.json({
      success: true,
      message: "Collections seeded from original site content (src/data/*).",
      force,
      results,
      summary: Object.fromEntries(
        Object.entries(results).map(([key, val]) => [
          key,
          { created: val.created, updated: val.updated, skipped: val.skipped, errors: val.errors.length },
        ]),
      ),
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
