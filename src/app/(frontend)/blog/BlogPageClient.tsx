"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Tag, ArrowRight, Calendar, User } from "lucide-react";
import type { BlogPostMeta } from "@/data/blogPostsMeta";

const defaultCategories = ["All", "Project Management", "PMP Certification", "Construction Cost Estimation", "PMO & Governance"];

interface BlogPageClientProps {
  posts: BlogPostMeta[];
  heading?: string;
  description?: string;
  categories?: string[];
  postsPerPage?: number;
  showAuthor?: boolean;
  showDate?: boolean;
  showCategories?: boolean;
}

export default function BlogPageClient({ 
  posts, 
  heading = "Blog & Resources",
  description = "Insights on project management, certifications, and industry trends.",
  categories = defaultCategories,
  postsPerPage = 10,
  showAuthor = true,
  showDate = true,
  showCategories = true,
}: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(postsPerPage);

  const filteredPosts =
    activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);
  
  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />

      <main className="pt-28 pb-24">
        <div className="container-custom">
          <div className="mb-10 border-b border-slate-100 pb-10">
            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[11px] mb-3 block">TheAgileNest</span>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-3">{heading}</h1>
            <p className="text-slate-500 text-lg font-medium max-w-xl">
              {description}
            </p>
          </div>

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

          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col group-hover:-translate-y-1">
                      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          unoptimized={post.imageUrl.startsWith("/api/")}
                        />
                        {showCategories && (
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 bg-white/95 text-primary text-xs font-black rounded-md shadow-sm flex items-center gap-1">
                              <Tag size={11} className="text-accent" />
                              {post.category}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-lg font-black text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-5 flex-grow line-clamp-3">
                          {post.abstract}
                        </p>

                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                            {showDate && (
                              <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                {post.date}
                              </span>
                            )}
                            {showAuthor && (
                              <span className="flex items-center gap-1">
                                <User size={12} />
                                {post.author}
                              </span>
                            )}
                          </div>
                          <ArrowRight size={15} className="text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              {hasMorePosts && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + postsPerPage)}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-md"
                  >
                    Load More Posts
                  </button>
                </div>
              )}
            </>
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
