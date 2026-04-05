---
description: how to write and publish a new blog post for TotalPMP
---

# Blog Writing Workflow

Use this workflow when the user provides a **blog title** (or topic). It covers everything from SEO planning through content creation to code integration and deployment.

---

## Prerequisites
- The user provides the blog **title** (or topic).
- Core keyword pillars for TotalPMP SEO:
  - **PMP Certification**
  - **Project Management**
  - **Quantity Surveying**
  - **Construction Cost Estimation**
- Every blog post MUST naturally incorporate at least 2 of the above keyword pillars.

---

## Step 1 — SEO & Content Planning

1. **Determine the primary keyword** from the 4 pillars that best fits the title.
2. **Identify 3–5 secondary/long-tail keywords** related to the title (e.g., "PMP exam tips 2026", "quantity surveying career path NZ", "construction cost estimation software").
3. **Draft the SEO metadata**:
   - `title` — The blog title (keep under 60 chars for SEO, can be longer for display).
   - `abstract` — A compelling 1–2 sentence meta description (under 160 chars) that includes the primary keyword.
   - `slug` — URL-friendly slug in kebab-case (e.g., `how-to-pass-pmp-exam-2026`).
   - `category` — One of: `PMP Certification`, `Project Management`, `Quantity Surveying`, `Cost Estimation`, `Certifications`, `Case Studies`, `TotalPMP Transformation`, or a new relevant category.
   - `readTime` — Estimated read time (e.g., `"12 min read"`).
   - `author` — Default: `"Engr. Syed Amjad Iqbal"` or `"TotalPMP Training Team"`.
   - `date` — Use the current date in `"Month DD, YYYY"` format.

4. **Present the SEO plan to the user for approval** before writing content.

---

## Step 2 — Generate the Blog Hero Image

1. Use the `generate_image` tool to create a professional, high-quality hero image for the blog post.
2. Image guidelines:
   - Modern, professional, construction/project-management themed.
   - No text overlays (the title is rendered by the page).
   - Clean, vibrant, suitable for a professional training company website.
3. Save the generated image to `/Users/apple/Work/Ref/totalpmpro/public/images/blog/` with a descriptive filename matching the slug (e.g., `how-to-pass-pmp-exam-2026.png`).
4. The `imageUrl` field in the blog post data will be `/images/blog/<filename>`.

---

## Step 3 — Write the Blog Content (JSX)

Write the full blog content as a JSX `React.ReactNode` following the existing pattern in `src/data/blogPosts.tsx`. Follow these rules:

### Content Structure
```
1. Opening paragraph (hook + primary keyword)
2. H3 section — Context / Why This Matters
3. H3 section — Main body (use lists, callout boxes, grids as appropriate)
4. H3 section — Deep dive or case study
5. H3 section — Actionable advice / How TotalPMP Helps
6. Closing paragraph — CTA linking to TotalPMP services
```

### SEO Writing Rules
- **Primary keyword** in the first paragraph, at least one H3, and the closing paragraph.
- **Secondary keywords** sprinkled naturally throughout (2–3 times each).
- Use `<strong>` for important keyword phrases.
- Minimum **800 words**, target **1200–1500 words**.
- Use internal linking language (mention TotalPMP services/training/consulting).
- Write in a professional but approachable tone matching existing posts.

### JSX Styling Rules (match existing posts exactly)
- Paragraphs: `<p className="mb-6">` 
- H3 headings: `<h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">`
- H4 headings: `<h4 className="text-xl font-bold text-slate-800 mb-3">` or `<h4 className="text-xl font-bold mb-4">`
- Lists: `<ul className="list-disc pl-6 space-y-3 text-slate-700">`
- Callout boxes: `<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-8">`
- Accent callout: `<div className="bg-primary/5 p-8 rounded-3xl mb-10">`
- Quote/tip blocks: `<p className="text-sm font-medium border-l-2 border-accent pl-4">`
- Grid cards: `<div className="grid md:grid-cols-2 gap-6 mb-10">` with child `<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">`
- Numbered steps: Use the flex layout pattern with accent-colored number circles (see post id '5' for reference).
- Wrap all content in `<> ... </>` (React Fragment).

---

## Step 4 — Add the Blog Post to the Data File

1. Open `src/data/blogPosts.tsx`.
2. Add a new entry to the `blogPosts` array with the **next sequential ID** (check the last entry's ID and increment).
3. Fill in all fields:

```tsx
{
    id: '<next_id>',
    title: "<Blog Title>",
    abstract: "<SEO meta description>",
    date: "<Month DD, YYYY>",
    author: "<Author Name>",
    category: "<Category>",
    imageUrl: "/images/blog/<image-filename>",
    readTime: "<X min read>",
    slug: "<url-slug>",
    content: (
        <>
            {/* Full JSX content here */}
        </>
    )
}
```

4. Add a trailing comma after the previous last entry if not already present.

---

## Step 5 — Verify

// turbo
1. Run the development server:
```bash
cd /Users/apple/Work/Ref/totalpmpro && npm run dev
```

2. Use the browser to verify:
   - Blog listing page at `/blog` shows the new post card with correct image, title, category, date.
   - Blog detail page at `/blog/<slug>` renders the full article correctly with image, formatted content, and proper styling.
   - No console errors or build warnings.

3. Verify the sitemap at `http://localhost:3000/sitemap.xml` includes the new blog slug (this happens automatically via `src/app/sitemap.ts`).

---

## Step 6 — Deploy

Follow the `/deployment` workflow to deploy to Vercel.

---

## Quick Checklist

- [ ] SEO plan approved by user
- [ ] Hero image generated and saved to `public/images/blog/`
- [ ] Content written with keyword integration (800+ words)
- [ ] New entry added to `blogPosts.tsx` with all fields
- [ ] Blog listing shows new post
- [ ] Blog detail page renders correctly
- [ ] Sitemap includes new blog URL
- [ ] Deployed to Vercel

---

## Keyword Reference

| Pillar | Example Long-Tail Keywords |
|---|---|
| PMP Certification | PMP exam prep 2026, PMP certification cost, PMP study guide, PMP training NZ, how to pass PMP exam |
| Project Management | project management methodologies, agile project management, PMBOK guide, PMO best practices, project lifecycle |
| Quantity Surveying | quantity surveyor career, QS certification, bill of quantities, measurement standards, NZ quantity surveying |
| Construction Cost Estimation | construction estimating software, bid preparation, takeoff methods, cost overrun prevention, building cost calculator |
