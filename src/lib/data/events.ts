// Pulled from real event listings (Partiful, izakayajuraku.com's blog). The live site has
// no dedicated events page/calendar today — add real upcoming events here as they're
// announced, and move them to pastEvents once the date has passed.
//
// Japanese fields are a draft translation (adapted, not literal) pending native review.

export type EventItem = {
  title: string;
  titleJa: string;
  date: string;
  dateJa: string;
  detail: string;
  detailJa: string;
  slug: string;
  link?: string;
};

export const events: EventItem[] = [];

export const recurringEvents: EventItem[] = [
  {
    title: "TEN TEN NYC Artist Meetup",
    titleJa: "TEN TEN NYC アーティスト・ミートアップ",
    date: "Every Wednesday · 7:00–10:00pm",
    dateJa: "毎週水曜日 19:00〜22:00",
    detail:
      "A recurring Wednesday night gathering for artists and creatives at Juraku, hosted by TEN TEN NYC.",
    detailJa:
      "TEN TEN NYC主催、アーティストやクリエイターが集まる恒例の水曜ナイト。ジュラクにて開催中。",
    slug: "ten-ten-nyc-meetup",
  },
];

export const pastEvents: EventItem[] = [
  {
    title: "Juraku Olympics",
    titleJa: "ジュラク・オリンピック",
    date: "Aug 5",
    dateJa: "8月5日",
    detail:
      "TEN TEN NYC's weekly Wednesday meetup at Juraku went Olympic: Chopstick Bean Challenge, Nininbaori Ramen Challenge (team), Blind Beer Tasting, Wasabi Takoyaki Roulette, and Shake Shake Fries — competing for $300 in cash prizes and medals. It was also Kiyo's birthday.",
    detailJa:
      "TEN TEN NYC主催、毎週水曜恒例のジュラク・ミートアップが、この日限定でオリンピック仕様に。お箸で豆つかみチャレンジ、二人羽織ラーメンチャレンジ（チーム戦）、ブラインドビールテイスティング、わさびたこ焼きロシアンルーレット、シェイクシェイクフライズ早食いチャレンジなど、賞金総額$300をかけて熱いバトルが繰り広げられました。この日はキヨの誕生日でもありました。",
    slug: "juraku-olympics",
    link: "https://partiful.com/e/dy4BRzzalJxDQEG2AEhX",
  },
  {
    title: "Dassai Blue Tanabata Star Festival",
    titleJa: "獺祭ブルー七夕まつり",
    date: "July 11–12",
    dateJa: "7月11日〜12日",
    detail:
      "Izakaya Juraku joined Dassai Blue Sake Brewery's Tanabata Star Festival in Hyde Park, NY — serving a special event-only menu item alongside food vendors, a craft market, taiko performances, and sake.",
    detailJa:
      "居酒屋ジュラクは、ニューヨーク州ハイドパークで開催された獺祭ブルー酒造の七夕まつりに参加。フードベンダーやクラフトマーケット、太鼓演奏、日本酒とともに、この日限定の特別メニューを提供しました。",
    slug: "dassai-blue-tanabata",
  },
];
