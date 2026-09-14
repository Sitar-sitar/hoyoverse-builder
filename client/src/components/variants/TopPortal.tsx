import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage, type TranslationKey } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { cn } from "@/lib/utils";
import { RotateCw, Search, ShieldCheck } from "lucide-react";
import React, { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "wouter";

/**
 * 案 F: トップを3ゲームの入口にする（設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.4 F、G-F 確定）。
 * 照会の状態と処理は Home が持ち、この部品は表示と通知だけを行う（UID や照会結果を複写しない）。
 * 図鑑の収録数はこの部品がマウントされたときだけ取得する（legacy では追加の通信をしない）。
 */

export type PortalGameId = "hsr" | "genshin" | "zzz";

export const PORTAL_GAME_ORDER: readonly PortalGameId[] = ["hsr", "genshin", "zzz"];

/** G-E1 の確定色を部品内の既定値として持つ（E-1 が legacy でも成立させる）。 */
const PORTAL_GAMES: Record<PortalGameId, { name: TranslationKey; mark: string; equipment: TranslationKey; set: TranslationKey; accent: string }> = {
  hsr: { name: "portalGameHsr", mark: "HSR", equipment: "lightCone", set: "relics", accent: "#92400e" },
  genshin: { name: "portalGameGenshin", mark: "GI", equipment: "weapon", set: "artifacts", accent: "#115e59" },
  zzz: { name: "portalGameZzz", mark: "ZZZ", equipment: "wEngine", set: "driveDiscs", accent: "#854d0e" },
};

export type TopPortalProps = {
  game: PortalGameId;
  uid: string;
  validUid: boolean;
  uidHint: string;
  isFetching: boolean;
  /** 照会が成功し、キャラクターが1件以上あるとき true */
  hasResults: boolean;
  onUidChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
  onSelectGame: (game: PortalGameId) => void;
  /** 利用手順を出すか（Home の現行条件をそのまま渡す） */
  showGuide: boolean;
};

export default function TopPortal({ game, uid, validUid, uidHint, isFetching, hasResults, onUidChange, onSubmit, onSelectGame, showGuide }: TopPortalProps) {
  const { t } = useLanguage();
  const catalogQuery = trpc.build.referenceCatalog.useQuery(undefined, { staleTime: 10 * 60_000 });
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const focusAfterSelect = useRef(false);
  const collapsed = hasResults && !editing;

  useEffect(() => { setEditing(false); }, [game]);
  useEffect(() => {
    if (focusAfterSelect.current && !collapsed) {
      focusAfterSelect.current = false;
      inputRef.current?.focus();
    }
  }, [game, collapsed]);

  const countOf = (id: PortalGameId) => catalogQuery.data?.games[id]?.length;
  const gameName = (id: PortalGameId) => t(PORTAL_GAMES[id].name);
  const accentStyle = (id: PortalGameId) => ({ "--portal-accent": PORTAL_GAMES[id].accent }) as React.CSSProperties;

  function choose(id: PortalGameId) {
    focusAfterSelect.current = true;
    if (id === game) { setEditing(true); inputRef.current?.focus(); return; }
    onSelectGame(id);
  }

  function submit(event: FormEvent) {
    setEditing(false);
    onSubmit(event);
  }

  const form = (
    <form onSubmit={submit} className="mt-4" data-testid="portal-form">
      <div className="flex gap-2">
        <Input ref={inputRef} value={uid} onChange={(event) => onUidChange(event.target.value.replace(/\D/g, ""))} inputMode="numeric" maxLength={10} placeholder={uidHint} aria-label={`${gameName(game)} UID`} className="h-12 rounded-none border-stone-400 bg-stone-50/80 font-mono text-sm shadow-none focus-visible:ring-amber-700" />
        <Button type="submit" disabled={!validUid || isFetching} className="h-12 rounded-none bg-stone-900 px-4 text-stone-50 hover:bg-amber-900"><Search className="h-4 w-4" /><span className="sr-only">{t("retrieve")}</span></Button>
      </div>
    </form>
  );

  const notes = (
    <div className="mt-5 space-y-1 text-[11px] leading-5 text-stone-600" data-testid="portal-notes">
      <p className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-800" />{t("publicOnly")}</p>
      <p>{t("uidSaved")}</p>
      <p>{t("thirdParty")}</p>
    </div>
  );

  return (
    <section data-testid="top-portal" data-collapsed={collapsed ? "true" : "false"}>
      <div className="border-b border-stone-400 pb-6">
        <h1 className="display-serif text-4xl font-bold tracking-[-.04em] text-stone-900 sm:text-6xl">HoYoverse Builder</h1>
        <p className="mt-3 font-serif text-base leading-7 text-stone-600 sm:text-lg">{t("portalSubtitle")}</p>
      </div>

      {collapsed ? (
        <div className="mt-6" data-testid="portal-strip">
          <div className="portal-panel flex flex-wrap items-center justify-between gap-3 border border-stone-300 px-4 py-3" style={accentStyle(game)} data-game={game}>
            <div className="flex items-center gap-3"><span className={cn("portal-deco h-6 w-6 shrink-0", `portal-deco-${game}`)} aria-hidden="true" /><p className="font-serif text-lg font-semibold">{gameName(game)}</p><p className="detail-mono text-[11px] text-stone-600">UID {uid}</p></div>
            <button type="button" onClick={() => choose(game)} className="detail-mono min-h-9 border border-stone-400 px-3 text-[11px] text-stone-800 hover:border-stone-900">{t("portalChangeUid")}</button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={t("portalOtherGames")}>
            {PORTAL_GAME_ORDER.filter((id) => id !== game).map((id) => <button key={id} type="button" onClick={() => choose(id)} className="portal-panel detail-mono min-h-9 border border-stone-300 px-3 text-[11px] text-stone-700 hover:border-[var(--portal-accent)]" style={accentStyle(id)}>{PORTAL_GAMES[id].mark} / {gameName(id)}</button>)}
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {PORTAL_GAME_ORDER.map((id) => {
            const active = id === game;
            const count = countOf(id);
            return (
              <article key={id} data-testid={`portal-panel-${id}`} data-game={id} aria-current={active ? "true" : undefined} className={cn("portal-panel paper-card relative overflow-hidden border p-5", active ? "border-[var(--portal-accent)]" : "border-stone-300")} style={accentStyle(id)}>
                <span className={cn("portal-deco", `portal-deco-${id}`)} aria-hidden="true" />
                <p className="detail-mono relative text-[11px] text-[var(--portal-accent)]">{PORTAL_GAMES[id].mark}</p>
                <h2 className="display-serif relative mt-1 text-2xl font-semibold">{gameName(id)}</h2>
                <p className="relative mt-2 text-xs leading-5 text-stone-600">{t(PORTAL_GAMES[id].set)} / {t(PORTAL_GAMES[id].equipment)}</p>
                <p className="relative mt-3 text-sm text-stone-700"><span className="detail-mono mr-2 text-[11px] text-stone-500">{t("portalCatalogCount")}</span><span className="font-semibold" data-testid={`portal-count-${id}`}>{count === undefined ? "—" : count}</span></p>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  <button type="button" onClick={() => choose(id)} aria-pressed={active} className={cn("min-h-10 border px-3 text-xs font-semibold transition-colors", active ? "border-stone-900 bg-stone-900 text-stone-50" : "border-stone-400 text-stone-800 hover:border-stone-900")}>{t("portalLookup")}</button>
                  <Link href={`/characters?game=${id}`} className="inline-flex min-h-10 items-center border border-stone-400 px-3 text-xs font-semibold text-stone-800 hover:border-stone-900">{t("portalCatalog")}</Link>
                </div>
                {active && <div className="relative">{form}</div>}
              </article>
            );
          })}
        </div>
      )}

      {catalogQuery.isError && <p className="mt-3 flex items-center gap-2 text-[11px] text-stone-600">{t("portalCountFailed")}<button type="button" onClick={() => void catalogQuery.refetch()} className="inline-flex min-h-8 items-center gap-1 border border-stone-400 px-2 text-[11px] text-stone-800 hover:border-stone-900"><RotateCw className="h-3 w-3" />{t("portalCountRetry")}</button></p>}
      {notes}

      {showGuide && <section className="mt-12 grid gap-8 border-t border-stone-400 pt-6 lg:grid-cols-[.7fr_1.3fr]"><p className="detail-mono text-[10px] text-stone-500">{t("howItWorks")}</p><div className="grid gap-6 sm:grid-cols-3">{[["01", t("profileSetup"), t("profileSetupBody")], ["02", t("inputUid"), t("inputUidBody")], ["03", t("nextStep"), t("nextStepBody")]].map(([number, title, body]) => <article key={number} className="border-t border-stone-300 pt-3"><p className="detail-mono text-[9px] text-amber-800">{number}</p><h3 className="mt-3 font-serif text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{body}</p></article>)}</div></section>}
    </section>
  );
}
