import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Bebas_Neue, Noto_Sans_JP, Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jp = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    title: "Izakaya Juraku | Japanese Food, Cocktails & Ramen in NYC",
    description:
      "Tokyo-inspired comfort food with NYC energy. Izakaya Juraku is a Lower East Side izakaya serving karaage, brown butter ramen, sake, and craft cocktails, open Tuesday through Sunday.",
  },
  ja: {
    title: "居酒屋ジュラク | ニューヨークの日本食・カクテル・ラーメン",
    description:
      "東京の味を、NYCの熱気で。居酒屋ジュラクはロウアー・イーストサイドの居酒屋。からあげ、焦がしバターラーメン、日本酒、クラフトカクテルを火曜から日曜まで。",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = locale === "ja" ? copy.ja : copy.en;
  const path = locale === "ja" ? "/ja" : "/";

  return {
    metadataBase: new URL("https://www.izakayajuraku.com"),
    title: { default: c.title, template: `%s | ${c.title.split(" | ")[0]}` },
    description: c.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/",
        ja: "/ja",
        "x-default": "/",
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `https://www.izakayajuraku.com${path}`,
      siteName: "Izakaya Juraku",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
    },
  };
}

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Izakaya Juraku",
  image: "https://www.izakayajuraku.com/images/logo.png",
  url: "https://www.izakayajuraku.com",
  telephone: "+1-212-477-0100",
  servesCuisine: "Japanese",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "121 Ludlow St",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10002",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/izakayajuraku",
    "https://www.tiktok.com/@izakayajuraku",
    "https://www.google.com/maps?cid=8228589502094031976",
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${jp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <NextIntlClientProvider>
          {children}
          <NewsletterPopup />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
