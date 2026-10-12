import { describe, expect, it } from "vitest";
import baseline from "../../content/coverage/guideMetadata.baseline.json";
import {
  guideMetadataRecords,
  guideMetadataDefaults,
  guideMetadataSections,
  validateGuideMetadata,
} from "../../content/guideMetadataRegistry";
import {
  projectGuideMetadataRegistry,
  projectGuideMetadataDefaults,
} from "./guideMetadata";
import { guideMetadataFor } from "../characterGuideMetadata";

describe("character guide metadata authority", () => {
  it("preserves all independent old records, defaults and serialization order", () => {
    expect(guideMetadataRecords).toHaveLength(256);
    expect(guideMetadataSections()).toHaveLength(259);
    expect(JSON.stringify(projectGuideMetadataRegistry())).toBe(
      JSON.stringify(baseline.records)
    );
    expect(JSON.stringify(projectGuideMetadataDefaults())).toBe(
      JSON.stringify(baseline.defaults)
    );
    for (const game of ["hsr", "genshin", "zzz"] as const) {
      expect(guideMetadataFor(game, "unknown")).toEqual(
        baseline.defaults[game]
      );
      expect(guideMetadataFor(game, "__proto__")).toEqual(
        baseline.defaults[game]
      );
      expect(guideMetadataFor(game, "")).toEqual(baseline.defaults[game]);
    }
  });
  it("rejects missing characters, unknown fields, invalid dates and wrong identity refs", () => {
    expect(() =>
      validateGuideMetadata(
        guideMetadataRecords.slice(1),
        guideMetadataDefaults
      )
    ).toThrow();
    const mutate = (
      change: (value: (typeof guideMetadataRecords)[number]) => void
    ) => {
      const records = structuredClone(guideMetadataRecords);
      change(records[0]);
      expect(() =>
        validateGuideMetadata(records, guideMetadataDefaults)
      ).toThrow();
    };
    mutate(value => Object.assign(value, { newDisplayText: "漏れ" }));
    mutate(value => (value.name = guideMetadataRecords[1].name));
    mutate(value => (value.dataAsOf = "2026-02-30"));
    mutate(value => (value.sourceLabel.id = "guide.missing.source"));
    mutate(value => value.legacyFieldOrder.pop());
    expect(() =>
      validateGuideMetadata(
        [...guideMetadataRecords, guideMetadataRecords[0]],
        guideMetadataDefaults
      )
    ).toThrow();
    const defaults = structuredClone(guideMetadataDefaults);
    Object.assign(defaults, { unknown: defaults.hsr });
    expect(() =>
      validateGuideMetadata(guideMetadataRecords, defaults)
    ).toThrow();
  });
});
