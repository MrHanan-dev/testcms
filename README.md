# TheAgileNest

Next.js marketing site with embedded **Payload CMS** (`/admin`) and lightweight **CRM** (Leads).

## Local development

1. Copy `.env.example` to `.env.local` and set `DATABASE_URI` (Neon Postgres) and `PAYLOAD_SECRET`.
2. `npm install`
3. `npm run dev` → site at [http://localhost:3000](http://localhost:3000), admin at `/admin`
4. Seed page content (dev only): `GET /api/seed-<page>?secret=<PAYLOAD_SECRET>&force=1`

See `CMS_HANDOFF.md` for the full conversion playbook and `docs/CLIENT_GUIDE.md` for editor instructions.

## Production (Vercel)

**Environment variables** (Project → Settings → Environment Variables):

| Variable | Required | Notes |
|----------|----------|--------|
| `DATABASE_URI` | Yes | Neon Postgres connection string |
| `PAYLOAD_SECRET` | Yes | Long random secret for Payload auth |
| `BLOB_READ_WRITE_TOKEN` | Yes (media) | Add Vercel Blob storage to the project; token is auto-created |

**Deploy steps**

1. Connect the repo to Vercel and deploy the `feat/payload-cms` branch (or `main` after merge).
2. Add **Blob** storage in the Vercel project dashboard (Storage → Create → Blob).
3. Set `DATABASE_URI` and `PAYLOAD_SECRET` in Vercel env vars.
4. Redeploy. Media uploads use Vercel Blob; local disk is used in dev when `BLOB_READ_WRITE_TOKEN` is unset.
5. Create the first admin user at `/admin` (or via Payload CLI).
6. Run seed routes once against the production URL (or seed from local against prod DB) to populate globals/posts.

**Live updates:** Saving a global, post, or media item in `/admin` triggers `revalidatePath` — no redeploy needed for content edits.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run types-check` — TypeScript check
- `npm run generate:types` — regenerate Payload types after schema changes
