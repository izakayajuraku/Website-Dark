import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollTile } from "@/components/ScrollTile";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { NAV_TILES, SITE, formatDate } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { events, recurringEvents } from "@/lib/data/events";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();
  const locale = useLocale();
  const recentPosts = getAllPosts(locale === "ja" ? "ja" : "en").slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero — real photo, manga screentone + gradient, quieted messaging */}
        <section className="relative min-h-[560px] overflow-hidden border-b-[3px] border-ink sm:min-h-[640px]">
          <Image
            src="/images/hero-concept-ai.png"
            alt="Izakaya Juraku's storefront at night"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-void via-void/85 to-void/30"
          />
          <div aria-hidden className="screentone absolute inset-0" />

          {/* Hours — a real, small floating card, not a wall of text */}
          <div className="manga-panel absolute right-3 top-20 hidden max-w-[200px] rounded bg-void/80 p-3 text-xs text-ink backdrop-blur sm:right-6 sm:top-28 sm:block">
            <p className="font-display text-sm tracking-wide text-red neon-red-text">
              {locale === "ja" ? "営業時間" : "Open Late"}
            </p>
            <ul className="mt-1.5 space-y-0.5">
              {SITE.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-3">
                  <span className="text-ink/70">
                    {locale === "ja" ? h.daysJa : h.days}
                  </span>
                  <span>{locale === "ja" ? h.timeJa : h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto flex min-h-[560px] max-w-6xl items-end px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-32 md:min-h-[640px]">
            <Reveal className="max-w-xl">
              <div className="flex items-center gap-3">
                <p className="font-jp text-sm tracking-widest text-red neon-red-text">
                  {t("home.pretitle")}
                </p>
                <span className="relative rounded-full border-2 border-ink bg-ink px-3 py-1 font-display text-xs tracking-wide text-void">
                  乾杯！Kanpai!
                  <span
                    aria-hidden
                    className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 -rotate-45 border-b-2 border-l-2 border-ink bg-ink"
                  />
                </span>
              </div>
              <h1
                className={
                  locale === "ja"
                    ? "text-balance font-jp text-4xl font-bold leading-snug tracking-normal text-ink sm:text-5xl md:text-6xl"
                    : "text-balance font-display text-5xl leading-[0.95] tracking-wide text-ink sm:text-6xl md:text-7xl"
                }
              >
                {t("home.tagline")}
              </h1>
              <p className="mt-4 max-w-md text-base text-ink/90">
                {t("home.subtitle")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={SITE.links.menu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manga-panel rounded bg-ink px-5 py-2 font-display tracking-wide text-void transition hover:-translate-y-0.5 hover:bg-neon"
                >
                  {t("home.menuCta")}
                </a>
                <a
                  href={SITE.links.order}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manga-panel-red rounded bg-red px-5 py-2 font-display tracking-wide text-ink transition hover:-translate-y-0.5 hover:bg-red-dark"
                >
                  {t("home.orderCta")}
                </a>
                <a
                  href={SITE.links.reserve}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manga-panel rounded bg-void/60 px-5 py-2 font-display tracking-wide text-ink backdrop-blur transition hover:-translate-y-0.5 hover:bg-ink hover:text-void"
                >
                  {t("home.reserveCta")}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Momochan — a brand character accent now, not the hero visual */}
          <div className="pointer-events-none absolute bottom-4 right-3 w-16 drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)] sm:right-6 sm:w-24">
            <Image
              src="/images/momochan-hero.png"
              alt=""
              aria-hidden
              width={900}
              height={636}
              className="w-full"
            />
          </div>
        </section>

        <Marquee
          items={
            locale === "ja"
              ? ["good food", "good people", "good times"]
              : ["GOOD FOOD", "GOOD PEOPLE", "GOOD TIMES"]
          }
        />

        {/* Scroll tiles nav */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
            {NAV_TILES.map((tile, i) => (
              <Reveal key={tile.key} delay={i * 80}>
                <ScrollTile
                  href={tile.href}
                  external={tile.external}
                  label={locale === "ja" ? tile.ja : tile.en}
                  jp={locale === "ja" ? tile.en : tile.ja}
                  blurb={locale === "ja" ? tile.blurbJa : tile.blurbEn}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Upcoming events */}
        <section className="border-y-2 border-ink/80 bg-paper-dim/60">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <Reveal>
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-3xl tracking-wide">
                  {t("home.upcomingEvents")}{" "}
                  <span className="font-jp text-sm text-ink/50">
                    {locale === "ja" ? "Upcoming Events" : "近日開催イベント"}
                  </span>
                </h2>
                <Link
                  href="/events"
                  className="font-display text-sm tracking-wide text-red hover:underline"
                >
                  {t("home.viewFullCalendar")}
                </Link>
              </div>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {(events.length > 0 ? events : recurringEvents).map((event, i) => (
                <Reveal
                  key={event.slug}
                  delay={i * 100}
                  className="sm:col-span-3 md:col-span-1"
                >
                  <div className="card-elevated rounded border-2 border-ink bg-card p-4">
                    <p className="font-display text-xl tracking-wide">
                      {locale === "ja" ? event.titleJa : event.title}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-red">
                      {locale === "ja" ? event.dateJa : event.date}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-ink/70">
                      {locale === "ja" ? event.detailJa : event.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Latest from blog */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-3xl tracking-wide">
                {t("home.latestFromBlog")}{" "}
                <span className="font-jp text-sm text-ink/50">
                  {locale === "ja" ? "Latest From the Blog" : "最新ブログ"}
                </span>
              </h2>
              <Link
                href="/blog"
                className="font-display text-sm tracking-wide text-red hover:underline"
              >
                {t("home.viewAllArticles")}
              </Link>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {recentPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-elevated block rounded border-2 border-ink bg-card p-4"
                >
                  <p className="text-xs uppercase tracking-wide text-ink/50">
                    {formatDate(post.date)}
                  </p>
                  <p className="mt-2 font-display text-lg leading-tight tracking-wide">
                    {post.title}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
