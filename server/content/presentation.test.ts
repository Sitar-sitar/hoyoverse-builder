import { describe, expect, it, vi } from "vitest";
import { collectBaseline } from "../../scripts/content/baseline";
import { withCatalogPresentation, withHistoryPresentation, withLookupPresentation, withPresentation,characterInformationFor } from "./presentation";
import {characterRecords} from "../../content/characters";
import { characterReferenceCatalog } from "../characterReference";
import { guideUpdateHistory } from "../guideUpdateHistory";
import { selectPresentation,validPresentation } from "../../client/src/content/presentation";

describe("Japanese presentation DTO boundary", () => {
  it("derives information states from authoring records and rejects unknown DTO states",()=>{
    const record=structuredClone(characterRecords[0]!);
    record.introduction={status:"registered",evidence:"fixture",data:[record.name]};
    record.skills={status:"notApplicable",reason:"fixture only",evidence:"fixture"};
    expect(characterInformationFor(record.identityKey,[record])).toEqual({introduction:"registered",skills:"notApplicable"});
    expect(characterInformationFor("unknown",[record])).toEqual({introduction:"notCollected",skills:"notCollected"});
    const result=withPresentation({name:"fixture"},record.identityKey);
    expect(validPresentation({...result.presentation,information:{introduction:"unknown",skills:"notCollected"}})).toBe(false);
    expect(validPresentation({...result.presentation,information:null})).toBe(false);
  });
  it("preserves catalog/history caches, identities and counts with Japanese display DTOs", () => {
    for (const [value, project] of [[characterReferenceCatalog(), withCatalogPresentation], [guideUpdateHistory(), withHistoryPresentation]] as const) {
      const original = JSON.stringify(value);
      const result = project(value);
      const { presentation, ...legacy } = result;
      expect(legacy).toEqual(value);
      expect(JSON.stringify(value)).toBe(original);
      expect(selectPresentation(result)).toEqual(result);
      expect(presentation.language).toBe("ja");
      expect(JSON.stringify(presentation)).not.toContain('"sourceHash"');
    }
    const value = withHistoryPresentation({ characters: [{ game: "hsr", name: "名前", sourceId: "1001", events: [{ date: "2026-10-10", title: "更新", scope: "character", games: ["hsr"] }] }], updateLedger: { total: 256 } });
    value.presentation.display.characters = [{ game: "zzz", name: "表示名", sourceId: "x", events: [{ date: "invalid", title: "表示題名", scope: "site", games: ["zzz"] }] }];
    value.presentation.display.updateLedger = { total: 1 };
    const selected = selectPresentation(value)!;
    expect(selected.characters[0]).toEqual({ game: "hsr", name: "表示名", sourceId: "1001", events: [{ date: "2026-10-10", title: "表示題名", scope: "character", games: ["hsr"] }] });
    expect(selected.updateLedger.total).toBe(256);
  });
  it("adds only presentation and preserves all legacy data for every catalog character", () => {
    for (const character of collectBaseline().characters) {
      const result = withPresentation(character.reference, character.key);
      const { presentation, ...legacy } = result;
      expect(legacy).toEqual(character.reference);
      expect(selectPresentation(result)).toEqual(result);
      expect(presentation).toMatchObject({ language: "ja", identityKey: character.key, information: { skills: "notCollected" } });
      const serialized = JSON.stringify(presentation);
      expect(serialized).not.toContain('"sourceHash"');
      expect(serialized).not.toContain('"context"');
      expect(serialized).not.toContain('"en"');
      expect(serialized).not.toContain('"zh-CN"');
    }
  });

  it("projects after lookup cache read without mutating the original object or copying player data", () => {
    const character = collectBaseline().characters[0]!;
    const result = { player: { uid: "fixture", name: "player" }, characters: [{ ...character.reference, identity: { key: character.key } }], cached: true };
    const original = JSON.stringify(result);
    const projected = withLookupPresentation(result);
    expect(JSON.stringify(result)).toBe(original);
    expect(projected.cached).toBe(true);
    expect(JSON.stringify(projected.characters[0]!.presentation)).not.toContain("fixture");
    expect(projected.characters[0]!.presentation.display.guide).toEqual(character.reference.guide);
  });

  it("falls back for old API, unknown schema, malformed display and mismatched revision", () => {
    const input = { name: "日本語", guide: { headline: "原文" } };
    expect(selectPresentation(input)).toBe(input);
    const result = withPresentation(input);
    const logger = vi.spyOn(console, "warn").mockImplementation(() => {});
    try {
      for (const change of [{ schemaVersion: 99 }, { contentRevision: "old" }, { display: null }]) {
        const bad = { ...result, presentation: { ...result.presentation, ...change } };
        expect(selectPresentation(bad)).toBe(bad);
      }
      expect(logger).toHaveBeenCalled();
    } finally { logger.mockRestore(); }
  });

  it("does not allow display numbers or identifiers to affect calculation inputs", () => {
    const input = { guide: { headline: "原文", targets: [{ key: "critRate", label: "会心率", unit: "%", targets: { 目標: 70 } }] } };
    const result = withPresentation(input);
    result.presentation.display.guide = { headline: "表示", targets: [{ key: "attack", label: "表示ラベル", unit: "", targets: { 目標: 999 } }] };
    const selected = selectPresentation(result)!;
    expect(selected.guide.headline).toBe("表示");
    expect(selected.guide.targets[0]).toEqual({ ...input.guide.targets[0], label: "表示ラベル" });
  });
});
