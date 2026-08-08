import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://www.izakayajuraku.com";
const STATIC_PATHS = [
  "",
  "/events",
  "/blog",
  "/gallery",
  "/about",
  "/faq",
  "/community",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = STATIC_PATHS.flatMap((path) => [
    {
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}${path}`,
          ja: `${BASE_URL}/ja${path}`,
        },
      },
    },
    {
      url: `${BASE_URL}/ja${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}${path}`,
          ja: `${BASE_URL}/ja${path}`,
        },
      },
    },
  ]);

  // English and Japanese posts are independent articles (not 1:1 translated
  // pairs), each with their own slug, so they're listed separately.
  const enPostRoutes = getAllPosts("en").map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const jaPostRoutes = getAllPosts("ja").map((post) => ({
    url: `${BASE_URL}/ja/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...enPostRoutes, ...jaPostRoutes];
}
