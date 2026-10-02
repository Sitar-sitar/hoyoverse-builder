import type { StatKey, TierName } from "../buildAdvisor";

/**
 * 推奨PTの型。公開型（PartyRecommendation など）は旧 server/partyRecommendations.ts から移設したもので、API の形を変えない。
 * 内部型（Team など）は API へ出さない。設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md §4.2
 */
export type PartyGameId = "hsr" | "genshin" | "zzz";
export type LocalizedText = { ja: string; en: string; "zh-CN": string };

export type PartyMember = { name: LocalizedText; role: LocalizedText };
export type PartyTargetChange = {
  key: StatKey;
  label: LocalizedText;
  unit: "%" | "";
  targets: Record<TierName, number>;
  reason: LocalizedText;
};

export type PartyCommunitySource = {
  label: LocalizedText;
  url: string;
  checkedAt: string;
  note: LocalizedText;
  status: "crossChecked" | "watching";
};

export type PartyRecommendation = {
  id: string;
  rank: 1 | 2 | 3;
  title: LocalizedText;
  members: PartyMember[];
  synergy: LocalizedText[];
  targetChanges: PartyTargetChange[];
  targetSummary: LocalizedText;
  gameVersion: string;
  dataAsOf: string;
  updatedAt: string;
  sourceLabel: LocalizedText;
  sourceUrl: string;
  communitySources: PartyCommunitySource[];
};

export type PartyRecommendationSet = {
  gameVersion: string;
  dataAsOf: string;
  updatedAt: string;
  options: PartyRecommendation[];
};

export const MAX_PARTY_OPTIONS = 3;

export type TeamMember = PartyMember & {
  /** このメンバーを本人として表示するときの目標補正。旧形式では起点キャラにだけ付く。 */
  targetChanges?: PartyTargetChange[];
};

/** 編成マスタの1件（D1）。 */
export type Team = {
  /** 一意。旧形式は現行の案IDをそのまま使う。第24バッチ以降は `team-${game}-${origin}-b${batch}-${n}`。 */
  id: string;
  game: PartyGameId;
  /** 登録の起点になったキャラ（その編成を載せた出典ページの持ち主）。カタログ名。 */
  origin: string;
  /** 同じ起点の中での保存順（正の整数、起点ごとに一意）。表示順位ではない（D2）。 */
  originOrder: number;
  /** true: 視点非依存で書かれ、起点以外のメンバーからも参照できる（D4）。 */
  shared: boolean;
  /** 共有編成として登録・共有化を実施したバッチ番号（23以上）。旧形式は null（D6）。 */
  batch: number | null;
  /** 旧形式から共有化した場合の、元の精査バッチ番号（参考情報。ゲート判定には使わない）。 */
  sourceBatch?: number;
  title: LocalizedText;
  /** 起点から見たときの並び。 */
  members: TeamMember[];
  synergy: LocalizedText[];
  targetSummary: LocalizedText;
  gameVersion: string;
  dataAsOf: string;
  updatedAt: string;
  sourceLabel: LocalizedText;
  sourceUrl: string;
  communitySources: PartyCommunitySource[];
};

export type PartyRef = {
  /** 参照する Team.id */
  team: string;
  /** 表示IDを固定する。第23バッチの既存6行の互換専用（D7）。新規には使わない。 */
  viewId?: string;
};

export type PartySkip = {
  /** 見送った共有編成の Team.id */
  team: string;
  reason: string;
  /** 確認した、そのキャラ側の出典URL（https） */
  sourceUrl: string;
  /** YYYY-MM-DD */
  checkedAt: string;
};

export type CharacterPartyEntry = {
  /** 表示順。1〜3件。省略時は既定参照（D2）。起点の保存編成が4件以上なら必須。 */
  refs?: PartyRef[];
  skipped?: PartySkip[];
};

/** 参照の変更記録（追記専用）。1キャラ×1バッチで1件。更新履歴はこの記録だけから作る。 */
export type PartyLinkRecord = {
  batch: number;
  game: PartyGameId;
  owner: string;
  /** このバッチで参照に加えた Team.id（起点以外の共有編成）。表示順 */
  added: string[];
  /** このバッチで参照から外した Team.id（起点の旧案を含む）。表示順 */
  removed: string[];
};

/** バッチごとの更新履歴の文言。 */
export type PartyLinkBatch = {
  batch: number;
  /** ISO 8601、+09:00 付き */
  date: string;
  /** PT 側の更新日（YYYY-MM-DD）。履歴の updatedAt はビルド側と比べて新しい方 */
  updatedAt: string;
  /** 更新履歴の sourceLabel に「 / 」で連結する注記 */
  sourceNote: string;
  title: string;
  summary: (name: string, record: PartyLinkRecord) => string;
  changes: string[];
  rationale: string;
};
