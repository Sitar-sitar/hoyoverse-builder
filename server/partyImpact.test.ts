import { describe, expect, it } from "vitest";
import { partyImpactFor, formatPartyImpactMarkdown } from "./partyImpact";
import { resolvePartyMember, type PartyMemberResolution } from "./partyMemberAliases";
import type { CatalogGameId } from "./characterGuideCatalog";

describe("推奨PT影響レビュー", () => {
  it("alias 経由の言及も mentioned に入る（zzz:潘引壺 は パン / パン・インフー 表記でも拾う）", () => {
    const report = partyImpactFor("zzz", "潘引壺");
    const owners = report.mentioned.map((entry) => entry.owner);
    // 「パン」表記で言及している イドリー・プルクラ・狛野真斗 と、「パン・インフー」表記の リュシア。
    expect(owners).toEqual(expect.arrayContaining(["イドリー", "プルクラ", "狛野真斗", "リュシア"]));
    expect(report.mentioned.some((entry) => entry.matchedAs === "alias")).toBe(true);
  });

  it("対象自身の案は mentioned に入らない", () => {
    const report = partyImpactFor("hsr", "ホタル");
    expect(report.mentioned.every((entry) => entry.owner !== "ホタル")).toBe(true);
  });

  it("未実装の名前でも言及済みPTを洗い出せる（新キャラクター追加の第一入力）", () => {
    const report = partyImpactFor("genshin", "オデット");
    expect(report.selfStatus).toBe("absent");
    expect(report.mentioned).toHaveLength(2);
    expect(report.mentioned.every((entry) => entry.owner === "イファ")).toBe(true);
    expect(report.mentioned.every((entry) => entry.matchedAs === "upcoming")).toBe(true);
  });

  it("同役割の枠だけが replaceable に入る（HSR）", () => {
    const report = partyImpactFor("hsr", "ギャラガー"); // 豊穣（Priest）
    expect(report.target.role).toBe("Priest");
    for (const entry of report.sameRoleOwners) {
      expect(entry.replaceable.length).toBeGreaterThan(0);
      expect(entry.optionId).toBeTruthy();
    }
    // 置換候補に対象自身や案の持ち主は入らない。
    for (const entry of report.sameRoleOwners) {
      expect(entry.replaceable).not.toContain("ギャラガー");
      expect(entry.replaceable).not.toContain(entry.owner);
    }
  });

  it("原神は同役割候補を出さない（設計 §10-2 の決定）", () => {
    const report = partyImpactFor("genshin", "ナヒーダ");
    expect(report.target.role).toBeNull();
    expect(report.sameRoleOwners).toEqual([]);
    expect(report.mentioned.length).toBeGreaterThan(0);
  });

  it("解決表を差し替えられる（フィクスチャ注入）", () => {
    const fixture = (game: CatalogGameId, name: string): PartyMemberResolution =>
      name === "ルアン・メェイ" ? { kind: "alias", canonical: "テスト対象" } : resolvePartyMember(game, name);
    const report = partyImpactFor("hsr", "テスト対象", fixture);
    expect(report.selfStatus).toBe("absent");
    expect(report.mentioned.length).toBeGreaterThan(0);
    expect(report.mentioned.every((entry) => entry.matchedAs === "alias")).toBe(true);
  });

  it("Markdown はチェックリスト形式で出力する", () => {
    const markdown = formatPartyImpactMarkdown(partyImpactFor("genshin", "オデット"));
    expect(markdown).toContain("### genshin:オデット の推奨PT影響レビュー");
    expect(markdown).toContain("#### 言及済みPT（2件");
    expect(markdown.match(/^- \[ \] /gm)?.length).toBe(2);
  });
});
