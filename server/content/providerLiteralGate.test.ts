import { describe, expect, it } from "vitest";
import { checkProviderLiteralGate, compareProviderLiterals, providerLiterals } from "../../scripts/content/providerLiteralGate";

describe("reviewed provider literal exclusions", () => {
  it("checks every registered occurrence in the current provider files", () => {
    expect(checkProviderLiteralGate().reviewedOccurrences).toBe(81);
  });
  it("rejects new display prose, changed contexts, duplicates, removals and unexplained exclusions", () => {
    const original = 'const tier = "目標";';
    const actual = providerLiterals(original, "fixture.ts");
    const expected = actual.map(entry => ({ ...entry, count: 1, reason: "Calculation key", withdrawal: "When key contract changes" }));
    expect(compareProviderLiterals(actual, expected)).toEqual([]);
    for (const changed of [original + ' const display="未登録の説明";', 'const display="目標";', original + original, ""]) {
      expect(compareProviderLiterals(providerLiterals(changed, "fixture.ts"), expected).length).toBeGreaterThan(0);
    }
    expect(compareProviderLiterals(actual, expected.map(entry => ({ ...entry, reason: "" })))).not.toEqual([]);
  });
});
