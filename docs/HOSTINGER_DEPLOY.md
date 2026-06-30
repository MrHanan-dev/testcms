# Deploy TheAgileNest CMS on Hostinger (theagilenest.com)

Use this guide to point your **existing** Hostinger Node.js site at the correct GitHub repo while keeping **theagilenest.com** unchanged.

**Correct repository:** https://github.com/MrHanan-dev/testcms  
**Branch:** `main`

---

## What you are doing

| Keep the same | Change |
|---------------|--------|
| Domain `theagilenest.com` | GitHub repo → `MrHanan-dev/testcms` |
| Hostinger hosting plan | Website code → CMS version in this repo |
| SSL / CDN (if enabled) | Environment variables (see below) |

You do **not** need to change DNS if the domain is already attached to this Hostinger website.

---

## Step 1 — Reconnect GitHub in hPanel

1. Log in to **Hostinger hPanel** → **Websites** → **theagilenest.com** → **Dashboard**.
2. Click **Settings and redeploy** (gear icon).
3. Under **Repository**, click **Connect to GitHub** (or **Reconnect** if disconnected).
4. Authorize Hostinger on GitHub when prompted.
5. Select repository: **`MrHanan-dev/testcms`**
6. Branch: **`main`**
7. Confirm build settings:

| Setting | Value |
|---------|--------|
| Framework | Next.js (auto-detected) |
| Node.js version | **22.x** (or 20 LTS) |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Start command | `npm start` |

8. Enable **Auto-deployment** if you want pushes to `main` to redeploy automatically.

---

## Step 2 — Environment variables

In **Settings and redeploy** → **Environment variables**, add every variable below.  
You can copy the template from `hostinger.env.example` in this repo and replace placeholder values.

**Required (site will not work without these):**

```env
DATABASE_URI=postgresql://...?sslmode=verify-full
PAYLOAD_SECRET=your-32-char-secret
NEXT_PUBLIC_SITE_URL=https://theagilenest.com
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...
PAYLOAD_CONFIG_PATH=src/payload.config.ts
NODE_ENV=production
```

Use the **same** `DATABASE_URI`, `PAYLOAD_SECRET`, and `BLOB_READ_WRITE_TOKEN` as your working Vercel/local setup (shared Neon DB + Vercel Blob store).

**Recommended (protects admin/API routes):**

```env
CRON_SECRET=...
BACKUP_SECRET=...
EXPORT_SECRET=...
CACHE_SECRET=...
HEALTH_SECRET=...
```

**Optional (email / forms):**

```env
GMAIL_USER=...
GMAIL_APP_PASSWORD=...
NOTIFICATION_EMAIL=contact@theagilenest.com
RESEND_API_KEY=...
```

Click **Save**, then **Deploy**.

---

## Step 3 — Verify after deploy

When deployment status is **Completed**, check:

| URL | Expected |
|-----|----------|
| https://theagilenest.com | Homepage loads, logo + images visible |
| https://theagilenest.com/admin | Payload CMS login |
| https://theagilenest.com/api/health | JSON status (mostly `"good"`) |
| https://theagilenest.com/pmp | Certification pages |

Hard-refresh (Ctrl+Shift+R) if you still see old content.

---

## Step 4 — CMS content (one-time, if needed)

If the live site looks correct but CMS branding/media is wrong, run locally against the shared database (dev only):

```text
GET http://localhost:3000/api/seed-site-settings?secret=YOUR_PAYLOAD_SECRET&force=1
GET http://localhost:3000/api/seed-media?secret=YOUR_PAYLOAD_SECRET&force=1
```

---

## How this repo is configured for Hostinger

- **`output: "standalone"`** in `next.config.ts` — smaller memory footprint on shared Node hosting.
- **`npm run build`** runs **`postbuild`** — copies static assets into the standalone bundle.
- **`npm start`** runs `node .next/standalone/server.js` (reads Hostinger’s `PORT` automatically).
- **`src/middleware.ts`** redirects `/api/media/file/*` to Vercel Blob CDN (Hostinger cannot reach Blob’s management API).

---

## Troubleshooting

### “Failed to build the application”
- Open **Deployments** → latest build → **View logs**.
- Confirm Node **20+**, `npm ci` / `npm run build` succeed locally.
- Confirm all required env vars are set.

### Images broken on Hostinger but fine on Vercel
- Set `BLOB_READ_WRITE_TOKEN` in Hostinger env vars.
- Redeploy after saving env vars.

### Admin loads but frontend is old
- Confirm repo is `MrHanan-dev/testcms` and branch is `main`.
- Trigger **Redeploy** manually.

### 504 on media URLs
- Middleware blob redirect requires `BLOB_READ_WRITE_TOKEN` with format `vercel_blob_rw_<storeId>_...`.

---

## Support contacts

- **Hostinger:** hPanel live chat for GitHub connection / build failures.
- **Repo:** https://github.com/MrHanan-dev/testcms
