import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { communityEntries } from "@/lib/data/community";
import { whySponsor } from "@/lib/placeholder-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "ja"
    ? {
        title: "コミュニティ＆コラボレーション",
        description:
          "居酒屋ジュラクが応援するスポンサーシップ、アーティストコラボ、コミュニティパートナー — Miyo Yoshida、TEN TEN NYC、Showdown Chinatown、ChiChi (Cecilia Gault)、OMRC、Brotakuなど。",
      }
    : {
        title: "Community & Collaborations",
        description:
          "The sponsorships, artist collaborations, and community partners Izakaya Juraku is proud to support — Miyo Yoshida, TEN TEN NYC, Showdown Chinatown, ChiChi (Cecilia Gault), OMRC, Brotaku, and more.",
      };
}

export default async function CollaborationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const isJa = locale === "ja";
  const note = isJa ? whySponsor.ja : whySponsor.en;

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b-[3px] border-ink bg-void">
          <div aria-hidden className="screentone absolute inset-0" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-void via-void/95 to-void"
          />
          <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <p className="font-jp text-sm tracking-widest neon-text">
              {isJa ? "コミュニティ" : "COMMUNITY"}
            </p>
            <h1 className="mt-2 font-display text-5xl tracking-wide text-ink sm:text-6xl">
              {isJa ? "コミュニティ＆コラボレーション" : "Community & Collaborations"}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-ink/80">
              {isJa
                ? "ジュラクは近所のお店であると同時に、アーティスト、アスリート、地域コミュニティのハブでもありたいと思っています。私たちが応援している、そして応援してもらっている人たちをご紹介します。"
                : "Juraku is a neighborhood restaurant, but we've always wanted to be a hub for artists, athletes, and community too. Here's who we back, and who backs us."}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="manga-panel rounded-lg bg-card p-6 sm:p-10">
              <h2 className="font-display text-3xl tracking-wide">
                {note.heading}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/85">
                {note.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="mt-6 font-display text-xl tracking-wide text-red">
                {note.signoff}
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {communityEntries.map((entry, i) => (
              <Reveal key={entry.slug} delay={Math.min(i, 6) * 70}>
                <div className="manga-panel flex h-full flex-col overflow-hidden rounded bg-card">
                  {entry.photo ? (
                    <div className="relative h-40 w-full">
                      <Image
                        src={entry.photo}
                        alt={entry.photoAlt ?? ""}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent"
                      />
                    </div>
                  ) : (
                    <div className="screentone relative flex h-24 w-full items-center justify-center overflow-hidden bg-void">
                      <span
                        aria-hidden
                        className="select-none font-display text-7xl tracking-wide text-ink/10"
                      >
                        {entry.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-block w-fit rounded-full border border-red/40 bg-red/10 px-3 py-1 font-display text-xs tracking-wide text-red">
                      {isJa ? entry.categoryLabelJa : entry.categoryLabel}
                    </span>
                    <h2 className="mt-3 font-display text-2xl tracking-wide">
                      {entry.name}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">
                      {isJa ? entry.blurbJa : entry.blurb}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {entry.link && (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red underline underline-offset-4"
                      >
                        {entry.linkLabel ?? entry.link}
                      </a>
                    )}
                    {entry.instagram && entry.link !== entry.instagram && (
                      <a
                        href={entry.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red underline underline-offset-4"
                      >
                        Instagram
                      </a>
                    )}
                    {entry.internalHref && (
                      <Link
                        href={entry.internalHref}
                        className="text-ink/70 underline underline-offset-4 hover:text-red"
                      >
                        {isJa ? entry.internalLabelJa : entry.internalLabel}
                      </Link>
                    )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t-2 border-ink/80 bg-paper-dim/50">
          <div className="mx-auto max-w-2xl px-4 py-12 text-center sm:px-6">
            <p className="text-sm text-ink/70">
              {isJa
                ? "地域とのつながりについて、もっと知りたいですか？"
                : "Want to know more about how we work with the community?"}
            </p>
            <Link
              href="/faq"
              className="mt-2 inline-block font-display text-sm tracking-wide text-red hover:underline"
            >
              {t("footer.faq")} →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
