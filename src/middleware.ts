import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware — Handle redirects and maintenance mode.
 * WordPress-style URL redirects and site-wide maintenance.
 */

// Cache redirects in memory (refreshed on deploy)
let redirectsCache: Map<string, { to: string; type: string }> | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 60000; // 1 minute

async function getRedirects(): Promise<Map<string, { to: string; type: string }>> {
  const now = Date.now();
  
  // Return cached if still valid
  if (redirectsCache && now - cacheTimestamp < CACHE_TTL) {
    return redirectsCache;
  }

  try {
    // Fetch redirects from API
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/redirects?depth=0&limit=1000`, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return redirectsCache || new Map();
    }

    const data = await response.json();
    const map = new Map<string, { to: string; type: string }>();

    for (const redirect of data.docs || []) {
      if (redirect.isActive && redirect.from && redirect.to) {
        // Check expiry
        if (redirect.expiresAt && new Date(redirect.expiresAt) < new Date()) {
          continue;
        }
        map.set(redirect.from.toLowerCase(), {
          to: redirect.to,
          type: redirect.type || "301",
        });
      }
    }

    redirectsCache = map;
    cacheTimestamp = now;
    return map;
  } catch {
    return redirectsCache || new Map();
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check for redirects
  try {
    const redirects = await getRedirects();
    const redirect = redirects.get(pathname.toLowerCase());

    if (redirect) {
      const statusCode = parseInt(redirect.type, 10);
      const destination = redirect.to.startsWith("http")
        ? redirect.to
        : new URL(redirect.to, request.url).toString();

      // Increment hit counter (fire and forget)
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/redirects/hit`, {
        method: "POST",
        body: JSON.stringify({ from: pathname }),
        headers: { "Content-Type": "application/json" },
      }).catch(() => {});

      return NextResponse.redirect(destination, statusCode);
    }
  } catch {
    // Continue on error
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
