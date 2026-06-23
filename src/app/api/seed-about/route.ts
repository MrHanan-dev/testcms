import { join } from "node:path";
import { existsSync } from "node:fs";
import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * One-time seed for the About global with the page's CURRENT content (and the
 * founder image into Media). Dev-only, secret-guarded, idempotent (?force=1).
 * The founder-story paragraphs are intentionally NOT seeded so the page keeps
 * its exact built-in bio (with inline bold).
 *
 * /api/seed-about?secret=<PAYLOAD_SECRET>[&force=1]
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
    const force = req.nextUrl.searchParams.get("force") === "1";

    const existing = await payload.findGlobal({ slug: "about" });
    if (Array.isArray(existing?.whyCards) && existing.whyCards.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    // Upload the founder image into Media (reuse if present).
    let founderImage: string | number | undefined;
    const founderFile = "founder_amjad.webp";
    const founderPath = join(process.cwd(), "public", "images", founderFile);
    if (existsSync(founderPath)) {
      const found = await payload.find({ collection: "media", where: { filename: { equals: founderFile } }, limit: 1 });
      const media =
        found.docs[0] ??
        (await payload.create({ collection: "media", data: { alt: "Engr. Syed Amjad Iqbal, CEO & Certified Trainer" }, filePath: founderPath }));
      founderImage = media.id;
    }

    await payload.updateGlobal({
      slug: "about",
      data: {
        heroHeadline: "Where Knowledge Meets Experience",
        heroSubheading: "Transforming project management into a strategic advantage for teams and leaders worldwide.",
        storyEyebrow: "Our Founder's Story",
        storyHeading: "Passion, Purpose, and 17 Years of Delivery",
        ...(founderImage ? { founderImage } : {}),
        founderName: "Engr. Syed Amjad Iqbal",
        founderTitle: "CEO & Certified Trainer",
        whyEyebrow: "Who We Are",
        whyHeading: "Why Choose TheAgileNest",
        whyIntro:
          "At TheAgileNest, we don’t just teach project management   we transform professionals into confident, TheAgileNest leaders ready to deliver real results.",
        whyCards: [
          { title: "Real-World Expertise", description: "Learn from certified industry experts with decades of hands on experience in construction, operations, and leadership. We share what truly works   not just theory." },
          { title: "Global Knowledge, Local Focus", description: "Trained at world leading universities like KTH (Sweden) and Massey University (New Zealand), we combine international best practices with local industry insight." },
          { title: "Practical, Impactful Learning", description: "Our training is designed around real projects, real tools, and real challenges   ensuring you can apply your learning immediately." },
          { title: "Personal Mentorship", description: "We guide every learner through their professional growth journey, offering support, mentoring, and career coaching beyond the classroom." },
          { title: "Lifelong Learning Culture", description: "TheAgileNest is more than a training provider   it’s a learning community. We inspire continuous growth, innovation, and excellence." },
        ],
        whyQuote: "TheAgileNest   Where knowledge meets experience, and every project takes flight.",
        evoEyebrow: "Our Evolution",
        evoHeading: "A 17-Year Journey in Project Management",
        evoSubtitle: "From PMBOK 3rd to 8th Edition. Embracing Passion, Purpose, and Technology.",
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-about] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
