"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import DynamicForm from "./DynamicForm";

export type CmsPopup = {
  id: string;
  title?: string;
  type?: string;
  heading?: string;
  content?: SerializedEditorState;
  imageUrl?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  showForm?: boolean;
  formId?: string;
  trigger?: string;
  delaySeconds?: number;
  scrollPercentage?: number;
  clickSelector?: string;
  showOnPages?: string[];
  excludePages?: string;
  showOnMobile?: boolean;
};

type Props = {
  popups: CmsPopup[];
  pathname: string;
};

function pageMatches(popup: CmsPopup, pathname: string): boolean {
  const excludes = (popup.excludePages ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (excludes.some((ex) => pathname.startsWith(ex))) return false;

  const targets = popup.showOnPages ?? ["all"];
  if (targets.includes("all")) return true;
  if (targets.includes("home") && pathname === "/") return true;
  if (targets.includes("blog") && pathname.startsWith("/blog")) return true;
  if (targets.includes("training") && pathname.startsWith("/training")) return true;
  if (
    targets.includes("certification") &&
    (pathname.startsWith("/pmp") || pathname.startsWith("/capm") || pathname.startsWith("/pmicp"))
  ) {
    return true;
  }
  return false;
}

export default function PopupManager({ popups, pathname }: Props) {
  const eligible = useMemo(
    () => popups.filter((p) => pageMatches(p, pathname)),
    [popups, pathname],
  );

  const [visibleId, setVisibleId] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!eligible.length) return;

    const showPopup = (popup: CmsPopup) => {
      if (dismissed.has(popup.id)) return;
      const key = `popup_seen_${popup.id}`;
      if (typeof window !== "undefined" && sessionStorage.getItem(key)) return;
      setVisibleId(popup.id);
      sessionStorage.setItem(key, "1");
    };

    for (const popup of eligible) {
      const trigger = popup.trigger ?? "delay";
      if (trigger === "load") {
        showPopup(popup);
        break;
      }
      if (trigger === "delay") {
        const ms = (popup.delaySeconds ?? 5) * 1000;
        const t = window.setTimeout(() => showPopup(popup), ms);
        return () => window.clearTimeout(t);
      }
      if (trigger === "scroll") {
        const onScroll = () => {
          const pct =
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
          if (pct >= (popup.scrollPercentage ?? 50)) {
            showPopup(popup);
            window.removeEventListener("scroll", onScroll);
          }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
      }
      if (trigger === "click" && popup.clickSelector) {
        const nodes = document.querySelectorAll(popup.clickSelector);
        const handler = () => showPopup(popup);
        nodes.forEach((n) => n.addEventListener("click", handler));
        return () => nodes.forEach((n) => n.removeEventListener("click", handler));
      }
    }
  }, [eligible, dismissed]);

  const popup = eligible.find((p) => p.id === visibleId);
  if (!popup) return null;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  if (popup.showOnMobile === false && isMobile) return null;

  const type = popup.type ?? "modal";
  const positionClass =
    type === "slidein"
      ? "fixed bottom-6 right-6 max-w-md"
      : type === "banner"
        ? "fixed top-0 left-0 right-0"
        : type === "fullscreen"
          ? "fixed inset-0"
          : "fixed inset-0 flex items-center justify-center p-4";

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label={popup.heading ?? popup.title ?? "Popup"}>
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close popup overlay"
        onClick={() => {
          setDismissed((s) => new Set(s).add(popup.id));
          setVisibleId(null);
        }}
      />
      <div className={`${positionClass} z-[101]`}>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full mx-auto relative">
          <button
            type="button"
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-slate-100"
            aria-label="Close popup"
            onClick={() => {
              setDismissed((s) => new Set(s).add(popup.id));
              setVisibleId(null);
            }}
          >
            <X size={18} />
          </button>
          {popup.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={popup.imageUrl} alt="" className="w-full h-40 object-cover" />
          )}
          <div className="p-6 space-y-4">
            {popup.heading && <h3 className="text-xl font-black text-primary pr-8">{popup.heading}</h3>}
            {popup.content && (
              <div className="prose prose-sm max-w-none text-slate-600">
                <RichText data={popup.content} />
              </div>
            )}
            {popup.showForm && popup.formId ? (
              <DynamicForm
                formId={popup.formId}
                submitButtonText="Submit"
                successTitle="Submitted"
                successMessage="Thank you!"
              />
            ) : null}
            <div className="flex flex-wrap gap-3 pt-2">
              {popup.primaryButtonText && (
                <Link href={popup.primaryButtonUrl ?? "#"} className="btn-primary px-5 py-2.5 text-sm">
                  {popup.primaryButtonText}
                </Link>
              )}
              {popup.secondaryButtonText && (
                <Link href={popup.secondaryButtonUrl ?? "#"} className="text-primary font-bold text-sm hover:underline">
                  {popup.secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
