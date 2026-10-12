import { describe, expect, it } from "vitest";
import {
  linkHistoryRecords,
  validateLinkHistory,
  linkHistoryRefs,
  linkHistorySections,
} from "../../content/linkHistory";
import { projectLinkHistory } from "./linkHistory";
import type { LinkHistoryContent } from "../../shared/content/linkHistory";
import { adoptLinkHistory } from "../../scripts/content/adoptLinkHistory";
describe("party link history authoring", () => {
  it("visits every later paragraph and source note and preserves numeric count variables", () => {
    expect(linkHistoryRecords).toHaveLength(5);
    expect(linkHistorySections()).toHaveLength(5);
    const projected = projectLinkHistory();
    for (const record of linkHistoryRecords) {
      const refs = linkHistoryRefs(record);
      expect(refs).toContainEqual(record.sourceNote);
      expect(refs).toContainEqual(record.changes.at(-1)!.text);
      const event = projected[record.batch]!;
      expect(event.changes).toHaveLength(record.changes.length);
      const summary = event.summary("テスト名", {
        batch: record.batch,
        game: "hsr",
        owner: "テスト名",
        added: ["first", "second"],
        removed: ["third"],
      });
      expect(summary).toContain("テスト名");
      expect(summary).toContain("2");
      if (record.summaryBindings.v2) expect(summary).toContain("1");
    }
  });
  it("rejects binding drift, duplicate blocks, unknown fields and dangling refs", () => {
    const first = structuredClone(linkHistoryRecords[0]!);
    expect(() => validateLinkHistory([first, first])).toThrow("batch/date");
    expect(() =>
      validateLinkHistory([
        { ...first, extra: "unregistered" } as LinkHistoryContent,
      ])
    ).toThrow("Unclassified");
    expect(() =>
      validateLinkHistory([
        {
          ...first,
          summaryBindings: { ...first.summaryBindings, v1: "removedCount" },
        } as unknown as LinkHistoryContent,
      ])
    ).toThrow("bindings");
    expect(() =>
      validateLinkHistory([
        {
          ...first,
          summaryBindings: { ...first.summaryBindings, v2: "removedCount" },
        },
      ])
    ).toThrow("placeholder contract");
    expect(() =>
      validateLinkHistory([
        { ...first, changes: [first.changes[0]!, first.changes[0]!] },
      ])
    ).toThrow("blocks");
    expect(() =>
      validateLinkHistory([
        { ...first, sourceNote: { kind: "textRef", id: "history.unknown" } },
      ])
    ).toThrow("reference");
  });
  it("decodes only the explicit name/added/removed expression contract", () => {
    const fixture =
      'const PARTY_LINK_BATCHES={23:{batch:23,date:"2026-10-01",updatedAt:"2026-10-01",sourceNote:_content.ja("history.note"),title:_content.ja("history.title"),summary:(name,record)=>_content.ja("history.summary",{v0:name,v1:record.added.length}),changes:[_content.ja("history.first"),_content.ja("history.second")],rationale:_content.ja("history.why")}};';
    const result = adoptLinkHistory(fixture);
    expect(result.records[0]!.summaryBindings).toEqual({
      v0: "characterName",
      v1: "addedCount",
    });
    expect(result.records[0]!.changes).toHaveLength(2);
    expect(() =>
      adoptLinkHistory(fixture.replace("record.added.length", "run()"))
    ).toThrow("Unknown link history variable");
  });
});
