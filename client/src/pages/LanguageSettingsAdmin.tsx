import { uiFormat, uiText } from "@/content/ui.admin";
import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import { LANGUAGE_LABELS } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { APP_LANGUAGES, type AppLanguage } from "@shared/languages";
import { CONTENT_MANIFEST } from "@/content/manifest";

export default function LanguageSettingsAdmin() {
  const { user, loading, isAuthenticated } = useAuth();
  const isAdmin = user?.role === "admin";
  const query = trpc.languages.adminSettings.useQuery(undefined, { enabled: isAdmin, retry: false, refetchOnWindowFocus: false });
  const mutation = trpc.languages.publish.useMutation();
  const utils = trpc.useUtils();
  const [form, setForm] = useState<AppLanguage[] | null>(null);
  const [notice, setNotice] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!form && query.data) setForm(query.data.enabledLanguages);
  }, [form, query.data]);

  const save = async () => {
    if (!form) return;
    setNotice("");
    setSaving(true);
    let saved: { enabledLanguages: AppLanguage[] };
    try {
      saved = await mutation.mutateAsync({ enabledLanguages: form });
    } catch {
      setNotice(uiText("ui.pages_LanguageSettingsAdmin_literals2.literal1"));
      setSaving(false);
      return;
    }
    utils.languages.settings.setData(undefined, saved);
    utils.languages.adminSettings.setData(undefined, saved);
    const results = await Promise.allSettled([utils.languages.settings.invalidate(), query.refetch()]);
    const failed = results.some(result => result.status === "rejected")
      || (results[1].status === "fulfilled" && results[1].value.isError);
    setNotice(failed ? uiText("ui.pages_LanguageSettingsAdmin_literals2.literal2") : uiText("ui.pages_LanguageSettingsAdmin_literals2.literal3"));
    setSaving(false);
  };

  return <main className="container min-h-screen py-10 sm:py-16">
    <section className="mx-auto max-w-3xl">
      <Link href="/admin" className="text-sm text-stone-600 underline">{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal1")}</Link>
      <h1 className="display-serif mt-8 text-4xl font-semibold">{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal2")}</h1>
      <p className="mt-5 text-sm leading-7 text-stone-600">{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal3")}</p>
      <p className="mt-3 text-sm text-stone-600">{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal4")}{query.data?.preparation && uiFormat("ui.admin.languages.waitingCount", { count: query.data.preparation.unavailableSources })}</p>
      {loading && <p className="mt-8">{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal5")}</p>}
      {!loading && !isAdmin && <div className="mt-8 border border-stone-300 p-6">
        <p>{isAuthenticated ? uiText("ui.pages_LanguageSettingsAdmin_literals2.literal4") : uiText("ui.pages_LanguageSettingsAdmin_literals2.literal5")}</p>
        {!isAuthenticated && <Button className="mt-4" onClick={() => startLogin("/admin/languages")}>{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal6")}</Button>}
      </div>}
      {isAdmin && <div className="mt-8">
        {notice && <p role="status" className="mb-5 text-sm">{notice}</p>}
        {query.isLoading && <p>{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal7")}</p>}
        {query.isError && <p role="alert">{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal8")}<button type="button" className="ml-2 underline" onClick={() => void query.refetch()}>{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal9")}</button></p>}
        {query.data && form && <>
          <fieldset disabled={saving || query.isError} className="space-y-4 border border-stone-300 bg-stone-50 p-6">
            <legend className="px-2 text-sm font-semibold">{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal10")}</legend>
            {APP_LANGUAGES.map(language => <label key={language} className="flex items-center gap-3 text-sm">
              <input type="checkbox" checked={form.includes(language)} disabled={language === "ja" || !(CONTENT_MANIFEST.readyLanguages as readonly string[]).includes(language)} onChange={event => {
                setNotice("");
                setForm(APP_LANGUAGES.filter(item => item === language ? event.target.checked : form.includes(item)));
              }} />
              {LANGUAGE_LABELS[language]}{language === "ja" && uiText("ui.pages_LanguageSettingsAdmin_literals2.literal6")}
            </label>)}
          </fieldset>
          <p className="mt-4 text-xs leading-6 text-stone-600">{uiText("ui.pages_LanguageSettingsAdmin_literals1.literal11")}</p>
          <Button className="mt-6 rounded-none" disabled={saving || query.isError || JSON.stringify(form) === JSON.stringify(query.data.enabledLanguages)} onClick={() => void save()}>{saving ? uiText("ui.pages_LanguageSettingsAdmin_literals2.literal7") : uiText("ui.pages_LanguageSettingsAdmin_literals2.literal8")}</Button>
        </>}
      </div>}
    </section>
  </main>;
}
