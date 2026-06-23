"use client";

import { createContext, useContext } from "react";
import type { ResolvedSiteSettings } from "@/lib/resolveSiteSettings";

/**
 * Makes editable site-wide settings (logo, nav, footer) available to client
 * components like Header/Footer. The server layout fetches once and provides here.
 */
export type SiteSettingsValue = ResolvedSiteSettings;

const SiteSettingsContext = createContext<SiteSettingsValue | null>(null);

export function SiteSettingsProvider({
  value,
  children,
}: {
  value: SiteSettingsValue;
  children: React.ReactNode;
}) {
  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

export const useSiteSettings = (): SiteSettingsValue => {
  const ctx = useContext(SiteSettingsContext);
  if (!ctx) {
    throw new Error("useSiteSettings must be used within SiteSettingsProvider");
  }
  return ctx;
};
