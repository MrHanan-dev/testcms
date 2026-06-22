"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Tag, ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts.tsx';

const categories = ["All", "Project Management", "PMP Certification", "Construction Cost Estimation", "PMO & Governance"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            <main className="pt-28 pb-24">
                <div className="container-custom">

                    {/* Page heading */}
                    <div className="mb-10 border-b border-slate-100 pb-10">
                        <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[11px] mb-3 block">TheAgileNest</span>
                        <h1 className="text-4xl md:text-5xl font-black text-primary mb-3">Blog & Resources</h1>
                        <p className="text-slate-500 text-lg font-medium max-w-xl">
                            Insights on project management, certifications, and industry trends.
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                    activeCategory === cat
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
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
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-slate-400 text-lg font-medium">No posts found in this category.</p>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-4 text-accent font-bold hover:underline text-sm"
                            >
                                View all posts
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
