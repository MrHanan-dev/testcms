"use client";

import Link from "next/link";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Check, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import { resolveMediaUrl } from "@/lib/resolveMediaUrl";
import DynamicForm from "@/components/cms/DynamicForm";

/**
 * Renders a Payload page `layout` array into on-brand React sections. Each
 * block type maps to markup using the site's existing design tokens/utilities
 * (container-custom, label-tag, btn-primary, primary/accent colours).
 */
type Block = { blockType: string; [key: string]: unknown };
type MediaField = { url?: string; alt?: string } | null;

const isStr = (v: unknown): v is string => typeof v === "string" && v.length > 0;

/** Resolve media URL with fallback handling for Vercel deployment */
const getImageUrl = (media: MediaField | undefined, fallback?: string): string | undefined => {
  if (!media?.url) return fallback;
  return resolveMediaUrl(media.url, fallback);
};

function HeroBlock({ block }: { block: Block }) {
  return (
    <section className="pt-40 pb-20 bg-[#0b3b5c] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {block.eyebrow ? (
            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-xs mb-4 block">
              {String(block.eyebrow)}
            </span>
          ) : null}
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">{String(block.heading)}</h1>
          {block.subheading ? (
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
              {String(block.subheading)}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function RichTextSection({ block }: { block: Block }) {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-3xl">
        <div className="prose prose-lg max-w-none prose-slate prose-headings:text-primary prose-headings:font-black prose-a:text-accent hover:prose-a:text-primary prose-strong:text-primary">
          <RichText data={block.content as SerializedEditorState} />
        </div>
      </div>
    </section>
  );
}

function FeatureCardsSection({ block }: { block: Block }) {
  const cards = (block.cards as { id?: string; title: string; description: string }[]) ?? [];
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          {block.eyebrow ? <span className="label-tag mx-auto">{String(block.eyebrow)}</span> : null}
          <h2 className="text-4xl md:text-5xl font-black text-primary">{String(block.heading)}</h2>
          {block.intro ? (
            <p className="text-slate-500 text-xl font-medium max-w-3xl mx-auto">{String(block.intro)}</p>
          ) : null}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={card.id ?? i}
              className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all h-full border border-slate-100"
            >
              <h4 className="text-xl font-black text-primary mb-4">{card.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ block }: { block: Block }) {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">{String(block.heading)}</h2>
        <Link href={String(block.buttonHref)} className="btn-primary">
          {String(block.buttonLabel)}
        </Link>
      </div>
    </section>
  );
}

function ImageSection({ block }: { block: Block }) {
  const image = block.image as MediaField;
  const imageUrl = getImageUrl(image);
  if (!imageUrl) return null;
  const sizeClass = block.size === "small" ? "max-w-lg" : block.size === "full" ? "max-w-full" : "max-w-3xl";
  
  const img = (
    <div className={`mx-auto ${sizeClass}`}>
      <Image
        src={imageUrl}
        alt={String(block.alt || image?.alt || "")}
        width={1200}
        height={800}
        className="rounded-3xl shadow-lg w-full h-auto"
        unoptimized={imageUrl.includes("/api/media/")}
      />
      {isStr(block.caption) && (
        <p className="text-center text-slate-500 mt-4 text-sm">{String(block.caption)}</p>
      )}
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {block.link ? <Link href={String(block.link)}>{img}</Link> : img}
      </div>
    </section>
  );
}

function TestimonialsSection({ block }: { block: Block }) {
  const testimonials = (block.testimonials as { id?: string; quote: string; author: string; role?: string; company?: string; photo?: MediaField; rating?: number }[]) ?? [];
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          {isStr(block.eyebrow) && <span className="label-tag mx-auto">{String(block.eyebrow)}</span>}
          <h2 className="text-4xl md:text-5xl font-black text-primary">{String(block.heading)}</h2>
          {isStr(block.subheading) && <p className="text-slate-500 text-xl max-w-3xl mx-auto">{String(block.subheading)}</p>}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.id ?? i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              {t.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="fill-accent text-accent" />)}
                </div>
              )}
              <p className="text-slate-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                {getImageUrl(t.photo) && (
                  <Image src={getImageUrl(t.photo)!} alt={t.author} width={48} height={48} className="w-12 h-12 rounded-full object-cover" unoptimized={getImageUrl(t.photo)!.includes("/api/media/")} />
                )}
                <div>
                  <p className="font-bold text-primary">{t.author}</p>
                  {(t.role || t.company) && (
                    <p className="text-slate-500 text-sm">{[t.role, t.company].filter(Boolean).join(", ")}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ block }: { block: Block }) {
  const items = (block.items as { id?: string; question: string; answer: string }[]) ?? [];
  
  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          {isStr(block.eyebrow) && <span className="label-tag mx-auto">{String(block.eyebrow)}</span>}
          <h2 className="text-4xl md:text-5xl font-black text-primary">{String(block.heading)}</h2>
          {isStr(block.description) && <p className="text-slate-500 text-xl">{String(block.description)}</p>}
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <FAQItem key={item.id ?? i} question={item.question} answer={item.answer} />
          ))}
        </div>
        {isStr(block.contactPrompt) && (
          <div className="text-center mt-12">
            <p className="text-slate-600">
              {String(block.contactPrompt)}{" "}
              <Link href="#contact" className="text-accent font-bold hover:underline">
                {String(block.contactLinkText || "Contact us")}
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-primary">{question}</span>
        <ChevronDown size={20} className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="p-6 pt-0 text-slate-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

function StatsSection({ block }: { block: Block }) {
  const stats = (block.stats as { id?: string; value: string; suffix?: string; label: string }[]) ?? [];
  const bgClass = block.style === "light" ? "bg-slate-50" : block.style === "accent" ? "bg-accent" : "bg-primary";
  const textClass = block.style === "light" ? "text-primary" : "text-white";
  
  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container-custom">
        {(isStr(block.eyebrow) || isStr(block.heading)) && (
          <div className="text-center mb-12">
            {isStr(block.eyebrow) && <span className={`${textClass} opacity-60 text-sm uppercase tracking-widest`}>{String(block.eyebrow)}</span>}
            {isStr(block.heading) && <h2 className={`text-3xl md:text-4xl font-black ${textClass}`}>{String(block.heading)}</h2>}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.id ?? i} className="text-center">
              <p className={`text-5xl md:text-6xl font-black ${block.style === "light" ? "text-accent" : "text-accent"}`}>
                {stat.value}{stat.suffix}
              </p>
              <p className={`${textClass} opacity-80 font-medium mt-2`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection({ block }: { block: Block }) {
  const members = (block.members as { id?: string; name: string; position: string; photo?: MediaField; bio?: string }[]) ?? [];
  
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          {isStr(block.eyebrow) && <span className="label-tag mx-auto">{String(block.eyebrow)}</span>}
          <h2 className="text-4xl md:text-5xl font-black text-primary">{String(block.heading)}</h2>
          {isStr(block.description) && <p className="text-slate-500 text-xl max-w-3xl mx-auto">{String(block.description)}</p>}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <div key={member.id ?? i} className="text-center">
              {getImageUrl(member.photo) && (
                <Image src={getImageUrl(member.photo)!} alt={member.name} width={200} height={200} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" unoptimized={getImageUrl(member.photo)!.includes("/api/media/")} />
              )}
              <h4 className="font-bold text-xl text-primary">{member.name}</h4>
              <p className="text-accent font-medium">{member.position}</p>
              {member.bio && <p className="text-slate-500 mt-2 text-sm">{member.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection({ block }: { block: Block }) {
  const formDoc = block.formDoc as {
    id?: string;
    title?: string;
    fields?: unknown[];
    submitButtonText?: string;
    successTitle?: string;
    successMessage?: string;
    confirmationMessage?: string;
  } | undefined;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary">{String(block.heading)}</h2>
          {isStr(block.description) && <p className="text-slate-500 mt-4">{String(block.description)}</p>}
        </div>
        {formDoc?.id ? (
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <DynamicForm
              formId={String(formDoc.id)}
              formDoc={{
                id: String(formDoc.id),
                title: formDoc.title,
                fields: formDoc.fields as never,
                submitButtonText: formDoc.submitButtonText,
                successTitle: formDoc.successTitle ?? String(block.successTitle ?? "Message Sent!"),
                successMessage:
                  formDoc.confirmationMessage ??
                  formDoc.successMessage ??
                  String(block.successMessage ?? "Thank you for reaching out."),
              }}
              submitButtonText={String(block.submitButtonText || "Send Message")}
              successTitle={String(block.successTitle || "Message Sent!")}
              successMessage={String(block.successMessage || "Thank you for reaching out.")}
            />
          </div>
        ) : (
          <form className="bg-white p-8 rounded-3xl shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none" required />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none" required />
            </div>
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 outline-none resize-none" required />
            <button type="submit" className="w-full btn-primary py-4">{String(block.submitButtonText || "Send Message")}</button>
          </form>
        )}
      </div>
    </section>
  );
}

function GallerySection({ block }: { block: Block }) {
  const images = (block.images as { id?: string; image: MediaField; caption?: string }[]) ?? [];
  const cols = block.layout === "masonry" ? "columns-2 md:columns-3 gap-4" : "grid grid-cols-2 md:grid-cols-3 gap-4";
  
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {isStr(block.heading) && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary">{String(block.heading)}</h2>
            {isStr(block.description) && <p className="text-slate-500 mt-4">{String(block.description)}</p>}
          </div>
        )}
        <div className={cols}>
          {images.map((img, i) => {
            const imgUrl = getImageUrl(img.image);
            return imgUrl && (
              <div key={img.id ?? i} className={block.layout === "masonry" ? "mb-4 break-inside-avoid" : ""}>
                <Image src={imgUrl} alt={img.caption || ""} width={400} height={300} className="w-full rounded-2xl" unoptimized={imgUrl.includes("/api/media/")} />
                {img.caption && <p className="text-slate-500 text-sm mt-2">{img.caption}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BannerSection({ block }: { block: Block }) {
  const bgImage = block.backgroundImage as MediaField;
  const styleClasses: Record<string, string> = {
    primary: "bg-primary text-white",
    accent: "bg-accent text-primary",
    light: "bg-slate-100 text-primary",
    gradient: "bg-gradient-to-r from-primary to-[#1479be] text-white",
  };
  
  const bgImageUrl = getImageUrl(bgImage);
  return (
    <section className={`py-20 relative overflow-hidden ${styleClasses[String(block.style)] || styleClasses.primary}`}>
      {bgImageUrl && (
        <Image src={bgImageUrl} alt="" fill className="object-cover opacity-20" unoptimized={bgImageUrl.includes("/api/media/")} />
      )}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-4">{String(block.heading)}</h2>
        {isStr(block.text) && <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">{String(block.text)}</p>}
        <div className="flex flex-wrap gap-4 justify-center">
          {isStr(block.buttonText) && (
            <Link href={String(block.buttonUrl || "#")} className="btn-primary bg-accent text-primary hover:bg-white">
              {String(block.buttonText)}
            </Link>
          )}
          {isStr(block.secondaryButtonText) && (
            <Link href={String(block.secondaryButtonUrl || "#")} className="btn-primary bg-white/10 border border-white/30 hover:bg-white/20">
              {String(block.secondaryButtonText)}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function ServicesGridSection({ block }: { block: Block }) {
  const services = (block.services as { id?: string; title: string; description: string; image?: MediaField; linkText?: string; linkUrl?: string }[]) ?? [];
  const cols = block.columns === "2" ? "md:grid-cols-2" : block.columns === "4" ? "md:grid-cols-4" : "md:grid-cols-3";
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          {isStr(block.eyebrow) && <span className="label-tag mx-auto">{String(block.eyebrow)}</span>}
          <h2 className="text-4xl md:text-5xl font-black text-primary">{String(block.heading)}</h2>
          {isStr(block.description) && <p className="text-slate-500 text-xl max-w-3xl mx-auto">{String(block.description)}</p>}
        </div>
        <div className={`grid ${cols} gap-8`}>
          {services.map((service, i) => {
            const serviceImgUrl = getImageUrl(service.image);
            return (
            <div key={service.id ?? i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              {serviceImgUrl && (
                <Image src={serviceImgUrl} alt={service.title} width={400} height={250} className="w-full h-48 object-cover" unoptimized={serviceImgUrl.includes("/api/media/")} />
              )}
              <div className="p-8">
                <h4 className="text-xl font-black text-primary mb-3">{service.title}</h4>
                <p className="text-slate-500 mb-4">{service.description}</p>
                {service.linkUrl && (
                  <Link href={service.linkUrl} className="text-accent font-bold hover:underline">
                    {service.linkText || "Learn More"} →
                  </Link>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ block }: { block: Block }) {
  const plans = (block.plans as { id?: string; name: string; price: string; period?: string; description?: string; featured?: boolean; features?: { text: string }[]; buttonText?: string; buttonUrl?: string }[]) ?? [];
  
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          {isStr(block.eyebrow) && <span className="label-tag mx-auto">{String(block.eyebrow)}</span>}
          <h2 className="text-4xl md:text-5xl font-black text-primary">{String(block.heading)}</h2>
          {isStr(block.description) && <p className="text-slate-500 text-xl max-w-3xl mx-auto">{String(block.description)}</p>}
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={plan.id ?? i} className={`rounded-3xl p-8 ${plan.featured ? "bg-primary text-white ring-4 ring-accent scale-105" : "bg-slate-50"}`}>
              <h4 className={`text-xl font-black mb-2 ${plan.featured ? "text-white" : "text-primary"}`}>{plan.name}</h4>
              <div className="mb-4">
                <span className={`text-4xl font-black ${plan.featured ? "text-accent" : "text-primary"}`}>{plan.price}</span>
                {plan.period && <span className="opacity-60 ml-1">{plan.period}</span>}
              </div>
              {plan.description && <p className={`mb-6 ${plan.featured ? "text-white/80" : "text-slate-500"}`}>{plan.description}</p>}
              {plan.features && (
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={16} className={plan.featured ? "text-accent" : "text-accent"} />
                      <span className={plan.featured ? "text-white/90" : "text-slate-600"}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link 
                href={plan.buttonUrl || "#contact"} 
                className={`block text-center py-3 rounded-xl font-bold ${plan.featured ? "bg-accent text-primary" : "bg-primary text-white"}`}
              >
                {plan.buttonText || "Get Started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const RENDERERS: Record<string, (props: { block: Block }) => React.ReactElement | null> = {
  hero: HeroBlock,
  richText: RichTextSection,
  featureCards: FeatureCardsSection,
  cta: CTASection,
  image: ImageSection,
  testimonials: TestimonialsSection,
  faq: FAQSection,
  stats: StatsSection,
  team: TeamSection,
  contactForm: ContactFormSection,
  gallery: GallerySection,
  banner: BannerSection,
  servicesGrid: ServicesGridSection,
  pricing: PricingSection,
};

export function RenderBlocks({ blocks }: { blocks?: Block[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((block, i) => {
        const Renderer = RENDERERS[block.blockType];
        if (!Renderer) return null;
        return <Renderer key={(block.id as string) ?? `${block.blockType}-${i}`} block={block} />;
      })}
    </>
  );
}
