import { describe, expect, it } from "vitest";
import {
  teamRecords,
  teamSections,
  validateTeamRecords,
  teamAuthoringRefs,
  unresolvedTeamMembers,
} from "../../content/teams";
import { projectTeams } from "./teams";
import { TEAM_STORE } from "../parties/teamStore";
import type { TeamAuthoring } from "../../shared/content/teamAuthoring";

describe("shared team authoring refs", () => {
  it("supplies one shared definition without exposing ref/identity metadata in the legacy model", () => {
    expect(teamRecords).toHaveLength(16);
    const projected = projectTeams(teamRecords);
    for (const team of projected) {
      expect(TEAM_STORE.byId.get(team.id)).toEqual(team);
      expect(
        team.members.every(
          member =>
            !("identityKey" in member) && !("identityResolution" in member)
        )
      ).toBe(true);
      expect(
        team.synergy.every(
          text =>
            typeof text.ja === "string" &&
            typeof text.en === "string" &&
            typeof text["zh-CN"] === "string"
        )
      ).toBe(true);
    }
    expect(teamSections()).toHaveLength(16);
    expect(unresolvedTeamMembers().length).toBeGreaterThan(0);
    expect(
      unresolvedTeamMembers().every(
        member =>
          member.identityKey.startsWith("legacy:") && member.reason.length > 0
      )
    ).toBe(true);
  });
  it("visits every paragraph and nested correction/source note", () => {
    const first = structuredClone(teamRecords[0]!);
    const second = { blockId: "second", text: first.targetSummary };
    first.synergy.push(second);
    const refs = teamAuthoringRefs(first);
    expect(
      refs.filter(ref => ref.id === second.text.id).length
    ).toBeGreaterThan(1);
    for (const member of first.members)
      for (const change of member.targetChanges ?? []) {
        expect(refs).toContainEqual(change.label);
        expect(refs).toContainEqual(change.reason);
      }
    for (const source of first.communitySources)
      expect(refs).toContainEqual(source.note);
    const projected = projectTeams([first])[0]!;
    expect(projected.synergy.at(-1)).toEqual(projected.targetSummary);
  });
  it("rejects unknown fields, collisions, refs and incorrect member identities", () => {
    const first = structuredClone(teamRecords[0]!);
    expect(() => validateTeamRecords([first, first])).toThrow(
      "identity/order/game"
    );
    expect(() =>
      validateTeamRecords([
        { ...first, untranslated: "new text" } as TeamAuthoring,
      ])
    ).toThrow("Unclassified");
    expect(() =>
      validateTeamRecords([
        {
          ...first,
          members: [
            {
              ...first.members[0]!,
              extra: "new",
            } as TeamAuthoring["members"][number],
          ],
        },
      ])
    ).toThrow("Unclassified");
    expect(() =>
      validateTeamRecords([
        { ...first, synergy: [first.synergy[0]!, first.synergy[0]!] },
      ])
    ).toThrow("paragraph IDs");
    expect(() =>
      validateTeamRecords([
        { ...first, title: { kind: "textRef", id: "team.unknown" } },
      ])
    ).toThrow("text reference");
    expect(() =>
      validateTeamRecords([
        {
          ...first,
          members: [
            {
              ...first.members[0]!,
              identityResolution: "confirmed",
              identityKey: "hsr:invalid",
            },
          ],
        },
      ])
    ).toThrow("name/ID mismatch");
    expect(() =>
      validateTeamRecords([
        {
          ...first,
          members: [
            {
              ...first.members[0]!,
              identityResolution: "legacy",
              identityKey: "legacy:hsr:unknown",
              identityReason: "",
            },
          ],
        },
      ])
    ).toThrow("legacy reason");
  });
});
