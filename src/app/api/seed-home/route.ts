import { join } from "node:path";
import { existsSync } from "node:fs";
import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

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
const HERO_SLIDES = [
  { file: "TheAgileNest_hero_main_1771222013046.png", variant: "image", tag: "Project Management", headline: "Strategic Planning.\nPrecision Delivery. Total Control.", description: "From inception to completion, we provide the leadership and expertise required to navigate high-stakes projects and achieve outstanding business outcomes.", alt: "Expert Project Management Consulting" },
  { file: "TheAgileNest_pmp_training_1771222055265.png", variant: "image", tag: "Professional Training", headline: "Hands On Training.\nReal Results. Certified Success.", description: "Gain practical, hands-on experience with TheAgileNest’s expert-led project management courses. Our proven methods ensure you not only pass your exams but also excel in real-world projects.", alt: "Professional training session backdrop from TheAgileNest" },
  { file: "Totalqsconsultant.jpeg", variant: "infographic", tag: "Trusted Partner", headline: "Simple. Transparent.\nStress-Free Estimation.", description: "Helping builders, developers, and renovators complete their projects on time and within budget with expert cost management.", alt: "TheAgileNest Consultant Overview" },
  { file: "pmbok_evolution.jpeg", variant: "infographic", tag: "Quantity Surveying", headline: "Bid More. Win More.\nBuild Better with TheAgileNest Estimation services", description: "Your reliable partner in Quantity Surveying, Cost Management, and successful project delivery.\n\nAt TheAgileNest Estimation services, we make construction estimating and cost management simple, transparent, and stress-free. We act as your trusted partner in New Zealand's construction industry, helping builders, developers, and renovators complete their projects on time and within budget.", alt: "TheAgileNest Estimation services. Bid More. Win More." },
  { file: null, variant: "collage", tag: "Certifications", headline: "Globally Recognized\nCredentials.", description: "Elevate your career with industry leading certifications. We provide comprehensive preparation for PMP®, CAPM®, and PMI-CP® exams.", alt: "Globally Recognized Certifications: PMP, CAPM, PMI-CP" },
] as const;

const CERTS = [
  { name: "PMP", title: "Project Management Professional", href: "/pmp", dir: "certifications", file: "pmp.webp" },
  { name: "CAPM", title: "Certified Associate in Project Management", href: "/capm", dir: "certifications", file: "capm.webp" },
  { name: "PMI-CP", title: "PMI Construction Professional", href: "/pmicp", dir: "certifications", file: "pmi-cp.webp" },
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
    const alreadySeeded = Array.isArray(existing?.featureItems) && existing.featureItems.length > 0;
    if (alreadySeeded && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    // Upload an image from /public into Media, reusing it if already present.
    const uploaded = new Map<string, string | number>();
    const upload = async (dir: string, file: string, alt: string): Promise<string | number | undefined> => {
      const key = `${dir}/${file}`;
      if (uploaded.has(key)) return uploaded.get(key);
      const filePath = join(process.cwd(), "public", dir, file);
      if (!existsSync(filePath)) return undefined;
      const found = await payload.find({ collection: "media", where: { filename: { equals: file } }, limit: 1 });
      const media = found.docs[0] ?? (await payload.create({ collection: "media", data: { alt }, filePath }));
      uploaded.set(key, media.id);
      return media.id;
    };

    // Hero slides
    const heroSlides = [];
    for (const s of HERO_SLIDES) {
      const image = s.file ? await upload("images", s.file, s.alt) : undefined;
      heroSlides.push({ variant: s.variant, ...(image ? { image } : {}), tag: s.tag, headline: s.headline, description: s.description, alt: s.alt });
    }

    // Certification cards
    const certItems = [];
    for (const c of CERTS) {
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
        testimonials: [
          { quote: "TheAgileNest's PMP training was a game-changer. Their practical approach made complex concepts easy to grasp and apply immediately.", author: "Sarah Johnson", role: "Senior Project Manager", company: "Infrastructure Global" },
          { quote: "Working with their consultants on our PMO recovery saved us months of delays. Their expertise in cost estimation is unparalleled.", author: "Mark Thompson", role: "Operations Director", company: "BuildRight NZ" },
          { quote: "The most professional training experience I've had in 15 years. They don't just teach the book; they teach the reality of the industry.", author: "David Chen", role: "Construction Lead", company: "Urban Developers" },
        ],
        reviewsEyebrow: "Google Reviews",
        reviewsHeading: "What Our Students Say",
        reviewsRating: "5.0",
        reviewsGoogleUrl: "https://www.google.com/maps/place/AgileNest/data=!4m2!3m1!1s0x0:0xa5b20cdb0955fd78?sa=X&ved=1t:2428&hl=en-NZ&ictx=111",
        ctaHeadingLead: "Ready to Elevate Your",
        ctaHeadingAccent: "Project Strategy?",
        ctaParagraph: "Join over 5,000 professionals who have transformed their careers and organizations with our elite training and consultancy.",
        ctaPrimaryText: "Start Your Journey",
        ctaSecondaryText: "Talk to an Expert",
      } as never,
    });

    return NextResponse.json({ seeded: true, sections: 9 });
  } catch (err) {
    console.error("[seed-home] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
