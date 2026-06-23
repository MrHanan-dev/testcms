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
        collections: { media: { prefix: "media" } },
        token: process.env.BLOB_READ_WRITE_TOKEN,
        clientUploads: true,
      }),
    ]
  : [];

const globals = withGlobalRevalidation([
  SiteSettings,
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
]);

const collections = [
  withCollectionRevalidation(Pages, [revalidateCmsPagePaths]),
  withCollectionRevalidation(Posts, [revalidatePostPaths]),
  Leads,
  Users,
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
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  // Sharp powers image resizing for the media library.
  sharp,
});
