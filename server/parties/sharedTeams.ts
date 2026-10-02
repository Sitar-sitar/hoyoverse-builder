import { t, member } from "./text";
import type { LocalizedText, PartyMember, Team } from "./types";

// 第23バッチ。役割・版・出典を明示し、共通データセットの旧日付やSNS参照を持ち込まない。
function batch23Team(origin: string, originOrder: 1 | 2, title: LocalizedText, members: PartyMember[], synergy: LocalizedText, sourceUrl: string): Team {
  return {
    id: `curated-genshin-${origin}-${originOrder}`, game: "genshin", origin, originOrder, shared: true, batch: 23, title, members, synergy: [synergy],
    targetSummary: t("編成・装備・命ノ星座の戦闘中効果は公開プロフィールへ加算しない。", "Combat effects from teams, gear, and constellations are excluded from public-profile stats.", "配队、装备与命之座的战斗内效果不计入公开面板。"),
    gameVersion: "7.1", dataAsOf: "2026-09-29", updatedAt: "2026-10-01",
    sourceLabel: t("Game8の2026-09-29更新の個別編成ガイド", "Game8 character team guide updated 2026-09-29", "Game8于2026-09-29更新的角色配队指南"),
    sourceUrl, communitySources: [{
      label: t("公式のVer.7.1実装・役割告知", "Official Version 7.1 release and roles", "官方7.1版本实装与定位公告"),
      url: "https://prtimes.jp/main/html/rd/p/000000449.000096124.html", checkedAt: "2026-10-01", status: "crossChecked",
      note: t("実装・属性・役割を照合。固定4名編成の根拠は個別ガイド。", "Cross-checks release, element, and role; the character guide supports the exact four-member team.", "核对实装、元素与定位；具体四人队依据角色指南。"),
    }],
  };
}
const vesnaMember = () => member("ヴェスナ", "Vesna", "薇斯纳", "星拡散アタッカー", "Stellar Swirl DPS", "星扩散主C");
const vodyanitsaMember = () => member("ヴォジャニーツァ", "Vodyanitsa", "沃雅妮莎", "回復・反応支援", "Healing / reaction support", "治疗与反应辅助");
const odetteMember = () => member("オデット", "Odette", "奥黛特", "氷付着・星反応支援", "Cryo application / Stellar support", "冰附着与星反应辅助");
const faruzanMember = () => member("ファルザン", "Faruzan", "珐露珊", "風耐性低下・火力支援", "Anemo RES shred / damage support", "风抗削减与增伤辅助");
const stellarSynergy = t("オデットの氷付着からヴェスナが星拡散を起こす。ファルザンで風火力を支援し、ヴォジャニーツァのスキルで回復・中断耐性を確保する。龍殺し装備時はヴォジャニーツァからヴェスナへ交代する。", "Odette applies Cryo for Vesna's Stellar Swirl. Faruzan supports Anemo damage, while Vodyanitsa's Skill heals and grants interruption resistance. With Thrilling Tales, switch from Vodyanitsa to Vesna.", "奥黛特挂冰供薇斯纳触发星扩散，珐露珊辅助风伤，沃雅妮莎的战技提供治疗与抗打断。装备讨龙时由沃雅妮莎切换到薇斯纳。");

/** 他キャラから参照できる編成の正本（D4）。第24バッチ以降の編成はすべてここへ書く。 */
export const SHARED_TEAMS: Team[] = [
  batch23Team("ヴェスナ", 1, t("星拡散・回復支援", "Stellar Swirl with sustain", "星扩散生存队"), [vesnaMember(), odetteMember(), faruzanMember(), vodyanitsaMember()], stellarSynergy, "https://game8.jp/genshin/817237"),
  batch23Team("ヴェスナ", 2, t("星拡散・氷共鳴", "Stellar Swirl / Cryo resonance", "星扩散冰共鸣队"), [vesnaMember(), odetteMember(), faruzanMember(), member("ディオナ", "Diona", "迪奥娜", "シールド・回復", "Shield / healing", "护盾与治疗")], t("オデットで氷付着、ディオナでシールドと回復を確保する。氷共鳴は氷付着または凍結中の敵にだけ有効。ディオナ6凸・ファルザン6凸の追加効果は所持条件付きで、公開値へ加算しない。", "Odette supplies Cryo and Diona shields and heals. Cryo resonance applies only against Cryo-affected or Frozen enemies. Extra C6 Diona/Faruzan effects require those constellations and are excluded from public stats.", "奥黛特挂冰，迪奥娜提供护盾与治疗。冰共鸣仅对冰附着或冻结的敌人生效。迪奥娜与珐露珊的六命增益有持有条件，不计入公开面板。"), "https://game8.jp/genshin/817237"),
  batch23Team("ヴォジャニーツァ", 1, t("星拡散・ヴェスナ支援", "Stellar Swirl / Vesna support", "星扩散薇斯纳辅助队"), [vodyanitsaMember(), vesnaMember(), odetteMember(), faruzanMember()], stellarSynergy, "https://game8.jp/genshin/817238"),
  batch23Team("ヴォジャニーツァ", 2, t("水氷・スカーク支援", "Hydro/Cryo / Skirk support", "水冰丝柯克辅助队"), [vodyanitsaMember(), member("スカーク", "Skirk", "丝柯克", "氷アタッカー", "Cryo DPS", "冰主C"), member("フリーナ", "Furina", "芙宁娜", "水副火力・与ダメージ支援", "Hydro Sub DPS / damage support", "水副C与增伤辅助"), member("エスコフィエ", "Escoffier", "爱可菲", "氷副火力・耐性低下", "Cryo Sub DPS / RES shred", "冰副C与抗性削减")], t("水2・氷2でスカークとエスコフィエの編成条件を満たし、水共鳴でHPを支援する。回復をフリーナの強化へ利用し、水・氷耐性低下を維持する。ボスなど凍結しない敵もいるため凍結拘束を前提にしない。", "Two Hydro and two Cryo satisfy Skirk's and Escoffier's team conditions and support HP through Hydro resonance. Healing helps Furina's buff while Hydro/Cryo RES shred is maintained. Do not assume Frozen crowd control against bosses.", "双水双冰满足丝柯克与爱可菲的配队条件，水共鸣辅助生命值。治疗配合芙宁娜增益并维持水冰减抗。不假定首领等敌人能够被冻结。"), "https://game8.jp/genshin/817238"),
];
