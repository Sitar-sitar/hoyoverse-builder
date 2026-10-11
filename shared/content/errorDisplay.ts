import type { SourceText } from "./types";

function errorMessages(message: string, validation: boolean): string[] {
  if (validation) {
    try {
      const issues: unknown = JSON.parse(message);
      if (Array.isArray(issues))
        return issues.flatMap(issue =>
          issue &&
          typeof issue === "object" &&
          typeof issue.message === "string"
            ? [issue.message]
            : []
        );
    } catch {
      /* Legacy validation messages may be plain strings. */
    }
  }
  return [message];
}

/** Preserve the API message and add only a stable code for recognized copy. */
export function contentErrorCode(
  message: string,
  sources: readonly SourceText[],
  validation = false
): string | null {
  const source = sources.find(
    source =>
      source.id.startsWith("ui.errors.") &&
      errorMessages(message, validation).includes(source.ja)
  );
  return source ? source.id.slice("ui.errors.".length) : null;
}

/** New codes take precedence; older APIs use exact known messages only. */
export function displayErrorText(
  error: unknown,
  texts: Record<string, { ja: string }>,
  audience: "public" | "admin",
  fallback: string
) {
  const record =
    error && typeof error === "object"
      ? (error as { message?: unknown; data?: unknown })
      : {};
  const data =
    record.data && typeof record.data === "object"
      ? (record.data as { contentErrorCode?: unknown; code?: unknown })
      : {};
  const prefix = `ui.errors.${audience}.`;
  if (typeof data.contentErrorCode === "string") {
    const id = `ui.errors.${data.contentErrorCode}`;
    if (
      id.startsWith(prefix) &&
      Object.hasOwn(texts, id) &&
      typeof texts[id]?.ja === "string"
    )
      return texts[id]!.ja;
    return fallback;
  }
  if (typeof record.message === "string") {
    const entry = Object.entries(texts).find(
      ([id, value]) =>
        id.startsWith(prefix) &&
        errorMessages(
          record.message as string,
          data.code === "BAD_REQUEST"
        ).includes(value.ja)
    );
    if (entry) return entry[1].ja;
  }
  return fallback;
}
