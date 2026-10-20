import { describe, expect, it } from "vitest";
import { BodyLimitError, createByteBudget, readBoundedText } from "./boundedBody";

/** 上流本文の上限（設計: docs/修正設計書_セキュリティ残課題P2P3_2026-10-20.md §5.2・§8 B）。 */

/** chunk列を返すstreamと、cancel・読取り回数の記録。 */
function streamed(chunks: Uint8Array[], headers: Record<string, string> = {}) {
  const state = { cancelled: false, pulls: 0 };
  let index = 0;
  const body = new ReadableStream<Uint8Array>({
    pull(controller) {
      state.pulls++;
      if (index < chunks.length) controller.enqueue(chunks[index++]!);
      else controller.close();
    },
    cancel() { state.cancelled = true; },
  });
  return { response: new Response(body, { headers }), state };
}

const bytes = (n: number, fill = 0x61) => new Uint8Array(n).fill(fill);

describe("readBoundedText", () => {
  it("上限ちょうどは読み、1byte超は拒否してstreamをcancelする", async () => {
    await expect(readBoundedText(streamed([bytes(6), bytes(4)]).response, { maxBytes: 10 })).resolves.toBe("a".repeat(10));
    const over = streamed([bytes(6), bytes(5), bytes(100)]);
    await expect(readBoundedText(over.response, { maxBytes: 10 })).rejects.toBeInstanceOf(BodyLimitError);
    expect(over.state.cancelled).toBe(true);
  });

  it("Content-Lengthが上限を超えれば本文を読まずにcancelする", async () => {
    const declared = streamed([bytes(5)], { "content-length": "11" });
    await expect(readBoundedText(declared.response, { maxBytes: 10 })).rejects.toBeInstanceOf(BodyLimitError);
    expect(declared.state.cancelled).toBe(true);
  });

  it("Content-Lengthを小さく偽っても実byte数で拒否する", async () => {
    const lying = streamed([bytes(8), bytes(8)], { "content-length": "4" });
    await expect(readBoundedText(lying.response, { maxBytes: 10 })).rejects.toBeInstanceOf(BodyLimitError);
    expect(lying.state.cancelled).toBe(true);
  });

  it("bundleの共有予算は並列取得の合計で効く", async () => {
    const budget = createByteBudget(15);
    const results = await Promise.allSettled([
      readBoundedText(streamed([bytes(5), bytes(5)]).response, { maxBytes: 10, budget }),
      readBoundedText(streamed([bytes(5), bytes(5)]).response, { maxBytes: 10, budget }),
    ]);
    expect(results.filter(result => result.status === "rejected")).toHaveLength(1);
    expect(budget.remaining).toBeLessThan(0);
  });

  it("chunk境界で分かれたUTF-8を正しく復元する", async () => {
    const encoded = new TextEncoder().encode("静的データ");
    const split = streamed([encoded.slice(0, 4), encoded.slice(4)]);
    await expect(readBoundedText(split.response, { maxBytes: 100 })).resolves.toBe("静的データ");
  });

  it("4 MiB + 1 byteの実本文を拒否する", async () => {
    const big = streamed([bytes(4 * 1024 * 1024), bytes(1)]);
    await expect(readBoundedText(big.response, { maxBytes: 4 * 1024 * 1024 })).rejects.toBeInstanceOf(BodyLimitError);
  });
});
