# TheAgileNest — CMS/CRM Conversion: Full Handoff & Continuation Prompt

> Paste this whole file into Cursor (or any AI coding assistant) as the opening
> message. It explains the project, what's done, the exact pattern we follow,
> the code conventions, and the step-by-step work that remains. Follow it
> literally — the rule is **"no space for mistakes; don't miss a single area."**

---

## 1. The goal (what the client wants)

Turn the entire TheAgileNest Next.js marketing site into a **WordPress-like CMS**
so the client can edit **every page** (every heading, paragraph, list item, card,
price, FAQ) from an admin panel — no developer needed. Plus a lightweight **CRM**
that captures contact-form submissions as "Leads" with a status pipeline.

**Hard rules (non-negotiable):**
1. **Do NOT change the live website's visual output.** Every page must render
   byte-for-byte identically until the client edits something. We achieve this
   with **fallbacks**: the page keeps its original hard-coded text as the default,
   and only swaps in CMS values when the client has actually entered them.
2. **Icons, colors, gradients, animations, layout stay in code.** Only *text and
   structured content* is editable. Icons are mapped **by array index**, never
   stored in the CMS.
3. **Match the brand:** navy `#0B3C5D` (primary), cyan `#55c5e7` (accent), the logo.
4. **No "Claude"/AI attribution** anywhere — not in commits, comments, file headers.
5. Work autonomously; commit each page as you finish it.

---

## 2. Tech stack (already installed & configured)

- **Payload CMS 3.85.x** embedded in the same Next.js app, admin served at `/admin`.
  - `payload`, `@payloadcms/next`, `@payloadcms/db-postgres`, `@payloadcms/richtext-lexical`.
- **Next.js 16.2.9** (App Router), **React 19**.
- **Neon Postgres** (connection string in `.env.local` as `DATABASE_URI`).
- Route groups: `src/app/(frontend)/...` for the public site, `src/app/(payload)/...`
  for the admin. (Split into two root layouts to avoid nested `<html>` hydration errors.)
- **One Payload "global" per page.** A global = a singleton document (the page has one
  instance, unlike collections which have many rows).
- Secrets live **only** in gitignored `.env.local`: `DATABASE_URI`, `PAYLOAD_SECRET`.
  Never commit them.

### Key files
- `src/payload.config.ts` — registers all globals & collections, brands the admin.
- `src/lib/payload.ts` — `getGlobal(slug)` helper: null-safe, returns `{}` on error.
- `src/globals/*.ts` — one file per page-global (field schema).
- `src/data/*Content.ts` — the default ("fallback") text content for each page,
  in plain TS objects/arrays.
- `src/app/(frontend)/<page>/page.tsx` — the public page, made prop-/CMS-driven.
- `src/app/api/seed-<page>/route.ts` — dev-only seed route that writes the default
  content into the global so the admin panel shows the real current text.
- `src/collections/Leads.ts` — the CRM.

---

## 3. What is DONE (committed on branch `feat/payload-cms`)

| Area | Status |
|---|---|
| Payload foundation, Neon DB, `/admin`, Media library, Users auth | ✅ |
| Admin branding (logo, navy/cyan theme, title suffix, favicon) | ✅ |
| CRM: `Leads` collection (pipeline new→contacted→qualified→won→lost, notes, assignee, message visible in list) | ✅ |
| CRM: contact form persists each submission as a Lead (`src/app/api/send-email/route.ts`) | ✅ |
| CRM: branded dashboard widget (lead counts) at top of admin | ✅ |
| `SiteSettings` global (logo, contact, socials) + Header reads logo from it | ✅ |
| **Home** page — fully editable + seeded (9 section tabs incl. hero slides, reviews) | ✅ |
| **About** page — fully editable + seeded (every section) | ✅ |
| **Consulting** service page | ✅ |
| **Project Management** service page (`src/data/pmContent.ts`) | ✅ |
| **Cost Estimation** service page (`src/data/ceContent.ts`) | ✅ |
| **Contract Management** service page | ✅ |
| **Training** service page (`src/data/trContent.ts`) | ✅ |
| **PMP** certification page (`src/data/pmpContent.ts`, `src/globals/Pmp.ts`) — full granular, 10 tabs | ✅ |

Globals currently registered in `payload.config.ts`:
`[SiteSettings, Home, About, Consulting, ProjectManagement, CostEstimation, ContractManagement, Training, Pmp]`

---

## 4. What is LEFT (do these next, in order)

1. **CAPM page** — `src/app/(frontend)/capm/page.tsx` (already read; structure documented below).
2. **PMI-CP page** — `src/app/(frontend)/pmicp/page.tsx`.
3. **Partner page** — `src/app/(frontend)/partner/page.tsx`.
4. **Footer + remaining global/nav content** editable (extend `SiteSettings`).
5. **Blog in Payload** — a `Posts` collection + migrate the existing posts (currently
   the blog was on an abandoned Sanity setup; rebuild in Payload).
6. **Roles & permissions** — Admin / Editor / Sales roles on the `Users` collection
   with field/collection access control.
7. **Production** — media storage (Vercel Blob adapter), deploy, on-publish revalidation
   (`revalidatePath`) so edits go live without a redeploy.
8. **Docs** — a short client guide: how to log in, edit a page, manage leads.

---

## 5. THE PATTERN (follow this exactly for every page)

This is the repeatable recipe. Do all 7 steps per page, then commit.

### Step A — Read the ENTIRE page first
Open `src/app/(frontend)/<page>/page.tsx` and read every line. List every piece of
text, every list, every card, every price, every FAQ. Note which icons are used and
in what order (you'll map them by index). **Miss nothing.**

### Step B — Create the content module `src/data/<page>Content.ts`
Extract every default string/array into one exported const object. Use plain types.
Lists of strings stay as `string[]`. Cards become `{title, desc}[]`. Example:

```ts
export const CAPM_CONTENT = {
  heroTitle: "CAPM Training",
  heroSubtitle: "Certified Associate in Project Management",
  heroDescription: "Launch your project management career …",
  foundationsBadge: "Foundations of PM",
  detailsHeading: "Launch Your Project Management Career",
  detailsParagraph: "The CAPM® (Certified Associate …) …",
  benefits: [
    { title: "Global Recognition", desc: "Validates your understanding …" },
    // …exactly the 4 from the page, in order
  ],
  whoHeading: "Who Should Apply?",
  whoIntro: "Perfect for individuals starting their journey …",
  whoAudience: ["Students & Recent Graduates", /* …5 items */],
  // …eligibility, curriculum (4 cards w/ % badges), whatsIncluded[],
  //   examFormat[], whyTrainFeatures[] (10), trainingOptions[] (3),
  //   prepMaterials[] (6), fees, discounts[], importantNote, testimonial, faqItems[] (10)
} as const;
```

> Copy text **verbatim**, including the `®`, smart quotes, and the odd double-spaces
> in the source (e.g. `"requirements   no project experience"`). Identical output means identical.

### Step C — Create the global `src/globals/<Page>.ts`
A `GlobalConfig` with `slug`, `label`, `access: { read: () => true }`, and
`admin: { group: "Certification Pages" }` (or `"Service Pages"`). Organize fields
into `tabs` that mirror the page's sections. Reuse the `list()` helper for string arrays:

```ts
import type { GlobalConfig } from "payload";

const list = (name: string, label?: string) => ({
  name, type: "array" as const, ...(label ? { label } : {}),
  fields: [{ name: "text", type: "text" as const, required: true }],
});

export const Capm: GlobalConfig = {
  slug: "capmPage",
  label: "CAPM Page",
  access: { read: () => true },
  admin: { group: "Certification Pages" },
  fields: [{ type: "tabs", tabs: [
    { label: "Hero", fields: [
      { name: "heroTitle", type: "text" },
      { name: "heroSubtitle", type: "text" },
      { name: "heroDescription", type: "textarea" },
    ]},
    // …one tab per section, arrays for repeating cards, list() for string lists
  ]}],
};
```
Field-type rules:
- short line → `text`; multi-line → `textarea`; repeating cards → `array` of `{title, desc}`;
  string lists → `list(...)`; link-laden / bold-inline content → `richText` **and** keep
  the exact JSX as the fallback (see Step E).
- **Never** add fields for icons, colors, percentages-as-styling, or gradients.
  (Percentages that are visible text, like the curriculum `36%`, ARE editable text.)

Then register it in `src/payload.config.ts`: add the import and put it in the
`globals: [...]` array.

### Step D — Wire the page to the global
Make the page an **async server component**. Fetch the global and define tiny helpers:

```tsx
import { getGlobal } from "@/lib/payload";
import { CAPM_CONTENT as K } from "@/data/capmContent";

export default async function CapmPage() {
  const g = await getGlobal("capmPage");
  const f = (key: string, fallback: string) =>
    (typeof g[key] === "string" && g[key]) ? (g[key] as string) : fallback;
  const arr = <T,>(key: string, fallback: T[]): T[] =>
    Array.isArray(g[key]) && (g[key] as T[]).length ? (g[key] as T[]) : fallback;
  const listArr = (key: string, fallback: string[]): string[] =>
    Array.isArray(g[key]) && (g[key] as {text:string}[]).length
      ? (g[key] as {text:string}[]).map(x => x.text) : fallback;
  // …then replace each literal with f(...)/arr(...)/listArr(...), keeping icons by index
}
```

Then go through the JSX and replace every hard-coded string with `f("key", K.key)`,
every `.map()` source array with `arr("key", K.key)` or `listArr(...)`. **Icons stay
in code as a fixed array indexed by `i`:**

```tsx
const benefitIcons = [Check, Check, Check, Check]; // by index, never in CMS
{arr("benefits", K.benefits).map((item, i) => { /* uses item.title, item.desc */ })}
```

For rich-text overrides (only where the original has embedded links/bold):
```tsx
import { RichText } from "@payloadcms/richtext-lexical/react";
const hasRich = (v: unknown) =>
  !!v && typeof v === "object" && "root" in (v as object);
// render: hasRich(item.eduBackground) ? <RichText data={item.eduBackground}/> : <EduFallbackJSX/>
```

### Step E — Create the seed route `src/app/api/seed-<page>/route.ts`
Copy an existing one (`seed-pmp/route.ts` is the reference). It:
- 403s in production, 401s without `?secret=<PAYLOAD_SECRET>`,
- skips if already seeded unless `?force=1`,
- `payload.updateGlobal({ slug, data })` mapping the content module into the global's
  shape. **String lists map to `{text}` arrays:** `arr.map(text => ({ text }))`.
- **Do NOT seed the rich-text override fields** (eduBackground etc.) — leaving them
  empty makes the page render its exact link-bearing JSX fallback. This is intentional.

### Step F — Run, sync, seed, verify
```bash
# from repo root, Git-Bash:
taskkill //F //IM node.exe; rm -rf .next; npm run dev   # restart so schema pushes
# A NEW global adds columns to Neon — WAIT until the admin route returns 200:
#   curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/admin/globals/<slug>
SECRET=$(grep '^PAYLOAD_SECRET=' .env.local | cut -d= -f2)
curl -s "http://localhost:3000/api/seed-<page>?secret=$SECRET&force=1"   # -> {"seeded":true}
curl -s http://localhost:3000/<page> > /tmp/p.html
# grep the rendered HTML for EVERY section's text to confirm nothing dropped.
# remember the page renders ® as a literal ® (UTF-8), not &#xAE; — grep plain text.
```
Also run `npx tsc --noEmit` and confirm zero new errors, and confirm the page
returns HTTP 200 with no server errors in the dev log.

### Step G — Commit (no AI attribution)
```bash
git add -A
git commit -m "Pages(CAPM): fully editable via CMS (identical output)"
```
Message format: `Pages(<Name>): fully editable via CMS (identical output)`.
**No "Claude", no "Co-Authored-By", no emoji.**

---

## 6. CAPM page — section inventory (already analyzed, build from this)

File: `src/app/(frontend)/capm/page.tsx`. Keep these components with **code props**
(don't CMS-ify their internals; they're shared and already prop-driven where needed):
`Header`, `CertificationHero`, `BookingForm`, `CourseSuccessQuotes`, `TrainingSchedule`,
`ScrollButton`, `ContactLink`, `JsonLdCourse`, `JsonLdFaq`, `Footer`.

Make editable (slug suggestion `capmPage`, group "Certification Pages"):
1. **Hero** (via CertificationHero props): title, subtitle, description. (prev/next links,
   gradient, badge image, downloadLink stay in code.)
2. **Details** section: badge "Foundations of PM", heading "Launch Your Project
   Management Career", intro paragraph, **4 benefit cards** `{title,desc}`
   (Global Recognition / Employer Trust / Smart Investment / Career Kickstarter).
3. **Who Should Apply** card: heading, intro, **5-item audience list**.
4. **Eligibility Requirements**: section heading + intro; **Education** card (heading,
   subtitle, 2-item list); **PM Education** card (heading, subtitle, 2-item list);
   **"Good news" callout** (has inline bold → richText + JSX fallback).
5. **Curriculum / Syllabus**: heading, subtitle, **4 cards** each `{title, desc, percent}`
   (36% / 17% / 20% / 27%). Icons (BookOpen/Target/Users/Briefcase) + the dark-card
   styling on the 4th stay in code, indexed.
6. **What's Included** (navy box): heading + **6-item list**; button label "Download Full Syllabus".
7. **CAPM® Exam Format** box: heading + **3 rows** `{title, desc}` (150 Questions /
   180 Minutes / Exam Structure). Icons by index.
8. **Why Train with TheAgileNest**: eyebrow, heading, 2 paragraphs, **10 feature cards** `{title,desc}`.
9. **Training & Investment**: eyebrow, heading, subtitle; **3 training-option cards**
   `{title,desc}` (icons Building2/Users/Globe by index); **Prep Materials** heading + **6-item list**;
   **Exam Fee** heading, member fee "US $225", non-member "US $300", fee note;
   **Course Fees** heading + intro, contact email, phone, **4 discount items**, important note.
10. **Register**: the side card heading "Start your PM journey today", its paragraph,
    "Enquire Now" label, and the dashed-box testimonial quote + author.
11. **FAQ**: title "CAPM® Exam FAQs", subtitle, description, **10 FAQ items** `{question,answer}`.
    ⚠️ The page passes the SAME 10 items to BOTH `<JsonLdFaq>` and `<FAQ>` — wire BOTH
    to the same `arr("faqItems", K.faqItems)` so structured data and UI never diverge.
    (Note the source has one `'` vs `’` and one `—` vs `  ` typo difference between the
    two copies; standardize on the visible `<FAQ>` copy in your content module.)

After CAPM, repeat the whole pattern for **PMI-CP** (`/pmicp`) and **Partner** (`/partner`):
read fully, inventory, content module, global, wire, seed, verify, commit.

---

## 7. Conventions & gotchas (learned the hard way)

- **Schema push latency:** adding a new global creates new Postgres columns on Neon.
  After restart, the admin/seed will 404 or seed empty until the push finishes —
  always poll `/admin/globals/<slug>` for `200` before seeding.
- **`®` renders as literal UTF-8** in HTML, not `&#xAE;`. Grep plain text when verifying.
- **Idempotent seeds:** guard with "already seeded unless `?force=1`" so re-running is safe.
- **`getGlobal` is null-safe** (returns `{}`); the `f/arr/listArr` helpers must always
  fall back to the content module so an empty/erroring CMS never blanks the page.
- **Line endings:** repo is LF; Git warns "LF will be replaced by CRLF" on Windows — harmless.
- **Don't seed rich-text fallbacks** (link-laden blocks) — empty = exact JSX renders.
- **Commits:** branch `feat/payload-cms`. No PR yet (client hasn't asked). No AI attribution.
- **Run on Windows** via PowerShell or the Bash tool; dev server is `npm run dev` on :3000.

---

## 8. Your opening instruction to the assistant

> "Continue the TheAgileNest Payload CMS conversion on branch `feat/payload-cms`.
> Next page: **CAPM** (`src/app/(frontend)/capm/page.tsx`). Follow the pattern in
> `CMS_HANDOFF.md` exactly: read the whole page, build `src/data/capmContent.ts`,
> `src/globals/Capm.ts` (slug `capmPage`, register it in `payload.config.ts`), wire
> the page with `f/arr/listArr` fallbacks (icons stay in code by index), create
> `src/app/api/seed-capm/route.ts`, restart + wait for schema push + seed + verify
> every section in the rendered HTML + `tsc --noEmit`, then commit
> `Pages(CAPM): fully editable via CMS (identical output)` with no AI attribution.
> The live output must stay byte-identical. Then do PMI-CP, then Partner, then the
> Footer/blog/roles/production tasks. Don't ask permission between pages — keep going."
