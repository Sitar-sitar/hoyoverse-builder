import { describe, expect, it } from "vitest";
import { runInNewContext } from "node:vm";
import { adoptProviderDisplays } from "../../scripts/content/adoptProviderDisplays";
import { createLegacyTexts } from "./legacyTexts";

describe("provider display adoption", () => {
  it("preserves dictionary keys, numeric computation and generated unknown equipment names", () => {
    const input =
      'const ELEMENT_NAMES={Fire:"炎"}; const CORE_STAT_LABELS={hp:"HP"}; const slots=["頭部","手部"]; const raw="BaseHP"; const result={element:ELEMENT_NAMES.Fire,label:CORE_STAT_LABELS.hp,slot:slots[1],value:100*1.5,name:`遺物 ${2}`,setName:`未解決（ID: ${"" || "不明"}）`}; result;';
    const adopted = adoptProviderDisplays(input, "enkaFallback");
    const body = adopted.migrated.split("\n").slice(3).join("\n");
    const after = runInNewContext(body, {
      _providerDisplay: createLegacyTexts(adopted.sources, {}, {}),
    });
    expect(JSON.stringify(after)).toBe(JSON.stringify(runInNewContext(input)));
    expect(body).toContain("Fire:");
    expect(body).toContain('const raw="BaseHP"');
    expect(body).toContain("value:100*1.5");
    expect(adopted.sources.every(source => source.audience === "public")).toBe(
      true
    );
  });
  it("does not migrate identity keys or type-level literals", () => {
    const input =
      'type Key="未解決"; const GI_PROP_NAMES={"11101":"HP"}; const unknown={"未設定":42};';
    const adopted = adoptProviderDisplays(input, "gameProviders");
    expect(adopted.sources.map(source => source.ja)).toEqual(["HP"]);
    expect(adopted.migrated).toContain('type Key="未解決"');
    expect(adopted.migrated).toContain('"11101":');
    expect(adopted.migrated).toContain('"未設定":42');
  });
});
