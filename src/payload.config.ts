import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Leads } from "./collections/Leads";
import { SiteSettings } from "./globals/SiteSettings";
import { Home } from "./globals/Home";
import { About } from "./globals/About";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Payload CMS configuration — the WordPress-like admin for the whole site.
 *
 * Phase 0 (this commit) stands up the foundation: Postgres (Neon) connection,
 * authentication (Users), and a Media library, with the admin served at /admin
 * inside this same Next.js app. Page-builder blocks, the blog, and the CRM
 * collections are layered on in later phases.
 */
export default buildConfig({
  admin: {
    user: Users.slug,
    // Resolve custom admin component paths relative to /src.
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " — TheAgileNest CMS",
      icons: [{ rel: "icon", url: "/favicon.png" }],
    },
    components: {
      graphics: {
        Logo: "/components/payload/Brand#Logo",
        Icon: "/components/payload/Brand#Icon",
      },
      // Branded CRM summary at the top of the admin dashboard.
      beforeDashboard: ["/components/payload/CrmDashboard#CrmDashboard"],
    },
  },
  collections: [Pages, Leads, Users, Media],
  globals: [SiteSettings, Home, About],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  // Sharp powers image resizing for the media library.
  sharp,
});
