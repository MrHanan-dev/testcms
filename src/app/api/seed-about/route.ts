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

    const uploadImage = async (filename: string, alt: string) => {
      const filePath = join(process.cwd(), "public", "images", filename);
      if (!existsSync(filePath)) return undefined;
      const found = await payload.find({ collection: "media", where: { filename: { equals: filename } }, limit: 1 });
      const media =
        found.docs[0] ??
        (await payload.create({ collection: "media", data: { alt }, filePath }));
      return media.id;
    };

    const founderImage = await uploadImage("founder_amjad.webp", "Engr. Syed Amjad Iqbal, CEO & Certified Trainer");
    const featuresImage = await uploadImage("TheAgileNest_hero_main_1771222013046.png", "TheAgileNest Professional Excellence");

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
          "At TheAgileNest, we donâ€™t just teach project management   we transform professionals into confident, TheAgileNest leaders ready to deliver real results.",
        whyCards: [
          { title: "Real-World Expertise", description: "Learn from certified industry experts with decades of hands on experience in construction, operations, and leadership. We share what truly works   not just theory." },
          { title: "Global Knowledge, Local Focus", description: "Trained at world leading universities like KTH (Sweden) and Massey University (New Zealand), we combine international best practices with local industry insight." },
          { title: "Practical, Impactful Learning", description: "Our training is designed around real projects, real tools, and real challenges   ensuring you can apply your learning immediately." },
          { title: "Personal Mentorship", description: "We guide every learner through their professional growth journey, offering support, mentoring, and career coaching beyond the classroom." },
          { title: "Lifelong Learning Culture", description: "TheAgileNest is more than a training provider   itâ€™s a learning community. We inspire continuous growth, innovation, and excellence." },
        ],
        whyQuote: "TheAgileNest   Where knowledge meets experience, and every project takes flight.",
        evoEyebrow: "Our Evolution",
        evoHeading: "A 17-Year Journey in Project Management",
        evoSubtitle: "From PMBOK 3rd to 8th Edition. Embracing Passion, Purpose, and Technology.",
        featuresEyebrow: "The Advantage",
        featuresTitlePrefix: "Why choose",
        featuresHighlightedName: "TheAgileNest",
        featuresTitleSuffix: "Certification Journey",
        featuresDescription: "At TheAgileNest, we deliver one of New Zealand’s, Australia’s and Asia's most comprehensive and industry-ready certification training programs, designed to help you pass on your first attempt and excel in real-world project environments.",
        ...(featuresImage ? { featuresImage } : {}),
        featuresImageAlt: "TheAgileNest Professional Excellence",
        featuresBadgeValue: "Proven",
        featuresBadgeLabel: "Exam Success\nOn First Attempt",
        featuresCards: [
          { title: "Global Accreditation", description: "Our programs follow PMI® international standards, ensuring your certification holds weight in any market, from Auckland to London." },
          { title: "Expert Practitioners", description: "Learn from instructors with 17+ years of real world project leadership experience across New Zealand and abroad." },
          { title: "Industrial Context", description: "Go beyond theory. Our training is rooted in actual industrial situations, providing practical solutions to project challenges." },
          { title: "High Success Rate", description: "Our students consistently achieve an exceptional exam success rate on their first attempt through our focused mentorship." },
        ],
        quoteCards: [
          { quote: "Pass Your Certification Exam on Your First Try!", subtitle: "Our expert coaches provide interactive lessons, exam-focused strategies, and practical exercises to ensure you succeed the first time." },
          { quote: "First-Attempt Certification Success, Achieved!", subtitle: "Learn from highly qualified instructors with hands on practice and proven exam strategies designed for real results." },
          { quote: "Master Project Management with Expert Guidance", subtitle: "Achieve exam success on your first attempt through engaging training, targeted study plans, and practical exercises led by certified professionals." },
          { quote: "Your Path to First-Time Global Certification", subtitle: "Benefit from experienced coaches, interactive training sessions, and exam-focused techniques to confidently pass your certification exam." },
          { quote: "Exam Success Starts Here", subtitle: "Gain the skills, strategies, and confidence needed to pass your exam on your first try with our expert led, hands on training." },
        ],
        faqTitle: "Answers to Fuel Your",
        faqSubtitle: "Project Journey",
        faqDescription: "Clear answers to common questions about our consultancy and training services.",
        faqContactPrompt: "Have a specific question or corporate requirement?",
        faqContactLinkText: "Contact us today",
        faqItems: [
          { question: "1. What services does The Agile Nest provide?", answer: "We provide project management consultancy, cost advisory, quantity surveying, PMO support, project controls, and professional training solutions designed to improve delivery performance and build capability." },
          { question: "2. Do you provide PMP® training?", answer: "Yes. We deliver practical PMP® preparation programs supported by real-world project examples, structured learning, mock exams, and expert guidance to help participants succeed with confidence." },
          { question: "3. We are a corporate organisation and want PMP® training at our site. Is this possible?", answer: "Absolutely. We deliver customised on-site corporate PMP® and project management training programs across New Zealand, Australia, the USA, and the UAE, subject to scheduling and demand. We can tailor delivery to your team’s goals and availability." },
          { question: "4. Who do you work with?", answer: "We work with corporates, government agencies, contractors, developers, consultants, and professionals across construction, infrastructure, commercial, energy, and technology sectors." },
          { question: "5. Can you help delayed or underperforming projects?", answer: "Yes. We support organisations with recovery planning, scheduling, governance, reporting, commercial controls, and practical strategies to bring projects back on track." },
          { question: "6. Do you offer online and international services?", answer: "Yes. We provide online training, remote consultancy, and virtual project support for clients in New Zealand and internationally, using secure digital collaboration tools." },
          { question: "7. Why choose The Agile Nest?", answer: "Clients choose us for our real-world experience, strong commercial expertise, practical training approach, and focus on measurable outcomes. We don’t just provide advice—we help deliver results." },
        ],
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-about] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}

