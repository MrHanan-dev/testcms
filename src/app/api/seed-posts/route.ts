import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { blogPostsMeta } from "@/data/blogPostsMeta";
import { blogFaqs } from "@/lib/faqData";

/** Seed blog posts from blogPostsMeta + per-post FAQs. Sets status published so CMS edits appear on site. */
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

    const uploadImage = async (imagePath: string, alt: string) => {
      if (!imagePath || /^https?:\/\//i.test(imagePath)) return undefined;
      const { join } = await import("node:path");
      const { existsSync } = await import("node:fs");
      const filename = imagePath.split("/").pop() || imagePath;
      const filePath = join(process.cwd(), "public", imagePath.replace(/^\//, ""));
      if (!existsSync(filePath)) return undefined;
      const found = await payload.find({ collection: "media", where: { filename: { equals: filename } }, limit: 1 });
      const media = found.docs[0] ?? (await payload.create({ collection: "media", data: { alt }, filePath }));
      return media.id;
    };

    let created = 0;
    let updated = 0;

    for (const post of blogPostsMeta) {
      const found = await payload.find({
        collection: "posts",
        where: { slug: { equals: post.slug } },
        limit: 1,
      });

      const featuredImage = await uploadImage(post.imageUrl, post.title);
      const faqItems = blogFaqs[post.slug] ?? [];

      const data = {
        title: post.title,
        slug: post.slug,
        abstract: post.abstract,
        date: post.date,
        author: post.author,
        category: post.category,
        imageUrl: post.imageUrl,
        ...(featuredImage ? { featuredImage } : {}),
        readTime: post.readTime,
        status: "published",
        publishDate: post.date,
        faqItems,
        metaTitle: `${post.title} | TheAgileNest`,
        metaDescription: post.abstract,
      };

      if (found.docs[0]) {
        await payload.update({ collection: "posts", id: found.docs[0].id, data: data as never });
        updated++;
      } else {
        await payload.create({ collection: "posts", data: data as never });
        created++;
      }
    }

    return NextResponse.json({ seeded: true, created, updated, published: blogPostsMeta.length });
  } catch (err) {
    console.error("[seed-posts] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
