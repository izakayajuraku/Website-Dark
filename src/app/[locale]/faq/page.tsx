import type { Metadata } from "next";
import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "ja"
    ? {
        title: "よくある質問",
        description:
          "居酒屋ジュラクに関するよくある質問 — ご予約、ご注文、営業時間、アレルギー、貸切イベント、コラボについて。",
      }
    : {
        title: "FAQ",
        description:
          "Frequently asked questions about Izakaya Juraku — reservations, ordering, hours, allergies, private events, and content creator collaborations.",
      };
}

type Faq = {
  q: string;
  aText: string;
  a: ReactNode;
};

function getFaqs(locale: string): Faq[] {
  if (locale === "ja") {
    return [
      {
        q: "ご予約はできますか？",
        aText:
          "はい、Resyからテーブルをご予約いただけます。空席があれば当日のご来店も歓迎です。",
        a: (
          <p>
            はい、
            <a
              href={SITE.links.reserve}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon underline underline-offset-4"
            >
              Resy
            </a>
            からテーブルをご予約いただけます。空席があれば当日のご来店（ウォークイン）も歓迎です。
          </p>
        ),
      },
      {
        q: "営業時間を教えてください",
        aText: "月曜定休。火曜〜日曜は12:00〜22:00の営業です。",
        a: <p>月曜定休。火曜〜日曜は12:00〜22:00の営業です。</p>,
      },
      {
        q: "テイクアウトやデリバリーの注文はできますか？",
        aText:
          "はい、Toastから直接ご注文いただくと追加手数料はかかりません。主要なデリバリーアプリでもご注文いただけます。",
        a: (
          <p>
            はい、
            <a
              href={SITE.links.order}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon underline underline-offset-4"
            >
              Toast
            </a>
            から直接ご注文いただくと追加手数料はかかりません。主要なデリバリーアプリでもご注文いただけます。
          </p>
        ),
      },
      {
        q: "アレルギー対応はしていますか？",
        aText:
          "ご来店の際はスタッフまでアレルギーをお知らせください。できる限り対応いたします。重度のアレルギーがある方は事前にお電話ください。",
        a: (
          <p>
            ご来店の際はスタッフまでアレルギーをお知らせください。できる限り対応いたしますが、多品目を扱う厨房のため特定アレルゲンの完全除去はお約束できません。重度のアレルギーがある方は、事前にお電話（
            <a
              href={SITE.phoneHref}
              className="text-neon underline underline-offset-4"
            >
              {SITE.phone}
            </a>
            ）にてご相談ください。
          </p>
        ),
      },
      {
        q: "貸切パーティーやプライベートイベントは可能ですか？",
        aText: `はい、人数、日程、ご希望の内容を添えて${SITE.email}までメールでご連絡ください。`,
        a: (
          <p>
            ぜひお手伝いさせてください。人数、ご希望の日程、内容の詳細を
            <a
              href={`mailto:${SITE.email}`}
              className="text-neon underline underline-offset-4"
            >
              {SITE.email}
            </a>
            までメールでお知らせください。
          </p>
        ),
      },
      {
        q: "ギフトカードや特典プログラムはありますか？",
        aText:
          "はい、ギフトカードと特典プログラムの登録はどちらもToastからご利用いただけます。",
        a: (
          <p>
            はい、
            <a
              href={SITE.links.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon underline underline-offset-4"
            >
              ギフトカード
            </a>
            と
            <a
              href={SITE.links.rewards}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon underline underline-offset-4"
            >
              特典プログラムの登録
            </a>
            はどちらもToastからご利用いただけます。
          </p>
        ),
      },
      {
        q: "コンテンツクリエイターですが、コラボは可能ですか？",
        aText:
          "NY拠点の食・飲料・日本/アジア文化系クリエイターの方を歓迎しています。お二人分の食事を無料提供する代わりに、コラボ投稿をお願いしています。InstagramのDMかメールでご連絡ください。",
        a: (
          <>
            <p>
              日本の食文化やホスピタリティへの情熱を共有できるクリエイターの方々との出会いを楽しみにしています。フード＆ドリンク系のコンテンツクリエイターの方、日本やアジア文化に特化したアカウントを運営されている方、ぜひご連絡ください。NY拠点のアカウントを優先していますが、相性が良ければそれ以外の地域の方も歓迎です。
            </p>
            <p className="mt-3 font-semibold">ご提供内容</p>
            <p>
              お二人分のお食事を無料でご提供する代わりに、コラボ投稿（タグ付け・可能であれば共同投稿）、ご来店時のInstagramストーリー投稿、その他撮影いただいた写真や動画のシェア（任意ですが大歓迎です）をお願いしています。
            </p>
            <p className="mt-3 font-semibold">ご来店タイミング</p>
            <p>
              特にディナーのピーク時間帯にあたる金曜・土曜はできるだけお避けください。週末は最も混み合う時間帯で、撮影に必要なスペースや対応をお約束できないことがあります。月曜は定休日です。
            </p>
            <p className="mt-3 font-semibold">お申し込み方法</p>
            <p>
              Instagramで
              <a
                href={SITE.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon underline underline-offset-4"
              >
                {SITE.socialHandle}
              </a>
              にDMするか、メール（
              <a
                href={`mailto:${SITE.email}`}
                className="text-neon underline underline-offset-4"
              >
                {SITE.email}
              </a>
              ）にてSNSアカウントのリンクと簡単な自己紹介をお送りください。
            </p>
          </>
        ),
      },
    ];
  }

  return [
    {
      q: "Do you take reservations?",
      aText:
        "Yes, reserve a table on Resy. Walk-ins are welcome too, space permitting.",
      a: (
        <p>
          Yes — reserve a table on{" "}
          <a
            href={SITE.links.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon underline underline-offset-4"
          >
            Resy
          </a>
          . Walk-ins are welcome too, space permitting.
        </p>
      ),
    },
    {
      q: "What are your hours?",
      aText:
        "We're closed Mondays. Tuesday through Sunday we're open 12pm to 10pm.",
      a: (
        <p>
          We're closed Mondays. Tuesday through Sunday we're open 12pm –
          10pm.
        </p>
      ),
    },
    {
      q: "Can I order for pickup or delivery?",
      aText:
        "Yes, order direct through Toast for no added fees. We're also on the major third-party delivery apps.",
      a: (
        <p>
          Yes — order direct through{" "}
          <a
            href={SITE.links.order}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon underline underline-offset-4"
          >
            Toast
          </a>{" "}
          for no added fees. We're also on the major third-party delivery
          apps.
        </p>
      ),
    },
    {
      q: "Do you have allergy-friendly options?",
      aText:
        "Let your server know about any allergies when you visit and we'll do our best to accommodate. For severe allergies, call ahead so we can talk through options.",
      a: (
        <p>
          Please let your server know about any allergies when you visit and
          we'll do our best to accommodate you. Because our kitchen prepares
          a wide range of dishes, we can't guarantee any item is fully free
          of a given allergen — if you have a severe allergy, call us ahead
          at{" "}
          <a
            href={SITE.phoneHref}
            className="text-neon underline underline-offset-4"
          >
            {SITE.phone}
          </a>{" "}
          so we can talk through options.
        </p>
      ),
    },
    {
      q: "Can I host a private event or party at Juraku?",
      aText:
        "Yes, email hello@izakayajuraku.com with your group size, date, and what you have in mind.",
      a: (
        <p>
          We'd love to help you plan it. Email us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-neon underline underline-offset-4"
          >
            {SITE.email}
          </a>{" "}
          with your group size, date, and what you have in mind.
        </p>
      ),
    },
    {
      q: "Do you offer gift cards or a rewards program?",
      aText:
        "Yes, both gift cards and rewards sign-up are available through Toast.",
      a: (
        <p>
          Both —{" "}
          <a
            href={SITE.links.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon underline underline-offset-4"
          >
            gift cards
          </a>{" "}
          and{" "}
          <a
            href={SITE.links.rewards}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon underline underline-offset-4"
          >
            rewards sign-up
          </a>{" "}
          are both on Toast.
        </p>
      ),
    },
    {
      q: "I'm a content creator — do you do collaborations?",
      aText:
        "We love working with NYC-based food, beverage, and Japanese/Asian culture content creators. We offer a complimentary dining experience for two in exchange for a collaborative post. DM @izakayajuraku on Instagram or email hello@izakayajuraku.com to apply.",
      a: (
        <>
          <p>
            We love working with creators who share our passion for
            Japanese food, culture, and hospitality. If you're a food &amp;
            beverage content creator, or you run a page focused on Japanese
            or Asian culture, we'd love to hear from you. While we
            prioritize NYC-based accounts, we're open to others if the fit
            feels right.
          </p>
          <p className="mt-3 font-semibold">What we offer</p>
          <p>
            A complimentary dining experience for two, in exchange for a
            collaborative post (tagged + co-posted if possible), Instagram
            story content from your visit, and any additional photos or
            videos you're willing to share afterward.
          </p>
          <p className="mt-3 font-semibold">When to visit</p>
          <p>
            Please avoid Fridays and Saturdays, especially during peak
            dinner hours — weekends are our busiest time and we can't
            always guarantee the space or attention needed for quality
            content creation. We're closed Mondays.
          </p>
          <p className="mt-3 font-semibold">How to apply</p>
          <p>
            DM us on Instagram{" "}
            <a
              href={SITE.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon underline underline-offset-4"
            >
              {SITE.socialHandle}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-neon underline underline-offset-4"
            >
              {SITE.email}
            </a>{" "}
            with links to your social pages and a short intro.
          </p>
        </>
      ),
    },
  ];
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const faqs = getFaqs(locale);
  const title = locale === "ja" ? "よくある質問" : "FAQ";
  const subtitle =
    locale === "ja"
      ? "ご予約、ご注文方法、アレルギー、貸切イベントなど。"
      : "Reservations, ordering, allergies, private events, and more.";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aText },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b-2 border-ink/80 bg-paper-dim/50">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
            <h1 className="font-display text-5xl tracking-wide sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-ink/80">{subtitle}</p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i, 5) * 60}>
                <details className="card-elevated group rounded border-2 border-ink bg-card p-5">
                  <summary className="cursor-pointer list-none font-display text-lg tracking-wide">
                    <span className="mr-2 inline-block transition group-open:rotate-45">
                      +
                    </span>
                    {item.q}
                  </summary>
                  <div className="mt-3 text-sm leading-relaxed text-ink/80">
                    {item.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
