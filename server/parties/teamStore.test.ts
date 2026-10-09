import { describe, expect, it } from "vitest";
import { CHARACTER_GUIDE_CATALOG } from "../characterGuideCatalog";
import { guideUpdateHistory } from "../guideUpdateHistory";
import { CHARACTER_PARTIES } from "./characterParties";
import { LEGACY_PARTY_KEYS } from "./legacyCatalog";
import { eventTime, historyUpdatedAt, linkEventFor, linkRecordsFor, mergeLinkEvents, PARTY_LINK_BATCHES, PARTY_LINK_RECORDS } from "./linkRecords";
import { latestOption, partyRecommendationsFor, refsFor, resolvePartySet } from "./resolve";
import { SHARED_TEAMS } from "./sharedTeams";
import { buildTeamStore, PARTY_GAMES, TEAM_STORE } from "./teamStore";
import type { PartyLinkRecord, Team } from "./types";

// 設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md §8.1（teamStore.test.ts）

const allCharacters = PARTY_GAMES.flatMap((game) => (CHARACTER_GUIDE_CATALOG[game] as readonly string[]).map((name) => ({ game, name })));
const BATCH23_OWNERS = ["ファルザン", "ディオナ", "スカーク", "フリーナ", "エスコフィエ"] as const;
const ORPHANS = ["ファルザン-2", "ファルザン-3", "ディオナ-3", "スカーク-3", "フリーナ-3", "エスコフィエ-3"].map((suffix) => `curated-genshin-${suffix}`);

const fixtureTeam = (id: string, origin: string, originOrder: number, members: string[], shared = false): Team => ({
  id, game: "genshin", origin, originOrder, shared, batch: shared ? 24 : null,
  title: { ja: id, en: id, "zh-CN": id },
  members: members.map((name) => ({ name: { ja: name, en: name, "zh-CN": name }, role: { ja: "主力", en: "DPS", "zh-CN": "主C" } })),
  synergy: [{ ja: "相性", en: "Synergy", "zh-CN": "协同" }],
  targetSummary: { ja: "注記", en: "Note", "zh-CN": "注" },
  gameVersion: "7.1", dataAsOf: "2026-10-01", updatedAt: "2026-10-01",
  sourceLabel: { ja: "出典", en: "Source", "zh-CN": "来源" }, sourceUrl: "https://example.com/source",
  communitySources: [{ label: { ja: "補助", en: "Aux", "zh-CN": "辅助" }, url: "https://example.com/aux", checkedAt: "2026-10-01", note: { ja: "", en: "", "zh-CN": "" }, status: "watching" }],
});

describe("編成マスタ（Phase 1）", () => {
  it("合計696件（旧形式672・共有24）で、IDが重複しない", () => {
    expect(TEAM_STORE.teams).toHaveLength(696);
    expect(TEAM_STORE.teams.filter((team) => !team.shared)).toHaveLength(672);
    expect(TEAM_STORE.teams.filter((team) => team.shared).map((team) => team.id)).toEqual(SHARED_TEAMS.map((team) => team.id));
    expect(TEAM_STORE.duplicateIds).toEqual([]);
    expect(new Set(TEAM_STORE.teams.map((team) => team.id)).size).toBe(696);
  });

  it("旧形式の全編成で起点キャラがメンバーにいて、目標補正9件が起点メンバーへ移っている", () => {
    for (const team of TEAM_STORE.teams) expect(team.members.filter((entry) => entry.name.ja === team.origin), team.id).toHaveLength(1);
    const withTargets = TEAM_STORE.teams.flatMap((team) => team.members
      .filter((entry) => entry.targetChanges?.length)
      .map((entry) => `${team.origin}#${team.originOrder}:${entry.name.ja}:${entry.targetChanges!.map((change) => change.key).join("+")}`));
    expect(withTargets.sort()).toEqual([
      "アルレッキーノ#1:アルレッキーノ:elementalMastery", "アルレッキーノ#2:アルレッキーノ:elementalMastery",
      "ホタル#1:ホタル:speed", "ホタル#2:ホタル:speed", "ホタル#3:ホタル:speed",
      "星見雅#1:星見雅:critRate", "星見雅#2:星見雅:critRate", "星見雅#3:星見雅:critRate",
      "雷電将軍#3:雷電将軍:elementalMastery",
    ].sort());
    const catalogKeys = new Set(allCharacters.map(({ game, name }) => `${game}:${name}`));
    expect(LEGACY_PARTY_KEYS.filter((key) => !catalogKeys.has(key))).toEqual([]);
  });

  it("ホタルは明示参照、未指定キャラは保存順の現行IDを既定参照する", () => {
    expect(refsFor("hsr", "ホタル").map((ref) => ref.team)).toEqual(["team-hsr-ホタル-b26-1","team-hsr-ホタル-b26-2","team-hsr-ホタル-b26-3"]);
    expect(refsFor("genshin", "ヴェスナ").map((ref) => ref.team)).toEqual(["curated-genshin-ヴェスナ-1", "curated-genshin-ヴェスナ-2"]);
    expect(refsFor("hsr", "存在しない名前")).toEqual([]);
  });

  it("同じ起点に旧3件と新1件を保存でき、表示は参照で選んだ3件だけになる（PT-01）", () => {
    const legacy = [1, 2, 3].map((order) => fixtureTeam(`old-${order}`, "テスト", order, ["テスト", "A", "B", "C"]));
    const added = fixtureTeam("team-genshin-テスト-b24-1", "テスト", 4, ["テスト", "D", "E", "F"], true);
    const store = buildTeamStore([...legacy, added]);
    expect(store.duplicateIds).toEqual([]);
    expect(store.byOrigin.get("genshin:テスト")!.map((team) => team.originOrder)).toEqual([1, 2, 3, 4]);
    expect(resolvePartySet("genshin", "テスト", store, {}).options.map((option) => option.id)).toEqual(["old-1", "old-2", "old-3"]);
    const parties = { "genshin:テスト": { refs: [{ team: added.id }, { team: "old-1" }, { team: "old-3" }] } };
    const chosen = resolvePartySet("genshin", "テスト", store, parties).options;
    expect(chosen.map((option) => [option.id, option.rank])).toEqual([[added.id, 1], ["old-1", 2], ["old-3", 3]]);
    expect(store.byId.get("old-2")?.id).toBe("old-2");
  });

  it("第23バッチ既存5名は現行の案ID・順位・先頭メンバー・期日を返し、表示から外れた旧案6件はマスタに残る", () => {
    const expected: Record<(typeof BATCH23_OWNERS)[number], string[]> = {
      ファルザン: ["curated-genshin-ファルザン-1", "curated-genshin-ファルザン-batch23-ヴェスナ-1", "curated-genshin-ファルザン-batch23-ヴェスナ-2"],
      ディオナ: ["curated-genshin-ディオナ-1", "curated-genshin-ディオナ-2", "curated-genshin-ディオナ-batch23-ヴェスナ-2"],
      スカーク: ["curated-genshin-スカーク-1", "curated-genshin-スカーク-2", "curated-genshin-スカーク-batch23-ヴォジャニーツァ-2"],
      フリーナ: ["curated-genshin-フリーナ-1", "curated-genshin-フリーナ-2", "curated-genshin-フリーナ-batch23-ヴォジャニーツァ-2"],
      エスコフィエ: ["curated-genshin-エスコフィエ-1", "curated-genshin-エスコフィエ-2", "curated-genshin-エスコフィエ-batch23-ヴォジャニーツァ-2"],
    };
    for (const name of BATCH23_OWNERS) {
      const set = partyRecommendationsFor("genshin", name);
      expect(set.options.map((option) => option.id)).toEqual(expected[name]);
      expect(set.options.map((option) => option.rank)).toEqual([1, 2, 3]);
      // 旧形式の案は保存順のまま（本人が先頭でない案もある）。他キャラ起点の追補行だけ本人を先頭にする。
      expect(set.options.filter((option) => option.id.includes("-batch23-")).every((option) => option.members[0]!.name.ja === name)).toBe(true);
      expect(set).toMatchObject({ gameVersion: "7.1", dataAsOf: "2026-09-29", updatedAt: "2026-10-01" });
    }
    const referenced = new Set(allCharacters.flatMap(({ game, name }) => refsFor(game, name).map((ref) => ref.team)));
    const unreferenced = TEAM_STORE.teams.filter((team) => team.game === "genshin" && !referenced.has(team.id)).map((team) => team.id);
    expect(unreferenced.sort()).toEqual([...ORPHANS].sort());
  });

  it("全256名でセット期日が最新案の期日と一致し、キーの並びが移行前と同じ", () => {
    expect(allCharacters).toHaveLength(256);
    for (const { game, name } of allCharacters) {
      const set = partyRecommendationsFor(game, name);
      const head = latestOption(set.options);
      expect([set.gameVersion, set.dataAsOf, set.updatedAt]).toEqual([head.gameVersion, head.dataAsOf, head.updatedAt]);
    }
    const set = partyRecommendationsFor("genshin", "ファルザン");
    expect(Object.keys(set)).toEqual(["gameVersion", "dataAsOf", "updatedAt", "options"]);
    expect(Object.keys(set.options[1]!)).toEqual(["id", "rank", "title", "members", "synergy", "targetChanges", "targetSummary", "gameVersion", "dataAsOf", "updatedAt", "sourceLabel", "sourceUrl", "communitySources"]);
    expect(Object.keys(set.options[1]!.members[0]!)).toEqual(["name", "role"]);
  });

  it("無効な参照は読み飛ばし、全部無効なら汎用3案を返す（D8）", () => {
    const own = fixtureTeam("own-1", "テスト", 1, ["テスト", "A", "B", "C"]);
    const legacyOther = fixtureTeam("other-legacy", "別キャラ", 1, ["別キャラ", "テスト", "B", "C"]);
    const withoutSelf = fixtureTeam("without-self", "別キャラ", 2, ["別キャラ", "X", "Y", "Z"], true);
    const store = buildTeamStore([own, legacyOther, withoutSelf]);
    const partial = { "genshin:テスト": { refs: [{ team: "missing" }, { team: "other-legacy" }, { team: "without-self" }, { team: "own-1" }] } };
    expect(resolvePartySet("genshin", "テスト", store, partial).options.map((option) => [option.id, option.rank])).toEqual([["own-1", 1]]);
    const none = { "genshin:テスト": { refs: [{ team: "missing" }, { team: "other-legacy" }] } };
    const fallback = resolvePartySet("genshin", "テスト", store, none).options;
    expect(fallback).toHaveLength(3);
    expect(fallback.every((option) => option.id.startsWith("generated-"))).toBe(true);
  });
});

describe("変更記録と更新履歴（PT-02・PT-03）", () => {
  const vesna2 = "curated-genshin-ヴェスナ-2";
  const batch24: PartyLinkRecord = { batch: 24, game: "genshin", owner: "ファルザン", added: ["team-genshin-オデット-b24-1"], removed: [vesna2] };
  const batches = { ...PARTY_LINK_BATCHES, 24: { ...PARTY_LINK_BATCHES[23]!, batch: 24, date: "2026-10-20T12:00:00+09:00", updatedAt: "2026-10-20", title: "第24バッチ追補" } };
  const eventsFor = (records: readonly PartyLinkRecord[]) => linkRecordsFor("genshin", "ファルザン", records, batches).map((entry) => linkEventFor("genshin", "ファルザン", entry));

  it("第23バッチ記録を維持し、ホタルだけ第26バッチに3案を追加", () => {
    expect(linkRecordsFor("genshin", "ファルザン").map(({ record }) => record.added.length)).toEqual([2]);
    expect(linkRecordsFor("genshin", "ディオナ").map(({ record }) => record.added.length)).toEqual([1]);
    expect(linkRecordsFor("hsr", "ホタル").map(({ record }) => [record.batch, record.added.length, record.removed.length])).toEqual([[26, 3, 3]]);
  });

  it("参照を一部・全部差し替えても第23バッチのイベントは変わらず、第24バッチのイベントだけが増える", () => {
    const [before] = eventsFor(PARTY_LINK_RECORDS);
    expect(before!.summary).toBe("ファルザン側へ新キャラ入りの編成を2案反映しました。");
    const partial = eventsFor([...PARTY_LINK_RECORDS, batch24]);
    expect(partial.map((event) => event.title)).toEqual(["第24バッチ追補", before!.title]);
    expect(partial[1]).toEqual(before);
    const removeAll: PartyLinkRecord = { ...batch24, added: [], removed: ["curated-genshin-ヴェスナ-1", vesna2] };
    const all = eventsFor([...PARTY_LINK_RECORDS, removeAll]);
    expect(all[1]).toEqual(before);
  });

  it("更新日はビルド側とPT側の新しい方", () => {
    const links = linkRecordsFor("genshin", "ファルザン");
    expect(historyUpdatedAt("2026-10-10", links)).toBe("2026-10-10");
    expect(historyUpdatedAt("2026-09-07", links)).toBe("2026-10-01");
    expect(historyUpdatedAt("2026-10-01", links)).toBe("2026-10-01");
    expect(historyUpdatedAt("2026-09-07", [])).toBe("2026-09-07");
  });

  it("PT連動イベントは既存列の相対順を保って日時の位置へ差し込まれる", () => {
    const base = [{ date: "2026-09-11T12:00:00+09:00", id: "a" }, { date: "2026-08-26T19:00:00+09:00", id: "b" }, { date: "2026-08-26", id: "c" }];
    const ids = (dates: string[], list = base) => mergeLinkEvents(list, dates.map((date, index) => ({ date, id: `L${index}` }))).map((entry) => entry.id);
    expect(ids(["2026-10-01T19:23:00+09:00"])).toEqual(["L0", "a", "b", "c"]);
    expect(ids(["2026-09-01T00:00:00+09:00"])).toEqual(["a", "L0", "b", "c"]);
    expect(ids(["2026-08-26T19:00:00+09:00"])).toEqual(["a", "L0", "b", "c"]);
    expect(ids(["2026-01-01T00:00:00+09:00"])).toEqual(["a", "b", "c", "L0"]);
    expect(ids(["2026-10-01T00:00:00+09:00", "2026-09-01T00:00:00+09:00"])).toEqual(["L0", "a", "L1", "b", "c"]);
    // 日時順でない既存列（例: ホタル）でも既存イベントの相対順は変えない。
    const unsorted = [{ date: "2026-08-18T06:20:00+09:00", id: "x" }, { date: "2026-08-25T12:35:00+09:00", id: "y" }, { date: "2026-08-25", id: "z" }];
    expect(ids(["2026-10-01T19:23:00+09:00"], unsorted)).toEqual(["L0", "x", "y", "z"]);
    expect(ids(["2026-08-20T00:00:00+09:00"], unsorted).filter((id) => id !== "L0")).toEqual(["x", "y", "z"]);
    expect(eventTime("2026-08-25")).toBe(eventTime("2026-08-25T00:00:00+09:00"));
  });

  it("移行後の更新履歴で、第23バッチ5名は追補イベントが先頭・更新日2026-10-01、ほかは記録の影響を受けない", () => {
    const history = guideUpdateHistory();
    for (const name of BATCH23_OWNERS) {
      const entry = history.characters.find((item) => item.game === "genshin" && item.name === name)!;
      expect(entry.updatedAt).toBe("2026-10-01");
      expect(entry.events[0]!.title).toBe("第23バッチ追補：新キャラ入りの推奨PTを登録");
      expect(entry.sourceLabel.endsWith(" / 推奨PTのみGame8の2026-09-29更新の個別編成ガイドで更新")).toBe(true);
    }
    const hotaru = history.characters.find((item) => item.game === "hsr" && item.name === "ホタル")!;
    expect(hotaru.events.some((event) => event.title.includes("追補"))).toBe(false);
    expect(Object.keys(CHARACTER_PARTIES).filter((key) => key.startsWith("genshin:")).sort()).toEqual(BATCH23_OWNERS.map((name) => `genshin:${name}`).sort());
  });
});
