import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGalleryBySlug } from "@/lib/cmsCollections";
import { resolveMediaUrl } from "@/lib/resolveMediaUrl";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gallery = await getGalleryBySlug(slug);
  if (!gallery) return { title: "Gallery Not Found | TheAgileNest" };
  return {
    title: `${gallery.title as string} | TheAgileNest Gallery`,
    description: (gallery.description as string) || undefined,
  };
}

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params;
  const gallery = await getGalleryBySlug(slug);
  if (!gallery) notFound();

  const images = (gallery.images as { image?: { url?: string }; caption?: string; alt?: string }[]) ?? [];
  const layout = (gallery.layout as string) ?? "grid";
  const cols =
    gallery.columns === "2"
      ? "md:grid-cols-2"
      : gallery.columns === "4"
        ? "md:grid-cols-4"
        : gallery.columns === "5"
          ? "md:grid-cols-5"
          : "md:grid-cols-3";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main className="pt-28 pb-24">
        <div className="container-custom">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">{gallery.title as string}</h1>
            {gallery.description && (
              <p className="text-slate-500 text-lg max-w-3xl">{gallery.description as string}</p>
            )}
          </div>
          <div className={layout === "masonry" ? "columns-2 md:columns-3 gap-4" : `grid grid-cols-1 ${cols} gap-4`}>
            {images.map((item, i) => {
              const url = resolveMediaUrl(
                typeof item.image === "object" ? item.image?.url : undefined,
              );
              if (!url) return null;
              return (
                <figure
                  key={i}
                  className={layout === "masonry" ? "mb-4 break-inside-avoid" : ""}
                >
                  <Image
                    src={url}
                    alt={item.alt || item.caption || "Gallery image"}
                    width={600}
                    height={400}
                    className="w-full rounded-2xl object-cover"
                    unoptimized={url.includes("/api/media/")}
                  />
                  {item.caption && gallery.showCaptions !== false && (
                    <figcaption className="text-sm text-slate-500 mt-2">{item.caption}</figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
