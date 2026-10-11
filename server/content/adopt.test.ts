import { describe, expect, it } from "vitest";
import { adoptModule } from "../../scripts/content/adopt";
import { createLegacyTexts } from "./legacyTexts";

describe("canonical source adoption", () => {
  it("moves display literals and three-language records without changing their content", () => {
    const input = 'export const data = { headline: "日本語70%", title: {ja:"名称",en:"Existing", "zh-CN":"旧译"}, id:"keep-id", targets: [] };';
    const result = adoptModule(input, "testModule");
    expect(result.sources.map(source => source.ja)).toEqual(["日本語70%", "名称"]);
    expect(result.migrated).toContain('id:"keep-id"');
    expect(result.migrated).not.toContain('headline: "日本語70%"');
    const texts = createLegacyTexts(result.sources, result.translations.en, result.translations["zh-CN"]);
    expect(texts.ja(result.sources[0]!.id)).toBe("日本語70%");
    expect(texts.localized(result.sources[1]!.id)).toEqual({ ja: "名称", en: "Existing", "zh-CN": "旧译" });
    for (const record of Object.values(result.translations.en)) expect(record).toMatchObject({ sourceHash: null, review: "pending", origin: "legacy" });
    expect(adoptModule(result.migrated, "testModule").sources).toHaveLength(0);
  });

  it("refuses missing legacy translations and unknown Japanese references", () => {
    const result = adoptModule('const x={headline:"本文"};', "testModule");
    const texts = createLegacyTexts(result.sources, {}, {});
    expect(() => texts.localized(result.sources[0]!.id)).toThrow("Legacy translation missing");
    expect(() => texts.ja("guide.unknown")).toThrow("Unknown content reference");
  });

  it("preserves localized helper calls and tuple arguments across nested module paths", () => {
    const input = 'const title=t("日本語","English","中文");const party=member("名前","Name","名字","役割","Role","角色");';
    const result = adoptModule(input, "parties_test", 1);
    expect(result.sources.map(source => source.ja)).toEqual(["日本語", "名前", "役割"]);
    expect(result.migrated).toContain('from "../content/legacyTexts"');
    expect(result.migrated).toContain('from "../../content/ja/guides/parties_test"');
    const texts = createLegacyTexts(result.sources, result.translations.en, result.translations["zh-CN"]);
    expect(texts.triple(result.sources[1]!.id)).toEqual(["名前", "Name", "名字"]);
    expect(texts.triple(result.sources[2]!.id)).toEqual(["役割", "Role", "角色"]);
    expect(adoptModule('const x=t(dynamicName,"English","中文")', "test").sources).toHaveLength(0);
  });
});
