import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/batch17Guides";
import { records as _en } from "../content/translations/en/batch17Guides";
import { records as _zh } from "../content/translations/zh-CN/batch17Guides";
const _content = createLegacyTexts(_sources, _en, _zh);
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
      _content.ja("guide.legacy.batch17Guides.b00001"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00002"),
    stats: ["攻撃力%", "物理ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 352606,
  },
  ロサリア: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00003"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00004"),
    stats: [
      "攻撃力% / 元素チャージ効率",
      "氷元素ダメージ",
      "会心率 / 会心ダメージ",
    ],
    sourceId: 364265,
  },
  雲菫: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00005"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00006"),
    stats: ["防御力% / 元素チャージ効率", "防御力%", "防御力%"],
    sourceId: 366273,
  },
  煙緋: {
    headline: _content.ja("guide.legacy.batch17Guides.b00007"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00008"),
    stats: ["攻撃力% / 元素熟知", "炎元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 383108,
  },
  嘉明: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00009"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00010"),
    stats: ["攻撃力% / 元素熟知", "炎元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 583327,
  },
  甘雨: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00011"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00012"),
    stats: ["攻撃力% / 元素熟知", "氷元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 363710,
  },
  閑雲: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00013"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00014"),
    stats: [
      "攻撃力% / 元素チャージ効率",
      "攻撃力%",
      "攻撃力% / 与える治療効果",
    ],
    sourceId: 583326,
  },
  凝光: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00015"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00016"),
    stats: ["攻撃力%", "岩元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 352617,
  },
  九条裟羅: {
    headline: _content.ja("guide.legacy.batch17Guides.b00017"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00018"),
    stats: [
      "元素チャージ効率 / 攻撃力%",
      "雷元素ダメージ",
      "会心率 / 会心ダメージ",
    ],
    sourceId: 395525,
  },
  荒瀧一斗: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00019"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00020"),
    stats: ["防御力%", "岩元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 407413,
  },
  刻晴: {
    headline: _content.ja("guide.legacy.batch17Guides.b00021"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00022"),
    stats: ["攻撃力% / 元素熟知", "雷元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 352626,
  },
  珊瑚宮心海: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00023"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00024"),
    stats: ["HP% / 元素チャージ効率", "水元素ダメージ / HP%", "与える治療効果"],
    sourceId: 395524,
  },
  鹿野院平蔵: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00025"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00026"),
    stats: [
      "攻撃力% / 元素熟知",
      "風元素ダメージ / 元素熟知",
      "会心率 / 会心ダメージ / 元素熟知",
    ],
    sourceId: 455161,
  },
  七七: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00027"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00028"),
    stats: ["攻撃力% / 元素チャージ効率", "攻撃力%", "与える治療効果"],
    sourceId: 352624,
  },
  重雲: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00029"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00030"),
    stats: [
      "攻撃力% / 元素チャージ効率",
      "氷元素ダメージ",
      "会心率 / 会心ダメージ",
    ],
    sourceId: 352621,
  },
  申鶴: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00031"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00032"),
    stats: ["攻撃力% / 元素チャージ効率", "攻撃力%", "攻撃力%"],
    sourceId: 415138,
  },
  神里綾華: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00033"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00034"),
    stats: ["攻撃力%", "氷元素ダメージ", "会心ダメージ / 会心率"],
    sourceId: 366103,
    targets: [
      {
        key: "critRate",
        label: _content.ja("guide.legacy.batch17Guides.b00035"),
        unit: "%",
        targets: { 厳選: 55, 目標: 45, 妥協: 35 },
      },
      {
        key: "critDmg",
        label: _content.ja("guide.legacy.batch17Guides.b00036"),
        unit: "%",
        targets: { 厳選: 280, 目標: 240, 妥協: 210 },
      },
      {
        key: "energyRecharge",
        label: _content.ja("guide.legacy.batch17Guides.b00037"),
        unit: "%",
        targets: { 厳選: 150, 目標: 130, 妥協: 115 },
      },
    ],
    context:
      "神里綾華専用：氷風4セット・氷共鳴の戦闘中会心率は現在値へ加算しない。従来の根拠付き公開プロフィール目標を維持する。",
  },
  神里綾人: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00038"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00039"),
    stats: ["攻撃力%", "水元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 417603,
  },
  辛炎: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00040"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00041"),
    stats: [
      "攻撃力% / 防御力%",
      "物理ダメージ / 防御力%",
      "会心率 / 会心ダメージ / 防御力%",
    ],
    sourceId: 358214,
  },
  千織: {
    headline: _content.ja("guide.legacy.batch17Guides.b00042"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00043"),
    stats: ["防御力%", "岩元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 574166,
  },
  早柚: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00044"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00045"),
    stats: [
      "元素熟知 / 元素チャージ効率 / 攻撃力%",
      "元素熟知 / 攻撃力%",
      "元素熟知 / 与える治療効果",
    ],
    sourceId: 390935,
  },
  放浪者: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00046"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00047"),
    stats: ["攻撃力%", "風元素ダメージ", "会心率 / 会心ダメージ"],
    sourceId: 366289,
  },
  北斗: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00048"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00049"),
    stats: [
      "元素チャージ効率 / 攻撃力%",
      "雷元素ダメージ",
      "会心率 / 会心ダメージ",
    ],
    sourceId: 352616,
  },
  夢見月瑞希: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00050"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00051"),
    stats: ["元素熟知", "元素熟知", "元素熟知"],
    sourceId: 662778,
  },
  藍硯: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00052"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00053"),
    stats: ["元素熟知 / 攻撃力%", "元素熟知 / 攻撃力%", "元素熟知 / 攻撃力%"],
    sourceId: 655054,
  },
  旅人: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00054"),
    relicSet:
      _content.ja("guide.legacy.batch17Guides.b00055"),
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
      _content.ja("guide.legacy.batch17Guides.b00056"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00057"),
    stats: ["HP% / 元素チャージ効率", "HP%", "HP%"],
    sourceId: 521833,
  },
  魈: {
    headline:
      _content.ja("guide.legacy.batch17Guides.b00058"),
    relicSet: _content.ja("guide.legacy.batch17Guides.b00059"),
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
      _content.ja("guide.legacy.batch17Guides.b00060"),
    mainStats: [
      { slot: _content.ja("guide.legacy.batch17Guides.b00061"), value: spec.stats[0] },
      { slot: _content.ja("guide.legacy.batch17Guides.b00062"), value: spec.stats[1] },
      { slot: _content.ja("guide.legacy.batch17Guides.b00063"), value: spec.stats[2] },
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
