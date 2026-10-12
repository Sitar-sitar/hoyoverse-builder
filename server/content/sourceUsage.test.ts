import { describe, expect, it } from "vitest";
import { literalSourceUses } from "../../scripts/content/sourceUsage";

describe("source usage evidence", () => {
  it("counts actual syntax references without treating comments or substrings as use", () => {
    const ids = new Set(["guide.a", "guide.b"]);
    const text = '// "guide.b"\nconst ref = {kind:"textRef", id:"guide.a"};\nconst other="guide.a suffix";';
    expect(literalSourceUses(text, "content/records.ts", ids)).toEqual([
      { id: "guide.a", file: "content/records.ts", line: 2, role: "authoring" },
    ]);
    expect(literalSourceUses('resolve("guide.b")', "server/helper.ts", ids)[0]).toMatchObject({
      id: "guide.b", role: "runtime",
    });
  });
});
