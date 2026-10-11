import { records as hsr, sources as hsrSources } from "./ja/characters/hsr";
import { records as genshin, sources as genshinSources } from "./ja/characters/genshin";
import { records as zzz, sources as zzzSources } from "./ja/characters/zzz";
import type { CharacterContent, Game } from "../shared/content/domains";
import type { SourceText } from "../shared/content/types";
import { characterRefs } from "../shared/content/walk";
import { SKILL_REQUIRED_KINDS } from "./coverage/skillRequirements";

export type OrderedCharacterContent = CharacterContent & { order: number };
export const characterRecords: OrderedCharacterContent[] = [...hsr, ...genshin, ...zzz];
export const characterSources: SourceText[] = [...hsrSources, ...genshinSources, ...zzzSources];

export function validateCharacterRecords(records: OrderedCharacterContent[], sources: SourceText[]) {
  const ids = new Set<string>();
  const orders = new Set<string>();
  const sourceMap = new Map(sources.map(source => [source.id, source]));
  const fields = ["identityKey", "game", "order", "name", "elementKey", "roleKey", "introduction", "skills"].sort();
  if (sourceMap.size !== sources.length) throw new Error("Duplicate character source ID");
  for (const record of records) {
    if (JSON.stringify(Object.keys(record).sort()) !== JSON.stringify(fields)) throw new Error("Character authoring fields differ");
    if (!["hsr", "genshin", "zzz"].includes(record.game) || !record.identityKey.startsWith(`${record.game}:`)) throw new Error("Character game/identity differs");
    if (ids.has(record.identityKey)) throw new Error("Duplicate character identity");
    if (!Number.isInteger(record.order) || record.order <= 0 || orders.has(`${record.game}:${record.order}`)) throw new Error("Invalid character order");
    if (record.name.kind !== "textRef" || record.name.id !== `character.${record.game}.${record.identityKey.slice(record.game.length + 1)}.name` || !sourceMap.has(record.name.id)) throw new Error("Character name reference differs");
    if ([record.elementKey, record.roleKey].some(key => key !== null && (typeof key !== "string" || !key.trim()))) throw new Error("Invalid character metadata key");
    const { order: _order, ...character } = record;
    characterRefs(character);
    if (record.skills.status === "registered") {
      const skills = record.skills.data;
      if (SKILL_REQUIRED_KINDS[record.game].some(kind => !skills.some(skill => skill.kind === kind))) throw new Error("Required skill kind missing");
      if (new Set(skills.map(skill => skill.skillId)).size !== skills.length || new Set(skills.map(skill => skill.order)).size !== skills.length) throw new Error("Duplicate skill identity/order");
      if (skills.some(skill => !skill.skillId.trim() || !Number.isInteger(skill.order) || skill.order <= 0 || !skill.sourceUrls.length)) throw new Error("Skill metadata incomplete");
    }
    ids.add(record.identityKey); orders.add(`${record.game}:${record.order}`);
  }
  return sourceMap;
}
export function characterNames(game: Game): string[] {
  const sources = validateCharacterRecords(characterRecords, characterSources);
  return characterRecords.filter(record => record.game === game).sort((a, b) => a.order - b.order).map(record => sources.get(record.name.id)!.ja);
}
