import type { GuideDefinition, TargetStatDefinition } from "./buildAdvisor";

export const BATCH17_DATE = "2026-09-08";
export const BATCH17_GUIDE_DATA_AS_OF: Readonly<Record<string, string>> = {
  七七: "2026-09-08",
  北斗: "2026-09-08",
  夢見月瑞希: "2026-09-08",
  早柚: "2026-08-14",
  旅人: "2026-09-08",
};

type GuideSpec = {
  headline: string;
  relicSet: string;
  stats: [string, string, string];
  sourceId: number;
  context?: string;
  targets?: TargetStatDefinition[];
};

const SPECS: Record<string, GuideSpec> = {
  レザー: {
    headline:
      "通常攻撃を軸に物理ダメージ・会心・攻撃力を優先する物理アタッカー。",
    relicSet: "蒼白の炎 ×4 / 血染めの騎士道 ×2 + 蒼白の炎 ×2",
    stats: ["攻撃力%", "物理ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 352606,
  },
  ロサリア: {
    headline:
      "氷サブ火力と会心率支援を両立し、元素爆発を継続できるチャージを確保する。",
    relicSet: "絶縁の旗印 ×4 / 旧貴族のしつけ ×4",
    stats: [
      "攻撃力% / 元素チャージ効率",
      "氷元素ダメージ",
      "会心率 / 会心ダメージ",
    ],
    sourceId: 364265,
  },
  雲菫: {
    headline:
      "通常攻撃支援のため防御力を最優先し、元素爆発を回すチャージも確保する。",
    relicSet: "華館夢醒形骸記 ×4",
    stats: ["防御力% / 元素チャージ効率", "防御力%", "防御力%"],
    sourceId: 366273,
  },
  煙緋: {
    headline: "重撃主体の炎アタッカーとして攻撃力・炎ダメージ・会心を整える。",
    relicSet: "大地を流浪する楽団 ×4 / 燃え盛る炎の魔女 ×4",
    stats: ["攻撃力% / 元素熟知", "炎元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 383108,
  },
  嘉明: {
    headline:
      "落下攻撃を軸に、会心・攻撃力と蒸発編成で必要な元素熟知を優先する。",
    relicSet: "ファントムハンター ×4 / 燃え盛る炎の魔女 ×4",
    stats: ["攻撃力% / 元素熟知", "炎元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 583327,
  },
  甘雨: {
    headline:
      "溶解重撃または凍結重撃の運用に合わせ、セットと時計を切り替える。",
    relicSet: "溶解：大地を流浪する楽団 ×4 / 凍結：氷風を彷徨う勇士 ×4",
    stats: ["攻撃力% / 元素熟知", "氷元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 363710,
  },
  閑雲: {
    headline:
      "落下攻撃支援と全体回復のため攻撃力を優先し、元素爆発を維持する。",
    relicSet: "翠緑の影 ×4 / 在りし日の歌 ×4",
    stats: [
      "攻撃力% / 元素チャージ効率",
      "攻撃力%",
      "攻撃力% / 与える治療効果",
    ],
    sourceId: 583326,
  },
  凝光: {
    headline:
      "通常・重撃と元素爆発を使う岩アタッカーとして会心と攻撃力を整える。",
    relicSet: "残響の森で囁かれる夜話 ×4 / 悠久の磐岩 ×2 + 攻撃力18% ×2",
    stats: ["攻撃力%", "岩元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 352617,
  },
  九条裟羅: {
    headline: "雷元素支援と元素爆発火力を両立し、チャージと会心を優先する。",
    relicSet: "絶縁の旗印 ×4 / 旧貴族のしつけ ×4",
    stats: [
      "元素チャージ効率 / 攻撃力%",
      "雷元素ダメージ",
      "会心率 / 会心ダメージ",
    ],
    sourceId: 395525,
  },
  荒瀧一斗: {
    headline:
      "元素爆発中の重撃火力のため、防御力・会心・岩元素ダメージを優先する。",
    relicSet: "華館夢醒形骸記 ×4",
    stats: ["防御力%", "岩元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 407413,
  },
  刻晴: {
    headline: "激化運用を軸に雷元素ダメージ・会心・元素熟知を整える。",
    relicSet: "雷のような怒り ×4",
    stats: ["攻撃力% / 元素熟知", "雷元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 352626,
  },
  珊瑚宮心海: {
    headline:
      "回復と水元素付着を軸にHP・治療効果を優先し、必要なら元素チャージを確保する。",
    relicSet: "海染硨磲 ×4 / 千岩牢固 ×4",
    stats: ["HP% / 元素チャージ効率", "水元素ダメージ / HP%", "与える治療効果"],
    sourceId: 395524,
  },
  鹿野院平蔵: {
    headline:
      "拡散と風元素スキル火力を両立し、編成に応じて熟知型か会心型を選ぶ。",
    relicSet: "翠緑の影 ×4",
    stats: [
      "攻撃力% / 元素熟知",
      "風元素ダメージ / 元素熟知",
      "会心率 / 会心ダメージ / 元素熟知",
    ],
    sourceId: 455161,
  },
  七七: {
    headline:
      "継続回復と追従攻撃を活かすため攻撃力・治療効果・チャージを優先する。",
    relicSet: "海染硨磲 ×4",
    stats: ["攻撃力% / 元素チャージ効率", "攻撃力%", "与える治療効果"],
    sourceId: 352624,
  },
  重雲: {
    headline:
      "氷元素付与と元素爆発の瞬間火力を支える会心・攻撃力・チャージを整える。",
    relicSet: "絶縁の旗印 ×4 / 旧貴族のしつけ ×4",
    stats: [
      "攻撃力% / 元素チャージ効率",
      "氷元素ダメージ",
      "会心率 / 会心ダメージ",
    ],
    sourceId: 352621,
  },
  申鶴: {
    headline:
      "氷元素支援量を伸ばす攻撃力を最優先し、元素爆発を回すチャージを確保する。",
    relicSet: "旧貴族のしつけ ×4 / 攻撃力18% ×2 + 攻撃力18% ×2",
    stats: ["攻撃力% / 元素チャージ効率", "攻撃力%", "攻撃力%"],
    sourceId: 415138,
  },
  神里綾華: {
    headline:
      "凍結と氷風4セットを前提に、会心ダメージ・攻撃力・元素爆発の循環を優先する。",
    relicSet: "氷風を彷徨う勇士 ×4",
    stats: ["攻撃力%", "氷元素ダメージ", "会心ダメージ / 会心率"],
    sourceId: 366103,
    targets: [
      {
        key: "critRate",
        label: "会心率",
        unit: "%",
        targets: { 厳選: 55, 目標: 45, 妥協: 35 },
      },
      {
        key: "critDmg",
        label: "会心ダメージ",
        unit: "%",
        targets: { 厳選: 280, 目標: 240, 妥協: 210 },
      },
      {
        key: "energyRecharge",
        label: "元素チャージ効率",
        unit: "%",
        targets: { 厳選: 150, 目標: 130, 妥協: 115 },
      },
    ],
    context:
      "神里綾華専用：氷風4セット・氷共鳴の戦闘中会心率は現在値へ加算しない。従来の根拠付き公開プロフィール目標を維持する。",
  },
  神里綾人: {
    headline:
      "元素スキル中の通常攻撃を軸に、水元素ダメージ・会心・攻撃力を整える。",
    relicSet: "来歆の余響 ×4 / 沈淪の心 ×4",
    stats: ["攻撃力%", "水元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 417603,
  },
  辛炎: {
    headline:
      "物理アタッカーかシールド支援かを分け、役割に合う主ステータスを選ぶ。",
    relicSet: "物理：蒼白の炎 ×2 + 血染めの騎士道 ×2 / 支援：千岩牢固 ×4",
    stats: [
      "攻撃力% / 防御力%",
      "物理ダメージ / 防御力%",
      "会心率 / 会心ダメージ / 防御力%",
    ],
    sourceId: 358214,
  },
  千織: {
    headline: "たもとの追撃を伸ばす防御力・岩元素ダメージ・会心を優先する。",
    relicSet: "黄金の劇団 ×4 / 華館夢醒形骸記 ×4",
    stats: ["防御力%", "岩元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 574166,
  },
  早柚: {
    headline:
      "翠緑4セットの耐性低下と回復を担い、元素熟知・攻撃力・チャージを役割に合わせる。",
    relicSet: "翠緑の影 ×4",
    stats: [
      "元素熟知 / 元素チャージ効率 / 攻撃力%",
      "元素熟知 / 攻撃力%",
      "元素熟知 / 与える治療効果",
    ],
    sourceId: 390935,
  },
  放浪者: {
    headline:
      "浮遊中の通常・重撃を伸ばす風元素ダメージ・会心・攻撃力を優先する。",
    relicSet: "砂上の楼閣の史話 ×4",
    stats: ["攻撃力%", "風元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 366289,
  },
  北斗: {
    headline:
      "元素爆発の追撃を維持しつつ火力を伸ばすため、チャージ・雷ダメージ・会心を整える。",
    relicSet: "絶縁の旗印 ×4",
    stats: [
      "元素チャージ効率 / 攻撃力%",
      "雷元素ダメージ",
      "会心率 / 会心ダメージ",
    ],
    sourceId: 352616,
  },
  夢見月瑞希: {
    headline:
      "拡散ダメージと回復を活かすため元素熟知を最優先し、翠緑4セットを維持する。",
    relicSet: "翠緑の影 ×4",
    stats: ["元素熟知", "元素熟知", "元素熟知"],
    sourceId: 662778,
  },
  藍硯: {
    headline:
      "シールドと拡散支援を両立し、元素熟知または攻撃力を編成に合わせて選ぶ。",
    relicSet: "翠緑の影 ×4",
    stats: ["元素熟知 / 攻撃力%", "元素熟知 / 攻撃力%", "元素熟知 / 攻撃力%"],
    sourceId: 655054,
  },
  旅人: {
    headline:
      "共鳴元素ごとに役割が変わるため、現在の元素と編成に対応する4セットを選ぶ。",
    relicSet:
      "風：翠緑の影 / 岩：悠久の磐岩 / 雷：絶縁の旗印 / 草：深林の記憶 / 水・炎・氷：役割対応セット",
    stats: [
      "元素チャージ効率 / 攻撃力% / 元素熟知",
      "対応元素ダメージ / 元素熟知",
      "会心率 / 会心ダメージ / 元素熟知",
    ],
    sourceId: 352598,
    context:
      "旅人専用：UID照会のsource IDでは元素別の命ノ星座を分離する。図鑑ガイドは全元素の入口として表示し、現在の共鳴元素に合わせて装備を選ぶ。",
  },
  綺良々: {
    headline:
      "シールド支援を軸にHPを優先し、草元素付着が必要ならチャージを確保する。",
    relicSet: "千岩牢固 ×2 + 花海甘露の光 ×2 / 深林の記憶 ×4",
    stats: ["HP% / 元素チャージ効率", "HP%", "HP%"],
    sourceId: 521833,
  },
  魈: {
    headline:
      "元素爆発中の落下攻撃を伸ばすため、会心・攻撃力・風元素ダメージを優先する。",
    relicSet: "辰砂往生録 ×4",
    stats: ["攻撃力%", "風元素ダメージ / 攻撃力%", "会心率 / 会心ダメージ"],
    sourceId: 352615,
  },
};

export const BATCH_17_CHARACTER_NAMES = Object.freeze(Object.keys(SPECS));

export function batch17GuideFor(name: string): GuideDefinition | null {
  const spec = SPECS[name];
  if (!spec) return null;
  return {
    headline: spec.headline,
    relicSet: spec.relicSet,
    planarSet:
      "武器・編成・元素反応に合わせてサブステータスと元素チャージ効率を調整",
    mainStats: [
      { slot: "時計", value: spec.stats[0] },
      { slot: "杯", value: spec.stats[1] },
      { slot: "冠", value: spec.stats[2] },
    ],
    // 主ガイドに固定の戦闘外到達値がないため、数値を推測して比較水準を作らない。
    targets: spec.targets ?? [],
    targetContext:
      spec.context ??
      `${name}専用：主ガイドに固定の戦闘外到達値がないため、数値閾値は推測で登録しない。武器・編成・命ノ星座・戦闘中効果は現在値へ加算しない。`,
    dataAsOf: BATCH17_GUIDE_DATA_AS_OF[name] ?? "2026-08-13",
    updatedAt: BATCH17_DATE,
    sourceLabel: `Game8の更新日付き${name}個別ビルド・命ノ星座・PTガイドを照合（https://game8.jp/genshin/${spec.sourceId}）`,
    profileId: `curated:batch17:genshin:${name}`,
  };
}
