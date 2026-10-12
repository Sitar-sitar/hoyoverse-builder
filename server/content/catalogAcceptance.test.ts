import { describe, expect, it } from "vitest";
import { contentRepository } from "./repository";
import { indexCatalog } from "./catalog";
import { exportCandidates, translationState } from "./coverage";
import { sourceHash } from "./hash";

describe("whole catalog revision acceptance", () => {
  it("preserves every existing translation as unapproved legacy data during preparation", () => {
    const index = contentRepository();
    for (const [language, records] of Object.entries(index.catalog.translations)) {
      expect(Object.keys(records).length, language).toBeGreaterThan(6000);
      for (const [id, record] of Object.entries(records)) {
        expect(index.sources.has(id), `${language}:${id}`).toBe(true);
        expect(record, `${language}:${id}`).toMatchObject({ sourceHash: null, review: "pending", origin: "legacy" });
      }
    }
  });
  it("detects Japanese/context changes for every source without rewriting saved translations", () => {
    const index = contentRepository();
    const saved = JSON.stringify(index.catalog.translations);
    for (const source of index.catalog.sources) {
      const hash = sourceHash(source);
      expect(sourceHash({ ...source, ja: `${source.ja}追記` }), source.id).not.toBe(hash);
      expect(sourceHash({ ...source, context: `${source.context}追記` }), source.id).not.toBe(hash);
      expect(sourceHash({ ...source, placeholders: Object.fromEntries(Object.entries(source.placeholders).reverse()), dependencies: [...source.dependencies].reverse(), protectedTokens: [...source.protectedTokens].reverse() }), source.id).toBe(hash);
      // An in-memory candidate only: no authoring record is approved or saved.
      const candidate = { text: `${source.ja} candidate`, sourceHash: hash, review: "pending" as const, origin: "legacy" as const };
      expect(translationState(source, candidate).state, source.id).toBe("pending");
      expect(translationState({ ...source, context: `${source.context}追記` }, candidate).state, source.id).toBe("stale");
    }
    expect(JSON.stringify(index.catalog.translations)).toBe(saved);
  });

  it("keeps candidate hashes and all section impacts after catalog ordering changes", () => {
    const index = contentRepository();
    const before = exportCandidates(index, "en");
    const reordered = indexCatalog({ ...index.catalog, sources: [...index.catalog.sources].reverse(), sections: [...index.catalog.sections].reverse(), aliases: [...index.catalog.aliases].reverse() });
    expect(reordered.issues).toEqual([]);
    expect(exportCandidates(reordered, "en")).toEqual(before);
    const impacts = new Map<string, Set<string>>();
    for (const section of index.catalog.sections) {
      if (section.section.status !== "registered") continue;
      for (const ref of section.section.data) {
        const id = index.resolve(ref.id)?.id;
        if (!id) continue;
        if (!impacts.has(id)) impacts.set(id, new Set());
        impacts.get(id)!.add(section.id);
      }
    }
    let shared = 0;
    for (const candidate of before) {
      const expected = [...(impacts.get(candidate.id) ?? [])].sort();
      expect(candidate.usedBy, candidate.id).toEqual(expected);
      if (expected.length > 1) shared++;
    }
    expect(shared).toBeGreaterThan(0);
  });
});
