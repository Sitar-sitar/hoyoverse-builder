import { batchIdFor } from "../characterBatches";
import { CHARACTER_GUIDE_CATALOG } from "../characterGuideCatalog";
import { resolvePartyMember, VARIANT_ROSTER_CANONICAL, type PartyMemberResolution } from "../partyMemberAliases";
import { CHARACTER_PARTIES } from "./characterParties";
import { INITIAL_PARTY_REFS } from "./initialRefs";
import { LEGACY_PARTY_KEYS } from "./legacyCatalog";
import { PARTY_LINK_BATCHES, PARTY_LINK_RECORDS } from "./linkRecords";
import { refsFor } from "./resolve";
import { PARTY_GAMES, TEAM_STORE, type TeamStore } from "./teamStore";
import { MAX_PARTY_OPTIONS, type CharacterPartyEntry, type PartyGameId, type PartyLinkBatch, type PartyLinkRecord, type Team } from "./types";

/**
 * 推奨PTの連動ゲート（Phase 2）。新しい共有編成の参加者全員に「参照する／見送る」を記録させる。
 * 判定はすべてここに置き、テスト（partyLinks.test.ts）と CLI（scripts/audit/party-links.mjs）が使う。
 * 設計: docs/実装設計書_推奨PTの編成マスタ化と関連キャラ連動_2026-10-01.md §4.8
 */

/** 共有編成の batch の下限（D10）。ゲートはすべての共有編成にかけ、batch では絞らない。 */
export const LINK_GATE_FROM_BATCH = 23;
/** 旧形式編成の件数上限（A4）。旧形式を削除したら下げる。 */
export const LEGACY_TEAM_LIMIT = 686;
/** 共有編成で使わない汎用役割（D13）。 */
export const GENERIC_ROLE_LABELS: ReadonlySet<string> = new Set(["主力・副火力", "支援・反応", "耐久・補助", "相性枠", "反応・火力支援"]);
/** バックログ報告の対象にする起点キャラの所属バッチの下限。 */
export const BACKLOG_FROM_BATCH = 18;

export type PartyMemberResolver = (game: PartyGameId, name: string) => PartyMemberResolution;

export type LinkStatusInput = {
  store: TeamStore;
  parties: Record<string, CharacterPartyEntry>;
  resolve: PartyMemberResolver;
  records: readonly PartyLinkRecord[];
  batches: Record<number, PartyLinkBatch>;
  initialRefs: Readonly<Record<string, readonly string[]>>;
  catalog: Record<PartyGameId, readonly string[]>;
  batchOf: (game: PartyGameId, name: string) => number | null;
};

export const DEFAULT_LINK_STATUS_INPUT: LinkStatusInput = {
  store: TEAM_STORE,
  parties: CHARACTER_PARTIES,
  resolve: resolvePartyMember,
  records: PARTY_LINK_RECORDS,
  batches: PARTY_LINK_BATCHES,
  initialRefs: INITIAL_PARTY_REFS,
  catalog: { hsr: CHARACTER_GUIDE_CATALOG.hsr, genshin: CHARACTER_GUIDE_CATALOG.genshin, zzz: CHARACTER_GUIDE_CATALOG.zzz },
  batchOf: batchIdFor,
};

const withDefaults = (input: Partial<LinkStatusInput>): LinkStatusInput => ({ ...DEFAULT_LINK_STATUS_INPUT, ...input });

/** 表記ゆれを吸収したメンバー構成のキー。順序は問わない。 */
export function rosterKey(game: PartyGameId, members: readonly { name: { ja: string } }[], resolve: PartyMemberResolver = resolvePartyMember): string {
  return members
    .map((entry) => {
      const resolved = resolve(game, entry.name.ja);
      return resolved.kind === "variant" ? (VARIANT_ROSTER_CANONICAL[`${game}:${resolved.canonical}`] ?? resolved.canonical) : resolved.canonical;
    })
    .sort()
    .join("|");
}

export type UncoveredLink = { game: PartyGameId; team: string; origin: string; owner: string; currentRefs: string[] };

/** 表示中の参照（先頭3件）に同じ構成の編成があるか。 */
function displaysRoster(input: LinkStatusInput, game: PartyGameId, owner: string, key: string): boolean {
  return refsFor(game, owner, input.store, input.parties).slice(0, MAX_PARTY_OPTIONS).some((ref) => {
    const team = input.store.byId.get(ref.team);
    return team !== undefined && team.game === game && rosterKey(game, team.members, input.resolve) === key;
  });
}

/** 編成の参加者のうち、カタログ上の起点以外のキャラ。 */
function catalogParticipants(input: LinkStatusInput, team: Team): string[] {
  return team.members
    .map((entry) => input.resolve(team.game, entry.name.ja))
    .filter((resolved) => resolved.kind === "catalog" && resolved.canonical !== team.origin)
    .map((resolved) => resolved.canonical);
}

function uncoveredFor(input: LinkStatusInput, teams: readonly Team[]): UncoveredLink[] {
  const result: UncoveredLink[] = [];
  for (const team of teams) {
    const key = rosterKey(team.game, team.members, input.resolve);
    for (const owner of catalogParticipants(input, team)) {
      if (displaysRoster(input, team.game, owner, key)) continue;
      if (input.parties[`${team.game}:${owner}`]?.skipped?.some((skip) => skip.team === team.id)) continue;
      result.push({ game: team.game, team: team.id, origin: team.origin, owner, currentRefs: refsFor(team.game, owner, input.store, input.parties).map((ref) => ref.team) });
    }
  }
  return result.sort((a, b) => a.game.localeCompare(b.game) || a.owner.localeCompare(b.owner) || a.team.localeCompare(b.team));
}

/** 連動ゲート: すべての共有編成について、参照も見送りも無い参加者を返す（D6）。 */
export function uncoveredLinks(input: Partial<LinkStatusInput> = {}): UncoveredLink[] {
  const resolved = withDefaults(input);
  return uncoveredFor(resolved, resolved.store.teams.filter((team) => team.shared));
}

/** 報告専用: 起点キャラの所属バッチが18以上の旧形式編成で、同じ構成を表示していない参加者（Phase 4 の入力）。 */
export function backlogLinks(input: Partial<LinkStatusInput> = {}): UncoveredLink[] {
  const resolved = withDefaults(input);
  return uncoveredFor(resolved, resolved.store.teams.filter((team) => !team.shared && (resolved.batchOf(team.game, team.origin) ?? 0) >= BACKLOG_FROM_BATCH));
}

/** 第23バッチの変更記録の固定値（E5）。追記専用であることの担保。 */
const FROZEN_BATCH23_RECORDS = JSON.stringify([
  { batch: 23, game: "genshin", owner: "ファルザン", added: ["curated-genshin-ヴェスナ-1", "curated-genshin-ヴェスナ-2"], removed: ["curated-genshin-ファルザン-2", "curated-genshin-ファルザン-3"] },
  { batch: 23, game: "genshin", owner: "ディオナ", added: ["curated-genshin-ヴェスナ-2"], removed: ["curated-genshin-ディオナ-3"] },
  { batch: 23, game: "genshin", owner: "スカーク", added: ["curated-genshin-ヴォジャニーツァ-2"], removed: ["curated-genshin-スカーク-3"] },
  { batch: 23, game: "genshin", owner: "フリーナ", added: ["curated-genshin-ヴォジャニーツァ-2"], removed: ["curated-genshin-フリーナ-3"] },
  { batch: 23, game: "genshin", owner: "エスコフィエ", added: ["curated-genshin-ヴォジャニーツァ-2"], removed: ["curated-genshin-エスコフィエ-3"] },
]);

const isDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value);
const isHttps = (value: string) => value.startsWith("https://");
const filled = (text: { ja: string; en: string; "zh-CN": string }) => Boolean(text.ja && text.en && text["zh-CN"]);

/** 整合性の検査（§4.8.3）。問題ごとに1行の文言を返す。テストは [] を期待する。 */
export function teamStoreIssues(input: Partial<LinkStatusInput> = {}): string[] {
  const s = withDefaults(input);
  const issues: string[] = [];
  const isCatalog = (game: PartyGameId, name: string) => s.catalog[game].includes(name);
  const ownerKey = (game: PartyGameId, name: string) => `${game}:${name}`;

  // A マスタ
  for (const id of s.store.duplicateIds) issues.push(`A1 編成IDが重複: ${id}`);
  for (const team of s.store.teams) {
    const count = team.members.filter((entry) => entry.name.ja === team.origin).length;
    if (count !== 1) issues.push(`A2 起点がメンバーにちょうど1回含まれない: ${team.id}（${team.origin}）`);
  }
  for (const [key, teams] of s.store.byOrigin) {
    const orders = teams.map((team) => team.originOrder);
    if (orders.some((order) => !Number.isInteger(order) || order < 1)) issues.push(`A3 originOrder が正の整数でない: ${key}`);
    if (new Set(orders).size !== orders.length) issues.push(`A3 同じ起点で originOrder が重複: ${key}`);
    if (teams.length > MAX_PARTY_OPTIONS && !s.parties[key]?.refs) issues.push(`A6 保存編成が${teams.length}件あるのに明示参照が無い: ${key}`);
  }
  const legacy = s.store.teams.filter((team) => !team.shared);
  for (const team of legacy) if (team.batch !== null) issues.push(`A4 旧形式編成に batch がある: ${team.id}`);
  if (legacy.length > LEGACY_TEAM_LIMIT) issues.push(`A4 旧形式編成が上限を超えた: ${legacy.length} > ${LEGACY_TEAM_LIMIT}（新しい編成は sharedTeams.ts へ）`);
  for (const key of LEGACY_PARTY_KEYS) {
    const at = key.indexOf(":");
    if (!isCatalog(key.slice(0, at) as PartyGameId, key.slice(at + 1))) issues.push(`A5 旧データのキーがカタログ外: ${key}`);
  }

  // 固定した初期参照から全参照を再生する。バッチ番号や起点で履歴を免除しない（PT-05・PT-06）。
  const replayed = new Map<string, Set<string>>();
  for (const [key, ids] of Object.entries(s.initialRefs)) {
    const at = key.indexOf(":");
    const game = key.slice(0, at) as PartyGameId;
    const owner = key.slice(at + 1);
    if (!PARTY_GAMES.includes(game) || !isCatalog(game, owner)) issues.push(`E6 初期参照のキーがカタログ外: ${key}`);
    if (ids.length > MAX_PARTY_OPTIONS || new Set(ids).size !== ids.length) issues.push(`E6 初期参照は重複の無い0〜${MAX_PARTY_OPTIONS}件: ${key}`);
    replayed.set(key, new Set(ids));
  }
  for (const record of [...s.records].sort((a, b) => a.batch - b.batch)) {
    const key = ownerKey(record.game, record.owner);
    const set = replayed.get(key) ?? new Set<string>();
    for (const id of record.removed) {
      if (!set.delete(id)) issues.push(`E7 参照していない編成を除外: ${key} → ${id}（batch ${record.batch}）`);
    }
    for (const id of record.added) {
      if (set.has(id)) issues.push(`E7 参照済みの編成を追加: ${key} → ${id}（batch ${record.batch}）`);
      set.add(id);
    }
    replayed.set(key, set);
  }
  const batch23Added = new Set(s.records.filter((record) => record.batch === 23).flatMap((record) => record.added.map((id) => `${ownerKey(record.game, record.owner)}>${id}`)));

  // B 参照・C 見送り
  const viewIds = new Set<string>();
  for (const [key, entry] of Object.entries(s.parties)) {
    const at = key.indexOf(":");
    const game = key.slice(0, at) as PartyGameId;
    const owner = key.slice(at + 1);
    if (!PARTY_GAMES.includes(game) || !isCatalog(game, owner)) issues.push(`B1 参照のキーがカタログ外: ${key}`);
    const refs = entry.refs;
    if (refs) {
      if (refs.length < 1 || refs.length > MAX_PARTY_OPTIONS) issues.push(`B2 参照は1〜${MAX_PARTY_OPTIONS}件: ${key}（${refs.length}件）`);
      const seenIds = new Set<string>();
      const seenRosters = new Set<string>();
      for (const ref of refs) {
        const team = s.store.byId.get(ref.team);
        if (!team || team.game !== game) {
          issues.push(`B2 参照先の編成が無い: ${key} → ${ref.team}`);
          continue;
        }
        if (!team.members.some((member) => member.name.ja === owner)) issues.push(`B2 本人がメンバーにいない編成を参照: ${key} → ${ref.team}`);
        const roster = rosterKey(game, team.members, s.resolve);
        if (seenIds.has(ref.team) || seenRosters.has(roster)) issues.push(`B3 同じ編成・同じ構成を重ねて参照: ${key} → ${ref.team}`);
        seenIds.add(ref.team);
        seenRosters.add(roster);
        const isOrigin = team.origin === owner;
        if (!isOrigin && !team.shared) issues.push(`B4 旧形式編成を起点以外から参照: ${key} → ${ref.team}`);
        if (isOrigin && ref.viewId !== undefined) issues.push(`B5 起点の参照に viewId: ${key} → ${ref.team}`);
        if (ref.viewId !== undefined) {
          if (!batch23Added.has(`${key}>${ref.team}`)) issues.push(`B6 viewId は第23バッチの追補行だけ: ${key} → ${ref.team}`);
          if (viewIds.has(ref.viewId) || s.store.byId.has(ref.viewId)) issues.push(`B6 viewId が衝突: ${ref.viewId}`);
          viewIds.add(ref.viewId);
        }
      }
    }
    const skippedIds = new Set<string>();
    for (const skip of entry.skipped ?? []) {
      const team = s.store.byId.get(skip.team);
      if (!team || team.game !== game || !team.shared || team.origin === owner || !team.members.some((member) => member.name.ja === owner)) {
        issues.push(`C1 見送り先が本人の参加する他キャラ起点の共有編成でない: ${key} → ${skip.team}`);
      } else if (!isDate(skip.checkedAt) || skip.checkedAt < team.dataAsOf) {
        issues.push(`C2 見送りの確認日が不正（YYYY-MM-DD・編成の基準日以降）: ${key} → ${skip.team}`);
      }
      if (!skip.reason.trim() || !isHttps(skip.sourceUrl)) issues.push(`C2 見送りの理由・URL（https）が不正: ${key} → ${skip.team}`);
      if (refs?.some((ref) => ref.team === skip.team)) issues.push(`C3 参照と見送りの両方に書いている: ${key} → ${skip.team}`);
      if (skippedIds.has(skip.team)) issues.push(`C3 同じ編成を重ねて見送り: ${key} → ${skip.team}`);
      skippedIds.add(skip.team);
    }
  }
  // 明示参照の無いキャラも含めて表示参照全体を比較する。削除・追加の両方の記録漏れを検出する。
  for (const game of PARTY_GAMES) {
    for (const owner of s.catalog[game]) {
      const key = ownerKey(game, owner);
      if (!Object.hasOwn(s.initialRefs, key)) issues.push(`E6 初期参照が無い: ${key}（initialRefs.ts に初回登録時の参照を追記）`);
      const current = new Set(refsFor(game, owner, s.store, s.parties).slice(0, MAX_PARTY_OPTIONS).map((ref) => ref.team));
      const expected = replayed.get(key) ?? new Set<string>();
      const missing = [...current].filter((id) => !expected.has(id));
      const extra = [...expected].filter((id) => !current.has(id));
      if (missing.length > 0) issues.push(`B7/E2 参照を加えたのに変更記録が無い: ${key} → ${missing.join(", ")}（linkRecords.ts に追記）`);
      if (extra.length > 0) issues.push(`E2 変更記録の再生結果が現在の参照と合わない: ${key} → ${extra.join(", ")}`);
    }
  }

  // D 共有編成
  const sharedRosters = new Map<string, string>();
  for (const team of s.store.teams.filter((entry) => entry.shared)) {
    if (team.batch === null || team.batch < LINK_GATE_FROM_BATCH) issues.push(`D10 共有編成の batch は実施バッチ（${LINK_GATE_FROM_BATCH}以上）: ${team.id}（${team.batch}）`);
    if (team.sourceBatch !== undefined && team.batch !== null && team.sourceBatch >= team.batch) issues.push(`D10 sourceBatch は batch より前: ${team.id}`);
    const size = team.game === "zzz" ? 3 : 4;
    const names = team.members.map((entry) => entry.name.ja);
    if (team.members.length !== size || new Set(names).size !== names.length) issues.push(`D11 メンバー数・重複が不正: ${team.id}`);
    for (const entry of team.members) {
      if (!filled(entry.name) || !filled(entry.role)) issues.push(`D12 名前・役割の三言語が空: ${team.id} / ${entry.name.ja}`);
      if (GENERIC_ROLE_LABELS.has(entry.role.ja)) issues.push(`D13 汎用役割は使わない: ${team.id} / ${entry.name.ja}（${entry.role.ja}）`);
    }
    if (names.some((name) => team.targetSummary.ja.includes(name))) issues.push(`D14 targetSummary にメンバー名: ${team.id}`);
    const roster = rosterKey(team.game, team.members, s.resolve);
    if (team.batch !== null && team.batch >= 24) {
      if (!team.id.startsWith(`team-${team.game}-${team.origin}-b${team.batch}-`)) issues.push(`D15 ID 規則違反: ${team.id}`);
      if (sharedRosters.has(roster)) issues.push(`D15 他の共有編成と同じ構成: ${team.id} / ${sharedRosters.get(roster)}`);
      if (!isHttps(team.sourceUrl) || team.communitySources.length === 0) issues.push(`D15 出典が不正: ${team.id}`);
    }
    if (!sharedRosters.has(roster)) sharedRosters.set(roster, team.id);
  }

  // E 変更記録
  for (const [key, def] of Object.entries(s.batches)) {
    if (Number(key) !== def.batch) issues.push(`E1 バッチ定義のキーと batch が不一致: ${key}`);
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+09:00$/.test(def.date) || !isDate(def.updatedAt)) issues.push(`E1 バッチ定義の日付が不正: ${key}`);
  }
  const recordKeys = new Set<string>();
  for (const record of s.records) {
    const key = `${record.game}:${record.owner}:${record.batch}`;
    if (!s.batches[record.batch]) issues.push(`E3 未定義バッチの変更記録: ${key}`);
    if (!isCatalog(record.game, record.owner)) issues.push(`E3 変更記録のキャラがカタログ外: ${key}`);
    if (recordKeys.has(key)) issues.push(`E3 同じキャラ・バッチの変更記録が複数: ${key}`);
    recordKeys.add(key);
    const ids = [...record.added, ...record.removed];
    if (ids.length === 0 || new Set(ids).size !== ids.length) issues.push(`E3 追加・除外が空または重複: ${key}`);
    for (const id of record.added) if (!s.store.byId.has(id)) issues.push(`E4 変更記録が指す編成がマスタに無い: ${key} → ${id}`);
  }
  const batch23 = JSON.stringify(s.records.filter((record) => record.batch === 23));
  if (batch23 !== FROZEN_BATCH23_RECORDS) issues.push("E5 第23バッチの変更記録が書き換えられた（追記専用）");
  return issues;
}
