import { describe, expect, it } from "vitest";
import { auditUiText } from "../../scripts/content/uiAudit";
import { literalFingerprint, uiGateIssues, checkUiGate, uiReferenceIssues } from "../../scripts/content/uiGate";

describe("bounded UI literal exceptions", () => {
  it("rejects missing/dynamic refs and direct generated data imports, including aliased resolver calls", () => {
    const prefix = 'import {uiText as resolveUiText,uiDictionary} from "@/content/ui";';
    const ids = new Set(["ui.known"]);
    expect(uiReferenceIssues(prefix + 'const x=resolveUiText("ui.known");', "sample.tsx", ids)).toEqual([]);
    for (const code of ['const x=resolveUiText("ui.missing");', 'const x=resolveUiText(name);', 'const x=uiDictionary({label:"ui.missing"});', 'import {UI_TEXT} from "@/content/ui.generated";']) expect(uiReferenceIssues(prefix + code, "sample.tsx", ids)).not.toEqual([]);
  });
  it("rejects new JSX, attributes, dictionaries and changed/copied exceptions", () => {
    const known = auditUiText('type Tier="目標";', "sample.tsx");
    const exceptions = [{ fingerprint: literalFingerprint(known[0]!), file: "sample.tsx", site: "Tier", text: "目標", count: 1, reason: "API computation key", withdrawal: "Remove when API key contract changes" }];
    expect(uiGateIssues(known, exceptions)).toEqual([]);
    for (const addition of ['const C=()=> <b>未登録</b>;', 'const C=()=> <b title="新説明"/>;', 'const copy={ja:{label:"未登録"}};', 'const C=()=> <b>New label</b>;', 'const copy={en:{label:"New label"}};']) {
      expect(uiGateIssues(auditUiText('type Tier="目標";' + addition, "sample.tsx"), exceptions).some(issue => issue.startsWith("UI text bypass"))).toBe(true);
    }
    expect(uiGateIssues([...known, ...known], exceptions)).not.toEqual([]);
    expect(uiGateIssues([], exceptions)).not.toEqual([]);
    expect(uiGateIssues(known, [{ ...exceptions[0]!, reason: "" }])).not.toEqual([]);
  });
  it("checks the actual UI exception inventory", () => { expect(checkUiGate().exceptions).toBeGreaterThan(0); });
});
