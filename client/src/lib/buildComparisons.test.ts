import { describe, expect, it } from "vitest";
import { deficitText, partyAdjustedComparisons, recommendationsFromComparisons, type Comparison, type PartyTargetChange } from "./buildComparisons";
import expected from "./buildComparisons.expected.json";

/**
 * Home から移動した比較計算の挙動保存（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.9・§8.1 F）。
 * 期待値は変更前コミット 13da1c6 の Home.tsx 実装の出力で、新しい関数からは作っていない。
 */

// 試験入力。期待値（buildComparisons.expected.json）は変更前コミット 13da1c6 の Home.tsx 実装でこの入力から生成して固定した。
type Tiered = { "厳選": number; "目標": number; "妥協": number };
const tiers = (strict: number, target: number, compromise: number): Tiered => ({ "厳選": strict, "目標": target, "妥協": compromise });
const text = (ja: string, en: string, zh: string) => ({ ja, en, "zh-CN": zh });
const comparison = (key: string, label: string, unit: string, current: number | null, targets: Tiered) => ({
  key, label, unit, current, currentDisplay: current === null ? "—" : `${current}${unit}`, targets,
  achieved: { "厳選": current === null ? null : current >= targets["厳選"], "目標": current === null ? null : current >= targets["目標"], "妥協": current === null ? null : current >= targets["妥協"] },
});

const base = [
  comparison("critRate", "会心率", "%", 62.3, tiers(75, 70, 60)),
  comparison("critDmg", "会心ダメージ", "%", 140, tiers(160, 150, 130)),
  comparison("speed", "速度", "", 134, tiers(160, 145, 134)),
  comparison("energyRegen", "EP回復効率", "%", 119.39999999999999, tiers(124.4, 119.4, 110)),
  comparison("attack", "攻撃力", "", null, tiers(3800, 3500, 3000)),
  comparison("hp", "HP", "", 2400, tiers(5000, 4000, 3500)),
];
const stats = [
  { name: "撃破特効", display: "1,234.5%", icon: null },
  { name: "効果命中", display: "67.2%", icon: null },
  { name: "元素熟知", display: "—", icon: null },
];

const FIXTURES = {
  noChanges: { base, stats, changes: [] },
  override: {
    base, stats,
    changes: [
      { key: "speed", label: text("速度（PT）", "SPD (team)", "速度（队伍）"), unit: "" as const, targets: tiers(170, 160, 150), reason: text("r", "r", "r") },
      { key: "attack", label: text("攻撃力", "ATK", "攻击力"), unit: "" as const, targets: tiers(4000, 3600, 3200), reason: text("r", "r", "r") },
      { key: "energyRegen", label: text("EP回復効率", "Energy Regen", "能量恢复效率"), unit: "%" as const, targets: tiers(124.4, 119.4, 110), reason: text("r", "r", "r") },
    ],
  },
  newStats: {
    base, stats,
    changes: [
      { key: "breakEffect", label: text("撃破特効", "Break Effect", "击破特攻"), unit: "%" as const, targets: tiers(1300, 1250, 1100), reason: text("r", "r", "r") },
      { key: "effectHitRate", label: text("効果命中", "Effect Hit Rate", "效果命中"), unit: "%" as const, targets: tiers(80, 67.2, 50), reason: text("r", "r", "r") },
      { key: "elementalMastery", label: text("元素熟知", "Elemental Mastery", "元素精通"), unit: "" as const, targets: tiers(300, 200, 100), reason: text("r", "r", "r") },
      { key: "impact", label: text("衝撃力", "Impact", "冲击力"), unit: "" as const, targets: tiers(200, 180, 150), reason: text("r", "r", "r") },
    ],
  },
  duplicateKeys: {
    base, stats,
    changes: [
      { key: "critRate", label: text("会心率（PT）", "CRIT Rate (team)", "暴击率（队伍）"), unit: "%" as const, targets: tiers(70, 65, 55), reason: text("r", "r", "r") },
      { key: "breakEffect", label: text("撃破特効A", "Break A", "击破A"), unit: "%" as const, targets: tiers(1300, 1250, 1100), reason: text("r", "r", "r") },
      { key: "critRate", label: text("会心率（凸）", "CRIT Rate (eidolon)", "暴击率（星魂）"), unit: "%" as const, targets: tiers(80, 62.3, 50), reason: text("r", "r", "r") },
      { key: "breakEffect", label: text("撃破特効B", "Break B", "击破B"), unit: "%" as const, targets: tiers(1400, 1300, 1200), reason: text("r", "r", "r") },
    ],
  },
};

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
