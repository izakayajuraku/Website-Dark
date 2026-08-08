import Image from "next/image";
import { Link } from "@/i18n/navigation";

/**
 * One of the six exploratory navigation destinations.
 *
 * These are PLACEHOLDERS. Each will be replaced by a custom illustrated
 * chochin (提灯) lantern supplied by the artist. When that art lands:
 *
 *   1. Drop the transparent PNG in /public/images/lanterns/ and set the
 *      `lantern` field on the matching entry in NAV_TILES (src/lib/site.ts).
 *   2. Nothing else changes — the branch below already renders the art with
 *      the label and blurb as live HTML positioned over it.
 *
 * Navigation text is deliberately NOT baked into the artwork: it has to stay
 * selectable, translatable (EN/JA), and readable by screen readers.
 */

function TileText({
  jp,
  label,
  blurb,
  overArt,
}: {
  jp: string;
  label: string;
  blurb: string;
  overArt?: boolean;
}) {
  return (
    <>
      <span className="font-jp text-xs text-ink/60">{jp}</span>
      <span
        className={`mt-1 font-display text-2xl leading-tight tracking-wide transition group-hover:text-ember ${
          overArt ? "text-ink [text-shadow:0_2px_6px_rgba(0,0,0,0.9)]" : "text-ink"
        }`}
      >
        {label}
      </span>
      <span
        className={`mt-2 text-xs leading-relaxed text-ink/75 ${
          overArt ? "[text-shadow:0_1px_4px_rgba(0,0,0,0.95)]" : ""
        }`}
      >
        {blurb}
      </span>
    </>
  );
}

function TileContents({
  jp,
  label,
  blurb,
  lantern,
}: {
  jp: string;
  label: string;
  blurb: string;
  lantern?: string;
}) {
  // Final state: illustrated lantern as a transparent asset, live text over it.
  if (lantern) {
    return (
      <div className="relative flex flex-1 flex-col items-center justify-end">
        <Image
          src={lantern}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
          className="pointer-events-none object-contain transition-transform duration-300 group-hover:-translate-y-1"
        />
        <div className="relative flex flex-col items-center px-3 pb-5 pt-24 text-center">
          <TileText jp={jp} label={label} blurb={blurb} overArt />
        </div>
      </div>
    );
  }

  // Placeholder: a plain panel that holds the layout without pretending to
  // be artwork. Intentionally quiet so it doesn't compete with the hero.
  return (
    <div className="flex flex-1 flex-col items-center border-2 border-ink/15 bg-card px-4 pb-6 pt-5 text-center transition group-hover:border-red">
      <TileText jp={jp} label={label} blurb={blurb} />
    </div>
  );
}

const tileClass =
  "group relative flex min-h-[9.5rem] flex-col transition duration-200 hover:-translate-y-1";

export function ScrollTile({
  label,
  jp,
  blurb,
  href,
  external,
  lantern,
}: {
  label: string;
  jp: string;
  blurb: string;
  href: string;
  external?: boolean;
  lantern?: string;
}) {
  const contents = (
    <TileContents jp={jp} label={label} blurb={blurb} lantern={lantern} />
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={tileClass}
      >
        {contents}
      </a>
    );
  }

  return (
    <Link href={href} className={tileClass}>
      {contents}
    </Link>
  );
}
