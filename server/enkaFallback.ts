import { TRPCError } from "@trpc/server";
import { equipmentActionsFor, guideFor, priorityRecommendations, type BuildLookupResult, type CharacterProfile, type StatComparison, type StatKey, type TargetStatDefinition } from "./buildAdvisor";
import { partyRecommendationsFor } from "./partyRecommendations";
import { resolveCharacterIdentity } from "./characterIdentity";
import { constellationProfileFor } from "./characterConstellations";

type RawRecord = Record<string, unknown>;
type LookupData = Omit<BuildLookupResult, "cached" | "cacheExpiresAt" | "fetchedAt">;

export type StaticIndex = {
  characters: Record<string, RawRecord>;
  lightCones: Record<string, RawRecord>;
  relicSets: Record<string, RawRecord>;
  characterPromotions: Record<string, RawRecord>;
  characterSkillTrees: Record<string, RawRecord>;
  lightConePromotions: Record<string, RawRecord>;
  lightConeRanks: Record<string, RawRecord>;
  properties: Record<string, RawRecord>;
};

const STATIC_ENDPOINTS: Record<keyof StaticIndex, string> = {
  characters: "characters",
  lightCones: "light_cones",
  relicSets: "relic_sets",
  characterPromotions: "character_promotions",
  characterSkillTrees: "character_skill_trees",
  lightConePromotions: "light_cone_promotions",
  lightConeRanks: "light_cone_ranks",
  properties: "properties",
};

export const EMPTY_STATIC_INDEX: StaticIndex = { characters: {}, lightCones: {}, relicSets: {}, characterPromotions: {}, characterSkillTrees: {}, lightConePromotions: {}, lightConeRanks: {}, properties: {} };

const STATIC_BASE = "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/index_new/jp";
const STATIC_TTL_MS = 24 * 60 * 60 * 1000;
const STATIC_FETCH_TIMEOUT_MS = 5_000;
const LAST_KNOWN_GOOD_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

let staticCache: { value: StaticIndex; expiresAt: number } | null = null;
let lastKnownGoodStatic: { value: StaticIndex; savedAt: number } | null = null;

const FALLBACK_META: Record<string, { name: string; element?: string; path?: string }> = {
  "1014": { name: "セイバー" }, "1310": { name: "ホタル" }, "1407": { name: "キャストリス" }, "1506": { name: "銀狼Lv.999" }, "1508": { name: "遠坂凛" }, "1509": { name: "ギルガメッシュ" },
};
const PATH_NAMES: Record<string, string> = { Knight: "存護", Mage: "知恵", Priest: "豊穣", Rogue: "巡狩", Shaman: "調和", Warlock: "虚無", Warrior: "壊滅", Memory: "記憶", Elation: "歓楽" };
const ELEMENT_NAMES: Record<string, string> = { Fire: "炎", Ice: "氷", Imaginary: "虚数", Physical: "物理", Quantum: "量子", Thunder: "雷", Wind: "風" };

const ENKA_FINAL_STATS_NOTE = "公開中のキャラクター・光円錐・遺物・解放済み軌跡から算出した戦闘外の最終値です。戦闘中・条件付き効果は含みません。";
const ENKA_UNAVAILABLE_NOTE = "静的データを取得できないため、最終ステータスの算出と目標比較を保留しています。数分後に再度お試しください。";

function record(value: unknown): RawRecord { return value && typeof value === "object" && !Array.isArray(value) ? value as RawRecord : {}; }
function array(value: unknown): unknown[] { return Array.isArray(value) ? value : []; }
function str(value: unknown, fallback = ""): string { return typeof value === "string" ? value : typeof value === "number" ? String(value) : fallback; }
function num(value: unknown): number | null { return typeof value === "number" && Number.isFinite(value) ? value : null; }
function map(value: unknown): Record<string, RawRecord> { const source = record(value); return Object.fromEntries(Object.entries(source).map(([key, item]) => [key, record(item)])); }

async function fetchStaticMap(endpoint: string, signal: AbortSignal): Promise<Record<string, RawRecord> | null> {
  try {
    const response = await fetch(`${STATIC_BASE}/${endpoint}.json`, { headers: { "User-Agent": "Star-Rail-Build-Advisor/1.0 (personal-use)" }, signal });
    if (!response.ok) return null;
    const json: unknown = await response.json();
    if (!json || typeof json !== "object" || Array.isArray(json)) return null;
    const parsed = map(json);
    return Object.keys(parsed).length ? parsed : null;
  } catch {
    return null;
  }
}

async function loadStaticIndex(): Promise<StaticIndex | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), STATIC_FETCH_TIMEOUT_MS);
  try {
    const keys = Object.keys(STATIC_ENDPOINTS) as (keyof StaticIndex)[];
    const results = await Promise.all(keys.map((key) => fetchStaticMap(STATIC_ENDPOINTS[key], controller.signal)));
    const value = {} as StaticIndex;
    for (let i = 0; i < keys.length; i++) {
      const result = results[i];
      if (!result) return null;
      value[keys[i]] = result;
    }
    return value;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function getStaticIndex(): Promise<StaticIndex> {
  const now = Date.now();
  if (staticCache && staticCache.expiresAt > now) return staticCache.value;
  const fresh = await loadStaticIndex();
  if (fresh) {
    staticCache = { value: fresh, expiresAt: now + STATIC_TTL_MS };
    lastKnownGoodStatic = { value: fresh, savedAt: now };
    return fresh;
  }
  if (lastKnownGoodStatic && now - lastKnownGoodStatic.savedAt <= LAST_KNOWN_GOOD_MAX_AGE_MS) {
    console.warn(`[hsr-enka-fallback] 静的データの取得に失敗したため、直近正常バンドル（保存: ${new Date(lastKnownGoodStatic.savedAt).toISOString()}）を使用します。`);
    return lastKnownGoodStatic.value;
  }
  console.warn("[hsr-enka-fallback] 静的データを取得できず、直近正常バンドルも利用できません。戦闘外最終値の算出を保留します。");
  return EMPTY_STATIC_INDEX;
}

// ---- プロパティ分類（properties.json のメタデータ駆動） ----

type Component = "hp" | "attack" | "defense" | "speed";
type Contribution = { type: string; value: number };

const FIELD_TO_COMPONENT: Record<string, Component> = { hp: "hp", atk: "attack", def: "defense", spd: "speed" };
const FIELD_TO_STAT_KEY: Record<string, StatKey> = { crit_rate: "critRate", crit_dmg: "critDmg", break_dmg: "breakEffect", effect_hit: "effectHitRate", effect_res: "effectRes", sp_rate: "energyRecharge" };

function propertyMeta(properties: Record<string, RawRecord>, type: string) {
  const raw = properties[type];
  const found = Boolean(raw);
  const entry = record(raw);
  return {
    found,
    name: str(entry.name),
    field: str(entry.field),
    ratio: Boolean(entry.ratio),
    percent: Boolean(entry.percent),
    order: num(entry.order) ?? 999,
  };
}

function propertyDisplay(properties: Record<string, RawRecord>, source: RawRecord): { name: string; display: string } {
  const type = str(source.type);
  const value = num(source.value);
  const meta = propertyMeta(properties, type);
  const name = meta.name || type || "ステータス";
  if (value === null) return { name, display: "—" };
  const display = meta.percent ? `${(value * 100).toFixed(1)}%` : value.toFixed(type === "SpeedDelta" || type === "BaseSpeed" ? 1 : 0);
  return { name, display };
}

type Classified =
  | { kind: "base"; component: Component; value: number }
  | { kind: "ratio"; component: Component; value: number }
  | { kind: "flat"; component: Component; value: number }
  | { kind: "stat"; key: StatKey; value: number }
  | { kind: "other"; found: boolean; name: string; value: number; percent: boolean; order: number }
  | { kind: "ignored" };

function classify(properties: Record<string, RawRecord>, contribution: Contribution): Classified {
  const meta = propertyMeta(properties, contribution.type);
  const component = meta.field ? FIELD_TO_COMPONENT[meta.field] : undefined;
  if (component) {
    if (contribution.type.startsWith("Base")) return { kind: "base", component, value: contribution.value };
    return meta.ratio ? { kind: "ratio", component, value: contribution.value } : { kind: "flat", component, value: contribution.value };
  }
  const statKey = meta.field ? FIELD_TO_STAT_KEY[meta.field] : undefined;
  if (statKey) return { kind: "stat", key: statKey, value: contribution.value };
  // field="" の型（MaxHP/CriticalChance/StatusProbability等）はStarRailRes上「集計済み表示専用」の予約名であり、
  // 遺物・軌跡・光円錐ランクからの個別加算値ではない。0埋めの重複行として一般画面へ出さない。
  if (!meta.field) return { kind: "ignored" };
  return { kind: "other", found: meta.found, name: meta.name || contribution.type, value: meta.percent ? contribution.value * 100 : contribution.value, percent: meta.percent, order: meta.order };
}

function collectContributions(properties: unknown): Contribution[] {
  const list: Contribution[] = [];
  for (const raw of array(properties)) {
    const prop = record(raw);
    const type = str(prop.type);
    const value = num(prop.value);
    if (type && value !== null) list.push({ type, value });
  }
  return list;
}

// ---- レベル別基礎値 ----

function levelValue(stage: RawRecord, field: string, level: number): number | null {
  const entry = record(stage[field]);
  const base = num(entry.base);
  if (base === null) return null;
  const step = num(entry.step) ?? 0;
  return base + step * (level - 1);
}

type CharacterBaseline = { hp: number; attack: number; defense: number; speed: number; critRateBase: number; critDmgBase: number };

function characterBaseline(avatarId: string, promotion: number | null, level: number | null, staticData: StaticIndex): CharacterBaseline | null {
  const resolvedPromotion = promotion ?? 0;
  if (!Number.isInteger(resolvedPromotion) || resolvedPromotion < 0) return null;
  if (level === null || !Number.isInteger(level) || level < 1 || level > 80) return null;
  const promotionData = staticData.characterPromotions[avatarId];
  if (!promotionData) return null;
  const stages = array(promotionData.values).map(record);
  if (resolvedPromotion >= stages.length) return null;
  const stage = stages[resolvedPromotion];
  const hp = levelValue(stage, "hp", level);
  const attack = levelValue(stage, "atk", level);
  const defense = levelValue(stage, "def", level);
  const speed = levelValue(stage, "spd", level);
  if (hp === null || attack === null || defense === null || speed === null) return null;
  const critRateBase = num(record(stage.crit_rate).base) ?? 0.05;
  const critDmgBase = num(record(stage.crit_dmg).base) ?? 0.5;
  return { hp, attack, defense, speed, critRateBase, critDmgBase };
}

type LightConeBaseline = { hp: number; attack: number; defense: number; speedBonus: number };

function lightConeBaseline(coneId: string, promotion: number | null, level: number | null, staticData: StaticIndex, flatContributions: Contribution[]): LightConeBaseline | null {
  let hp: number | null = null;
  let attack: number | null = null;
  let defense: number | null = null;
  let speedBonus = 0;
  for (const item of flatContributions) {
    if (item.type === "BaseHP") hp = item.value;
    else if (item.type === "BaseAttack") attack = item.value;
    else if (item.type === "BaseDefence") defense = item.value;
    else if (item.type === "BaseSpeed") speedBonus += item.value;
  }
  if (hp === null || attack === null || defense === null) {
    const resolvedPromotion = promotion ?? 0;
    if (!Number.isInteger(resolvedPromotion) || resolvedPromotion < 0) return null;
    if (level === null || !Number.isInteger(level) || level < 1 || level > 80) return null;
    const promotionData = staticData.lightConePromotions[coneId];
    if (!promotionData) return null;
    const stages = array(promotionData.values).map(record);
    if (resolvedPromotion >= stages.length) return null;
    const stage = stages[resolvedPromotion];
    hp = hp ?? levelValue(stage, "hp", level);
    attack = attack ?? levelValue(stage, "atk", level);
    defense = defense ?? levelValue(stage, "def", level);
  }
  if (hp === null || attack === null || defense === null) return null;
  return { hp, attack, defense, speedBonus };
}

// ---- 解放済み軌跡・光円錐重畳ランク ----

type ContributionResult = { list: Contribution[]; ok: boolean };

function traceContributions(avatar: RawRecord, staticData: StaticIndex): ContributionResult {
  const promotion = num(avatar.promotion) ?? 0;
  const level = num(avatar.level) ?? 0;
  const list: Contribution[] = [];
  for (const rawNode of array(avatar.skillTreeList)) {
    const node = record(rawNode);
    const pointId = str(node.pointId);
    if (!pointId) continue;
    const tree = staticData.characterSkillTrees[pointId];
    if (!tree) return { list: [], ok: false };
    const levels = array(tree.levels).map(record);
    const rankIndex = Math.max(1, num(node.level) ?? 1) - 1;
    if (rankIndex < 0 || rankIndex >= levels.length) return { list: [], ok: false };
    const entry = levels[rankIndex];
    const requiredPromotion = num(entry.promotion) ?? 0;
    const requiredLevel = num(entry.level) ?? 0;
    if (promotion < requiredPromotion || level < requiredLevel) continue;
    list.push(...collectContributions(entry.properties));
  }
  return { list, ok: true };
}

function lightConeRankContributions(cone: RawRecord, staticData: StaticIndex): ContributionResult {
  const coneId = str(cone.tid);
  if (!coneId) return { list: [], ok: true };
  const rankData = staticData.lightConeRanks[coneId];
  if (!rankData) return { list: [], ok: false };
  const rank = num(cone.rank) ?? 1;
  const rankIndex = Math.max(1, Math.min(5, rank)) - 1;
  const byRank = array(rankData.properties);
  if (rankIndex < 0 || rankIndex >= byRank.length) return { list: [], ok: false };
  return { list: collectContributions(byRank[rankIndex]), ok: true };
}

// ---- 最終値の合成 ----

type OtherStat = { name: string; value: number; percent: boolean; order: number };
type FinalStats =
  | { status: "final"; map: Partial<Record<StatKey, number>>; other: OtherStat[] }
  | { status: "unavailable" };

function computeFinalStats(avatar: RawRecord, staticData: StaticIndex, relicContributions: Contribution[]): FinalStats {
  const avatarId = str(avatar.avatarId);
  const charBaseline = characterBaseline(avatarId, num(avatar.promotion), num(avatar.level), staticData);
  if (!charBaseline) return { status: "unavailable" };

  const cone = record(avatar.equipment);
  const coneEquipped = Object.keys(cone).length > 0;
  const coneId = str(cone.tid);
  const coneFlatContributions = collectContributions(record(cone._flat).props);

  let lcBaseline: LightConeBaseline = { hp: 0, attack: 0, defense: 0, speedBonus: 0 };
  if (coneEquipped) {
    const resolved = lightConeBaseline(coneId, num(cone.promotion), num(cone.level), staticData, coneFlatContributions);
    if (!resolved) return { status: "unavailable" };
    lcBaseline = resolved;
  }

  const traces = traceContributions(avatar, staticData);
  if (!traces.ok) return { status: "unavailable" };

  let rankContributions: Contribution[] = [];
  if (coneEquipped) {
    const rankResult = lightConeRankContributions(cone, staticData);
    if (!rankResult.ok) return { status: "unavailable" };
    rankContributions = rankResult.list;
  }

  const totals: Record<Component, { ratio: number; flat: number }> = {
    hp: { ratio: 0, flat: 0 }, attack: { ratio: 0, flat: 0 }, defense: { ratio: 0, flat: 0 }, speed: { ratio: 0, flat: 0 },
  };
  const statTotals: Partial<Record<StatKey, number>> = {};
  const other: OtherStat[] = [];

  for (const contribution of [...relicContributions, ...traces.list, ...rankContributions]) {
    const classified = classify(staticData.properties, contribution);
    if (classified.kind === "base") continue; // Base* は光円錐 _flat.props からの基礎値上書きとして既に消費済み
    if (classified.kind === "ratio") { totals[classified.component].ratio += classified.value; continue; }
    if (classified.kind === "flat") { totals[classified.component].flat += classified.value; continue; }
    if (classified.kind === "stat") { statTotals[classified.key] = (statTotals[classified.key] ?? 0) + classified.value; continue; }
    if (classified.kind === "ignored") continue;
    if (!classified.found || !classified.name) {
      console.warn(`[hsr-enka-fallback] 未知のプロパティ種別を検出しました: ${contribution.type}`);
      continue;
    }
    other.push({ name: classified.name, value: classified.value, percent: classified.percent, order: classified.order });
  }

  const baseHP = charBaseline.hp + lcBaseline.hp;
  const baseAttack = charBaseline.attack + lcBaseline.attack;
  const baseDefense = charBaseline.defense + lcBaseline.defense;
  const baseSpeed = charBaseline.speed + lcBaseline.speedBonus;

  const map: Partial<Record<StatKey, number>> = {
    hp: baseHP * (1 + totals.hp.ratio) + totals.hp.flat,
    attack: baseAttack * (1 + totals.attack.ratio) + totals.attack.flat,
    defense: baseDefense * (1 + totals.defense.ratio) + totals.defense.flat,
    speed: baseSpeed * (1 + totals.speed.ratio) + totals.speed.flat,
    hpPercent: totals.hp.ratio * 100,
    attackPercent: totals.attack.ratio * 100,
    defPercent: totals.defense.ratio * 100,
    critRate: (charBaseline.critRateBase + (statTotals.critRate ?? 0)) * 100,
    critDmg: (charBaseline.critDmgBase + (statTotals.critDmg ?? 0)) * 100,
    breakEffect: (statTotals.breakEffect ?? 0) * 100,
    effectHitRate: (statTotals.effectHitRate ?? 0) * 100,
    effectRes: (statTotals.effectRes ?? 0) * 100,
    energyRecharge: (1 + (statTotals.energyRecharge ?? 0)) * 100,
  };

  if (Object.values(map).some((value) => value === undefined || !Number.isFinite(value))) return { status: "unavailable" };

  return { status: "final", map, other };
}

const CORE_STAT_ORDER: StatKey[] = ["hp", "attack", "defense", "speed", "critRate", "critDmg", "breakEffect", "effectHitRate", "effectRes", "energyRecharge"];
const CORE_STAT_LABELS: Record<string, string> = { hp: "HP", attack: "攻撃力", defense: "防御力", speed: "速度", critRate: "会心率", critDmg: "会心ダメ", breakEffect: "撃破特効", effectHitRate: "効果命中", effectRes: "効果抵抗", energyRecharge: "EP回復効率" };

function formatCoreStat(key: StatKey, value: number): string {
  if (key === "hp" || key === "attack" || key === "defense") return value.toFixed(0);
  if (key === "speed") return value.toFixed(1);
  return `${value.toFixed(1)}%`;
}

function buildAllStats(finalStats: FinalStats): Array<{ name: string; display: string; icon: string | null }> {
  if (finalStats.status !== "final") return [];
  const rows: Array<{ name: string; display: string; icon: string | null }> = [];
  for (const key of CORE_STAT_ORDER) {
    const value = finalStats.map[key];
    if (value === undefined) continue;
    rows.push({ name: CORE_STAT_LABELS[key], display: formatCoreStat(key, value), icon: null });
  }
  for (const item of [...finalStats.other].sort((left, right) => left.order - right.order)) {
    rows.push({ name: item.name, display: item.percent ? `${item.value.toFixed(1)}%` : item.value.toFixed(0), icon: null });
  }
  return rows;
}

function comparisonForKey(target: TargetStatDefinition, finalMap: Partial<Record<StatKey, number>> | null): StatComparison {
  const current = finalMap ? finalMap[target.key] ?? null : null;
  return {
    ...target,
    current,
    currentDisplay: current === null ? "未取得" : `算出 ${current.toFixed(target.unit === "%" ? 1 : 0)}${target.unit}`,
    achieved: {
      "厳選": current === null ? null : current >= target.targets["厳選"],
      "目標": current === null ? null : current >= target.targets["目標"],
      "妥協": current === null ? null : current >= target.targets["妥協"],
    },
  };
}

export function normalizeEnkaPayload(payload: unknown, staticData: StaticIndex = EMPTY_STATIC_INDEX): LookupData {
  const root = record(payload); const detail = record(root.detailInfo);
  const characters = array(detail.avatarDetailList).map(record).map((avatar) => {
    const avatarId = str(avatar.avatarId); const avatarMeta = staticData.characters[avatarId] ?? {}; const fallbackMeta = FALLBACK_META[avatarId] ?? { name: "" };
    const rawName = str(avatarMeta.name); const identity = resolveCharacterIdentity("hsr", avatarId, rawName);
    const metaName = identity.displayName;

    const relicContributions: Contribution[] = [];
    const relics = array(avatar.relicList).map(record).map((relic, relicIndex) => {
      const flat = record(relic._flat);
      const rawProps = array(flat.props).map(record);
      relicContributions.push(...collectContributions(rawProps));
      const props = rawProps.map((prop) => propertyDisplay(staticData.properties, prop));
      const setId = str(flat.setID);
      const slots = ["頭部", "手部", "胴体", "脚部", "次元界オーブ", "連結縄"];
      return { id: `${str(relic.tid, "relic")}-${str(relic.type, String(relicIndex))}`, name: `遺物 ${relicIndex + 1}`, slot: slots[relicIndex], setName: str(staticData.relicSets[setId]?.name) || `未解決（ID: ${setId || "不明"}）`, level: num(relic.level), icon: null, main: props[0] ? { name: props[0].name, display: props[0].display } : null, subs: props.slice(1).map((item) => ({ name: item.name, display: item.display })) };
    });

    const finalStats = computeFinalStats(avatar, staticData, relicContributions);

    const cone = record(avatar.equipment); const coneId = str(cone.tid); const path = PATH_NAMES[str(avatarMeta.path)] ?? PATH_NAMES[fallbackMeta.path ?? ""] ?? "未設定"; const guide = guideFor(metaName, path, identity);

    const comparisons: StatComparison[] = guide.targets.map((target) => comparisonForKey(target, finalStats.status === "final" ? finalStats.map : null));
    const recommendations = priorityRecommendations(comparisons);
    return {
      id: identity.sourceId, identity, name: metaName, level: num(avatar.level), rank: num(avatar.rank),
      portrait: avatarId ? `https://enka.network/ui/hsr/SpriteOutput/AvatarRoundIcon/Avatar/${avatarId}.png` : null,
      element: ELEMENT_NAMES[str(avatarMeta.element)] ?? ELEMENT_NAMES[fallbackMeta.element ?? ""] ?? "未解決", elementColor: null, path,
      lightCone: Object.keys(cone).length ? { name: str(staticData.lightCones[coneId]?.name) || `未解決（ID: ${coneId || "不明"}）`, level: num(cone.level), rank: num(cone.rank), icon: null } : null,
      relics,
      allStats: buildAllStats(finalStats),
      statsStatus: finalStats.status,
      statsNote: finalStats.status === "final" ? ENKA_FINAL_STATS_NOTE : ENKA_UNAVAILABLE_NOTE,
      guide,
      comparisons,
      recommendations,
      equipmentActions: equipmentActionsFor(guide, relics, recommendations),
      partyRecommendations: partyRecommendationsFor("hsr", metaName),
      constellations: constellationProfileFor(identity, num(avatar.rank)),
    } satisfies CharacterProfile;
  });
  return { player: { uid: str(root.uid ?? detail.uid), name: str(detail.nickname, "開拓者"), level: num(detail.level) }, characters };
}

export function isEnkaResultComplete(data: LookupData): boolean {
  return data.characters.every((character) => character.statsStatus !== "unavailable");
}

export async function fetchEnkaPayload(uid: string): Promise<{ data: LookupData; ttlSeconds: number | null }> {
  const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 14_000);
  try {
    const response = await fetch(`https://enka.network/api/hsr/uid/${encodeURIComponent(uid)}/`, { headers: { "User-Agent": "Star-Rail-Build-Advisor/1.0 (personal-use)" }, signal: controller.signal });
    const raw = await response.text(); const payload: unknown = JSON.parse(raw || "{}");
    const staticData = await getStaticIndex();
    const data = normalizeEnkaPayload(payload, staticData);
    if (!response.ok || !data.characters.length) throw new TRPCError({ code: response.status === 404 ? "NOT_FOUND" : "BAD_GATEWAY", message: "公開中のキャラクターが見つかりません。ゲーム内の巡星ビザ設定をご確認ください。" });
    return { data, ttlSeconds: num(record(payload).ttl) };
  } catch (error) {
    if (error instanceof TRPCError) throw error;
    throw new TRPCError({ code: "BAD_GATEWAY", message: "公開データサービスへ接続できませんでした。数分後に再度お試しください。", cause: error });
  } finally { clearTimeout(timeout); }
}
