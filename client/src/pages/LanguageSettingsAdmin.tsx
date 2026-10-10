import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import { LANGUAGE_LABELS } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { APP_LANGUAGES, type AppLanguage } from "@shared/languages";

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
      setNotice("保存できませんでした。時間をおいて再度お試しください。");
      setSaving(false);
      return;
    }
    utils.languages.settings.setData(undefined, saved);
    utils.languages.adminSettings.setData(undefined, saved);
    const results = await Promise.allSettled([utils.languages.settings.invalidate(), query.refetch()]);
    const failed = results.some(result => result.status === "rejected")
      || (results[1].status === "fulfilled" && results[1].value.isError);
    setNotice(failed ? "保存しました。最新状態の取得に失敗したため、再読み込みしてください。" : "保存しました。公開サイトへ反映しました。開いている画面には通常1分以内に反映されます。");
    setSaving(false);
  };

  return <main className="container min-h-screen py-10 sm:py-16">
    <section className="mx-auto max-w-3xl">
      <Link href="/admin" className="text-sm text-stone-600 underline">管理者ポータルへ</Link>
      <h1 className="display-serif mt-8 text-4xl font-semibold">公開言語</h1>
      <p className="mt-5 text-sm leading-7 text-stone-600">公開サイトで利用できる言語を選択します。翻訳の準備が整うまでは日本語のみで運用できます。日本語は常時有効です。</p>
      {loading && <p className="mt-8">認証を確認しています。</p>}
      {!loading && !isAdmin && <div className="mt-8 border border-stone-300 p-6">
        <p>{isAuthenticated ? "管理者権限がありません。" : "管理者としてログインしてください。"}</p>
        {!isAuthenticated && <Button className="mt-4" onClick={() => startLogin("/admin/languages")}>GitHubでログイン</Button>}
      </div>}
      {isAdmin && <div className="mt-8">
        {notice && <p role="status" className="mb-5 text-sm">{notice}</p>}
        {query.isLoading && <p>公開中の言語設定を読み込んでいます。</p>}
        {query.isError && <p role="alert">言語設定を取得できませんでした。<button type="button" className="ml-2 underline" onClick={() => void query.refetch()}>再試行</button></p>}
        {query.data && form && <>
          <fieldset disabled={saving || query.isError} className="space-y-4 border border-stone-300 bg-stone-50 p-6">
            <legend className="px-2 text-sm font-semibold">有効にする言語</legend>
            {APP_LANGUAGES.map(language => <label key={language} className="flex items-center gap-3 text-sm">
              <input type="checkbox" checked={form.includes(language)} disabled={language === "ja"} onChange={event => {
                setNotice("");
                setForm(APP_LANGUAGES.filter(item => item === language ? event.target.checked : form.includes(item)));
              }} />
              {LANGUAGE_LABELS[language]}{language === "ja" && "（常時有効）"}
            </label>)}
          </fieldset>
          <p className="mt-4 text-xs leading-6 text-stone-600">無効な言語を選択していた利用者は日本語に戻ります。日本語のみの場合、言語切替ボタンは表示しません。「保存する」で全利用者に適用されます。</p>
          <Button className="mt-6 rounded-none" disabled={saving || query.isError || JSON.stringify(form) === JSON.stringify(query.data.enabledLanguages)} onClick={() => void save()}>{saving ? "保存中…" : "保存する"}</Button>
        </>}
      </div>}
    </section>
  </main>;
}
