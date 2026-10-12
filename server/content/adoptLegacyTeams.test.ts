import { describe, expect, it } from "vitest";
import { materializeLegacyTeams } from "../../scripts/content/adoptLegacyTeams";
import { teams } from "../../content/teamLegacy";
import { projectTeams } from "./teams";
import {
  beginLegacyTextCapture,
  capturedLegacyTextRef,
  createLegacyTexts,
} from "./legacyTexts";
import type { SourceText, TranslationRecord } from "../../shared/content/types";

describe("legacy team authoring migration", () => {
  it("captures exact old language values without approving or guessing identity", () => {
    const old = structuredClone(projectTeams([teams[0]])[0]);
    old.title = {
      ja: "移行fixture title",
      en: "old English fixture",
      "zh-CN": "old Chinese fixture",
    };
    old.members[0].name = {
      ja: "未解決fixture人物",
      en: "legacy fixture name",
      "zh-CN": "legacy fixture name",
    };
    const result = materializeLegacyTeams(
      [old],
      () => undefined,
      () => undefined,
      "team.fixture.capture"
    );
    const title = result.sources.find(
      source => source.id === result.records[0].title.id
    )!;
    expect(title.ja).toBe(old.title.ja);
    expect(result.translations.en[title.id]).toEqual({
      text: old.title.en,
      sourceHash: null,
      origin: "legacy",
      review: "pending",
    });
    expect(result.records[0].members[0].identityResolution).toBe("legacy");
    expect(result.records[0].members[0].identityReason).toBeTruthy();
    expect(result.records[0].members[0].targetChanges).toEqual(
      teams[0].members[0].targetChanges
    );
    expect(
      result.mapping.some(
        entry => entry.teamId === old.id && entry.field === "title"
      )
    ).toBe(true);
    expect(
      materializeLegacyTeams(
        [old],
        () => undefined,
        () => undefined,
        "team.fixture.capture"
      )
    ).toEqual(result);
  });
  it("retains template provenance and disables capture outside migration", () => {
    const source: SourceText = {
      id: "team.fixture.template",
      ja: "{name}の編成",
      context: "fixture",
      audience: "public",
      placeholders: { name: "string" },
      dependencies: [],
      protectedTokens: [],
    };
    const record = (text: string): TranslationRecord => ({
      text,
      sourceHash: null,
      origin: "legacy",
      review: "pending",
    });
    const texts = createLegacyTexts(
      [source],
      { [source.id]: record("Team for {name}") },
      { [source.id]: record("{name} team") }
    );
    const stop = beginLegacyTextCapture();
    try {
      const value = texts.localized(source.id, { name: "fixture" });
      expect(Object.keys(value)).toEqual(["ja", "en", "zh-CN"]);
      expect(capturedLegacyTextRef(value)).toEqual({
        kind: "textRef",
        id: source.id,
        variables: { name: "fixture" },
      });
      expect(() => beginLegacyTextCapture()).toThrow("already active");
    } finally {
      stop();
    }
    expect(
      capturedLegacyTextRef(texts.localized(source.id, { name: "fixture" }))
    ).toBeUndefined();
  });
});
