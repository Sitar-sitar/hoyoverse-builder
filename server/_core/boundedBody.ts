/**
 * 上流応答本文をbyte上限付きで読む。fetchが展開した後の実byte数を数え、上限を超えた時点で
 * streamをcancelして`BodyLimitError`を投げる。Content-Lengthは早期拒否の補助にだけ使う。
 * 呼出し側のAbortSignal（期限）は本文読取り完了まで有効なまま渡すこと。
 * 設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.2
 */

export const MiB = 1024 * 1024;

/**
 * 上限値は2026-10-20に利用者が採用（最悪時の隔離測定で設計初期値16/4/4 MiBのpeak RSSが過大だったため）。
 * 実データ（HSR bundle 3.63 MiB・最大ファイル2.43 MiB、原神0.40 MiB、ZZZ 0.53 MiB）に対する余裕を残す。
 */
/** UID応答（MiHoMo/Enka/原神/ZZZ）。U-3の実測で確定する。 */
export const UID_BODY_LIMIT_BYTES = 1 * MiB;
export const HSR_STATIC_FILE_LIMIT_BYTES = 4 * MiB;
export const HSR_STATIC_BUNDLE_LIMIT_BYTES = 8 * MiB;
export const ENKA_STORE_FILE_LIMIT_BYTES = 2 * MiB;
export const ENKA_STORE_BUNDLE_LIMIT_BYTES = 2 * MiB;

export class BodyLimitError extends Error {
  constructor() {
    super("upstream_body_too_large");
    this.name = "BodyLimitError";
  }
}

/** 同じbundleの全ファイルで共有する残りbyte数。chunkを読むたびに減らすので、並列取得でも合計を超えない。 */
export type ByteBudget = { remaining: number };

export function createByteBudget(totalBytes: number): ByteBudget {
  return { remaining: totalBytes };
}

export async function readBoundedText(response: Response, options: { maxBytes: number; budget?: ByteBudget }): Promise<string> {
  const { maxBytes, budget } = options;
  const declared = Number(response.headers.get("content-length"));
  if (Number.isFinite(declared) && (declared > maxBytes || (budget && declared > budget.remaining))) {
    await response.body?.cancel().catch(() => {});
    throw new BodyLimitError();
  }
  if (!response.body) return "";

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (budget) budget.remaining -= value.byteLength;
    if (size > maxBytes || (budget && budget.remaining < 0)) {
      await reader.cancel().catch(() => {});
      throw new BodyLimitError();
    }
    chunks.push(value);
  }
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(body);
}
