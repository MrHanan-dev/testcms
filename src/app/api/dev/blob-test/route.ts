import { del, head, put } from "@vercel/blob";
import { NextResponse } from "next/server";

/**
 * Dev-only Vercel Blob connectivity test.
 * GET /api/dev/blob-test — uploads a tiny file, verifies it, then deletes it.
 */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Disabled in production" }, { status: 403 });
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json(
      {
        ok: false,
        step: "env",
        message:
          "BLOB_READ_WRITE_TOKEN is missing. In Vercel: Storage → AgileNest → connect testcms, then run `vercel env pull .env.local` or copy the token into .env.local and restart dev.",
      },
      { status: 503 },
    );
  }

  const pathname = `dev-tests/blob-test-${Date.now()}.txt`;
  const payload = `blob-test-${new Date().toISOString()}`;

  try {
    const uploaded = await put(pathname, payload, {
      access: "public",
      token,
      addRandomSuffix: false,
    });

    const meta = await head(uploaded.url, { token });
    await del(uploaded.url, { token });

    return NextResponse.json({
      ok: true,
      message: "Vercel Blob upload, read, and delete succeeded.",
      uploadedUrl: uploaded.url,
      size: meta.size,
      contentType: meta.contentType,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        step: "blob",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
