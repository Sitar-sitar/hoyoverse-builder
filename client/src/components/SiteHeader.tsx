import { useLanguage, type TranslationKey } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Link } from "wouter";

/**
 * 案 E-1: 公開4画面の共通ヘッダー（設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.4 E-1、G-E1 確定）。
 * 1024px 以上は横並び、未満はメニューボタンで開閉する。現在地は aria-current で示す。
 * 色は外枠が定義する `--game-accent` を使い、無ければ共通の amber にする。
 */

export type SitePage = "lookup" | "catalog" | "updates" | "feedback";
export type SiteGame = "hsr" | "genshin" | "zzz";

const GAME_MARKS: Record<SiteGame, { mark: string; name: TranslationKey }> = {
  hsr: { mark: "HSR", name: "portalGameHsr" },
  genshin: { mark: "GI", name: "portalGameGenshin" },
  zzz: { mark: "ZZZ", name: "portalGameZzz" },
};

export type SiteHeaderProps = {
  activePage: SitePage;
  game?: SiteGame;
  /** 言語切替など、ヘッダー右端に置く操作 */
  children?: ReactNode;
};

export default function SiteHeader({ activePage, game, children }: SiteHeaderProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const feedbackSource = activePage === "updates" ? "/updates" : "/";
  const items: Array<{ page: SitePage | "admin"; href: string; label: string }> = [
    { page: "lookup", href: "/", label: t("siteNavLookup") },
    { page: "catalog", href: "/characters", label: t("siteNavCatalog") },
    { page: "updates", href: "/updates", label: t("updates") },
    { page: "feedback", href: `/feedback?source=${feedbackSource}`, label: t("translationFeedback") },
    { page: "admin", href: "/admin", label: t("adminAccess") },
  ];

  function closeWithEscape(event: KeyboardEvent) {
    if (event.key !== "Escape" || !open) return;
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <header className="container pt-6 sm:pt-8" data-testid="site-header" onKeyDown={closeWithEscape}>
      <div className="border-y border-stone-400 py-3" style={{ borderTopColor: "var(--game-accent, #92400e)" }}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" className="display-serif text-lg font-bold tracking-[-.02em] text-stone-900">HoYoverse Builder</Link>
            {game && <p className="detail-mono truncate text-[11px] text-[var(--game-accent,#92400e)]" data-testid="site-header-game">{GAME_MARKS[game].mark} / {t(GAME_MARKS[game].name)}</p>}
          </div>
          <div className="flex items-center gap-2">
            {children}
            <button ref={buttonRef} type="button" className="inline-flex h-9 w-9 items-center justify-center border border-stone-400 text-stone-800 lg:hidden" aria-expanded={open} aria-controls={menuId} aria-label={open ? t("siteMenuClose") : t("siteMenu")} onClick={() => setOpen((value) => !value)}>
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <nav id={menuId} aria-label={t("siteNavLabel")} className={cn("mt-3 border-t border-stone-300 pt-3 lg:mt-2 lg:block lg:border-t-0 lg:pt-0", open ? "block" : "hidden")}>
          <ul className="flex flex-col gap-1 lg:flex-row lg:flex-wrap lg:gap-5">
            {items.map((item) => {
              const current = item.page === activePage;
              return (
                <li key={item.page}>
                  <Link href={item.href} onClick={() => setOpen(false)} aria-current={current ? "page" : undefined} className={cn("detail-mono inline-flex min-h-9 items-center text-[11px] underline-offset-4 hover:underline", current ? "font-semibold text-stone-900 underline decoration-[var(--game-accent,#92400e)] decoration-2" : "text-stone-600")}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
