import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { kiyoNote } from "@/lib/placeholder-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "ja"
    ? {
        title: "私たちについて",
        description:
          "居酒屋ジュラクの物語、創業者キヨからのメッセージ、そしてロウアー・イーストサイドの居酒屋を支えるクルーの紹介。",
      }
    : {
        title: "About Us",
        description:
          "The story behind Izakaya Juraku, a note from founder Kiyo, and the crew behind the Lower East Side izakaya.",
      };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const note = locale === "ja" ? kiyoNote.ja : kiyoNote.en;

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHeader
          pretitle={t("about.pretitle")}
          title={t("about.title")}
        />

        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <Reveal>
            <div className="rounded-lg border-2 border-ink bg-card p-6 shadow-[6px_6px_0_0_var(--ink)] sm:p-10">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/momochan-hero.png"
                  alt=""
                  width={72}
                  height={51}
                  className="h-14 w-auto"
                />
                <h2 className="font-display text-3xl tracking-wide">
                  {note.heading}
                </h2>
              </div>
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
      </main>
      <Footer />
    </>
  );
}
