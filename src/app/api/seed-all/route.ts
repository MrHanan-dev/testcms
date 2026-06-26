import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import {
  PAGE_SEED_ROUTES,
  runPageSeedRoute,
  seedOriginalCollections,
} from "@/lib/seedCollections";
import { seedAllMedia } from "@/lib/seedMedia";

/**
 * Seed ALL original site content into Payload (globals + collections).
 * Uses live site copy from `src/data/*` — not placeholder demo data.
 *
 * GET /api/seed-all?secret=<PAYLOAD_SECRET>[&force=1][&collectionsOnly=1][&pagesOnly=1]
 */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse("Disabled in production", { status: 403 });
  }

  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.PAYLOAD_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const force = req.nextUrl.searchParams.get("force") === "1";
  const collectionsOnly = req.nextUrl.searchParams.get("collectionsOnly") === "1";
  const pagesOnly = req.nextUrl.searchParams.get("pagesOnly") === "1";
  const origin = req.nextUrl.origin;

  try {
    const payload = await getPayload({ config });
    const pageResults: Record<string, unknown> = {};
    let collectionResults: Record<string, unknown> | undefined;
    let mediaResults: Record<string, unknown> | undefined;

    mediaResults = await seedAllMedia(payload, force);

    if (!collectionsOnly) {
      for (const route of PAGE_SEED_ROUTES) {
        const result = await runPageSeedRoute(route, secret!, force, origin);
        pageResults[route] = result;
      }
    }

    if (!pagesOnly) {
      collectionResults = await seedOriginalCollections(payload, force);
    }

    return NextResponse.json({
      success: true,
      message: "Original site content seeded (from src/data/*, not sample placeholders).",
      force,
      media: mediaResults,
      pages: collectionsOnly ? undefined : pageResults,
      collections: pagesOnly ? undefined : collectionResults,
    });
  } catch (err) {
    console.error("[seed-all] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
