import { useLocale, useTranslations } from "next-intl";
import type { EventItem } from "@/lib/data/events";

export function EventCard({
  event,
  muted = false,
}: {
  event: EventItem;
  muted?: boolean;
}) {
  const locale = useLocale();
  const t = useTranslations();
  const title = locale === "ja" ? event.titleJa : event.title;
  const date = locale === "ja" ? event.dateJa : event.date;
  const detail = locale === "ja" ? event.detailJa : event.detail;

  return (
    <div
      className={`card-elevated rounded border-2 border-ink p-6 ${
        muted ? "bg-paper-dim/40" : "bg-card"
      }`}
    >
      <p className="font-display text-2xl tracking-wide">{title}</p>
      <p
        className={`mt-1 font-display text-lg ${muted ? "text-ink/60" : "text-neon"}`}
      >
        {date}
      </p>
      <p className="mt-3 text-ink/80">{detail}</p>
      {event.link && !muted && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full border-2 border-ink bg-red px-4 py-1.5 font-display text-sm tracking-wide text-paper transition hover:bg-red-dark"
        >
          {t("events.rsvp")}
        </a>
      )}
    </div>
  );
}
