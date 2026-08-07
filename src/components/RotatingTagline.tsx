"use client";

import { useEffect, useState } from "react";

export function RotatingTagline({ lines }: { lines: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % lines.length);
    }, 3200);
    return () => clearInterval(id);
  }, [lines.length]);

  return (
    <div className="relative mt-3 h-7 max-w-md">
      {lines.map((line, i) => (
        <p
          key={line}
          aria-hidden={i !== active}
          className={`absolute inset-0 flex items-center gap-2 font-display text-sm tracking-wide text-red transition-all duration-500 ${
            i === active
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <span aria-hidden className="text-gold">
            ●
          </span>
          {line}
        </p>
      ))}
    </div>
  );
}
