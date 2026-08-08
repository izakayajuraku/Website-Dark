// Real partners, sponsorships, and collaborators. Facts confirmed directly by
// Juraku and cross-checked against each organization's own site/socials where
// possible — see individual `source` notes for what was independently verified.

export type CommunityEntry = {
  slug: string;
  name: string;
  category: "sponsorship" | "collab" | "community";
  categoryLabel: string;
  categoryLabelJa: string;
  /** A blank line (\n\n) splits the blurb into separate paragraphs. */
  blurb: string;
  blurbJa: string;
  link?: string;
  linkLabel?: string;
  instagram?: string;
  internalHref?: string;
  internalLabel?: string;
  internalLabelJa?: string;
  /** Real photo from Juraku, when we have one on file — never a stand-in
   * likeness for a real person we don't have a photo of. */
  photo?: string;
  photoAlt?: string;
};

export const communityEntries: CommunityEntry[] = [
  {
    slug: "miyo-yoshida",
    name: "Miyo Yoshida",
    category: "sponsorship",
    categoryLabel: "Athlete We Sponsor",
    categoryLabelJa: "スポンサー選手",
    blurb:
      "A three-time, two-division world champion boxer from Kagoshima, Japan. She's a two-time WBO Women's Junior Bantamweight World Champion and former IBF Women's Bantamweight World Champion, and she trains at Gleason's Gym in Brooklyn. We're proud to be one of her sponsors as she chases her next title. Off the clock, she's simply Miyo, a regular and a friend.",
    blurbJa:
      "鹿児島県出身の吉田実代（ミヨ）は、三階級制覇を達成した世界チャンピオンボクサー。WBO女子ジュニアバンタム級王座を二度獲得し、IBF女子バンタム級王者にも輝きました。ブルックリンのグリーソンズ・ジムで練習を積む彼女の、スポンサーの一つを務められることを誇りに思っています。お店では、ただの「ミヨ」。常連であり、友人です。",
    instagram: "https://www.instagram.com/miyo_yoshida_/",
    internalHref: "/blog/meet-miyo-yoshida-world-champion",
    internalLabel: "Read her story on our blog",
    internalLabelJa: "ブログで彼女の物語を読む",
    photo: "/images/community-miyo-belts.jpg",
    // Her daughter is in frame. Described by relationship rather than by
    // name: naming a child in public alt text isn't something to do by
    // default, and the relationship is the meaningful part anyway.
    photoAlt:
      "Miyo Yoshida with her world championship belts, her daughter beside her",
  },
  {
    slug: "tenten-nyc",
    name: "TEN TEN NYC",
    category: "sponsorship",
    categoryLabel: "Nonprofit Partner",
    categoryLabelJa: "非営利団体パートナー",
    blurb:
      "A 501(c)(3) arts nonprofit creating spaces that explore identity, mental health, and the human experience through art and dialogue. TEN TEN NYC hosts their weekly artist meetup at Juraku every Wednesday night, and lists us among their organizational partners.",
    blurbJa:
      "アート対話を通じて、アイデンティティやメンタルヘルス、人間の在り方を探求する501(c)(3)非営利アート団体。TEN TEN NYCは毎週水曜の夜、ジュラクでアーティスト・ミートアップを開催しており、私たちも彼らのパートナー団体の一員です。",
    link: "https://tenten.nyc/",
    linkLabel: "tenten.nyc",
    instagram: "https://www.instagram.com/tenten.nyc",
    internalHref: "/events",
    internalLabel: "See the weekly meetup",
    internalLabelJa: "毎週のミートアップを見る",
    photo: "/images/community-tenten-mural.jpg",
    photoAlt: "The TEN TEN mural hanging inside Izakaya Juraku",
  },
  {
    slug: "showdown-chinatown",
    name: "Showdown Chinatown 華埠決戰",
    category: "sponsorship",
    categoryLabel: "Festival We Sponsor",
    categoryLabelJa: "スポンサーフェスティバル",
    blurb:
      "An annual hip-hop culture festival in Manhattan's Chinatown, with breaking battles, graffiti murals, DJs, and MCs celebrating the deep connection between Asian heritage and hip-hop. Organized by Ken Ji with fiscal sponsorship from TEN TEN NYC, Juraku was an early sponsor during the festival's inaugural year.",
    blurbJa:
      "マンハッタン・チャイナタウンで開催される、ヒップホップ文化の祭典。ブレイキンバトル、グラフィティ、DJ、MCを通じて、アジアの文化的ルーツとヒップホップの深いつながりを祝います。主催はKen Ji氏、TEN TEN NYCによる財政支援のもと開催されており、ジュラクは第一回開催時からの初期スポンサーです。",
    link: "https://www.instagram.com/showdown.chinatown/",
    linkLabel: "@showdown.chinatown",
    internalHref: undefined,
  },
  {
    // Scale figures and the Suffolk Street address come from CPC's own site.
    // The relationship to Juraku (long-time regulars and supporters, help
    // hosting events including Showdown Chinatown) is per Juraku.
    slug: "cpc-nyc",
    name: "Chinese-American Planning Council",
    category: "community",
    categoryLabel: "Neighborhood Nonprofit",
    categoryLabelJa: "地域の非営利団体",
    blurb:
      "A community services organization running more than 50 programs across 33 sites in Manhattan, Brooklyn, and Queens, serving over 8,000 people a day through education, family support, and economic empowerment. Their headquarters sits a few blocks from us on Suffolk Street. The CPC crew have been regulars and supporters of Juraku for years, and they've helped us host events, including Showdown Chinatown.",
    blurbJa:
      "マンハッタン、ブルックリン、クイーンズの33拠点で50以上のプログラムを運営し、教育、家族支援、経済的自立支援を通じて1日8,000人以上を支えるコミュニティ団体。本部はジュラクから数ブロック先のサフォーク・ストリートにあります。CPCの皆さんは長年の常連であり支援者。Showdown Chinatownをはじめとするイベント開催にも力を貸してくれています。",
    link: "https://www.cpc-nyc.org/",
    linkLabel: "cpc-nyc.org",
  },
  {
    slug: "chichi-cecilia-gault",
    name: "ChiChi (Cecilia Gault)",
    category: "collab",
    categoryLabel: "Artist Collaboration",
    categoryLabelJa: "アーティストコラボレーション",
    blurb:
      "A NYC-based singer-songwriter of Japanese and Irish descent, known by her stage name ChiChi. A longtime friend and regular, she has a dedicated wall at Juraku, complete with a signed poster and guitar, and two cocktails on our menu created in her honor: Hidari Chichi and Migi Chichi.",
    blurbJa:
      "日本とアイルランドの血を引く、ニューヨーク在住のシンガーソングライター。ステージネーム「ChiChi」として活動しています。長年の常連であり友人でもある彼女のために、ジュラク店内にはサイン入りポスターとギターを飾った専用ウォールがあり、メニューには彼女に捧げた二つのカクテル「左乳」と「右乳」があります。",
    link: "https://www.instagram.com/hot4chichi/",
    linkLabel: "@hot4chichi",
    internalHref: "/blog/cecilia-gault-cocktail",
    internalLabel: "Read the cocktail story",
    internalLabelJa: "カクテルの物語を読む",
  },
  {
    slug: "abigail-tan",
    name: "Abigail Tan",
    category: "collab",
    categoryLabel: "Our Go-To Artist",
    categoryLabelJa: "専属アーティスト",
    blurb:
      "Abigail has been one of Juraku's favorite artists and collaborators for years. Much of the artwork behind our visual identity is hers: the Matcha Sake Bomb illustrations, the Shake Shake Fries bag art, the stickers, and plenty more you'll spot around the restaurant. More than an artist, she's become a longtime friend of Juraku.\n\nShe takes commission work and can create in a wide range of styles. These days she works extensively in children's book illustration, bringing the same warmth, personality, and attention to detail we've always loved in her work for us.",
    blurbJa:
      "アビゲイルは長年にわたり、ジュラクがもっとも大切にしているアーティストでありコラボレーターです。抹茶サケボムのイラスト、シェイクシェイクフライのバッグアート、ステッカーなど、ジュラクのビジュアルを形づくるアートワークの多くは彼女の手によるもの。アーティストであると同時に、ジュラクの長年の友人でもあります。\n\nコミッションワークも受け付けており、幅広いスタイルに対応可能です。現在は絵本のイラストレーションを中心に活動し、ジュラクの作品で私たちが惹かれてきた温かみ、個性、細部へのこだわりを、そのまま注ぎ込んでいます。",
    link: "https://www.instagram.com/biillustrationnn/",
    linkLabel: "@biillustrationnn",
    photo: "/images/community-abigail-art.png",
    photoAlt: "A lineup of yokai characters illustrated by Abigail Tan for Izakaya Juraku",
  },
  {
    slug: "omrc",
    name: "OMRC — Old Man Run Club",
    category: "community",
    categoryLabel: "Wintertime Home Base",
    categoryLabelJa: "冬季ホームベース",
    blurb:
      "NYC's original Saturday morning long run crew, founded in 2018 — all paces welcome, despite the name. Juraku serves as their wintertime home base, a warm spot to land after a cold-weather long run.",
    blurbJa:
      "2018年設立、NYCの土曜朝ロングランクルーの草分け的存在。名前とは裏腹に、どんなペースの方も歓迎するインクルーシブなコミュニティです。ジュラクは彼らの冬季ホームベースとして、寒い中のロングラン後に立ち寄れる温かい場所になっています。",
    link: "https://www.instagram.com/oldmanrunclub/",
    linkLabel: "@oldmanrunclub",
    photo: "/images/community-omrc-2.jpg",
    photoAlt: "OMRC runners gathered outside Izakaya Juraku after a long run",
  },
  {
    slug: "brotaku",
    name: "Brotaku",
    category: "sponsorship",
    categoryLabel: "Show We Sponsor",
    categoryLabelJa: "スポンサーショー",
    blurb:
      'A NYC video game tournament comedy show — "Play Games. Win Cash. Get Roasted." Competitors battle it out while stand-up comedians (from Netflix, Hulu, and The Comedy Cellar) roast the gameplay live. Juraku is a proud sponsor alongside KarlsBalls Takoyaki.',
    blurbJa:
      "ゲーム対戦とスタンダップコメディが融合したニューヨークのイベント。「ゲームで勝負、賞金をゲット、そして実況でいじられる」がコンセプトで、Netflix、Hulu、The Comedy Cellar出演のコメディアンたちが実況を担当します。ジュラクはKarlsBalls Takoyakiとともにスポンサーを務めています。",
    link: "https://www.brotakulive.com/",
    linkLabel: "brotakulive.com",
    instagram: "https://www.instagram.com/brotakuofficial",
  },
  {
    slug: "close-the-door-behind-you",
    name: "Close the Door Behind You",
    category: "community",
    categoryLabel: "Friends of Juraku",
    categoryLabelJa: "ジュラクの仲間",
    blurb:
      "A NYC comedy podcast and live stand-up show hosted by Christos and Doc Jud, the same crew behind Brotaku, featuring comedians from Netflix and Hulu. Good friends of the Juraku family.",
    blurbJa:
      "Brotakuと同じチーム、ChristosとDoc Judが手がけるニューヨークのコメディポッドキャスト＆ライブスタンダップショー。Netflix・Hulu出演のコメディアンも出演します。ジュラクファミリーの良き仲間です。",
    link: "https://www.instagram.com/closethedoorbehindyouu/",
    linkLabel: "@closethedoorbehindyouu",
  },
];
