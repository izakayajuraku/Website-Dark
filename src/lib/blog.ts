import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  lang: "en" | "ja";
};

let cache: BlogPost[] | null = null;

function readAllPosts(): BlogPost[] {
  if (cache) return cache;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      content,
      lang: (data.lang as "en" | "ja") ?? "en",
    };
  });
  cache = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

/** All posts written in the given language (default "en" for the current site). */
export function getAllPosts(lang: "en" | "ja" = "en"): BlogPost[] {
  return readAllPosts().filter((p) => p.lang === lang);
}

export function getPostBySlug(
  slug: string,
  lang: "en" | "ja" = "en",
): BlogPost | undefined {
  return readAllPosts().find((p) => p.slug === slug && p.lang === lang);
}
