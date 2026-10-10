import type { ContentCatalog, ContentIssue, CoverageSection, SourceText, TextId, TextRef } from "../../shared/content/types";
import { parseCatalog } from "./schema";

export type ContentIndex = {
  catalog: ContentCatalog;
  sources: ReadonlyMap<string, SourceText>;
  resolve: (id: string) => SourceText | undefined;
  issues: ContentIssue[];
};

export function indexCatalog(value: unknown, expectedSections: readonly Pick<CoverageSection, "id" | "audience" | "visibility">[] = []): ContentIndex {
  const catalog = parseCatalog(value);
  const sources = new Map<string, SourceText>();
  const aliases = new Map<string, string>();
  const issues: ContentIssue[] = [];
  const issue = (code: string, id: string, detail: string) => issues.push({ code, id, detail });
  for (const source of catalog.sources) {
    if (sources.has(source.id)) issue("duplicate-source", source.id, "Source ID is defined more than once");
    else sources.set(source.id, source);
  }
  for (const alias of catalog.aliases) {
    if (sources.has(alias.from) || aliases.has(alias.from)) issue("duplicate-alias", alias.from, "Alias ID is already defined");
    else aliases.set(alias.from, alias.to);
  }
  const resolve = (id: string): SourceText | undefined => {
    const seen = new Set<string>();
    let at = id;
    while (aliases.has(at)) {
      if (seen.has(at)) return undefined;
      seen.add(at);
      at = aliases.get(at)!;
    }
    return sources.get(at);
  };
  for (const [from] of aliases) if (!resolve(from)) issue("invalid-alias", from, "Alias is cyclic or has no source");
  const sections = new Set<string>();
  for (const expected of expectedSections) {
    const actual = catalog.sections.find(entry => entry.id === expected.id);
    if (!actual) issue("missing-section", expected.id, "Expected information section is absent");
    else if (actual.audience !== expected.audience || actual.visibility !== expected.visibility) issue("section-policy-mismatch", expected.id, "Section cannot silently change audience or visibility");
  }
  for (const entry of catalog.sections) {
    if (sections.has(entry.id)) issue("duplicate-section", entry.id, "Section ID is already defined");
    sections.add(entry.id);
    if (entry.section.status !== "registered") continue;
    for (const ref of entry.section.data) {
      const source = resolve(ref.id);
      if (!source) issue("unknown-reference", ref.id, `Used by ${entry.id}`);
      else {
        if (source.audience !== entry.audience) issue("audience-mismatch", ref.id, `Used by ${entry.audience} section ${entry.id}`);
        const sectionGame = entry.id.match(/(?:^|\.)(hsr|genshin|zzz)(?:\.|$)/)?.[1];
        const sourceGame = source.id.match(/(?:^|\.)(hsr|genshin|zzz)(?:\.|$)/)?.[1];
        if (sectionGame && sourceGame && sectionGame !== sourceGame) issue("game-mismatch", ref.id, `Used by ${entry.id}`);
      }
    }
  }
  for (const source of sources.values()) {
    const dependencies = new Set<string>();
    for (const dependency of source.dependencies) {
      if (!resolve(dependency.id)) issue("unknown-dependency", source.id, dependency.id);
      if (dependencies.has(dependency.id)) issue("duplicate-dependency", source.id, dependency.id);
      dependencies.add(dependency.id);
    }
  }
  for (const language of ["en", "zh-CN"] as const) {
    for (const id of Object.keys(catalog.translations[language])) {
      // Translations are stored at the canonical ID, never under an alias.
      if (!sources.has(id)) issues.push({ code: "unknown-translation", id, language, detail: "No canonical Japanese source" });
    }
  }
  return { catalog, sources, resolve, issues };
}

export function textRef(id: TextId): TextRef {
  return { kind: "textRef", id };
}

export function japaneseText(index: ContentIndex, ref: TextRef, variables: Record<string, string | number> = {}): string {
  const source = index.resolve(ref.id);
  if (!source) throw new Error(`Unknown content reference: ${ref.id}`);
  const expected = Object.keys(source.placeholders).sort();
  const templateNames = [...new Set([...source.ja.matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)].map(match => match[1]!))].sort();
  if (JSON.stringify(templateNames) !== JSON.stringify(expected)) throw new Error(`Invalid Japanese template: ${ref.id}`);
  const actual = Object.keys(variables).sort();
  if (JSON.stringify(expected) !== JSON.stringify(actual)) throw new Error(`Content variables differ: ${ref.id}`);
  for (const name of expected) {
    const value = variables[name];
    if (typeof value !== source.placeholders[name] || (typeof value === "number" && !Number.isFinite(value))) {
      throw new Error(`Invalid content variable: ${ref.id}.${name}`);
    }
  }
  return source.ja.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (_, name: string) => String(variables[name]));
}
