import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/** Seed the Privacy Policy page global. Dev-only, secret-guarded, ?force=1. */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "privacyPage" });
    if (Array.isArray(existing?.sections) && existing.sections.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    await payload.updateGlobal({
      slug: "privacyPage",
      data: {
        title: "Privacy Policy",
        lastUpdated: "June 2026",
        sections: [
          { heading: "Information We Collect", body: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information." },
          { heading: "How We Use Your Information", body: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions." },
          { heading: "Information Sharing", body: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law." },
          { heading: "Data Security", body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
          { heading: "Cookies and Tracking", body: "We use cookies and similar tracking technologies to collect information about your browsing activities and to personalize your experience on our website." },
          { heading: "Your Rights", body: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data." },
          { heading: "Contact Us", body: "If you have any questions about this Privacy Policy, please contact us at contact@theagilenest.com." },
        ],
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-privacy] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
