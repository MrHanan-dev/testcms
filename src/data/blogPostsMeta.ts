/** Blog post metadata (no JSX). Article bodies stay in blogPosts.tsx until edited in CMS. */
export type BlogPostMeta = {
  id: string;
  title: string;
  abstract: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  readTime: string;
  slug: string;
};

export const BLOG_CATEGORIES = [
  "Project Management",
  "PMP Certification",
  "Construction Cost Estimation",
  "PMO & Governance",
] as const;

export const blogPostsMeta: BlogPostMeta[] = [
  {
    id: "1",
    title: "Agile Project Management Guide for NZ Construction 2026",
    abstract:
      "Discover how agile project management is transforming NZ construction in 2026. Learn strategies from PMI-certified experts to reduce delays and improve outcomes.",
    date: "April 07, 2026",
    author: "Engr. Syed Amjad Iqbal",
    category: "Project Management",
    imageUrl: "/images/blog/impact-construction-realistic.png",
    readTime: "12 min read",
    slug: "theagilenest-impact-construction",
  },
  {
    id: "2",
    title: "PMI-CP Certification Guide for NZ Construction Pros",
    abstract:
      "Complete guide to PMI-CP certification in New Zealand. Learn eligibility, exam format, study strategies, and how TheAgileNest can help you prepare.",
    date: "April 07, 2026",
    author: "TheAgileNest Training Team",
    category: "PMP Certification",
    imageUrl: "/images/blog/pmicp-journey-realistic.png",
    readTime: "15 min read",
    slug: "navigating-pmicp-journey",
  },
  {
    id: "3",
    title: "3 Cost Estimation Pitfalls to Avoid in NZ Construction",
    abstract:
      "Avoid costly estimation mistakes in NZ construction. Learn to overcome optimism bias, scope omissions, and market volatility with expert QS guidance.",
    date: "April 07, 2026",
    author: "TheAgileNest Advisory",
    category: "Construction Cost Estimation",
    imageUrl: "/images/blog/cost-estimation-realistic.png",
    readTime: "10 min read",
    slug: "mastering-cost-estimation-pitfalls",
  },
  {
    id: "4",
    title: "PMBOK 7th vs 8th Edition: Key Changes for Your PMP Exam",
    abstract:
      "Compare PMBOK 7th and 8th editions and what the changes mean for your PMP exam. Learn about value delivery, AI, and sustainability in project management.",
    date: "April 07, 2026",
    author: "Engr. Syed Amjad Iqbal",
    category: "Project Management",
    imageUrl: "/images/blog/pmbok-evolution-realistic.png",
    readTime: "14 min read",
    slug: "pmbok-7th-vs-8th-changes",
  },
  {
    id: "5",
    title: "How to Scale a PMO for Business Growth: A Case Study",
    abstract:
      "Learn how TheAgileNest helped a tech company establish a PMO that improved delivery by 30%. Practical insights for scaling PM in NZ organisations.",
    date: "April 07, 2026",
    author: "TheAgileNest Consulting",
    category: "PMO & Governance",
    imageUrl: "/images/blog/case-study-scaling-pmo.png",
    readTime: "18 min read",
    slug: "case-study-scaling-pmo",
  },
  {
    id: "6",
    title: "Project Timeline Management: PMP-Certified Manager Guide",
    abstract:
      "Master project timeline management with proven PMP techniques. Learn WBS, critical path method, scheduling best practices from certified project managers in NZ.",
    date: "April 07, 2026",
    author: "Engr. Syed Amjad Iqbal",
    category: "Project Management",
    imageUrl: "/images/blog/project-timeline.png",
    readTime: "14 min read",
    slug: "project-without-timeline-only-intention",
  },
  {
    id: "7",
    title: "Project Planning vs Execution: PMP Strategies for NZ",
    abstract:
      "Learn how PMP-certified managers bridge the gap between planning and execution. Discover practical strategies for delivering results on NZ construction projects.",
    date: "April 07, 2026",
    author: "Engr. Syed Amjad Iqbal",
    category: "Project Management",
    imageUrl: "/images/blog/planning-direction.png",
    readTime: "13 min read",
    slug: "planning-creates-direction-execution-creates-results",
  },
  {
    id: "8",
    title: "Proactive Planning: Prevent Chaos in NZ Projects",
    abstract:
      "Discover how proactive planning prevents costly chaos in NZ construction. Learn PMBOK-aligned techniques to set your projects up for success from day one.",
    date: "April 07, 2026",
    author: "TheAgileNest Training Team",
    category: "Project Management",
    imageUrl: "/images/blog/reduce-chaos.png",
    readTime: "11 min read",
    slug: "clear-plans-reduce-chaos",
  },
  {
    id: "9",
    title: "Strategy to Delivery: PMP Framework for NZ Success",
    abstract:
      "Transform strategic ambition into structured project delivery with proven PMP techniques. Align goals, resources, and execution for consistent outcomes in NZ.",
    date: "April 07, 2026",
    author: "Engr. Syed Amjad Iqbal",
    category: "Project Management",
    imageUrl: "/images/blog/strategy-action.png",
    readTime: "13 min read",
    slug: "strategy-turns-ambition-into-structured-action",
  },
  {
    id: "10",
    title: "Strong Planning Foundations Prevent Costly Project Errors",
    abstract:
      "Discover why strong planning foundations prevent expensive rework, delays, and budget overruns in NZ construction and infrastructure projects.",
    date: "April 08, 2026",
    author: "Engr. Syed Amjad Iqbal",
    category: "Project Management",
    imageUrl: "/images/blog/strong-foundations.png",
    readTime: "14 min read",
    slug: "strong-foundations-planning-prevent-costly-corrections",
  },
];
