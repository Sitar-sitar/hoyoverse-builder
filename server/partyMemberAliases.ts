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
  // ZZZ: フルネーム・愛称・中黒の全角半角差
  "zzz:トリガー": "「トリガー」",
  "zzz:スターライト・ビリー": "スターライト･ビリー", // 中黒が全角/半角で異なるだけ（NFKC 正規化で一致）
  "zzz:ジェーン・ドゥ": "ジェーン",
  "zzz:パイパー・ウィール": "パイパー",
  "zzz:グレース・ハワード": "グレース",
  "zzz:オルペウス": "オルペウス&「鬼火」",
  "zzz:フーフー": "橘福福", // 橘福福（チー・フーフー）の愛称
  "zzz:パン・インフー": "潘引壺", // 潘引壺（パン・インフー）の読み
  "zzz:パン": "潘引壺", // 姓「潘」の略称
  // HSR
  "hsr:飲月": "丹恒・飲月",
  "hsr:ルオチャ": "羅刹", // Luocha の音写
  "hsr:永夜": "長夜月",
  "hsr:銀狼LV.999": "銀狼Lv.999", // 解決先は派生実装（hsr:1506）
  // 原神: 元素指定付きの主人公表記。監査上は基礎キャラクター（旅人）へ解決する。
  "genshin:主人公（草）": "旅人",
  "genshin:主人公(草)": "旅人",
  "genshin:草主人公": "旅人",
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
  // 公開メタデータには存在するがカタログ（2026-08-18 スナップショット）に未登録。カタログ追加候補（監査 P0）。
  "hsr:姫子・旅立ち": "姫子の別実装（hsr:1510）。カタログ未登録のため追加候補",
  "hsr:千冶・刃": "刃の別実装（hsr:1507）。カタログ未登録のため追加候補",
};

/**
 * カタログ未登録かつ公開メタデータにも無い名前。値は初出の言及数と確認日。
 * 新キャラクター追加時の推奨PT影響レビュー（partyImpact）の第一入力になる。
 */
export const UPCOMING_PARTY_MEMBERS: Record<string, { mentions: number; checkedAt: string; note?: string }> = {
  "hsr:ロビン・夏空の歌": { mentions: 3, checkedAt: "2026-09-10", note: "Game8 の未実装キャラ一覧に掲載（Ver4.5以降・風/記憶）" },
  "hsr:アシュヴェイル": { mentions: 1, checkedAt: "2026-09-10" },
  "hsr:パーマンソー・テラエ": { mentions: 2, checkedAt: "2026-09-10" },
  "hsr:モルトナックス・ブレード": { mentions: 1, checkedAt: "2026-09-10", note: "Ver4.3 ベータで公開された名前" },
  "hsr:モーテナックス・ブレード": { mentions: 2, checkedAt: "2026-09-10", note: "モルトナックス・ブレードの表記ゆれの可能性。実装時に同一か確認する" },
  "genshin:茲白": { mentions: 2, checkedAt: "2026-09-10" },
  "genshin:イルーガ": { mentions: 3, checkedAt: "2026-09-10" },
  "genshin:オデット": { mentions: 2, checkedAt: "2026-09-10" },
  "genshin:リンネア": { mentions: 1, checkedAt: "2026-09-10" },
  "zzz:スンナ": { mentions: 1, checkedAt: "2026-09-10" },
  "zzz:イーシェン": { mentions: 1, checkedAt: "2026-09-10" },
  "zzz:ザオ": { mentions: 1, checkedAt: "2026-09-10" },
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
