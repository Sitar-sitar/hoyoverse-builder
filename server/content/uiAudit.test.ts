import { describe, expect, it } from "vitest";
import { auditUiText } from "../../scripts/content/uiAudit";

describe("UI bypass inventory", () => {
  it("finds JSX, attributes, dictionary literals, constants and template fragments", () => {
    const result = auditUiText('const title="案内"; const labels={ja:"保存"}; const s=`残り${count}件`; const C=()=> <button title="説明">実行</button>;', "sample.tsx");
    expect(result.map(item => item.kind)).toEqual(["literal", "literal", "template", "attribute", "jsx"]);
    expect(result.map(item => item.text)).toContain("残り${…}件");
  });
  it("ignores comments and reference IDs, while detecting Japanese dictionary keys", () => {
    expect(auditUiText('// 日本語コメント\nconst C=()=> <b>{uiDictionary({save:"ui.save"}).ja.save}</b>;', "sample.tsx")).toEqual([]);
    expect(auditUiText('const map={"攻撃力":"atk"};', "sample.ts")).toHaveLength(1);
  });
});
