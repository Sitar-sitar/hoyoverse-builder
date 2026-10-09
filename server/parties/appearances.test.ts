import { describe, expect, it } from "vitest";
import { partyAppearancesFor } from "./appearances";
import { buildTeamStore, TEAM_STORE } from "./teamStore";
import { resolvePartySet } from "./resolve";
import { rosterKey } from "./linkStatus";
import {
  characterReferenceCatalog,
  characterReferenceFor,
} from "../characterReference";
import type { Team } from "./types";
import { appRouter } from "../routers";

const source = TEAM_STORE.byId.get("team-hsr-ホタル-b26-3")!;
const team = (id: string, extra: Partial<Team> = {}): Team => ({
  ...source,
  id,
  origin: "ホタル",
  originOrder: 1,
  ...extra,
});
const owner = "ルアン・メェイ";
const parties = {
  [`hsr:${owner}`]: {
    refs: [{ team: "missing" }],
    skipped: [
      {
        team: "a",
        reason: "skip",
        sourceUrl: "https://example.com",
        checkedAt: "2026-10-08",
      },
    ],
  },
};

describe("catalog-only appearances", () => {
  it("public reference router includes the field and rejects unknown names", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {},
      res: {},
    } as never);
    expect(
      (
        await caller.build.reference({ game: "hsr", name: owner })
      ).partyAppearances.map(card => card.teamId)
    ).toEqual(["team-hsr-ホタル-b26-3"]);
    await expect(
      caller.build.reference({ game: "hsr", name: "unknown" })
    ).rejects.toMatchObject({ code: "NOT_FOUND" });
  });
  it("known current candidates are 16 characters and 24 cards; all 256 have arrays", () => {
    const references = Object.values(characterReferenceCatalog().games)
      .flat()
      .map(({ game, name }) => characterReferenceFor(game, name)!);
    expect(references).toHaveLength(256);
    expect(references.filter(ref => ref.partyAppearances.length)).toHaveLength(
      16
    );
    expect(
      references.reduce((sum, ref) => sum + ref.partyAppearances.length, 0)
    ).toBe(24);
    expect(partyAppearancesFor("hsr", "ホタル")).toEqual([]);
    expect(characterReferenceFor("hsr", "unknown")).toBeNull();
  });
  it("rejects unknown owners, other games and non-shared teams", () => {
    const store = buildTeamStore([
      team("legacy", { shared: false }),
      team("other", { game: "zzz" }),
    ]);
    expect(partyAppearancesFor("hsr", owner, store, parties)).toEqual([]);
    expect(partyAppearancesFor("hsr", "unknown", store)).toEqual([]);
  });
  it("skips displayed rosters even with a different team ID", () => {
    const store = buildTeamStore([team("a"), team("b")]);
    expect(
      partyAppearancesFor("hsr", owner, store, {
        [`hsr:${owner}`]: { refs: [{ team: "b" }] },
      })
    ).toEqual([]);
  });
  it("excludes final generic fallback rosters, not just raw refs", () => {
    const generic = resolvePartySet("hsr", owner, buildTeamStore([]), parties)
      .options[0]!;
    const store = buildTeamStore([team("a", { members: generic.members })]);
    expect(partyAppearancesFor("hsr", owner, store, parties)).toEqual([]);
  });
  it("skip records do not hide cards; self origin moves owner first and clears targets", () => {
    const members = [
      ...source.members.filter(member => member.name.ja !== owner),
      source.members.find(member => member.name.ja === owner)!,
    ];
    const input = team("a", { origin: owner, members });
    const original = JSON.stringify(input);
    Object.freeze(input);
    Object.freeze(input.members);
    const cards = partyAppearancesFor(
      "hsr",
      owner,
      buildTeamStore([input]),
      parties
    );
    expect(cards).toHaveLength(1);
    expect(cards[0]).not.toHaveProperty("rank");
    expect(cards[0]!.id).toBe(`a@${owner}`);
    expect(cards[0]!.members[0]!.name.ja).toBe(owner);
    expect(cards[0]!.targetChanges).toEqual([]);
    expect(JSON.stringify(input)).toBe(original);
  });
  it("sorts by dates then ordinal ID, deduplicates before limiting to six", () => {
    const unique = (
      id: string,
      updatedAt = "2026-10-08",
      dataAsOf = "2026-10-07"
    ) =>
      team(id, {
        updatedAt,
        dataAsOf,
        members: [
          ...source.members.slice(0, 3),
          {
            name: { ja: id, en: id, "zh-CN": id },
            role: source.members[3]!.role,
          },
        ],
      });
    const input = [
      unique("z", "2026-10-09"),
      unique("A"),
      unique("a"),
      unique("b"),
      unique("c"),
      unique("d"),
      unique("e"),
      unique("f"),
      unique("old", "2026-10-06"),
      team("duplicate", { ...unique("a"), id: "duplicate" }),
    ];
    const result = partyAppearancesFor(
      "hsr",
      owner,
      buildTeamStore(input),
      parties
    );
    expect(result.map(card => card.teamId)).toEqual([
      "z",
      "A",
      "a",
      "b",
      "c",
      "d",
    ]);
    expect(
      new Set(result.map(card => rosterKey("hsr", card.members))).size
    ).toBe(6);
    expect(
      partyAppearancesFor("hsr", owner, buildTeamStore([]), parties)
    ).toEqual([]);
  });
});
