import { getPayload } from "payload";
import config from "@payload-config";

export type AuditStatus = "pass" | "warn" | "fail";

export interface AuditItem {
  area: string;
  name: string;
  status: AuditStatus;
  message: string;
  ms?: number;
  meta?: Record<string, unknown>;
}

const COLLECTIONS = [
  "users",
  "media",
  "pages",
  "posts",
  "tags",
  "comments",
  "redirects",
  "forms",
  "form-submissions",
  "testimonials",
  "team-members",
  "galleries",
  "faqs",
  "popups",
  "sliders",
  "pricing-plans",
  "menus",
  "leads",
  "activity-log",
] as const;

const GLOBALS = [
  "siteSettings",
  "appearance",
  "customCode",
  "readingSettings",
  "home",
  "about",
  "consultingPage",
  "projectManagementPage",
  "costEstimationPage",
  "contractManagementPage",
  "trainingPage",
  "pmpPage",
  "capmPage",
  "pmicpPage",
  "partnerPage",
  "privacyPage",
  "termsPage",
] as const;

async function timed<T>(fn: () => Promise<T>): Promise<{ result: T; ms: number }> {
  const start = performance.now();
  const result = await fn();
  return { result, ms: Math.round(performance.now() - start) };
}

export async function runCmsAudit(): Promise<{
  status: AuditStatus;
  timestamp: string;
  summary: { pass: number; warn: number; fail: number; total: number };
  items: AuditItem[];
}> {
  const items: AuditItem[] = [];
  let payload: Awaited<ReturnType<typeof getPayload>>;

  try {
    const boot = await timed(() => getPayload({ config }));
    payload = boot.result;
    items.push({
      area: "core",
      name: "Payload bootstrap",
      status: boot.ms > 10_000 ? "warn" : "pass",
      message: boot.ms > 10_000 ? "Slow Payload init — check Neon connection" : "Payload initialized",
      ms: boot.ms,
    });
  } catch (error) {
    items.push({
      area: "core",
      name: "Payload bootstrap",
      status: "fail",
      message: String(error),
    });
    return finalize(items);
  }

  // Collections — count + schema access
  await Promise.all(
    COLLECTIONS.map(async (slug) => {
      try {
        const { result, ms } = await timed(() =>
          payload.count({ collection: slug, overrideAccess: true }),
        );
        items.push({
          area: "collection",
          name: slug,
          status: ms > 5000 ? "warn" : "pass",
          message: `${result.totalDocs} document(s)`,
          ms,
          meta: { count: result.totalDocs },
        });
      } catch (error) {
        items.push({
          area: "collection",
          name: slug,
          status: "fail",
          message: String(error),
        });
      }
    }),
  );

  // Globals — read access
  await Promise.all(
    GLOBALS.map(async (slug) => {
      try {
        const { result, ms } = await timed(() =>
          payload.findGlobal({ slug, overrideAccess: true, depth: 0 }),
        );
        const hasData = result && Object.keys(result).length > 2;
        items.push({
          area: "global",
          name: slug,
          status: hasData ? "pass" : "warn",
          message: hasData ? "Global readable" : "Global empty — seed or fill in admin",
          ms,
        });
      } catch (error) {
        items.push({
          area: "global",
          name: slug,
          status: "fail",
          message: String(error),
        });
      }
    }),
  );

  // Auth & admin
  try {
    const { result, ms } = await timed(() =>
      payload.count({
        collection: "users",
        where: { role: { equals: "admin" } },
        overrideAccess: true,
      }),
    );
    items.push({
      area: "auth",
      name: "Admin users",
      status: result.totalDocs > 0 ? "pass" : "fail",
      message: `${result.totalDocs} admin user(s)`,
      ms,
    });
  } catch (error) {
    items.push({
      area: "auth",
      name: "Admin users",
      status: "fail",
      message: String(error),
    });
  }

  // Environment
  const envChecks: { key: string; required?: boolean }[] = [
    { key: "DATABASE_URI", required: true },
    { key: "PAYLOAD_SECRET", required: true },
    { key: "NEXT_PUBLIC_SITE_URL" },
    { key: "BLOB_READ_WRITE_TOKEN" },
    { key: "CRON_SECRET" },
    { key: "GMAIL_USER" },
    { key: "GMAIL_APP_PASSWORD" },
    { key: "RESEND_API_KEY" },
  ];

  for (const { key, required } of envChecks) {
    const set = Boolean(process.env[key]);
    items.push({
      area: "env",
      name: key,
      status: set ? "pass" : required ? "fail" : "warn",
      message: set ? "Set" : required ? "Missing (required)" : "Not set (optional)",
    });
  }

  // Feature checks
  items.push({
    area: "feature",
    name: "Media storage",
    status: process.env.BLOB_READ_WRITE_TOKEN ? "pass" : "warn",
    message: process.env.BLOB_READ_WRITE_TOKEN
      ? "Vercel Blob configured"
      : "Local storage only — add BLOB_READ_WRITE_TOKEN for production",
  });

  items.push({
    area: "feature",
    name: "Email (forms)",
    status:
      process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD
        ? "pass"
        : process.env.RESEND_API_KEY
          ? "pass"
          : "warn",
    message:
      process.env.GMAIL_USER || process.env.RESEND_API_KEY
        ? "Email provider configured"
        : "Contact/booking forms won't send email until configured",
  });

  items.push({
    area: "feature",
    name: "DB schema push",
    status: process.env.PAYLOAD_DB_PUSH === "true" ? "warn" : "pass",
    message:
      process.env.PAYLOAD_DB_PUSH === "true"
        ? "PAYLOAD_DB_PUSH=true slows dev boot — disable after schema sync"
        : "Schema push disabled (recommended)",
  });

  items.push({
    area: "feature",
    name: "Dev bundler",
    status: "pass",
    message: "Use npm run dev (webpack) — Turbopack breaks Payload admin chunks",
  });

  return finalize(items);
}

function finalize(items: AuditItem[]) {
  const summary = {
    pass: items.filter((i) => i.status === "pass").length,
    warn: items.filter((i) => i.status === "warn").length,
    fail: items.filter((i) => i.status === "fail").length,
    total: items.length,
  };

  const status: AuditStatus =
    summary.fail > 0 ? "fail" : summary.warn > 0 ? "warn" : "pass";

  return {
    status,
    timestamp: new Date().toISOString(),
    summary,
    items,
  };
}
