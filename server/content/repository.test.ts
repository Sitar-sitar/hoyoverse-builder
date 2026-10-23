import { describe, expect, it, vi } from "vitest";
import { contentManifest, contentRepository, plannedSections } from "./repository";
import { contentCommand } from "../../scripts/content/commands";
import { adoptModule } from "../../scripts/content/adopt";
import { createLegacyTexts } from "./legacyTexts";

describe("repository content maintenance", () => {
  it("reports information gaps for all characters separately from untranslated source text", () => {
    const sections = plannedSections();
    expect(sections).toHaveLength(514);
    expect(sections.every(section => section.visibility === "planned" && section.section.status === "notCollected")).toBe(true);
    expect(new Set(sections.map(section => section.id)).size).toBe(514);
    expect(contentRepository().issues).toEqual([]);
    expect(contentManifest()).toMatchObject({ schemaVersion: 1, translationMode: "preparation", readyLanguages: ["ja"] });
  });

  it("checks generated files, exports candidates and returns 2 for unready languages without translation", () => {
    const output = vi.spyOn(console, "log").mockImplementation(() => {});
    try {
      expect(contentCommand(["check"])).toBe(0);
      expect(contentCommand(["report", "--", "--format", "json"])).toBe(0);
      const report = JSON.parse(output.mock.calls.at(-1)![0]);
      expect(report.information.notCollected).toHaveLength(1650);
      expect(report.unresolvedGuideFields).toHaveLength(284);
      expect(report.unresolvedTeamMembers.length).toBeGreaterThan(0);
      expect(report.externalNames.unresolvedCount).toBe(30);
      expect(report.externalNames.entries).toHaveLength(33);
      expect(contentCommand(["export", "--language", "en"])).toBe(0);
      const candidates = JSON.parse(output.mock.calls.at(-1)![0]);
      expect(candidates.length).toBeGreaterThan(5000);
      expect(candidates.every((entry: {state: string}) => entry.state !== "approved")).toBe(true);
      expect(contentCommand(["ready", "--language", "en", "--scope", "public"])).toBe(2);
      expect(contentCommand(["ready", "--language", "zh-CN", "--scope", "public"])).toBe(2);
      expect(JSON.parse(output.mock.calls.at(-1)![0]).unresolvedMembers.length).toBeGreaterThan(0);
      expect(JSON.parse(output.mock.calls.at(-1)![0]).unresolvedGuides).toHaveLength(284);
      expect(JSON.parse(output.mock.calls.at(-1)![0]).unresolvedExternalNames).toHaveLength(30);
      expect(contentCommand(["ready", "--language", "zh-CN", "--scope", "admin"])).toBe(2);
      expect(JSON.parse(output.mock.calls.at(-1)![0]).unresolvedMembers).toEqual([]);
      expect(JSON.parse(output.mock.calls.at(-1)![0]).unresolvedGuides).toEqual([]);
      expect(JSON.parse(output.mock.calls.at(-1)![0]).unresolvedExternalNames).toEqual([]);
      expect(() => contentCommand(["export", "--language", "zh-TW"])).toThrow();
    } finally { output.mockRestore(); }
  // 全コンテンツの検査・出力を同期で行うため約5秒かかる。vitest 4は同期テストの期限超過も失敗にする。
  }, 30_000);

  it("preserves typed history variables and rejects wrong values", () => {
    const result = adoptModule('const e={summary:(name,record)=>`${name}を${record.added.length}案更新`};', "historyTest");
    const source = result.sources[0]!;
    expect(source.placeholders).toEqual({ v0: "string", v1: "number" });
    const texts = createLegacyTexts(result.sources, {}, {});
    expect(texts.ja(source.id, { v0: "キャラ", v1: 2 })).toBe("キャラを2案更新");
    expect(() => texts.ja(source.id, { v0: "キャラ", v1: "2" })).toThrow("Invalid content variable");
  });
});
