import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
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

// Listed explicitly rather than generated from a count: the generated version
// silently included two images that were byte-identical duplicates of others.
// Add new photos here so the set stays visible and reviewable.
const photos = [
  "/images/gallery/event-1.jpg",
  "/images/gallery/event-2.jpg",
  "/images/gallery/event-3.jpg",
  "/images/gallery/event-4.jpg",
  "/images/gallery/event-5.jpg",
  "/images/gallery/event-6.jpg",
  "/images/gallery/event-7.jpg",
  "/images/gallery/event-8.jpg",
];

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
        <PageHeader
          pretitle={t("gallery.pretitle")}
          title={t("gallery.title")}
          mark="夜"
        >
          {t("gallery.tagPrefix")}{" "}
          <a
            href={SITE.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ember underline underline-offset-4 hover:text-ink"
          >
            {SITE.socialHandle}
          </a>{" "}
          {t("gallery.tagSuffix")}
        </PageHeader>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <GalleryLightbox photos={photos} />
        </section>
      </main>
      <Footer />
    </>
  );
}
