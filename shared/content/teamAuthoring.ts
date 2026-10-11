import type { Team, LocalizedText } from "../../server/parties/types";
import type { TextRef } from "./types";
/** Preserve computation metadata while requiring refs for every localized field. */
export type RefFields<T> = T extends LocalizedText
  ? TextRef
  : T extends Array<infer U>
    ? Array<RefFields<U>>
    : T extends object
      ? { [K in keyof T]: RefFields<T[K]> }
      : T;
export type TeamAuthoring = Omit<RefFields<Team>, "members" | "synergy"> & {
  members: Array<
    RefFields<Team["members"][number]> & {
      identityKey: string;
      identityResolution: "confirmed" | "legacy";
      identityReason?: string;
    }
  >;
  synergy: Array<{ blockId: string; text: TextRef }>;
};
