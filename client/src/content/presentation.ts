import { CONTENT_MANIFEST } from "./manifest";
import type { PresentationDTO } from "@shared/content/presentation";

export function validPresentation(value: unknown): value is PresentationDTO {
  if (!value || typeof value !== "object") return false;
  const dto = value as PresentationDTO;
  const statuses=["registered","notCollected","notApplicable"];
  return dto.schemaVersion === 1 && dto.language === "ja" && dto.contentRevision === CONTENT_MANIFEST.contentRevision &&
    (dto.identityKey===null||typeof dto.identityKey==="string") && Boolean(dto.information) && statuses.includes(dto.information.introduction) && statuses.includes(dto.information.skills) &&
    Boolean(dto.display) && typeof dto.display === "object" && !Array.isArray(dto.display);
}
/** Numeric inputs stay in the legacy model; only display strings are projected. */
function hydrate(legacy: unknown, display: unknown): unknown {
  if (typeof legacy === "string") return typeof display === "string" ? display : legacy;
  if (Array.isArray(legacy)) return Array.isArray(display) && legacy.length === display.length ? legacy.map((value, index) => hydrate(value, display[index])) : legacy;
  if (!legacy || typeof legacy !== "object") return legacy;
  const record = legacy as Record<string, unknown>;
  if (typeof record.ja === "string" && typeof record.en === "string" && typeof record["zh-CN"] === "string") return typeof display === "string" ? { ...record, ja: display } : legacy;
  if (!display || typeof display !== "object") return legacy;
  const identifiers = new Set(["id", "key", "unit", "profileId", "slot", "game", "games", "scope", "date", "sourceId", "identity", "gameVersion", "dataAsOf", "updatedAt", "sourceUrl", "url", "checkedAt"]);
  return Object.fromEntries(Object.entries(record).map(([key, value]) => [key, identifiers.has(key) ? value : hydrate(value, (display as Record<string, unknown>)[key])]));
}
export function selectPresentation<T extends object>(legacy: T | undefined): T | undefined {
  if (!legacy) return legacy;
  const dto = (legacy as { presentation?: unknown }).presentation;
  if (!validPresentation(dto)) {
    if (dto) console.warn("[Content] Presentation identity mismatch; using Japanese compatibility fields");
    return legacy;
  }
  const output = { ...legacy } as T;
  for (const field of ["name", "guide", "statsNote", "constellations", "partyRecommendations", "partyAppearances", "games", "siteEvents", "characters", "updateLedger"] as const) {
    if (field in legacy && field in dto.display) (output as Record<string, unknown>)[field] = hydrate((legacy as Record<string, unknown>)[field], dto.display[field]);
  }
  return output;
}
