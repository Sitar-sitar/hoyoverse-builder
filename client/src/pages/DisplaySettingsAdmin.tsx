import { useAuth } from "@/_core/hooks/useAuth";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { startLogin } from "@/const";
import { useDisplaySettings } from "@/contexts/DisplaySettingsContext";
import { trpc } from "@/lib/trpc";
import {
  DISPLAY_PREVIEW_PATHS,
  DISPLAY_VARIANTS,
  diffDisplayVariants,
  legacyDisplayVariants,
  sanitizeDisplaySettings,
  type DisplayPreviewPath,
  type DisplayVariantChange,
  type DisplayVariants,
} from "@shared/displayVariants";
import { ArrowLeft, Eye, LogIn, Palette, RotateCcw, Upload } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

/**
 * 表示デザインの管理画面（設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.2.5）。
 * 管理者専用のため文言は日本語のみ（§10 Q7）。
 */

type AdminEntry = { key: string; variant: string; updatedAt: string | null };
type Notice = { tone: "success" | "warning" | "error"; text: string } | null;
type PendingPublish = { changes: DisplayVariantChange[]; target: DisplayVariants; resetAll: boolean } | null;

const variantLabel = (key: string, id: string) =>
  DISPLAY_VARIANTS.find((definition) => definition.key === key)?.variants.find((variant) => variant.id === id)?.label ?? id;
const keyLabel = (key: string) => DISPLAY_VARIANTS.find((definition) => definition.key === key)?.label ?? key;
const toVariants = (entries: AdminEntry[]) => Object.fromEntries(entries.map((entry) => [entry.key, entry.variant]));
const formatJst = (value: string | null) => value
  ? new Intl.DateTimeFormat("ja-JP", { timeZone: "Asia/Tokyo", dateStyle: "medium", timeStyle: "short" }).format(new Date(value))
  : "未保存（現行）";

export default function DisplaySettingsAdmin() {
  const { user, loading, isAuthenticated } = useAuth();
  const isAdmin = user?.role === "admin";
  const [, setLocation] = useLocation();
  const utils = trpc.useUtils();
  const { preview, setPreview, clearPreview } = useDisplaySettings();
  const adminQuery = trpc.display.adminSettings.useQuery(undefined, { enabled: isAdmin, retry: false, refetchOnWindowFocus: false });
  const publishMutation = trpc.display.publish.useMutation();

  const [form, setForm] = useState<DisplayVariants | null>(null);
  const [previewPath, setPreviewPath] = useState<DisplayPreviewPath>(DISPLAY_VARIANTS[0]?.previewPath ?? "/");
  const [pending, setPending] = useState<PendingPublish>(null);
  const [checking, setChecking] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);

  const entries = (adminQuery.data?.entries ?? []) as AdminEntry[];
  const publishedVariants = toVariants(entries);

  // フォームは最初の取得時にだけ初期化し、編集中の選択を再取得で上書きしない（U06・U07）。
  useEffect(() => {
    if (form || !adminQuery.data) return;
    const base = toVariants(adminQuery.data.entries as AdminEntry[]);
    setForm({ ...base, ...sanitizeDisplaySettings(preview ?? {}) });
  }, [adminQuery.data, form, preview]);

  const busy = checking || publishMutation.isPending;
  const formChanges = form && adminQuery.data ? diffDisplayVariants(publishedVariants, form) : [];

  const startPreview = () => {
    if (!form) return;
    setPreview(form);
    setLocation(previewPath);
  };

  // 押した時点の公開値を取り直し、その差分で確認する（U08）。
  const openConfirm = async (target: DisplayVariants, resetAll: boolean) => {
    setNotice(null);
    setChecking(true);
    try {
      const fresh = await adminQuery.refetch();
      if (fresh.isError || !fresh.data) {
        setNotice({ tone: "error", text: "公開中の設定を取得できませんでした。時間をおいて再度お試しください。" });
        return;
      }
      const changes = diffDisplayVariants(toVariants(fresh.data.entries as AdminEntry[]), target);
      if (!changes.length) {
        setNotice({ tone: "warning", text: resetAll ? "すでにすべて現行の見せ方です。" : "公開中の設定と同じため、公開する変更はありません。" });
        return;
      }
      setPending({ changes, target, resetAll });
    } finally {
      setChecking(false);
    }
  };

  const confirmPublish = async () => {
    if (!pending) return;
    const { changes, target } = pending;
    setPending(null);
    let result: Awaited<ReturnType<typeof publishMutation.mutateAsync>>;
    try {
      result = await publishMutation.mutateAsync({ changes: changes.map((change) => ({ key: change.key, variant: change.to })) });
    } catch {
      setNotice({ tone: "error", text: "保存できませんでした。時間をおいて再度お試しください。" });
      return;
    }

    // ここから先は保存済み。再取得の失敗を「保存できなかった」と表示しない（U09）。
    clearPreview();
    setForm({ ...publishedVariants, ...target });
    let refreshed = result.source === "database";
    if (refreshed) utils.display.settings.setData(undefined, result);
    const [publicRefetch, adminRefetch] = await Promise.allSettled([utils.display.settings.invalidate(), adminQuery.refetch()]);
    if (publicRefetch.status === "rejected" || adminRefetch.status === "rejected" || (adminRefetch.status === "fulfilled" && adminRefetch.value.isError)) {
      refreshed = false;
    }
    if (adminRefetch.status === "fulfilled" && adminRefetch.value.data) {
      setForm(toVariants(adminRefetch.value.data.entries as AdminEntry[]));
    }
    setNotice(refreshed
      ? { tone: "success", text: "公開しました。" }
      : { tone: "warning", text: "公開しました。最新状態の取得に失敗したため、再読み込みしてください。" });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <header className="container pt-6 sm:pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-stone-400 py-3">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-700" />
            <p className="detail-mono text-[9px] text-stone-600">ADMIN / DISPLAY DESIGN</p>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href="/admin" className="inline-flex h-8 items-center gap-1 px-2 text-[10px] text-stone-600 hover:bg-stone-200">
              <ArrowLeft className="h-3.5 w-3.5" />管理者ポータルへ
            </Link>
          </div>
        </div>
      </header>

      <main className="container pb-20 pt-10 sm:pt-16">
        <section className="mx-auto max-w-5xl">
          <p className="detail-mono text-[10px] text-amber-800">PRESENTATION VARIANTS</p>
          <h1 className="display-serif mt-3 text-4xl font-semibold tracking-[-.045em] sm:text-6xl">表示デザイン</h1>
          <p className="mt-5 max-w-2xl font-serif text-base leading-7 text-stone-600">
            公開サイトの見せ方を案ごとに切り替えます。プレビューはこのブラウザのタブだけに反映され、「公開する」で全員の表示が変わります。キャラクターデータは変わりません。
          </p>
        </section>

        {loading && (
          <section className="mx-auto mt-12 max-w-5xl border-y border-stone-300 py-10 text-center">
            <p className="detail-mono text-[10px] text-stone-500">AUTHENTICATING</p>
          </section>
        )}

        {!loading && !isAdmin && (
          <section className="mx-auto mt-12 max-w-md border border-amber-900/30 bg-amber-50/60 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold">{isAuthenticated ? "管理者権限がありません" : "GitHubで管理者ログイン"}</h2>
            <p className="mt-3 text-sm leading-6 text-stone-700">
              {isAuthenticated ? "このアカウントは管理者Allowlistに登録されていません。" : "登録済みのGitHubアカウントだけが表示デザインを変更できます。"}
            </p>
            {!isAuthenticated && (
              <Button onClick={() => startLogin("/admin/display")} className="mt-5 h-11 w-full rounded-none bg-stone-900 text-stone-50 hover:bg-amber-900 sm:w-auto">
                <LogIn className="h-4 w-4" />GitHubでログイン
              </Button>
            )}
          </section>
        )}

        {isAdmin && (
          <section className="mx-auto mt-10 max-w-5xl">
            {notice && (
              <p role="status" className={notice.tone === "success" ? "mb-5 border-l-2 border-emerald-700 pl-3 text-sm text-emerald-900" : notice.tone === "warning" ? "mb-5 border-l-2 border-amber-700 pl-3 text-sm text-amber-900" : "mb-5 border-l-2 border-rose-700 pl-3 text-sm text-rose-800"}>
                {notice.text}
              </p>
            )}

            {adminQuery.isLoading && <p className="border-y border-stone-300 py-8 text-center text-sm text-stone-500">公開中の設定を読み込んでいます。</p>}

            {adminQuery.isError && !adminQuery.data && (
              <p role="alert" className="border border-rose-300 bg-rose-50 p-5 text-sm text-rose-800">
                公開中の設定を取得できませんでした。RailwayのDATABASE_URLを確認し、再読み込みしてください。取得できるまで公開操作はできません。
              </p>
            )}

            {adminQuery.data && form && (
              <>
                <div className="space-y-5">
                  {DISPLAY_VARIANTS.map((definition) => {
                    const entry = entries.find((item) => item.key === definition.key);
                    return (
                      <fieldset key={definition.key} className="border border-stone-300 bg-stone-50/50 p-5 sm:p-6">
                        <legend className="px-2 font-serif text-xl font-semibold">
                          <span className="detail-mono mr-2 text-[10px] text-amber-800">案 {definition.proposal}</span>{definition.label}
                        </legend>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-stone-600">
                          <span>影響する画面: {definition.screens.join(" / ")}</span>
                          <span>公開中: <strong className="text-stone-900">{variantLabel(definition.key, entry?.variant ?? "legacy")}</strong></span>
                          <span>最終更新: {formatJst(entry?.updatedAt ?? null)}</span>
                        </div>
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                          {definition.variants.map((variant) => {
                            const checked = form[definition.key] === variant.id;
                            return (
                              <label key={variant.id} className={checked ? "flex cursor-pointer gap-3 border border-stone-900 bg-stone-100 p-4" : "flex cursor-pointer gap-3 border border-stone-300 p-4 hover:border-stone-600"}>
                                <input
                                  type="radio"
                                  name={definition.key}
                                  value={variant.id}
                                  checked={checked}
                                  disabled={busy}
                                  onChange={() => setForm({ ...form, [definition.key]: variant.id })}
                                  className="mt-1 accent-stone-900"
                                />
                                <span>
                                  <span className="block text-sm font-semibold text-stone-900">{variant.label}</span>
                                  <span className="mt-1 block text-xs leading-5 text-stone-600">{variant.description}</span>
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-stone-400 pt-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="flex flex-wrap items-end gap-2">
                    <label className="text-xs text-stone-600">
                      <span className="block">プレビューで開く画面</span>
                      <select value={previewPath} onChange={(event) => setPreviewPath(event.target.value as DisplayPreviewPath)} className="mt-1 h-10 border border-stone-400 bg-transparent px-2 text-sm text-stone-900">
                        {DISPLAY_PREVIEW_PATHS.map((item) => <option key={item.path} value={item.path}>{item.label}</option>)}
                      </select>
                    </label>
                    <Button type="button" variant="outline" disabled={busy} onClick={startPreview} className="h-10 rounded-none border-stone-900">
                      <Eye className="h-4 w-4" />この組み合わせをプレビュー
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button type="button" variant="outline" disabled={busy} onClick={() => openConfirm(legacyDisplayVariants(), true)} className="h-10 rounded-none border-stone-400">
                      <RotateCcw className="h-4 w-4" />すべて現行に戻す
                    </Button>
                    <Button type="button" disabled={busy || formChanges.length === 0} onClick={() => openConfirm(form, false)} className="h-10 rounded-none bg-stone-900 text-stone-50 hover:bg-amber-900">
                      <Upload className="h-4 w-4" />{publishMutation.isPending ? "公開しています" : "公開する"}
                    </Button>
                  </div>
                </div>
                {preview && (
                  <p className="mt-3 text-xs text-stone-600">
                    <Palette className="mr-1 inline h-3.5 w-3.5" />このタブではプレビュー中です。
                    <button type="button" onClick={clearPreview} className="ml-2 underline underline-offset-2">プレビューを終了</button>
                  </p>
                )}
              </>
            )}
          </section>
        )}
      </main>

      <AlertDialog open={pending !== null} onOpenChange={(open) => { if (!open) setPending(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{pending?.resetAll ? "すべて現行の見せ方に戻しますか？" : "この見せ方を公開しますか？"}</AlertDialogTitle>
            <AlertDialogDescription>公開すると、すべての閲覧者の表示が変わります（表示中の画面には約2分以内に反映されます）。</AlertDialogDescription>
          </AlertDialogHeader>
          <ul className="space-y-2 text-sm" aria-label="公開する変更">
            {pending?.changes.map((change) => (
              <li key={change.key} className="border-l-2 border-amber-700 pl-3">
                <span className="font-semibold">{keyLabel(change.key)}</span>：{variantLabel(change.key, change.from)} → {variantLabel(change.key, change.to)}
              </li>
            ))}
          </ul>
          <AlertDialogFooter>
            <AlertDialogCancel>やめる</AlertDialogCancel>
            <Button type="button" onClick={confirmPublish} className="rounded-none bg-stone-900 text-stone-50 hover:bg-amber-900">公開する</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
