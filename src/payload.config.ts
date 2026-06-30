import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Posts } from "./collections/Posts";
import { Leads } from "./collections/Leads";
import { Tags } from "./collections/Tags";
import { ActivityLog } from "./collections/ActivityLog";
import { Comments } from "./collections/Comments";
import { Redirects } from "./collections/Redirects";
import { Forms } from "./collections/Forms";
import { FormSubmissions } from "./collections/FormSubmissions";
import { Testimonials } from "./collections/Testimonials";
import { TeamMembers } from "./collections/TeamMembers";
import { Galleries } from "./collections/Galleries";
import { Faqs } from "./collections/Faqs";
import { Popups } from "./collections/Popups";
import { Sliders } from "./collections/Sliders";
import { PricingPlans } from "./collections/PricingPlans";
import { Menus } from "./collections/Menus";
import { SiteSettings } from "./globals/SiteSettings";
import { Home } from "./globals/Home";
import { About } from "./globals/About";
import { Consulting } from "./globals/Consulting";
import { ProjectManagement } from "./globals/ProjectManagement";
import { CostEstimation } from "./globals/CostEstimation";
import { ContractManagement } from "./globals/ContractManagement";
import { Training } from "./globals/Training";
import { Pmp } from "./globals/Pmp";
import { Capm } from "./globals/Capm";
import { PmiCp } from "./globals/PmiCp";
import { Partner } from "./globals/Partner";
import { Privacy } from "./globals/Privacy";
import { Terms } from "./globals/Terms";
import { Appearance } from "./globals/Appearance";
import { CustomCode } from "./globals/CustomCode";
import { ReadingSettings } from "./globals/ReadingSettings";
import {
  revalidateCmsPagePaths,
  revalidateMediaPaths,
  revalidatePostPaths,
} from "./lib/cmsRevalidate";
import { withCollectionRevalidation, withGlobalRevalidation } from "./lib/withCmsHooks";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const blobPlugins = process.env.BLOB_READ_WRITE_TOKEN
  ? [
      vercelBlobStorage({
        collections: {
          media: {
            prefix: "media",
            // Serve images directly from Vercel Blob CDN rather than proxying
            // through /api/media/file/. Hostinger cannot reach blob.vercel-storage.com
            // (the SDK's management API), so the proxy handler always times out.
            // With this flag the afterRead hook returns the public CDN URL directly.
            disablePayloadAccessControl: true,
          },
        },
        token: process.env.BLOB_READ_WRITE_TOKEN,
        clientUploads: true,
      }),
    ]
  : [];

const globals = withGlobalRevalidation([
  SiteSettings,
  Appearance,
  CustomCode,
  ReadingSettings,
  Home,
  About,
  Consulting,
  ProjectManagement,
  CostEstimation,
  ContractManagement,
  Training,
  Pmp,
  Capm,
  PmiCp,
  Partner,
  Privacy,
  Terms,
]);

const collections = [
  withCollectionRevalidation(Pages, [revalidateCmsPagePaths]),
  withCollectionRevalidation(Posts, [revalidatePostPaths]),
  Tags,
  Comments,
  Redirects,
  Forms,
  FormSubmissions,
  Testimonials,
  TeamMembers,
  Galleries,
  Faqs,
  Popups,
  Sliders,
  PricingPlans,
  Menus,
  Leads,
  Users,
  ActivityLog,
  withCollectionRevalidation(Media, [revalidateMediaPaths]),
];

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
  collections,
  globals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  plugins: blobPlugins,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    // Schema is already synced — avoid slow Drizzle push on every dev server boot (Neon).
    push: process.env.PAYLOAD_DB_PUSH === "true",
    pool: {
      // pg v9 treats sslmode=require as verify-full today; set explicitly to avoid Node warning.
      connectionString: (process.env.DATABASE_URI || "").replace(
        /\bsslmode=(require|prefer|verify-ca)\b/,
        "sslmode=verify-full",
      ),
      max: 10,
      idleTimeoutMillis: 20_000,
      connectionTimeoutMillis: 15_000,
    },
  }),
  // Sharp powers image resizing for the media library.
  sharp,
});
