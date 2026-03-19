import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Tag, ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts.tsx';

export const metadata: Metadata = {
    title: "Blog & Resources | TotalPMP",
    description: "Latest insights, case studies, and resources on project management, cost estimation, and TotalPMP transformation.",
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            <main className="pt-28 pb-24">
                <div className="container-custom">

                    {/* Simple page heading */}
                    <div className="mb-14 border-b border-slate-100 pb-10">
                        <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[11px] mb-3 block">TotalPMP</span>
                        <h1 className="text-4xl md:text-5xl font-black text-primary mb-3">Blog & Resources</h1>
                        <p className="text-slate-500 text-lg font-medium max-w-xl">
                            Insights on project management, certifications, and industry trends.
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col group-hover:-translate-y-1">
                                    {/* Image */}
                                    <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2.5 py-1 bg-white/95 text-primary text-xs font-black rounded-md shadow-sm flex items-center gap-1">
                                                <Tag size={11} className="text-accent" />
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h2 className="text-lg font-black text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-5 flex-grow line-clamp-3">
                                            {post.abstract}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                                                <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                                                <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                                            </div>
                                            <ArrowRight size={15} className="text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
