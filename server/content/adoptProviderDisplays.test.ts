import { describe, expect, it } from "vitest";
import { runInNewContext } from "node:vm";
import {
  adoptProviderDisplays,
  adoptProviderDisplaysMain,
} from "../../scripts/content/adoptProviderDisplays";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { createLegacyTexts } from "./legacyTexts";

describe("provider display adoption", () => {
  it("preserves deficit interpolation, rounding, matching labels and internal tier keys", () => {
    const input =
      'const STAT_MAIN_LABELS={critDmg:["会心ダメ","CD"]};const value=12.345;const currentMain="HP%";const id="unknown";const out={labels:STAT_MAIN_LABELS,small:`あと ${value.toFixed(1)}${"%"}未満`,main:`は現在${currentMain}`,name:`ステータス #${id}`,tier:"目標",internal:"時の砂"};out;';
    const adopted = adoptProviderDisplays(
      input,
      "buildAdvisor",
      false,
      false,
      true
    );
    const after = runInNewContext(
      adopted.migrated.split("\n").slice(3).join("\n"),
      { _remainingDisplays: createLegacyTexts(adopted.sources, {}, {}) }
    );
    expect(JSON.stringify(after)).toBe(JSON.stringify(runInNewContext(input)));
    expect(adopted.sources).toHaveLength(5);
    expect(
      adopted.sources.some(source => ["目標", "時の砂"].includes(source.ja))
    ).toBe(false);
    expect(() =>
      adoptProviderDisplaysMain(["buildAdvisor", "--remainders", "--equipment"])
    ).toThrow("cannot be combined");
  });
  it("preserves equipment label values and computation keys in the limited equipment pass", () => {
    const input =
      'const ZZZ_DESIRED_STAT_LABELS={defense:"防御力%",hp:"HP%"};const DESIRED_STAT_LABELS_BY_FAMILY={energyRecharge:{hsr:"EP回復効率",genshin:"元素チャージ効率"}};const ALL_SLOTS_LABEL="全部位";const internal="時計";({ZZZ_DESIRED_STAT_LABELS,DESIRED_STAT_LABELS_BY_FAMILY,ALL_SLOTS_LABEL,internal});';
    const adopted = adoptProviderDisplays(input, "buildAdvisor", false, true);
    const after = runInNewContext(
      adopted.migrated.split("\n").slice(3).join("\n"),
      { _equipmentLabels: createLegacyTexts(adopted.sources, {}, {}) }
    );
    expect(JSON.stringify(after)).toBe(JSON.stringify(runInNewContext(input)));
    expect(adopted.sources).toHaveLength(5);
    expect(adopted.sources.some(source => source.ja === "時計")).toBe(false);
    expect(() =>
      adoptProviderDisplaysMain(["gameProviders", "--equipment"])
    ).toThrow("Equipment labels require buildAdvisor only");
    expect(() =>
      adoptProviderDisplaysMain([
        "buildAdvisor",
        "--equipment",
        "--comparisons",
      ])
    ).toThrow();
  });
  it("adopts comparison labels and calculated text without converting property IDs or changing rounding", () => {
    const input =
      'const entries=[["HP",10,false],["攻撃力",scale("12101","12102"),false]]; const output={rows:entries,currentDisplay:`算出 ${12.345.toFixed(1)}${"%"}`,unknown:"未取得"};output;';
    const adopted = adoptProviderDisplays(input, "gameProviders", true);
    const context = { scale: (...ids: string[]) => ids.length };
    const after = runInNewContext(
      adopted.migrated.split("\n").slice(3).join("\n"),
      {
        ...context,
        _providerComparison: createLegacyTexts(adopted.sources, {}, {}),
      }
    );
    expect(JSON.stringify(after)).toBe(
      JSON.stringify(runInNewContext(input, context))
    );
    expect(adopted.sources.map(source => source.ja)).toEqual([
      "HP",
      "攻撃力",
      "算出 {v0}{v1}",
      "未取得",
    ]);
    expect(adopted.migrated).toContain('scale("12101","12102")');
    expect(adopted.sources.some(source => source.ja === "12101")).toBe(false);
  });
  function fixture(run: (root: string, original: string) => void) {
    const parent = resolve("tmp");
    mkdirSync(parent, { recursive: true });
    const root = mkdtempSync(resolve(parent, "provider-adoption-test-"));
    const original = 'const GI_PROP_NAMES={FIGHT_PROP_ATTACK:"攻撃力"};';
    try {
      for (const directory of [
        "server",
        "content/ja/guides",
        "content/translations/en",
        "content/translations/zh-CN",
        "content/coverage",
      ])
        mkdirSync(resolve(root, directory), { recursive: true });
      writeFileSync(resolve(root, "server/gameProviders.ts"), original);
      run(root, original);
    } finally {
      if (!root.startsWith(parent + "\\") && !root.startsWith(parent + "/"))
        throw new Error("Test cleanup escaped workspace tmp");
      rmSync(root, { recursive: true, force: true });
    }
  }
  it("defaults to dry-run and accepts an identical retry without overwriting drift", () =>
    fixture((root, original) => {
      const source = resolve(root, "server/gameProviders.ts");
      const output = resolve(
        root,
        "content/ja/guides/gameProviders_providerDisplay.ts"
      );
      adoptProviderDisplaysMain(["gameProviders"], root);
      expect(readFileSync(source, "utf8")).toBe(original);
      expect(existsSync(output)).toBe(false);
      adoptProviderDisplaysMain(["gameProviders", "--write"], root);
      const committed = readFileSync(source, "utf8"),
        corpus = readFileSync(output, "utf8");
      adoptProviderDisplaysMain(["gameProviders", "--write"], root);
      expect(readFileSync(source, "utf8")).toBe(committed);
      expect(readFileSync(output, "utf8")).toBe(corpus);
      writeFileSync(source, committed.replace(/\r?\n/g, "\r\n"));
      writeFileSync(output, corpus.replace(/\r?\n/g, "\r\n"));
      adoptProviderDisplaysMain(["gameProviders", "--write"], root);
      writeFileSync(source, committed);
      writeFileSync(output, corpus + "// changed\n");
      expect(() =>
        adoptProviderDisplaysMain(["gameProviders", "--write"], root)
      ).toThrow("will not be overwritten");
      expect(readFileSync(output, "utf8")).toBe(corpus + "// changed\n");
      expect(readFileSync(source, "utf8")).toBe(committed);
    }));
  it("rolls back only newly created artifacts after failure before source commit", () =>
    fixture((root, original) => {
      expect(() =>
        adoptProviderDisplaysMain(["gameProviders", "--write"], root, () => {
          throw Error("injected interruption");
        })
      ).toThrow("injected interruption");
      expect(
        readFileSync(resolve(root, "server/gameProviders.ts"), "utf8")
      ).toBe(original);
      expect(
        existsSync(
          resolve(root, "content/ja/guides/gameProviders_providerDisplay.ts")
        )
      ).toBe(false);
      expect(
        existsSync(
          resolve(
            root,
            "content/coverage/gameProviders_providerDisplay.migration.json"
          )
        )
      ).toBe(false);
      expect(
        existsSync(
          resolve(root, "server/gameProviders.ts.provider-adoption.tmp")
        )
      ).toBe(false);
      adoptProviderDisplaysMain(["gameProviders", "--write"], root);
      expect(
        readFileSync(resolve(root, "server/gameProviders.ts"), "utf8")
      ).not.toBe(original);
    }));
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
