import { NextRequest, NextResponse } from "next/server";
import { list, head } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Diagnostic: check what's in Vercel Blob and whether the handler can reach it.
 * Protected by HEALTH_SECRET.
 * Usage: GET /api/blob-status?secret=<HEALTH_SECRET>
 */
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!secret || secret !== process.env.HEALTH_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN not set" }, { status: 500 });
  }

  const results: Record<string, unknown> = {
    storeId: process.env.BLOB_STORE_ID,
    tokenPresent: true,
  };

  // List first 20 blobs with prefix "media/"
  try {
    const listing = await list({ prefix: "media/", limit: 20, token });
    results.blobCount = listing.blobs.length;
    results.hasMore = listing.hasMore;
    results.blobs = listing.blobs.map((b) => ({
      pathname: b.pathname,
      url: b.url,
      size: b.size,
    }));
  } catch (e) {
    results.listError = String(e);
    results.blobs = [];
  }

  // Try head() on one specific file
  const testFile = "tripic.jpeg";
  const storeId = token.match(/^vercel_blob_rw_([a-z\d]+)_/i)?.[1]?.toLowerCase();
  const baseUrl = `https://${storeId}.public.blob.vercel-storage.com`;
  const testUrl = `${baseUrl}/media/${testFile}`;

  try {
    const meta = await head(testUrl, { token });
    results.headTest = {
      success: true,
      url: meta.url,
      contentType: meta.contentType,
      size: meta.size,
    };
  } catch (e) {
    results.headTest = { success: false, error: String(e) };
  }

  return NextResponse.json(results);
}
