import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RenderBlocks } from "@/components/blocks/RenderBlocks";
import { getPageBySlug } from "@/lib/payload";

/**
 * Preview/renderer for Payload-managed pages, at /p/<slug>.
 *
 * This is intentionally on a separate path so we can build and review the
 * page-builder without touching the existing live routes (/about, /training, …).
 * When a real page is migrated into the CMS, its route is switched to render
 * from here. Statically generated with ISR.
 */
export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return { title: "Page Not Found | TheAgileNest" };
  const p = page as unknown as { title: string; metaTitle?: string; metaDescription?: string };
  return {
    title: p.metaTitle || p.title,
    ...(p.metaDescription ? { description: p.metaDescription } : {}),
  };
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) notFound();
  const p = page as unknown as { layout?: { blockType: string; [key: string]: unknown }[] };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <RenderBlocks blocks={p.layout} />
      </main>
      <Footer />
    </div>
  );
}
