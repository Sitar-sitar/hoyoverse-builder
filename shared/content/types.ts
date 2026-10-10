/** Authoring contracts. No Node imports or runtime translation in this module. */
export const CONTENT_SCHEMA_VERSION = 1 as const;
export const TRANSLATION_LANGUAGES = ["en", "zh-CN"] as const;
export type TranslationLanguage = typeof TRANSLATION_LANGUAGES[number];
export type ContentAudience = "public" | "admin";
export type TextId = `${"character" | "guide" | "skill" | "constellation" | "team" | "history" | "ui" | "term"}.${string}`;
export type TextRef = { kind: "textRef"; id: TextId };
export type PlaceholderType = "string" | "number";
export type TextDependency = { id: TextId; contractVersion: string };

export type SourceText = {
  id: TextId;
  ja: string;
  context: string;
  audience: ContentAudience;
  placeholders: Record<string, PlaceholderType>;
  dependencies: TextDependency[];
  protectedTokens: string[];
  sameTextAllowed?: { reason: string };
};

export type TranslationRecord = {
  text: string;
  sourceHash: string | null;
  review: "pending" | "approved";
  origin: "legacy" | "reviewed";
  reviewedAt?: string;
};
export type TranslationState = "missing" | "stale" | "pending" | "approved" | "invalid";
export type Section<T> =
  | { status: "registered"; data: T; evidence: string }
  | { status: "notCollected"; reason: string; requiredKinds: string[] }
  | { status: "notApplicable"; reason: string; evidence: string };

export type CoverageSection = {
  id: string;
  audience: ContentAudience;
  visibility: "active" | "planned";
  section: Section<TextRef[]>;
};
export type ContentCatalog = {
  schemaVersion: typeof CONTENT_SCHEMA_VERSION;
  sources: SourceText[];
  translations: Record<TranslationLanguage, Record<string, TranslationRecord>>;
  aliases: { from: TextId; to: TextId }[];
  sections: CoverageSection[];
};
export type ContentIssue = {
  code: string;
  id: string;
  language?: TranslationLanguage;
  detail: string;
};

/** Adding a display field requires an explicit policy; no implicit string fallback. */
export type DisplayFieldPolicy<T> = { [K in keyof T]-?: "text" | "name" | "number" | "internal" | "nested" };
