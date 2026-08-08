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
        {/* Hero — poster composition: hard black frame, heavy left scrim so
            type never rides raw photography, brand lockup as the focal point. */}
        <section className="relative min-h-[600px] overflow-hidden border-b-4 border-red bg-void sm:min-h-[680px]">
          <Image
            src="/images/hero-yukata-neon.jpg"
            alt="Guests in yukata walking past Izakaya Juraku's neon-lit storefront on Ludlow Street at night"
            fill
            sizes="100vw"
            priority
            className="object-cover object-[62%_38%]"
          />
          <div aria-hidden className="scrim-left absolute inset-0" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/70"
          />
          <div aria-hidden className="screentone absolute inset-0" />

          <div className="relative mx-auto flex min-h-[600px] max-w-6xl items-center px-4 py-24 sm:px-6 md:min-h-[680px]">
            <Reveal className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="border-2 border-red bg-red px-2.5 py-1 font-display text-xs tracking-[0.2em] text-ink">
                  {locale === "ja" ? "ロウアー・イーストサイド" : "LOWER EAST SIDE, NYC"}
                </span>
                <span className="relative border-2 border-ink bg-ink px-3 py-1 font-display text-xs tracking-wide text-void">
                  乾杯！Kanpai!
                </span>
              </div>

              {/* Brand lockup: the graphic centerpiece. Large display type is
                  the one place the deep fill red clears contrast on its own. */}
              <p
                aria-hidden
                className="mt-5 font-display text-4xl leading-[0.9] tracking-[0.08em] text-ink sm:text-5xl"
              >
                {t("home.heroBrandTop")}
              </p>
              <p
                aria-hidden
                className="font-display text-6xl leading-[0.9] tracking-wide text-red drop-shadow-[0_0_24px_rgba(199,39,28,0.55)] sm:text-8xl"
              >
                {t("home.heroBrandBottom")}
              </p>

              <p className="mt-5 max-w-lg font-display text-sm tracking-[0.14em] text-ink sm:text-base">
                {t("home.heroKicker")}
              </p>

              <h1
                className={
                  locale === "ja"
                    ? "mt-3 max-w-lg text-balance font-jp text-lg font-bold leading-snug text-ink/85"
                    : "mt-3 max-w-lg text-balance font-body text-lg leading-snug text-ink/85"
                }
              >
                {t("home.tagline")}
              </h1>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SITE.links.reserve}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manga-panel-red bg-red px-5 py-2.5 font-display tracking-wide text-ink transition hover:-translate-y-0.5 hover:bg-red-dark"
                >
                  {t("home.reserveCta")}
                </a>
                <a
                  href={SITE.links.menu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manga-panel bg-ink px-5 py-2.5 font-display tracking-wide text-void transition hover:-translate-y-0.5"
                >
                  {t("home.menuCta")}
                </a>
                <a
                  href={SITE.links.order}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="manga-panel bg-void/80 px-5 py-2.5 font-display tracking-wide text-ink backdrop-blur transition hover:-translate-y-0.5 hover:bg-ink hover:text-void"
                >
                  {t("home.orderCta")}
                </a>
              </div>
            </Reveal>
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
                  className="font-display text-sm tracking-wide text-ember hover:underline"
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
                  <div className="panel-card p-4">
                    <p className="font-display text-xl tracking-wide">
                      {locale === "ja" ? event.titleJa : event.title}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ember">
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
                className="font-display text-sm tracking-wide text-ember hover:underline"
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
                  className="panel-card block p-4"
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
