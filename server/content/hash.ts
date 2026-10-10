import { createHash } from "node:crypto";
import { CONTENT_SCHEMA_VERSION, type SourceText } from "../../shared/content/types";

const lf = (value: string) => value.replace(/\r\n?/g, "\n");

/** Do not trim, collapse spaces, normalize Unicode, or modify the translation hash. */
export function sourceHash(source: SourceText): string {
  const placeholders = Object.entries(source.placeholders).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
  const dependencies = [...source.dependencies]
    .sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
    .map(({ id, contractVersion }) => [id, lf(contractVersion)]);
  return createHash("sha256").update(JSON.stringify({
    schemaVersion: CONTENT_SCHEMA_VERSION,
    id: source.id,
    ja: lf(source.ja),
    context: lf(source.context),
    placeholders,
    dependencies,
    protectedTokens: [...source.protectedTokens].map(lf).sort(),
    sameTextAllowed: source.sameTextAllowed ? lf(source.sameTextAllowed.reason) : null,
  }), "utf8").digest("hex");
}

export function contentDigest(value: unknown): string {
  return createHash("sha256").update(JSON.stringify(value), "utf8").digest("hex");
}
