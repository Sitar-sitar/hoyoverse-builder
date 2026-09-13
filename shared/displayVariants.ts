/**
 * 表示バリアントの登録表と解決規則（設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.2.1）。
 *
 * - 値 `legacy` は常に現行表示を指し、全キーの既定値。
 * - 未完成のバリアントは登録表に載せない（D1）。
 * - サーバー（保存・応答の検証）とクライアント（表示の決定）が同じ規則を使うため、副作用を持たない。
 */

export const LEGACY_VARIANT = "legacy";

/** 初回表示用キャッシュの有効期限（U03）。 */
export const DISPLAY_CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export type DisplayProposal = "A" | "B" | "C" | "D" | "E-1" | "E-2" | "F";

export type DisplayVariantDefinition = {
  key: string;
  proposal: DisplayProposal;
  /** 管理画面の表示名（日本語） */
  label: string;
  /** 影響する画面（管理画面の説明用） */
  screens: readonly string[];
  /** 先頭は必ず legacy */
  variants: readonly { id: string; label: string; description: string }[];
  /** プレビュー時に開く既定の画面 */
  previewPath: DisplayPreviewPath;
};

/** プレビューで開ける画面の固定候補（U12）。 */
export const DISPLAY_PREVIEW_PATHS = [
  { path: "/", label: "UID照会" },
  { path: "/characters", label: "キャラ図鑑" },
  { path: "/updates", label: "更新履歴" },
] as const;

export type DisplayPreviewPath = (typeof DISPLAY_PREVIEW_PATHS)[number]["path"];

export const DISPLAY_VARIANTS: readonly DisplayVariantDefinition[] = [
  {
    key: "progressionStepper",
    proposal: "D",
    label: "凸の6段表示",
    screens: ["UID照会", "キャラ図鑑"],
    previewPath: "/characters",
    variants: [
      { id: LEGACY_VARIANT, label: "現行", description: "解放済みの効果をカードで並べ、未解放の効果は折りたたみで表示します。" },
      { id: "stepper", label: "縦のタイムライン", description: "1〜6段をゲームごとの記号付きの縦タイムラインで並べ、選んだ段の詳細を表示します。" },
    ],
  },
];

export type DisplayVariants = Record<string, string>;

export type PublishedDisplayState =
  | { status: "loading" }
  | { status: "success"; variants: DisplayVariants }
  | { status: "error" };

export type DisplayVariantChange = { key: string; from: string; to: string };

const definitionByKey = new Map(DISPLAY_VARIANTS.map((definition) => [definition.key, definition]));

export function isKnownDisplayKey(key: string) {
  return definitionByKey.has(key);
}

export function isKnownDisplayVariant(key: string, variant: unknown): variant is string {
  if (typeof variant !== "string") return false;
  return definitionByKey.get(key)?.variants.some((item) => item.id === variant) ?? false;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** 登録表に無いキー・値を落とす。入力が不正な形なら空にする。 */
export function sanitizeDisplaySettings(raw: unknown): DisplayVariants {
  if (!isPlainObject(raw)) return {};
  const result: DisplayVariants = {};
  for (const definition of DISPLAY_VARIANTS) {
    if (!Object.prototype.hasOwnProperty.call(raw, definition.key)) continue;
    const value = raw[definition.key];
    if (isKnownDisplayVariant(definition.key, value)) result[definition.key] = value;
  }
  return result;
}

/** 全登録キーについて有効な値を返す（DR-01・U02）。 */
export function resolveDisplayVariants(input: {
  published: PublishedDisplayState;
  cached: DisplayVariants | null;
  preview: DisplayVariants | null;
  isAdmin: boolean;
}): DisplayVariants {
  const { published, cached, preview, isAdmin } = input;
  const result: DisplayVariants = {};
  for (const definition of DISPLAY_VARIANTS) {
    const { key } = definition;
    let value = LEGACY_VARIANT;
    if (published.status === "success") {
      // 取得に成功したスナップショットの欠落・無効値は legacy。過去のキャッシュへは戻らない。
      const candidate = published.variants[key];
      if (isKnownDisplayVariant(key, candidate)) value = candidate;
    } else if (published.status === "loading") {
      const candidate = cached?.[key];
      if (isKnownDisplayVariant(key, candidate)) value = candidate;
    }
    if (isAdmin) {
      const candidate = preview?.[key];
      if (isKnownDisplayVariant(key, candidate)) value = candidate;
    }
    result[key] = value;
  }
  return result;
}

/** 全登録キーを legacy にした値。 */
export function legacyDisplayVariants(): DisplayVariants {
  return Object.fromEntries(DISPLAY_VARIANTS.map((definition) => [definition.key, LEGACY_VARIANT]));
}

/** 2つの値の差分を登録表の順で返す（管理画面の確認とプレビュー帯の件数に使う）。 */
export function diffDisplayVariants(from: DisplayVariants, to: DisplayVariants): DisplayVariantChange[] {
  return DISPLAY_VARIANTS.flatMap((definition) => {
    const before = isKnownDisplayVariant(definition.key, from[definition.key]) ? from[definition.key] : LEGACY_VARIANT;
    const after = isKnownDisplayVariant(definition.key, to[definition.key]) ? to[definition.key] : LEGACY_VARIANT;
    return before === after ? [] : [{ key: definition.key, from: before, to: after }];
  });
}

/** localStorage のキャッシュ文字列を検証する。期限切れ・破損・不正な形は null（U03）。 */
export function parseDisplayCache(raw: string | null, now: number): DisplayVariants | null {
  if (!raw) return null;
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!isPlainObject(parsed) || typeof parsed.savedAt !== "number" || !Number.isFinite(parsed.savedAt)) return null;
  if (!isPlainObject(parsed.variants)) return null;
  const age = now - parsed.savedAt;
  if (age < 0 || age > DISPLAY_CACHE_MAX_AGE_MS) return null;
  return sanitizeDisplaySettings(parsed.variants);
}

export function serializeDisplayCache(variants: DisplayVariants, now: number) {
  return JSON.stringify({ savedAt: now, variants: sanitizeDisplaySettings(variants) });
}

/** sessionStorage のプレビュー文字列を検証する。有効な値が無ければ null。 */
export function parseDisplayPreview(raw: string | null): DisplayVariants | null {
  if (!raw) return null;
  try {
    const variants = sanitizeDisplaySettings(JSON.parse(raw));
    return Object.keys(variants).length ? variants : null;
  } catch {
    return null;
  }
}
