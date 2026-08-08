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
    // Group facts verified against Edamovement's own material and press:
    // founded 2024 by Tamaki Horibe, Ryoka Matsumoto and Fuka Kojima; the
    // "New York-based Japanese performance collective" line is their own
    // wording. The Juraku relationship (sponsorship, and regulars who became
    // friends) is per Juraku.
    slug: "edamovement",
    name: "Edamovement Lab",
    category: "sponsorship",
    categoryLabel: "Performers We Sponsor",
    categoryLabelJa: "スポンサーパフォーマー",
    blurb:
      "A New York based Japanese performance collective, founded in 2024 by Tamaki Horibe, Ryoka Matsumoto, and Fuka Kojima. They turn Japanese folklore into dance, including a piece built around the Shichifukujin, the Seven Lucky Gods, and perform all over the city from RESOBOX to Japan Fes.\n\nWe're proud to be one of their sponsors. Fuka and the crew are regulars here too, so they were friends of Juraku long before any of it was official.",
    blurbJa:
      "2024年に堀部珠希、松本涼香、小島風香の3人が立ち上げた、ニューヨーク拠点の日本人パフォーマンス集団。七福神を題材にした作品など、日本の昔話をダンスとして表現し、RESOBOXやJapan Fesなど市内各地で公演を行っています。\n\n私たちはそのスポンサーの一つを務めています。風香ちゃんをはじめメンバーはジュラクの常連でもあり、スポンサーになるずっと前からの友人です。",
    link: "https://www.instagram.com/edamovement/",
    linkLabel: "@edamovement",
    photo: "/images/community-edamovement.jpg",
    photoAlt:
      "The Edamovement Lab performers in kimono on the steps of a New York building",
  },
  {
    // Company facts from Samurai Sword Soul's own site and press: founded
    // 2003 by Yoshi Amao; TATE is Japanese sword stage fighting. The 20th
    // anniversary run of "Don't Cry, My Friend" was December 2025, hence the
    // past tense on the sponsorship. Juraku sponsored that show.
    slug: "samurai-sword-soul",
    name: "Samurai Sword Soul",
    category: "sponsorship",
    categoryLabel: "Show We Sponsored",
    categoryLabelJa: "スポンサー公演",
    blurb:
      "A New York samurai theater company founded in 2003 by Yoshi Amao, mixing comedy, drama, and TATE, the Japanese art of sword stage fighting. We sponsored Don't Cry, My Friend, their 20th anniversary production, an original story drawn from the folktales Urashima Taro and Naita Aka Oni.",
    blurbJa:
      "2003年にYoshi Amaoが設立した、ニューヨークの侍演劇カンパニー。コメディ、人間ドラマ、そして殺陣を融合させた舞台を上演しています。20周年記念公演『Don't Cry, My Friend』ではスポンサーを務めました。浦島太郎と「泣いた赤鬼」に着想を得たオリジナル作品です。",
    link: "https://www.samuraiswordsoul.com/",
    linkLabel: "samuraiswordsoul.com",
    photo: "/images/community-samurai-sword-soul.jpg",
    photoAlt:
      "The Samurai Sword Soul cast in stage costume with drawn swords, lit against a black background",
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
    photo: "/images/community-showdown-mural.jpg",
    // Credit the muralist in the alt text: it's their work, and they signed
    // it in frame. Juraku is tagged on the mural alongside TEN TEN.
    photoAlt:
      "Shiro One spray-painting a mural at Showdown Chinatown, with Juraku tagged on the wall",
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
    // Temple facts (1938, Rev. Hozen Seki, Jodo Shinshu, the Shinran Shonin
    // bronze that survived Hiroshima) are from the temple's own history and
    // press. The relationship is per Juraku: David runs it and is a friend
    // and regular, Karl of KarlsBalls works there, and the Bon Odori is the
    // first thing the two have done together.
    // CHECK AFTER AUG 9 2026: confirm the Bon Odori went ahead as planned
    // before launch, and swap in a photo from the day if there is one.
    slug: "new-york-buddhist-church",
    name: "New York Buddhist Church",
    category: "community",
    categoryLabel: "Neighborhood Temple",
    categoryLabelJa: "地域のお寺",
    blurb:
      "A Jodo Shinshu temple on Riverside Drive, founded in 1938 by Rev. Hozen Seki. The bronze Shinran Shonin standing outside survived the bombing of Hiroshima, and has been a quiet symbol of peace on the Upper West Side ever since.\n\nDavid, who runs it, is a friend and a regular, and Karl of KarlsBalls works there. Their summer Bon Odori is the first thing we've come together on.",
    blurbJa:
      "1938年にHozen Seki師が創建した、リバーサイド・ドライブの浄土真宗寺院。門前に立つ親鸞聖人の銅像は広島の原爆を耐え抜いたもので、以来アッパー・ウエスト・サイドで静かに平和を象徴し続けています。\n\n寺を運営するデイヴィッドはジュラクの常連であり友人。KarlsBallsのカール氏もここで働いています。夏の盆踊りが、私たちが初めて一緒に取り組むイベントです。",
    link: "https://www.newyorkbuddhistchurch.org/",
    linkLabel: "newyorkbuddhistchurch.org",
    internalHref: "/events",
    internalLabel: "See the Bon Odori",
    internalLabelJa: "盆踊りの詳細を見る",
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
    photo: "/images/community-chichi.jpg",
    photoAlt: "ChiChi (Cecilia Gault) holding a cocktail in a studio portrait",
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
    // Placed next to Brotaku, which already names KarlsBalls as the other
    // sponsor. Business facts (Konamon Association recognition, the kei tora
    // truck) are from KarlsBalls' own site; the co-sponsorship is per Juraku
    // and already stated in the Brotaku entry.
    slug: "karlsballs",
    name: "KarlsBalls Takoyaki",
    category: "collab",
    categoryLabel: "Fellow Sponsor",
    categoryLabelJa: "共同スポンサー",
    blurb:
      "Osaka-style takoyaki, made from scratch at every event by Karl Palma and his crew. They're the only takoyaki business outside Japan recognized by the Japan Konamon Association, and they run a kei tora kitchen truck, the only one of its kind in the country. Karl sponsors Brotaku alongside us.",
    blurbJa:
      "カール・パルマ氏とそのチームが、イベントごとに一から作り上げる大阪スタイルのたこ焼き。日本国外で唯一、日本コナモン協会に認定されたたこ焼き店であり、全米でただ一台の軽トラキッチンカーで出店しています。Brotakuではジュラクとともにスポンサーを務めています。",
    link: "https://www.karlsballs.com/",
    linkLabel: "karlsballs.com",
    instagram: "https://www.instagram.com/karlsballs/",
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
