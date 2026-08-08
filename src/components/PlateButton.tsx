import Image from "next/image";

/**
 * A primary conversion CTA rendered on one of the hand-made manga "plate"
 * illustrations.
 *
 * The artwork is deliberately wordless. The label is live HTML positioned
 * over the plate so it stays translatable (EN/JA), selectable, readable by
 * screen readers, and able to scale with the user's font-size preference —
 * none of which is true when text is baked into an image.
 *
 * Each plate is a 1200x300 transparent PNG (4:1) with its icon in the left
 * ~22% and decorative sparkles in the right ~12%, so the label is inset to
 * sit in the open middle band.
 */
export function PlateButton({
  href,
  label,
  plate,
  priority,
}: {
  href: string;
  label: string;
  plate: string;
  priority?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="plate-btn group"
    >
      <Image
        src={plate}
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 640px) 92vw, 340px"
        priority={priority}
        className="pointer-events-none select-none object-contain"
      />
      <span className="plate-btn-label">
        {label}
        <span aria-hidden className="cta-arrow">
          →
        </span>
      </span>
    </a>
  );
}
