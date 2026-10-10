import type { ContentAudience, ContentIssue, SourceText, TranslationLanguage, TranslationRecord, TranslationState } from "../../shared/content/types";
import type { ContentIndex } from "./catalog";
import { sourceHash } from "./hash";

const placeholders = (value: string) => [...value.matchAll(/\{([A-Za-z][A-Za-z0-9_]*)\}/g)].map(match => match[1]!).sort();
const unique = (values: string[]) => [...new Set(values)];
const occurrences = (value: string, token: string) => value.split(token).length - 1;

export function sourceIssues(source: SourceText): ContentIssue[] {
  const issues: ContentIssue[] = [];
  if (JSON.stringify(unique(placeholders(source.ja))) !== JSON.stringify(Object.keys(source.placeholders).sort())) {
    issues.push({ code: "source-placeholders", id: source.id, detail: "Declared variables differ from Japanese template" });
  }
  for (const token of source.protectedTokens) {
    if (!source.ja.includes(token)) issues.push({ code: "source-token", id: source.id, detail: token });
  }
  return issues;
}

export function translationState(source: SourceText, record: TranslationRecord | undefined): { state: TranslationState; reasons: string[] } {
  if (!record || !record.text.trim()) return { state: "missing", reasons: ["No non-empty translation"] };
  const reasons: string[] = [];
  if (JSON.stringify(placeholders(source.ja)) !== JSON.stringify(placeholders(record.text))) reasons.push("Placeholder names or occurrence counts differ");
  for (const token of source.protectedTokens) {
    if (occurrences(source.ja, token) !== occurrences(record.text, token)) reasons.push(`Protected token differs: ${token}`);
  }
  if (record.text === source.ja && !source.sameTextAllowed) reasons.push("Identical text requires an explicit reason");
  if (record.review === "approved" && (!record.reviewedAt || record.origin !== "reviewed")) reasons.push("Approval requires a review date and reviewed origin");
  if (sourceIssues(source).length || reasons.length) return { state: "invalid", reasons };
  if (record.sourceHash !== sourceHash(source)) return { state: "stale", reasons: ["Translation has no matching source revision"] };
  if (record.review !== "approved") return { state: "pending", reasons: ["Translation has not been approved"] };
  return { state: "approved", reasons: [] };
}

export function reportCoverage(index: ContentIndex, audience?: ContentAudience) {
  const sources = [...index.sources.values()].filter(source => !audience || source.audience === audience)
    .sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  const sections = index.catalog.sections.filter(section => !audience || section.audience === audience).sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  const languages = Object.fromEntries((["en", "zh-CN"] as const).map(language => {
    const entries = sources.map(source => ({
      id: source.id,
      ...translationState(source, index.catalog.translations[language][source.id]),
    }));
    const counts = { missing: 0, stale: 0, pending: 0, approved: 0, invalid: 0 };
    for (const entry of entries) counts[entry.state]++;
    return [language, { counts, entries }];
  })) as Record<TranslationLanguage, { counts: Record<TranslationState, number>; entries: { id: string; state: TranslationState; reasons: string[] }[] }>;
  return {
    schemaVersion: 1 as const,
    sourceCount: sources.length,
    structureIssues: [...index.issues, ...sources.flatMap(sourceIssues)],
    information: {
      registered: sections.filter(entry => entry.section.status === "registered").length,
      notCollected: sections.filter(entry => entry.section.status === "notCollected").map(entry => ({ id: entry.id, visibility: entry.visibility, ...entry.section })),
      notApplicable: sections.filter(entry => entry.section.status === "notApplicable").length,
    },
    languages,
  };
}

export function exportCandidates(index: ContentIndex, language: TranslationLanguage) {
  return [...index.sources.values()].sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).flatMap(source => {
    const old = index.catalog.translations[language][source.id];
    const status = translationState(source, old);
    if (status.state === "approved") return [];
    return [{ ...source, language, sourceHash: sourceHash(source), oldText: old?.text ?? null, ...status,
      usedBy: index.catalog.sections.filter(entry => entry.section.status === "registered" && entry.section.data.some(ref => index.resolve(ref.id)?.id === source.id)).map(entry => entry.id).sort(),
    }];
  });
}

/** A planned section is reported but becomes a public gate only when activated. */
export function readiness(index: ContentIndex, language: TranslationLanguage, audience: ContentAudience) {
  const report = reportCoverage(index, audience);
  const activeSections = index.catalog.sections.filter(entry => entry.audience === audience && entry.visibility === "active");
  const activeIds = new Set(activeSections.flatMap(entry => entry.section.status === "registered"
    ? entry.section.data.map(ref => index.resolve(ref.id)?.id).filter((id): id is SourceText["id"] => Boolean(id)) : []));
  const missingSections = activeSections.filter(entry => entry.section.status === "notCollected").map(entry => entry.id);
  const incomplete = report.languages[language].entries.filter(entry => activeIds.has(entry.id as SourceText["id"]) && entry.state !== "approved");
  const unassigned = [...index.sources.values()].filter(source => source.audience === audience && !index.catalog.sections.some(entry => entry.section.status === "registered" && entry.section.data.some(ref => index.resolve(ref.id)?.id === source.id))).map(source => source.id);
  return { ready: activeSections.length > 0 && report.structureIssues.length === 0 && missingSections.length === 0 && incomplete.length === 0 && unassigned.length === 0,
    missingSections, incomplete, unassigned, structureIssues: report.structureIssues };
}
