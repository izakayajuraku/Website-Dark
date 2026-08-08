import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
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
          "居酒屋ジュラクが応援するスポンサーシップ、アーティストコラボ、コミュニティパートナー。Miyo Yoshida、Edamovement Lab、Samurai Sword Soul、TEN TEN NYC、Showdown Chinatown、Chinese-American Planning Council、ChiChi (Cecilia Gault)、OMRC、Brotakuなど。",
      }
    : {
        title: "Community & Collaborations",
        description:
          "The sponsorships, artist collaborations, and community partners Izakaya Juraku is proud to support: Miyo Yoshida, Edamovement Lab, Samurai Sword Soul, TEN TEN NYC, Showdown Chinatown, the Chinese-American Planning Council, ChiChi (Cecilia Gault), OMRC, Brotaku, and more.",
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
        <PageHeader
          pretitle="コミュニティ"
          title={
            isJa ? "コミュニティ＆コラボレーション" : "Community & Collaborations"
          }
        >
          {isJa
            ? "ジュラクは近所のお店であると同時に、アーティスト、アスリート、地域コミュニティのハブでもありたいと思っています。私たちが応援している、そして応援してもらっている人たちをご紹介します。"
            : "Juraku is a neighborhood restaurant, but we've always wanted to be a hub for artists, athletes, and community too. Here's who we back, and who backs us."}
        </PageHeader>

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
              <p className="mt-6 font-display text-xl tracking-wide text-ember">
                {note.signoff}
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {communityEntries.map((entry, i) => (
              <Reveal key={entry.slug} delay={Math.min(i, 6) * 70}>
                <div className="panel-card flex h-full flex-col overflow-hidden">
                  {/* Every card gets a header band of the same height, so a
                      mixed set of photo / no-photo entries still reads as one
                      deliberate grid. Entries without a photo get a
                      typographic nameplate rather than a washed-out initial. */}
                  <div className="relative h-40 w-full shrink-0 overflow-hidden bg-void">
                    {entry.photo ? (
                      <>
                        <Image
                          src={entry.photo}
                          alt={entry.photoAlt ?? ""}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent"
                        />
                      </>
                    ) : (
                      <div
                        aria-hidden
                        className="screentone flex h-full w-full flex-col items-center justify-center px-4 text-center"
                      >
                        <span className="font-jp text-2xl leading-tight text-ember">
                          {entry.categoryLabelJa}
                        </span>
                        <span className="mt-2 h-px w-10 bg-red" />
                        <span className="mt-2 font-display text-xs tracking-[0.22em] text-ink/70">
                          {entry.categoryLabel.toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-block w-fit border border-red bg-red/15 px-3 py-1 font-display text-xs tracking-wide text-ember">
                      {isJa ? entry.categoryLabelJa : entry.categoryLabel}
                    </span>
                    <h2 className="mt-3 font-display text-2xl leading-tight tracking-wide">
                      {entry.name}
                    </h2>
                    {/* Blank lines in a blurb become real paragraphs, so a
                        longer entry reads as prose rather than one block. */}
                    <div className="mt-3 flex-1 space-y-3 text-[0.9375rem] leading-relaxed text-ink/85">
                      {(isJa ? entry.blurbJa : entry.blurb)
                        .split("\n\n")
                        .map((para, pi) => (
                          <p key={pi}>{para}</p>
                        ))}
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/15 pt-4 text-sm">
                      {entry.link && (
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display tracking-wide text-ember underline underline-offset-4 hover:text-ink"
                        >
                          {entry.linkLabel ?? entry.link}
                        </a>
                      )}
                      {entry.instagram && entry.link !== entry.instagram && (
                        <a
                          href={entry.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display tracking-wide text-ember underline underline-offset-4 hover:text-ink"
                        >
                          Instagram
                        </a>
                      )}
                      {entry.internalHref && (
                        <Link
                          href={entry.internalHref}
                          className="text-ink/75 underline underline-offset-4 hover:text-ember"
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

        <section className="border-t-2 border-ink/15 bg-paper-dim/50">
          <div className="mx-auto max-w-2xl px-4 py-12 text-center sm:px-6">
            <p className="text-sm text-ink/70">
              {isJa
                ? "地域とのつながりについて、もっと知りたいですか？"
                : "Want to know more about how we work with the community?"}
            </p>
            <Link
              href="/faq"
              className="mt-2 inline-block font-display text-sm tracking-wide text-ember hover:underline"
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
