import { TRPCError } from "@trpc/server";
import { errorMessage } from "../content/errors";

/**
 * 新規UID照会作業の同時実行上限（3ゲーム合計）。待機列は持たず、空きが無ければ即時に拒否する。
 * キャッシュヒットと同一UIDのin-flight共有は呼び出し側で先に返すため、この枠を消費しない。
 * 値は測定根拠なしに変えない（設計: docs/修正設計書_運用安定化と保守性改善_2026-10-19.md §4.1・§5.2）。
 */
export const LOOKUP_CAPACITY = 8;

let active = 0;

export function activeLookupCount() {
  return active;
}

/**
 * 枠を同期的に取得して `work` を実行し、成功・同期throw・rejectのどれでも1回だけ解放する。
 * 空きが無い場合は `work` を呼ばずに SERVICE_UNAVAILABLE で拒否する（上流取得・fallback・キャッシュ書込なし）。
 */
export function runWithLookupCapacity<T>(work: () => Promise<T>): Promise<T> {
  if (active >= LOOKUP_CAPACITY) {
    return Promise.reject(new TRPCError({ code: "SERVICE_UNAVAILABLE", message: errorMessage("public.busy") }));
  }
  active += 1;
  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    active -= 1;
  };
  let pending: Promise<T>;
  try {
    pending = work();
  } catch (error) {
    release();
    return Promise.reject(error);
  }
  return Promise.resolve(pending).finally(release);
}
