import { describe, expect, it } from "vitest";
import {
  historyRecords,
  historySections,
  validateHistoryRecords,
  historyBatches,
  validateHistoryBatches,
  historyProfileTemplate,
  profileHistoryRefs,
} from "../../content/history";
import { sources } from "../../content/ja/guides/guideUpdateHistory";
import {
  staticHistoryEvents,
  batchHistoryTemplates,
  profileHistoryEvent,
} from "./history";
import { adoptHistoryRecords } from "../../scripts/content/adoptHistoryRecords";

describe("fixed history authoring", () => {
  it("keeps every event and later paragraph attached to its stable references", () => {
    expect(historyRecords).toHaveLength(26);
    const projected = staticHistoryEvents();
    expect(projected.siteEvents).toHaveLength(17);
    expect(
      Object.values(projected.characterEvents)
        .flatMap(game => Object.values(game!))
        .flat()
    ).toHaveLength(9);
    const sections = historySections();
    for (const record of historyRecords) {
      const section = sections.find(
        section => section.id === record.content.eventId
      )!;
      expect(section.section.status).toBe("registered");
      if (section.section.status === "registered")
        expect(section.section.data.map(ref => ref.id)).toEqual([
          record.content.title.id,
          record.content.summary.id,
          ...record.content.changes.map(block => block.text.id),
          record.content.rationale.id,
        ]);
    }
    expect(Object.keys(projected.siteEvents[0]!)).toEqual(
      historyRecords[0]!.legacyFieldOrder
    );
  });
  it("rejects ID collisions, unknown display fields, dangling refs and invalid scope", () => {
    const first = structuredClone(historyRecords[0]!);
    expect(() => validateHistoryRecords([first, first], sources)).toThrow(
      "history event ID"
    );
    expect(() =>
      validateHistoryRecords(
        [{ ...first, extra: "new display" } as typeof first],
        sources
      )
    ).toThrow("record field");
    expect(() =>
      validateHistoryRecords(
        [
          {
            ...first,
            content: {
              ...first.content,
              changes: [first.content.changes[0]!, first.content.changes[0]!],
            },
          },
        ],
        sources
      )
    ).toThrow("block ID");
    expect(() =>
      validateHistoryRecords(
        [
          {
            ...first,
            content: {
              ...first.content,
              title: { kind: "textRef", id: "history.unknown" },
            },
          },
        ],
        sources
      )
    ).toThrow("source reference");
    expect(() =>
      validateHistoryRecords(
        [
          {
            ...first,
            content: {
              ...first.content,
              extra: "new display",
            } as typeof first.content,
          },
        ],
        sources
      )
    ).toThrow("Unclassified content field");
    expect(() =>
      validateHistoryRecords([{ ...first, scope: "character" }], sources)
    ).toThrow("character metadata");
    expect(() =>
      validateHistoryRecords(
        [{ ...first, legacyFieldOrder: ["date"] }],
        sources
      )
    ).toThrow("compatibility field order");
  });
  it("never evaluates unsupported authoring code during adoption", () => {
    const event =
      '{date:"2026-01-01",scope:"site",games:["hsr"],title:_content.ja("history.title"),summary:_content.ja("history.summary"),changes:[_content.ja("history.first"),_content.ja("history.second")],rationale:_content.ja("history.why")}';
    const fixture = `const SITE_EVENTS=[${event}]; const CHARACTER_CHANGE_EVENTS={};`;
    const migrated = adoptHistoryRecords(fixture);
    expect(
      migrated.records[0]!.content.changes.map(block => block.text.id)
    ).toEqual(["history.first", "history.second"]);
    expect(adoptHistoryRecords(fixture).records).toEqual(migrated.records);
    expect(() =>
      adoptHistoryRecords(fixture.replace('"2026-01-01"', "execute()"))
    ).toThrow("Unclassified history expression");
    expect(() =>
      adoptHistoryRecords(
        fixture.replace('scope:"site"', 'extra:"hidden",scope:"site"')
      )
    ).toThrow("event field");
  });
  it("validates every batch template and binds only the existing name/profile variables", () => {
    expect(historyBatches).toHaveLength(22);
    const templates = batchHistoryTemplates();
    expect(templates[1]!.summary("テスト名")).toContain("テスト名");
    expect(profileHistoryEvent("hsr", "2026-01-01", "crit").summary).toBe(
      "採用プロファイル: crit。公開プロフィールで比較可能な戦闘外の目標値を設定しました。"
    );
    const first = structuredClone(historyBatches[0]!);
    expect(() => validateHistoryBatches([first, first], sources)).toThrow(
      "batch ID"
    );
    expect(() =>
      validateHistoryBatches(
        [
          {
            ...first,
            summaryBindings: { v0: "wrong" },
          } as unknown as typeof first,
        ],
        sources
      )
    ).toThrow("binding contract");
    expect(() =>
      validateHistoryBatches(
        [first],
        sources.map(source =>
          source.id === first.content.summary.id
            ? { ...source, placeholders: {} }
            : source
        )
      )
    ).toThrow("binding contract");
    expect(() =>
      profileHistoryRefs({
        ...historyProfileTemplate,
        extra: "hidden",
      } as typeof historyProfileTemplate)
    ).toThrow("profile template");
    expect(() =>
      profileHistoryRefs({
        ...historyProfileTemplate,
        summaryBindings: { v0: "wrong" },
      } as unknown as typeof historyProfileTemplate)
    ).toThrow("profile binding");
  });
});
