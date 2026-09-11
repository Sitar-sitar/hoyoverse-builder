import { guideFor, type GuideDefinition } from "./buildAdvisor";
import { CHARACTER_GUIDE_CATALOG, HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS, type CatalogGameId } from "./characterGuideCatalog";
import { catalogSourceIdFor, constellationProfileFor, constellationProfileForCatalogName } from "./characterConstellations";
import { CHARACTER_GUIDE_METADATA } from "./characterGuideMetadata";
import { characterReferenceFor } from "./characterReference";
import { characterUpdateLedger, ledgerEntryFor } from "./characterUpdateLedger";
import { expectedProfileFor } from "./expectedGuideProfiles";
import { generatedGenshinGuide, generatedHsrGuide, generatedZzzGuide } from "./individualGuides";
import { genshinGuide, zzzGuide } from "./gameProviders";
import { partyRecommendationsFor } from "./partyRecommendations";
import { normalizeMemberName, resolvePartyMember } from "./partyMemberAliases";
import type { CharacterIdentity } from "./characterIdentity";

/**
 * 監査の判定ロジック。CLI（scripts/audit/*.mjs）は取得と整形だけを持ち、判定はここに集約する。
 * リファクタリングで参照先が変わったらテストで落ちるようにするのが目的（設計書 §4.1.1）。
 */

export const AUDIT_GAMES: CatalogGameId[] = ["hsr", "genshin", "zzz"];

/** ガイドが個別根拠か役割共通の自動生成かを比べる対象フィールド。 */
const GUIDE_FIELDS = ["headline", "relicSet", "planarSet", "mainStats", "targets", "targetContext"] as const;
const shapeOf = (guide: GuideDefinition | null | undefined) => JSON.stringify(GUIDE_FIELDS.map((field) => guide?.[field] ?? null));

export type GuideKind = "individual" | "role-generic";

const identityFor = (game: CatalogGameId, name: string): CharacterIdentity => {
  const sourceId = catalogSourceIdFor(game, name) ?? name;
  return { game, sourceId, key: `${game}:${sourceId}`, displayName: name, variantOf: null, resolved: true, resolution: "provider" };
};

/** UID 照会経路と同じ解決口でガイドを引く。 */
export function resolvedGuideFor(game: CatalogGameId, name: string): GuideDefinition {
  if (game === "hsr") return guideFor(name, HSR_RUNTIME_PATHS[name] ?? "", identityFor("hsr", name));
  if (game === "genshin") return genshinGuide(name);
  return zzzGuide(name, ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack");
}

function generatedGuideFor(game: CatalogGameId, name: string): GuideDefinition {
  if (game === "hsr") return generatedHsrGuide(name, HSR_RUNTIME_PATHS[name] ?? "");
  if (game === "genshin") return generatedGenshinGuide(name);
  return generatedZzzGuide(name, ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack");
}

/** 役割共通の自動生成ガイドとの差分でガイドの種別を判定する。 */
export function guideKindFor(game: CatalogGameId, name: string): GuideKind {
  return shapeOf(resolvedGuideFor(game, name)) === shapeOf(generatedGuideFor(game, name)) ? "role-generic" : "individual";
}

export const daysBetween = (from: string, to: string) =>
  Math.round((Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) / 86_400_000);

export type CharacterAuditRecord = {
  game: CatalogGameId;
  name: string;
  sourceId: string | null;
  status: "reviewed" | "pending";
  batch: number | null;
  profileId: string;
  expectedProfileId: string;
  guideKind: GuideKind;
  hasConstellation: boolean;
  hasParty: boolean;
  metadataUpdatedAt: string | null;
  updatedAt: string | null;
  ageDays: number | null;
};

export function auditRecordFor(game: CatalogGameId, name: string, today: string): CharacterAuditRecord {
  const record = CHARACTER_GUIDE_METADATA[game]?.[name];
  const entry = ledgerEntryFor(game, name);
  const updatedAt = record?.updatedAt ?? null;
  return {
    game,
    name,
    sourceId: catalogSourceIdFor(game, name) ?? null,
    status: entry?.status ?? "pending",
    batch: entry?.batch ?? null,
    profileId: record?.profileId ?? "(未記録)",
    expectedProfileId: expectedProfileFor(game, name),
    guideKind: guideKindFor(game, name),
    hasConstellation: constellationProfileFor(identityFor(game, name), 0).dataStatus === "curated",
    hasParty: !String(partyRecommendationsFor(game, name).options[0]?.id ?? "generated-").startsWith("generated-"),
    metadataUpdatedAt: record?.updatedAt ?? null,
    updatedAt,
    ageDays: updatedAt ? daysBetween(updatedAt, today) : null,
  };
}

export function auditRecords(today: string): CharacterAuditRecord[] {
  return AUDIT_GAMES.flatMap((game) => CHARACTER_GUIDE_CATALOG[game].map((name) => auditRecordFor(game, name, today)));
}

/**
 * 図鑑（UID不要）と UID 照会で同じ精査内容が返るかを検査する。
 * 第15バッチの API 境界上書きを撤去した 2026-09-10 以降は 0 件が正常。
 */
export type RouteMismatch = { game: CatalogGameId; name: string; field: "guide" | "partyRecommendations" | "constellations" };

export function routeMismatches(): RouteMismatch[] {
  const mismatches: RouteMismatch[] = [];
  for (const game of AUDIT_GAMES) {
    for (const name of CHARACTER_GUIDE_CATALOG[game]) {
      const reference = characterReferenceFor(game, name);
      if (!reference) continue;
      const J = (value: unknown) => JSON.stringify(value);
      if (J(reference.guide) !== J(resolvedGuideFor(game, name))) mismatches.push({ game, name, field: "guide" });
      if (J(reference.partyRecommendations) !== J(partyRecommendationsFor(game, name))) mismatches.push({ game, name, field: "partyRecommendations" });
      if (J(reference.constellations) !== J(constellationProfileForCatalogName(game, name, 0))) mismatches.push({ game, name, field: "constellations" });
    }
  }
  return mismatches;
}

/**
 * 外部メタデータにあるが、調査のうえカタログ対象外と判断した名前。キーは `game:表記`、値は理由。
 * ここに無い未登録名はすべて「新規候補」として P0 に出し、公開ガイドで実装・独立性を確認してから追加する。
 */
export const EXCLUDED_METADATA_NAMES: Record<string, string> = {
  "hsr:銀狼LV.999": "銀狼の別実装（hsr:1506）。characterIdentity.ts の CURATED_IDENTITIES で variantOf: 銀狼 として扱う既存判断を維持",
  "genshin:炎神": "genshin:11000046。ジンのアイコンを流用した物語・イベント用の特殊IDで、プレイアブルの公開ガイドが無い（docs/batch-18-research-notes.md 区分2）",
};
const excludedIndex = new Set(Object.keys(EXCLUDED_METADATA_NAMES).map((key) => {
  const at = key.indexOf(":");
  return `${key.slice(0, at)}:${normalizeMemberName(key.slice(at + 1))}`;
}));

/**
 * 外部メタデータの未登録名を「新規候補」と「対象外（お試し・調査済みの除外）」へ分ける。
 * 2026-09-11 まで「既存カタログ名を含む名称は派生」としていたが、千冶・刃・姫子・旅立ち・ロビン・夏空の歌のような
 * 独立した★5（丹恒・飲月と同じ型）を取りこぼしたため、名前の包含では判定しない（docs/batch-18-research-notes.md 区分2）。
 */
export function classifyMissingName(game: CatalogGameId, name: string): "new" | "derived" {
  if (/[（(]お試し[）)]/.test(name)) return "derived";
  return excludedIndex.has(`${game}:${normalizeMemberName(name)}`) ? "derived" : "new";
}

/** 推奨PTのメンバー名解決の集計（未解決と実装待ちの言及）。 */
export function memberResolutionSummary() {
  const unknown: Array<{ game: CatalogGameId; name: string; owner: string; optionId: string }> = [];
  const upcoming = new Map<string, { game: CatalogGameId; name: string; mentions: number }>();
  for (const game of AUDIT_GAMES) {
    for (const owner of CHARACTER_GUIDE_CATALOG[game]) {
      for (const option of partyRecommendationsFor(game, owner).options) {
        for (const member of option.members) {
          const resolution = resolvePartyMember(game, member.name.ja);
          if (resolution.kind === "unknown") unknown.push({ game, name: member.name.ja, owner, optionId: option.id });
          if (resolution.kind === "upcoming") {
            const key = `${game}:${resolution.canonical}`;
            const current = upcoming.get(key) ?? { game, name: resolution.canonical, mentions: 0 };
            upcoming.set(key, { ...current, mentions: current.mentions + 1 });
          }
        }
      }
    }
  }
  return { unknown, upcoming: [...upcoming.values()].sort((a, b) => b.mentions - a.mentions || a.name.localeCompare(b.name)) };
}

export type PriorityBucket = {
  id: "P0" | "P1" | "P2" | "P3";
  title: string;
  items: Array<{ game: CatalogGameId; name: string; reason: string }>;
};

/** P0〜P3 の分類。P0（カタログ未登録）は外部メタデータ由来のため引数で受け取る。 */
export function prioritize(
  records: CharacterAuditRecord[],
  options: { staleDays: number; newCharacters?: Array<{ game: CatalogGameId; name: string }> },
): PriorityBucket[] {
  const { staleDays, newCharacters = [] } = options;
  const pending = records.filter((record) => record.status === "pending");
  const incomplete = records.filter((record) =>
    record.status === "reviewed" && !(record.guideKind === "individual" && record.hasConstellation && record.hasParty));
  const incompleteKeys = new Set(incomplete.map((record) => `${record.game}:${record.name}`));
  const stale = records.filter((record) =>
    record.status === "reviewed" && !incompleteKeys.has(`${record.game}:${record.name}`) && record.ageDays !== null && record.ageDays >= staleDays);

  return [
    { id: "P0", title: "カタログ未登録（ゲーム側に実装済み）", items: newCharacters.map((entry) => ({ ...entry, reason: "外部メタデータにあるがカタログに無い（実装を要確認）" })) },
    { id: "P1", title: "未精査（台帳 pending）", items: pending.map((record) => ({ game: record.game, name: record.name, reason: "個別根拠での再精査が未実施" })) },
    {
      id: "P2",
      title: "精査済みだがデータ欠落",
      items: incomplete.map((record) => ({
        game: record.game,
        name: record.name,
        reason: [record.guideKind !== "individual" && "個別ガイド無し", !record.hasConstellation && "凸データ未整備", !record.hasParty && "推奨PTが自動生成"].filter(Boolean).join(" / "),
      })),
    },
    { id: "P3", title: `更新から${staleDays}日以上経過`, items: stale.map((record) => ({ game: record.game, name: record.name, reason: `最終更新 ${record.updatedAt}（${record.ageDays}日前）` })) },
  ];
}

/** 次に着手する候補（台帳の次バッチ候補 → P0〜P3 の順で最大20名）。 */
export function proposedNext(buckets: PriorityBucket[], limit = 20) {
  const ledger = characterUpdateLedger();
  const proposed = ledger.nextBatch.names.map((entry) => ({ game: entry.game, name: entry.name, reason: `台帳の第${ledger.nextBatch.id}バッチ候補` }));
  for (const bucket of buckets) {
    for (const item of bucket.items) {
      if (proposed.length >= limit) return proposed;
      if (proposed.some((entry) => entry.game === item.game && entry.name === item.name)) continue;
      proposed.push({ game: item.game, name: item.name, reason: `${bucket.id}: ${item.reason}` });
    }
  }
  return proposed;
}
