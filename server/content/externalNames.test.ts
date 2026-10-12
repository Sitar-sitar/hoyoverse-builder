import { describe, expect, it } from "vitest";
import { externalNameBoundaries, externalNameReport, validateExternalNameBoundaries } from "../../content/externalNames";

describe("external name preparation boundaries", () => {
  it("reports all three games without fetching user payloads or claiming multilingual names", () => {
    const report = externalNameReport();
    expect(report.entries).toHaveLength(33);
    expect(report.unresolvedCount).toBe(30);
    for (const game of ["hsr", "genshin", "zzz"]) for (const field of ["characters.element", "characters.path", "characters.relics.slot"]) {
      expect(report.entries.find(entry => entry.id === `external.${game}.${field}`)).toMatchObject({ policy: "unresolved" });
    }
    expect(report.entries.filter(entry => entry.policy === "user-value")).toHaveLength(3);
    expect(report.entries.map(entry => entry.id)).toEqual(report.entries.map(entry => entry.id).sort());
  });
  it("rejects removal, duplication, unknown fields and unexplained or false readiness", () => {
    const mutate = (change: (records: typeof externalNameBoundaries) => void) => {
      const records = structuredClone(externalNameBoundaries); change(records);
      expect(() => validateExternalNameBoundaries(records)).toThrow();
    };
    mutate(records => { records.pop(); });
    mutate(records => { records.push(records[0]!); });
    mutate(records => { records[0]!.reason = " "; });
    mutate(records => { Object.assign(records[0]!, { unknown: true }); });
    mutate(records => { records[1]!.policy = "user-value"; });
  });
});
