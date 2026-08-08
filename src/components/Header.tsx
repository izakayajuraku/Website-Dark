"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { NAV_TILES, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const otherLocale = locale === "en" ? "ja" : "en";

  return (
    <header className="sticky top-0 z-40 border-b-2 border-red bg-paper/95 backdrop-blur">
      <div className="border-b border-ink/10 bg-void text-ink">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-4 py-1.5 text-xs sm:px-6">
          <a
            href={SITE.links.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-wide text-ink/80 hover:text-ember"
          >
            {t("nav.giftCards")}
          </a>
          <span aria-hidden className="text-ink/30">
            ·
          </span>
          <a
            href={SITE.links.rewards}
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-wide text-ink/80 hover:text-ember"
          >
            {t("nav.rewards")}
          </a>
          <span aria-hidden className="text-ink/30">
            ·
          </span>
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: otherLocale })}
            className="tracking-wide text-ink/80 hover:text-ember"
          >
            {t("language.switchTo")}
          </button>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="logo-lantern">
            <Image
              src="/images/logo-icon.png"
              alt=""
              width={5230}
              height={5920}
              className="h-11 w-auto object-contain sm:h-12"
              priority
            />
          </span>
          <Image
            src="/images/logo-wordmark.png"
            alt="Izakaya Juraku"
            width={1631}
            height={201}
            className="h-5 w-auto object-contain sm:h-6"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {NAV_TILES.map((tile) =>
            tile.external ? (
              <a
                key={tile.key}
                href={tile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg tracking-wide text-ink/85 transition hover:text-ember"
              >
                {t(`nav.${tile.key}`)}
              </a>
            ) : (
              <Link
                key={tile.key}
                href={tile.href}
                className="font-display text-lg tracking-wide text-ink/85 transition hover:text-ember"
              >
                {t(`nav.${tile.key}`)}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.links.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border-2 border-ink px-3 py-1.5 font-display text-xs tracking-wide text-ink transition hover:bg-ink hover:text-paper sm:inline-block sm:px-4 sm:text-sm"
          >
            {t("nav.reserve")}
          </a>
          <a
            href={SITE.links.order}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-ink bg-red px-3 py-1.5 font-display text-xs tracking-wide text-paper transition hover:bg-red-dark sm:px-4 sm:text-sm"
          >
            {t("nav.orderDirect")}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded border-2 border-ink md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-ink/15 bg-paper md:hidden">
          <div className="mx-auto flex max-w-6xl gap-2 px-4 pt-3 sm:px-6">
            <a
              href={SITE.links.reserve}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border-2 border-ink py-2 text-center font-display text-sm tracking-wide text-ink"
            >
              {t("nav.reserveFull")}
            </a>
          </div>
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {NAV_TILES.map((tile) => (
              <li key={tile.key}>
                {tile.external ? (
                  <a
                    href={tile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink/10 py-3 font-display text-xl tracking-wide text-ink"
                  >
                    {t(`nav.${tile.key}`)}
                    <span className="ml-2 font-jp text-sm text-ink/60">
                      {locale === "ja" ? tile.en : tile.ja}
                    </span>
                  </a>
                ) : (
                  <Link
                    href={tile.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink/10 py-3 font-display text-xl tracking-wide text-ink"
                  >
                    {t(`nav.${tile.key}`)}
                    <span className="ml-2 font-jp text-sm text-ink/60">
                      {locale === "ja" ? tile.en : tile.ja}
                    </span>
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href={SITE.links.giftCards}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-3 font-display text-xl tracking-wide text-ink"
              >
                {t("nav.giftCards")}
              </a>
            </li>
            <li>
              <a
                href={SITE.links.rewards}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-xl tracking-wide text-ink"
              >
                {t("nav.rewards")}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
