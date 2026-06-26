# TheAgileNest CMS - Handover Documentation

## Overview

This CMS is built with Payload CMS 3.x integrated into Next.js 15. It provides:

- 17 page globals for editing website content
- Blog system with categories and SEO
- Lead/CRM management
- Media library with Vercel Blob storage
- Activity logging and user management

---

## What's Editable in the CMS

### Page Content (17 Globals)

All these pages can be fully edited from the CMS:

| Global | URL | Notes |
|--------|-----|-------|
| Home | `/` | Hero slides, features, testimonials, CTAs |
| About | `/about` | Founder story, team, timeline |
| Consulting | `/consulting` | Service cards, FAQ |
| Project Management | `/project-management` | Service details |
| Cost Estimation | `/cost-estimation` | Service cards with images |
| Contract Management | `/contract-management` | Service cards |
| Training | `/training` | Categories, schedule |
| PMP | `/pmp` | Certification details |
| CAPM | `/capm` | Certification details |
| PMI-CP | `/pmicp` | Certification details |
| Partner | `/partner` | Partner program info |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |
| Site Settings | N/A | Logo, contact info, footer |
| Custom Code | N/A | Analytics, custom CSS/JS |
| Reading Settings | N/A | Blog display settings |

### Blog

- Create, edit, and schedule blog posts
- Add featured images and categories
- SEO fields (meta title, description, OG image)
- Automatic URL generation from title

### CRM / Leads

- View all form submissions as leads
- Track lead stages (new, contacted, qualified, won, lost)
- Add notes and follow-up reminders
- Assign leads to team members

### Media Library

- Upload images, PDFs, videos
- All uploads stored in Vercel Blob (production)
- Automatic image optimization

---

## What's NOT Editable (By Design)

These elements are part of the site design and require code changes:

- Page layouts and component structure
- Icons and visual decorations
- Color scheme (defined in Tailwind config)
- Font choices
- Navigation structure (use Site Settings for links)
- Animation effects and transitions
- Form fields and validation rules

---

## User Roles

| Role | Permissions |
|------|-------------|
| Admin | Full access to everything |
| Editor | Edit content, manage leads, moderate comments |
| Author | Create and edit own posts |
| Viewer | Read-only access to admin |

---

## Important Notes

1. **Empty fields use defaults** - If you clear a field, the site shows built-in default content
2. **Images** - Upload new images through Media Library, then select in page fields
3. **Blog scheduling** - Posts publish within 6 hours of scheduled time (via scheduled publisher)
4. **Backups** - Contact your developer for backup/restore operations
5. **Activity Log** - All changes are tracked in the Activity Log collection
6. **SEO** - Each page global and blog post has SEO fields for meta titles and descriptions

---

## Technical Details

### Tech Stack

- **Payload CMS 3.x** - Headless CMS with admin panel at `/admin`
- **Next.js 15** - React framework with App Router
- **PostgreSQL** - Database (Neon in production)
- **Vercel Blob** - Media storage in production
- **Tailwind CSS** - Styling

### Key Files (For Developers)

- `src/payload.config.ts` - CMS configuration, globals, and collections
- `src/globals/*.ts` - Page global definitions
- `src/collections/*.ts` - Collection definitions (Users, Media, Posts, Leads)
- `src/lib/payload.ts` - Helper functions for fetching CMS data

### Environment Variables

Required in `.env.local`:
- `DATABASE_URI` - PostgreSQL connection string
- `PAYLOAD_SECRET` - Secret for authentication
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob storage token (production)

---

## Support

For questions or issues, contact your TheAgileNest developer.
