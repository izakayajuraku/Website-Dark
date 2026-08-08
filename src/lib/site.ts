export const SITE = {
  name: "Izakaya Juraku",
  tagline: "Tokyo-inspired comfort food with NYC energy.",
  socialHandle: "@izakayajuraku",
  address: "121 Ludlow St, New York, NY 10002",
  neighborhood: "Lower East Side, NYC",
  phone: "(212) 477-0100",
  phoneHref: "tel:+12124770100",
  email: "hello@izakayajuraku.com",
  hours: [
    { days: "Monday", daysJa: "月曜日", time: "Closed", timeJa: "定休日" },
    {
      days: "Tue – Sun",
      daysJa: "火〜日",
      time: "12pm – 10pm",
      timeJa: "12:00〜22:00",
    },
  ],
  links: {
    reserve: "https://resy.com/cities/new-york-ny/venues/izakaya-juraku",
    order: "https://www.toasttab.com/juraku121",
    menu: "https://www.toasttab.com/juraku121/menu-and-pay/welcome",
    giftCards: "https://order.toasttab.com/egiftcards/juraku121",
    rewards: "https://www.toasttab.com/juraku121/rewardsSignup",
    instagram: "https://www.instagram.com/izakayajuraku",
    tiktok: "https://www.tiktok.com/@izakayajuraku",
    whatsapp: "https://chat.whatsapp.com/Kt47ZbrF4yi9WXaI6w44oW",
    // Named-query maps URL (not a raw address) so Google resolves the pin to
    // the actual "Izakaya Juraku" business listing — helps Maps/local SEO.
    directions:
      "https://www.google.com/maps/search/?api=1&query=Izakaya+Juraku+121+Ludlow+St+New+York+NY+10002",
    // Verified CID permalink to the real Google Business listing, for reviews.
    googleReviews: "https://www.google.com/maps?cid=8228589502094031976",
    newsletter: "https://www.toasttab.com/juraku121/marketing-signup",
  },
} as const;

export function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Both language variants live here together (not routed through next-intl
// messages) so the small bilingual accent label on each nav tile can show
// whichever language ISN'T the page's primary language — e.g. an English
// page shows "Menu" as the label with a small "メニュー" accent, and the
// Japanese page flips that around.
//
// `lantern` is the artist-supplied chochin illustration for each destination.
// Leave it unset until the real asset exists — ScrollTile falls back to a
// plain placeholder panel. Add the transparent PNG path (e.g.
// "/images/lanterns/menu.png") and the tile renders the art automatically,
// with the label/blurb still live HTML on top rather than baked into the art.
export type NavTile = {
  key: string;
  en: string;
  ja: string;
  href: string;
  external: boolean;
  blurbEn: string;
  blurbJa: string;
  lantern?: string;
};

export const NAV_TILES: NavTile[] = [
  {
    key: "menu",
    en: "Menu",
    ja: "メニュー",
    href: SITE.links.menu,
    external: true,
    blurbEn: "Food, drinks, sake & more",
    blurbJa: "フード・ドリンク・日本酒など",
  },
  {
    key: "events",
    en: "Events",
    ja: "イベント",
    href: "/events",
    external: false,
    blurbEn: "What's coming up at Juraku",
    blurbJa: "ジュラクの最新イベント情報",
  },
  {
    key: "blog",
    en: "Blog",
    ja: "ブログ",
    href: "/blog",
    external: false,
    blurbEn: "Stories from behind the bar",
    blurbJa: "バーの舞台裏ストーリー",
  },
  {
    key: "gallery",
    en: "Gallery",
    ja: "ギャラリー",
    href: "/gallery",
    external: false,
    blurbEn: "Good nights, good people",
    blurbJa: "楽しい夜、素敵な仲間たち",
  },
  {
    key: "about",
    en: "About",
    ja: "私たちについて",
    href: "/about",
    external: false,
    blurbEn: "Our story & the crew",
    blurbJa: "私たちの物語とクルー",
  },
  {
    key: "community",
    en: "Community",
    ja: "コミュニティ",
    href: "/collaborations",
    external: false,
    blurbEn: "Sponsorships, collabs & friends",
    blurbJa: "スポンサー・コラボ・仲間たち",
  },
] as const;
