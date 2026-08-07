import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { SITE } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "ja"
    ? {
        title: "ギャラリー",
        description:
          "居酒屋ジュラクでの夜の写真。ロウアー・イーストサイドの日本食レストラン。",
      }
    : {
        title: "Gallery",
        description:
          "Photos from nights at Izakaya Juraku, a Japanese gastropub on the Lower East Side, NYC.",
      };
}

const photos = Array.from(
  { length: 10 },
  (_, i) => `/images/gallery/event-${i + 1}.jpg`,
);

export default async function GalleryPage({
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
        <section className="border-b-2 border-ink/80 bg-paper-dim/50">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
            <p className="font-jp text-sm tracking-widest text-neon">
              {t("gallery.pretitle")}
            </p>
            <h1 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">
              {t("gallery.title")}
            </h1>
            <p className="mt-4 text-ink/80">
              {t("gallery.tagPrefix")}{" "}
              <a
                href={SITE.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-neon"
              >
                {SITE.socialHandle}
              </a>{" "}
              {t("gallery.tagSuffix")}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <GalleryLightbox photos={photos} />
        </section>
      </main>
      <Footer />
    </>
  );
}
