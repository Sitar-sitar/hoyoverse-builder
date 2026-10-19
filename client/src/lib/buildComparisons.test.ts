import { describe, expect, it } from "vitest";
import { deficitText, partyAdjustedComparisons, recommendationsFromComparisons, type Comparison, type PartyTargetChange } from "./buildComparisons";
import { FIXTURES } from "./buildComparisons.fixtures";
import expected from "./buildComparisons.expected.json";

/**
 * Home から移動した比較計算の挙動保存（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.9・§8.1 F）。
 * 期待値は変更前コミット 13da1c6 の Home.tsx 実装の出力で、新しい関数からは作っていない。
 */

const languages = ["ja", "en", "zh-CN"] as const;
const roundTrip = (value: unknown) => JSON.parse(JSON.stringify(value));

describe("buildComparisons（旧実装の出力と一致）", () => {
  for (const language of languages) {
    for (const [name, fixture] of Object.entries(FIXTURES)) {
      it(`${name} / ${language}: 目標補正・新規stat・同一key・丸め境界・nullが旧実装と一致する`, () => {
        const adjusted = partyAdjustedComparisons(fixture.base as Comparison[], fixture.stats, fixture.changes as PartyTargetChange[], language);
        const result = { adjusted, recommendations: recommendationsFromComparisons(adjusted, language) };
        expect(roundTrip(result)).toEqual((expected as Record<string, unknown>)[`${name}/${language}`]);
      });
    }

    it(`deficitText / ${language}: 丸めて0になる不足を達成済みに見せない`, () => {
      const cases: Array<[number, string]> = [[0.04, "%"], [0.05, "%"], [0.4, ""], [0.6, ""], [12.345, "%"], [7, ""]];
      expect(cases.map(([deficit, unit]) => deficitText(deficit, unit, language))).toEqual((expected as Record<string, unknown>)[`deficit/${language}`]);
    });
  }

  it("補正が無いときは入力配列をそのまま返す", () => {
    const base = FIXTURES.noChanges.base as Comparison[];
    expect(partyAdjustedComparisons(base, FIXTURES.noChanges.stats, [], "ja")).toBe(base);
  });
});
