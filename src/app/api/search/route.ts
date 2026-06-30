import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Global Search API — WordPress-style content search.
 * Search across all content types at once.
 * 
 * GET /api/search?q=keyword&type=all&limit=20
 * 
 * Types: all, posts, pages, media, leads, comments
 */

interface SearchResult {
  id: string;
  type: string;
  title: string;
  excerpt?: string;
  url?: string;
  image?: string;
  date?: string;
  status?: string;
}

export async function GET(request: Request) {
  try {
    const payload = await getPayload({ config });
    const url = new URL(request.url);
    
    const query = url.searchParams.get("q")?.trim();
    const type = url.searchParams.get("type") || "all";
    const limit = Math.min(parseInt(url.searchParams.get("limit") || "20"), 50);

    if (!query || query.length < 2) {
      return NextResponse.json(
        { error: "Search query must be at least 2 characters" },
        { status: 400 }
      );
    }

    // Require authentication for CRM/sensitive searches
    const sensitiveTypes = ["leads", "users", "comments", "activity-log", "form-submissions"];
    if (sensitiveTypes.includes(type) || type === "all") {
      const { user } = await payload.auth({ headers: request.headers });
      if (!user) {
        return NextResponse.json(
          { error: "Authentication required for this search type" },
          { status: 401 }
        );
      }
    }

    const results: SearchResult[] = [];

    // Search Posts
    if (type === "all" || type === "posts") {
      try {
        const posts = await payload.find({
          collection: "posts",
          where: {
            or: [
              { title: { contains: query } },
              { abstract: { contains: query } },
              { category: { contains: query } },
            ],
          },
          limit,
          depth: 0,
          overrideAccess: false,
        });

        for (const post of posts.docs) {
          results.push({
            id: String(post.id),
            type: "post",
            title: (post.title as string) || "Untitled",
            excerpt: (post.abstract as string)?.slice(0, 150) || "",
            url: `/blog/${post.slug}`,
            date: post.createdAt as string,
            status: post.status as string,
          });
        }
      } catch {}
    }

    // Search Pages
    if (type === "all" || type === "pages") {
      try {
        const pages = await payload.find({
          collection: "pages",
          where: {
            or: [
              { title: { contains: query } },
              { slug: { contains: query } },
            ],
          },
          limit,
          depth: 0,
          overrideAccess: false,
        });

        for (const page of pages.docs) {
          results.push({
            id: String(page.id),
            type: "page",
            title: (page.title as string) || "Untitled",
            url: `/${page.slug}`,
            date: page.createdAt as string,
          });
        }
      } catch {}
    }

    // Search Media
    if (type === "all" || type === "media") {
      try {
        const media = await payload.find({
          collection: "media",
          where: {
            or: [
              { alt: { contains: query } },
              { filename: { contains: query } },
            ],
          },
          limit,
          depth: 0,
          overrideAccess: false,
        });

        for (const file of media.docs) {
          results.push({
            id: String(file.id),
            type: "media",
            title: (file.alt as string) || (file.filename as string) || "Untitled",
            image: file.url as string,
            date: file.createdAt as string,
          });
        }
      } catch {}
    }

    // Search Leads
    if (type === "all" || type === "leads") {
      try {
        const leads = await payload.find({
          collection: "leads",
          where: {
            or: [
              { name: { contains: query } },
              { email: { contains: query } },
              { subject: { contains: query } },
            ],
          },
          limit,
          depth: 0,
          overrideAccess: false,
        });

        for (const lead of leads.docs) {
          results.push({
            id: String(lead.id),
            type: "lead",
            title: (lead.name as string) || "Anonymous",
            excerpt: (lead.subject as string) || (lead.email as string),
            date: lead.createdAt as string,
            status: lead.status as string,
          });
        }
      } catch {}
    }

    // Search Comments
    if (type === "all" || type === "comments") {
      try {
        const comments = await payload.find({
          collection: "comments",
          where: {
            or: [
              { author: { contains: query } },
              { content: { contains: query } },
            ],
          },
          limit,
          depth: 0,
          overrideAccess: false,
        });

        for (const comment of comments.docs) {
          results.push({
            id: String(comment.id),
            type: "comment",
            title: `Comment by ${comment.author}`,
            excerpt: (comment.content as string)?.slice(0, 150),
            date: comment.createdAt as string,
            status: comment.status as string,
          });
        }
      } catch {}
    }

    // Sort by date (newest first)
    results.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return NextResponse.json({
      query,
      type,
      total: results.length,
      results: results.slice(0, limit),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Search failed", details: String(error) },
      { status: 500 }
    );
  }
}
