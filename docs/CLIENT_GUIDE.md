# TheAgileNest CMS — Client Guide

Your website content is managed in the same app as the public site. No developer is needed for day-to-day text, image, and lead updates.

---

## Log in

1. Open **https://theagilenest.com/admin** (or `http://localhost:3000/admin` in development).
2. Sign in with the email and password provided by your administrator.
3. You land on the dashboard with a summary of new CRM leads.

---

## Edit a page

Pages are organised as **Globals** (one document per page) under groups such as **Site Content** and **Certification Pages**.

1. In the left sidebar, open **Globals**.
2. Choose the page (e.g. **Home Page**, **PMP Page**, **Site Settings**).
3. Use the **tabs** at the top — Hero, FAQ, Investment, etc.
4. Change any field and click **Save**.
5. The live site updates within a few seconds (no redeploy required).

**Tips**

- Leave a field **empty** to keep the original default text on the site.
- **Icons, colours, and layout** are fixed in code — only text and structured content are editable.
- **Site Settings** controls the header logo, navigation labels, footer links, and contact details.

---

## Blog posts

1. Open **Collections → Posts**.
2. Click a post or **Create New**.
3. Edit title, abstract, category, author, date, and optional **body** (rich text).
4. Save — the post appears on `/blog` and its own URL `/blog/your-slug`.
5. If **body** is empty, the original article text remains on the site until you add content.

### Scheduling Posts

- Set a future **Publish Date** to schedule a post
- Posts publish automatically within 6 hours of the scheduled time
- Draft posts are not visible on the public site

---

## Media library

1. Open **Collections → Media**.
2. Upload images (add **alt text** for accessibility).
3. Use uploads in globals (e.g. Home hero slides, Site Settings logo).

In production, files are stored on **Vercel Blob** (not on the server disk).

---

## Manage leads (CRM)

Every contact, booking, and partner form submission is saved as a **Lead**.

1. Open **Collections → Leads**.
2. Review the list — name, email, message preview, status, and form type.
3. Open a lead to update **status** (New → Contacted → Qualified → Won / Lost), add **notes**, or assign a team member.
4. Use search to find leads by name, email, or message.

---

## User Roles & Permissions

### Admin
- Full access to all features
- Can create/edit/delete users
- Can access system settings
- Can export/backup data

### Editor
- Edit all page content
- Manage blog posts (create, edit, delete)
- Manage and respond to leads
- Moderate comments
- Upload media

### Author
- Create and edit own blog posts
- Upload media for posts
- Cannot edit page globals

### Viewer
- Read-only access
- Cannot make changes
- Useful for stakeholders who need visibility

---

## Email Notifications

The site sends emails for:
- New contact form submissions
- New leads (when enabled in Site Settings)
- New comments (when enabled in Site Settings)

To configure:
1. Go to Site Settings > Notifications
2. Enable the notifications you want
3. Add email addresses to receive notifications

---

## Features Visible in Admin But Not Live

The following collections exist in the admin but are not connected to the live site yet:

- **Menus** - Navigation is managed in Site Settings
- **Popups** - Not currently displayed on site
- **Forms/FormSubmissions** - Forms are hardcoded
- **Comments** - No public comment form on blog
- **Testimonials collection** - Use inline testimonials in page globals

If you need these features, contact your developer.

---

## Need help?

Contact your TheAgileNest developer for new pages, design changes, or admin account setup.
