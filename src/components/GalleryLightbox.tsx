"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function GalleryLightbox({ photos }: { photos: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length,
        );
      }
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, photos.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((src, i) => (
          <Reveal key={src} delay={Math.min(i, 8) * 60}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-square w-full overflow-hidden rounded border-2 border-ink"
            >
              <Image
                src={src}
                alt="A night at Izakaya Juraku — click to enlarge"
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-void/0 transition group-hover:bg-void/25" />
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink text-ink text-xl"
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) =>
                i === null ? i : (i - 1 + photos.length) % photos.length,
              );
            }}
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink text-ink text-2xl sm:left-4"
          >
            ‹
          </button>

          <div
            className="relative h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[openIndex]}
              alt="A night at Izakaya Juraku"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
            }}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink text-ink text-2xl sm:right-4"
          >
            ›
          </button>

          <p className="absolute bottom-4 font-display text-sm tracking-wide text-ink/70">
            {openIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
