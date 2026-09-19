type FetchImplementation = typeof fetch;

/**
 * 端の機器が tRPC へ届く前に HTML の 5xx を返すことがある。その本文をそのまま
 * 渡すと React Query には JSON の解析例外しか出ない。
 *
 * 以前は擬似の tRPC エラーエンベロープを組み立てて返していたが、
 * 生成できるのは常に 1 件・`path` は `build.lookup` 固定だったため、
 * httpBatchLink が複数 procedure をまとめた要求では件数も path も合わなかった。
 *
 * 代わりに、JSON 以外の応答では `Response` を返さず読めるメッセージで throw する。
 * httpBatchLink は fetch の reject を `TRPCClientError.from(cause)` で包み、
 * そのバッチに含まれる全 operation へ同じエラーを配るため、件数不一致も
 * path の取り違えも起こらない。
 *
 * 設計: docs/修正設計書_公開API保護と外部API耐障害性_2026-09-19.md §4 Phase 45-2
 */
export async function safeTrpcFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
  implementation: FetchImplementation = fetch,
): Promise<Response> {
  let response: Response;
  try {
    response = await implementation(input, { ...(init ?? {}), credentials: "include" });
  } catch {
    throw new Error("照会サービスへ接続できませんでした。通信環境を確認して再試行してください。");
  }

  const contentType = response.headers.get("content-type") ?? "";
  // tRPC の正常応答も、tRPC 由来の 429 も JSON なのでそのまま通す。
  if (contentType.toLowerCase().includes("application/json")) return response;

  const status = response.status || 502;
  throw new Error(status >= 500
    ? "照会サービスが一時的に応答していません。1〜2分後にもう一度お試しください。"
    : "照会リクエストを処理できませんでした。UIDと公開設定をご確認ください。");
}
