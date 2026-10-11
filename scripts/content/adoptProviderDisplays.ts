import ts from "typescript";
import {
  existsSync,
  readFileSync,
  writeFileSync,
  renameSync,
  unlinkSync,
} from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { contentDigest } from "../../server/content/hash";
import type { SourceText } from "../../shared/content/types";

const configurations = {
  gameProviders: [
    "GI_WEAPONS",
    "GI_PROP_NAMES",
    "GI_ARTIFACT_SLOTS",
    "ZZZ_PROFESSIONS",
    "ZZZ_PROP_FALLBACKS",
  ],
  buildAdvisor: [
    "hsrSlots",
    "MIHOMO_FINAL_STATS_NOTE",
    "MIHOMO_UNAVAILABLE_NOTE",
  ],
  enkaFallback: [
    "FALLBACK_META",
    "ELEMENT_NAMES",
    "CORE_STAT_LABELS",
    "slots",
    "ENKA_FINAL_STATS_NOTE",
    "ENKA_UNAVAILABLE_NOTE",
  ],
} as const;

export function adoptProviderDisplays(
  text: string,
  module: keyof typeof configurations
) {
  const ast = ts.createSourceFile(
    module + ".ts",
    text,
    ts.ScriptTarget.Latest,
    true
  );
  const selected = new Set<string>(configurations[module]);
  const fallbacks = new Set([
    "遺物",
    "光円錐",
    "開拓者",
    "装備",
    "未解決",
    "未設定",
  ]);
  const sources: SourceText[] = [];
  const edits: Array<{
    start: number;
    end: number;
    replacement: string;
    id: string;
    oldText: string;
  }> = [];
  const resolver = "_providerDisplay";
  function register(
    ja: string,
    context: string,
    placeholders: Record<string, "string" | "number"> = {}
  ) {
    const id =
      `guide.providerDisplay.${module}.b${String(sources.length + 1).padStart(5, "0")}` as const;
    sources.push({
      id,
      ja,
      context: `${module}: ${context}; unchanged provider display`,
      audience: "public",
      placeholders,
      dependencies: [],
      protectedTokens: [],
    });
    return id;
  }
  function visit(node: ts.Node) {
    if (ts.isStringLiteral(node) && node.text) {
      // Object keys and type-level literals are computation/identity contracts.
      const key =
        ts.isPropertyAssignment(node.parent) && node.parent.name === node;
      const typeLiteral = ts.isLiteralTypeNode(node.parent);
      let declaration: ts.Node | undefined = node.parent;
      while (declaration && !ts.isVariableDeclaration(declaration))
        declaration = declaration.parent;
      const owner =
        declaration &&
        ts.isVariableDeclaration(declaration) &&
        ts.isIdentifier(declaration.name)
          ? declaration.name.text
          : undefined;
      if (
        !key &&
        !typeLiteral &&
        ((owner && selected.has(owner)) || fallbacks.has(node.text))
      ) {
        const id = register(node.text, owner ?? "missing-value fallback");
        edits.push({
          start: node.getStart(ast),
          end: node.end,
          id,
          oldText: node.getText(ast),
          replacement: `${resolver}.ja(${JSON.stringify(id)})`,
        });
        return;
      }
    }
    if (
      ts.isTemplateExpression(node) &&
      /^(遺物 |未解決（ID: )/.test(node.head.text)
    ) {
      let ja = node.head.text;
      const placeholders: Record<string, "string"> = {};
      const bindings: string[] = [];
      node.templateSpans.forEach((span, index) => {
        const key = `v${index}`;
        placeholders[key] = "string";
        ja += `{${key}}` + span.literal.text;
        let expression = span.expression.getText(ast);
        if (expression.includes('"不明"')) {
          const unknown = register("不明", "unknown equipment ID fallback");
          expression = expression.replaceAll(
            '"不明"',
            `${resolver}.ja(${JSON.stringify(unknown)})`
          );
        }
        bindings.push(`${key}:String(${expression})`);
      });
      const id = register(ja, "generated equipment name", placeholders);
      edits.push({
        start: node.getStart(ast),
        end: node.end,
        id,
        oldText: node.getText(ast),
        replacement: `${resolver}.ja(${JSON.stringify(id)}, {${bindings.join(",")}})`,
      });
      return;
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  let migrated = text;
  for (const edit of [...edits].sort((a, b) => b.start - a.start))
    migrated =
      migrated.slice(0, edit.start) +
      edit.replacement +
      migrated.slice(edit.end);
  if (sources.length)
    migrated =
      `import {createLegacyTexts as createProviderDisplayTexts} from "./content/legacyTexts";\nimport {sources as providerDisplaySources} from "../content/ja/guides/${module}_providerDisplay";\nconst ${resolver} = createProviderDisplayTexts(providerDisplaySources, {}, {});\n` +
      migrated;
  return { migrated, sources, edits };
}

const textDigest = (text: string) => contentDigest(text.replace(/\r\n/g, "\n"));

export function adoptProviderDisplaysMain(
  args: string[],
  root = resolve("."),
  beforeCommit?: () => void
) {
  if (
    args.length < 1 ||
    args.length > 2 ||
    !Object.hasOwn(configurations, args[0]!) ||
    (args[1] && args[1] !== "--write")
  )
    throw new Error(
      "Usage: adoptProviderDisplays gameProviders|buildAdvisor|enkaFallback [--write]"
    );
  const module = args[0] as keyof typeof configurations;
  const target = resolve(root, `server/${module}.ts`);
  const original = readFileSync(target, "utf8");
  const name = `${module}_providerDisplay`;
  const receipt = resolve(root, `content/coverage/${name}.migration.json`);
  if (existsSync(receipt)) {
    const saved = JSON.parse(readFileSync(receipt, "utf8"));
    const paths = [
      `content/ja/guides/${name}.ts`,
      ...["en", "zh-CN"].map(
        language => `content/translations/${language}/${name}.ts`
      ),
    ];
    if (
      saved.schemaVersion !== 1 ||
      saved.migrationId !== name ||
      saved.outputDigest !== textDigest(original) ||
      !saved.artifactDigests ||
      Object.keys(saved.artifactDigests).sort().join("|") !==
        [...paths].sort().join("|") ||
      paths.some(
        path =>
          !existsSync(resolve(root, path)) ||
          saved.artifactDigests[path] !==
            textDigest(readFileSync(resolve(root, path), "utf8"))
      )
    ) {
      throw new Error(
        "Provider migration differs; preserved outputs will not be overwritten"
      );
    }
    console.log(
      JSON.stringify({
        module,
        action: "unchanged",
        write: args[1] === "--write",
      })
    );
    return;
  }
  const result = adoptProviderDisplays(original, module);
  const outputs: string[][] = [
    [
      `content/ja/guides/${name}.ts`,
      `import type {SourceText} from "../../../shared/content/types";\nexport const sources: SourceText[] = ${JSON.stringify(result.sources, null, 2)};\n`,
    ],
    ...["en", "zh-CN"].map(language => [
      `content/translations/${language}/${name}.ts`,
      'import type {TranslationRecord} from "../../../shared/content/types";\nexport const records: Record<string,TranslationRecord> = {};\n',
    ]),
  ];
  const artifactDigests = Object.fromEntries(
    outputs.map(([path, value]) => [path!, textDigest(value!)])
  );
  outputs.push([
    `content/coverage/${name}.migration.json`,
    JSON.stringify(
      {
        schemaVersion: 1,
        migrationId: name,
        inputDigest: textDigest(original),
        outputDigest: textDigest(result.migrated),
        artifactDigests,
        mapping: result.edits,
      },
      null,
      2
    ) + "\n",
  ]);
  if (args[1] === "--write") {
    if (!result.sources.length)
      throw new Error("No provider display candidates");
    for (const [path] of outputs)
      if (existsSync(resolve(root, path!)))
        throw new Error(`Output already exists: ${path}`);
    const temporary = target + ".provider-adoption.tmp";
    const created: string[][] = [];
    let staged = false;
    try {
      writeFileSync(temporary, result.migrated, { flag: "wx" });
      staged = true;
      for (const [path, value] of outputs) {
        writeFileSync(resolve(root, path!), value!, { flag: "wx" });
        created.push([path!, value!]);
      }
      beforeCommit?.();
      if (textDigest(readFileSync(target, "utf8")) !== textDigest(original))
        throw new Error("Provider input changed during migration");
      renameSync(temporary, target);
      staged = false;
    } catch (error) {
      // Remove only files created by this attempt whose bytes are still ours.
      for (const [path, value] of created.reverse()) {
        const absolute = resolve(root, path!);
        if (
          existsSync(absolute) &&
          textDigest(readFileSync(absolute, "utf8")) === textDigest(value!)
        )
          unlinkSync(absolute);
      }
      if (staged && existsSync(temporary)) unlinkSync(temporary);
      throw error;
    }
  }
  console.log(
    JSON.stringify({
      module,
      sources: result.sources.length,
      sites: result.edits.length,
      write: args[1] === "--write",
    })
  );
}
if (
  process.argv[1] &&
  pathToFileURL(resolve(process.argv[1])).href === import.meta.url
) {
  try {
    adoptProviderDisplaysMain(process.argv.slice(2));
  } catch (error) {
    console.error(
      error instanceof Error
        ? error.message
        : "Provider display adoption failed"
    );
    process.exitCode = 1;
  }
}
