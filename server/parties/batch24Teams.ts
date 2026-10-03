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
    targetSummary: t("編成・光円錐・星魂の戦闘中効果は公開プロフィールへ加算しない。", "Combat effects from teams, Light Cones, and Eidolons are excluded from public-profile stats.", "配队、光锥与星魂的战斗内效果不计入公开面板。"),
    gameVersion: "4.6", dataAsOf: "2026-10-02", updatedAt: "2026-10-03",
    sourceLabel: t("GameWith（2026-10-02更新）とGame8の実名編成を照合", "Cross-checked GameWith (updated 2026-10-02) and Game8 team rosters", "核对GameWith（2026-10-02更新）与Game8实名配队"),
    sourceUrl: primary,
    communitySources: [{
      label: t(`Game8個別編成ガイド（${secondaryDate}更新）`, `Game8 character team guide (updated ${secondaryDate})`, `Game8角色配队指南（${secondaryDate}更新）`),
      url: secondary, checkedAt: "2026-10-03", status: "crossChecked",
      note: t("本文の4名構成と運用条件を照合。数値目標は追加しない。", "Cross-checked the four-member roster and operating conditions; no numerical targets added.", "核对正文的四人阵容与运用条件，不新增数值目标。"),
    }],
  };
}

/** 旧3起点7案を整理し、重複を統合した4編成。緋英の未確認2案は再登録しない。 */
export const BATCH24_TEAMS: Team[] = [
  team("パール", 1, 21, t("銀狼・火花の愉悦編成", "Silver Wolf / Sparxie Elation team", "银狼与火花欢愉队"), [
    pearl(), m("銀狼Lv.999", "愉悦アタッカー", "Elation DPS", "欢愉输出"),
    m("火花", "愉悦火力・SP消費", "Elation DPS / SP consumption", "欢愉输出与战技点消耗"), yaoguang(),
  ], t("愉悦4名でパールの支援条件を満たす。火花がSPを消費して爆笑ネタを供給し、爻光がアッハタイムを促進、銀狼Lv.999が火力を出す。パールは通常攻撃を基本に耐久を支える。", "Four Elation characters fulfill Pearl's support conditions. Sparxie spends SP to generate Punchlines, Yaoguang accelerates Aha Time, and Silver Wolf Lv.999 deals damage. Pearl mainly uses Basic ATKs to sustain the team.", "四名欢愉角色满足珍珠的辅助条件。火花消耗战技点供给笑点，爻光加速阿哈时刻，银狼Lv.999输出；珍珠以普攻维持生存。"),
  "https://gamewith.jp/houkaistarrail/article/show/572184", "https://game8.jp/houkaistarrail/759885", "2026-10-02"),
  team("パール", 2, 21, t("緋英の愉悦編成", "緋英 Elation team", "绯英欢愉队"), [
    pearl(), m("緋英", "愉悦アタッカー・必殺技主軸", "Elation DPS / Ultimate focus", "欢愉输出与终结技核心"),
    m("愉悦主人公", "愉悦支援・スキル促進", "Elation support / skill acceleration", "欢愉辅助与技能加速"), yaoguang(),
  ], t("緋英を主力とし、愉悦主人公と爻光で支援する。パールの爆笑の褒美の獲得・消費が緋英のEP獲得を助ける。緋英は戦闘スキルを使い、必殺技が溜まったら発動する。", "緋英 is supported by the Elation Trailblazer and Yaoguang. Pearl's gaining and consuming Certified Bangers helps 緋英 gain Energy. 緋英 uses Skills and activates the Ultimate when ready.", "绯英为输出核心，欢愉开拓者与爻光提供辅助。珍珠获取和消耗爆笑的褒奖，帮助绯英获取能量。绯英使用战技，能量足够时施放终结技。"),
  "https://gamewith.jp/houkaistarrail/article/show/572184", "https://game8.jp/houkaistarrail/759885", "2026-10-02"),
  team("アベンチュリン・波と戯れる夏", 1, 20, t("追加攻撃・3アタッカー", "Follow-up / triple DPS", "追加攻击三输出队"), [
    aventurine(), m("不死途", "追加攻撃アタッカー・防御低下", "Follow-up DPS / DEF reduction", "追加攻击输出与减防"),
    m("千冶・刃", "アタッカー・デバフ", "DPS / debuffs", "输出与减益"), hyacine(),
  ], t("愉悦キャラを夏アベンチュリンだけにし、愉悦スキルを追加攻撃として扱う条件を満たす。不死途と千冶・刃の攻撃・デバフで熱気と火力を支え、ヒアンシーが回復する。回復スキルはSPの余裕を見て使う。", "Keep summer Aventurine as the only Elation character so the Elation Skill counts as a follow-up attack. 不死途 and 千冶・刃 supply attacks and debuffs for Heat and damage, while Hyacine heals. Use healing Skills when SP permits.", "仅夏日砂金为欢愉角色，使其欢愉技能视为追加攻击。不死途与千冶・刃通过攻击及减益支援热气与伤害，ヒアンシー负责回复，并按战技点余量使用治疗战技。"),
  "https://gamewith.jp/houkaistarrail/article/show/565894", "https://game8.jp/houkaistarrail/794467", "2026-09-29"),
  team("アベンチュリン・波と戯れる夏", 2, 20, t("愉悦・夏アベンチュリン支援", "Elation / summer Aventurine carry", "欢愉夏日砂金核心队"), [
    aventurine(), m("ロビン・夏空の歌", "EP回復・火力支援", "Energy recovery / damage support", "能量回复与输出辅助"), yaoguang(), hyacine(),
  ], t("夏アベンチュリン以外の愉悦キャラを加え、愉悦運用の条件を満たす。夏ロビンと爻光が支援し、ヒアンシーが耐久を確保する。夏ロビンは初手に戦闘スキル、爻光はスキル効果を維持する。支援枠を多く使うため複数編成が必要な場面では配分に注意する。", "Include another Elation character to enable summer Aventurine's Elation setup. Summer Robin and Yaoguang support damage while Hyacine sustains. Summer Robin opens with a Skill; Yaoguang maintains the Skill effect. This uses several support units, so consider their allocation in multi-team content.", "加入夏日砂金以外的欢愉角色以满足欢愉运用条件。夏日知更鸟与爻光辅助输出，ヒアンシー维持生存。夏日知更鸟首回合使用战技，爻光维持战技效果；多队内容需注意辅助角色分配。"),
  "https://gamewith.jp/houkaistarrail/article/show/565894", "https://game8.jp/houkaistarrail/794467", "2026-09-29"),
];
