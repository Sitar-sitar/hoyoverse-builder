import { describe, expect, it } from "vitest";
import { adoptUiDisplay } from "../../scripts/content/adoptUiDisplay";
import { formatContentText } from "../../shared/content/format";
describe("display flow migration", () => {
  it("adopts display values and preserves interpolation without guessing numeric types", () => {
    const result = adoptUiDisplay(
      'import {uiText as label} from "@/content/ui"; const route="internal-route"; const status=ok?"Ready":"Wait"; const C=()=> <b>{status}{`${copy.batch} ${entry.batch}`}</b>;',
      "fixture"
    );
    expect(result.sources.map(source => source.ja)).toEqual([
      "Ready",
      "Wait",
      "{v0} {v1}",
    ]);
    expect(result.sources[2].placeholders).toEqual({
      v0: "string",
      v1: "string",
    });
    expect(result.migrated).toContain('label("ui.fixture.display1")');
    expect(result.migrated).toContain("String(copy.batch)");
    expect(result.migrated).toContain("String(entry.batch)");
    expect(result.migrated).toContain('route="internal-route"');
    expect(
      formatContentText(
        result.sources[2].id,
        result.sources[2].ja,
        result.sources[2].placeholders,
        { v0: "Batch", v1: String(null) }
      )
    ).toBe("Batch null");
    expect(result.sources.every(source => source.audience === "public")).toBe(
      true
    );
  });
  it("rejects overlapping edits and keeps bounded compatibility exclusions separate", () => {
    expect(() =>
      adoptUiDisplay(
        'const C=()=> <b>{`${value ?? "Fallback"}`}</b>;',
        "fixture"
      )
    ).toThrow("Nested display literals");
    const result = adoptUiDisplay(
      'const compatibility=()=>"Legacy copy"; const C=()=> <b>{compatibility()}</b>;',
      "fixture",
      ["compatibility"]
    );
    expect(result.sources).toEqual([]);
    expect(result.migrated).toContain("Legacy copy");
    expect(() =>
      adoptUiDisplay("const C=()=> <b>Ready</b>;", "invalid/name")
    ).toThrow();
  });
});
