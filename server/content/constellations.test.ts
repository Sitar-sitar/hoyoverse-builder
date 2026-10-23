import { describe, expect, it } from "vitest";
import { records } from "../../content/constellationBatch17";
import {
  constellationSections,
  validateConstellations,
  unresolvedConstellationIdentities,
} from "../../content/constellations";
import { projectConstellations } from "./constellations";
import { decodeConstellations } from "../../scripts/content/adoptConstellations";
import { decodeCuratedConstellations } from "../../scripts/content/adoptCuratedConstellations";
import { records as curated } from "../../content/constellationCurated";

describe("constellation authoring", () => {
  it("reports name fallbacks without inventing source IDs and preserves target numbers", () => {
    expect(
      unresolvedConstellationIdentities()
        .map(value => value.identity)
        .sort()
    ).toEqual(
      ["genshin:フリーナ", "genshin:ベネット", "genshin:楓原万葉"].sort()
    );
    const changed = structuredClone(curated);
    const record = changed.find(record =>
      record.identities.includes("genshin:楓原万葉")
    )!;
    const change = record.data.effects[1].targetChanges![0];
    expect(
      projectConstellations([record])["genshin:楓原万葉"].effects[1]
        .targetChanges![0].targets
    ).toEqual({ 厳選: 800, 目標: 650, 妥協: 500 });
    change.targets.厳選 = Number.NaN;
    expect(() => validateConstellations([record])).toThrow(
      "Invalid constellation target values"
    );
    const missingReason = structuredClone(record);
    delete missingReason.legacyIdentities;
    expect(() => validateConstellations([missingReason])).toThrow(
      "Invalid constellation identity"
    );
  });
  it("decodes additive registries with explicit precedence and rejects arbitrary code", () => {
    const batch = `export const BATCH23_GENSHIN_CONSTELLATIONS = { "genshin:23": { gameVersion: "7" } };`;
    const source = `const SOURCE = { genshin: { gameVersion: "7", sourceLabel: _content.localized("guide.source") } } as const;
      const CURATED = { ...BATCH23_GENSHIN_CONSTELLATIONS, "genshin:1": { ...SOURCE.genshin, effects: [effect(1, ..._helperContent.triple("constellation.name"), ..._helperContent.triple("constellation.description"), { targetChanges: [target("critRate", ..._helperContent.triple("guide.label"), "%", 65, 55, 45, ..._helperContent.triple("guide.reason"))] })] } };
      Object.assign(CURATED, { "genshin:1": { gameVersion: "8" } });`;
    const result = decodeCuratedConstellations(source, batch);
    expect(result.records[0].data).toEqual({ gameVersion: "8" });
    expect(result.overrides).toEqual([
      { identity: "genshin:1", assignment: 2 },
    ]);
    expect(result.batchRecords[0].identities).toEqual(["genshin:23"]);
    expect(result.migrated).not.toContain("Object.assign(CURATED");
    expect(() =>
      decodeCuratedConstellations(source.replace('"8"', "execute()"), batch)
    ).toThrow("Unsupported constellation ref");
    expect(() =>
      decodeCuratedConstellations(
        source.replace(
          '"genshin:1": { gameVersion: "8" }',
          '"genshin:23": { gameVersion: "8" }'
        ),
        batch
      )
    ).toThrow("Batch constellation override needs an explicit disposition");
  });
  it("preserves shared traveler entries and separate element forms", () => {
    const projected = projectConstellations(records);
    expect(records).toHaveLength(34);
    expect(constellationSections()).toHaveLength(261);
    expect(projected["genshin:10000005"]).toBe(
      projected["genshin:10000007-704"]
    );
    expect(projected["genshin:10000005-506"]).toBe(
      projected["genshin:10000007-706"]
    );
    expect(projected["genshin:10000005-506"]).not.toBe(
      projected["genshin:10000005"]
    );
  });
  it("rejects omitted refs, new display fields, alias collisions and rank changes", () => {
    const changed = () => structuredClone(records);
    const missing = changed();
    missing[0].data.effects[0].description.id = "constellation.unregistered";
    expect(() => validateConstellations(missing)).toThrow(
      "Unknown constellation text reference"
    );
    const unknown = changed();
    Object.assign(unknown[0].data.effects[0], {
      extraDescription: "unregistered",
    });
    expect(() => validateConstellations(unknown)).toThrow(
      "Unclassified content field"
    );
    const collision = changed();
    collision[1].identities.push(collision[0].identities[0]);
    expect(() => validateConstellations(collision)).toThrow(
      "Invalid constellation identity"
    );
    const rank = changed();
    rank[0].data.effects[0].level = 6;
    expect(() => validateConstellations(rank)).toThrow(
      "Invalid constellation level order"
    );
  });
  it("decodes only literal authoring and rejects executable expressions", () => {
    const fixture = `const BATCH_17_CHARACTER_NAMES = ["name"] as const;
      const entry1 = { gameVersion: "7", sourceLabel: _content.localized("guide.source"),
        effects: [effect(1, ..._helperContent.triple("constellation.name"), ..._helperContent.triple("constellation.description"))] };
      const BATCH_17_CONSTELLATIONS = { "genshin:1": entry1, "genshin:2": entry1 };`;
    expect(decodeConstellations(fixture).records[0].identities).toEqual([
      "genshin:1",
      "genshin:2",
    ]);
    expect(() =>
      decodeConstellations(fixture.replace('"7"', "fetchSecret()"))
    ).toThrow("Unsupported constellation reference");
    expect(() =>
      decodeConstellations(fixture.replace("entry1,", "unknownEntry,"))
    ).toThrow("Incomplete constellation batch");
  });
});
