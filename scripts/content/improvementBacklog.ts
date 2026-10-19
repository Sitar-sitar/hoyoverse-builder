import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { contentManifest, contentRepository } from "../../server/content/repository";
import { reportCoverage } from "../../server/content/coverage";
import { BacklogBaselineError, backlogMarkdown, buildBacklog, type BacklogInput } from "../../server/content/improvementBacklog";
import { externalNameReport } from "../../content/externalNames";
import { characterRecords } from "../../content/characters";
import { records as hsrGuides } from "../../content/guideDefinitions_hsr";
import { records as providerGuides } from "../../content/guideDefinitions_providers";
import { records as profileGuides } from "../../content/guideDefinitions_profiles";
import { records as batch17Guides } from "../../content/guideDefinitions_batch17";
import { records as batch23Guides } from "../../content/guideDefinitions_batch23";
import { unresolvedTeamMembers } from "../../content/teams";
import { unresolvedGenericTeamMembers } from "../../content/genericTeams";
import { unresolvedConstellationIdentities } from "../../content/constellations";
import { unresolvedGuideFields } from "../../content/guides";

/**
 * `pnpm content:backlog --format json|md [--baseline <JSONファイル>]`。読み取り専用で、結果は標準出力だけへ出す。
 * 設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.6
 */

// guideRecords（content/guides.ts）と同じ5ファイル。section を生成する authoring module を ownerModule とする。
export const GUIDE_MODULES = [
  ["content/guideDefinitions_hsr.ts", hsrGuides],
  ["content/guideDefinitions_providers.ts", providerGuides],
  ["content/guideDefinitions_profiles.ts", profileGuides],
  ["content/guideDefinitions_batch17.ts", batch17Guides],
  ["content/guideDefinitions_batch23.ts", batch23Guides],
] as const;

function git(args: string[]) {
  try {
    return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return null;
  }
}

export function collectBacklogInput(): BacklogInput {
  const index = contentRepository();
  const report = reportCoverage(index);
  if (report.structureIssues.length) throw new Error("Content structure issues");
  const head = git(["rev-parse", "HEAD"]);
  const status = head === null ? null : git(["status", "--porcelain"]);
  return {
    sourceRevision: head,
    sourceDirty: Boolean(status),
    contentRevision: contentManifest().contentRevision,
    notCollected: report.information.notCollected.flatMap(entry => entry.status === "notCollected"
      ? [{ id: entry.id, visibility: entry.visibility, reason: entry.reason, requiredKinds: entry.requiredKinds }]
      : []),
    externalBoundaries: externalNameReport().entries,
    characters: characterRecords.map(record => ({ identityKey: record.identityKey, game: record.game, ownerModule: `content/ja/characters/${record.game}.ts` })),
    guides: GUIDE_MODULES.flatMap(([ownerModule, records]) => records.map(record => ({
      guideId: record.guideId, game: record.game, identityKey: record.content.identityKey, ownerModule,
      recommendationIds: record.content.equipmentRecommendations.map(item => item.recommendationId),
    }))),
    translations: Object.fromEntries(Object.entries(report.languages).map(([language, value]) => [language, value.counts])),
    otherUnresolved: {
      unresolvedTeamMembers: unresolvedTeamMembers().length,
      unresolvedGenericTeamMembers: unresolvedGenericTeamMembers().length,
      unresolvedConstellationIdentities: unresolvedConstellationIdentities().length,
      unresolvedGuideFields: unresolvedGuideFields().length,
    },
  };
}

const USAGE = "Usage: content:backlog --format json|md [--baseline <file>]";

export function backlogMain(args: string[], write: (text: string) => void = text => process.stdout.write(text)): number {
  const options = args[0] === "--" ? args.slice(1) : args;
  let format: string | undefined;
  let baselinePath: string | undefined;
  for (let i = 0; i < options.length; i += 2) {
    const [name, value] = [options[i], options[i + 1]];
    if (name === "--format" && value && format === undefined) format = value;
    else if (name === "--baseline" && value && baselinePath === undefined) baselinePath = value;
    else { console.error(USAGE); return 1; }
  }
  if (format !== "json" && format !== "md") { console.error(USAGE); return 1; }
  let baseline: string | undefined;
  if (baselinePath !== undefined) {
    try {
      baseline = readFileSync(resolve(baselinePath), "utf8");
    } catch {
      console.error("baseline_unreadable");
      return 1;
    }
  }
  try {
    const backlog = buildBacklog(collectBacklogInput(), baseline);
    write(format === "json" ? `${JSON.stringify(backlog, null, 2)}\n` : backlogMarkdown(backlog));
    return 0;
  } catch (error) {
    console.error(error instanceof BacklogBaselineError ? error.code : "Backlog failed");
    return 1;
  }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  process.exitCode = backlogMain(process.argv.slice(2));
}
