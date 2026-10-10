import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { APP_LANGUAGES, LANGUAGE_SETTINGS_KEY, normalizeEnabledLanguages } from "@shared/languages";
import { getDisplaySettingRows, upsertDisplaySettings } from "./db";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";

export async function readLanguageSettings() {
  const rows = await getDisplaySettingRows();
  const raw = rows.find(row => row.settingKey === LANGUAGE_SETTINGS_KEY)?.variant;
  let value: unknown;
  try { value = raw ? JSON.parse(raw) : undefined; } catch { value = undefined; }
  return { enabledLanguages: normalizeEnabledLanguages(value) };
}

export const languageSettingsRouter = router({
  settings: publicProcedure.query(async () => {
    try { return await readLanguageSettings(); }
    catch {
      console.error("[LanguageSettings] Unable to load public settings");
      return { enabledLanguages: normalizeEnabledLanguages(undefined) };
    }
  }),
  adminSettings: adminProcedure.query(async () => {
    try { return await readLanguageSettings(); }
    catch { throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "言語設定を取得できませんでした。" }); }
  }),
  publish: adminProcedure.input(z.object({
    enabledLanguages: z.array(z.enum(APP_LANGUAGES)).min(1).max(3)
      .refine(value => value.includes("ja"), "日本語は常時有効です。")
      .refine(value => new Set(value).size === value.length, "言語を重複して指定できません。"),
  })).mutation(async ({ input }) => {
    const enabledLanguages = normalizeEnabledLanguages(input.enabledLanguages);
    try {
      await upsertDisplaySettings([{ key: LANGUAGE_SETTINGS_KEY, variant: JSON.stringify(enabledLanguages) }]);
    } catch {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "言語設定を保存できませんでした。" });
    }
    return { enabledLanguages };
  }),
});
