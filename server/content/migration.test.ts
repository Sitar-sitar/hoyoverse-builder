import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { collectBaseline } from "../../scripts/content/baseline";
import { stageCandidate } from "../../scripts/content/migrate";
import { legacyProjection, migrateCandidate } from "./migration";

describe("legacy migration preflight", () => {
  it("preserves all 257 characters, both guide paths, related teams, history and all translations exactly", () => {
    const input = collectBaseline();
    const candidate = migrateCandidate(input);
    expect(input.characters).toHaveLength(257);
    expect(legacyProjection(candidate)).toEqual(input);
    expect(JSON.stringify(legacyProjection(candidate))).toBe(JSON.stringify(input));
    for (const records of Object.values(candidate.catalog.translations)) {
      expect(Object.keys(records).length).toBeGreaterThan(1000);
      for (const record of Object.values(records)) expect(record).toMatchObject({ sourceHash: null, review: "pending", origin: "legacy" });
    }
  });

  it("rejects added unknown fields, including numeric fields and extra language fields", () => {
    expect(() => migrateCandidate({ headline: "本文", extra: 1 })).toThrow("Unclassified field");
    expect(() => migrateCandidate({ title: { ja: "本文", en: "old", "zh-CN": "old", extra: "hidden" } })).toThrow("Unknown localized field");
  });

  it("preserves every paragraph and never copies Japanese into missing translations", () => {
    const input = { synergy: [{ ja: "第1段", en: "", "zh-CN": "旧訳" }, { ja: "第2段", en: "old", "zh-CN": "" }] };
    const candidate = migrateCandidate(input);
    expect(candidate.mapping).toHaveLength(2);
    expect(legacyProjection(candidate)).toEqual(input);
    expect(() => migrateCandidate({ title: { ja: "本文", en: "old" } })).toThrow();
  });

  it("detects broken references and deleted preserved translations during projection", () => {
    const candidate = migrateCandidate({ title: { ja: "本文", en: "old", "zh-CN": "old" } });
    delete candidate.catalog.translations.en[candidate.mapping[0]!.id];
    expect(() => legacyProjection(candidate)).toThrow("Missing preserved translation");
  });

  it("is deterministic, idempotent, refuses changed input, and leaves prior staging intact", () => {
    const directory = mkdtempSync(join(tmpdir(), "content-migration-"));
    const target = join(directory, "candidate.json");
    try {
      const candidate = migrateCandidate({ headline: "原文70%", targets: [] });
      expect(migrateCandidate({ headline: "原文70%", targets: [] })).toEqual(candidate);
      expect(stageCandidate(candidate, target)).toBe("created");
      const saved = readFileSync(target, "utf8");
      expect(stageCandidate(candidate, target)).toBe("unchanged");
      const corrupted = structuredClone(candidate);
      corrupted.catalog.sources[0]!.ja = "改ざん";
      expect(() => stageCandidate(corrupted, join(directory, "corrupted.json"))).toThrow("integrity");
      expect(() => stageCandidate(migrateCandidate({ headline: "変更80%", targets: [] }), target)).toThrow("differs");
      expect(readFileSync(target, "utf8")).toBe(saved);
      writeFileSync(join(directory, "other.json.partial"), "interrupted");
      expect(() => stageCandidate(candidate, join(directory, "other.json"))).toThrow("Partial migration");
    } finally { rmSync(directory, { recursive: true, force: true }); }
  });
});
