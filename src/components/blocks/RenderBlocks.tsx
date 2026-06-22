import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

/**
 * Renders a Payload page `layout` array into on-brand React sections. Each
 * block type maps to markup using the site's existing design tokens/utilities
 * (container-custom, label-tag, btn-primary, primary/accent colours).
 */
type Block = { blockType: string; [key: string]: unknown };

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

const RENDERERS: Record<string, (props: { block: Block }) => React.ReactElement> = {
  hero: HeroBlock,
  richText: RichTextSection,
  featureCards: FeatureCardsSection,
  cta: CTASection,
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
