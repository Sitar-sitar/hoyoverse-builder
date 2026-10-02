import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { CHARACTER_GUIDE_CATALOG } from "../characterGuideCatalog";
import { CHARACTER_PARTIES } from "./characterParties";
import { INITIAL_PARTY_REFS } from "./initialRefs";
import { historyUpdatedAt, linkEventFor, linkRecordsFor, PARTY_LINK_BATCHES, PARTY_LINK_RECORDS } from "./linkRecords";
import { teamStoreIssues, type LinkStatusInput } from "./linkStatus";
import { refsFor } from "./resolve";
import { buildTeamStore, TEAM_STORE } from "./teamStore";
import type { PartyLinkRecord, Team } from "./types";

const key = "genshin:ベネット";
const own = INITIAL_PARTY_REFS[key]!;
const text = (ja: string) => ({ ja, en: ja, "zh-CN": ja });
const template = TEAM_STORE.byId.get(own[0]!)!;
const team = (origin: string, batch: number): Team => ({
  ...template, id: `team-genshin-${origin}-b${batch}-1`, origin, originOrder: 4, shared: true, batch,
  members: [["ベネット", "回復"], ["香菱", "炎付着"], ["行秋", "水付着"], ["ファルザン", "風支援"]].map(([name, role]) => ({ name: text(name!), role: text(role!) })),
  targetSummary: text("戦闘中効果は公開値へ加算しない。"),
});
const older = team("香菱", 23);
const fourth = { ...team("ベネット", 24), members: team("ベネット", 24).members.map(member => member.name.ja === "ファルザン" ? { ...member, name: text("フリーナ") } : member) };
const definition = (batch: number) => ({ ...PARTY_LINK_BATCHES[23]!, batch, date: `2026-10-${batch === 24 ? "20" : batch === 25 ? "21" : "22"}T12:00:00+09:00`, updatedAt: `2026-10-${batch === 24 ? "20" : batch === 25 ? "21" : "22"}` });
const record = (batch: number, added: string[], removed: string[], owner = "ベネット"): PartyLinkRecord => ({ batch, game: "genshin", owner, added, removed });
const input = (current: readonly string[], changes: PartyLinkRecord[] = [], initial = own): Partial<LinkStatusInput> => ({
  store: buildTeamStore([...TEAM_STORE.teams, older, fourth]),
  parties: { ...CHARACTER_PARTIES, "genshin:香菱": { refs: refsFor("genshin", "香菱") }, [key]: { refs: current.map(id => ({ team: id })) } },
  initialRefs: { ...INITIAL_PARTY_REFS, [key]: initial },
  records: [...PARTY_LINK_RECORDS, ...changes],
  batches: { ...PARTY_LINK_BATCHES, 24: definition(24), 25: definition(25), 26: definition(26) },
  // 所属24 > 編成23でも後日の採用を免除しない（PT-05）。
  batchOf: (game, name) => game === "genshin" && name === "ベネット" ? 24 : 1,
});
const withOlder = [...own.slice(0, 2), older.id];
const withFourth = [...own.slice(0, 2), fourth.id];
const replayIssues = (s: Partial<LinkStatusInput>) => teamStoreIssues(s).filter(issue => /^(B7\/E2|E[267])/.test(issue));

describe("初期参照から全表示参照を再生する（PT-05・PT-06）", () => {
  it("移行時256名の初期参照は固定し、後続の初回登録だけ末尾へ追記できる", () => {
    const migrated = Object.fromEntries(Object.entries(INITIAL_PARTY_REFS).slice(0, 256));
    expect(Object.keys(migrated)).toHaveLength(256);
    expect(createHash("sha256").update(JSON.stringify(migrated)).digest("hex")).toBe("d2a1f50c9bba9b4fb14467fa65a253620ac0a39ec986be9c50b3ad1ddc865513");
  });

  it("初回採用した古い共有編成は変更記録も追補イベントも不要", () => {
    const s = input(withOlder, [], withOlder);
    expect(replayIssues(s)).toEqual([]);
    expect(linkRecordsFor("genshin", "ベネット", s.records, s.batches)).toEqual([]);
  });

  it("新キャラの初回採用を固定しないと失敗し、固定すれば追補記録無しで通る", () => {
    const owner = "オデット";
    const initialId = "curated-genshin-ヴェスナ-1";
    const catalog = { hsr: CHARACTER_GUIDE_CATALOG.hsr, genshin: [...CHARACTER_GUIDE_CATALOG.genshin, owner], zzz: CHARACTER_GUIDE_CATALOG.zzz };
    const s = { catalog, parties: { ...CHARACTER_PARTIES, [`genshin:${owner}`]: { refs: [{ team: initialId }] } } };
    expect(replayIssues(s)).toContainEqual(expect.stringMatching(/^E6.*オデット/));
    expect(teamStoreIssues({ ...s, initialRefs: { ...INITIAL_PARTY_REFS, [`genshin:${owner}`]: [initialId] } })).toEqual([]);
    expect(linkRecordsFor("genshin", owner)).toEqual([]);
  });

  it("初回見送りから後日採用した古い編成は、記録漏れを検出し正しい追加・除外記録で通る", () => {
    const before = input(own);
    before.parties![key]!.skipped = [{ team: older.id, reason: "初回の個別ガイドに記載なし", sourceUrl: "https://example.com/owner", checkedAt: "2026-10-20" }];
    expect(teamStoreIssues(before)).toEqual([]);
    expect(replayIssues(input(withOlder))).toContainEqual(expect.stringMatching(/^B7\/E2/));
    const s = input(withOlder, [record(25, [older.id], [own[2]!])]);
    expect(teamStoreIssues(s)).toEqual([]);
    const events = linkRecordsFor("genshin", "ベネット", s.records, s.batches);
    expect(events).toHaveLength(1);
    expect(linkEventFor("genshin", "ベネット", events[0]!).summary).toContain("1案");
    expect(historyUpdatedAt("2026-10-01", events)).toBe("2026-10-21");
  });

  it("初回採用した編成の除外・再採用は両方の履歴を残す", () => {
    const changes = [record(25, [own[2]!], [older.id]), record(26, [older.id], [own[2]!])];
    const s = input(withOlder, changes, withOlder);
    expect(teamStoreIssues(s)).toEqual([]);
    expect(linkRecordsFor("genshin", "ベネット", s.records, s.batches).map(entry => entry.record.batch)).toEqual([26, 25]);
    // 除外時の記録を落とすと最終集合が同じでも再生中の不正遷移を検出する。
    expect(replayIssues(input(withOlder, changes.slice(1), withOlder))).toContainEqual(expect.stringMatching(/^E7/));
  });

  it("自分起点の4件目採用は記録漏れを検出し、追加・除外の両方を書けば通る", () => {
    expect(replayIssues(input(withFourth))).toContainEqual(expect.stringMatching(/^B7\/E2/));
    const s = input(withFourth, [record(24, [fourth.id], [own[2]!])]);
    expect(teamStoreIssues(s)).toEqual([]);
    expect(linkRecordsFor("genshin", "ベネット", s.records, s.batches)).toHaveLength(1);
  });

  it("外した自分起点の旧案を再採用できる", () => {
    const s = input(own, [record(24, [fourth.id], [own[2]!]), record(25, [own[2]!], [fourth.id])]);
    expect(teamStoreIssues(s)).toEqual([]);
    expect(linkRecordsFor("genshin", "ベネット", s.records, s.batches)).toHaveLength(2);
  });

  it("他起点から自分起点への差し替えも履歴と再生が一致する", () => {
    const s = input(withFourth, [record(25, [fourth.id], [older.id])], withOlder);
    expect(teamStoreIssues(s)).toEqual([]);
    expect(replayIssues(input(withFourth, [], withOlder))).not.toEqual([]);
  });

  it("明示参照を消して既定参照へ戻しても、除外・再採用の記録が要る", () => {
    const parties = { ...CHARACTER_PARTIES };
    delete parties["genshin:ファルザン"];
    const dropped = CHARACTER_PARTIES["genshin:ファルザン"]!.refs!.slice(1).map(ref => ref.team);
    const s = { parties, batches: { ...PARTY_LINK_BATCHES, 24: definition(24) } };
    expect(replayIssues(s)).not.toEqual([]);
    const original = INITIAL_PARTY_REFS["genshin:ファルザン"]!.slice(1);
    expect(teamStoreIssues({ ...s, records: [...PARTY_LINK_RECORDS, record(24, [...original], dropped, "ファルザン")] })).toEqual([]);
  });

  it("明示参照が無いキャラの既定参照の変化も検出する", () => {
    const store = buildTeamStore(TEAM_STORE.teams.filter(entry => entry.id !== own[2]));
    expect(replayIssues({ store })).toContainEqual(expect.stringMatching(/^E2.*ベネット/));
  });

  it("初期参照の欠落・重複・カタログ外キーを検出する", () => {
    const missing = { ...INITIAL_PARTY_REFS };
    delete missing[key];
    for (const initialRefs of [missing, { ...INITIAL_PARTY_REFS, [key]: [own[0]!, own[0]!] }, { ...INITIAL_PARTY_REFS, "genshin:不存在": [] }]) {
      expect(replayIssues({ initialRefs })).toContainEqual(expect.stringMatching(/^E6/));
    }
  });

  it("差し替えで外した旧IDはマスタから削除しても再生できる", () => {
    const s = input(withFourth, [record(24, [fourth.id], [own[2]!])]);
    expect(teamStoreIssues({ ...s, store: buildTeamStore(s.store!.teams.filter(entry => entry.id !== own[2])) })).toEqual([]);
  });

  it("追加だけ書いて除外を落とした記録は検出する", () => {
    expect(replayIssues(input(withFourth, [record(24, [fourth.id], [])]))).toContainEqual(expect.stringMatching(/^E2/));
  });
});
