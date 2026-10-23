import { teams as batch25 } from "./teamBatch25";
import { teams as batch24 } from "./teamBatch24";
import { teams as batch26 } from "./teamBatch26";
import { teams as batch27 } from "./teamBatch27";
import { teams as batch23 } from "./teamBatch23";
import { teams as batch28 } from "./teamBatch28";
import { teams as legacy } from "./teamLegacy";
import { canonicalSources } from "./catalog";
import type {
  TeamAuthoring,
  BoundTextRef,
} from "../shared/content/teamAuthoring";
import { formatContentText } from "../shared/content/format";
import type { CoverageSection, TextRef } from "../shared/content/types";
import { contentFields, requiredContentRef } from "../shared/content/walk";
export const teamRecords: TeamAuthoring[] = [
  ...batch24,
  ...batch25,
  ...batch26,
  ...batch27,
  ...batch23,
  ...batch28,
  ...legacy,
];
const ignore = (_value: unknown): TextRef[] => [];
const textSources = new Map(
  canonicalSources.map(source => [source.id, source])
);
function ref(value: BoundTextRef): TextRef[] {
  requiredContentRef(value);
  contentFields(value, { kind: ignore, id: ignore, variables: ignore });
  const source = textSources.get(value.id);
  if (!source) throw new Error("Unknown team text reference");
  formatContentText(
    value.id,
    source.ja,
    source.placeholders,
    value.variables ?? {}
  );
  return [{ kind: "textRef", id: value.id }];
}

export function teamAuthoringRefs(team: TeamAuthoring): TextRef[] {
  const changes = (
    values: NonNullable<TeamAuthoring["members"][number]["targetChanges"]>
  ) =>
    values.flatMap(value =>
      contentFields(value, {
        key: ignore,
        label: ref,
        unit: ignore,
        targets: value =>
          contentFields(value, { 厳選: ignore, 目標: ignore, 妥協: ignore }),
        reason: ref,
      })
    );
  return contentFields(team, {
    id: ignore,
    game: ignore,
    origin: ignore,
    originOrder: ignore,
    shared: ignore,
    batch: ignore,
    sourceBatch: ignore,
    title: ref,
    members: values =>
      values.flatMap(value =>
        contentFields(value, {
          name: ref,
          role: ref,
          identityKey: ignore,
          identityResolution: ignore,
          identityReason: ignore,
          targetChanges: values => (values ? changes(values) : []),
        })
      ),
    synergy: values =>
      values.flatMap(block =>
        contentFields(block, { blockId: ignore, text: ref })
      ),
    targetSummary: ref,
    gameVersion: ignore,
    dataAsOf: ignore,
    updatedAt: ignore,
    sourceLabel: ref,
    sourceUrl: ignore,
    communitySources: values =>
      values.flatMap(value =>
        contentFields(value, {
          label: ref,
          url: ignore,
          checkedAt: ignore,
          note: ref,
          status: ignore,
        })
      ),
  });
}
export function validateTeamRecords(teams: TeamAuthoring[]) {
  const ids = new Set<string>();
  const sourceMap = new Map(
    canonicalSources.map(source => [source.id, source])
  );
  for (const team of teams) {
    if (
      !team.id.trim() ||
      ids.has(team.id) ||
      !Number.isInteger(team.originOrder) ||
      team.originOrder <= 0 ||
      !["hsr", "genshin", "zzz"].includes(team.game)
    )
      throw new Error("Invalid team identity/order/game");
    if (!team.members.length || !team.synergy.length)
      throw new Error("Empty registered team content");
    if (
      new Set(team.synergy.map(block => block.blockId)).size !==
        team.synergy.length ||
      team.synergy.some(block => !block.blockId.trim())
    )
      throw new Error("Invalid team paragraph IDs");
    if (
      typeof team.shared !== "boolean" ||
      !team.origin.trim() ||
      !team.gameVersion.trim() ||
      [team.dataAsOf, team.updatedAt].some(
        date => !Number.isFinite(Date.parse(date))
      ) ||
      (team.batch !== null &&
        (!Number.isInteger(team.batch) || team.batch <= 0)) ||
      (team.sourceBatch !== undefined &&
        (!Number.isInteger(team.sourceBatch) || team.sourceBatch <= 0))
    )
      throw new Error("Invalid team metadata");
    for (const member of team.members) {
      if (member.identityResolution === "confirmed") {
        if (
          !member.identityKey.startsWith(`${team.game}:`) ||
          member.identityReason !== undefined
        )
          throw new Error("Invalid confirmed team member identity");
        const id = `character.${team.game}.${member.identityKey.slice(team.game.length + 1)}.name`;
        if (
          sourceMap.get(id as TextRef["id"])?.ja !==
          sourceMap.get(member.name.id)?.ja
        )
          throw new Error("Confirmed member name/ID mismatch");
      } else if (
        member.identityResolution !== "legacy" ||
        !member.identityKey.startsWith(`legacy:${team.game}:`) ||
        !member.identityReason?.trim()
      )
        throw new Error("Unresolved member needs explicit legacy reason");
      for (const change of member.targetChanges ?? [])
        if (
          JSON.stringify(Object.keys(change.targets).sort()) !==
            JSON.stringify(["厳選", "目標", "妥協"].sort()) ||
          Object.values(change.targets).some(
            number => typeof number !== "number" || !Number.isFinite(number)
          )
        )
          throw new Error("Invalid team target values");
    }
    if (teamAuthoringRefs(team).some(value => !sourceMap.has(value.id)))
      throw new Error("Unknown team text reference");
    ids.add(team.id);
  }
}
export function teamSections(): CoverageSection[] {
  validateTeamRecords(teamRecords);
  return teamRecords.map(team => ({
    id: `team.${team.id}`,
    audience: "public",
    visibility: "active",
    section: {
      status: "registered",
      evidence: "shared team authoring authority",
      data: teamAuthoringRefs(team),
    },
  }));
}
export function unresolvedTeamMembers() {
  validateTeamRecords(teamRecords);
  return teamRecords
    .flatMap(team =>
      team.members
        .filter(member => member.identityResolution === "legacy")
        .map(member => ({
          teamId: team.id,
          identityKey: member.identityKey,
          nameRef: member.name,
          reason: member.identityReason!,
        }))
    )
    .sort((a, b) =>
      a.teamId < b.teamId
        ? -1
        : a.teamId > b.teamId
          ? 1
          : a.identityKey < b.identityKey
            ? -1
            : a.identityKey > b.identityKey
              ? 1
              : 0
    );
}
