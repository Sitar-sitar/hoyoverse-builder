import type { Section, TextRef } from "./types";
import type { StatKey } from "../../server/buildAdvisor";

export type Game = "hsr" | "genshin" | "zzz";
export type NameReference = { identityKey: string; resolution: "confirmed" | "legacy"; name: TextRef };
export type SkillEffect = {
  effectId: string;
  condition?: TextRef;
  values: Section<Array<{ level: number; value: number; unit: string; scalingKey?: StatKey }>>;
};
export type SkillDefinition = {
  skillId: string;
  kind: string;
  order: number;
  name: TextRef;
  description: TextRef;
  effects: SkillEffect[];
  notes: Section<TextRef[]>;
  sourceUrls: string[];
};
export type CharacterContent = {
  identityKey: string;
  game: Game;
  name: TextRef;
  elementKey: string;
  roleKey: string;
  introduction: Section<TextRef[]>;
  skills: Section<SkillDefinition[]>;
};
export type EquipmentRecommendation = {
  recommendationId: string;
  order: number;
  sets: Array<{ identityKey: string; pieces: number }>;
  description: TextRef;
  reason: Section<TextRef[]>;
  alternatives: Section<TextRef[]>;
};
export type GuideContent = {
  guideId: string;
  identityKey: string;
  headline: TextRef;
  equipmentRecommendations: EquipmentRecommendation[];
  mainStatPreferences: Array<{ slotKey: string; statOptions: string[]; slotLabel: TextRef; value: TextRef }>;
  targetDefinitions: Array<{ key: StatKey; label: TextRef; unit: "%" | ""; strict: number; goal: number; base: number }>;
  targetContext?: TextRef;
  sourceLabels: TextRef[];
};
export type TeamContent = {
  teamId: string;
  game: Game;
  title: TextRef;
  members: Array<{ identityKey: string; name: TextRef; role: TextRef }>;
  synergy: Array<{ blockId: string; text: TextRef }>;
  targetSummary: TextRef;
  changes: Array<{ key: StatKey; label: TextRef; reason: TextRef }>;
  sources: Array<{ sourceId: string; label: TextRef; note?: TextRef; url: string }>;
};
export type ConstellationContent = {
  identityKey: string;
  rankLabel: TextRef;
  effects: Array<{ level: number; name: TextRef; description: TextRef; caution?: TextRef; changes: Array<{ key: StatKey; label: TextRef; reason: TextRef }> }>;
  sourceLabel: TextRef;
};
export type HistoryContent = {
  eventId: string;
  date: string;
  title: TextRef;
  summary: TextRef;
  changes: Array<{ blockId: string; text: TextRef }>;
  rationale: TextRef;
};
