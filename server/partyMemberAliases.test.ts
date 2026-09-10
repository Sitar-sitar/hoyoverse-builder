import { describe, expect, it } from "vitest";
import { CHARACTER_GUIDE_CATALOG, type CatalogGameId } from "./characterGuideCatalog";
import { partyRecommendationsFor } from "./partyRecommendations";
import { NON_CATALOG_PARTY_MEMBERS, PARTY_MEMBER_ALIASES, UPCOMING_PARTY_MEMBERS, resolvePartyMember } from "./partyMemberAliases";

const GAMES: CatalogGameId[] = ["hsr", "genshin", "zzz"];

describe("推奨PTメンバー名の解決", () => {
  // 新しい表記ゆれを持ち込むとここで落ちる（設計書 §4.1.2 の回帰ゲート）。
  it("全248名の全案の全メンバーが unknown にならない", () => {
    const unresolved: string[] = [];
    for (const game of GAMES) {
      for (const owner of CHARACTER_GUIDE_CATALOG[game]) {
        for (const option of partyRecommendationsFor(game, owner).options) {
          for (const member of option.members) {
            if (resolvePartyMember(game, member.name.ja).kind === "unknown") {
              unresolved.push(`${game}:${member.name.ja}（${owner} / ${option.id}）`);
            }
          }
        }
      }
    }
    expect(unresolved).toEqual([]);
  });

  it("カタログ名はそのまま catalog として解決する", () => {
    expect(resolvePartyMember("hsr", "ホタル")).toEqual({ kind: "catalog", canonical: "ホタル" });
    expect(resolvePartyMember("genshin", "ナヒーダ")).toEqual({ kind: "catalog", canonical: "ナヒーダ" });
  });

  it("表記ゆれは 2026-09-10 の統一で解消済み（別名表は空）", () => {
    expect(PARTY_MEMBER_ALIASES).toEqual({});
    // 旧表記はデータ側から消えており、正規名がカタログとして解決される。
    expect(resolvePartyMember("zzz", "「トリガー」")).toEqual({ kind: "catalog", canonical: "「トリガー」" });
    expect(resolvePartyMember("zzz", "潘引壺")).toEqual({ kind: "catalog", canonical: "潘引壺" });
    expect(resolvePartyMember("hsr", "丹恒・飲月")).toEqual({ kind: "catalog", canonical: "丹恒・飲月" });
  });

  it("中黒の全角・半角差を NFKC 正規化で吸収する", () => {
    // データ側は「スターライト・ビリー」、カタログは「スターライト･ビリー」。
    expect(resolvePartyMember("zzz", "スターライト・ビリー").canonical).toBe("スターライト･ビリー");
  });

  it("正当な派生は variant として理由付きで返す", () => {
    const march = resolvePartyMember("hsr", "三月なのか（巡狩）");
    expect(march.kind).toBe("variant");
    expect(march.note).toContain("1224");
  });

  it("実装待ちの名前は upcoming として返す", () => {
    expect(resolvePartyMember("genshin", "オデット").kind).toBe("upcoming");
    // ロビン・夏空の歌（hsr:1512）は第18バッチ（2026-09-11）でカタログへ追加した。派生ではなくカタログ名として解決する。
    expect(resolvePartyMember("hsr", "ロビン・夏空の歌").kind).toBe("catalog");
  });

  it("表に無い名前は unknown を返す", () => {
    expect(resolvePartyMember("hsr", "存在しないキャラ")).toEqual({ kind: "unknown", canonical: "存在しないキャラ" });
  });

  it("解決表のキーが game:name 形式で、同じ表記を複数の分類へ登録していない", () => {
    const keys = [...Object.keys(PARTY_MEMBER_ALIASES), ...Object.keys(NON_CATALOG_PARTY_MEMBERS), ...Object.keys(UPCOMING_PARTY_MEMBERS)];
    for (const key of keys) expect(key).toMatch(/^(hsr|genshin|zzz):.+/);
    expect(keys.length).toBe(new Set(keys).size);
  });

  it("別名を足す場合は解決先が実在すること（表が空でも規約を守る）", () => {
    const missing: string[] = [];
    for (const [key, canonical] of Object.entries(PARTY_MEMBER_ALIASES)) {
      const game = key.slice(0, key.indexOf(":")) as CatalogGameId;
      const inCatalog = (CHARACTER_GUIDE_CATALOG[game] as readonly string[]).includes(canonical);
      const inVariants = Object.hasOwn(NON_CATALOG_PARTY_MEMBERS, `${game}:${canonical}`);
      if (!inCatalog && !inVariants) missing.push(`${key} → ${canonical}`);
    }
    expect(missing).toEqual([]);
  });
});
