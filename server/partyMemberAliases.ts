import { CHARACTER_GUIDE_CATALOG, type CatalogGameId } from "./characterGuideCatalog";

export type PartyMemberKind = "catalog" | "alias" | "variant" | "upcoming" | "unknown";
export type PartyMemberResolution = { kind: PartyMemberKind; canonical: string; note?: string };

/**
 * 推奨PTのメンバー名をカタログ名へ解決するための表。
 * **表示には使わない**（API 出力は不変）。監査・推奨PT影響レビュー・回帰ゲートの入力にだけ使う。
 * 分類の根拠は 2026-09-10 に identity スナップショット（公開メタデータ281件）との照合と公開情報で確定した。
 */

/** 表記ゆれ → 実在する名前（カタログ名、または NON_CATALOG_PARTY_MEMBERS の派生名）。キーは `game:表記`。 */
export const PARTY_MEMBER_ALIASES: Record<string, string> = {
  // 2026-09-10 の表記統一（設計書 §4.3 ①）で16表記をすべて正規名へ書き換えたため空。
  // 新しい表記ゆれを一時的に受け入れる場合だけここへ足し、データ側を直したら削除する。
};

/** カタログに無い正当な派生・別実装。キーは `game:表記`、値は理由。 */
export const NON_CATALOG_PARTY_MEMBERS: Record<string, string> = {
  // 開拓者（主人公）の運命別実装。カタログは基礎キャラクターを持たない。
  "hsr:記憶主人公": "開拓者（記憶）の別表記。カタログは開拓者を持たない",
  "hsr:開拓者（記憶）": "開拓者の記憶実装（hsr:8007 / 8008）",
  "hsr:開拓者（調和）": "開拓者の調和実装（hsr:8005 / 8006）",
  "hsr:開拓者（存護）": "開拓者の存護実装（hsr:8003 / 8004）",
  "hsr:開拓者（愉悦）": "開拓者の歓楽実装（hsr:8009 / 8010）",
  "hsr:調和主人公": "開拓者（調和）の別表記",
  "hsr:愉悦主人公": "開拓者（愉悦）の別表記",
  // 同名・別 source ID の派生実装（公開メタデータで実在を確認）
  "hsr:三月なのか（巡狩）": "三月なのかの巡狩実装（hsr:1224）。存護（hsr:1001）とは別データ",
  "hsr:銀狼Lv.999": "銀狼の別実装（hsr:1506）",
  "genshin:旅人（草）": "旅人の草元素実装。カタログは元素を持たない基礎名（旅人）だけを載せる",
  // 公開メタデータには存在するがカタログ（2026-08-18 スナップショット）に未登録。カタログ追加候補（監査 P0）。
  "hsr:姫子・旅立ち": "姫子の別実装（hsr:1510）。カタログ未登録のため追加候補",
  "hsr:千冶・刃": "刃の別実装（hsr:1507）。カタログ未登録のため追加候補",
  "hsr:ロビン・夏空の歌": "ロビンの別実装（hsr:1512）。2026-09-10 の公開メタデータ取得で実装済みを確認。カタログ未登録のため追加候補",
};

/**
 * カタログ未登録かつ公開メタデータにも無い名前。値は初出の言及数と確認日。
 * 新キャラクター追加時の推奨PT影響レビュー（partyImpact）の第一入力になる。
 */
export const UPCOMING_PARTY_MEMBERS: Record<string, { mentions: number; checkedAt: string; note?: string }> = {
  "hsr:モルトナックス・ブレード": { mentions: 1, checkedAt: "2026-09-10", note: "Ver4.3 ベータで公開された名前" },
  "hsr:モーテナックス・ブレード": { mentions: 2, checkedAt: "2026-09-10", note: "モルトナックス・ブレードの表記ゆれの可能性。実装時に同一か確認する" },
  "genshin:茲白": { mentions: 2, checkedAt: "2026-09-11", note: "実装済み（GameWith 2026-09-10）だが取得元（Enka）にIDが無く、source ID を確定できないためカタログ追加できない。docs/batch-18-research-notes.md 区分3" },
  "genshin:イルーガ": { mentions: 3, checkedAt: "2026-09-11", note: "実装済み（GameWith 2026-09-10）だが取得元（Enka）にIDが無く、source ID を確定できないためカタログ追加できない。docs/batch-18-research-notes.md 区分3" },
  "genshin:オデット": { mentions: 2, checkedAt: "2026-09-11", note: "実装済み（GameWith 2026-09-10）だが取得元（Enka）にIDが無く、source ID を確定できないためカタログ追加できない。docs/batch-18-research-notes.md 区分3" },
  "genshin:リンネア": { mentions: 1, checkedAt: "2026-09-11", note: "実装済み（GameWith 2026-09-10）だが取得元（Enka）にIDが無く、source ID を確定できないためカタログ追加できない。docs/batch-18-research-notes.md 区分3" },
  "zzz:スンナ": { mentions: 1, checkedAt: "2026-09-11", note: "未実装（GameWith キャラ一覧 2026-09-10 の59名に無い）" },
};

/** 監査用の名前正規化。NFKC で全角/半角差を吸収し、空白を除く。 */
export function normalizeMemberName(name: string): string {
  return name.normalize("NFKC").replace(/\s+/g, "");
}

const catalogIndex = new Map<string, string>();
for (const game of ["hsr", "genshin", "zzz"] as CatalogGameId[]) {
  for (const name of CHARACTER_GUIDE_CATALOG[game]) {
    catalogIndex.set(`${game}:${normalizeMemberName(name)}`, name);
  }
}
const buildIndex = (source: Record<string, unknown>) => {
  const index = new Map<string, string>();
  for (const key of Object.keys(source)) {
    const at = key.indexOf(":");
    index.set(`${key.slice(0, at)}:${normalizeMemberName(key.slice(at + 1))}`, key);
  }
  return index;
};
const aliasIndex = buildIndex(PARTY_MEMBER_ALIASES);
const variantIndex = buildIndex(NON_CATALOG_PARTY_MEMBERS);
const upcomingIndex = buildIndex(UPCOMING_PARTY_MEMBERS);

/**
 * 推奨PTのメンバー名を分類する。判定順はカタログ → 別名 → 派生 → 実装待ち → 未解決。
 * 未解決（unknown）は新しい表記ゆれの持ち込みを示す。partyMemberAliases.test.ts がゲートになる。
 */
export function resolvePartyMember(game: CatalogGameId, name: string): PartyMemberResolution {
  const key = `${game}:${normalizeMemberName(name)}`;

  const catalog = catalogIndex.get(key);
  if (catalog) return { kind: "catalog", canonical: catalog };

  const aliasKey = aliasIndex.get(key);
  if (aliasKey) return { kind: "alias", canonical: PARTY_MEMBER_ALIASES[aliasKey]! };

  const variantKey = variantIndex.get(key);
  if (variantKey) {
    const at = variantKey.indexOf(":");
    return { kind: "variant", canonical: variantKey.slice(at + 1), note: NON_CATALOG_PARTY_MEMBERS[variantKey] };
  }

  const upcomingKey = upcomingIndex.get(key);
  if (upcomingKey) {
    const at = upcomingKey.indexOf(":");
    const entry = UPCOMING_PARTY_MEMBERS[upcomingKey]!;
    return { kind: "upcoming", canonical: upcomingKey.slice(at + 1), note: entry.note ?? `実装待ち（${entry.checkedAt} 確認）` };
  }

  return { kind: "unknown", canonical: name };
}
