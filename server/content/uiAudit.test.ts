import { describe, expect, it } from "vitest";
import { auditUiText } from "../../scripts/content/uiAudit";
import ts from "typescript";

describe("UI bypass inventory", () => {
  it("finds JSX, attributes, dictionary literals, constants and template fragments", () => {
    const result = auditUiText(
      'const title="案内"; const labels={ja:"保存"}; const s=`残り${count}件`; const C=()=> <button title="説明">実行</button>;',
      "sample.tsx"
    );
    expect(result.map(item => item.kind)).toEqual([
      "literal",
      "literal",
      "template",
      "attribute",
      "jsx",
    ]);
    expect(result.map(item => item.text)).toContain("残り${…}件");
  });
  it("ignores comments and reference IDs, while detecting Japanese dictionary keys", () => {
    expect(
      auditUiText(
        '// 日本語コメント\nconst C=()=> <b>{uiDictionary({save:"ui.save"}).ja.save}</b>;',
        "sample.tsx"
      )
    ).toEqual([]);
    expect(
      auditUiText('const map={"攻撃力":"atk"};', "sample.ts")
    ).toHaveLength(1);
  });
  it("follows English conditionals, lookup tables, helpers and destructured component props", () => {
    for (const code of [
      'const text=ready?"Ready":"Wait"; const C=()=> <b>{text}</b>;',
      'const table={ok:"Ready",bad:"Wait"}; const C=()=> <b>{table[state]}</b>;',
      'const table=["Ready","Wait"]; const C=()=> <b>{table[index]}</b>;',
      'const helper=(copy)=>copy; const C=()=> <b>{helper("Ready")}</b>;',
      'const helper=()=>"Ready"; const C=()=> <b>{helper()}</b>;',
      'const C=({customCopy})=> <b>{customCopy}</b>; const Parent=()=> <C customCopy="Ready"/>;',
      'const table=[{code:"Ready"}]; const C=()=> <>{table.map(row=><b>{row.code}</b>)}</>;',
      'const {copy}={copy:"Ready"}; const C=()=> <b>{copy}</b>;',
      'const [copy]=["Ready"]; const C=()=> <b>{copy}</b>;',
      'const C=()=> {const [copy]=useState("Ready");return <b>{copy}</b>};',
      'const C=()=> <b>{String("Ready")}</b>;',
    ])
      expect(
        auditUiText(code, "sample.tsx").some(item => item.text === "Ready")
      ).toBe(true);
    expect(
      auditUiText(
        'const route="internal-route"; const C=()=> <b className="internal-style">{kind==="internal-key" && uiText("ui.known")}</b>;',
        "sample.tsx"
      )
    ).toEqual([]);
    expect(() =>
      auditUiText(
        "const a=b; const b=a; const C=()=> <b>{a.label}</b>;",
        "sample.tsx"
      )
    ).not.toThrow();
    expect(
      auditUiText('const C=()=> <b>{"ui.leaked"}</b>;', "sample.tsx")
    ).toHaveLength(1);
    expect(
      auditUiText(
        'import {uiFormat as format} from "@/content/ui"; const C=()=> <b>{format("ui.known",{v0:"Unregistered copy"},"ja")}</b>;',
        "sample.tsx"
      ).map(item => item.text)
    ).toEqual(["Unregistered copy"]);
  });
  it("follows aliased helper and component imports without duplicate literal findings", () => {
    const external = ts.createSourceFile(
      "copy.tsx",
      'export const copy="Ready"; export const helper=()=>copy; export function Label({value}) {return <span>{value}</span>}',
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX
    );
    const code =
      'import {helper as getCopy,Label as ImportedLabel} from "./copy"; const C=()=> <><b>{getCopy()}</b><ImportedLabel value="Imported copy"/></>;';
    const result = auditUiText(code, "sample.tsx", {
      resolveImport: () => external,
    });
    expect(result.filter(item => item.text === "Ready")).toHaveLength(1);
    expect(result.some(item => item.text === "Imported copy")).toBe(true);
  });
});
