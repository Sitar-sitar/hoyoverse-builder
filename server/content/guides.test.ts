import { describe, expect, it } from "vitest";
import {
  guideRecords,
  guideSections,
  validateGuides,
} from "../../content/guides";
import { projectGuide, projectGuideRegistry } from "./guides";
import { decodeGuideDefinitions } from "../../scripts/content/adoptGuideDefinitions";

describe("guide authoring migration", () => {
  it("registers every migrated definition and preserves projection fields", () => {
    expect(guideRecords).toHaveLength(232);
    expect(
      guideSections().filter(section => section.visibility === "active")
    ).toHaveLength(232);
    expect(
      guideSections().filter(section => section.visibility === "planned")
    ).toHaveLength(928);
    for (const record of guideRecords) {
      expect(Object.keys(projectGuide(record))).toEqual(
        record.legacyShape.fields
      );
      expect(
        projectGuide(record).targets.map(target =>
          Object.values(target.targets)
        )
      ).toEqual(
        record.content.targetDefinitions.map(target => [
          target.strict,
          target.goal,
          target.base,
        ])
      );
    }
  });
  it("rejects new unclassified fields, omitted fields, missing text and malformed numbers", () => {
    const mutate = (change: (value: (typeof guideRecords)[number]) => void) => {
      const value = structuredClone(guideRecords[0]);
      change(value);
      expect(() => validateGuides([value])).toThrow();
    };
    mutate(value => Object.assign(value.content, { newDisplayText: "漏れ" }));
    mutate(value => value.legacyShape.fields.splice(0, 1));
    mutate(value => (value.content.headline.id = "guide.missing.source"));
    mutate(value => (value.content.targetDefinitions[0].goal = NaN));
    mutate(value => (value.equipmentLegacy[0].reason = ""));
    mutate(value => value.mainStatLegacy.pop());
    mutate(value => value.legacyShape.tierFields[0].push("newTier"));
    expect(() => validateGuides([guideRecords[0], guideRecords[0]])).toThrow();
    expect(() =>
      projectGuideRegistry(
        [guideRecords[0], guideRecords[0]],
        "GUIDE_OVERRIDES"
      )
    ).toThrow();
  });
  it("decodes only static authoring and handles helper defaults and object spreads", () => {
    const guide = `{ headline: "見出し", relicSet: "装備", planarSet: "装備2", mainStats: [{slot:"部位",value:"攻撃"}], targets:[{key:"atk",label:"攻撃力",unit:"",targets:{厳選:3,目標:2,妥協:1}}] }`;
    const fixture = `const base = ${guide}; function helper(headline = "既定") { return {...base, headline}; } const DICT = {name: helper()}; Object.assign(DICT, {second: helper("別見出し")});`;
    const decoded = decodeGuideDefinitions(fixture, "fixture", {
      DICT: { game: "hsr", kind: "name" },
    });
    expect(decoded.records).toHaveLength(2);
    expect(decoded.sources.map(source => source.ja)).toContain("既定");
    expect(decoded.migrated).toContain(
      'projectGuideRegistry(guideRecords, "DICT")'
    );
    expect(decoded.migrated).not.toContain("Object.assign(DICT");
    expect(() =>
      decodeGuideDefinitions(
        `const DICT={name:{...${guide},unclassified:"漏れ"}}`,
        "fixture",
        { DICT: { game: "hsr", kind: "name" } }
      )
    ).toThrow();
    expect(() =>
      decodeGuideDefinitions(`const DICT=executeArbitraryCode()`, "fixture", {
        DICT: { game: "hsr", kind: "name" },
      })
    ).toThrow();
  });
});
