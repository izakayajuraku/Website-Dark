export function Marquee({ items }: { items: string[] }) {
  // Repeat the base set enough times that a single "half" of the track is
  // always wider than the viewport (otherwise the seamless-loop trick shows
  // a blank gap on wide screens before it resets). Then duplicate that whole
  // set once — the keyframes translate by exactly -50%, i.e. exactly one
  // full base-set width, so the reset is invisible.
  const baseSet = Array.from({ length: 6 }, () => items).flat();
  const loop = [...baseSet, ...baseSet];

  return (
    <div className="overflow-hidden border-y-2 border-ink/10 bg-void py-3">
      <div className="marquee-track flex w-max gap-8">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display text-lg tracking-wide text-gold sm:text-xl"
          >
            {item}
            <span aria-hidden className="ml-8 text-red">
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
