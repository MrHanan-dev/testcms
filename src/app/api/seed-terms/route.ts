import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

/** Seed the Terms of Service page global. Dev-only, secret-guarded, ?force=1. */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "termsPage" });
    if (Array.isArray(existing?.sections) && existing.sections.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    await payload.updateGlobal({
      slug: "termsPage",
      data: {
        title: "Terms of Service",
        lastUpdated: "June 2026",
        sections: [
          { heading: "Acceptance of Terms", body: "By accessing and using TheAgileNest services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
          { heading: "Services Description", body: "TheAgileNest provides project management training, consulting services, and certification preparation programs. We reserve the right to modify, suspend, or discontinue any service at any time." },
          { heading: "User Responsibilities", body: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use." },
          { heading: "Intellectual Property", body: "All content, materials, and intellectual property on our website and in our courses are owned by TheAgileNest or our licensors. You may not reproduce, distribute, or create derivative works without our written permission." },
          { heading: "Payment Terms", body: "Payment for courses and services is due at the time of enrollment unless otherwise agreed. Refund policies are outlined in our course-specific terms and conditions." },
          { heading: "Limitation of Liability", body: "TheAgileNest shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services." },
          { heading: "Governing Law", body: "These terms shall be governed by and construed in accordance with the laws of New Zealand, without regard to its conflict of law provisions." },
          { heading: "Contact Information", body: "For questions about these Terms of Service, please contact us at contact@theagilenest.com." },
        ],
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-terms] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
