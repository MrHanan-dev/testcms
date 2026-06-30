"use client";

import { usePathname } from "next/navigation";
import PopupManager, { type CmsPopup } from "./PopupManager";

export default function CmsUiLayer({ popups }: { popups: CmsPopup[] }) {
  const pathname = usePathname() ?? "/";
  if (!popups.length) return null;
  return <PopupManager popups={popups} pathname={pathname} />;
}
