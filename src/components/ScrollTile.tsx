import { Link } from "@/i18n/navigation";

/* Scroll rod, kept structurally so these can become chochin later, but
   rendered as graphic black-and-red hardware rather than stained wood. */
function Rod() {
  return (
    <div className="relative h-3 bg-void">
      <span className="absolute -left-1.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-red" />
      <span className="absolute -right-1.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-red" />
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
      <span aria-hidden className="block h-1 bg-red" />
      <div className="flex flex-1 flex-col items-center border-x-2 border-red/40 bg-card px-4 pb-5 pt-6 text-center transition group-hover:border-red">
        <span className="font-jp text-xs text-ink/55">{jp}</span>
        <span className="mt-1 font-display text-2xl tracking-wide text-ink group-hover:text-ember">
          {label}
        </span>
        <span className="mt-2 text-xs leading-snug text-ink/75">{blurb}</span>
      </div>
      <span aria-hidden className="block h-1 bg-red" />
      <Rod />
    </>
  );
}

const tileClass =
  "group relative flex flex-col overflow-visible shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.95)]";

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
