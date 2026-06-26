import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import {
  HOME_CERTS,
  HOME_FAQ_ITEMS,
  HOME_FAQ_META,
  HOME_GOOGLE_REVIEWS,
  HOME_HERO_SLIDES,
  HOME_TESTIMONIALS,
} from "@/data/homeContent";
import { mediaIdFor } from "@/lib/seedMedia";

/**
 * One-time seed: populate the Home global with the site's CURRENT content (and
 * upload its images into Media), so the client sees and edits real content
 * instead of empty fields.
 *
 * Dev-only + secret-guarded + idempotent (skips if already seeded unless
 * ?force=1). Hit once: /api/seed-home?secret=<PAYLOAD_SECRET>[&force=1]
 *
 * Note: the two "Our Identity" paragraphs contain inline bold and are left to
 * the component's built-in fallback (so output stays identical); everything else
 * is seeded. Heading lead/muted strings preserve exact spacing.
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

    const existing = await payload.findGlobal({ slug: "home" });
    const alreadySeeded = Array.isArray(existing?.featureItems) && existing.featureItems.length > 0;
    if (alreadySeeded && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    const uploaded = new Map<string, string | number>();
    const upload = async (dir: string, file: string, alt: string): Promise<string | number | undefined> => {
      const key = `${dir}/${file}`;
      if (uploaded.has(key)) return uploaded.get(key);
      const id = await mediaIdFor(payload, file, alt, uploaded, force);
      if (id != null) uploaded.set(key, id);
      return id;
    };

    const heroSlides = [];
    for (const s of HOME_HERO_SLIDES) {
      const image = s.file ? await upload("images", s.file, s.alt) : undefined;
      heroSlides.push({ variant: s.variant, ...(image ? { image } : {}), tag: s.tag, headline: s.headline, description: s.description, alt: s.alt });
    }

    const certItems = [];
    for (const c of HOME_CERTS) {
      const image = await upload(c.dir, c.file, `${c.name} Badge`);
      certItems.push({ name: c.name, title: c.title, href: c.href, ...(image ? { image } : {}) });
    }

    await payload.updateGlobal({
      slug: "home",
      data: {
        heroSlides,
        featureItems: [
          { text: "Project Management Experts" },
          { text: "PMP® Training Specialists" },
          { text: "Cost & Contract Experts" },
          { text: "Results Focused Delivery" },
        ],
        expertiseEyebrow: "Our Expertise",
        expertiseHeadingLead: "Our Expertise: ",
        expertiseHeadingMuted: "Empowering Professionals. Transforming Projects",
        expertiseCards: [
          { subtitle: "Precision Execution", title: "Project Management Consultancy", description: "Planning, leadership, controls, and delivery support for successful outcomes.", href: "/project-management", buttonText: "Explore Services" },
          { subtitle: "Budget Control", title: "Cost Management & Quantity Surveying", description: "Accurate estimating, valuations, commercial controls, and contract administration that protect project value.", href: "/cost-estimation", buttonText: "Explore Services" },
          { subtitle: "Expert Certification", title: "Professional Training", description: "Practical PMP®, project management, and customised training programs that build high-performing capability.", href: "/training", buttonText: "Explore Programs" },
        ],
        certEyebrow: "Elite Credentials",
        certHeadingLead: "Global Benchmarks",
        certHeadingMuted: "for Project Leaders",
        certItems,
        aboutHeadingLead: "Your Strategic Partner in ",
        aboutHeadingMuted: "Project Excellence",
        aboutIdentityTitle: "Our Identity",
        aboutCol1Title: "Certification Training",
        aboutCol1Items: [{ text: "PMP® Certification" }, { text: "CAPM® Certification" }, { text: "PMI-CP® Construction" }],
        aboutCol2Title: "Tailored Consultancy",
        aboutCol2Text: "PMO Setup • Project Controls • Cost Estimation • Commercial Advisory • Contract Management",
        whyHeading: "Why Clients Choose The Agile Nest",
        whyItems: [
          { title: "Proven real-world project delivery experience", description: "Our consultants have decades of hands-on experience leading and recovering high-stakes projects across multiple industries." },
          { title: "Strong commercial and contractual expertise", description: "We provide meticulous cost management and quantity surveying to ensure your projects remain profitable and contractually secure." },
          { title: "Clear reporting, governance, and accountability", description: "We implement robust frameworks that provide total transparency, enabling informed decision-making at every project stage." },
          { title: "Practical training built on industry experience", description: "Our certification programs move beyond theory, teaching practical applications that build capable, high-performing teams." },
          { title: "Trusted support with a client-first approach", description: "We partner closely with you, aligning our strategies directly with your organizational goals to ensure mutual success." },
          { title: "Focused on measurable outcomes and value", description: "Every methodology we apply is designed to deliver tangible ROI, optimize efficiency, and drive sustainable growth." },
        ],
        heritageEyebrow: "Our Heritage",
        heritageHeading: "A 17-Year Journey",
        heritageText: "From PMBOK 3rd to 8th Edition. Evolving passion with purpose and technological foresight.",
        heritageLinkText: "View the Interactive Timeline",
        heritageLinkHref: "/about#evolution",
        stats: [
          { value: "98%", suffix: "", label: "Pass Rate" },
          { value: "17+", suffix: "", label: "Years Experience" },
          { value: "5000", suffix: "+", label: "Professionals Trained" },
          { value: "100", suffix: "%", label: "Project Success" },
        ],
        testimonialsEyebrow: "Testimonials",
        testimonialsHeadingLead: "Voice of ",
        testimonialsHeadingMuted: "Excellence",
        testimonials: [...HOME_TESTIMONIALS],
        reviewsEyebrow: "Google Reviews",
        reviewsHeading: "What Our Students Say",
        reviewsRating: "5.0",
        reviewsGoogleUrl: "https://www.google.com/maps/place/AgileNest/data=!4m2!3m1!1s0x0:0xa5b20cdb0955fd78?sa=X&ved=1t:2428&hl=en-NZ&ictx=111",
        reviewItems: [...HOME_GOOGLE_REVIEWS],
        ...HOME_FAQ_META,
        faqItems: [...HOME_FAQ_ITEMS],
        ctaHeadingLead: "Ready to Elevate Your",
        ctaHeadingAccent: "Project Strategy?",
        ctaParagraph: "Join over 5,000 professionals who have transformed their careers and organizations with our elite training and consultancy.",
        ctaPrimaryText: "Start Your Journey",
        ctaSecondaryText: "Talk to an Expert",
      } as never,
    });

    return NextResponse.json({ seeded: true, sections: 10 });
  } catch (err) {
    console.error("[seed-home] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
