import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Shared artwork behind every interior page header. Pass `image` on an
 * individual page to override it, or `image={null}` to fall back to the
 * kanji watermark instead.
 */
const DEFAULT_HEADER_IMAGE = {
  src: "/images/yokai-matcha-bomb.png",
  alt: "",
};

/**
 * Shared header band for interior pages.
 *
 * The home page carries the site's one big expressive moment; these headers
 * are the step down from it — same dark manga language (red edge, screentone,
 * sign glow) but quieter, so pages get calmer as you move inward.
 *
 * Depth comes from type and texture, not new artwork: `mark` sets an oversized
 * kanji watermark behind the title. It is purely decorative — aria-hidden, low
 * opacity, and never carrying information the heading doesn't already state.
 */
export function PageHeader({
  pretitle,
  title,
  mark,
  image,
  children,
}: {
  pretitle?: string;
  title: string;
  /** Single kanji/short word used as the decorative watermark. */
  mark?: string;
  /**
   * Real Juraku artwork or photography behind the header. Use this instead of
   * stacking a separate full-width image band above the header — one visual
   * moment per page, not two. The watermark is dropped when an image is set.
   */
  image?: { src: string; alt?: string } | null;
  /** Optional lede paragraph under the title. */
  children?: ReactNode;
}) {
  const art = image === undefined ? DEFAULT_HEADER_IMAGE : image;

  return (
    <section className="page-header">
      {art ? (
        <>
          <Image
            src={art.src}
            alt={art.alt ?? ""}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          {/* Heavy scrim: the copy must never sit on raw artwork. */}
          <div aria-hidden className="page-header-scrim" />
        </>
      ) : (
        mark && (
          <span aria-hidden className="page-header-mark">
            {mark}
          </span>
        )
      )}
      <div aria-hidden className="page-header-glow" />
      <div aria-hidden className="screentone absolute inset-0" />

      <div className="relative mx-auto max-w-3xl px-4 py-9 text-center sm:px-6 sm:py-11">
        {/* The pretitle is Japanese on every page, in both locales, so it
            needs the JP face — the Latin display font has no kana or kanji
            and silently falls back to whatever the OS provides. */}
        {pretitle && (
          <p className="font-jp text-sm tracking-widest text-ember">
            {pretitle}
          </p>
        )}
        <h1 className="mt-2 font-display text-3xl leading-[1.05] tracking-wide text-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <span aria-hidden className="mx-auto mt-4 block h-[3px] w-12 bg-red" />
        {children && (
          <div className="mx-auto mt-4 max-w-xl text-[0.9375rem] text-ink/85">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
