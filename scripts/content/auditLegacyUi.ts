import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import { runInNewContext } from "node:vm";
import { adoptUi } from "./adoptUi";
import { contentRepository } from "../../server/content/repository";
import { uiFormat } from "../../client/src/content/ui";

/** Read-only acceptance audit against the original Git tree, independent of migrated IDs. */
export function auditLegacyUi(base = "dbd66e8") {
  if (!/^[a-f0-9]{7,40}$/.test(base)) throw new Error("Expected an explicit baseline commit hash");
  const index = contentRepository();
  const paths: Record<string, string> = {
    components_PartyAppearances: "components/PartyAppearances.tsx",
    components_PublicCatalogShortcut: "components/PublicCatalogShortcut.tsx",
    contexts_LanguageContext: "contexts/LanguageContext.tsx",
    pages_CharacterCatalog: "pages/CharacterCatalog.tsx",
    pages_Home: "pages/Home.tsx", pages_Home_residual1: "pages/Home.tsx",
    migration: "lib/migrationPage.ts",
  };
  let checked = 0;
  for (const [module, path] of Object.entries(paths)) {
    const original = execFileSync("git", ["show", `${base}:client/src/${path}`], { encoding: "utf8" });
    const before = adoptUi(original, module);
    if (module === "migration") {
      const tree = ts.createSourceFile(path, original, ts.ScriptTarget.Latest, true);
      let triplet: Record<string, string> | undefined;
      function find(node: ts.Node) {
        if (ts.isObjectLiteralExpression(node)) {
          const values: Record<string, string> = {};
          for (const property of node.properties) if (ts.isPropertyAssignment(property) && ts.isStringLiteral(property.initializer)) {
            values[ts.isIdentifier(property.name) || ts.isStringLiteral(property.name) ? property.name.text : ""] = property.initializer.text;
          }
          if (["ja", "en", "zh-CN"].every(language => language in values)) triplet = values;
        }
        ts.forEachChild(node, find);
      }
      find(tree);
      const id = "ui.migration.notice";
      if (!triplet || triplet.ja !== index.sources.get(id)?.ja || (["en", "zh-CN"] as const).some(language => triplet![language] !== index.catalog.translations[language][id]?.text)) throw new Error("Original migration notice differs");
      checked++;
      continue;
    }
    for (const source of index.catalog.sources.filter(source => source.id.startsWith(`ui.${module}.`) && index.catalog.translations.en[source.id])) {
      const matches = before.sources.filter(old => old.ja === source.ja);
      if (!matches.some(old => (["en", "zh-CN"] as const).every(language =>
        before.translations[language][old.id]?.text === index.catalog.translations[language][source.id]?.text))) {
        throw new Error(`Legacy UI text differs: ${source.id}`);
      }
      checked++;
    }
  }
  const home = execFileSync("git", ["show", `${base}:client/src/pages/Home.tsx`], { encoding: "utf8" });
  const ast = ts.createSourceFile("Home.tsx", home, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const deficit = ast.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === "deficitText");
  if (!deficit) throw new Error("Original deficit formatter missing");
  const code = ts.transpile(deficit.getText(ast));
  let cases = 0;
  for (const language of ["ja", "en", "zh-CN"] as const) for (const unit of ["", "%"]) for (const amount of [0.001, 0.049, 0.05, 0.49, 0.5, 1, 12.345]) {
    const old = runInNewContext(`${code}\ndeficitText(amount, unit, language)`, { amount, unit, language }, { timeout: 100 });
    const digits = unit === "%" ? 1 : 0;
    const under = Number(amount.toFixed(digits)) === 0;
    const current = uiFormat(under ? "ui.home.deficit.under" : "ui.home.deficit.amount", { amount: under ? (10 ** -digits).toFixed(digits) : amount.toFixed(digits), unit }, language);
    if (old !== current) throw new Error("Legacy deficit formatting differs");
    cases++;
  }
  // The remaining two template triplets preserve literal segments and placeholder order.
  const templateText = (node: ts.TemplateExpression) => {
    let value = node.head.text;
    for (const span of node.templateSpans) {
      const expression = span.expression.getText(ast);
      const key = expression === "target" ? "target" : expression === "comparison.unit" ? "unit" : expression.startsWith("deficitText(") ? "deficit" : expression === "selected.identity.variantOf" ? "name" : null;
      if (!key) return null;
      value += `{${key}}${span.literal.text}`;
    }
    return value;
  };
  const originals = new Set<string>();
  function visit(node: ts.Node) { if (ts.isTemplateExpression(node)) { const text = templateText(node); if (text) originals.add(text); } ts.forEachChild(node, visit); }
  visit(ast);
  for (const id of ["ui.home.recommendation.target", "ui.home.identity.variant"]) {
    const source = index.sources.get(id)!;
    for (const text of [source.ja, index.catalog.translations.en[id]!.text, index.catalog.translations["zh-CN"][id]!.text]) {
      if (!originals.has(text)) throw new Error(`Original UI template differs: ${id}`);
    }
  }
  const total = index.catalog.sources.filter(source => source.id.startsWith("ui.") && index.catalog.translations.en[source.id]).length;
  if (checked + 4 !== total) throw new Error("Unclassified preserved UI translations");
  return { base, triplets: checked + 4, deficitCases: cases, newTranslations: 0 };
}
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  try { console.log(JSON.stringify(auditLegacyUi(process.argv[2]))); }
  catch (error) { console.error(error instanceof Error ? error.message : "UI audit failed"); process.exitCode = 1; }
}
