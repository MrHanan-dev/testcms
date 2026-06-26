import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formId, data } = body as { formId?: string; data?: Record<string, unknown> };

    if (!formId || !data || typeof data !== "object") {
      return NextResponse.json({ error: "formId and data are required" }, { status: 400 });
    }

    const payload = await getPayload({ config });
    const form = await payload.findByID({ collection: "forms", id: formId, depth: 0 }).catch(() => null);

    if (!form || form.status !== "active") {
      return NextResponse.json({ error: "Form not found or inactive" }, { status: 404 });
    }

    const submission = await payload.create({
      collection: "form-submissions",
      data: {
        form: formId,
        data: Object.fromEntries(
          Object.entries(data).map(([k, v]) => [k, typeof v === "string" ? v : String(v ?? "")]),
        ),
        status: "new",
      },
      overrideAccess: true,
    });

    // Optional lead creation for contact-style forms
    const email = typeof data.email === "string" ? data.email : undefined;
    const name = typeof data.name === "string" ? data.name : typeof data.fullName === "string" ? data.fullName : "Website Visitor";
    const message = typeof data.message === "string" ? data.message : JSON.stringify(data);

    if (email) {
      void payload
        .create({
          collection: "leads",
          data: {
            name,
            email,
            message: `[${form.title}] ${message}`,
            formType: String(form.slug ?? "cms-form"),
            status: "new",
            source: "website",
          },
          overrideAccess: true,
        })
        .catch(() => undefined);
    }

    return NextResponse.json({
      success: true,
      id: submission.id,
      message:
        (form as { confirmationMessage?: string }).confirmationMessage ??
        "Thank you! Your submission has been received.",
    });
  } catch (error) {
    console.error("[form-submit]", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
