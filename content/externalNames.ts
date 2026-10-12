/** External payload values are never rewritten by the translation corpus. */
export const EXTERNAL_NAME_FIELDS = [
  "player.name", "characters.name", "characters.lightCone.name",
  "characters.relics.name", "characters.relics.setName",
  "characters.relics.main.name", "characters.relics.subs.name",
  "characters.allStats.name",
  "characters.element", "characters.path", "characters.relics.slot",
] as const;
export type ExternalNameField = typeof EXTERNAL_NAME_FIELDS[number];
export type ExternalNameBoundary = {
  id: string;
  game: "hsr" | "genshin" | "zzz";
  field: ExternalNameField;
  source: string;
  policy: "user-value" | "unresolved";
  reason: string;
};

const origins = {
  hsr: "server/buildAdvisor.ts: normalizeMihomoPayload/parseCharacter; MiHoMo name fields; server/enkaFallback.ts: fetchEnkaPayload",
  genshin: "server/gameProviders.ts: normalizeGenshinPayload; catalog.loc text-map and GI_PROP_NAMES",
  zzz: "server/gameProviders.ts: normalizeZzzPayload; zzzName catalog dictionary and zzzStat",
} as const;

export const externalNameBoundaries: ExternalNameBoundary[] =
  (["hsr", "genshin", "zzz"] as const).flatMap(game =>
    EXTERNAL_NAME_FIELDS.map(field => ({
      id: `external.${game}.${field}`, game, field, source: origins[game],
      policy: field === "player.name" ? "user-value" : "unresolved",
      reason: field === "player.name"
        ? "User nickname is preserved verbatim; it is not an authored translation target. Missing-value labels belong to the Japanese corpus."
        : field === "characters.element" || field === "characters.path" || field === "characters.relics.slot"
          ? "Existing provider/category labels and normalization keys are preserved. Element, path/weapon/profession and equipment-slot multilingual resolution is not verified; numeric slots and IDs remain compatibility literals, not translated prose."
          : "Existing Japanese/provider name is preserved. No multilingual dictionary or complete equipment identity mapping has been verified; unknown IDs must not be guessed.",
    })));

export function validateExternalNameBoundaries(records = externalNameBoundaries) {
  const expected = new Set((["hsr", "genshin", "zzz"] as const).flatMap(game =>
    EXTERNAL_NAME_FIELDS.map(field => `external.${game}.${field}`)));
  const seen = new Set<string>();
  for (const record of records) {
    if (Object.keys(record).sort().join(",") !== "field,game,id,policy,reason,source" ||
        !expected.has(record.id) || seen.has(record.id) ||
        record.id !== `external.${record.game}.${record.field}` ||
        !record.source.trim() || !record.reason.trim() ||
        record.policy !== (record.field === "player.name" ? "user-value" : "unresolved")) {
      throw new Error("Invalid external name boundary");
    }
    seen.add(record.id);
  }
  if (seen.size !== expected.size) throw new Error("Missing external name boundary");
}

export function externalNameReport() {
  validateExternalNameBoundaries();
  const entries = [...externalNameBoundaries].sort((a, b) => a.id.localeCompare(b.id));
  return { unit: "display-field boundaries, not observed users or equipment entities",
    unresolvedCount: entries.filter(entry => entry.policy === "unresolved").length,
    entries };
}
