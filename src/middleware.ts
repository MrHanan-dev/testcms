import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware — Vercel Blob CDN redirect + WordPress-style URL redirects.
 *
 * WHY THE BLOB REDIRECT EXISTS
 * Payload's built-in /api/media/file/ proxy calls head() from the @vercel/blob
 * SDK. That SDK call goes to blob.vercel-storage.com (the management API), which
 * Hostinger's server cannot reach — every request hangs and Hostinger kills it
 * with 504. The public CDN (*.public.blob.vercel-storage.com) IS reachable from
 * browsers, so we skip the proxy entirely: intercept /api/media/file/* here and
 * redirect straight to the CDN. Zero SDK calls, zero timeouts.
 */

// ─── Vercel Blob CDN redirect ─────────────────────────────────────────────────

function blobCdnRedirect(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/api/media/file/")) return null;

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return null;

  // Extract storeId from the token: vercel_blob_rw_<storeId>_<secret>
  const storeId = token.match(/^vercel_blob_rw_([a-z\d]+)_/i)?.[1]?.toLowerCase();
  if (!storeId) return null;

  // filename is everything after /api/media/file/
  const filename = pathname.slice("/api/media/file/".length);
  if (!filename) return null;

  // prefix query param is set by Payload's afterRead hook (defaults to "media")
  const prefix = request.nextUrl.searchParams.get("prefix") || "media";

  const cdnUrl = `https://${storeId}.public.blob.vercel-storage.com/${prefix}/${filename}`;
  return NextResponse.redirect(cdnUrl, { status: 302 });
}

// ─── CMS redirects ────────────────────────────────────────────────────────────

let redirectsCache: Map<string, { to: string; type: string }> | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 60_000; // 1 minute

async function getRedirects(): Promise<Map<string, { to: string; type: string }>> {
  const now = Date.now();

  if (redirectsCache && now - cacheTimestamp < CACHE_TTL) {
    return redirectsCache;
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/redirects?depth=0&limit=1000`, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
    });

    if (!response.ok) return redirectsCache || new Map();

    const data = await response.json();
    const map = new Map<string, { to: string; type: string }>();

    for (const redirect of data.docs || []) {
      if (redirect.isActive && redirect.from && redirect.to) {
        if (redirect.expiresAt && new Date(redirect.expiresAt) <