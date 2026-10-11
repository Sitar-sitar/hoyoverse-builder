import {sources as partySources} from "../../content/ja/guides/parties_legacyCatalog_templates";
import {records as partyEn} from "../../content/translations/en/parties_legacyCatalog_templates";
import {records as partyZh} from "../../content/translations/zh-CN/parties_legacyCatalog_templates";
import { createLegacyTexts as createHelperTexts } from "../content/legacyTexts";
import { sources as helperSources } from "../../content/ja/guides/parties_legacyCatalog_helpers";
import { records as helperEn } from "../../content/translations/en/parties_legacyCatalog_helpers";
import { records as helperZh } from "../../content/translations/zh-CN/parties_legacyCatalog_helpers";
const _helperContent = createHelperTexts(helperSources, helperEn, helperZh);
import { createLegacyTexts } from "../content/legacyTexts";
import {sources as memberRoleSources} from "../../content/ja/guides/parties_memberRoles";
import {records as memberRoleEn} from "../../content/translations/en/parties_memberRoles";
import {records as memberRoleZh} from "../../content/translations/zh-CN/parties_memberRoles";
const _memberRoles=createLegacyTexts(memberRoleSources,memberRoleEn,memberRoleZh);
import { sources as _sources } from "../../content/ja/guides/parties_legacyCatalog";
import { records as _en } from "../../content/translations/en/parties_legacyCatalog";
import { records as _zh } from "../../content/translations/zh-CN/parties_legacyCatalog";
const _content = createLegacyTexts(_sources, _en, _zh);
const _partyHelper=createLegacyTexts(partySources,partyEn,partyZh);
/**
 * 推奨PTの旧形式データ（第1〜22バッチ。旧 server/partyRecommendations.ts から移設）。
 * 新しい編成は sharedTeams.ts に書き、ここへは追加しない（partyLinks.test.ts の件数上限 LEGACY_TEAM_LIMIT で検査）。
 * 起動時に teamStore.ts が1案＝1編成の旧形式編成（shared: false）へ変換する。
 * 設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md §4.3
 */
import { HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS } from "../characterGuideCatalog";
import { genshinProfileIdFor, hsrProfileIdFor, zzzProfileIdFor } from "../individualGuides";
import { batch17PartyFor } from "../batch17Parties";
import { t, member } from "./text";
import type { PartyCommunitySource, PartyGameId, LocalizedText, PartyMember, PartyRecommendation, PartyRecommendationSet, PartyTargetChange } from "./types";
import type { StatKey } from "../buildAdvisor";

const change = (key: StatKey, ja: string, en: string, zh: string, unit: "%" | "", strict: number, goal: number, base: number, reasonJa: string, reasonEn: string, reasonZh: string): PartyTargetChange => ({
  key, label: t(ja, en, zh), unit, targets: { "厳選": strict, "目標": goal, "妥協": base }, reason: t(reasonJa, reasonEn, reasonZh),
});

const GAME_PARTY_DATASET: Record<PartyGameId, Omit<PartyRecommendationSet, "options">> = {
  hsr: { gameVersion: "4.4", dataAsOf: "2026-08-25", updatedAt: "2026-08-25" },
  genshin: { gameVersion: "7.0", dataAsOf: "2026-08-25", updatedAt: "2026-08-25" },
  zzz: { gameVersion: "3.1", dataAsOf: "2026-08-25", updatedAt: "2026-08-25" },
};

const sourceFor = (game: PartyGameId) => game === "hsr"
  ? { label: _content.localized("guide.legacy.parties_legacyCatalog.b00001"), url: "https://game8.co/games/Honkai-Star-Rail/archives/409824" }
  : game === "genshin"
    ? { label: _content.localized("guide.legacy.parties_legacyCatalog.b00002"), url: "https://game8.co/games/Genshin-Impact/archives/301819" }
    : { label: _content.localized("guide.legacy.parties_legacyCatalog.b00003"), url: "https://game8.co/games/Zenless-Zone-Zero/archives/458656" };

const communitySourcesFor = (game: PartyGameId): PartyCommunitySource[] => game === "hsr"
  ? [{ label: _content.localized("guide.legacy.parties_legacyCatalog.b00004"), url: "https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/", checkedAt: "2026-08-25", note: _content.localized("guide.legacy.parties_legacyCatalog.b00005"), status: "crossChecked" }]
  : game === "genshin"
    ? [{ label: _content.localized("guide.legacy.parties_legacyCatalog.b00006"), url: "https://x.com/G8_Genshin", checkedAt: "2026-08-25", note: _content.localized("guide.legacy.parties_legacyCatalog.b00007"), status: "crossChecked" }]
    : [{ label: _content.localized("guide.legacy.parties_legacyCatalog.b00008"), url: "https://x.com/Zenless_Game8", checkedAt: "2026-08-25", note: _content.localized("guide.legacy.parties_legacyCatalog.b00009"), status: "crossChecked" }];

function option(game: PartyGameId, input: Omit<PartyRecommendation, "gameVersion" | "dataAsOf" | "updatedAt" | "sourceLabel" | "sourceUrl" | "communitySources">): PartyRecommendation {
  const dataset = GAME_PARTY_DATASET[game];
  const source = sourceFor(game);
  return { ...input, ...dataset, sourceLabel: source.label, sourceUrl: source.url, communitySources: communitySourcesFor(game) };
}

const PARTY_CATALOG: Record<string, PartyRecommendation[]> = {
  "hsr:ホタル": [
    option("hsr", { id: "firefly-superbreak", rank: 1, title: _content.localized("guide.legacy.parties_legacyCatalog.b00010"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00011"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00012")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00013"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00014")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00015"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00016")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00017"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00018"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00019")], targetChanges: [change("speed", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00001"), "", 154, 150, 145, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00002"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00020") }),
    option("hsr", { id: "firefly-fugue", rank: 2, title: _content.localized("guide.legacy.parties_legacyCatalog.b00021"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00022"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00023")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00024"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00025")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00026"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00027")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00028"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00029"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00030")], targetChanges: [change("speed", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00003"), "", 160, 154, 150, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00004"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00031") }),
    option("hsr", { id: "firefly-accessible", rank: 3, title: _content.localized("guide.legacy.parties_legacyCatalog.b00032"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00033"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00034")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00035"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00036")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00037"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00038")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00039"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00040"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00041")], targetChanges: [change("speed", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00005"), "", 160, 154, 150, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00006"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00042") }),
  ],
  "hsr:飛霄": [
    option("hsr", { id: "feixiao-fua", rank: 1, title: _content.localized("guide.legacy.parties_legacyCatalog.b00043"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00044"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00045")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00046"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00047")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00048"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00049")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00050"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00051"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00052")], targetChanges: [], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00053") }),
    option("hsr", { id: "feixiao-hunt", rank: 2, title: _content.localized("guide.legacy.parties_legacyCatalog.b00054"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00055"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00056")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00057"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00058")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00059"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00060")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00061"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00062"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00063")], targetChanges: [change("speed", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00007"), "", 143, 134, 120, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00008"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00064") }),
    option("hsr", { id: "feixiao-alternative", rank: 3, title: _content.localized("guide.legacy.parties_legacyCatalog.b00065"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00066"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00067")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00068"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00069")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00070"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00071")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00072"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00073"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00074")], targetChanges: [], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00075") }),
  ],
  "genshin:神里綾華": [
    option("genshin", { id: "ayaka-freeze", rank: 1, title: _content.localized("guide.legacy.parties_legacyCatalog.b00076"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00077"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00078")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00079"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00080")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00081"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00082")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00083"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00084"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00085")], targetChanges: [change("critRate", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00009"), "%", 55, 45, 35, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00010"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00086") }),
    option("genshin", { id: "ayaka-mono-cryo", rank: 2, title: _content.localized("guide.legacy.parties_legacyCatalog.b00087"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00088"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00089")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00090"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00091")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00092"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00093")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00094"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00095"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00096")], targetChanges: [change("critRate", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00011"), "%", 55, 45, 35, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00012"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00097") }),
    option("genshin", { id: "ayaka-non-resonance", rank: 3, title: _content.localized("guide.legacy.parties_legacyCatalog.b00098"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00099"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00100")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00101"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00102")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00103"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00104")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00105"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00106"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00107")], targetChanges: [change("critRate", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00013"), "%", 70, 60, 50, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00014"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00108") }),
  ],
  "genshin:アルレッキーノ": [
    option("genshin", { id: "arlecchino-vaporize", rank: 1, title: _content.localized("guide.legacy.parties_legacyCatalog.b00109"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00110"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00111")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00112"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00113")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00114"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00115")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00116"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00117"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00118")], targetChanges: [change("elementalMastery", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00015"), "", 220, 160, 100, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00016"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00119") }),
    option("genshin", { id: "arlecchino-overload", rank: 2, title: _content.localized("guide.legacy.parties_legacyCatalog.b00120"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00121"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00122")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00123"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00124")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00125"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00126")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00127"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00128"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00129")], targetChanges: [], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00130") }),
    option("genshin", { id: "arlecchino-melt", rank: 3, title: _content.localized("guide.legacy.parties_legacyCatalog.b00131"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00132"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00133")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00134"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00135")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00136"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00137")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00138"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00139"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00140")], targetChanges: [change("elementalMastery", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00017"), "", 220, 160, 100, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00018"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00141") }),
  ],
  "zzz:エレン": [
    option("zzz", { id: "ellen-ice-core", rank: 1, title: _content.localized("guide.legacy.parties_legacyCatalog.b00142"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00143"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00144")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00145"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00146")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00147"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00148"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00149")], targetChanges: [], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00150") }),
    option("zzz", { id: "ellen-premium", rank: 2, title: _content.localized("guide.legacy.parties_legacyCatalog.b00151"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00152"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00153")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00154"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00155")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00156"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00157"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00158")], targetChanges: [], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00159") }),
    option("zzz", { id: "ellen-accessible", rank: 3, title: _content.localized("guide.legacy.parties_legacyCatalog.b00160"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00161"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00162")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00163"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00164")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00165"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00166"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00167")], targetChanges: [], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00168") }),
  ],
  "zzz:星見雅": [
    option("zzz", { id: "miyabi-disorder", rank: 1, title: _content.localized("guide.legacy.parties_legacyCatalog.b00169"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00170"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00171")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00172"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00173")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00174"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00175"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00176")], targetChanges: [change("critRate", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00019"), "%", 80, 80, 70, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00020"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00177") }),
    option("zzz", { id: "miyabi-f2p", rank: 2, title: _content.localized("guide.legacy.parties_legacyCatalog.b00178"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00179"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00180")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00181"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00182")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00183"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00184"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00185")], targetChanges: [change("critRate", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00021"), "%", 80, 80, 70, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00022"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00186") }),
    option("zzz", { id: "miyabi-generalist", rank: 3, title: _content.localized("guide.legacy.parties_legacyCatalog.b00187"), members: [member(..._content.triple("guide.legacy.parties_legacyCatalog.b00188"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00189")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00190"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00191")), member(..._content.triple("guide.legacy.parties_legacyCatalog.b00192"), ..._content.triple("guide.legacy.parties_legacyCatalog.b00193"))], synergy: [_content.localized("guide.legacy.parties_legacyCatalog.b00194")], targetChanges: [change("critRate", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00023"), "%", 80, 80, 70, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00024"))], targetSummary: _content.localized("guide.legacy.parties_legacyCatalog.b00195") }),
  ],
};

type ManualPlan = { members: string[]; synergy: LocalizedText; targetChanges?: PartyTargetChange[] };

const manualMember = (name: string, index: number, selectedRole: LocalizedText): PartyMember => index === 0
  ? { name: t(name, name, name), role: selectedRole }
  : { name:t(name,name,name),role:_memberRoles.localized(index===1?"team.legacy.memberRole.damage":index===2?"team.legacy.memberRole.support":"team.legacy.memberRole.sustain") };

function manualOptions(game: PartyGameId, name: string, sourceUrl: string, selectedRole: LocalizedText, plans: readonly ManualPlan[]): PartyRecommendation[] {
  const planTitles = [_content.localized("guide.legacy.parties_legacyCatalog.b00196"), _content.localized("guide.legacy.parties_legacyCatalog.b00197"), _content.localized("guide.legacy.parties_legacyCatalog.b00198")];
  const profile = genericProfileFor(game, name);
  return plans.map((plan, index) => {
    const rank = (index + 1) as 1 | 2 | 3;
    const recommendation = option(game, {
      id: `curated-${game}-${name}-${rank}`,
      rank,
      title: planTitles[index],
      members: plan.members.map((partyMember, memberIndex) => manualMember(partyMember, memberIndex, selectedRole)),
      synergy: [plan.synergy],
      targetChanges: plan.targetChanges ?? [],
      targetSummary: _partyHelper.localized("guide.legacy.parties_legacyCatalog_templates.b00001",{v0:name}),
    });
    return { ...recommendation, sourceLabel: _content.localized("guide.legacy.parties_legacyCatalog.b00199"), sourceUrl };
  });
}

const plan = (members: string[], ja: string, en: string, zh: string, targetChanges?: PartyTargetChange[]): ManualPlan => ({ members, synergy: t(ja, en, zh), targetChanges });
const mainDps = _content.localized("guide.legacy.parties_legacyCatalog.b00200");
const support = _content.localized("guide.legacy.parties_legacyCatalog.b00201");
const anomaly = _content.localized("guide.legacy.parties_legacyCatalog.b00202");
/** バッチ日付を付与する登録ヘルパー。resetTargetChanges=true のバッチは公開値への補正を持たない。 */
const datedOptions = (date: string, resetTargetChanges: boolean) =>
  (game: PartyGameId, name: string, sourceUrl: string, selectedRole: LocalizedText, plans: readonly ManualPlan[]) =>
    manualOptions(game, name, sourceUrl, selectedRole, plans).map((entry) => ({
      ...entry,
      dataAsOf: date,
      updatedAt: date,
      ...(resetTargetChanges ? { targetChanges: [] } : {}),
      communitySources: entry.communitySources.map((source) => ({ ...source, checkedAt: date })),
    }));
const batch3Options = datedOptions("2026-08-26", false);
const batch4Options = datedOptions("2026-08-26", false);
const batch5Options = datedOptions("2026-08-26", false);
const batch6Options = datedOptions("2026-08-26", false);
const batch7Options = datedOptions("2026-08-26", false);
const batch8Options = datedOptions("2026-08-26", false);
const batch9Options = datedOptions("2026-08-26", false);
const batch10Options = datedOptions("2026-08-26", false);
const batch11Options = datedOptions("2026-08-27", false);
const batch12Options = datedOptions("2026-08-27", true);
const batch13Options = datedOptions("2026-08-27", true);
const batch14Options = datedOptions("2026-08-27", true);
const batch16Options = datedOptions("2026-09-07", true);
const batch18Options = datedOptions("2026-09-11", true);
const batch19Options = datedOptions("2026-09-13", true);
const batch20Options = datedOptions("2026-09-24", true);
/**
 * 第21バッチ（Ver.4.6）用。共通データセットの Ver.4.4 表記・4.4編成議論の出典を持ち込まず、
 * 実際に照合した Game8・GameWith を補助根拠にし、役割は位置ではなく明示する。
 */
const batch21Options = (game: PartyGameId, name: string, sourceUrl: string, selectedRole: LocalizedText, plans: readonly ManualPlan[], roles: readonly LocalizedText[][]) =>
  datedOptions("2026-09-28", true)(game, name, sourceUrl, selectedRole, plans).map((entry, index) => ({
    ...entry,
    gameVersion: "4.6",
    members: entry.members.map((partyMember, memberIndex) => ({ ...partyMember, role: roles[index]![memberIndex] ?? partyMember.role })),
    communitySources: [
      { label: _content.localized("guide.legacy.parties_legacyCatalog.b00203"), url: "https://game8.jp/houkaistarrail/759885", checkedAt: "2026-09-28", note: _content.localized("guide.legacy.parties_legacyCatalog.b00204"), status: "crossChecked" as const },
      { label: _content.localized("guide.legacy.parties_legacyCatalog.b00205"), url: sourceUrl, checkedAt: "2026-09-28", note: _content.localized("guide.legacy.parties_legacyCatalog.b00206"), status: "crossChecked" as const },
    ],
  }));

/**
 * 公開使用率・現行エンドコンテンツ・更新日付きチームガイドを照合した上位20の手動精査データ。
 * 既存の PARTY_CATALOG は代表6名を保持し、この表が同名キーを優先して上書きする。
 */
const MANUALLY_CURATED_HIGH_USAGE_CATALOG: Record<string, PartyRecommendation[]> = {
  "hsr:アグライア": manualOptions("hsr", "アグライア", "https://game8.co/games/Honkai-Star-Rail/archives/409824", mainDps, [
    plan(["アグライア", "サンデー", "ロビン", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00025")),
    plan(["アグライア", "サンデー", "トリビー", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00026")),
    plan(["アグライア", "開拓者（記憶）", "ロビン", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00027")),
  ]),
  "hsr:アナイクス": manualOptions("hsr", "アナイクス", "https://game8.co/games/Honkai-Star-Rail/archives/409824", mainDps, [
    plan(["アナイクス", "ロビン", "サンデー", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00028")),
    plan(["アナイクス", "トリビー", "ルアン・メェイ", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00029")),
    plan(["アナイクス", "ペラ", "アスター", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00030")),
  ]),
  "hsr:キャストリス": manualOptions("hsr", "キャストリス", "https://game8.co/games/Honkai-Star-Rail/archives/486305", mainDps, [
    plan(["キャストリス", "長夜月", "キュレネ", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00031")),
    plan(["キャストリス", "開拓者（記憶）", "トリビー", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00032")),
    plan(["キャストリス", "開拓者（記憶）", "ペラ", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00033")),
  ]),
  "hsr:ホタル": PARTY_CATALOG["hsr:ホタル"],
  "hsr:ロビン": manualOptions("hsr", "ロビン", "https://game8.jp/houkaistarrail/598842", support, [
    plan(["ロビン", "飛霄", "トパーズ&カブ", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00034")),
    plan(["ロビン", "アグライア", "サンデー", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00035")),
    plan(["ロビン", "雪衣", "モゼ", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00036")),
  ]),
  "hsr:ルアン・メェイ": manualOptions("hsr", "ルアン・メェイ", "https://game8.jp/houkaistarrail/573084", support, [
    plan(["ルアン・メェイ", "ホタル", "帰忘の流離人", "ダリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00037")),
    plan(["ルアン・メェイ", "乱破", "帰忘の流離人", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00038")),
    plan(["ルアン・メェイ", "カフカ", "セイレンス", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00039")),
  ]),
  "hsr:飛霄": manualOptions("hsr", "飛霄", "https://game8.jp/houkaistarrail/625602", mainDps, [
    plan(["飛霄", "サフェル", "サンデー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00040")),
    plan(["飛霄", "サフェル", "トリビー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00041")),
    plan(["飛霄", "三月なのか（巡狩）", "開拓者（記憶）", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00042")),
  ]),

  "genshin:フリーナ": manualOptions("genshin", "フリーナ", "https://game8.co/games/Genshin-Impact/archives/301819", support, [
    plan(["フリーナ", "ヌヴィレット", "楓原万葉", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00043")),
    plan(["フリーナ", "アルレッキーノ", "シロネン", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00044")),
    plan(["フリーナ", "胡桃", "閑雲", "夜蘭"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00045")),
  ]),
  "genshin:シロネン": manualOptions("genshin", "シロネン", "https://game8.co/games/Genshin-Impact/archives/301819", support, [
    plan(["シロネン", "ヌヴィレット", "フリーナ", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00046")),
    plan(["シロネン", "アルレッキーノ", "夜蘭", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00047")),
    plan(["シロネン", "ナヴィア", "フリーナ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00048")),
  ]),
  "genshin:楓原万葉": manualOptions("genshin", "楓原万葉", "https://game8.co/games/Genshin-Impact/archives/332826", support, [
    plan(["楓原万葉", "ヌヴィレット", "フリーナ", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00049")),
    plan(["楓原万葉", "アルレッキーノ", "シトラリ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00050")),
    plan(["楓原万葉", "マーヴィカ", "シロネン", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00051")),
  ]),
  "genshin:ベネット": manualOptions("genshin", "ベネット", "https://game8.co/games/Genshin-Impact/archives/301819", support, [
    plan(["ベネット", "アルレッキーノ", "夜蘭", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00052")),
    plan(["ベネット", "マーヴィカ", "楓原万葉", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00053")),
    plan(["ベネット", "ナヴィア", "フリーナ", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00054")),
  ]),
  "genshin:アルレッキーノ": manualOptions("genshin", "アルレッキーノ", "https://game8.jp/genshin/605945", mainDps, [
    plan(["アルレッキーノ", "ベネット", "シロネン", "シトラリ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00055"), [change("elementalMastery", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00056"), "", 220, 160, 100, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00057"))]),
    plan(["アルレッキーノ", "ベネット", "夜蘭", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00058"), [change("elementalMastery", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00059"), "", 220, 160, 100, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00060"))]),
    plan(["アルレッキーノ", "シュヴルーズ", "フィッシュル", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00061")),
  ]),
  "genshin:ヌヴィレット": manualOptions("genshin", "ヌヴィレット", "https://game8.jp/genshin/353144", mainDps, [
    plan(["ヌヴィレット", "コロンビーナ", "イネファ", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00062")),
    plan(["ヌヴィレット", "フリーナ", "シロネン", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00063")),
    plan(["ヌヴィレット", "マーヴィカ", "シロネン", "シトラリ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00064")),
  ]),
  "genshin:夜蘭": manualOptions("genshin", "夜蘭", "https://game8.jp/genshin/558856", support, [
    plan(["夜蘭", "胡桃", "行秋", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00065")),
    plan(["珊瑚宮心海", "夜蘭", "フリーナ", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00066")),
    plan(["夜蘭", "ナヒーダ", "ニィロウ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00067")),
  ]),

  "zzz:星見雅": PARTY_CATALOG["zzz:星見雅"],
  "zzz:浮波柚葉": manualOptions("zzz", "浮波柚葉", "https://game8.co/games/Zenless-Zone-Zero/archives/458656", support, [
    plan(["浮波柚葉", "星見雅", "月城柳"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00068")),
    plan(["浮波柚葉", "星見雅", "蒼角"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00069")),
    plan(["浮波柚葉", "アリス", "ビビアン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00070")),
  ]),
  "zzz:月城柳": manualOptions("zzz", "月城柳", "https://game8.co/games/Zenless-Zone-Zero/archives/474448", anomaly, [
    plan(["月城柳", "星見雅", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00071")),
    plan(["月城柳", "ビビアン", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00072")),
    plan(["月城柳", "セス", "リナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00073")),
  ]),
  "zzz:アストラ": manualOptions("zzz", "アストラ", "https://game8.co/games/Zenless-Zone-Zero/archives/490842", support, [
    plan(["アストラ", "イヴリン", "ライト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00074")),
    plan(["アストラ", "星見雅", "月城柳"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00075")),
    plan(["アストラ", "0号・アンビー", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00076")),
  ]),
  "zzz:ライト": manualOptions("zzz", "ライト", "https://game8.co/games/Zenless-Zone-Zero/archives/474509", _content.localized("guide.legacy.parties_legacyCatalog.b00207"), [
    plan(["ライト", "イヴリン", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00077")),
    plan(["ライト", "エレン", "蒼角"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00078")),
    plan(["ライト", "星見雅", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00079")),
  ]),
  "zzz:レミエール": manualOptions("zzz", "レミエール", "https://game8.co/games/Zenless-Zone-Zero/archives/588854", anomaly, [
    plan(["レミエール", "ヴェリナ", "プロメイア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00080")),
    plan(["レミエール", "ヴェリナ", "ジェーン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00081")),
    plan(["レミエール", "パイパー", "グレース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00082")),
  ]),

  "hsr:サンデー": batch3Options("hsr", "サンデー", "https://game8.co/games/Honkai-Star-Rail/archives/437272", support, [
    plan(["サンデー", "アグライア", "ロビン", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00083")),
    plan(["サンデー", "丹恒・飲月", "花火", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00084")),
    plan(["サンデー", "姫子", "ジェイド", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00085")),
  ]),
  "hsr:ブートヒル": batch3Options("hsr", "ブートヒル", "https://game8.co/games/Honkai-Star-Rail/archives/Boothill-Best-Builds", mainDps, [
    plan(["ブートヒル", "サンデー", "ルアン・メェイ", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00086")),
    plan(["ブートヒル", "帰忘の流離人", "ダリア", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00087")),
    plan(["ブートヒル", "開拓者（調和）", "アスター", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00088")),
  ]),
  "hsr:黄泉": batch3Options("hsr", "黄泉", "https://game8.co/games/Honkai-Star-Rail/archives/436053", mainDps, [
    plan(["黄泉", "椒丘", "ペラ", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00089")),
    plan(["黄泉", "千冶・刃", "サフェル", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00090")),
    plan(["黄泉", "椒丘", "花火", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00091")),
  ]),
  "hsr:霊砂": batch3Options("hsr", "霊砂", "https://game8.co/games/Honkai-Star-Rail/archives/462279", _content.localized("guide.legacy.parties_legacyCatalog.b00208"), [
    plan(["霊砂", "ホタル", "帰忘の流離人", "ダリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00092")),
    plan(["霊砂", "マダム・ヘルタ", "アナイクス", "トリビー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00093")),
    plan(["霊砂", "三月なのか（巡狩）", "開拓者（調和）", "ルアン・メェイ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00094")),
  ]),
  "genshin:雷電将軍": batch3Options("genshin", "雷電将軍", "https://game8.co/games/Genshin-Impact/archives/337161", mainDps, [
    plan(["雷電将軍", "行秋", "香菱", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00095")),
    plan(["雷電将軍", "楓原万葉", "九条裟羅", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00096")),
    plan(["雷電将軍", "ナヒーダ", "夜蘭", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00097"), [change("elementalMastery", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00098"), "", 1100, 1000, 800, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00099"))]),
  ]),
  "genshin:ナヒーダ": batch3Options("genshin", "ナヒーダ", "https://game8.co/games/Genshin-Impact/archives/Nahida-Best-Builds", support, [
    plan(["ナヒーダ", "ラウマ", "ニィロウ", "珊瑚宮心海"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00100")),
    plan(["ナヒーダ", "アルハイゼン", "夜蘭", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00101")),
    plan(["ナヒーダ", "アルハイゼン", "八重神子", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00102")),
  ]),
  "genshin:鍾離": batch3Options("genshin", "鍾離", "https://game8.co/games/Genshin-Impact/archives/305858", _content.localized("guide.legacy.parties_legacyCatalog.b00209"), [
    plan(["鍾離", "ヌヴィレット", "フリーナ", "シャルロット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00103")),
    plan(["鍾離", "荒瀧一斗", "アルベド", "ゴロー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00104")),
    plan(["鍾離", "胡桃", "行秋", "夜蘭"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00105")),
  ]),
  "zzz:ビビアン": batch3Options("zzz", "ビビアン", "https://game8.jp/zenless/673769", anomaly, [
    plan(["ビビアン", "月城柳", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00106")),
    plan(["ビビアン", "アリス", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00107")),
    plan(["ビビアン", "パイパー", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00108")),
  ]),
  "zzz:ジェーン": batch3Options("zzz", "ジェーン", "https://game8.jp/zenless/625565", anomaly, [
    plan(["ジェーン", "セス", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00109")),
    plan(["ジェーン", "レミエール", "ヴェリナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00110")),
    plan(["ジェーン", "セス", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00111")),
  ]),
  "zzz:エレン": batch3Options("zzz", "エレン", "https://game8.jp/zenless/607800", mainDps, [
    plan(["エレン", "ダイアリン", "千夏"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00112")),
    plan(["エレン", "シーザー", "ライト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00113")),
    plan(["エレン", "蒼角", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00114")),
  ]),
  "hsr:アベンチュリン": batch4Options("hsr", "アベンチュリン", "https://game8.co/games/Honkai-Star-Rail/archives/429966", _content.localized("guide.legacy.parties_legacyCatalog.b00210"), [
    plan(["アベンチュリン", "飛霄", "サフェル", "ロビン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00115")),
    plan(["アベンチュリン", "Dr.レイシオ", "トパーズ&カブ", "ロビン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00116")),
    plan(["アベンチュリン", "黄泉", "椒丘", "サフェル"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00117")),
  ]),
  "hsr:トパーズ&カブ": batch4Options("hsr", "トパーズ&カブ", "https://game8.co/games/Honkai-Star-Rail/archives/421778", mainDps, [
    plan(["トパーズ&カブ", "飛霄", "ロビン", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00118")),
    plan(["トパーズ&カブ", "Dr.レイシオ", "銀狼", "羅刹"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00119")),
    plan(["トパーズ&カブ", "姫子", "銀狼", "符玄"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00120")),
  ]),
  "hsr:花火": batch4Options("hsr", "花火", "https://game8.co/games/Honkai-Star-Rail/archives/Sparkle-Best-Builds", support, [
    plan(["花火", "丹恒・飲月", "停雲", "羅刹"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00121")),
    plan(["花火", "アーチャー", "サフェル", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00122")),
    plan(["花火", "黄泉", "椒丘", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00123")),
  ]),
  "hsr:丹恒・飲月": batch4Options("hsr", "丹恒・飲月", "https://game8.co/games/Honkai-Star-Rail/archives/417235", mainDps, [
    plan(["丹恒・飲月", "花火", "停雲", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00124")),
    plan(["丹恒・飲月", "花火", "銀狼", "羅刹"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00125")),
    plan(["丹恒・飲月", "ロビン", "サンデー", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00126")),
  ]),
  "genshin:アルハイゼン": batch4Options("genshin", "アルハイゼン", "https://game8.co/games/Genshin-Impact/archives/383712", mainDps, [
    plan(["アルハイゼン", "ナヒーダ", "夜蘭", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00127")),
    plan(["アルハイゼン", "ナヒーダ", "八重神子", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00128")),
    plan(["アルハイゼン", "フィッシュル", "フリーナ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00129")),
  ]),
  "genshin:胡桃": batch4Options("genshin", "胡桃", "https://game8.co/games/Genshin-Impact/archives/314347", mainDps, [
    plan(["胡桃", "フリーナ", "夜蘭", "閑雲"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00130")),
    plan(["胡桃", "行秋", "夜蘭", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00131")),
    plan(["胡桃", "行秋", "ロサリア", "シトラリ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00132")),
  ]),
  "genshin:久岐忍": batch4Options("genshin", "久岐忍", "https://game8.co/games/Genshin-Impact/archives/346199", support, [
    plan(["久岐忍", "アルハイゼン", "夜蘭", "ナヒーダ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00133")),
    plan(["久岐忍", "ナヒーダ", "行秋", "夜蘭"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00134")),
    plan(["久岐忍", "アルハイゼン", "八重神子", "ナヒーダ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00135")),
  ]),
  "zzz:セス": batch4Options("zzz", "セス", "https://game8.co/games/Zenless-Zone-Zero/archives/460687", _content.localized("guide.legacy.parties_legacyCatalog.b00211"), [
    plan(["セス", "ジェーン", "ビビアン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00136")),
    plan(["セス", "ジェーン", "月城柳"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00137")),
    plan(["セス", "グレース", "リナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00138")),
  ]),
  "zzz:パイパー": batch4Options("zzz", "パイパー", "https://game8.co/games/Zenless-Zone-Zero/archives/459818", anomaly, [
    plan(["パイパー", "ビビアン", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00139")),
    plan(["パイパー", "バーニス", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00140")),
    plan(["パイパー", "アンビー", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00141")),
  ]),
  "zzz:蒼角": batch4Options("zzz", "蒼角", "https://game8.co/games/Zenless-Zone-Zero/archives/436880", support, [
    plan(["蒼角", "星見雅", "月城柳"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00142")),
    plan(["蒼角", "エレン", "ライト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00143")),
    plan(["蒼角", "星見雅", "ライカン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00144")),
  ]),
  "hsr:Dr.レイシオ": batch5Options("hsr", "Dr.レイシオ", "https://game8.co/games/Honkai-Star-Rail/archives/431768", mainDps, [
    plan(["Dr.レイシオ", "サフェル", "ロビン", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00145")),
    plan(["Dr.レイシオ", "トパーズ&カブ", "銀狼", "羅刹"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00146")),
    plan(["Dr.レイシオ", "三月なのか（巡狩）", "アスター", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00147")),
  ]),
  "hsr:カフカ": batch5Options("hsr", "カフカ", "https://game8.co/games/Honkai-Star-Rail/archives/405755", anomaly, [
    plan(["カフカ", "ヒアンシー", "ルアン・メェイ", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00148")),
    plan(["カフカ", "ブラックスワン", "椒丘", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00149")),
    plan(["カフカ", "サンポ", "アスター", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00150")),
  ]),
  "hsr:ブラックスワン": batch5Options("hsr", "ブラックスワン", "https://game8.co/games/Honkai-Star-Rail/archives/Black-Swan-Best-Builds", anomaly, [
    plan(["ブラックスワン", "カフカ", "ルアン・メェイ", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00151")),
    plan(["ブラックスワン", "カフカ", "椒丘", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00152")),
    plan(["ブラックスワン", "セーバル", "アスター", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00153")),
  ]),
  "hsr:鏡流": batch5Options("hsr", "鏡流", "https://game8.co/games/Honkai-Star-Rail/archives/411783", mainDps, [
    plan(["鏡流", "サンデー", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00154")),
    plan(["鏡流", "刃", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00155")),
    plan(["鏡流", "アスター", "開拓者（記憶）", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00156")),
  ]),
  "genshin:行秋": batch5Options("genshin", "行秋", "https://game8.co/games/Genshin-Impact/archives/297531", support, [
    plan(["行秋", "胡桃", "夜蘭", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00157")),
    plan(["行秋", "アルハイゼン", "ナヒーダ", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00158")),
    plan(["行秋", "雷電将軍", "香菱", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00159")),
  ]),
  "genshin:香菱": batch5Options("genshin", "香菱", "https://game8.co/games/Genshin-Impact/archives/297530", anomaly, [
    plan(["香菱", "行秋", "雷電将軍", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00160")),
    plan(["香菱", "タルタリヤ", "楓原万葉", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00161")),
    plan(["香菱", "クロリンデ", "フィッシュル", "シュヴルーズ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00162")),
  ]),
  "genshin:フィッシュル": batch5Options("genshin", "フィッシュル", "https://game8.co/games/Genshin-Impact/archives/297524", anomaly, [
    plan(["フィッシュル", "クロリンデ", "ナヒーダ", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00163")),
    plan(["フィッシュル", "行秋", "北斗", "スクロース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00164")),
    plan(["フィッシュル", "雷電将軍", "行秋", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00165")),
  ]),
  "zzz:グレース": batch5Options("zzz", "グレース", "https://game8.co/games/Zenless-Zone-Zero/archives/436878", anomaly, [
    plan(["グレース", "星見雅", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00166")),
    plan(["グレース", "浅羽悠真", "リナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00167")),
    plan(["グレース", "アンビー", "蒼角"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00168")),
  ]),
  "zzz:バーニス": batch5Options("zzz", "バーニス", "https://game8.co/games/Zenless-Zone-Zero/archives/464323", anomaly, [
    plan(["バーニス", "星見雅", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00169")),
    plan(["バーニス", "ジェーン", "シーザー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00170")),
    plan(["バーニス", "「11号」", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00171")),
  ]),
  "zzz:ルーシー": batch5Options("zzz", "ルーシー", "https://game8.co/games/Zenless-Zone-Zero/archives/459730", support, [
    plan(["ルーシー", "バーニス", "ジェーン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00172")),
    plan(["ルーシー", "「11号」", "ライト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00173")),
    plan(["ルーシー", "パイパー", "バーニス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00174")),
  ]),
  "hsr:ブローニャ": batch6Options("hsr", "ブローニャ", "https://game8.co/games/Honkai-Star-Rail/archives/405750", support, [
    plan(["ブローニャ", "ファイノン", "サンデー", "開拓者（記憶）"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00175")),
    plan(["ブローニャ", "刃", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00176")),
    plan(["ブローニャ", "ゼーレ", "開拓者（存護）", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00177")),
  ]),
  "hsr:銀狼": batch6Options("hsr", "銀狼", "https://game8.co/games/Honkai-Star-Rail/archives/405757", support, [
    plan(["銀狼", "黄泉", "椒丘", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00178")),
    plan(["銀狼", "ゼーレ", "花火", "符玄"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00179")),
    plan(["銀狼", "Dr.レイシオ", "トパーズ&カブ", "羅刹"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00180")),
  ]),
  "hsr:符玄": batch6Options("hsr", "符玄", "https://game8.co/games/Honkai-Star-Rail/archives/405760", _content.localized("guide.legacy.parties_legacyCatalog.b00212"), [
    plan(["符玄", "ゼーレ", "花火", "銀狼"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00181")),
    plan(["符玄", "ゼーレ", "花火", "停雲"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00182")),
    plan(["符玄", "丹恒", "アスター", "御空"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00183")),
  ]),
  "hsr:羅刹": batch6Options("hsr", "羅刹", "https://game8.co/games/Honkai-Star-Rail/archives/405764", _content.localized("guide.legacy.parties_legacyCatalog.b00213"), [
    plan(["羅刹", "キャストリス", "開拓者（記憶）", "トリビー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00184")),
    plan(["羅刹", "モーディス", "サンデー", "トリビー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00185")),
    plan(["羅刹", "クラーラ", "停雲", "アスター"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00186")),
  ]),
  "genshin:白朮": batch6Options("genshin", "白朮", "https://game8.co/games/Genshin-Impact/archives/314348", support, [
    plan(["白朮", "セノ", "ナヒーダ", "夜蘭"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00187")),
    plan(["白朮", "アルハイゼン", "八重神子", "フィッシュル"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00188")),
    plan(["白朮", "ニィロウ", "ナヒーダ", "行秋"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00189")),
  ]),
  "genshin:八重神子": batch6Options("genshin", "八重神子", "https://game8.co/games/Genshin-Impact/archives/327533", anomaly, [
    plan(["八重神子", "アルハイゼン", "ナヒーダ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00190")),
    plan(["八重神子", "クロリンデ", "シュヴルーズ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00191")),
    plan(["八重神子", "雷電将軍", "楓原万葉", "珊瑚宮心海"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00192")),
  ]),
  "genshin:宵宮": batch6Options("genshin", "宵宮", "https://game8.co/games/Genshin-Impact/archives/333497", mainDps, [
    plan(["宵宮", "行秋", "ベネット", "雲菫"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00193")),
    plan(["宵宮", "夜蘭", "雲菫", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00194")),
    plan(["宵宮", "八重神子", "フィッシュル", "シュヴルーズ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00195")),
  ]),
  // 第19バッチのクラレッタ3案は第27バッチの共有マスタへ移行。
  "zzz:シーザー": batch6Options("zzz", "シーザー", "https://game8.co/games/Zenless-Zone-Zero/archives/464303", _content.localized("guide.legacy.parties_legacyCatalog.b00214"), [
    plan(["シーザー", "エレン", "蒼角"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00196")),
    plan(["シーザー", "ビビアン", "月城柳"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00197")),
    plan(["シーザー", "ビリー", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00198")),
  ]),
  "zzz:リナ": batch6Options("zzz", "リナ", "https://game8.co/games/Zenless-Zone-Zero/archives/436876", support, [
    plan(["リナ", "星見雅", "月城柳"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00199")),
    plan(["リナ", "浅羽悠真", "青衣"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00200")),
    plan(["リナ", "アンビー", "ビリー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00201")),
  ]),
  "zzz:青衣": batch6Options("zzz", "青衣", "https://game8.co/games/Zenless-Zone-Zero/archives/460407", _content.localized("guide.legacy.parties_legacyCatalog.b00215"), [
    plan(["青衣", "アストラ", "朱鳶"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00202")),
    plan(["青衣", "アストラ", "浅羽悠真"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00203")),
    plan(["青衣", "ニコ", "ビリー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00204")),
  ]),
  "hsr:アーチャー": batch7Options("hsr", "アーチャー", "https://game8.co/games/Honkai-Star-Rail/archives/519877", mainDps, [
    plan(["アーチャー", "花火", "開拓者（記憶）", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00205")),
    plan(["アーチャー", "開拓者（記憶）", "寒鴉", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00206")),
    plan(["アーチャー", "花火", "爻光", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00207")),
  ]),
  "hsr:アーラン": batch7Options("hsr", "アーラン", "https://game8.co/games/Honkai-Star-Rail/archives/405754", mainDps, [
    plan(["アーラン", "御空", "アスター", "開拓者（存護）"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00208")),
    plan(["アーラン", "ブローニャ", "停雲", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00209")),
    plan(["アーラン", "サンデー", "丹恒・騰荒", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00210")),
  ]),
  "hsr:アスター": batch7Options("hsr", "アスター", "https://game8.co/games/Honkai-Star-Rail/archives/405743", support, [
    plan(["アスター", "姫子", "トパーズ&カブ", "符玄"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00211")),
    plan(["アスター", "フック", "銀狼", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00212")),
    plan(["アスター", "ホタル", "開拓者（調和）", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00213")),
  ]),
  "hsr:アルジェンティ": batch7Options("hsr", "アルジェンティ", "https://game8.co/games/Honkai-Star-Rail/archives/428046", mainDps, [
    plan(["アルジェンティ", "サンデー", "トリビー", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00214")),
    plan(["アルジェンティ", "マダム・ヘルタ", "トリビー", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00215")),
    plan(["アルジェンティ", "御空", "開拓者（記憶）", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00216")),
  ]),
  "genshin:アーロイ": batch7Options("genshin", "アーロイ", "https://www.icy-veins.com/genshin-impact/aloy-team-guide", mainDps, [
    plan(["アーロイ", "フリーナ", "ジン", "甘雨"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00217")),
    plan(["アーロイ", "神里綾華", "珊瑚宮心海", "申鶴"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00218")),
    plan(["アーロイ", "ベネット", "香菱", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00219")),
  ]),
  "genshin:アイノ": batch7Options("genshin", "アイノ", "https://game8.co/games/Genshin-Impact/archives/537903", support, [
    plan(["アイノ", "フリンズ", "イネファ", "スクロース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00220")),
    plan(["アイノ", "ナヒーダ", "ニィロウ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00221")),
    plan(["アイノ", "アルレッキーノ", "イネファ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00222")),
  ]),
  "genshin:アルベド": batch7Options("genshin", "アルベド", "https://game8.co/games/Genshin-Impact/archives/312182", support, [
    plan(["アルベド", "ナヴィア", "ドゥリン", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00223")),
    plan(["アルベド", "荒瀧一斗", "ゴロー", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00224")),
    plan(["アルベド", "胡桃", "行秋", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00225")),
  ]),
  "zzz:「11号」": batch7Options("zzz", "「11号」", "https://game8.co/games/Zenless-Zone-Zero/archives/436882", mainDps, [
    plan(["「11号」", "ライト", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00226")),
    plan(["「11号」", "「トリガー」", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00227")),
    plan(["「11号」", "ベン", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00228")),
  ]),
  "zzz:「シード」": batch7Options("zzz", "「シード」", "https://www.prydwen.gg/zenless/characters/seed", mainDps, [
    plan(["「シード」", "0号・アンビー", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00229")),
    plan(["「シード」", "オルペウス&「鬼火」", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00230")),
    plan(["「シード」", "「11号」", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00231")),
  ]),
  "zzz:「トリガー」": batch7Options("zzz", "「トリガー」", "https://game8.co/games/Zenless-Zone-Zero/archives/495167", _content.localized("guide.legacy.parties_legacyCatalog.b00216"), [
    plan(["「トリガー」", "アストラ", "0号・アンビー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00232")),
    plan(["「トリガー」", "アストラ", "浅羽悠真"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00233")),
    plan(["「トリガー」", "ニコ", "ビリー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00234")),
  ]),
  "hsr:ヴェルト": batch8Options("hsr", "ヴェルト", "https://game8.co/games/Honkai-Star-Rail/archives/405763", mainDps, [
    plan(["ヴェルト", "花火", "トリビー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00235")),
    plan(["ヴェルト", "黄泉", "銀狼", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00236")),
    plan(["ヴェルト", "開拓者（記憶）", "アスター", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00237")),
  ]),
  "hsr:ギャラガー": batch8Options("hsr", "ギャラガー", "https://game8.co/games/Honkai-Star-Rail/archives/437255", _content.localized("guide.legacy.parties_legacyCatalog.b00217"), [
    plan(["ギャラガー", "ホタル", "帰忘の流離人", "ダリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00238")),
    plan(["ギャラガー", "黄泉", "椒丘", "ペラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00239")),
    plan(["ギャラガー", "三月なのか（巡狩）", "開拓者（調和）", "アスター"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00240")),
  ]),
  "hsr:キュレネ": batch8Options("hsr", "キュレネ", "https://game8.co/games/Honkai-Star-Rail/archives/541348", support, [
    plan(["キュレネ", "キャストリス", "長夜月", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00241")),
    plan(["キュレネ", "アグライア", "サンデー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00242")),
    plan(["キュレネ", "アナイクス", "ケリュドラ", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00243")),
  ]),
  "hsr:ギルガメッシュ": batch8Options("hsr", "ギルガメッシュ", "https://game8.co/games/Honkai-Star-Rail/archives/601941", mainDps, [
    plan(["ギルガメッシュ", "セイバー", "千冶・刃", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00244")),
    plan(["ギルガメッシュ", "セイバー", "開拓者（記憶）", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00245")),
    plan(["ギルガメッシュ", "不死途", "千冶・刃", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00246")),
  ]),
  "genshin:アンバー": batch8Options("genshin", "アンバー", "https://game8.co/games/Genshin-Impact/archives/297535", mainDps, [
    plan(["アンバー", "シトラリ", "シロネン", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00247")),
    plan(["アンバー", "ロサリア", "鍾離", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00248")),
    plan(["アンバー", "シトラリ", "スクロース", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00249")),
  ]),
  "genshin:イアンサ": batch8Options("genshin", "イアンサ", "https://game8.co/games/Genshin-Impact/archives/345881", support, [
    plan(["イアンサ", "マーヴィカ", "シトラリ", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00250")),
    plan(["イアンサ", "ヴァレサ", "フリーナ", "閑雲"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00251")),
    plan(["イアンサ", "クロリンデ", "ベネット", "シュヴルーズ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00252")),
  ]),
  "genshin:イネファ": batch8Options("genshin", "イネファ", "https://game8.co/games/Genshin-Impact/archives/531360", _content.localized("guide.legacy.parties_legacyCatalog.b00218"), [
    plan(["イネファ", "フリンズ", "アイノ", "スクロース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00253")),
    plan(["イネファ", "イファ", "オロルン", "フリーナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00254")),
    plan(["イネファ", "ラウマ", "ヌヴィレット", "フリーナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00255")),
  ]),
  "zzz:0号・アンビー": batch8Options("zzz", "0号・アンビー", "https://game8.co/games/Zenless-Zone-Zero/archives/495109", mainDps, [
    plan(["0号・アンビー", "「トリガー」", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00256")),
    plan(["0号・アンビー", "アンビー", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00257")),
    plan(["0号・アンビー", "オルペウス&「鬼火」", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00258")),
  ]),
  "zzz:アリア": batch8Options("zzz", "アリア", "https://game8.co/games/Zenless-Zone-Zero/archives/572601", anomaly, [
    plan(["アリア", "スンナ", "南宮羽"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00259")),
    plan(["アリア", "プロメイア", "南宮羽"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00260")),
    plan(["アリア", "アンビー", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00261")),
  ]),
  "zzz:アリス": batch8Options("zzz", "アリス", "https://game8.co/games/Zenless-Zone-Zero/archives/527839", anomaly, [
    plan(["アリス", "ヴェリナ", "レミエール"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00262")),
    plan(["アリス", "カリン", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00263")),
    plan(["アリス", "アストラ", "セス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00264")),
  ]),
  "hsr:クラーラ": batch9Options("hsr", "クラーラ", "https://game8.jp/houkaistarrail/524682", mainDps, [
    plan(["クラーラ", "不死途", "トリビー", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00265")),
    plan(["クラーラ", "サフェル", "サンデー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00266")),
    plan(["クラーラ", "三月なのか", "リンクス", "停雲"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00267")),
  ]),
  "hsr:ケリュドラ": batch9Options("hsr", "ケリュドラ", "https://game8.jp/houkaistarrail/698898", support, [
    plan(["ケリュドラ", "ファイノン", "キュレネ", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00268")),
    plan(["ケリュドラ", "アナイクス", "キュレネ", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00269")),
    plan(["ケリュドラ", "アーチャー", "花火", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00270")),
  ]),
  "hsr:サフェル": batch9Options("hsr", "サフェル", "https://game8.jp/houkaistarrail/678974", _content.localized("guide.legacy.parties_legacyCatalog.b00219"), [
    plan(["サフェル", "飛霄", "ロビン", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00271")),
    plan(["サフェル", "黄泉", "椒丘", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00272")),
    plan(["サフェル", "アーチャー", "花火", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00273")),
  ]),
  "hsr:サンポ": batch9Options("hsr", "サンポ", "https://game8.co/games/Honkai-Star-Rail/archives/405761", _content.localized("guide.legacy.parties_legacyCatalog.b00220"), [
    plan(["サンポ", "カフカ", "ルアン・メェイ", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00274")),
    plan(["サンポ", "セーバル", "アスター", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00275")),
    plan(["サンポ", "カフカ", "椒丘", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00276")),
  ]),
  "genshin:イファ": batch9Options("genshin", "イファ", "https://game8.jp/genshin/639101", support, [
    plan(["イファ", "コロンビーナ", "オロルン", "イネファ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00277")),
    plan(["イファ", "オデット", "ファルザン", "七七"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00278")),
    plan(["イファ", "オデット", "コロンビーナ", "イネファ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00279")),
  ]),
  "genshin:ヴァレサ": batch9Options("genshin", "ヴァレサ", "https://game8.jp/genshin/669311", mainDps, [
    plan(["ヴァレサ", "イアンサ", "ドゥリン", "シュヴルーズ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00280")),
    plan(["ヴァレサ", "フリーナ", "閑雲", "イアンサ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00281")),
    plan(["ヴァレサ", "ナヒーダ", "イアンサ", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00282")),
  ]),
  "genshin:ウェンティ": batch9Options("genshin", "ウェンティ", "https://game8.jp/genshin/352607", _content.localized("guide.legacy.parties_legacyCatalog.b00221"), [
    plan(["ウェンティ", "フィッシュル", "アイノ", "イネファ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00283")),
    plan(["ウェンティ", "クレー", "フリーナ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00284")),
    plan(["ウェンティ", "エミリエ", "ドゥリン", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00285")),
  ]),
  "zzz:アンドー": batch9Options("zzz", "アンドー", "https://game8.jp/zenless/682786", mainDps, [
    plan(["アンドー", "アストラ", "青衣"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00286")),
    plan(["アンドー", "リナ", "月城柳"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00287")),
    plan(["アンドー", "アンビー", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00288")),
  ]),
  "zzz:アンビー": batch9Options("zzz", "アンビー", "https://game8.jp/zenless/607757", _content.localized("guide.legacy.parties_legacyCatalog.b00222"), [
    plan(["アンビー", "アストラ", "浅羽悠真"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00289")),
    plan(["アンビー", "浅羽悠真", "蒼角"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00290")),
    plan(["アンビー", "ニコ", "アンドー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00291")),
  ]),
  "zzz:イヴリン": batch9Options("zzz", "イヴリン", "https://game8.jp/zenless/658501", mainDps, [
    plan(["イヴリン", "千夏", "ノルムー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00292")),
    plan(["イヴリン", "アストラ", "ライト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00293")),
    plan(["イヴリン", "アストラ", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00294")),
  ]),
  // 第18バッチ（2026-09-11）で出典の実名編成へ差し替え（docs/batch-18-research-notes.md 区分1）。ジェイドは案1が Game8・案2〜3が GameWith、ジェパードは案1〜2が GameWith・案3が Game8。
  "hsr:ジェイド": batch18Options("hsr", "ジェイド", "https://gamewith.jp/houkaistarrail/article/show/447141", _content.localized("guide.legacy.parties_legacyCatalog.b00223"), [
    plan(["ジェイド", "マダム・ヘルタ", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00295")),
    plan(["ジェイド", "ヘルタ", "ロビン", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00296")),
    plan(["ジェイド", "クラーラ", "開拓者（記憶）", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00297")),
  ]),
  "hsr:ジェパード": batch18Options("hsr", "ジェパード", "https://gamewith.jp/houkaistarrail/article/show/389899", _content.localized("guide.legacy.parties_legacyCatalog.b00224"), [
    plan(["ジェパード", "彦卿", "停雲", "ペラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00298")),
    plan(["ジェパード", "黄泉", "椒丘", "ペラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00299")),
    plan(["ジェパード", "姫子・旅立ち", "トリビー", "ヴェルト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00300")),
  ]),
  // 第18バッチの夏ロビンは第27バッチで現行ガイドに照合し共有化。
  // 千冶・刃と姫子・旅立ちの旧全案は第25バッチの共有マスタへ移行。
  "hsr:セイバー": batch10Options("hsr", "セイバー", "https://game8.jp/houkaistarrail/686759", mainDps, [
    plan(["セイバー", "サンデー", "トリビー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00301")),
    plan(["ギルガメッシュ", "セイバー", "千冶・刃", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00302")),
    plan(["セイバー", "停雲", "記憶主人公", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00303")),
  ]),
  "hsr:セイレンス": batch10Options("hsr", "セイレンス", "https://game8.jp/houkaistarrail/698610", _content.localized("guide.legacy.parties_legacyCatalog.b00225"), [
    plan(["セイレンス", "カフカ", "ルアン・メェイ", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00304")),
    plan(["セイレンス", "カフカ", "ブラックスワン", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00305")),
    plan(["セイレンス", "椒丘", "トリビー", "羅刹"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00306")),
  ]),
  "genshin:エウルア": batch10Options("genshin", "エウルア", "https://www.icy-veins.com/genshin-impact/eula-guide-best-builds", mainDps, [
    plan(["エウルア", "雷電将軍", "ロサリア", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00307")),
    plan(["エウルア", "エスコフィエ", "夜蘭", "フリーナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00308")),
    plan(["エウルア", "雷電将軍", "ミカ", "フリーナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00309")),
  ]),
  "genshin:エスコフィエ": batch10Options("genshin", "エスコフィエ", "https://game8.jp/genshin/678671", support, [
    plan(["エスコフィエ", "スカーク", "フリーナ", "申鶴"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00310")),
    plan(["エスコフィエ", "神里綾華", "フリーナ", "申鶴"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00311")),
    plan(["エスコフィエ", "リオセスリ", "フリーナ", "夜蘭"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00312")),
  ]),
  "genshin:エミリエ": batch10Options("genshin", "エミリエ", "https://game8.jp/genshin/574298", _content.localized("guide.legacy.parties_legacyCatalog.b00226"), [
    plan(["エミリエ", "アルレッキーノ", "楓原万葉", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00313")),
    plan(["エミリエ", "リオセスリ", "トーマ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00314")),
    plan(["エミリエ", "クロリンデ", "香菱", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00315")),
  ]),
  "zzz:イドリー": batch10Options("zzz", "イドリー", "https://game8.jp/zenless/712545", mainDps, [
    plan(["イドリー", "リュシア", "ダイアリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00316")),
    plan(["イドリー", "潘引壺", "橘福福"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00317")),
    plan(["イドリー", "リュシア", "ライカン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00318")),
  ]),
  "zzz:ヴェリナ": batch10Options("zzz", "ヴェリナ", "https://game8.jp/zenless/614253", anomaly, [
    plan(["ヴェリナ", "レミエール", "アリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00319")),
    plan(["ヴェリナ", "プロメイア", "アリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00320")),
    plan(["ヴェリナ", "レミエール", "プロメイア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00321")),
  ]),
  "zzz:オルペウス&「鬼火」": batch10Options("zzz", "オルペウス&「鬼火」", "https://game8.jp/zenless/695654", mainDps, [
    plan(["オルペウス&「鬼火」", "アストラ", "ライト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00322")),
    plan(["オルペウス&「鬼火」", "0号・アンビー", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00323")),
    plan(["オルペウス&「鬼火」", "アストラ", "橘福福"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00324")),
  ]),
  "hsr:セーバル": batch11Options("hsr", "セーバル", "https://game8.jp/houkaistarrail/524686", mainDps, [
    plan(["セーバル", "サンデー", "トリビー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00325")),
    plan(["セーバル", "停雲", "記憶主人公", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00326")),
  ]),
  "hsr:ゼーレ": batch11Options("hsr", "ゼーレ", "https://game8.jp/houkaistarrail/524687", mainDps, [
    plan(["ゼーレ", "サンデー", "ケリュドラ", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00327")),
  ]),
  "hsr:ダリア": batch11Options("hsr", "ダリア", "https://game8.jp/houkaistarrail/732480", support, [
    plan(["ホタル", "ダリア", "帰忘の流離人", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00328")),
    plan(["ホタル", "ダリア", "帰忘の流離人", "ルアン・メェイ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00329")),
  ]),
  "hsr:トリビー": batch11Options("hsr", "トリビー", "https://game8.jp/houkaistarrail/662211", support, [
    plan(["マダム・ヘルタ", "アナイクス", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00330")),
    plan(["キャストリス", "長夜月", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00331")),
    plan(["モーディス", "サンデー", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00332")),
  ]),
  "hsr:ナターシャ": batch11Options("hsr", "ナターシャ", "https://game8.jp/houkaistarrail/524684", _content.localized("guide.legacy.parties_legacyCatalog.b00227"), [
    plan(["緋英", "銀狼Lv.999", "爻光", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00333")),
    plan(["不死途", "千冶・刃", "トリビー", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00334")),
  ]),
  "hsr:ヒアンシー": batch11Options("hsr", "ヒアンシー", "https://game8.jp/houkaistarrail/677023", _content.localized("guide.legacy.parties_legacyCatalog.b00228"), [
    plan(["キュレネ", "長夜月", "ヒアンシー", "ロビン・夏空の歌"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00335")),
    plan(["キュレネ", "長夜月", "ヒアンシー", "キャストリス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00336")),
    plan(["キュレネ", "モーディス", "ヒアンシー", "トリビー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00337")),
  ]),
  "hsr:ファイノン": batch11Options("hsr", "ファイノン", "https://www.prydwen.gg/star-rail/characters/phainon", mainDps, [
    plan(["ファイノン", "ケリュドラ", "サンデー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00338")),
    plan(["ファイノン", "ケリュドラ", "キュレネ", "記憶主人公"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00339")),
    plan(["ファイノン", "ケリュドラ", "花火", "サンデー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00340")),
  ]),
  "hsr:フォフォ": batch11Options("hsr", "フォフォ", "https://game8.jp/houkaistarrail/556584", _content.localized("guide.legacy.parties_legacyCatalog.b00229"), [
    plan(["銀狼Lv.999", "火花", "爻光", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00341")),
  ]),
  "genshin:オロルン": batch11Options("genshin", "オロルン", "https://game8.jp/genshin/654393", _content.localized("guide.legacy.parties_legacyCatalog.b00230"), [
    plan(["ムアラニ", "オロルン", "フリーナ", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00342")),
    plan(["ヌヴィレット", "オロルン", "フリーナ", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00343")),
    plan(["クロリンデ", "オロルン", "行秋", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00344")),
  ]),
  "genshin:カーヴェ": batch11Options("genshin", "カーヴェ", "https://game8.jp/genshin/560164", _content.localized("guide.legacy.parties_legacyCatalog.b00231"), [
    plan(["カーヴェ", "ニィロウ", "ナヒーダ", "珊瑚宮心海"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00345")),
    plan(["カーヴェ", "フリーナ", "珊瑚宮心海", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00346")),
    plan(["カーヴェ", "行秋", "旅人（草）", "バーバラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00347")),
  ]),
  "genshin:ガイア": batch11Options("genshin", "ガイア", "https://game8.jp/genshin/561395", _content.localized("guide.legacy.parties_legacyCatalog.b00232"), [
    plan(["神里綾華", "ガイア", "楓原万葉", "珊瑚宮心海"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00348")),
    plan(["アルレッキーノ", "ガイア", "楓原万葉", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00349")),
    plan(["ロサリア", "香菱", "ガイア", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00350")),
  ]),
  "genshin:カチーナ": batch11Options("genshin", "カチーナ", "https://game8.jp/genshin/636264", _content.localized("guide.legacy.parties_legacyCatalog.b00233"), [
    plan(["ナヴィア", "香菱", "カチーナ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00351")),
    plan(["ノエル", "カチーナ", "フリーナ", "ゴロー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00352")),
    plan(["ムアラニ", "カチーナ", "キャンディス", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00353")),
  ]),
  "genshin:キィニチ": batch11Options("genshin", "キィニチ", "https://game8.jp/genshin/640184", mainDps, [
    plan(["キィニチ", "エミリエ", "マーヴィカ", "トーマ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00354")),
    plan(["キィニチ", "フリーナ", "マーヴィカ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00355")),
  ]),
  "genshin:キャンディス": batch11Options("genshin", "キャンディス", "https://game8.jp/genshin/560314", support, [
    plan(["キャンディス", "楓原万葉", "香菱", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00356")),
    plan(["キャンディス", "ナヒーダ", "ニィロウ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00357")),
  ]),
  "zzz:カリン": batch11Options("zzz", "カリン", "https://www.prydwen.gg/zenless/characters/corin", mainDps, [
    plan(["カリン", "ダイアリン", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00358")),
  ]),
  "zzz:クレタ": batch11Options("zzz", "クレタ", "https://www.prydwen.gg/zenless/characters/koleda", _content.localized("guide.legacy.parties_legacyCatalog.b00234"), [
    plan(["イヴリン", "クレタ", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00359")),
    plan(["スターライト･ビリー", "クレタ", "シーシィア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00360")),
    plan(["スターライト･ビリー", "クレタ", "潘引壺"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00361")),
  ]),
  "zzz:シーシィア": batch11Options("zzz", "シーシィア", "https://gamewith.jp/zenless/545038", mainDps, [
    plan(["シーシィア", "「シード」", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00362")),
    plan(["シーシィア", "「シード」", "千夏"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00363")),
    plan(["シーシィア", "「シード」", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00364")),
  ]),
  "zzz:シグリッド": batch11Options("zzz", "シグリッド", "https://gamewith.jp/zenless/560635", mainDps, [
    plan(["シグリッド", "ダイアリン", "千夏"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00365")),
    plan(["シグリッド", "ライカン", "リナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00366")),
  ]),
  "zzz:スターライト･ビリー": batch11Options("zzz", "スターライト･ビリー", "https://gamewith.jp/zenless/551848", _content.localized("guide.legacy.parties_legacyCatalog.b00235"), [
    plan(["スターライト･ビリー", "ダイアリン", "リュシア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00367")),
    plan(["スターライト･ビリー", "潘引壺", "クレタ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00368")),
  ]),
  "zzz:ダイアリン": batch11Options("zzz", "ダイアリン", "https://gamewith.jp/zenless/522882", _content.localized("guide.legacy.parties_legacyCatalog.b00236"), [
    plan(["ダイアリン", "照", "葉瞬光"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00369")),
    plan(["ダイアリン", "リュシア", "儀玄"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00370")),
    plan(["ダイアリン", "ニコ", "カリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00371")),
  ]),
  "hsr:フック": batch12Options("hsr", "フック", "https://game8.jp/houkaistarrail/524680", mainDps, [
    plan(["フック", "サンデー", "ケリュドラ", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00372")),
    plan(["フック", "桂乃芬", "アスター", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00373")),
  ]),
  "hsr:ペラ": batch12Options("hsr", "ペラ", "https://game8.jp/houkaistarrail/524683", support, [
    plan(["黄泉", "ペラ", "銀狼"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00374")),
  ]),
  "hsr:ヘルタ": batch12Options("hsr", "ヘルタ", "https://game8.jp/houkaistarrail/524689", mainDps, [
    plan(["ヘルタ", "ジェイド", "トリビー", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00375")),
  ]),
  "hsr:マダム・ヘルタ": batch12Options("hsr", "マダム・ヘルタ", "https://game8.jp/houkaistarrail/654345", mainDps, [
    plan(["マダム・ヘルタ", "姫子・旅立ち", "ヴェルト", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00376")),
    plan(["マダム・ヘルタ", "姫子・旅立ち", "長夜月", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00377")),
    plan(["マダム・ヘルタ", "アナイクス", "トリビー", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00378")),
  ]),
  "hsr:ミーシャ": batch12Options("hsr", "ミーシャ", "https://game8.jp/houkaistarrail/582412", mainDps, [
    plan(["ミーシャ", "サンデー", "トリビー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00379")),
    plan(["ミーシャ", "停雲", "記憶主人公", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00380")),
  ]),
  "hsr:モーディス": batch12Options("hsr", "モーディス", "https://game8.jp/houkaistarrail/662245", mainDps, [
    plan(["モーディス", "記憶主人公", "キュレネ", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00381")),
    plan(["モーディス", "サンデー", "記憶主人公", "羅刹"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00382")),
    plan(["モーディス", "記憶主人公", "ブローニャ", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00383")),
  ]),
  "hsr:モゼ": batch12Options("hsr", "モゼ", "https://game8.jp/houkaistarrail/626982", _content.localized("guide.legacy.parties_legacyCatalog.b00237"), [
    plan(["不死途", "モゼ", "トリビー", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00384")),
    plan(["飛霄", "モゼ", "ロビン", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00385")),
    plan(["雪衣", "モゼ", "ペラ", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00386")),
  ]),
  "hsr:リンクス": batch12Options("hsr", "リンクス", "https://game8.jp/houkaistarrail/539919", _content.localized("guide.legacy.parties_legacyCatalog.b00238"), [
    plan(["モーディス", "サンデー", "トリビー", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00387")),
    plan(["クラーラ", "停雲", "記憶主人公", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00388")),
  ]),
  "genshin:クレー": batch12Options("genshin", "クレー", "https://game8.jp/genshin/352608", mainDps, [
    plan(["クレー", "夜蘭", "楓原万葉", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00389")),
    plan(["クレー", "夜蘭", "ナヒーダ", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00390")),
    plan(["クレー", "フィッシュル", "北斗", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00391")),
  ]),
  "genshin:クロリンデ": batch12Options("genshin", "クロリンデ", "https://game8.jp/genshin/539444", mainDps, [
    plan(["クロリンデ", "フィッシュル", "ナヒーダ", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00392")),
    plan(["クロリンデ", "九条裟羅", "シュヴルーズ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00393")),
    plan(["クロリンデ", "夜蘭", "フィッシュル", "楓原万葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00394")),
  ]),
  "genshin:コレイ": batch12Options("genshin", "コレイ", "https://game8.jp/genshin/466765", _content.localized("guide.legacy.parties_legacyCatalog.b00239"), [
    plan(["コレイ", "アルハイゼン", "行秋", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00395")),
    plan(["ティナリ", "八重神子", "コレイ", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00396")),
    plan(["珊瑚宮心海", "コレイ", "ナヒーダ", "ニィロウ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00397")),
  ]),
  "genshin:ゴロー": batch12Options("genshin", "ゴロー", "https://game8.jp/genshin/395529", support, [
    plan(["茲白", "コロンビーナ", "イルーガ", "ゴロー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00398")),
    plan(["荒瀧一斗", "ゴロー", "イルーガ", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00399")),
  ]),
  "genshin:コロンビーナ": batch12Options("genshin", "コロンビーナ", "https://game8.jp/genshin/756695", _content.localized("guide.legacy.parties_legacyCatalog.b00240"), [
    plan(["ネフェル", "コロンビーナ", "ニィロウ", "ラウマ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00400")),
    plan(["茲白", "コロンビーナ", "イルーガ", "リンネア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00401")),
    plan(["フリンズ", "コロンビーナ", "スクロース", "イネファ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00402")),
  ]),
  "genshin:シグウィン": batch12Options("genshin", "シグウィン", "https://game8.jp/genshin/620751", _content.localized("guide.legacy.parties_legacyCatalog.b00241"), [
    plan(["ナヴィア", "千織", "フリーナ", "シグウィン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00403")),
    plan(["胡桃", "フリーナ", "楓原万葉", "シグウィン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00404")),
    plan(["ナヒーダ", "フリーナ", "ニィロウ", "シグウィン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00405")),
  ]),
  "zzz:ニコ": batch12Options("zzz", "ニコ", "https://game8.jp/zenless/607758", support, [
    plan(["浮波柚葉", "ニコ", "星見雅"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00406")),
    plan(["アストラ", "0号・アンビー", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00407")),
    plan(["青衣", "ニコ", "朱鳶"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00408")),
  ]),
  "zzz:ノルムー": batch12Options("zzz", "ノルムー", "https://game8.jp/zenless/760639", _content.localized("guide.legacy.parties_legacyCatalog.b00242"), [
    plan(["スターライト･ビリー", "ノルムー", "リュシア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00409")),
    plan(["ノルムー", "千夏", "イヴリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00410")),
    plan(["ノルムー", "千夏", "ピュロイス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00411")),
  ]),
  "zzz:ヒューゴ": batch12Options("zzz", "ヒューゴ", "https://game8.jp/zenless/666110", mainDps, [
    plan(["ヒューゴ", "ダイアリン", "ライト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00412")),
    plan(["ヒューゴ", "アンビー", "プルクラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00413")),
  ]),
  "zzz:ピュロイス": batch12Options("zzz", "ピュロイス", "https://game8.jp/zenless/781979", mainDps, [
    plan(["千夏", "ピュロイス", "ダイアリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00414")),
    plan(["アンビー", "ニコ", "ピュロイス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00415")),
  ]),
  "zzz:ビリー": batch12Options("zzz", "ビリー", "https://game8.jp/zenless/607806", mainDps, [
    plan(["ビリー", "アストラ", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00416")),
    plan(["シーザー", "ビリー", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00417")),
    plan(["ビリー", "アンビー", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00418")),
  ]),
  "zzz:プルクラ": batch12Options("zzz", "プルクラ", "https://game8.jp/zenless/665675", _content.localized("guide.legacy.parties_legacyCatalog.b00243"), [
    plan(["0号・アンビー", "プルクラ", "オルペウス&「鬼火」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00419")),
    plan(["プルクラ", "狛野真斗", "潘引壺"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00420")),
  ]),
  "hsr:ルカ": batch13Options("hsr", "ルカ", "https://game8.jp/houkaistarrail/529689", _content.localized("guide.legacy.parties_legacyCatalog.b00244"), [
    plan(["カフカ", "ルカ", "セイレンス", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00421")),
    plan(["ブートヒル", "調和主人公", "ルカ", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00422")),
  ]),
  "hsr:雲璃": batch13Options("hsr", "雲璃", "https://game8.jp/houkaistarrail/613642", mainDps, [
    plan(["雲璃", "サンデー", "ロビン", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00423")),
    plan(["雲璃", "ジェイド", "ロビン", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00424")),
    plan(["雲璃", "ルアン・メェイ", "記憶主人公", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00425")),
  ]),
  "hsr:遠坂凛": batch13Options("hsr", "遠坂凛", "https://game8.jp/houkaistarrail/785266", mainDps, [
    plan(["遠坂凛", "アーチャー", "花火", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00426")),
    plan(["遠坂凛", "ケリュドラ", "花火", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00427")),
  ]),
  "hsr:火花": batch13Options("hsr", "火花", "https://game8.jp/houkaistarrail/754095", mainDps, [
    plan(["火花", "銀狼Lv.999", "爻光", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00428")),
    plan(["火花", "爻光", "花火", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00429")),
  ]),
  "hsr:寒鴉": batch13Options("hsr", "寒鴉", "https://game8.jp/houkaistarrail/557338", support, [
    plan(["アーチャー", "寒鴉", "サフェル", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00430")),
    plan(["アルジェンティ", "停雲", "寒鴉", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00431")),
  ]),
  "hsr:帰忘の流離人": batch13Options("hsr", "帰忘の流離人", "https://game8.jp/houkaistarrail/643244", _content.localized("guide.legacy.parties_legacyCatalog.b00245"), [
    plan(["ホタル", "帰忘の流離人", "ダリア", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00432")),
    plan(["ブートヒル", "帰忘の流離人", "ルアン・メェイ", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00433")),
    plan(["姫子", "帰忘の流離人", "ルアン・メェイ", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00434")),
  ]),
  "hsr:景元": batch13Options("hsr", "景元", "https://game8.jp/houkaistarrail/524677", mainDps, [
    plan(["景元", "サンデー", "ロビン", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00435")),
    plan(["景元", "停雲", "アスター", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00436")),
    plan(["景元", "停雲", "寒鴉", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00437")),
  ]),
  "hsr:桂乃芬": batch13Options("hsr", "桂乃芬", "https://game8.jp/houkaistarrail/545409", _content.localized("guide.legacy.parties_legacyCatalog.b00246"), [
    plan(["カフカ", "桂乃芬", "セイレンス", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00438")),
    plan(["桂乃芬", "サンポ", "アスター", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00439")),
    plan(["桂乃芬", "セーバル", "アスター", "ナターシャ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00440")),
  ]),
  "genshin:シトラリ": batch13Options("genshin", "シトラリ", "https://game8.jp/genshin/662570", support, [
    plan(["マーヴィカ", "シトラリ", "シロネン", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00441")),
    plan(["ヌヴィレット", "フリーナ", "シトラリ", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00442")),
    plan(["嘉明", "シトラリ", "閑雲", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00443")),
  ]),
  "genshin:シャルロット": batch13Options("genshin", "シャルロット", "https://game8.jp/genshin/527370", _content.localized("guide.legacy.parties_legacyCatalog.b00247"), [
    plan(["ヌヴィレット", "フリーナ", "楓原万葉", "シャルロット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00444")),
    plan(["リオセスリ", "フリーナ", "楓原万葉", "シャルロット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00445")),
    plan(["ナヒーダ", "久岐忍", "行秋", "シャルロット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00446")),
  ]),
  "genshin:シュヴルーズ": batch13Options("genshin", "シュヴルーズ", "https://game8.jp/genshin/574300", support, [
    plan(["ヴァレサ", "イアンサ", "ドゥリン", "シュヴルーズ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00447")),
    plan(["クロリンデ", "フィッシュル", "ドゥリン", "シュヴルーズ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00448")),
    plan(["アルレッキーノ", "フィッシュル", "ベネット", "シュヴルーズ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00449")),
  ]),
  "genshin:ジン": batch13Options("genshin", "ジン", "https://game8.jp/genshin/352599", _content.localized("guide.legacy.parties_legacyCatalog.b00248"), [
    plan(["雷電将軍", "フリーナ", "夜蘭", "ジン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00450")),
    plan(["リオセスリ", "ベネット", "シロネン", "ジン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00451")),
    plan(["放浪者", "フリーナ", "ファルザン", "ジン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00452")),
  ]),
  "genshin:スカーク": batch13Options("genshin", "スカーク", "https://game8.jp/genshin/662513", mainDps, [
    plan(["スカーク", "フリーナ", "夜蘭", "エスコフィエ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00453")),
    plan(["スカーク", "モナ", "申鶴", "エスコフィエ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00454")),
    plan(["スカーク", "行秋", "ロサリア", "ダリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00455")),
  ]),
  "genshin:スクロース": batch13Options("genshin", "スクロース", "https://game8.jp/genshin/352613", support, [
    plan(["マーヴィカ", "ベネット", "スクロース", "シトラリ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00456")),
    plan(["フリンズ", "アイノ", "スクロース", "イネファ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00457")),
    plan(["クレー", "フリーナ", "ベネット", "スクロース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00458")),
  ]),
  "zzz:プロメイア": batch13Options("zzz", "プロメイア", "https://game8.jp/zenless/760627", _content.localized("guide.legacy.parties_legacyCatalog.b00249"), [
    plan(["プロメイア", "南宮羽", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00459")),
    plan(["プロメイア", "ビビアン", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00460")),
    plan(["プロメイア", "パイパー", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00461")),
  ]),
  "zzz:ベン": batch13Options("zzz", "ベン", "https://game8.jp/zenless/607796", _content.localized("guide.legacy.parties_legacyCatalog.b00250"), [
    plan(["イヴリン", "クレタ", "ベン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00462")),
    plan(["アストラ", "クレタ", "ベン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00463")),
    plan(["プルクラ", "ベン", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00464")),
  ]),
  "zzz:ライカン": batch13Options("zzz", "ライカン", "https://game8.jp/zenless/607802", _content.localized("guide.legacy.parties_legacyCatalog.b00251"), [
    plan(["星見雅", "蒼角", "ライカン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00465")),
    plan(["ヒューゴ", "ライト", "ライカン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00466")),
    plan(["イドリー", "リュシア", "ライカン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00467")),
  ]),
  "zzz:リュシア": batch13Options("zzz", "リュシア", "https://game8.jp/zenless/712532", support, [
    plan(["儀玄", "橘福福", "リュシア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00468")),
    plan(["儀玄", "ダイアリン", "リュシア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00469")),
    plan(["狛野真斗", "潘引壺", "リュシア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00470")),
  ]),
  "zzz:儀玄": batch13Options("zzz", "儀玄", "https://game8.jp/zenless/681363", _content.localized("guide.legacy.parties_legacyCatalog.b00252"), [
    plan(["儀玄", "ダイアリン", "リュシア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00471")),
    plan(["儀玄", "アストラ", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00472")),
    plan(["儀玄", "潘引壺", "クレタ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00473")),
  ]),
  "zzz:橘福福": batch13Options("zzz", "橘福福", "https://game8.jp/zenless/676195", _content.localized("guide.legacy.parties_legacyCatalog.b00253"), [
    plan(["儀玄", "橘福福", "アストラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00474")),
    plan(["ヒューゴ", "橘福福", "ライト"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00475")),
    plan(["「11号」", "橘福福", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00476")),
  ]),
  "genshin:セトス": batch14Options("genshin", "セトス", "https://game8.jp/genshin/604468", mainDps, [
    plan(["セトス", "コロンビーナ", "イネファ", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00477")),
    plan(["セトス", "フリーナ", "ラウマ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00478")),
    plan(["セトス", "八重神子", "ナヒーダ", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00479")),
  ]),
  "genshin:セノ": batch14Options("genshin", "セノ", "https://game8.jp/genshin/464157", mainDps, [
    plan(["セノ", "ナヒーダ", "フリーナ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00480")),
    plan(["セノ", "夜蘭", "ナヒーダ", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00481")),
    plan(["セノ", "フィッシュル", "ナヒーダ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00482")),
  ]),
  "genshin:ダリア": batch14Options("genshin", "ダリア", "https://game8.jp/genshin/678676", _content.localized("guide.legacy.parties_legacyCatalog.b00254"), [
    plan(["スカーク", "フリーナ", "エスコフィエ", "ダリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00483")),
    plan(["放浪者", "ファルザン", "ベネット", "ダリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00484")),
    plan(["宵宮", "夜蘭", "ベネット", "ダリア"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00485")),
  ]),
  "genshin:タルタリヤ": batch14Options("genshin", "タルタリヤ", "https://game8.jp/genshin/358211", mainDps, [
    plan(["タルタリヤ", "香菱", "楓原万葉", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00486")),
    plan(["ヌヴィレット", "タルタリヤ", "楓原万葉", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00487")),
    plan(["タルタリヤ", "フィッシュル", "楓原万葉", "北斗"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00488")),
  ]),
  "genshin:チャスカ": batch14Options("genshin", "チャスカ", "https://game8.jp/genshin/624943", mainDps, [
    plan(["チャスカ", "マーヴィカ", "ベネット", "シトラリ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00489")),
    plan(["チャスカ", "コロンビーナ", "イネファ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00490")),
    plan(["チャスカ", "フリーナ", "マーヴィカ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00491")),
  ]),
  "genshin:ディオナ": batch14Options("genshin", "ディオナ", "https://game8.jp/genshin/358215", _content.localized("guide.legacy.parties_legacyCatalog.b00255"), [
    plan(["甘雨", "モナ", "ウェンティ", "ディオナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00492")),
    plan(["ヌヴィレット", "ナヒーダ", "楓原万葉", "ディオナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00493")),
    plan(["神里綾華", "楓原万葉", "申鶴", "ディオナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00494")),
  ]),
  "genshin:ディシア": batch14Options("genshin", "ディシア", "https://game8.jp/genshin/468760", _content.localized("guide.legacy.parties_legacyCatalog.b00256"), [
    plan(["キィニチ", "ディシア", "エミリエ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00495")),
    plan(["ムアラニ", "エミリエ", "ディシア", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00496")),
    plan(["ディシア", "雷電将軍", "シュヴルーズ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00497")),
  ]),
  "genshin:ティナリ": batch14Options("genshin", "ティナリ", "https://game8.jp/genshin/466622", mainDps, [
    plan(["ティナリ", "八重神子", "ナヒーダ", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00498")),
    plan(["ティナリ", "フィッシュル", "旅人（草）", "綺良々"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00499")),
  ]),
  "zzz:狛野真斗": batch14Options("zzz", "狛野真斗", "https://game8.jp/zenless/695655", _content.localized("guide.legacy.parties_legacyCatalog.b00257"), [
    plan(["狛野真斗", "リュシア", "橘福福"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00500")),
    plan(["狛野真斗", "ライト", "オルペウス&「鬼火」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00501")),
    plan(["狛野真斗", "潘引壺", "ルーシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00502")),
  ]),
  "zzz:朱鳶": batch14Options("zzz", "朱鳶", "https://game8.jp/zenless/609201", mainDps, [
    plan(["アストラ", "青衣", "朱鳶"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00503")),
    plan(["アンビー", "ニコ", "朱鳶"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00504")),
  ]),
  "zzz:照": batch14Options("zzz", "照", "https://game8.jp/zenless/682685", support, [
    plan(["照", "葉瞬光", "ダイアリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00505")),
    plan(["照", "カリン", "ライカン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00506")),
    plan(["照", "ピュロイス", "プルクラ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00507")),
  ]),
  "zzz:千夏": batch14Options("zzz", "千夏", "https://game8.jp/zenless/754094", support, [
    plan(["千夏", "アリア", "南宮羽"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00508")),
    plan(["千夏", "葉瞬光", "ダイアリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00509")),
    plan(["千夏", "ビビアン", "アリス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00510")),
  ]),
  "zzz:浅羽悠真": batch14Options("zzz", "浅羽悠真", "https://game8.jp/zenless/651182", mainDps, [
    plan(["浅羽悠真", "「シード」", "「トリガー」"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00511")),
    plan(["千夏", "青衣", "浅羽悠真"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00512")),
    plan(["浅羽悠真", "アンビー", "ニコ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00513")),
  ]),
  "zzz:南宮羽": batch14Options("zzz", "南宮羽", "https://game8.jp/zenless/758209", anomaly, [
    plan(["アリア", "南宮羽", "千夏"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00514")),
    plan(["星見雅", "南宮羽", "浮波柚葉"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00515")),
    plan(["南宮羽", "ルーシー", "パイパー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00516")),
  ]),
  "hsr:刃": batch14Options("hsr", "刃", "https://game8.jp/houkaistarrail/526502", mainDps, [
    plan(["刃", "サンデー", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00517")),
    plan(["鏡流", "刃", "トリビー", "ヒアンシー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00518")),
    plan(["刃", "ブローニャ", "ルアン・メェイ", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00519")),
  ]),
  "hsr:青雀": batch14Options("hsr", "青雀", "https://game8.jp/houkaistarrail/524679", mainDps, [
    plan(["青雀", "サフェル", "サンデー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00520")),
    plan(["青雀", "停雲", "記憶主人公", "リンクス"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00521")),
  ]),
  "hsr:雪衣": batch14Options("hsr", "雪衣", "https://game8.jp/houkaistarrail/573091", _content.localized("guide.legacy.parties_legacyCatalog.b00258"), [
    plan(["雪衣", "ルアン・メェイ", "帰忘の流離人", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00522")),
    plan(["雪衣", "三月なのか（巡狩）", "開拓者（調和）", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00523")),
  ]),
  "hsr:素裳": batch14Options("hsr", "素裳", "https://game8.jp/houkaistarrail/524676", mainDps, [
    plan(["素裳", "ロビン", "サンデー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00524")),
    plan(["素裳", "停雲", "記憶主人公", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00525")),
  ]),
  "hsr:丹恒": batch14Options("hsr", "丹恒", "https://game8.jp/houkaistarrail/524694", mainDps, [
    plan(["丹恒", "ロビン", "サンデー", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00526")),
    plan(["丹恒", "停雲", "記憶主人公", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00527")),
  ]),
  "hsr:丹恒・騰荒": batch14Options("hsr", "丹恒・騰荒", "https://game8.jp/houkaistarrail/709109", _content.localized("guide.legacy.parties_legacyCatalog.b00259"), [
    plan(["ファイノン", "サンデー", "ケリュドラ", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00528")),
    plan(["姫子・旅立ち", "サンデー", "花火", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00529")),
    plan(["アーチャー", "ルアン・メェイ", "記憶主人公", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00530")),
  ]),
  // 第16バッチ：HSR 4名・原神 16名の実名推奨PT。
"genshin:バーバラ": batch16Options("genshin", "バーバラ", "https://game8.jp/genshin/561391", _content.localized("guide.legacy.parties_legacyCatalog.b00260"), [
    plan(["バーバラ", "ニィロウ", "ナヒーダ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00531")),
    plan(["バーバラ", "ナヒーダ", "行秋", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00532")),
    plan(["バーバラ", "神里綾華", "楓原万葉", "申鶴"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00533")),
  ]),

  "genshin:ファルザン": batch16Options("genshin", "ファルザン", "https://game8.jp/genshin/560292", _content.localized("guide.legacy.parties_legacyCatalog.b00261"), [
    plan(["ファルザン", "放浪者", "ベネット", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00534")),
    plan(["ファルザン", "魈", "アルベド", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00535")),
    plan(["ファルザン", "鹿野院平蔵", "香菱", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00536")),
  ]),

  "genshin:フレミネ": batch16Options("genshin", "フレミネ", "https://game8.jp/genshin/560152", _content.localized("guide.legacy.parties_legacyCatalog.b00262"), [
    plan(["フレミネ", "フィッシュル", "行秋", "ミカ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00537")),
    plan(["フレミネ", "行秋", "ナヒーダ", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00538")),
    plan(["フレミネ", "楓原万葉", "申鶴", "珊瑚宮心海"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00539")),
  ]),

  "genshin:ミカ": batch16Options("genshin", "ミカ", "https://game8.jp/genshin/560161", _content.localized("guide.legacy.parties_legacyCatalog.b00263"), [
    plan(["ミカ", "エウルア", "雷電将軍", "夜蘭"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00540")),
    plan(["ミカ", "フレミネ", "フィッシュル", "行秋"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00541")),
    plan(["ミカ", "放浪者", "ファルザン", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00542")),
  ]),

  "genshin:モナ": batch16Options("genshin", "モナ", "https://game8.jp/genshin/559926", _content.localized("guide.legacy.parties_legacyCatalog.b00264"), [
    plan(["モナ", "スカーク", "フリーナ", "エスコフィエ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00543")),
    plan(["モナ", "ドゥリン", "シロネン", "スクロース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00544")),
    plan(["モナ", "アイノ", "イネファ", "スクロース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00545")),
  ]),

  "genshin:ヨォーヨ": batch16Options("genshin", "ヨォーヨ", "https://game8.jp/genshin/560288", _content.localized("guide.legacy.parties_legacyCatalog.b00265"), [
    plan(["ヨォーヨ", "珊瑚宮心海", "ニィロウ", "ラウマ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00546")),
    plan(["ヨォーヨ", "ヌヴィレット", "イネファ", "ナヒーダ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00547")),
    plan(["ヨォーヨ", "クロリンデ", "フィッシュル", "スクロース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00548")),
  ]),

  "genshin:ラウマ": batch16Options("genshin", "ラウマ", "https://game8.jp/genshin/720295", _content.localized("guide.legacy.parties_legacyCatalog.b00266"), [
    plan(["ラウマ", "ネフェル", "コロンビーナ", "ニィロウ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00549")),
    plan(["ラウマ", "珊瑚宮心海", "ナヒーダ", "ニィロウ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00550")),
    plan(["ラウマ", "ヌヴィレット", "コロンビーナ", "イネファ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00551")),
  ]),

  "genshin:リサ": batch16Options("genshin", "リサ", "https://game8.jp/genshin/561393", _content.localized("guide.legacy.parties_legacyCatalog.b00267"), [
    plan(["リサ", "アルハイゼン", "ナヒーダ", "久岐忍"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00552")),
    plan(["リサ", "刻晴", "ナヒーダ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00553")),
    plan(["リサ", "フィッシュル", "旅人（草）", "ディオナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00554")),
  ]),

  "genshin:リネ": batch16Options("genshin", "リネ", "https://game8.jp/genshin/558841", _content.localized("guide.legacy.parties_legacyCatalog.b00268"), [
    plan(["リネ", "香菱", "楓原万葉", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00555")),
    plan(["リネ", "フリーナ", "楓原万葉", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00556")),
    plan(["リネ", "ディシア", "鍾離", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00557")),
  ]),

  "genshin:リネット": batch16Options("genshin", "リネット", "https://game8.jp/genshin/560155", _content.localized("guide.legacy.parties_legacyCatalog.b00269"), [
    plan(["リネット", "タルタリヤ", "香菱", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00558")),
    plan(["リネット", "ヌヴィレット", "タルタリヤ", "白朮"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00559")),
    plan(["リネット", "神里綾華", "申鶴", "珊瑚宮心海"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00560")),
  ]),

  "genshin:レイラ": batch16Options("genshin", "レイラ", "https://game8.jp/genshin/483607", _content.localized("guide.legacy.parties_legacyCatalog.b00270"), [
    plan(["レイラ", "胡桃", "行秋", "夜蘭"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00561")),
    plan(["レイラ", "ヌヴィレット", "ジン", "フリーナ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00562")),
    plan(["レイラ", "甘雨", "モナ", "ウェンティ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00563")),
  ]),

  "genshin:マーヴィカ": batch16Options("genshin", "マーヴィカ", "https://game8.jp/genshin/662568", _content.localized("guide.legacy.parties_legacyCatalog.b00271"), [
    plan(["マーヴィカ", "フリーナ", "楓原万葉", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00564")),
    plan(["マーヴィカ", "シトラリ", "楓原万葉", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00565")),
    plan(["マーヴィカ", "ムアラニ", "楓原万葉", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00566")),
  ]),

  "genshin:ムアラニ": batch16Options("genshin", "ムアラニ", "https://game8.jp/genshin/636238", _content.localized("guide.legacy.parties_legacyCatalog.b00272"), [
    plan(["ムアラニ", "エミリエ", "ディシア", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00567")),
    plan(["ムアラニ", "フリーナ", "楓原万葉", "シグウィン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00568")),
    plan(["ムアラニ", "ディシア", "キャンディス", "鍾離"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00569")),
  ]),

  "genshin:フリンズ": batch16Options("genshin", "フリンズ", "https://game8.jp/genshin/724086", _content.localized("guide.legacy.parties_legacyCatalog.b00273"), [
    plan(["フリンズ", "コロンビーナ", "スクロース", "イネファ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00570")),
    plan(["フリンズ", "フィッシュル", "コロンビーナ", "スクロース"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00571")),
  ]),

  "genshin:ヤフォダ": batch16Options("genshin", "ヤフォダ", "https://game8.jp/genshin/748057", _content.localized("guide.legacy.parties_legacyCatalog.b00274"), [
    plan(["ヤフォダ", "フリンズ", "コロンビーナ", "イネファ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00572")),
    plan(["ヤフォダ", "ネフェル", "コロンビーナ", "ラウマ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00573")),
  ]),

  "genshin:リオセスリ": batch16Options("genshin", "リオセスリ", "https://game8.jp/genshin/539460", _content.localized("guide.legacy.parties_legacyCatalog.b00275"), [
    plan(["リオセスリ", "マーヴィカ", "エミリエ", "ベネット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00574")),
    plan(["リオセスリ", "フリーナ", "楓原万葉", "シャルロット"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00575")),
    plan(["リオセスリ", "申鶴", "楓原万葉", "シロネン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00576")),
  ]),


  "hsr:乱破": batch16Options("hsr", "乱破", "https://game8.jp/houkaistarrail/635340", _content.localized("guide.legacy.parties_legacyCatalog.b00276"), [
    plan(["乱破", "帰忘の流離人", "ダリア", "霊砂"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00577")),
    plan(["乱破", "ペラ", "開拓者（調和）", "ギャラガー"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00578")),
  ]),

  "hsr:椒丘": batch16Options("hsr", "椒丘", "https://game8.jp/houkaistarrail/613886", _content.localized("guide.legacy.parties_legacyCatalog.b00277"), [
    plan(["椒丘", "黄泉", "千冶・刃", "アベンチュリン"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00579")),
    plan(["椒丘", "セイバー", "ギルガメッシュ", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00580")),
  ]),

  "hsr:爻光": batch16Options("hsr", "爻光", "https://game8.jp/houkaistarrail/754019", _content.localized("guide.legacy.parties_legacyCatalog.b00278"), [
    plan(["爻光", "火花", "銀狼Lv.999", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00581")),
    plan(["爻光", "緋英", "開拓者（愉悦）", "フォフォ"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00582")),
    plan(["爻光", "アーチャー", "花火", "丹恒・騰荒"], ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00583")),
  ]),
  // 第15バッチ（2026-09-05）。旧 server/batch15Parties.ts からリテラルのまま移設し、共通出典だけ付与した（設計書 D5）。
  "hsr:御空": [{"id":"batch15-hsr-御空-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00279"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00280"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00281")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00282"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00283")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00284"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00285")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00286"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00287")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00288")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00289"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00290"),"sourceUrl":"https://game8.jp/houkaistarrail/526440","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00291"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00292"),"status":"crossChecked"}]},{"id":"batch15-hsr-御空-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00293"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00294"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00295")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00296"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00297")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00298"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00299")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00300"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00301")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00302")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00303"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00304"),"sourceUrl":"https://game8.jp/houkaistarrail/526440","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00305"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00306"),"status":"crossChecked"}]},{"id":"batch15-hsr-御空-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00307"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00308"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00309")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00310"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00311")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00312"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00313")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00314"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00315")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00316")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00317"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00318"),"sourceUrl":"https://game8.jp/houkaistarrail/526440","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00319"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00320"),"status":"crossChecked"}]}],
  "hsr:三月なのか": [{"id":"batch15-hsr-三月なのか-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00321"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00322"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00323")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00324"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00325")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00326"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00327")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00328"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00329")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00330")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00331"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00332"),"sourceUrl":"https://game8.jp/houkaistarrail/524695","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00333"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00334"),"status":"crossChecked"}]},{"id":"batch15-hsr-三月なのか-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00335"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00336"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00337")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00338"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00339")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00340"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00341")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00342"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00343")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00344")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00345"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00346"),"sourceUrl":"https://game8.jp/houkaistarrail/524695","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00347"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00348"),"status":"crossChecked"}]},{"id":"batch15-hsr-三月なのか-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00349"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00350"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00351")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00352"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00353")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00354"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00355")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00356"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00357")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00358")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00359"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00360"),"sourceUrl":"https://game8.jp/houkaistarrail/524695","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00361"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00362"),"status":"crossChecked"}]}],
  "hsr:長夜月": [{"id":"batch15-hsr-長夜月-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00363"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00364"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00365")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00366"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00367")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00368"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00369")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00370"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00371")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00372")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00373"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00374"),"sourceUrl":"https://game8.jp/houkaistarrail/708951","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00375"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00376"),"status":"crossChecked"}]},{"id":"batch15-hsr-長夜月-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00377"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00378"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00379")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00380"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00381")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00382"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00383")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00384"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00385")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00386")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00387"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00388"),"sourceUrl":"https://game8.jp/houkaistarrail/708951","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00389"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00390"),"status":"crossChecked"}]},{"id":"batch15-hsr-長夜月-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00391"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00392"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00393")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00394"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00395")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00396"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00397")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00398"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00399")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00400")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00401"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00402"),"sourceUrl":"https://game8.jp/houkaistarrail/708951","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00403"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00404"),"status":"crossChecked"}]}],
  "hsr:停雲": [{"id":"batch15-hsr-停雲-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00405"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00406"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00407")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00408"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00409")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00410"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00411")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00412"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00413")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00414")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00415"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00416"),"sourceUrl":"https://game8.jp/houkaistarrail/524678","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00417"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00418"),"status":"crossChecked"}]},{"id":"batch15-hsr-停雲-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00419"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00420"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00421")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00422"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00423")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00424"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00425")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00426"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00427")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00428")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00429"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00430"),"sourceUrl":"https://game8.jp/houkaistarrail/524678","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00431"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00432"),"status":"crossChecked"}]},{"id":"batch15-hsr-停雲-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00433"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00434"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00435")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00436"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00437")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00438"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00439")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00440"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00441")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00442")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00443"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00444"),"sourceUrl":"https://game8.jp/houkaistarrail/524678","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00445"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00446"),"status":"crossChecked"}]}],
  "hsr:白露": [{"id":"batch15-hsr-白露-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00447"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00448"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00449")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00450"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00451")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00452"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00453")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00454"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00455")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00456")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00457"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00458"),"sourceUrl":"https://game8.jp/houkaistarrail/523995","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00459"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00460"),"status":"crossChecked"}]},{"id":"batch15-hsr-白露-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00461"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00462"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00463")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00464"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00465")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00466"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00467")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00468"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00469")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00470")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00471"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00472"),"sourceUrl":"https://game8.jp/houkaistarrail/523995","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00473"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00474"),"status":"crossChecked"}]},{"id":"batch15-hsr-白露-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00475"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00476"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00477")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00478"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00479")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00480"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00481")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00482"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00483")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00484")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00485"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00486"),"sourceUrl":"https://game8.jp/houkaistarrail/523995","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00487"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00488"),"status":"crossChecked"}]}],
  "hsr:彦卿": [{"id":"batch15-hsr-彦卿-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00489"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00490"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00491")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00492"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00493")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00494"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00495")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00496"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00497")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00498")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00499"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00500"),"sourceUrl":"https://game8.jp/houkaistarrail/524675","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00501"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00502"),"status":"crossChecked"}]},{"id":"batch15-hsr-彦卿-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00503"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00504"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00505")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00506"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00507")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00508"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00509")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00510"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00511")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00512")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00513"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00514"),"sourceUrl":"https://game8.jp/houkaistarrail/524675","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00515"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00516"),"status":"crossChecked"}]},{"id":"batch15-hsr-彦卿-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00517"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00518"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00519")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00520"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00521")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00522"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00523")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00524"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00525")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00526")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00527"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00528"),"sourceUrl":"https://game8.jp/houkaistarrail/524675","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00529"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00530"),"status":"crossChecked"}]}],
  "hsr:姫子": [{"id":"batch15-hsr-姫子-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00531"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00532"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00533")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00534"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00535")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00536"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00537")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00538"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00539")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00540")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00541"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00542"),"sourceUrl":"https://game8.jp/houkaistarrail/524693","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00543"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00544"),"status":"crossChecked"}]},{"id":"batch15-hsr-姫子-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00545"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00546"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00547")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00548"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00549")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00550"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00551")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00552"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00553")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00554")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00555"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00556"),"sourceUrl":"https://game8.jp/houkaistarrail/524693","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00557"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00558"),"status":"crossChecked"}]},{"id":"batch15-hsr-姫子-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00559"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00560"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00561")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00562"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00563")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00564"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00565")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00566"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00567")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00568")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00569"),"gameVersion":"4.5","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00570"),"sourceUrl":"https://game8.jp/houkaistarrail/524693","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00571"),"url":"https://www.reddit.com/r/HonkaiStarRail/comments/1vmdw4d/here_is_the_strongest_teams_in_version_44_by/","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00572"),"status":"crossChecked"}]}],
  "genshin:ディルック": [{"id":"batch15-genshin-ディルック-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00573"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00574"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00575")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00576"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00577")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00578"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00579")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00580"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00581")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00582")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00583"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00584"),"sourceUrl":"https://game8.jp/genshin/352605","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00585"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00586"),"status":"crossChecked"}]},{"id":"batch15-genshin-ディルック-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00587"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00588"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00589")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00590"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00591")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00592"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00593")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00594"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00595")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00596")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00597"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00598"),"sourceUrl":"https://game8.jp/genshin/352605","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00599"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00600"),"status":"crossChecked"}]},{"id":"batch15-genshin-ディルック-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00601"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00602"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00603")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00604"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00605")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00606"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00607")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00608"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00609")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00610")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00611"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00612"),"sourceUrl":"https://game8.jp/genshin/352605","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00613"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00614"),"status":"crossChecked"}]}],
  "genshin:ドゥリン": [{"id":"batch15-genshin-ドゥリン-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00615"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00616"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00617")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00618"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00619")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00620"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00621")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00622"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00623")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00624")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00625"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00626"),"sourceUrl":"https://game8.jp/genshin/707122","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00627"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00628"),"status":"crossChecked"}]},{"id":"batch15-genshin-ドゥリン-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00629"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00630"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00631")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00632"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00633")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00634"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00635")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00636"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00637")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00638")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00639"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00640"),"sourceUrl":"https://game8.jp/genshin/707122","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00641"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00642"),"status":"crossChecked"}]},{"id":"batch15-genshin-ドゥリン-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00643"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00644"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00645")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00646"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00647")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00648"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00649")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00650"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00651")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00652")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00653"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00654"),"sourceUrl":"https://game8.jp/genshin/707122","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00655"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00656"),"status":"crossChecked"}]}],
  "genshin:トーマ": [{"id":"batch15-genshin-トーマ-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00657"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00658"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00659")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00660"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00661")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00662"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00663")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00664"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00665")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00666")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00667"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00668"),"sourceUrl":"https://game8.jp/genshin/395527","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00669"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00670"),"status":"crossChecked"}]},{"id":"batch15-genshin-トーマ-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00671"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00672"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00673")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00674"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00675")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00676"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00677")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00678"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00679")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00680")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00681"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00682"),"sourceUrl":"https://game8.jp/genshin/395527","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00683"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00684"),"status":"crossChecked"}]},{"id":"batch15-genshin-トーマ-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00685"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00686"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00687")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00688"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00689")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00690"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00691")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00692"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00693")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00694")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00695"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00696"),"sourceUrl":"https://game8.jp/genshin/395527","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00697"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00698"),"status":"crossChecked"}]}],
  "genshin:ドリー": [{"id":"batch15-genshin-ドリー-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00699"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00700"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00701")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00702"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00703")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00704"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00705")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00706"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00707")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00708")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00709"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00710"),"sourceUrl":"https://game8.jp/genshin/466770","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00711"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00712"),"status":"crossChecked"}]},{"id":"batch15-genshin-ドリー-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00713"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00714"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00715")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00716"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00717")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00718"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00719")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00720"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00721")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00722")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00723"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00724"),"sourceUrl":"https://game8.jp/genshin/466770","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00725"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00726"),"status":"crossChecked"}]},{"id":"batch15-genshin-ドリー-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00727"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00728"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00729")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00730"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00731")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00732"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00733")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00734"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00735")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00736")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00737"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00738"),"sourceUrl":"https://game8.jp/genshin/466770","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00739"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00740"),"status":"crossChecked"}]}],
  "genshin:ナヴィア": [{"id":"batch15-genshin-ナヴィア-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00741"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00742"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00743")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00744"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00745")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00746"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00747")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00748"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00749")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00750")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00751"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00752"),"sourceUrl":"https://game8.jp/genshin/539458","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00753"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00754"),"status":"crossChecked"}]},{"id":"batch15-genshin-ナヴィア-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00755"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00756"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00757")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00758"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00759")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00760"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00761")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00762"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00763")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00764")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00765"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00766"),"sourceUrl":"https://game8.jp/genshin/539458","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00767"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00768"),"status":"crossChecked"}]},{"id":"batch15-genshin-ナヴィア-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00769"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00770"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00771")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00772"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00773")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00774"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00775")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00776"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00777")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00778")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00779"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00780"),"sourceUrl":"https://game8.jp/genshin/539458","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00781"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00782"),"status":"crossChecked"}]}],
  "genshin:ニィロウ": [{"id":"batch15-genshin-ニィロウ-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00783"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00784"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00785")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00786"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00787")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00788"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00789")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00790"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00791")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00792")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00793"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00794"),"sourceUrl":"https://game8.jp/genshin/468761","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00795"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00796"),"status":"crossChecked"}]},{"id":"batch15-genshin-ニィロウ-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00797"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00798"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00799")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00800"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00801")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00802"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00803")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00804"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00805")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00806")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00807"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00808"),"sourceUrl":"https://game8.jp/genshin/468761","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00809"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00810"),"status":"crossChecked"}]},{"id":"batch15-genshin-ニィロウ-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00811"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00812"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00813")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00814"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00815")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00816"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00817")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00818"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00819")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00820")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00821"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00822"),"sourceUrl":"https://game8.jp/genshin/468761","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00823"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00824"),"status":"crossChecked"}]}],
  "genshin:ネフェル": [{"id":"batch15-genshin-ネフェル-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00825"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00826"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00827")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00828"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00829")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00830"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00831")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00832"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00833")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00834")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00835"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00836"),"sourceUrl":"https://game8.jp/genshin/707118","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00837"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00838"),"status":"crossChecked"}]},{"id":"batch15-genshin-ネフェル-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00839"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00840"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00841")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00842"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00843")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00844"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00845")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00846"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00847")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00848")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00849"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00850"),"sourceUrl":"https://game8.jp/genshin/707118","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00851"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00852"),"status":"crossChecked"}]},{"id":"batch15-genshin-ネフェル-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00853"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00854"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00855")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00856"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00857")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00858"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00859")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00860"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00861")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00862")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00863"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00864"),"sourceUrl":"https://game8.jp/genshin/707118","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00865"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00866"),"status":"crossChecked"}]}],
  "genshin:ノエル": [{"id":"batch15-genshin-ノエル-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00867"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00868"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00869")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00870"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00871")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00872"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00873")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00874"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00875")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00876")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00877"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00878"),"sourceUrl":"https://game8.jp/genshin/352610","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00879"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00880"),"status":"crossChecked"}]},{"id":"batch15-genshin-ノエル-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00881"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00882"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00883")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00884"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00885")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00886"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00887")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00888"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00889")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00890")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00891"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00892"),"sourceUrl":"https://game8.jp/genshin/352610","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00893"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00894"),"status":"crossChecked"}]},{"id":"batch15-genshin-ノエル-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00895"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00896"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00897")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00898"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00899")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00900"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00901")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00902"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00903")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00904")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00905"),"gameVersion":"7.0","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00906"),"sourceUrl":"https://game8.jp/genshin/352610","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00907"),"url":"https://x.com/G8_Genshin","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00908"),"status":"crossChecked"}]}],
  "zzz:猫又": [{"id":"batch15-zzz-猫又-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00909"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00910"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00911")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00912"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00913")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00914"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00915")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00916")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00917"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00918"),"sourceUrl":"https://game8.jp/zenless/607805","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00919"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00920"),"status":"crossChecked"}]},{"id":"batch15-zzz-猫又-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00921"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00922"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00923")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00924"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00925")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00926"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00927")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00928")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00929"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00930"),"sourceUrl":"https://game8.jp/zenless/607805","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00931"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00932"),"status":"crossChecked"}]},{"id":"batch15-zzz-猫又-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00933"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00934"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00935")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00936"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00937")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00938"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00939")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00940")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00941"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00942"),"sourceUrl":"https://game8.jp/zenless/607805","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00943"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00944"),"status":"crossChecked"}]}],
  "zzz:盤岳": [{"id":"batch15-zzz-盤岳-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00945"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00946"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00947")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00948"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00949")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00950"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00951")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00952")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00953"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00954"),"sourceUrl":"https://game8.jp/zenless/723895","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00955"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00956"),"status":"crossChecked"}]},{"id":"batch15-zzz-盤岳-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00957"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00958"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00959")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00960"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00961")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00962"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00963")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00964")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00965"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00966"),"sourceUrl":"https://game8.jp/zenless/723895","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00967"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00968"),"status":"crossChecked"}]},{"id":"batch15-zzz-盤岳-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00969"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00970"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00971")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00972"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00973")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00974"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00975")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00976")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00977"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00978"),"sourceUrl":"https://game8.jp/zenless/723895","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00979"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00980"),"status":"crossChecked"}]}],
  "zzz:葉瞬光": [{"id":"batch15-zzz-葉瞬光-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00981"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00982"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00983")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00984"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00985")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00986"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00987")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b00988")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b00989"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b00990"),"sourceUrl":"https://game8.jp/zenless/682698","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b00991"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b00992"),"status":"crossChecked"}]},{"id":"batch15-zzz-葉瞬光-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b00993"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00994"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00995")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00996"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00997")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b00998"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b00999")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b01000")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b01001"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b01002"),"sourceUrl":"https://game8.jp/zenless/682698","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b01003"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b01004"),"status":"crossChecked"}]},{"id":"batch15-zzz-葉瞬光-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b01005"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01006"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01007")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01008"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01009")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01010"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01011")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b01012")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b01013"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b01014"),"sourceUrl":"https://game8.jp/zenless/682698","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b01015"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b01016"),"status":"crossChecked"}]}],
  "zzz:潘引壺": [{"id":"batch15-zzz-潘引壺-1","rank":1,"title":_content.localized("guide.legacy.parties_legacyCatalog.b01017"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01018"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01019")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01020"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01021")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01022"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01023")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b01024")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b01025"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b01026"),"sourceUrl":"https://game8.jp/zenless/682680","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b01027"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b01028"),"status":"crossChecked"}]},{"id":"batch15-zzz-潘引壺-2","rank":2,"title":_content.localized("guide.legacy.parties_legacyCatalog.b01029"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01030"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01031")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01032"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01033")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01034"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01035")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b01036")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b01037"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b01038"),"sourceUrl":"https://game8.jp/zenless/682680","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b01039"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b01040"),"status":"crossChecked"}]},{"id":"batch15-zzz-潘引壺-3","rank":3,"title":_content.localized("guide.legacy.parties_legacyCatalog.b01041"),"members":[{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01042"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01043")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01044"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01045")},{"name":_content.localized("guide.legacy.parties_legacyCatalog.b01046"),"role":_content.localized("guide.legacy.parties_legacyCatalog.b01047")}],"synergy":[_content.localized("guide.legacy.parties_legacyCatalog.b01048")],"targetChanges":[],"targetSummary":_content.localized("guide.legacy.parties_legacyCatalog.b01049"),"gameVersion":"3.1","dataAsOf":"2026-09-05","updatedAt":"2026-09-05","sourceLabel":_content.localized("guide.legacy.parties_legacyCatalog.b01050"),"sourceUrl":"https://game8.jp/zenless/682680","communitySources":[{"label":_content.localized("guide.legacy.parties_legacyCatalog.b01051"),"url":"https://x.com/Zenless_Game8","checkedAt":"2026-08-25","note":_content.localized("guide.legacy.parties_legacyCatalog.b01052"),"status":"crossChecked"}]}],
};

type GenericProfile = "crit" | "dot" | "break" | "support" | "sustain" | "tank" | "hp" | "def" | "em" | "anomaly" | "stun" | "rupture";

const ownMember = (name: string, roleJa: string, roleEn: string, roleZh: string) => member(name, name, name, roleJa, roleEn, roleZh);
const roleMember = (name: string, roleJa: string, roleEn: string, roleZh: string) => member(name, name, name, roleJa, roleEn, roleZh);

function genericProfileFor(game: PartyGameId, name: string): GenericProfile {
  if (game === "hsr") return hsrProfileIdFor(name, HSR_RUNTIME_PATHS[name] ?? "");
  if (game === "genshin") return genshinProfileIdFor(name);
  return zzzProfileIdFor(ZZZ_RUNTIME_PROFESSIONS[name] ?? "Attack");
}

function genericTargetChanges(game: PartyGameId, profile: GenericProfile): PartyTargetChange[] {
  if (game === "hsr" && profile === "break") return [change("speed", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00584"), "", 160, 150, 145, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00585"))];
  if (game === "hsr" && profile === "support") return [change("speed", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00586"), "", 161, 145, 134, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00587"))];
  if (game === "genshin" && profile === "em") return [change("elementalMastery", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00588"), "", 1000, 800, 650, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00589"))];
  if (game === "genshin" && profile === "support") return [change("energyRecharge", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00590"), "%", 250, 200, 170, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00591"))];
  if (game === "zzz" && profile === "anomaly") return [change("anomalyMastery", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00592"), "", 420, 360, 300, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00593"))];
  if (game === "zzz" && profile === "stun") return [change("impact", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00594"), "", 190, 175, 160, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00595"))];
  return [];
}

function genericMembers(game: PartyGameId, name: string, profile: GenericProfile, rank: 1 | 2 | 3): PartyMember[] {
  if (game === "hsr") {
    if (profile === "break") return rank === 1 ? [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00596")), roleMember("ルアン・メェイ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00597")), roleMember("開拓者（調和）", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00598")), roleMember("霊砂", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00599"))] : rank === 2 ? [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00600")), roleMember("帰忘の流離人", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00601")), roleMember("開拓者（調和）", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00602")), roleMember("ギャラガー", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00603"))] : [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00604")), roleMember("アスター", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00605")), roleMember("開拓者（調和）", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00606")), roleMember("ギャラガー", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00607"))];
    if (profile === "dot") return rank === 1 ? [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00608")), roleMember("カフカ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00609")), roleMember("ブラックスワン", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00610")), roleMember("フォフォ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00611"))] : [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00612")), roleMember("サンポ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00613")), roleMember("ペラ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00614")), roleMember("ギャラガー", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00615"))];
    if (profile === "support" || profile === "sustain" || profile === "tank") return [profile === "sustain" || profile === "tank" ? ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00616")) : ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00617")), roleMember("アグライア", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00618")), roleMember("ロビン", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00619")), roleMember("トリビー", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00620"))];
    return rank === 1 ? [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00621")), roleMember("ロビン", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00622")), roleMember("トリビー", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00623")), roleMember("アベンチュリン", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00624"))] : [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00625")), roleMember("花火", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00626")), roleMember("ペラ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00627")), roleMember("リンクス", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00628"))];
  }
  if (game === "genshin") {
    if (profile === "em") return [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00629")), roleMember("ナヒーダ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00630")), roleMember("行秋", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00631")), roleMember("久岐忍", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00632"))];
    if (profile === "support" || profile === "sustain") return [profile === "sustain" ? ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00633")) : ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00634")), roleMember("アルレッキーノ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00635")), roleMember("楓原万葉", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00636")), roleMember("鍾離", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00637"))];
    if (profile === "def") return [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00638")), roleMember("ゴロー", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00639")), roleMember("フリーナ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00640")), roleMember("鍾離", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00641"))];
    if (profile === "hp") return [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00642")), roleMember("フリーナ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00643")), roleMember("楓原万葉", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00644")), roleMember("白朮", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00645"))];
    return rank === 1 ? [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00646")), roleMember("フリーナ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00647")), roleMember("楓原万葉", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00648")), roleMember("ベネット", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00649"))] : [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00650")), roleMember("行秋", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00651")), roleMember("フィッシュル", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00652")), roleMember("鍾離", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00653"))];
  }
  if (profile === "anomaly") return [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00654")), roleMember("浮波柚葉", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00655")), roleMember("ビビアン", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00656"))];
  if (profile === "stun") return [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00657")), roleMember("エレン", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00658")), roleMember("蒼角", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00659"))];
  if (profile === "support" || profile === "tank") return [profile === "tank" ? ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00660")) : ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00661")), roleMember("星見雅", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00662")), roleMember("月城柳", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00663"))];
  if (profile === "rupture") return [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00664")), roleMember("橘福福", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00665")), roleMember("リュシア", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00666"))];
  return [ownMember(name, ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00667")), roleMember("ライト", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00668")), roleMember("アストラ", ..._helperContent.triple("guide.legacy.parties_legacyCatalog_helpers.b00669"))];
}

function genericOptionsFor(game: PartyGameId, name: string): PartyRecommendation[] {
  const profile = genericProfileFor(game, name);
  const titles = [_content.localized("guide.legacy.parties_legacyCatalog.b01053"), _content.localized("guide.legacy.parties_legacyCatalog.b01054"), _content.localized("guide.legacy.parties_legacyCatalog.b01055")];
  const summary = _partyHelper.localized("guide.legacy.parties_legacyCatalog_templates.b00002",{v0:name});
  return ([1, 2, 3] as const).map((rank) => option(game, {
    id: `generated-${game}-${name}-${rank}`,
    rank,
    title: titles[rank - 1],
    members: genericMembers(game, name, profile, rank),
    synergy: [_partyHelper.localized("guide.legacy.parties_legacyCatalog_templates.b00003",{v0:name})],
    targetChanges: rank === 1 ? genericTargetChanges(game, profile) : [],
    targetSummary: summary,
  }));
}

/** 現行の優先順（第17バッチ → 手動精査表 → 代表6名表）で、そのキャラの旧形式の案を返す。無ければ undefined。 */
export function legacyOptionsFor(game: PartyGameId, name: string): PartyRecommendation[] | undefined {
  if (game === "genshin") {
    const curated = batch17PartyFor(name);
    if (curated) return curated.options;
  }
  const key = `${game}:${name}`;
  return MANUALLY_CURATED_HIGH_USAGE_CATALOG[key] ?? PARTY_CATALOG[key];
}

/** テスト用。旧データが持つキー（すべてカタログ内であることを検査する）。 */
export const LEGACY_PARTY_KEYS: readonly string[] = [...new Set([...Object.keys(MANUALLY_CURATED_HIGH_USAGE_CATALOG), ...Object.keys(PARTY_CATALOG)])];

export { genericOptionsFor };
