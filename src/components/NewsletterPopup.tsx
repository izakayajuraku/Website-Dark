"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { SITE } from "@/lib/site";

const STORAGE_KEY = "juraku-newsletter-popup-seen";

export function NewsletterPopup() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(id);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center bg-void/75 p-4 sm:items-center"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-sm rounded-lg border-2 border-ink bg-paper p-6 text-center shadow-[6px_6px_0_0_var(--ink)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={dismiss}
          className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-paper text-lg leading-none text-ink shadow-[2px_2px_0_0_var(--ink)] transition hover:bg-ink hover:text-paper"
        >
          ×
        </button>
        <p className="font-display text-2xl tracking-wide">
          {t("blog.newsletterHeading")}
        </p>
        <p className="mt-2 text-sm text-ink/70">
          {t("blog.newsletterSubtitle")}
        </p>
        <a
          href={SITE.links.newsletter}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          className="mt-5 inline-block rounded-full border-2 border-ink bg-red px-6 py-2 font-display tracking-wide text-ink transition hover:bg-red-dark"
        >
          {t("blog.newsletterCta")}
        </a>
      </div>
    </div>
  );
}
