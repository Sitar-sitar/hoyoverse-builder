import type { GlossaryEntry } from "../../shared/content/glossary";

/**
 * 用語集の入力（hsr）。用語集で手編集するのはこのファイルだけ。
 * 書き方・雛形・エラーの直し方は content/glossary/README.md を読む。編集後は `pnpm glossary:sync` を実行する。
 */
export const entries: GlossaryEntry[] = [
  {
    id: "genius-society",
    category: "faction",
    name: "天才クラブ",
    reading: "てんさいくらぶ",
    summary: "「知恵」の星神ヌースに見いだされた天才たちが名を連ねる、宇宙規模の集まり。",
    body: "「知恵」の星神ヌースの目に留まった天才が会員になる集まり。会員には番号があり、公式の紹介ではマダム・ヘルタが#83、ルアン・メェイが#81とされている。\n\n会員の出身や研究分野、目指すものはそれぞれ異なり、多くはひとりで研究を続けている。組織として一緒に活動するというより、ヌースに選ばれたという点でつながった集まりに近い。\n\n「模擬宇宙」は、ヘルタ、ルアン・メェイ、スクリューガム、スティーブンという天才クラブの会員たちが共同で開発したものとされている。",
    characters: ["hsr:1401", "hsr:1013", "hsr:1303"],
    sources: [
      { label: "公式サイト キャラクター紹介 宇宙ステーション「ヘルタ」（マダム・ヘルタ、ルアン・メェイ）", url: "https://hsr.hoyoverse.com/ja-jp/character?worldIndex=9" },
      { label: "Honkai: Star Rail Wiki（Fandom）Genius Society（補助）", url: "https://honkai-star-rail.fandom.com/wiki/Genius_Society" },
    ],
    gameVersion: "4.7",
    dataAsOf: "2026-11-15",
  },
];
