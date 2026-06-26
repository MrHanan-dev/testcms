# TheAgileNest

Next.js marketing site with embedded **Payload CMS** (`/admin`) and lightweight **CRM** (Leads).

## Local Development

1. Copy `.env.example` to `.env.local` and set `DATABASE_URI` (Neon Postgres) and `PAYLOAD_SECRET`.
2. `npm install`
3. `npm run dev` → site at [http://localhost:3000](http://localhost:3000), admin at `/admin`
4. Seed original site content (dev only):
   - All pages + collections: `GET /api/seed-all?secret=<PAYLOAD_SECRET>&force=1`
   - Single page: `GET /api/seed-<page>?secret=<PAYLOAD_SECRET>&force=1`
   - Verify seed: `GET /api/dev/cms-seed-verify?secret=<PAYLOAD_SECRET>`

See `CMS_HANDOFF.md` for the full conversion playbook and `docs/CLIENT_GUIDE.md` for editor instructions.

---

## Deployment Checklist

### Required Environment Variables

Before deploying to Vercel, ensure these are set in **Project Settings → Environment Variables**:

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URI` | Yes | PostgreSQL connection string (Neon recommended) |
| `PAYLOAD_SECRET` | Yes | Min 32 chars, used for Payload auth |
| `NEXT_PUBLIC_SITE_URL` | Yes | Your production domain (e.g., `https://yourdomain.com`) |
| `BLOB_READ_WRITE_TOKEN` | Yes | Vercel Blob for media storage (auto-created when linked) |
| `CRON_SECRET` | Yes | Protects scheduled publishing endpoint |
| `BACKUP_SECRET` | Yes | Protects backup/restore API |
| `EXPORT_SECRET` | Yes | Protects content export API |
| `CACHE_SECRET` | Yes | Protects cache purge API |
| `HEALTH_SECRET` | Recommended | Protects detailed health info |

### Optional Environment Variables

| Variable | Description |
|----------|-------------|
| `GMAIL_USER` + `GMAIL_APP_PASSWORD` | Gmail for contact form emails |
| `RESEND_API_KEY` | Resend for CMS notifications |
| `NOTIFICATION_EMAIL` | Where to send form submissions |
| `RECAPTCHA_SITE_KEY` + `RECAPTCHA_SECRET_KEY` | Form spam protection |

### Vercel Setup Steps

1. **Create Project**: Link this repo to a new Vercel project
2. **Add Blob Storage**: Storage → Create → Blob (required for media uploads)
3. **Set Environment Variables**: Add all required variables in Project Settings
4. **Deploy**: Push to main or trigger manual deploy

### Post-Deployment

1. **Create Admin User**: Visit `/admin` to create your first admin account
2. **Configure Site Settings**: Set branding, logo, and SEO defaults in `/admin`
3. **Run Seed Routes** (optional): Populate initial content via seed endpoints
4. **Test**: Verify contact forms, media uploads, and scheduled publishing

### Cron Jobs

The project includes a Vercel cron job that runs every 6 hours:

| Endpoint | Schedule | Purpose |
|----------|----------|---------|
| `/api/cron/publish-scheduled` | `0 */6 * * *` | Publishes scheduled posts |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run types-check` | TypeScript check |
| `npm run generate:types` | Regenerate Payload types after schema changes |

---

## Live Updates

Saving a global, post, or media item in `/admin` triggers `revalidatePath` — no redeploy needed for content edits.
