/**
 * 情報不足・外部名称境界の作業一覧（読み取り専用）。入力は既存 report の判定結果だけで、
 * 正本・翻訳・公開条件は変更しない。ネットワーク・DB・ファイル書込を行わない純粋関数。
 * 設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §5.6
 */

export type BacklogGame = "hsr" | "genshin" | "zzz";

export type BacklogRow = {
  key: string;
  category: string;
  subjectId: string | null;
  game: BacklogGame | null;
  identityKey: string | null;
  visibility: "active" | "planned" | null;
  priority: 1 | 2 | 3;
  reason: string;
  requiredKinds: string[];
  ownerModule: string | null;
};

export type BacklogInput = {
  sourceRevision: string | null;
  sourceDirty: boolean;
  contentRevision: string;
  notCollected: Array<{ id: string; visibility: "active" | "planned"; reason: string; requiredKinds: readonly string[] }>;
  externalBoundaries: Array<{ id: string; game: BacklogGame; field: string; source: string; policy: string; reason: string }>;
  characters: Array<{ identityKey: string; game: BacklogGame; ownerModule: string }>;
  guides: Array<{ guideId: string; game: BacklogGame; identityKey: string; ownerModule: string; recommendationIds: string[] }>;
  translations: Record<string, Record<string, number>>;
  otherUnresolved: Record<string, number>;
};

export type BacklogDelta = { added: BacklogRow[]; removed: BacklogRow[]; changed: BacklogRow[] };

export type Backlog = {
  schemaVersion: 1;
  sourceRevision: string | null;
  sourceDirty: boolean;
  contentRevision: string;
  summary: ReturnType<typeof summarize>;
  items: BacklogRow[];
  delta: BacklogDelta | null;
};

export class BacklogBaselineError extends Error {
  constructor(readonly code: "baseline_invalid_json" | "baseline_schema_mismatch" | "baseline_duplicate_key") {
    super(code);
    this.name = "BacklogBaselineError";
  }
}

export const BACKLOG_ROW_FIELDS = ["key", "category", "subjectId", "game", "identityKey", "visibility", "priority", "reason", "requiredKinds", "ownerModule"] as const;

const GAMES = new Set<string>(["hsr", "genshin", "zzz"]);
const CHARACTER_SECTION = /^character\.(hsr|genshin|zzz)\.(.+)\.(introduction|skills)$/;

/** コードポイント順（localeCompare は環境で揺れるため使わない）。 */
function compareText(a: string, b: string) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function compareNullable(a: string | null, b: string | null) {
  if (a === b) return 0;
  if (a === null) return 1;
  if (b === null) return -1;
  return compareText(a, b);
}

export function compareRows(a: BacklogRow, b: BacklogRow) {
  return a.priority - b.priority
    || compareNullable(a.game, b.game)
    || compareText(a.category, b.category)
    || compareNullable(a.subjectId, b.subjectId)
    || compareText(a.key, b.key);
}

function informationRows(input: BacklogInput): BacklogRow[] {
  const characters = new Map(input.characters.map(record => [record.identityKey, record]));
  const guideBySection = new Map<string, BacklogInput["guides"][number] & { field: string }>();
  for (const guide of input.guides) {
    for (const recommendationId of guide.recommendationIds) {
      for (const field of ["reason", "alternatives"]) guideBySection.set(`${recommendationId}.${field}`, { ...guide, field });
    }
  }
  return input.notCollected.map(section => {
    const base = {
      key: `information:${section.id}`,
      visibility: section.visibility,
      priority: section.visibility === "active" ? 1 as const : 3 as const,
      reason: section.reason,
      requiredKinds: [...section.requiredKinds],
    };
    const characterMatch = CHARACTER_SECTION.exec(section.id);
    if (characterMatch) {
      const [, game, subjectId, kind] = characterMatch as unknown as [string, BacklogGame, string, string];
      const record = characters.get(`${game}:${subjectId}`);
      return { ...base, category: `character.${kind}`, game, subjectId: record ? subjectId : null, identityKey: record?.identityKey ?? null, ownerModule: record?.ownerModule ?? null };
    }
    const guide = guideBySection.get(section.id);
    if (guide) {
      // legacy・profile・複数キャラ共通は game だけを残し、キャラ帰属を推測しない。
      const record = characters.get(guide.identityKey);
      return { ...base, category: `guide.equipment.${guide.field}`, game: guide.game, subjectId: record ? guide.identityKey.slice(record.game.length + 1) : null, identityKey: record?.identityKey ?? null, ownerModule: guide.ownerModule };
    }
    return { ...base, category: "information.other", game: null, subjectId: null, identityKey: null, ownerModule: null };
  });
}

function externalRows(input: BacklogInput): BacklogRow[] {
  return input.externalBoundaries.filter(entry => entry.policy === "unresolved").map(entry => ({
    key: `external:${entry.id}`,
    category: `external.${entry.field}`,
    subjectId: null,
    game: entry.game,
    identityKey: null,
    visibility: null,
    priority: 2 as const,
    reason: entry.reason,
    requiredKinds: [],
    ownerModule: entry.source.split(":")[0]!.trim() || null,
  }));
}

function countBy<T>(values: T[], key: (value: T) => string) {
  const counts: Record<string, number> = {};
  for (const value of values) counts[key(value)] = (counts[key(value)] ?? 0) + 1;
  return Object.fromEntries(Object.entries(counts).sort(([a], [b]) => compareText(a, b)));
}

function summarize(items: BacklogRow[], input: BacklogInput) {
  const information = items.filter(row => row.key.startsWith("information:"));
  const external = items.filter(row => row.key.startsWith("external:"));
  return {
    // 単位が異なるため合計しない（情報section数と表示field境界数）。
    information: { unit: "sections", total: information.length, byVisibility: countBy(information, row => row.visibility ?? "none"), byCategory: countBy(information, row => row.category) },
    externalNames: { unit: "display-field boundaries", total: external.length },
    attributionNulls: {
      game: items.filter(row => row.game === null).length,
      subjectId: information.filter(row => row.subjectId === null).length,
      identityKey: information.filter(row => row.identityKey === null).length,
    },
    translations: input.translations,
    otherUnresolved: input.otherUnresolved,
  };
}

export function buildBacklog(input: BacklogInput, baseline?: unknown): Backlog {
  const items = [...informationRows(input), ...externalRows(input)]
    .map(row => Object.fromEntries(BACKLOG_ROW_FIELDS.map(field => [field, row[field]])) as BacklogRow)
    .sort(compareRows);
  const keys = new Set<string>();
  for (const row of items) {
    if (keys.has(row.key)) throw new Error("Duplicate backlog key");
    keys.add(row.key);
  }
  return {
    schemaVersion: 1,
    sourceRevision: input.sourceRevision && /^[0-9a-f]{40}$/.test(input.sourceRevision) ? input.sourceRevision : null,
    sourceDirty: input.sourceDirty,
    contentRevision: input.contentRevision,
    summary: summarize(items, input),
    items,
    delta: baseline === undefined ? null : diffBacklog(parseBaseline(baseline), items),
  };
}

function isRow(value: unknown): value is BacklogRow {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const row = value as Record<string, unknown>;
  const nullableString = (field: unknown) => field === null || typeof field === "string";
  return Object.keys(row).sort().join(",") === [...BACKLOG_ROW_FIELDS].sort().join(",")
    && typeof row.key === "string" && typeof row.category === "string" && typeof row.reason === "string"
    && nullableString(row.subjectId) && nullableString(row.identityKey) && nullableString(row.ownerModule)
    && (row.game === null || (typeof row.game === "string" && GAMES.has(row.game)))
    && (row.visibility === null || row.visibility === "active" || row.visibility === "planned")
    && (row.priority === 1 || row.priority === 2 || row.priority === 3)
    && Array.isArray(row.requiredKinds) && row.requiredKinds.every(kind => typeof kind === "string");
}

/** baseline は schemaVersion=1・同じ行schema・重複keyなしのときだけ受け付ける。自動変換はしない。 */
export function parseBaseline(value: unknown): BacklogRow[] {
  let parsed = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      throw new BacklogBaselineError("baseline_invalid_json");
    }
  }
  const record = parsed as { schemaVersion?: unknown; items?: unknown } | null;
  if (!record || typeof record !== "object" || record.schemaVersion !== 1 || !Array.isArray(record.items) || !record.items.every(isRow)) {
    throw new BacklogBaselineError("baseline_schema_mismatch");
  }
  const keys = new Set<string>();
  for (const row of record.items as BacklogRow[]) {
    if (keys.has(row.key)) throw new BacklogBaselineError("baseline_duplicate_key");
    keys.add(row.key);
  }
  return record.items as BacklogRow[];
}

function rowSignature(row: BacklogRow) {
  return JSON.stringify(BACKLOG_ROW_FIELDS.map(field => row[field]));
}

/** 行の意味フィールドだけを比較する。出力順やSHAの違いだけでは changed にしない。 */
export function diffBacklog(previous: BacklogRow[], current: BacklogRow[]): BacklogDelta {
  const before = new Map(previous.map(row => [row.key, row]));
  const after = new Map(current.map(row => [row.key, row]));
  return {
    added: current.filter(row => !before.has(row.key)).sort(compareRows),
    removed: previous.filter(row => !after.has(row.key)).sort(compareRows),
    changed: current.filter(row => before.has(row.key) && rowSignature(before.get(row.key)!) !== rowSignature(row)).sort(compareRows),
  };
}

function cell(value: unknown) {
  const text = value === null ? "" : Array.isArray(value) ? value.join(", ") : String(value);
  return text.replace(/\\/g, "\\\\").replace(/\|/g, "\\|").replace(/\r?\n|\r/g, "<br>");
}

function table(rows: BacklogRow[]) {
  return [
    `| ${BACKLOG_ROW_FIELDS.join(" | ")} |`,
    `| ${BACKLOG_ROW_FIELDS.map(() => "---").join(" | ")} |`,
    ...rows.map(row => `| ${BACKLOG_ROW_FIELDS.map(field => cell(row[field])).join(" | ")} |`),
  ].join("\n");
}

/** JSON と同じ全件を出す。絞込み・省略はしない。 */
export function backlogMarkdown(backlog: Backlog) {
  const { summary } = backlog;
  const lines = [
    "# Content improvement backlog",
    "",
    `- sourceRevision: ${backlog.sourceRevision ?? "unknown"}${backlog.sourceDirty ? " (dirty)" : ""}`,
    `- contentRevision: ${backlog.contentRevision}`,
    `- information sections: ${summary.information.total}`,
    `- external name boundaries: ${summary.externalNames.total}`,
    `- attribution nulls: game ${summary.attributionNulls.game} / subjectId ${summary.attributionNulls.subjectId} / identityKey ${summary.attributionNulls.identityKey}`,
    "",
    "## Items",
    "",
    table(backlog.items),
  ];
  if (backlog.delta) {
    for (const kind of ["added", "removed", "changed"] as const) {
      lines.push("", `## Delta: ${kind} (${backlog.delta[kind].length})`, "", table(backlog.delta[kind]));
    }
  }
  return `${lines.join("\n")}\n`;
}
