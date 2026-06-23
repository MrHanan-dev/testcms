import { join } from "node:path";
import { existsSync } from "node:fs";
import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * One-time seed: populate the Home global's hero slides with the site's CURRENT
 * content (and upload the hero images into the Media library), so the client
 * sees and edits the real slides in the admin instead of an empty list.
 *
 * Dev-only + secret-guarded + idempotent (skips if slides already exist unless
 * ?force=1). Hit once: /api/seed-home?secret=<PAYLOAD_SECRET>
 */
const SLIDES = [
  {
    file: "TheAgileNest_hero_main_1771222013046.png",
    variant: "image",
    tag: "Project Management",
    headline: "Strategic Planning.\nPrecision Delivery. Total Control.",
    description:
      "From inception to completion, we provide the leadership and expertise required to navigate high-stakes projects and achieve outstanding business outcomes.",
    alt: "Expert Project Management Consulting",
  },
  {
    file: "TheAgileNest_pmp_training_1771222055265.png",
    variant: "image",
    tag: "Professional Training",
    headline: "Hands On Training.\nReal Results. Certified Success.",
    description:
      "Gain practical, hands-on experience with TheAgileNest’s expert-led project management courses. Our proven methods ensure you not only pass your exams but also excel in real-world projects.",
    alt: "Professional training session backdrop from TheAgileNest",
  },
  {
    file: "Totalqsconsultant.jpeg",
    variant: "infographic",
    tag: "Trusted Partner",
    headline: "Simple. Transparent.\nStress-Free Estimation.",
    description:
      "Helping builders, developers, and renovators complete their projects on time and within budget with expert cost management.",
    alt: "TheAgileNest Consultant Overview",
  },
  {
    file: "pmbok_evolution.jpeg",
    variant: "infographic",
    tag: "Quantity Surveying",
    headline: "Bid More. Win More.\nBuild Better with TheAgileNest Estimation services",
    description:
      "Your reliable partner in Quantity Surveying, Cost Management, and successful project delivery.\n\nAt TheAgileNest Estimation services, we make construction estimating and cost management simple, transparent, and stress-free. We act as your trusted partner in New Zealand's construction industry, helping builders, developers, and renovators complete their projects on time and within budget.",
    alt: "TheAgileNest Estimation services. Bid More. Win More.",
  },
  {
    file: null, // collage variant has no background image
    variant: "collage",
    tag: "Certifications",
    headline: "Globally Recognized\nCredentials.",
    description:
      "Elevate your career with industry leading certifications. We provide comprehensive preparation for PMP®, CAPM®, and PMI-CP® exams.",
    alt: "Globally Recognized Certifications: PMP, CAPM, PMI-CP",
  },
] as const;

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

    const existing = await payload.findGlobal({ slug: "home" });
    if (Array.isArray(existing?.heroSlides) && existing.heroSlides.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Home already has slides (use ?force=1)." });
    }

    // Upload each slide image into Media (reuse if a file with that name exists).
    const heroSlides = [];
    for (const s of SLIDES) {
      let imageId: string | number | undefined;
      if (s.file) {
        const filePath = join(process.cwd(), "public", "images", s.file);
        if (existsSync(filePath)) {
          const found = await payload.find({
            collection: "media",
            where: { filename: { equals: s.file } },
            limit: 1,
          });
          const media =
            found.docs[0] ??
            (await payload.create({ collection: "media", data: { alt: s.alt }, filePath }));
          imageId = media.id;
        }
      }
      heroSlides.push({
        variant: s.variant,
        ...(imageId ? { image: imageId } : {}),
        tag: s.tag,
        headline: s.headline,
        description: s.description,
        alt: s.alt,
      });
    }

    await payload.updateGlobal({ slug: "home", data: { heroSlides } });
    return NextResponse.json({ seeded: true, slides: heroSlides.length });
  } catch (err) {
    console.error("[seed-home] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
