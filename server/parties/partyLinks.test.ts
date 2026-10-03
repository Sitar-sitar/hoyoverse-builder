import { describe, expect, it } from "vitest";
import { resolvePartyMember } from "../partyMemberAliases";
import { CHARACTER_PARTIES } from "./characterParties";
import { INITIAL_PARTY_REFS } from "./initialRefs";
import { PARTY_LINK_BATCHES, PARTY_LINK_RECORDS } from "./linkRecords";
import { backlogLinks, rosterKey, teamStoreIssues, uncoveredLinks, type LinkStatusInput } from "./linkStatus";
import { refsFor } from "./resolve";
import { buildTeamStore, TEAM_STORE } from "./teamStore";
import type { CharacterPartyEntry, PartyLinkRecord, Team } from "./types";

// 設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md §8.1（partyLinks.test.ts）

const HINT = "characterParties.ts に参照を足す（＋linkRecords.ts に変更記録を追記）か、skipped に理由・URL・確認日を書く。一覧は scripts/audit/party-links.mjs";
const text = (value: string) => ({ ja: value, en: value, "zh-CN": value });

const sharedTeam = (id: string, game: Team["game"], origin: string, batch: number, members: Array<[string, string]>, extra: Partial<Team> = {}): Team => ({
  id, game, origin, originOrder: 9, shared: true, batch,
  title: text("フィクスチャ"),
  members: members.map(([name, role]) => ({ name: text(name), role: text(role) })),
  synergy: [text("相性")],
  targetSummary: text("編成・装備の戦闘中効果は公開プロフィールへ加算しない。"),
  gameVersion: "7.1", dataAsOf: "2026-10-20", updatedAt: "2026-10-20",
  sourceLabel: text("出典"), sourceUrl: "https://example.com/team",
  communitySources: [{ label: text("補助"), url: "https://example.com/aux", checkedAt: "2026-10-20", note: text("補助"), status: "watching" }],
  ...extra,
});

// 起点ベネット・第24バッチの共有編成。ファルザン・香菱・行秋はいずれも現在この構成を表示していない（下のテストで確認）。
const BENNETT_TEAM = sharedTeam("team-genshin-ベネット-b24-1", "genshin", "ベネット", 24, [
  ["ベネット", "回復・攻撃力支援"], ["ファルザン", "風耐性低下"], ["香菱", "炎付着"], ["行秋", "水付着"],
]);
const B24 = { ...PARTY_LINK_BATCHES[23]!, batch: 24, date: "2026-10-20T12:00:00+09:00", updatedAt: "2026-10-20", title: "第24バッチ追補" };
const withTeam = (team: Team, overrides: Partial<LinkStatusInput> = {}): Partial<LinkStatusInput> => ({
  store: buildTeamStore([...TEAM_STORE.teams.filter((entry) => entry.id !== team.id), { ...team, originOrder: 99 }]),
  batches: { ...PARTY_LINK_BATCHES, 24: B24, 25: { ...B24, batch: 25 } },
  ...overrides,
});
const owners = (list: { owner: string }[]) => list.map((entry) => entry.owner).sort();

describe("推奨PTの連動ゲート（Phase 2）", () => {
  it("現行データに整合性の問題が無い", () => {
    expect(teamStoreIssues()).toEqual([]);
  });

  it("すべての共有編成について、参加者全員が参照または見送りを記録している", () => {
    const uncovered = uncoveredLinks();
    expect(uncovered, `${HINT}\n${JSON.stringify(uncovered, null, 2)}`).toEqual([]);
  });

  it("共有編成を足すと、起点以外のカタログ上の参加者が未対応として出る", () => {
    for (const name of ["ファルザン", "香菱", "行秋"]) {
      expect(refsFor("genshin", name).some((ref) => rosterKey("genshin", TEAM_STORE.byId.get(ref.team)!.members) === rosterKey("genshin", BENNETT_TEAM.members))).toBe(false);
    }
    expect(owners(uncoveredLinks(withTeam(BENNETT_TEAM)))).toEqual(["ファルザン", "行秋", "香菱"].sort());
  });

  it("見送りを足すとその1名だけ消え、同じ構成の別編成を表示していれば対応済みになる", () => {
    const skipped: Record<string, CharacterPartyEntry> = {
      ...CHARACTER_PARTIES,
      "genshin:香菱": { skipped: [{ team: BENNETT_TEAM.id, reason: "香菱の個別ガイドの編成節に記載なし", sourceUrl: "https://example.com/xiangling", checkedAt: "2026-10-20" }] },
    };
    expect(owners(uncoveredLinks(withTeam(BENNETT_TEAM, { parties: skipped })))).toEqual(["ファルザン", "行秋"].sort());
    // 同じ構成（並び違い）の編成を行秋の参照に入れると、行秋は対応済み。
    const sameRoster = sharedTeam("team-genshin-ベネット-b24-2", "genshin", "ベネット", 24, [["行秋", "水付着"], ["香菱", "炎付着"], ["ファルザン", "風耐性低下"], ["ベネット", "回復・攻撃力支援"]]);
    const store = buildTeamStore([...TEAM_STORE.teams, { ...BENNETT_TEAM, originOrder: 98 }, { ...sameRoster, originOrder: 99 }]);
    const parties: Record<string, CharacterPartyEntry> = { ...skipped, "genshin:行秋": { refs: [...refsFor("genshin", "行秋").slice(0, 2), { team: sameRoster.id }] } };
    expect(owners(uncoveredLinks({ store, parties })).filter((name) => name === "行秋")).toEqual([]);
  });

  it("起点・実装待ち・派生のメンバーは出ず、カタログ扱いになると出る", () => {
    const team = sharedTeam("team-genshin-ヴェスナ-b24-1", "genshin", "ヴェスナ", 24, [
      ["ヴェスナ", "星拡散アタッカー"], ["オデット", "氷付着"], ["旅人（草）", "草付着"], ["ファルザン", "風耐性低下"],
    ]);
    expect(owners(uncoveredLinks(withTeam(team)))).toEqual(["ファルザン"]);
    const resolve: LinkStatusInput["resolve"] = (game, name) => name === "オデット" ? { kind: "catalog", canonical: "オデット" } : resolvePartyMember(game, name);
    expect(owners(uncoveredLinks(withTeam(team, { resolve })))).toContain("オデット");
  });

  it("batch が23未満の共有編成もゲートから外れず、D10 の違反になる（PT-04）", () => {
    const old = sharedTeam("team-genshin-ベネット-b22-1", "genshin", "ベネット", 22, BENNETT_TEAM.members.map((entry) => [entry.name.ja, entry.role.ja]));
    expect(owners(uncoveredLinks(withTeam(old)))).toEqual(["ファルザン", "行秋", "香菱"].sort());
    expect(teamStoreIssues(withTeam(old)).some((issue) => issue.startsWith("D10"))).toBe(true);
  });

  it("旧形式の編成を後続バッチで共有化すると、参加者全員の記録が揃うまで失敗する（PT-04）", () => {
    // 実データの共有化済みキャラに依存しない反例。初期参照にある旧IDと別の構成を使う。
    const legacy: Team = { ...TEAM_STORE.byId.get("curated-hsr-爻光-3")!,
      members: ["爻光", "火花", "パール", "フォフォ"].map((name) => ({ name: text(name), role: text("支援") })),
      targetSummary: text("爻光の公開値は変更しない。") };
    const converted: Team = { ...legacy, id: "team-hsr-爻光-b25-1", shared: true, batch: 25, sourceBatch: 16,
      targetSummary: text("編成・遺物・星魂の戦闘中効果は公開プロフィールへ加算しない。") };
    const base = TEAM_STORE.teams.filter((team) => team.id !== legacy.id);
    expect(teamStoreIssues({ store: buildTeamStore([...base, { ...converted, targetSummary: legacy.targetSummary }]) }).some((issue) => issue.startsWith("D14"))).toBe(true);
    const store = buildTeamStore([...base, converted]);
    const batches = { ...PARTY_LINK_BATCHES, 25: { ...B24, batch: 25 } };
    expect(owners(uncoveredLinks({ store, batches }))).toEqual(["火花", "パール", "フォフォ"].sort());
    expect(teamStoreIssues({ store, batches }).some((issue) => issue.startsWith("B2"))).toBe(true);
    const sparkleRefs = refsFor("hsr", "火花");
    const dropped = sparkleRefs.slice(2).map((ref) => ref.team);
    const skip = { team: converted.id, reason: "個別ガイドの編成節に記載なし", sourceUrl: "https://example.com/team", checkedAt: "2026-10-20" };
    const parties: Record<string, CharacterPartyEntry> = { ...CHARACTER_PARTIES,
      "hsr:爻光": { ...CHARACTER_PARTIES["hsr:爻光"], refs: [...refsFor("hsr", "爻光").slice(0, 2), { team: converted.id }] },
      "hsr:火花": { refs: [...sparkleRefs.slice(0, 2), { team: converted.id }], skipped: [{ ...skip, team: dropped[0]! }] },
      "hsr:パール": { ...CHARACTER_PARTIES["hsr:パール"], skipped: [skip] },
      "hsr:フォフォ": { skipped: [skip] },
    };
    const records: PartyLinkRecord[] = [...PARTY_LINK_RECORDS,
      { batch: 25, game: "hsr", owner: "爻光", added: [converted.id], removed: [legacy.id] },
      { batch: 25, game: "hsr", owner: "火花", added: [converted.id], removed: dropped }];
    expect(teamStoreIssues({ store, batches, parties }).some((issue) => issue.startsWith("B7/E2"))).toBe(true);
    expect(uncoveredLinks({ store, batches, parties, records })).toEqual([]);
    expect(teamStoreIssues({ store, batches, parties, records })).toEqual([]);
    expect(teamStoreIssues({ store: buildTeamStore([...base, { ...converted, batch: 16, sourceBatch: undefined }]), batches }).some((issue) => issue.startsWith("D10"))).toBe(true);
  });

  it("共有化していない旧形式のバックログは報告だけ（29件）", () => {
    const backlog = backlogLinks();
    expect(backlog).toHaveLength(29);
    const byOrigin = Object.fromEntries([...new Set(backlog.map((entry) => entry.origin))].map((origin) => [origin, backlog.filter((entry) => entry.origin === origin).length]));
    expect(byOrigin).toEqual({ 千冶・刃: 8, 姫子・旅立ち: 8, ロビン・夏空の歌: 7, クラレッタ: 6 });
  });
});

describe("整合性の否定例", () => {
  const issuesWith = (overrides: Partial<LinkStatusInput>) => teamStoreIssues({ batches: { ...PARTY_LINK_BATCHES, 24: B24 }, ...overrides });
  const has = (issues: string[], code: string) => issues.some((issue) => issue.startsWith(code));
  const storeWith = (...teams: Team[]) => buildTeamStore([...TEAM_STORE.teams, ...teams.map((team, index) => ({ ...team, originOrder: 90 + index }))]);

  it("共有編成の品質（D13・D14・D15）", () => {
    expect(has(issuesWith({ store: storeWith({ ...BENNETT_TEAM, members: BENNETT_TEAM.members.map((entry, index) => index === 1 ? { ...entry, role: text("支援・反応") } : entry) }) }), "D13")).toBe(true);
    expect(has(issuesWith({ store: storeWith({ ...BENNETT_TEAM, targetSummary: text("ベネットの回復は加算しない。") }) }), "D14")).toBe(true);
    expect(has(issuesWith({ store: storeWith({ ...BENNETT_TEAM, id: "bennett-team" }) }), "D15")).toBe(true);
    const duplicate = { ...BENNETT_TEAM, id: "team-genshin-ベネット-b24-2" };
    expect(has(issuesWith({ store: storeWith(BENNETT_TEAM, duplicate) }), "D15")).toBe(true);
  });

  it("参照（B4・B6）と見送り（C2・C3）", () => {
    const legacyRef = { ...CHARACTER_PARTIES, "genshin:ベネット": { refs: [{ team: "curated-genshin-フリーナ-1" }] } };
    expect(has(issuesWith({ parties: legacyRef }), "B4") || has(issuesWith({ parties: legacyRef }), "B2")).toBe(true);
    const viewIdElsewhere = { ...CHARACTER_PARTIES, "genshin:ファルザン": { refs: [{ team: "curated-genshin-ファルザン-1", viewId: "x" }] } };
    expect(has(issuesWith({ parties: viewIdElsewhere }), "B5")).toBe(true);
    const store = storeWith(BENNETT_TEAM);
    const httpSkip = { ...CHARACTER_PARTIES, "genshin:香菱": { skipped: [{ team: BENNETT_TEAM.id, reason: "記載なし", sourceUrl: "http://example.com", checkedAt: "2026-10-20" }] } };
    expect(has(issuesWith({ store, parties: httpSkip }), "C2")).toBe(true);
    const both = { ...CHARACTER_PARTIES, "genshin:香菱": { refs: [{ team: BENNETT_TEAM.id }], skipped: [{ team: BENNETT_TEAM.id, reason: "記載なし", sourceUrl: "https://example.com", checkedAt: "2026-10-20" }] } };
    expect(has(issuesWith({ store, parties: both }), "C3")).toBe(true);
  });

  it("旧形式の件数上限（A4）と、4件以上保存した起点の明示参照（A6）", () => {
    const extraLegacy: Team = { ...TEAM_STORE.byId.get("curated-genshin-ベネット-1")!, id: "legacy-extra" };
    const issues = issuesWith({ store: storeWith(extraLegacy) });
    expect(has(issues, "A4")).toBe(true);
    expect(has(issues, "A6")).toBe(true);
  });

  it("変更記録（E2〜E5）", () => {
    const store = storeWith(BENNETT_TEAM);
    // ベネットは保存編成が4件になるので、表示3件を明示参照で選ぶ（A6）。
    const linked = {
      ...CHARACTER_PARTIES,
      "genshin:ベネット": { refs: refsFor("genshin", "ベネット") },
      "genshin:香菱": { refs: [...refsFor("genshin", "香菱").slice(0, 2), { team: BENNETT_TEAM.id }] },
    };
    expect(has(issuesWith({ store, parties: linked }), "B7/E2")).toBe(true);
    const record: PartyLinkRecord = { batch: 24, game: "genshin", owner: "香菱", added: [BENNETT_TEAM.id], removed: refsFor("genshin", "香菱").slice(2).map((ref) => ref.team) };
    expect(issuesWith({ store, parties: linked, records: [...PARTY_LINK_RECORDS, record] })).toEqual([]);
    expect(has(issuesWith({ store, parties: linked, records: [...PARTY_LINK_RECORDS, { ...record, batch: 30 }] }), "E3")).toBe(true);
    expect(has(issuesWith({ parties: linked, records: [...PARTY_LINK_RECORDS, record] }), "E4")).toBe(true);
    const edited = PARTY_LINK_RECORDS.map((entry, index) => index === 0 ? { ...entry, added: entry.added.slice(0, 1) } : entry);
    expect(has(issuesWith({ records: edited }), "E5")).toBe(true);
  });

  it("rosterKey は主人公の略記と正式表記を同じ構成とみなす", () => {
    const members = (name: string) => [name, "緋英", "爻光", "パール"].map((entry) => ({ name: { ja: entry } }));
    expect(rosterKey("hsr", members("愉悦主人公"))).toBe(rosterKey("hsr", members("開拓者（愉悦）")));
  });
});
