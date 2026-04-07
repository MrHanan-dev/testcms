import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Tag, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts.tsx';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found | TheAgileNest" };
    return {
        title: post.title,
        description: post.abstract,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            <main className="pt-28 pb-24">
                <article className="container-custom max-w-3xl">

                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-10 group"
                    >
                        <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
                        All Posts
                    </Link>

                    {/* Meta */}
                    <div className="flex items-center gap-3 flex-wrap mb-5">
                        <span className="px-2.5 py-1 bg-primary/8 text-primary text-xs font-black rounded-md inline-flex items-center gap-1">
                            <Tag size={11} className="text-accent" />
                            {post!.category}
                        </span>
                        <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                            <Calendar size={12} />{post!.date}
                        </span>
                        <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                            <User size={12} />{post!.author}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-5">
                        {post!.title}
                    </h1>

                    {/* Abstract */}
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 border-l-4 border-accent pl-5">
                        {post!.abstract}
                    </p>

                    {/* Hero Image */}
                    <div className="relative w-full h-[360px] md:h-[440px] rounded-2xl overflow-hidden mb-12 bg-slate-100">
                        <Image
                            src={post!.imageUrl}
                            alt={post!.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none prose-slate prose-headings:text-primary prose-headings:font-black prose-a:text-accent hover:prose-a:text-primary prose-strong:text-primary">
                        {post!.content ?? <p>Full article content coming soon.</p>}
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
