import type { CollectionConfig, GlobalConfig } from "payload";
import { revalidateGlobalPaths } from "@/lib/cmsRevalidate";

/** Merge revalidation hooks into each global without editing every schema file. */
export function withGlobalRevalidation(globals: GlobalConfig[]): GlobalConfig[] {
  return globals.map((global) => ({
    ...global,
    hooks: {
      ...global.hooks,
      afterChange: [...(global.hooks?.afterChange ?? []), revalidateGlobalPaths],
    },
  }));
}

/** Merge revalidation hooks into a collection config. */
export function withCollectionRevalidation(
  collection: CollectionConfig,
  afterChange: NonNullable<CollectionConfig["hooks"]>["afterChange"],
): CollectionConfig {
  return {
    ...collection,
    hooks: {
      ...collection.hooks,
      afterChange: [...(collection.hooks?.afterChange ?? []), ...(afterChange ?? [])],
    },
  };
}
