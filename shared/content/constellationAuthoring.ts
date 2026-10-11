import type {
  ConstellationEffect,
  LocalizedText,
} from "../../server/characterConstellations";
import type { RefFields } from "./teamAuthoring";
export type Batch17ConstellationEntry = {
  gameVersion: string;
  dataAsOf: string;
  updatedAt: string;
  sourceLabel: LocalizedText;
  sourceUrl: string;
  effects: ConstellationEffect[];
};
export type ConstellationAuthoring = {
  entryId: string;
  identities: string[];
  data: RefFields<Batch17ConstellationEntry>;
};
