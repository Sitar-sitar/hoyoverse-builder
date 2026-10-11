import { describe, expect, it } from "vitest";
import { adoptTeams } from "../../scripts/content/adoptTeams";
describe("restricted team authoring decoder", () => {
  it("decodes declared helper data without evaluating arbitrary JavaScript", () => {
    const source =
      'const name=()=>({name:_content.localized("character.hsr.1503.name"),role:_content.localized("character.hsr.1503.name")});function team(title){return {id:`team-${title.id}`,game:"hsr",origin:"パール",originOrder:1,shared:true,batch:24,title,members:[name()],synergy:[title],targetSummary:title,gameVersion:"4.6",dataAsOf:"2026-10-02",updatedAt:"2026-10-03",sourceLabel:title,sourceUrl:"https://example.test",communitySources:[]};}const BATCH24_TEAMS=[team(_content.localized("character.hsr.1503.name"))];';
    // Property access is not in the allowed decoder grammar.
    expect(() => adoptTeams(source, 24)).toThrow(
      "Unclassified team authoring expression"
    );
    const valid = source.replace("`team-${title.id}`", '"fixture-team"');
    const records = adoptTeams(valid, 24);
    expect(records[0]!.members[0]!.identityKey).toBe("hsr:1503");
    expect(records[0]!.synergy[0]!.blockId).toBe(
      "team.block.character.hsr.1503.name"
    );
    expect(adoptTeams(valid, 24)).toEqual(records);
    expect(() =>
      adoptTeams(valid.replace("members:[name()]", "members:[execute()]"), 24)
    ).toThrow("Unclassified team authoring expression");
  });
});
