import { createLegacyTexts } from "../content/legacyTexts";
import { sources as _sources } from "../../content/ja/guides/parties_batch24Teams";
import { records as _en } from "../../content/translations/en/parties_batch24Teams";
import { records as _zh } from "../../content/translations/zh-CN/parties_batch24Teams";
const _content = createLegacyTexts(_sources, _en, _zh);
import { member, t } from "./text";
import type { LocalizedText, PartyMember, Team } from "./types";

// 名前は旧PTの正規表記を保持する。未確認の英中別名を推測してIDへ結び付けない。
const m = (name: string, ja: string, en: string, zh: string) => member(name, name, name, ja, en, zh);
const pearl = () => m("パール", "回復・愉悦支援", "Healing / Elation support", "治疗与欢愉辅助");
const yaoguang = () => m("爻光", "愉悦支援・アッハタイム促進", "Elation support / Aha Time acceleration", "欢愉辅助与阿哈时刻加速");
const aventurine = () => m("アベンチュリン・波と戯れる夏", "愉悦アタッカー", "Elation DPS", "欢愉输出");
const hyacine = () => m("ヒアンシー", "回復・HP支援", "Healing / HP support", "治疗与生命辅助");

function team(origin: string, order: 1 | 2, sourceBatch: number, title: LocalizedText, members: PartyMember[], synergy: LocalizedText, primary: string, secondary: string, secondaryDate: string): Team {
  return {
    id: `team-hsr-${origin}-b24-${order}`, game: "hsr", origin, originOrder: order,
    shared: true, batch: 24, sourceBatch, title, members, synergy: [synergy],
    targetSummary: _content.localized("guide.legacy.parties_batch24Teams.b00001"),
    gameVersion: "4.6", dataAsOf: "2026-10-02", updatedAt: "2026-10-03",
    sourceLabel: _content.localized("guide.legacy.parties_batch24Teams.b00002"),
    sourceUrl: primary,
    communitySources: [{
      label: t(`Game8個別編成ガイド（${secondaryDate}更新）`, `Game8 character team guide (updated ${secondaryDate})`, `Game8角色配队指南（${secondaryDate}更新）`),
      url: secondary, checkedAt: "2026-10-03", status: "crossChecked",
      note: _content.localized("guide.legacy.parties_batch24Teams.b00003"),
    }],
  };
}

/** 旧3起点7案を整理し、重複を統合した4編成。緋英の未確認2案は再登録しない。 */
export const BATCH24_TEAMS: Team[] = [
  team("パール", 1, 21, _content.localized("guide.legacy.parties_batch24Teams.b00004"), [
    pearl(), m("銀狼Lv.999", "愉悦アタッカー", "Elation DPS", "欢愉输出"),
    m("火花", "愉悦火力・SP消費", "Elation DPS / SP consumption", "欢愉输出与战技点消耗"), yaoguang(),
  ], _content.localized("guide.legacy.parties_batch24Teams.b00005"),
  "https://gamewith.jp/houkaistarrail/article/show/572184", "https://game8.jp/houkaistarrail/759885", "2026-10-02"),
  team("パール", 2, 21, _content.localized("guide.legacy.parties_batch24Teams.b00006"), [
    pearl(), m("緋英", "愉悦アタッカー・必殺技主軸", "Elation DPS / Ultimate focus", "欢愉输出与终结技核心"),
    m("愉悦主人公", "愉悦支援・スキル促進", "Elation support / skill acceleration", "欢愉辅助与技能加速"), yaoguang(),
  ], _content.localized("guide.legacy.parties_batch24Teams.b00007"),
  "https://gamewith.jp/houkaistarrail/article/show/572184", "https://game8.jp/houkaistarrail/759885", "2026-10-02"),
  team("アベンチュリン・波と戯れる夏", 1, 20, _content.localized("guide.legacy.parties_batch24Teams.b00008"), [
    aventurine(), m("不死途", "追加攻撃アタッカー・防御低下", "Follow-up DPS / DEF reduction", "追加攻击输出与减防"),
    m("千冶・刃", "アタッカー・デバフ", "DPS / debuffs", "输出与减益"), hyacine(),
  ], _content.localized("guide.legacy.parties_batch24Teams.b00009"),
  "https://gamewith.jp/houkaistarrail/article/show/565894", "https://game8.jp/houkaistarrail/794467", "2026-09-29"),
  team("アベンチュリン・波と戯れる夏", 2, 20, _content.localized("guide.legacy.parties_batch24Teams.b00010"), [
    aventurine(), m("ロビン・夏空の歌", "EP回復・火力支援", "Energy recovery / damage support", "能量回复与输出辅助"), yaoguang(), hyacine(),
  ], _content.localized("guide.legacy.parties_batch24Teams.b00011"),
  "https://gamewith.jp/houkaistarrail/article/show/565894", "https://game8.jp/houkaistarrail/794467", "2026-09-29"),
];
