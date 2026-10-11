import { createLegacyTexts } from "../content/legacyTexts";
import { sources as _sources } from "../../content/ja/guides/parties_sharedTeams";
import { records as _en } from "../../content/translations/en/parties_sharedTeams";
import { records as _zh } from "../../content/translations/zh-CN/parties_sharedTeams";
const _content = createLegacyTexts(_sources, _en, _zh);
import { BATCH27_TEAMS } from "./batch27Teams";
import { t, member } from "./text";
import { BATCH26_TEAMS } from "./batch26Teams";
import { BATCH25_TEAMS } from "./batch25Teams";
import { BATCH24_TEAMS } from "./batch24Teams";
import type { LocalizedText, PartyMember, Team } from "./types";

// 第23バッチ。役割・版・出典を明示し、共通データセットの旧日付やSNS参照を持ち込まない。
function batch23Team(origin: string, originOrder: 1 | 2, title: LocalizedText, members: PartyMember[], synergy: LocalizedText, sourceUrl: string): Team {
  return {
    id: `curated-genshin-${origin}-${originOrder}`, game: "genshin", origin, originOrder, shared: true, batch: 23, title, members, synergy: [synergy],
    targetSummary: _content.localized("guide.legacy.parties_sharedTeams.b00001"),
    gameVersion: "7.1", dataAsOf: "2026-09-29", updatedAt: "2026-10-01",
    sourceLabel: _content.localized("guide.legacy.parties_sharedTeams.b00002"),
    sourceUrl, communitySources: [{
      label: _content.localized("guide.legacy.parties_sharedTeams.b00003"),
      url: "https://prtimes.jp/main/html/rd/p/000000449.000096124.html", checkedAt: "2026-10-01", status: "crossChecked",
      note: _content.localized("guide.legacy.parties_sharedTeams.b00004"),
    }],
  };
}
const vesnaMember = () => member(..._content.triple("guide.legacy.parties_sharedTeams.b00005"), ..._content.triple("guide.legacy.parties_sharedTeams.b00006"));
const vodyanitsaMember = () => member(..._content.triple("guide.legacy.parties_sharedTeams.b00007"), ..._content.triple("guide.legacy.parties_sharedTeams.b00008"));
const odetteMember = () => member(..._content.triple("guide.legacy.parties_sharedTeams.b00009"), ..._content.triple("guide.legacy.parties_sharedTeams.b00010"));
const faruzanMember = () => member(..._content.triple("guide.legacy.parties_sharedTeams.b00011"), ..._content.triple("guide.legacy.parties_sharedTeams.b00012"));
const stellarSynergy = _content.localized("guide.legacy.parties_sharedTeams.b00013");

/** 他キャラから参照できる編成の正本（D4）。第24バッチ以降の編成はすべてここへ書く。 */
export const SHARED_TEAMS: Team[] = [
  ...BATCH27_TEAMS,
  ...BATCH24_TEAMS,
  ...BATCH25_TEAMS,
  ...BATCH26_TEAMS,
  batch23Team("ヴェスナ", 1, _content.localized("guide.legacy.parties_sharedTeams.b00014"), [vesnaMember(), odetteMember(), faruzanMember(), vodyanitsaMember()], stellarSynergy, "https://game8.jp/genshin/817237"),
  batch23Team("ヴェスナ", 2, _content.localized("guide.legacy.parties_sharedTeams.b00015"), [vesnaMember(), odetteMember(), faruzanMember(), member(..._content.triple("guide.legacy.parties_sharedTeams.b00016"), ..._content.triple("guide.legacy.parties_sharedTeams.b00017"))], _content.localized("guide.legacy.parties_sharedTeams.b00018"), "https://game8.jp/genshin/817237"),
  batch23Team("ヴォジャニーツァ", 1, _content.localized("guide.legacy.parties_sharedTeams.b00019"), [vodyanitsaMember(), vesnaMember(), odetteMember(), faruzanMember()], stellarSynergy, "https://game8.jp/genshin/817238"),
  batch23Team("ヴォジャニーツァ", 2, _content.localized("guide.legacy.parties_sharedTeams.b00020"), [vodyanitsaMember(), member(..._content.triple("guide.legacy.parties_sharedTeams.b00021"), ..._content.triple("guide.legacy.parties_sharedTeams.b00022")), member(..._content.triple("guide.legacy.parties_sharedTeams.b00023"), ..._content.triple("guide.legacy.parties_sharedTeams.b00024")), member(..._content.triple("guide.legacy.parties_sharedTeams.b00025"), ..._content.triple("guide.legacy.parties_sharedTeams.b00026"))], _content.localized("guide.legacy.parties_sharedTeams.b00027"), "https://game8.jp/genshin/817238"),
];
