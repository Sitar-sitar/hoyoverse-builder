import { errorMessage } from "./content/errors";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { APP_LANGUAGES, LANGUAGE_SETTINGS_KEY, normalizeEnabledLanguages, type AppLanguage } from "@shared/languages";
import { contentManifest, contentRepository } from "./content/repository";
import { reportCoverage } from "./content/coverage";
import { getDisplaySettingRows, upsertDisplaySettings } from "./db";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";

export async function readLanguageSettings() {
  const rows = await getDisplaySettingRows();
  const raw = rows.find(row => row.settingKey === LANGUAGE_SETTINGS_KEY)?.variant;
  let value: unknown;
  try { value = raw ? JSON.parse(raw) : undefined; } catch { value = undefined; }
  const readyLanguages: readonly string[] = contentManifest().readyLanguages;
  return { enabledLanguages: normalizeEnabledLanguages(value).filter(language => readyLanguages.includes(language)) };
}

export const languageSettingsRouter = router({
  settings: publicProcedure.query(async () => {
    try { return await readLanguageSettings(); }
    catch {
      console.error("[LanguageSettings] Unable to load public settings");
      return { enabledLanguages: normalizeEnabledLanguages(undefined) };
    }
  }),
  adminSettings: adminProcedure.query(async (): Promise<{ enabledLanguages: AppLanguage[]; preparation?: { mode: "preparation"; unavailableSources: number } }> => {
    try {
      const settings = await readLanguageSettings();
      const report = reportCoverage(contentRepository(), "public");
      return { ...settings, preparation: { mode: "preparation", unavailableSources: report.sourceCount } };
    }
    catch { throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: errorMessage("admin.languageLoadFailed") }); }
  }),
  publish: adminProcedure.input(z.object({
    enabledLanguages: z.array(z.enum(APP_LANGUAGES)).min(1).max(3)
      .refine(value => value.includes("ja"), "日本語は常時有効です。")
      .refine(value => new Set(value).size === value.length, "言語を重複して指定できません。"),
  })).mutation(async ({ input }) => {
    const readyLanguages: readonly string[] = contentManifest().readyLanguages;
    if (input.enabledLanguages.some(language => !readyLanguages.includes(language))) {
      throw new TRPCError({ code: "PRECONDITION_FAILED", message: errorMessage("admin.translationPreparation") });
    }
    const enabledLanguages = normalizeEnabledLanguages(input.enabledLanguages);
    try {
      await upsertDisplaySettings([{ key: LANGUAGE_SETTINGS_KEY, variant: JSON.stringify(enabledLanguages) }]);
    } catch {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: errorMessage("admin.languageSaveFailed") });
    }
    return { enabledLanguages };
  }),
});
