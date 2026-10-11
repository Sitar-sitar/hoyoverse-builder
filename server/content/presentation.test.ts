import { describe, expect, it, vi } from "vitest";
import { collectBaseline } from "../../scripts/content/baseline";
import { withLookupPresentation, withPresentation } from "./presentation";
import { selectPresentation } from "../../client/src/content/presentation";

describe("Japanese presentation DTO boundary", () => {
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
