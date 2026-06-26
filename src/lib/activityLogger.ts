import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from "payload";

/**
 * Activity Logger — Automatically tracks all content changes in the CMS.
 * Records creates, updates, deletes, and publishes.
 */

type ActivityAction = "create" | "update" | "delete" | "publish" | "unpublish" | "login" | "logout";

interface LogActivityParams {
  payload: any;
  action: ActivityAction;
  collection: string;
  documentId?: string;
  documentTitle?: string;
  user?: any;
  changes?: Record<string, any>;
}

const SENSITIVE_FIELDS = new Set([
  "password",
  "hash",
  "salt",
  "resetPasswordToken",
  "resetPasswordExpiration",
]);

function sanitizeDoc(doc: Record<string, unknown> | null | undefined) {
  if (!doc || typeof doc !== "object") return doc;
  const copy = { ...doc };
  for (const key of SENSITIVE_FIELDS) {
    if (key in copy) copy[key] = "[redacted]";
  }
  return copy;
}

export async function logActivity({
  payload,
  action,
  collection,
  documentId,
  documentTitle,
  user,
  changes,
}: LogActivityParams) {
  try {
    await payload.create({
      collection: "activity-log",
      data: {
        action,
        collection,
        documentId: documentId || "",
        documentTitle: documentTitle || "Untitled",
        user: user?.id || null,
        changes: changes || null,
      },
      overrideAccess: true,
    });
  } catch (error) {
    // Silently fail - don't break the main operation
    console.error("Failed to log activity:", error);
  }
}

/**
 * Collection hook to log creates and updates
 */
export const logCollectionChange: CollectionAfterChangeHook = async ({
  doc,
  req,
  operation,
  collection,
  previousDoc,
}) => {
  if (req.context?.disableActivityLog) return doc;

  const { payload, user } = req;

  // Never block the main write — Neon pooler idle-in-transaction timeouts on nested creates.
  let action: ActivityAction = operation;
  if (previousDoc?.status !== doc.status) {
    if (doc.status === "published") action = "publish";
    else if (previousDoc?.status === "published") action = "unpublish";
  }

  const titleField = collection?.admin?.useAsTitle || "title";
  const documentTitle = doc[titleField] || doc.name || doc.title || "Untitled";

  void logActivity({
    payload,
    action,
    collection: collection?.slug || "unknown",
    documentId: doc.id?.toString(),
    documentTitle,
    user,
    changes:
      operation === "update"
        ? {
            previous: sanitizeDoc(previousDoc as Record<string, unknown>),
            current: sanitizeDoc(doc as Record<string, unknown>),
          }
        : undefined,
  }).catch((error) => console.error("Failed to log activity:", error));

  return doc;
};

/**
 * Collection hook to log deletes
 */
export const logCollectionDelete: CollectionAfterDeleteHook = async ({
  doc,
  req,
  collection,
}) => {
  const { payload, user } = req;
  
  const titleField = collection?.admin?.useAsTitle || "title";
  const documentTitle = doc[titleField] || doc.name || doc.title || "Untitled";

  void logActivity({
    payload,
    action: "delete",
    collection: collection?.slug || "unknown",
    documentId: doc.id?.toString(),
    documentTitle,
    user,
  }).catch((error) => console.error("Failed to log activity:", error));

  return doc;
};

/**
 * Global hook to log changes
 */
export const logGlobalChange: GlobalAfterChangeHook = async ({
  doc,
  req,
  global,
  previousDoc,
}) => {
  const { payload, user } = req;

  void logActivity({
    payload,
    action: "update",
    collection: global?.slug || "global",
    documentId: global?.slug,
    documentTitle: global?.label?.toString() || global?.slug || "Global",
    user,
    changes: {
      previous: sanitizeDoc(previousDoc as Record<string, unknown>),
      current: sanitizeDoc(doc as Record<string, unknown>),
    },
  }).catch((error) => console.error("Failed to log activity:", error));

  return doc;
};
