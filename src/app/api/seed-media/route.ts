import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { seedAllMedia } from "@/lib/seedMedia";

/**
 * Re-upload all static site images into Payload Media (and Vercel Blob when configured).
 * GET /api/seed-media?secret=<PAYLOAD_SECRET>[&force=1]
 */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse("Disabled in production", { status: 403 });
  }

  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const force = req.nextUrl.searchParams.get("force") === "1";

  try {
    const payload = await getPayload({ config });
    const result = await seedAllMedia(payload, force);
    return NextResponse.json({ success: true, force, ...result });
  } catch (err) {
    console.error("[seed-media] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
