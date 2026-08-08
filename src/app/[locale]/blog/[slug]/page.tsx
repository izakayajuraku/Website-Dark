import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PostCTA } from "@/components/PostCTA";
import { routing } from "@/i18n/routing";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => {
    const lang = locale === "ja" ? "ja" : "en";
    return getAllPosts(lang).map((post) => ({ locale, slug: post.slug }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale === "ja" ? "ja" : "en");
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const post = getPostBySlug(slug, locale === "ja" ? "ja" : "en");
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Izakaya Juraku" },
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
          <Link
            href="/blog"
            className="font-display text-sm tracking-wide text-ember hover:underline"
          >
            {t("blog.backToBlog")}
          </Link>
          <Reveal>
            <p className="mt-6 text-xs uppercase tracking-wide text-ink/50">
              {formatDate(post.date)}
            </p>
            <h1 className="mt-2 font-display text-4xl leading-tight tracking-wide sm:text-5xl">
              {post.title}
            </h1>
            <div className="prose-juraku mt-8">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
            <PostCTA />
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
