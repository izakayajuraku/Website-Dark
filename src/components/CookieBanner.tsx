"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const STORAGE_KEY = "juraku-cookie-consent";

export function CookieBanner() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-ink/80 bg-void text-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="text-sm text-ink/80">{t("cookies.message")}</p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full border-2 border-gold px-4 py-1.5 font-display text-sm tracking-wide text-gold transition hover:bg-gold hover:text-ink"
        >
          {t("cookies.accept")}
        </button>
      </div>
    </div>
  );
}
