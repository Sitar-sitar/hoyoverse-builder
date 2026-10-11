import { describe, expect, it } from "vitest";
import { uiFormat } from "../../client/src/content/ui";
import { uiFormat as adminFormat } from "../../client/src/content/ui.admin";

describe("UI typed template rendering", () => {
  it("keeps legacy deficit formatting for all languages and numeric boundaries", () => {
    for (const language of ["ja", "en", "zh-CN"] as const) {
      expect(uiFormat("ui.home.deficit.under", { amount: "0.1", unit: "%" }, language)).toBe(language === "ja" ? "あと 0.1%未満" : "-<0.1%");
      expect(uiFormat("ui.home.recommendation.target", { target: 70, unit: "%", deficit: "不足" }, language)).toBe(language === "ja" ? "目標 70% まで不足" : "70% / 不足");
    }
    expect(adminFormat("ui.admin.languages.waitingCount", { count: 10 })).toBe("確認待ちの文章：10件。");
  });
  it("rejects missing, extra, wrong-type and non-finite variables", () => {
    for (const variables of [{}, { count: "10" }, { count: Infinity }, { count: 10, extra: "x" }]) {
      expect(() => adminFormat("ui.admin.languages.waitingCount", variables)).toThrow();
    }
    expect(() => uiFormat("ui.unknown", {})).toThrow();
  });
});
