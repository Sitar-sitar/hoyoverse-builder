import { describe, expect, it } from "vitest";
import { characterRecords, characterSources, characterNames, validateCharacterRecords } from "../../content/characters";
import { contentRepository, plannedSections } from "./repository";

describe("character authoring authority", () => {
  it("tracks every confirmed identity without collecting or translating content", () => {
    expect(characterRecords).toHaveLength(257);
    expect(characterSources).toHaveLength(257);
    for (const record of characterRecords) {
      expect(record.introduction.status).toBe("notCollected");
      expect(record.skills.status).toBe("notCollected");
      expect(record.elementKey).toBeNull();
      expect(record.roleKey).toBeNull();
    }
    for (const game of ["hsr", "genshin", "zzz"] as const) {
      expect(characterNames(game)).toEqual(characterRecords.filter(record => record.game === game).sort((a,b) => a.order-b.order).map(record => characterSources.find(source => source.id === record.name.id)!.ja));
    }
    const index = contentRepository();
    for (const source of characterSources) {
      expect(index.catalog.sections.find(section => section.id === source.id)?.section).toMatchObject({ status: "registered", data: [{ kind: "textRef", id: source.id }] });
      expect(index.catalog.translations.en[source.id]).toBeUndefined();
      expect(index.catalog.translations["zh-CN"][source.id]).toBeUndefined();
    }
    expect(plannedSections()).toHaveLength(514);
  });

  it("rejects duplicate, unclassified and invalid authoring fields", () => {
    const first = structuredClone(characterRecords[0]);
    expect(() => validateCharacterRecords([first, first], characterSources)).toThrow("Duplicate character identity");
    expect(() => validateCharacterRecords([{ ...first, order: 0 }], characterSources)).toThrow("Invalid character order");
    expect(() => validateCharacterRecords([{ ...first, game: "zzz" }], characterSources)).toThrow("game/identity");
    expect(() => validateCharacterRecords([{ ...first, name: { kind: "textRef", id: "unknown" } }], characterSources)).toThrow("name reference");
    expect(() => validateCharacterRecords([{ ...first, unexpected: "display text" } as typeof first], characterSources)).toThrow("authoring fields");
    expect(() => validateCharacterRecords([{ ...first, introduction: { status: "notCollected", reason: "", requiredKinds: ["intro"] } }], characterSources)).toThrow("reason and expectations");
    expect(() => validateCharacterRecords([{ ...first, skills: { status: "registered", evidence: "fixture", data: [] } }], characterSources)).toThrow("data and evidence");
  });
});
