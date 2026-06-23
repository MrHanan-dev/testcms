import { revalidatePath } from "next/cache";
import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from "payload";

/** Frontend paths to refresh when a global is saved in the CMS. */
const GLOBAL_PATHS: Record<string, string[]> = {
  siteSettings: ["/"],
  home: ["/"],
  about: ["/about"],
  consultingPage: ["/consulting"],
  projectManagementPage: ["/project-management"],
  costEstimationPage: ["/cost-estimation"],
  contractManagementPage: ["/contract-management"],
  trainingPage: ["/training"],
  pmpPage: ["/pmp"],
  capmPage: ["/capm"],
  pmicpPage: ["/pmicp"],
  partnerPage: ["/partner"],
};

const revalidate = (paths: string[]) => {
  for (const path of paths) {
    if (path === "/") {
      revalidatePath("/", "layout");
    } else {
      revalidatePath(path);
    }
  }
};

/** Attach to globals so edits go live without redeploying. */
export const revalidateGlobalPaths: GlobalAfterChangeHook = ({ global }) => {
  const paths = GLOBAL_PATHS[global.slug];
  if (paths) revalidate(paths);
  return undefined;
};

/** Blog post saved — refresh listing and the post page. */
export const revalidatePostPaths: CollectionAfterChangeHook = ({ doc }) => {
  const slug = typeof doc.slug === "string" ? doc.slug : "";
  revalidate(["/blog", ...(slug ? [`/blog/${slug}`] : [])]);
  return doc;
};

/** CMS page-builder page saved. */
export const revalidateCmsPagePaths: CollectionAfterChangeHook = ({ doc }) => {
  const slug = typeof doc.slug === "string" ? doc.slug : "";
  if (slug) revalidate([`/p/${slug}`]);
  return doc;
};

/** Media upload — logo and hero images can appear site-wide. */
export const revalidateMediaPaths: CollectionAfterChangeHook = ({ doc }) => {
  revalidatePath("/", "layout");
  return doc;
};
