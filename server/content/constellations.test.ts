import { describe, expect, it } from "vitest";
import { records } from "../../content/constellationBatch17";
import {
  constellationSections,
  validateConstellations,
} from "../../content/constellations";
import { projectConstellations } from "./constellations";
import { decodeConstellations } from "../../scripts/content/adoptConstellations";

describe("constellation authoring", () => {
  it("preserves shared traveler entries and separate element forms", () => {
    const projected = projectConstellations(records);
    expect(records).toHaveLength(34);
    expect(constellationSections()).toHaveLength(34);
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
