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

  it("表記ゆれを正規名へ解決する", () => {
    expect(resolvePartyMember("zzz", "トリガー")).toMatchObject({ kind: "alias", canonical: "「トリガー」" });
    expect(resolvePartyMember("hsr", "飲月")).toMatchObject({ kind: "alias", canonical: "丹恒・飲月" });
    expect(resolvePartyMember("zzz", "パン")).toMatchObject({ kind: "alias", canonical: "潘引壺" });
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
    expect(resolvePartyMember("hsr", "ロビン・夏空の歌").kind).toBe("variant"); // 2026-09-10 に公開メタデータで実装済みを確認（hsr:1512）
  });

  it("表に無い名前は unknown を返す", () => {
    expect(resolvePartyMember("hsr", "存在しないキャラ")).toEqual({ kind: "unknown", canonical: "存在しないキャラ" });
  });

  it("解決表のキーが game:name 形式で、同じ表記を複数の分類へ登録していない", () => {
    const keys = [...Object.keys(PARTY_MEMBER_ALIASES), ...Object.keys(NON_CATALOG_PARTY_MEMBERS), ...Object.keys(UPCOMING_PARTY_MEMBERS)];
    for (const key of keys) expect(key).toMatch(/^(hsr|genshin|zzz):.+/);
    expect(keys.length).toBe(new Set(keys).size);
  });

  it("別名の解決先が実在する（カタログ名または登録済みの派生名）", () => {
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
