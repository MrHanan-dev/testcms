"use client";

import { createContext, useContext } from "react";

/**
 * Makes the editable site-wide settings (logo, contact, socials) available to
 * client components like the Header/Footer, which are rendered per-page. The
 * server layout fetches the values once and provides them here.
 */
export type SiteSettingsValue = {
  logoUrl?: string | null;
  companyName?: string | null;
  phone?: string | null;
  email?: string | null;
  whatsapp?: string | null;
};

const SiteSettingsContext = createContext<SiteSettingsValue>({});

export function SiteSettingsProvider({
  value,
  children,
}: {
  value: SiteSettingsValue;
  children: React.ReactNode;
}) {
  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

export const useSiteSettings = () => useContext(SiteSettingsContext);
