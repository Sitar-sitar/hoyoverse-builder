import { records as curatedRecords } from "../content/constellationCurated";
import { projectConstellations } from "./content/constellations";
import { createLegacyTexts } from "./content/legacyTexts";
import { sources as _sources } from "../content/ja/guides/characterConstellations";
import { records as _en } from "../content/translations/en/characterConstellations";
import { records as _zh } from "../content/translations/zh-CN/characterConstellations";
const _content = createLegacyTexts(_sources, _en, _zh);
import type { CharacterIdentity } from "./characterIdentity";
import type { StatKey, TierName } from "./buildAdvisor";
import { BATCH_17_CONSTELLATIONS } from "./batch17ConstellationData.generated";
import { ACTIVE_CATALOG_IDENTITIES } from "./fixtures/identityCatalogSnapshot";
import { BATCH23_GENSHIN_CONSTELLATIONS } from "./batch23GenshinData";

export type LocalizedText = { ja: string; en: string; "zh-CN": string };
export type ConstellationTargetChange = {
  key: StatKey;
  label: LocalizedText;
  unit: "%" | "";
  targets: Record<TierName, number>;
  reason: LocalizedText;
};
export type ConstellationEffect = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  name: LocalizedText;
  description: LocalizedText;
  targetChanges?: ConstellationTargetChange[];
  caution?: LocalizedText;
};
export type ConstellationProfile = {
  rankLabel: LocalizedText;
  acquiredRank: number;
  dataStatus: "curated" | "preparing";
  gameVersion: string;
  dataAsOf: string;
  updatedAt: string;
  sourceLabel: LocalizedText;
  sourceUrl: string;
  effects: ConstellationEffect[];
  activeTargetChanges: ConstellationTargetChange[];
};

type CuratedEntry = Omit<
  ConstellationProfile,
  "rankLabel" | "acquiredRank" | "dataStatus" | "activeTargetChanges"
>;

const SOURCE = {
  hsr: {
    gameVersion: "4.4",
    sourceLabel: _content.localized(
      "guide.legacy.characterConstellations.b00001"
    ),
    sourceUrl: "https://game8.co/games/Honkai-Star-Rail/archives/437263",
  },
  genshin: {
    gameVersion: "7.0",
    sourceLabel: _content.localized(
      "guide.legacy.characterConstellations.b00002"
    ),
    sourceUrl:
      "https://game8.co/games/Genshin-Impact/archives/Furina-Best-Builds",
  },
  zzz: {
    gameVersion: "3.1",
    sourceLabel: _content.localized(
      "guide.legacy.characterConstellations.b00003"
    ),
    sourceUrl: "https://game8.co/games/Zenless-Zone-Zero/archives/436881",
  },
} as const;

const CURATED: Record<string, CuratedEntry> = {
  ...BATCH23_GENSHIN_CONSTELLATIONS,
  ...projectConstellations(curatedRecords),
};

const LABELS: Record<CharacterIdentity["game"], LocalizedText> = {
  hsr: _content.localized("guide.legacy.characterConstellations.b00389"),
  genshin: _content.localized("guide.legacy.characterConstellations.b00390"),
  zzz: _content.localized("guide.legacy.characterConstellations.b00391"),
};

export function constellationProfileFor(
  identity: CharacterIdentity,
  rank: number | null
): ConstellationProfile {
  const blockedAddition =
    Boolean(BATCH23_GENSHIN_CONSTELLATIONS[identity.key]) &&
    (!identity.resolved || Boolean(identity.variantOf));
  const entry = blockedAddition
    ? undefined
    : (CURATED[identity.key] ??
      BATCH_17_CONSTELLATIONS[identity.key] ??
      CURATED[`${identity.game}:${identity.displayName}`]);
  const acquiredRank = Math.max(0, Math.min(6, rank ?? 0));
  if (!entry) {
    const source = SOURCE[identity.game];
    return {
      rankLabel: LABELS[identity.game],
      acquiredRank,
      dataStatus: "preparing",
      ...source,
      dataAsOf: "2026-08-25",
      updatedAt: "2026-08-25",
      effects: [],
      activeTargetChanges: [],
    };
  }
  return {
    ...entry,
    rankLabel: LABELS[identity.game],
    acquiredRank,
    dataStatus: "curated",
    activeTargetChanges: entry.effects
      .filter(item => item.level <= acquiredRank)
      .flatMap(item => item.targetChanges ?? []),
  };
}

// 第16バッチ：HSR 4名の星魂。公式の英語・中国語の星魂名は未確認のため、名称は日本語のみ確定とし
// en/zh には汎用ラベルを置く。効果本文は出典の記載を翻訳したもの。

// 第16バッチ：原神16名の命ノ星座。公式の英語・中国語の星座名は未確認のため、名称は日本語のみ確定とし
// en/zh には汎用ラベルを置く。効果本文は出典の記載を要約・翻訳したもの。

/**
 * 図鑑（UID不要）でカタログ名から凸を引くための索引。値は公開メタデータで確認済みの source ID。
 * UID照会経路は取得元の source ID をそのまま使うため、この索引を経由しない。
 * お試し実装・派生実装（例 genshin:10000901 マーヴィカ（お試し））はカタログ名を持たないため、
 * 名前一致で誤適用されることはない。
 */
/**
 * 同名で複数の source ID がある基礎実装の採用ID。派生ID（"-" 付きの旅人元素別、お試し実装）は索引に入れない。
 * 三月なのか: 1001（存護。1224 は巡狩の別実装）/ 旅人: 10000005（10000007 は性別違いで同一データ）/ イネファ: 10000116（10000903 はお試し）
 */
const CATALOG_SOURCE_ID_TIEBREAK: Record<string, string> = {
  "hsr:三月なのか": "1001",
  "genshin:旅人": "10000005",
  "genshin:コロンビーナ": "10000125",
  "genshin:イネファ": "10000116",
};

// 第22バッチ（2026-09-29）: コロンビーナ（原神 Ver.7.1、水・法器、正規ID 10000125）。名称・本文は AnimeGameData 由来の genshin-db（日本語・英語・中国語）で、Game8・GameWith の2026-09-29更新ガイドと全6段の日本語本文が一致。
// Enka の 10000904 は炎・香菱アイコン流用のプレースホルダーのため対象にしない。効果は戦闘中・条件付きのため targetChanges は全段で空。

/**
 * 図鑑（UID不要）でカタログ名から凸を引くための索引。公開メタデータのスナップショットから機械的に作る。
 * UID照会経路は取得元の source ID をそのまま使うため、この索引を経由しない。
 */
const CATALOG_NAME_TO_SOURCE_ID: Record<string, string> = (() => {
  const index: Record<string, string> = {};
  for (const entry of ACTIVE_CATALOG_IDENTITIES) {
    if (entry.sourceId.includes("-")) continue;
    const key = entry.game + ":" + entry.providerName;
    if (!(key in index)) index[key] = entry.sourceId;
  }
  return { ...index, ...CATALOG_SOURCE_ID_TIEBREAK };
})();

/**
 * カタログ名（図鑑）に対応する確認済み source ID。索引に無ければ undefined。
 * 図鑑は凸だけでなく個別ガイドの解決でも同じ ID を使う（同名で複数実装がある場合の取り違えを防ぐため）。
 */
export function catalogSourceIdFor(
  game: CharacterIdentity["game"],
  name: string
): string | undefined {
  return CATALOG_NAME_TO_SOURCE_ID[`${game}:${name}`];
}

/** カタログ名（図鑑）から凸プロフィールを返す。ID索引に無い名前は従来の名前フォールバックへ委ねる。 */
export function constellationProfileForCatalogName(
  game: CharacterIdentity["game"],
  name: string,
  rank: number | null
): ConstellationProfile {
  const sourceId = CATALOG_NAME_TO_SOURCE_ID[`${game}:${name}`];
  const identity: CharacterIdentity = sourceId
    ? {
        game,
        sourceId,
        key: `${game}:${sourceId}`,
        displayName: name,
        variantOf: null,
        resolved: true,
        resolution: "curated-id-map",
      }
    : {
        game,
        sourceId: name,
        key: `${game}:${name}`,
        displayName: name,
        variantOf: null,
        resolved: true,
        resolution: "provider",
      };
  return constellationProfileFor(identity, rank);
}
