import { describe, expect, it } from "vitest";
import ts from "typescript";
import { adoptHelpers } from "../../scripts/content/adoptHelpers";
import { createLegacyTexts } from "./legacyTexts";

describe("constellation helper canonical migration", () => {
  it("preserves all nested legacy party prose groups and numeric targets", () => {
    const input =
      'const p=plan(["本人"],"相性","Synergy","配合",[change("speed","速度","SPD","速度","",154,150,145,"理由","Reason","缘由")]);const owner=ownMember(name,"役割","Role","角色");';
    const result = adoptHelpers(input, "party_fixture", "party");
    expect(result.sources.map(source => source.ja)).toEqual([
      "相性",
      "速度",
      "理由",
      "役割",
    ]);
    expect(result.migrated).toContain('"",154,150,145');
    expect(result.migrated).toContain('"../content/legacyTexts"');
    expect(
      adoptHelpers(result.migrated, "party_fixture", "party").sources
    ).toEqual([]);
    expect(adoptHelpers(input, "party_fixture").sources).toEqual([]);
    for (const records of Object.values(result.translations))
      for (const record of Object.values(records))
        expect(record).toMatchObject({
          sourceHash: null,
          review: "pending",
          origin: "legacy",
        });
  });
  it("preserves shorthand fallback and nested target options without overlapping edits", () => {
    const input =
      'const x=effect(1,"命ノ星座","Name","本文","Body","旧译",{targetChanges:[target("atk","攻撃力","ATK","攻击力","%",80,70,60,"理由","Reason","缘由")]});';
    const result = adoptHelpers(input, "test_helpers");
    expect(result.sources.map(source => source.ja)).toEqual([
      "命ノ星座",
      "本文",
      "攻撃力",
      "理由",
    ]);
    expect(
      createLegacyTexts(
        result.sources,
        result.translations.en,
        result.translations["zh-CN"]
      ).triple(result.sources[0]!.id)
    ).toEqual(["命ノ星座", "Name", "命之座"]);
    expect(result.migrated).toContain('"%",80,70,60');
    const ast = ts.createSourceFile(
      "sample.ts",
      result.migrated,
      ts.ScriptTarget.Latest,
      true
    );
    expect(
      (ast as unknown as { parseDiagnostics: unknown[] }).parseDiagnostics
    ).toEqual([]);
    expect(adoptHelpers(result.migrated, "test_helpers").sources).toHaveLength(
      0
    );
  });
});
