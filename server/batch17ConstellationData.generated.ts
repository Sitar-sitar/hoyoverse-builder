/** Compatibility projection. Authoring lives in content/constellationBatch17.ts. */
import { records } from "../content/constellationBatch17";
import { projectConstellations } from "./content/constellations";
export type { Batch17ConstellationEntry } from "../shared/content/constellationAuthoring";
export const BATCH_17_CHARACTER_NAMES = [
  "レザー",
  "ロサリア",
  "雲菫",
  "煙緋",
  "嘉明",
  "甘雨",
  "閑雲",
  "凝光",
  "九条裟羅",
  "荒瀧一斗",
  "刻晴",
  "珊瑚宮心海",
  "鹿野院平蔵",
  "七七",
  "重雲",
  "申鶴",
  "神里綾華",
  "神里綾人",
  "辛炎",
  "千織",
  "早柚",
  "放浪者",
  "北斗",
  "夢見月瑞希",
  "藍硯",
  "綺良々",
  "魈",
  "旅人",
] as const;
export const BATCH_17_CONSTELLATIONS = projectConstellations(records);
