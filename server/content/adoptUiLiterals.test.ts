import { describe, expect, it } from "vitest";
import { adoptUiLiterals } from "../../scripts/content/adoptUiLiterals";
import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

describe("Japanese-only UI literal adoption", () => {
  it("moves JSX and explicitly selected display constants without changing keys or comparisons", () => {
    const input = 'type Tier="目標"; const GAMES={hsr:{name:"原神"}}; const calculation={"目標":70}; const x=value==="目標"; const C=()=> <b title="説明">表示</b>;';
    const result = adoptUiLiterals(input, "pages_Test_literals1", ["GAMES"]);
    expect(result.sources.map(source => source.ja)).toEqual(["原神", "説明", "表示"]);
    expect(result.migrated).toContain('type Tier="目標"');
    expect(result.migrated).toContain('const calculation={"目標":70}');
    expect(result.migrated).toContain('value==="目標"');
    expect(adoptUiLiterals(result.migrated, "pages_Test_literals1", ["GAMES"]).sources).toHaveLength(0);
  });
  it("preserves visible whitespace around an adjacent JSX expression", () => {
    const input = 'const count=2; const C=()=> <p>\n  表示 {count} 件\n</p>;';
    const result = adoptUiLiterals(input, "pages_Test_literals1");
    expect(result.sources.map(source => source.ja)).toEqual(["表示 ", " 件"]);
    expect(result.sources.every(source => Object.keys(source.placeholders).length === 0)).toBe(true);
    function render(source: string) {
      const javascript = ts.transpileModule(source.replace(/^import .*;\n/, ""), { compilerOptions: { jsx: ts.JsxEmit.React, target: ts.ScriptTarget.ES2022 } }).outputText;
      return renderToStaticMarkup(new Function("React", "uiText", javascript + "; return C();")(React, (id: string) => result.sources.find(item => item.id === id)!.ja));
    }
    expect(render(result.migrated)).toBe(render(input));
  });
});
