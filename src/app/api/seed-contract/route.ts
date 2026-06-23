import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/** Seed the Contract Management page global. Dev-only, secret-guarded, ?force=1. */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "contractManagementPage" });
    if (Array.isArray(existing?.serviceCards) && existing.serviceCards.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    await payload.updateGlobal({
      slug: "contractManagementPage",
      data: {
        heroTitle: "Construction Contracts",
        heroDescription: "Expert contract management, formulation, and dispute resolution. We safeguard your commercial interests through rigorous administration and strategic advisory.",
        heroBreadcrumb: "Our Services",
        introEyebrow: "Commercial Protection",
        introHeadingLine1: "Securing Your",
        introHeadingLine2: "Agreements",
        introParagraph: "Robust contracts are the foundation of successful projects. Our experts ensure your agreements are clear, equitable, and structured to mitigate unforeseen risks.",
        serviceCards: [
          { title: "Contract Formulation", desc: "Drafting, reviewing, and negotiating robust contracts tailored to your specific project needs and risks." },
          { title: "Risk Mitigation", desc: "Identifying potential contractual loopholes and structuring agreements to protect your commercial interests." },
          { title: "Dispute Resolution", desc: "Expert guidance in mediation, arbitration, and resolving claims efficiently to avoid costly litigation." },
          { title: "Claims Management", desc: "Preparation, defense, and negotiation of extension of time (EOT) and disruption claims." },
          { title: "Advisory Services", desc: "Ongoing strategic advice on contract administration and compliance throughout the project lifecycle." },
          { title: "Contract Audits", desc: "Independent reviews to ensure obligations are being met and commercial performance is maximized." },
        ],
        outcomeBadgeHeading: "Legal Clarity",
        outcomeBadgeText: "Providing robust frameworks to prevent disputes before they arise.",
        outcomeHeading: "Expert Contract Administration",
        outcomeParagraph: "We support both contractors and clients with rigorous contract management to ensure obligations are met and rights are protected throughout the project journey.",
        outcomeChecklist: [
          { text: "Clear allocation of risk" },
          { text: "Streamlined variation processes" },
          { text: "Compliance monitoring" },
          { text: "Defensible claims strategy" },
        ],
        outcomeButtonText: "Enquire Now",
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-contract] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
