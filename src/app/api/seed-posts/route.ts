import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { blogPostsMeta } from "@/data/blogPostsMeta";

/** Seed blog posts metadata from blogPostsMeta. Dev-only, ?force=1. Body/FAQ intentionally not seeded. */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";

    const existing = await payload.find({ collection: "posts", limit: 1 });
    if (existing.totalDocs > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    let created = 0;
    let updated = 0;

    for (const post of blogPostsMeta) {
      const found = await payload.find({
        collection: "posts",
        where: { slug: { equals: post.slug } },
        limit: 1,
      });
      const data = {
        title: post.title,
        slug: post.slug,
        abstract: post.abstract,
        date: post.date,
        author: post.author,
        category: post.category,
        imageUrl: post.imageUrl,
        readTime: post.readTime,
      };

      if (found.docs[0]) {
        await payload.update({
          collection: "posts",
          id: found.docs[0].id,
          data: data as never,
        });
        updated++;
      } else {
        await payload.create({ collection: "posts", data: data as never });
        created++;
      }
    }

    return NextResponse.json({ seeded: true, created, updated });
  } catch (err) {
    console.error("[seed-posts] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
