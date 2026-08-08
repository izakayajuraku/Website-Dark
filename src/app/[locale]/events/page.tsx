import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { EventCard } from "@/components/EventCard";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { events, recurringEvents, pastEvents } from "@/lib/data/events";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "ja"
    ? {
        title: "イベント",
        description:
          "居酒屋ジュラクで開催中のイベント。ロウアー・イーストサイドの日本食レストラン。",
      }
    : {
        title: "Events",
        description:
          "Upcoming events at Izakaya Juraku, a Japanese gastropub on the Lower East Side, NYC.",
      };
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* The yokai art is the header's background rather than a separate
            full-width band above it — stacking both made the top of the page
            two competing visual moments. */}
        <PageHeader
          pretitle={t("events.pretitle")}
          title={t("events.title")}
          image={{
            src: "/images/yokai-matcha-bomb.png",
            alt: "Yokai characters raising matcha sake bomb glasses at Izakaya Juraku",
          }}
        >
          {t("events.followFor")}{" "}
          <a
            href={SITE.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ember underline underline-offset-4 hover:text-ink"
          >
            {SITE.socialHandle}
          </a>{" "}
          {t("events.followSuffix")}
        </PageHeader>

        {/* Lead with the standing weekly event — it's the one thing that's
            always true, so it shouldn't be buried under an apologetic
            "nothing scheduled" line. */}
        {recurringEvents.length > 0 && (
          <section className="border-b-2 border-ink/10 bg-paper-dim/50">
            <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
              <Reveal>
                <h2 className="font-display text-3xl tracking-wide text-ember">
                  {t("events.everyWeek")}
                </h2>
              </Reveal>
              <div className="mt-6 space-y-6">
                {recurringEvents.map((event, i) => (
                  <Reveal key={event.slug} delay={i * 100}>
                    <EventCard event={event} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {events.length > 0 && (
          <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
            <Reveal>
              <h2 className="font-display text-3xl tracking-wide">
                {t("home.upcomingEvents")}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-6">
              {events.map((event, i) => (
                <Reveal key={event.slug} delay={i * 100}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
            <Reveal>
              <h2 className="font-display text-3xl tracking-wide text-ink/60">
                {t("events.pastEvents")}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {pastEvents.map((event, i) => (
                <Reveal key={event.slug} delay={i * 100}>
                  <EventCard event={event} muted />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
