import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/**
 * One-time seed for the Consulting page global with the page's CURRENT content.
 * Dev-only, secret-guarded, idempotent (?force=1).
 * /api/seed-consulting?secret=<PAYLOAD_SECRET>[&force=1]
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
    const existing = await payload.findGlobal({ slug: "consultingPage" });
    if (Array.isArray(existing?.serviceCards) && existing.serviceCards.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    await payload.updateGlobal({
      slug: "consultingPage",
      data: {
        heroTitle: "Consulting",
        heroDescription:
          "Improving client project management maturity through consulting to create appropriate structure around project delivery, governance, process and tools.",
        heroBreadcrumb: "Our Services",
        introEyebrow: "Project Maturity",
        introHeadingLine1: "Creating Calm Across",
        introHeadingLine2: "Your Projects",
        introParagraph:
          "No matter the breadth and complexity, we help create the momentum you need to move your organisation forward.",
        serviceCards: [
          { title: "Business Analysis", desc: "Bridging the gap between business needs and project delivery through stakeholder engagement and requirements engineering." },
          { title: "Quality Assurance & Testing", desc: "Independent validation of project outputs to ensure they meet quality standards and user requirements." },
          { title: "Post Implementation Review", desc: "External, independent PIRs to capture lessons learned and validate that business cases were actually achieved." },
          { title: "Governance Frameworks", desc: "Designing and implementing robust decision-making models to de-risk portfolios and satisfy audit requirements." },
        ],
        outcomeBadgeHeading: "Strategic Value",
        outcomeBadgeText: "We bridge the gap between technical delivery and executive expectations.",
        outcomeHeading: "Delivering Exceptional Results",
        outcomeParagraph:
          "Our consulting services are designed to address the root causes of project failure, ensuring your organisation’s project management maturity grows with every initiative.",
        outcomeChecklist: [
          { text: "Objective, independent reviews" },
          { text: "Tailored governance frameworks" },
          { text: "On-demand specialized talent" },
          { text: "Clear roadmap for maturity" },
        ],
        outcomeButtonText: "Discuss Your Roadmap",
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-consulting] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
