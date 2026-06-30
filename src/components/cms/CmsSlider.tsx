"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { resolveMediaUrl } from "@/lib/resolveMediaUrl";

type Slide = {
  id?: string;
  headline?: string;
  subheadline?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonUrl?: string;
  secondButtonText?: string;
  secondButtonUrl?: string;
};

type Props = {
  slides: Slide[];
  autoplay?: boolean;
  autoplaySpeed?: number;
};

export default function CmsSlider({ slides, autoplay = true, autoplaySpeed = 5000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoplaySpeed);
    return () => window.clearInterval(timer);
  }, [autoplay, autoplaySpeed, slides.length]);

  if (!slides.length) return null;
  const slide = slides[index];
  const img = slide.imageUrl ? resolveMediaUrl(slide.imageUrl) : undefined;

  return (
    <section className="relative min-h-[70vh] bg-[#0b3b5c] text-white overflow-hidden">
      {img && (
        <Image
          src={img}
          alt={slide.headline ?? "Hero slide"}
          fill
          className="object-cover opacity-40"
          priority
          unoptimized={img.includes("/api/media/")}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b5c]/90 to-[#0b3b5c]/40" />
      <div className="container-custom relative z-10 min-h-[70vh] flex items-center py-24">
        <div className="max-w-3xl space-y-6">
          {slide.subheadline && (
            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-xs">{slide.subheadline}</span>
          )}
          {slide.headline && <h1 className="text-4xl md:text-6xl font-black tracking-tight">{slide.headline}</h1>}
          {slide.description && <p className="text-lg md:text-xl text-blue-100 max-w-2xl">{slide.description}</p>}
          <div className="flex flex-wrap gap-4">
            {slide.buttonText && (
              <Link href={slide.buttonUrl ?? "#contact"} className="btn-primary bg-accent text-primary hover:bg-white">
                {slide.buttonText}
              </Link>
            )}
            {slide.secondButtonText && (
              <Link href={slide.secondButtonUrl ?? "#contact"} className="btn-primary bg-white/10 border border-white/30">
                {slide.secondButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
          >
            <ChevronRight />
          </button>
        </>
      )}
    </section>
  );
}
