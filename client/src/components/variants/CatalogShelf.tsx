import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Loader2, RotateCw, Search } from "lucide-react";
import React, { type ReactNode, type RefObject } from "react";

/**
 * 案 B: 図鑑をカード棚と詳細シートで表示する（設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.4 B、G-B 確定）。
 * 選択・絞り込みの状態と URL の更新はページが持ち、この部品は表示と通知だけを行う。
 * 詳細の中身（C/D の分岐を解決した JSX）はページから children で受け取る。
 */

export type ShelfGameId = "hsr" | "genshin" | "zzz";
export type ShelfEntry = { game: string; name: string; status: "reviewed" | "pending"; batch: number | null };
export type ShelfStatusFilter = "all" | "reviewed" | "pending";
export type ShelfSort = "catalog" | "batch";

/** G-E1 の確定色を部品内の既定値として持つ（E-1 が legacy でも成立させる）。 */
const SHELF_ACCENTS: Record<ShelfGameId, string> = { hsr: "#92400e", genshin: "#115e59", zzz: "#854d0e" };

export const SHELF_SECTION_IDS = ["catalog-section-build", "catalog-section-targets", "catalog-section-parties", "catalog-section-progression"] as const;

/** 選択ゲームの entries から、重複を除いたバッチ番号を数値の降順で返す。 */
export function shelfBatchOptions(entries: readonly ShelfEntry[]) {
  return [...new Set(entries.flatMap((entry) => (entry.batch === null ? [] : [entry.batch])))].sort((a, b) => b - a);
}

/** 名前・精査状態・バッチの AND で絞り込み、並び順を適用する。同値は元の順、バッチ未設定は末尾。 */
export function shelfEntries(entries: readonly ShelfEntry[], filters: { keyword: string; status: ShelfStatusFilter; batch: number | null; sort: ShelfSort }) {
  const keyword = filters.keyword.trim().toLocaleLowerCase();
  const matched = entries.filter((entry) =>
    (!keyword || entry.name.toLocaleLowerCase().includes(keyword))
    && (filters.status === "all" || entry.status === filters.status)
    && (filters.batch === null || entry.batch === filters.batch));
  if (filters.sort === "catalog") return matched;
  return matched
    .map((entry, index) => ({ entry, index }))
    .sort((a, b) => {
      if (a.entry.batch === b.entry.batch) return a.index - b.index;
      if (a.entry.batch === null) return 1;
      if (b.entry.batch === null) return -1;
      return b.entry.batch - a.entry.batch || a.index - b.index;
    })
    .map(({ entry }) => entry);
}

export type ShelfLabels = {
  search: string;
  noMatch: string;
  reviewed: string;
  pending: string;
  batch: string;
  statusFilter: string;
  statusAll: string;
  batchFilter: string;
  batchAll: string;
  sort: string;
  sortCatalog: string;
  sortBatch: string;
  catalogFailed: string;
  retry: string;
  loading: string;
  notFound: string;
  close: string;
  jump: string;
  sections: readonly [string, string, string, string];
  detailFailed: string;
  detailEmpty: string;
  detailDescription: string;
};

export type CatalogShelfProps = {
  game: ShelfGameId;
  games: Record<ShelfGameId, { short: string; name: string }>;
  onGameChange: (game: ShelfGameId) => void;
  totalInGame: number;
  entries: readonly ShelfEntry[];
  batchOptions: readonly number[];
  keyword: string;
  onKeywordChange: (value: string) => void;
  status: ShelfStatusFilter;
  onStatusChange: (value: ShelfStatusFilter) => void;
  batch: number | null;
  onBatchChange: (value: number | null) => void;
  sort: ShelfSort;
  onSortChange: (value: ShelfSort) => void;
  catalogState: "loading" | "error" | "ready";
  onCatalogRetry: () => void;
  notFound: boolean;
  selectedName: string;
  onSelect: (name: string) => void;
  onClose: () => void;
  detailState: "loading" | "error" | "empty" | "ready";
  onDetailRetry: () => void;
  searchRef: RefObject<HTMLInputElement | null>;
  /** 閉じたあとのフォーカス先（開いたカードの名前。直リンクで開いた場合は空） */
  openerName: string;
  labels: ShelfLabels;
  children: ReactNode;
};

export default function CatalogShelf(props: CatalogShelfProps) {
  const { game, games, labels, entries, selectedName } = props;
  const accent = { "--shelf-accent": `var(--game-accent, ${SHELF_ACCENTS[game]})` } as React.CSSProperties;

  function restoreFocus(event: Event) {
    event.preventDefault();
    const card = props.openerName ? document.querySelector<HTMLButtonElement>(`[data-shelf-card="${CSS.escape(props.openerName)}"]`) : null;
    // Radix が閉じる処理を終えてから移す（同じタイミングで移すと body へ戻される）。
    window.setTimeout(() => (card ?? props.searchRef.current)?.focus(), 0);
  }

  function jumpTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  }

  return (
    <section className="mt-8" style={accent} data-testid="catalog-shelf">
      <div className="grid gap-3 border-b border-stone-300 pb-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-end">
        <div>
          <div className="grid grid-cols-3 gap-1 border border-stone-300 bg-stone-100/70 p-1">
            {(Object.keys(games) as ShelfGameId[]).map((id) => (
              <button key={id} type="button" onClick={() => props.onGameChange(id)} aria-pressed={game === id} className={cn("min-h-11 px-4 text-[11px] font-semibold transition-colors", game === id ? "bg-stone-900 text-white" : "text-stone-600 hover:bg-stone-200")}>{games[id].short}</button>
            ))}
          </div>
          <p className="detail-mono mt-2 text-[11px] text-stone-500">{games[game].name} / {entries.length} / {props.totalInGame}</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          <label className="relative block">
            <span className="sr-only">{labels.search}</span>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <Input ref={props.searchRef} value={props.keyword} onChange={(event) => props.onKeywordChange(event.target.value)} placeholder={labels.search} className="h-11 rounded-none border-stone-400 bg-transparent pl-9 shadow-none focus-visible:ring-amber-700" />
          </label>
          <label className="grid gap-1 text-[11px] text-stone-600">{labels.statusFilter}
            <select value={props.status} onChange={(event) => props.onStatusChange(event.target.value as ShelfStatusFilter)} className="h-9 border border-stone-400 bg-transparent px-2 text-sm text-stone-900">
              <option value="all">{labels.statusAll}</option>
              <option value="reviewed">{labels.reviewed}</option>
              <option value="pending">{labels.pending}</option>
            </select>
          </label>
          <label className="grid gap-1 text-[11px] text-stone-600">{labels.batchFilter}
            <select value={props.batch === null ? "all" : String(props.batch)} onChange={(event) => props.onBatchChange(event.target.value === "all" ? null : Number(event.target.value))} className="h-9 border border-stone-400 bg-transparent px-2 text-sm text-stone-900">
              <option value="all">{labels.batchAll}</option>
              {props.batchOptions.map((value) => <option key={value} value={value}>{labels.batch} {value}</option>)}
            </select>
          </label>
          <label className="grid gap-1 text-[11px] text-stone-600">{labels.sort}
            <select value={props.sort} onChange={(event) => props.onSortChange(event.target.value as ShelfSort)} className="h-9 border border-stone-400 bg-transparent px-2 text-sm text-stone-900">
              <option value="catalog">{labels.sortCatalog}</option>
              <option value="batch">{labels.sortBatch}</option>
            </select>
          </label>
        </div>
      </div>

      {props.notFound && <p role="status" className="mt-4 border-l-2 border-rose-700 bg-rose-50 px-3 py-2 text-sm text-rose-800">{labels.notFound}</p>}
      {props.catalogState === "loading" && <div className="mt-6 flex items-center gap-2 text-sm text-stone-500"><Loader2 className="h-4 w-4 animate-spin" />{labels.loading}</div>}
      {props.catalogState === "error" && <div className="mt-6 flex flex-wrap items-center gap-3 border border-rose-300 bg-rose-50 p-4 text-sm text-rose-800">{labels.catalogFailed}<button type="button" onClick={props.onCatalogRetry} className="inline-flex min-h-9 items-center gap-1 border border-rose-400 px-3 text-xs"><RotateCw className="h-3.5 w-3.5" />{labels.retry}</button></div>}
      {props.catalogState === "ready" && entries.length === 0 && <p className="mt-6 text-sm text-stone-500">{labels.noMatch}</p>}

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="catalog-shelf-cards">
        {entries.map((entry) => (
          <li key={`${entry.game}:${entry.name}`}>
            <button type="button" data-shelf-card={entry.name} onClick={() => props.onSelect(entry.name)} aria-haspopup="dialog" className={cn("paper-card relative flex min-h-24 w-full flex-col justify-between overflow-hidden border px-4 py-3 pl-5 text-left transition-colors hover:border-stone-900", selectedName === entry.name ? "border-stone-900" : "border-stone-300")}>
              <span className="absolute inset-y-0 left-0 w-1.5 bg-[var(--shelf-accent)]" aria-hidden="true" />
              <span className="font-serif text-lg font-semibold">{entry.name}</span>
              <span className={cn("detail-mono mt-2 text-[11px]", entry.status === "reviewed" ? "text-emerald-800" : "text-stone-500")}>
                {entry.status === "reviewed" ? `${labels.reviewed}${entry.batch === null ? "" : ` / ${labels.batch} ${entry.batch}`}` : labels.pending}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Sheet open={Boolean(selectedName)} onOpenChange={(open) => { if (!open) props.onClose(); }}>
        <SheetContent side="right" onCloseAutoFocus={restoreFocus} className="h-[100dvh] w-screen max-w-none gap-0 border-l bg-stone-50 p-0 text-stone-900 sm:h-full sm:w-[min(56rem,90vw)] sm:max-w-none" data-testid="catalog-shelf-sheet">
          <div className="border-b border-stone-300 px-5 pb-3 pt-5 pr-14">
            <SheetTitle className="display-serif text-2xl font-bold">{selectedName}</SheetTitle>
            <SheetDescription className="detail-mono mt-1 text-[11px] text-stone-500">{games[game].short} / {labels.detailDescription}</SheetDescription>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto" data-testid="catalog-shelf-scroll">
            {props.detailState === "ready" && (
              <nav aria-label={labels.jump} className="sticky top-0 z-10 flex gap-1 overflow-x-auto border-b border-stone-300 bg-stone-50/95 px-5 py-2">
                {SHELF_SECTION_IDS.map((id, index) => <button key={id} type="button" onClick={() => jumpTo(id)} className="detail-mono min-h-9 shrink-0 border border-stone-300 px-3 text-[11px] text-stone-700 hover:border-stone-900">{labels.sections[index]}</button>)}
              </nav>
            )}
            <div className="px-5 py-5">
              {props.detailState === "loading" && <div className="flex min-h-48 items-center justify-center gap-2 text-sm text-stone-500"><Loader2 className="h-4 w-4 animate-spin" />{labels.loading}</div>}
              {props.detailState === "error" && <div className="flex flex-wrap items-center gap-3 border border-rose-300 bg-rose-50 p-4 text-sm text-rose-800">{labels.detailFailed}<button type="button" onClick={props.onDetailRetry} className="inline-flex min-h-9 items-center gap-1 border border-rose-400 px-3 text-xs"><RotateCw className="h-3.5 w-3.5" />{labels.retry}</button></div>}
              {props.detailState === "empty" && <p className="text-sm text-stone-600">{labels.detailEmpty}</p>}
              {props.detailState === "ready" && props.children}
            </div>
          </div>
          <div className="border-t border-stone-300 px-5 py-3">
            <button type="button" onClick={props.onClose} className="min-h-10 border border-stone-900 px-4 text-sm font-semibold hover:bg-stone-900 hover:text-stone-50">{labels.close}</button>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
