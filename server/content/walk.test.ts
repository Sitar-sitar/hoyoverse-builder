import { describe, expect, it } from "vitest";
import type { CharacterContent, TeamContent } from "../../shared/content/domains";
import { textRef } from "./catalog";
import { characterRefs, teamRefs, historyRefs, guideRefs, constellationRefs } from "./walk";

describe("exhaustive domain visitors", () => {
  const team: TeamContent = {
    teamId: "shared", game: "hsr", title: textRef("team.shared.title"),
    members: [{ identityKey: "hsr:1310", name: textRef("character.hsr.1310.name"), role: textRef("team.shared.role") }],
    synergy: [{ blockId: "first", text: textRef("team.shared.synergy.first") }, { blockId: "second", text: textRef("team.shared.synergy.second") }],
    targetSummary: textRef("team.shared.summary"), changes: [{ key: "speed", label: textRef("term.hsr.speed"), reason: textRef("team.shared.changeReason") }],
    sources: [{ sourceId: "primary", label: textRef("team.shared.source"), note: textRef("team.shared.sourceNote"), url: "https://example.invalid" }],
  };
  it("visits every paragraph, member and source note, regardless of the view", () => {
    const ids = teamRefs(team).map(ref => ref.id);
    expect(ids).toHaveLength(10);
    expect(ids).toContain("team.shared.synergy.second");
    expect(ids).toContain("team.shared.sourceNote");
    expect(teamRefs(team)).toEqual(teamRefs({ ...team }));
  });
  it("rejects an added unclassified display field, including nested fields", () => {
    expect(() => teamRefs({ ...team, untranslated: "追加情報" } as TeamContent)).toThrow("Unclassified");
    expect(() => teamRefs({ ...team, members: [{ ...team.members[0]!, untranslated: "追加情報" }] } as TeamContent)).toThrow("Unclassified");
    expect(() => teamRefs({ ...team, title: "日本語" } as unknown as TeamContent)).toThrow("TextRef");
  });
  it("visits skill names, descriptions, conditions and all notes without generating effects", () => {
    const input: CharacterContent = { identityKey: "hsr:1310", game: "hsr", name: textRef("character.hsr.1310.name"), elementKey: "fire", roleKey: "attack",
      introduction: { status: "notCollected", reason: "not researched", requiredKinds: ["introduction"] },
      skills: { status: "registered", evidence: "fixture only", data: [{ skillId: "skill1", kind: "skill", order: 1,
        name: textRef("skill.hsr.1310.skill1.name"), description: textRef("skill.hsr.1310.skill1.description"),
        effects: [{ effectId: "effect1", condition: textRef("skill.hsr.1310.skill1.condition"), values: { status: "notCollected", reason: "unknown", requiredKinds: ["levelValues"] } }],
        notes: { status: "registered", evidence: "fixture", data: [textRef("skill.hsr.1310.skill1.note1"), textRef("skill.hsr.1310.skill1.note2")] }, sourceUrls: [],
      }] },
    };
    expect(characterRefs(input).map(ref => ref.id)).toEqual(["character.hsr.1310.name", "skill.hsr.1310.skill1.name", "skill.hsr.1310.skill1.description", "skill.hsr.1310.skill1.condition", "skill.hsr.1310.skill1.note1", "skill.hsr.1310.skill1.note2"]);
    input.skills = { status: "registered", evidence: "fixture", data: [] };
    expect(() => characterRefs(input)).toThrow("Registered");
  });
  it("covers guide context, constellation cautions and every history change", () => {
    const common = textRef("ui.fixture.label");
    expect(guideRefs({ guideId: "g", identityKey: "hsr:1", headline: common, equipmentRecommendations: [], mainStatPreferences: [], targetDefinitions: [], targetContext: common, sourceLabels: [common] })).toHaveLength(3);
    expect(constellationRefs({ identityKey: "hsr:1", rankLabel: common, sourceLabel: common, effects: [{ level: 1, name: common, description: common, caution: common, changes: [{ key: "speed", label: common, reason: common }] }] })).toHaveLength(7);
    expect(historyRefs({ eventId: "event", date: "2026-10-10", title: common, summary: common, changes: [{ blockId: "a", text: common }, { blockId: "b", text: common }], rationale: common })).toHaveLength(5);
  });
});
