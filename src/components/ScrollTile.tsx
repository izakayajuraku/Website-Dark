import { Link } from "@/i18n/navigation";

function Rod() {
  return (
    <div className="relative h-3 rounded-full bg-[#3d2b1f]">
      <span className="absolute -left-1.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#3d2b1f]" />
      <span className="absolute -right-1.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#3d2b1f]" />
    </div>
  );
}

function TileContents({
  jp,
  label,
  blurb,
}: {
  jp: string;
  label: string;
  blurb: string;
}) {
  return (
    <>
      {/* hanging cord */}
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 h-4 w-6 -translate-x-1/2 rounded-t-full border-2 border-b-0 border-ink/70"
      />
      <Rod />
      <span aria-hidden className="block h-1.5 bg-gold/70" />
      <div className="flex flex-1 flex-col items-center bg-card px-4 pb-5 pt-6 text-center">
        <span className="font-jp text-xs text-ink/60">{jp}</span>
        <span className="mt-1 font-display text-2xl tracking-wide text-ink group-hover:text-neon">
          {label}
        </span>
        <span className="mt-2 text-xs leading-snug text-ink/70">{blurb}</span>
      </div>
      <span aria-hidden className="block h-1.5 bg-gold/70" />
      <Rod />
    </>
  );
}

const tileClass =
  "group relative flex flex-col overflow-visible shadow-[4px_4px_0_0_rgba(36,26,18,0.35)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(36,26,18,0.35)]";

export function ScrollTile({
  label,
  jp,
  blurb,
  href,
  external,
}: {
  label: string;
  jp: string;
  blurb: string;
  href: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={tileClass}
      >
        <TileContents jp={jp} label={label} blurb={blurb} />
      </a>
    );
  }

  return (
    <Link href={href} className={tileClass}>
      <TileContents jp={jp} label={label} blurb={blurb} />
    </Link>
  );
}
