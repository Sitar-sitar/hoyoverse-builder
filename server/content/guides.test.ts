import { describe, expect, it } from "vitest";
import {
  guideRecords,
  guideSections,
  validateGuides,
  validateGuideProfiles,
} from "../../content/guides";
import {
  projectGuide,
  projectGuideProfile,
  projectGuideRegistry,
  projectGeneratedGuide,
} from "./guides";
import { records as profiles } from "../../content/guideDefinitions_profiles";
import profileBaseline from "../../content/coverage/guideProfiles.baseline.json";
import { decodeGuideDefinitions } from "../../scripts/content/adoptGuideDefinitions";

describe("guide authoring migration", () => {
  it("registers every migrated definition and preserves projection fields", () => {
    expect(guideRecords).toHaveLength(284);
    expect(
      guideSections().filter(section => section.visibility === "active")
    ).toHaveLength(284);
    expect(
      guideSections().filter(section => section.visibility === "planned")
    ).toHaveLength(1136);
    for (const record of guideRecords) {
      const projected = record.factory
        ? projectGuideProfile(record)
        : projectGuide(record);
      expect(Object.keys(projected)).toEqual(record.legacyShape.fields);
      expect(
        projected.targets.map(target => Object.values(target.targets))
      ).toEqual(
        record.content.targetDefinitions.map(target => [
          target.strict,
          target.goal,
          target.base,
        ])
      );
    }
  });
  it("preserves every generated profile against independent old implementation fixtures", () => {
    expect(profiles).toHaveLength(21);
    expect(() => projectGuide(profiles[0])).toThrow();
    expect(profileBaseline).toHaveLength(63);
    for (const entry of profileBaseline)
      expect(
        JSON.stringify(
          projectGeneratedGuide(
            profiles,
            entry.registry,
            entry.profileId,
            entry.name
          )
        )
      ).toBe(JSON.stringify(entry.guide));
    expect(() =>
      projectGeneratedGuide(profiles, "HSR_PROFILES", "unknown", "name")
    ).toThrow();
    const broken = structuredClone(profiles[0]);
    broken.factory!.contextBindings.v0 = "wrong" as "name";
    expect(() => validateGuides([broken])).toThrow();
    const missing = structuredClone(profiles[0]);
    delete missing.factory;
    expect(() => validateGuides([missing])).toThrow();
    expect(() => validateGuideProfiles(profiles.slice(1))).toThrow();
    const wrongVariable = structuredClone(
      guideRecords.find(record => record.lookupKey.startsWith("SPECS:"))!
    );
    Object.assign(wrongVariable.content.sourceLabels[0], {
      variables: { v0: "name", v1: "not a number" },
    });
    expect(() => validateGuides([wrongVariable])).toThrow();
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
    const nested = decodeGuideDefinitions(
      `const DICT={"143":{name:"元の名称",element:"Wind",guide:${guide}}}`,
      "fixture",
      { DICT: { game: "genshin", kind: "sourceId", nestedGuide: true } }
    );
    expect(nested.records[0].content.identityKey).toBe("genshin:143");
    expect(nested.migrated).toContain('name:"元の名称",element:"Wind"');
    expect(nested.migrated).toContain(
      'guide:projectGuideRegistry(guideRecords, "DICT")["143"]'
    );
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
