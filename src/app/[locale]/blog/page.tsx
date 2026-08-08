import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";
import { formatDate, SITE } from "@/lib/site";

const POSTS_PER_PAGE = 12;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "ja"
    ? {
        title: "ブログ",
        description:
          "居酒屋ジュラクのバーの舞台裏から届けるストーリー。カクテル、ラーメン、日本文化、ロウアー・イーストサイドでの日々。",
      }
    : {
        title: "Blog",
        description:
          "Stories from behind the bar at Izakaya Juraku — cocktails, ramen, Japanese culture, and life on the Lower East Side.",
      };
}

export default async function BlogIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const lang = locale === "ja" ? "ja" : "en";
  const allPosts = getAllPosts(lang);

  const { page: pageParam } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const page = Math.min(
    totalPages,
    Math.max(1, parseInt(pageParam || "1") || 1),
  );
  const start = (page - 1) * POSTS_PER_PAGE;
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b-2 border-ink/15 bg-paper-dim/50">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
            <p className="font-jp text-sm tracking-widest text-ember">
              {t("blog.pretitle")}
            </p>
            <h1 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">
              {t("blog.title")}
            </h1>
            <p className="mt-4 text-ink/80">{t("blog.subtitle")}</p>
          </div>
        </section>

        <section className="border-b-2 border-ink/10 bg-void">
          <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6">
            <p className="font-display text-2xl tracking-wide text-ink">
              {t("blog.newsletterHeading")}
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/80">
              {t("blog.newsletterSubtitle")}
            </p>
            <a
              href={SITE.links.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full border-2 border-gold bg-gold px-6 py-2 font-display tracking-wide text-void transition hover:bg-transparent hover:text-gold"
            >
              {t("blog.newsletterCta")}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i, 4) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-elevated block rounded border-2 border-ink bg-card p-6"
                >
                  <p className="text-xs uppercase tracking-wide text-ink/50">
                    {formatDate(post.date)}
                  </p>
                  <p className="mt-2 font-display text-2xl leading-tight tracking-wide">
                    {post.title}
                  </p>
                  <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (p) => (
                  <Link
                    key={p}
                    href={p === 1 ? "/blog" : `/blog?page=${p}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink font-display text-sm ${
                      p === page
                        ? "bg-ink text-paper"
                        : "bg-card text-ink hover:bg-paper-dim"
                    }`}
                  >
                    {p}
                  </Link>
                ),
              )}
            </nav>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
