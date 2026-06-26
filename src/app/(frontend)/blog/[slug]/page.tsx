import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Tag, Calendar, User, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";
import JsonLdArticle from "@/components/JsonLdArticle";
import JsonLdFaq from "@/components/JsonLdFaq";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPostBySlug } from "@/lib/payload";
import { allBlogSlugs, resolveBlogPost } from "@/lib/resolveBlogPost";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cmsDoc = await getPostBySlug(slug);
  const post = resolveBlogPost(cmsDoc, slug);
  if (!post) return { title: "Post Not Found | TheAgileNest" };

  // Use CMS SEO fields if available, fall back to post title/abstract
  const title = post.metaTitle || `${post.title} | TheAgileNest Blog`;
  const description = post.metaDescription || post.abstract;
  const ogImage = post.ogImage || post.imageUrl;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://theagilenest.com/blog/${post.slug}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
    robots: post.noIndex ? { index: false, follow: true } : undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const cmsDoc = await getPostBySlug(slug);
  const post = resolveBlogPost(cmsDoc, slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />

      <JsonLdArticle
        title={post.title}
        description={post.abstract}
        url={`https://theagilenest.com/blog/${post.slug}`}
        imageUrl={post.imageUrl}
        datePublished={post.date}
        authorName={post.author}
        category={post.category}
      />

      {post.faqItems.length > 0 && <JsonLdFaq items={post.faqItems} />}

      <main className="pt-28 pb-24">
        <article className="container-custom max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            All Posts
          </Link>

          <div className="flex items-center gap-3 flex-wrap mb-5">
            <span className="px-2.5 py-1 bg-primary/8 text-primary text-xs font-black rounded-md inline-flex items-center gap-1">
              <Tag size={11} className="text-accent" />
              {post.category}
            </span>
            <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
              <User size={12} />
              {post.author}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-5">{post.title}</h1>

          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 border-l-4 border-accent pl-5">
            {post.abstract}
          </p>

          <div className="relative w-full h-[360px] md:h-[440px] rounded-2xl overflow-hidden mb-12 bg-slate-100">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              unoptimized={post.imageUrl.startsWith("/api/")}
            />
          </div>

          <div className="prose prose-lg max-w-none prose-slate prose-headings:text-primary prose-headings:font-black prose-a:text-accent hover:prose-a:text-primary prose-strong:text-primary">
            {post.bodyRich ? (
              <RichText data={post.bodyRich as never} />
            ) : (
              post.content ?? <p>Full article content coming soon.</p>
            )}
          </div>

          {post.faqItems.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-100">
              <h2 className="text-2xl md:text-3xl font-black text-primary mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqItems.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-primary hover:text-accent transition-colors">
                      <span className="text-[15px] leading-snug">{faq.question}</span>
                      <ChevronDown size={18} className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-5 text-[15px] text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
