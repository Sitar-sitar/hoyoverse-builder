import { uiDictionary, uiFormat } from "@/content/ui";
import { CONTENT_MANIFEST } from "@/content/manifest";
import GlossaryText, { glossaryHref } from "@/components/GlossaryText";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SiteHeader from "@/components/SiteHeader";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { cn } from "@/lib/utils";
import type { GlossaryEntryDTO } from "@shared/content/glossary";
import { ArrowLeft, Loader2, Search } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * 用語集 `/glossary?game=…&term=…`（設計: docs/実装設計書_ゲーム内用語集の基盤_2026-11-15.md §4.7.2・§4.7.3）。
 * - 用語の切り替えは history.pushState（ブラウザの「戻る」で直前の用語へ戻れる）。図鑑の replaceState とは意図的に変える。
 * - ゲーム切替に出すのは manifest の glossaryGames（用語が 1 件以上あるゲーム）だけ。
 */

type GameId = "hsr" | "genshin" | "zzz";
const ALL_GAMES: readonly GameId[] = ["hsr", "genshin", "zzz"];
const AVAILABLE_GAMES = CONTENT_MANIFEST.glossaryGames as readonly GameId[];

const copyText = uiDictionary({
  eyebrow: "ui.pages_Glossary.dictionary1.eyebrow",
  title: "ui.pages_Glossary.dictionary1.title",
  intro: "ui.pages_Glossary.dictionary1.intro",
  editingNotice: "ui.pages_Glossary.dictionary1.editingNotice",
  gameLabel: "ui.pages_Glossary.dictionary1.gameLabel",
  gameHsr: "ui.pages_Glossary.dictionary1.gameHsr",
  gameGenshin: "ui.pages_Glossary.dictionary1.gameGenshin",
  gameZzz: "ui.pages_Glossary.dictionary1.gameZzz",
  searchLabel: "ui.pages_Glossary.dictionary1.searchLabel",
  searchPlaceholder: "ui.pages_Glossary.dictionary1.searchPlaceholder",
  categoryLabel: "ui.pages_Glossary.dictionary1.categoryLabel",
  all: "ui.pages_Glossary.dictionary1.all",
  listLabel: "ui.pages_Glossary.dictionary1.listLabel",
  loading: "ui.pages_Glossary.dictionary1.loading",
  failed: "ui.pages_Glossary.dictionary1.failed",
  retry: "ui.pages_Glossary.dictionary1.retry",
  noMatch: "ui.pages_Glossary.dictionary1.noMatch",
  preparing: "ui.pages_Glossary.dictionary1.preparing",
  notFound: "ui.pages_Glossary.dictionary1.notFound",
  selectHint: "ui.pages_Glossary.dictionary1.selectHint",
  backToList: "ui.pages_Glossary.dictionary1.backToList",
  reading: "ui.pages_Glossary.dictionary1.reading",
  category: "ui.pages_Glossary.dictionary1.category",
  aliases: "ui.pages_Glossary.dictionary1.aliases",
  related: "ui.pages_Glossary.dictionary1.related",
  mentionedBy: "ui.pages_Glossary.dictionary1.mentionedBy",
  characters: "ui.pages_Glossary.dictionary1.characters",
  sources: "ui.pages_Glossary.dictionary1.sources",
  gameVersion: "ui.pages_Glossary.dictionary1.gameVersion",
  dataAsOf: "ui.pages_Glossary.dictionary1.dataAsOf",
  spoilerNote: "ui.pages_Glossary.dictionary1.spoilerNote",
  showBody: "ui.pages_Glossary.dictionary1.showBody",
});

function readUrl() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("game");
  const game: GameId = requested && (ALL_GAMES as readonly string[]).includes(requested) ? requested as GameId : AVAILABLE_GAMES[0] ?? "hsr";
  return { game, term: params.get("term") ?? "" };
}

function writeUrl(game: GameId, term: string, mode: "push" | "replace") {
  const url = new URL(window.location.href);
  url.searchParams.set("game", game);
  if (term) url.searchParams.set("term", term);
  else url.searchParams.delete("term");
  const next = `${url.pathname}${url.search}${url.hash}`;
  if (next === `${window.location.pathname}${window.location.search}${window.location.hash}`) return;
  if (mode === "push") window.history.pushState(null, "", next);
  else window.history.replaceState(null, "", next);
}

function matches(entry: GlossaryEntryDTO, keyword: string) {
  if (!keyword) return true;
  return [entry.name, entry.reading, entry.summary, ...entry.aliases].some((value) => value.toLocaleLowerCase().includes(keyword));
}

function charactersHref(game: GameId, name: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/characters?${new URLSearchParams({ game, character: name }).toString()}`;
}

export default function Glossary() {
  const { language } = useLanguage();
  const copy = copyText[language];
  const gameNames: Record<GameId, string> = { hsr: copy.gameHsr, genshin: copy.gameGenshin, zzz: copy.gameZzz };
  const initial = useMemo(readUrl, []);
  const [game, setGame] = useState<GameId>(initial.game);
  const [selectedId, setSelectedId] = useState(initial.term);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [revealed, setRevealed] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const focusPending = useRef(false);

  const available = AVAILABLE_GAMES.includes(game);
  const glossaryQuery = trpc.build.glossary.useQuery({ game }, { enabled: available, staleTime: 10 * 60_000 });
  const data = glossaryQuery.data;
  const byId = useMemo(() => new Map((data?.entries ?? []).map((entry) => [entry.id, entry])), [data]);

  // 旧ID は現在の ID へ置き換える（履歴は増やさない）。
  useEffect(() => {
    if (!data || !selectedId || byId.has(selectedId)) return;
    const current = data.redirects[selectedId];
    if (current && byId.has(current)) {
      setSelectedId(current);
      writeUrl(game, current, "replace");
    }
  }, [data, byId, selectedId, game]);

  // ブラウザの「戻る／進む」で URL の用語へ合わせる。
  useEffect(() => {
    const onPop = () => {
      const next = readUrl();
      setGame(next.game);
      setSelectedId(next.term);
      focusPending.current = Boolean(next.term);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => setRevealed(false), [selectedId, game]);
  // ゲームが変わったら（ボタン・「戻る／進む」のどちらでも）カテゴリ絞り込みを解除する。
  // 前のゲームにしか無いカテゴリが残ると、一覧が空になるため。
  useEffect(() => setCategory("all"), [game]);

  const selected = selectedId ? byId.get(selectedId) : undefined;
  useEffect(() => {
    if (!selected || !focusPending.current) return;
    focusPending.current = false;
    headingRef.current?.focus();
  }, [selected]);

  const navigate = useCallback((id: string) => {
    focusPending.current = true;
    setSelectedId(id);
    writeUrl(game, id, "push");
  }, [game]);

  const changeGame = (next: GameId) => {
    if (next === game) return;
    setGame(next);
    setSelectedId("");
    writeUrl(next, "", "push");
  };

  const backToList = () => {
    setSelectedId("");
    writeUrl(game, "", "push");
  };

  const normalized = keyword.trim().toLocaleLowerCase();
  const entries = useMemo(() => (data?.entries ?? []).filter((entry) => (category === "all" || entry.category === category) && matches(entry, normalized)), [data, category, normalized]);
  const categoryLabel = useMemo(() => new Map((data?.categories ?? []).map((item) => [item.id, item.label])), [data]);
  const hrefFor = useCallback((id: string) => glossaryHref(game, id), [game]);
  const summaryFor = useCallback((id: string) => byId.get(id)?.summary, [byId]);
  const missingTerm = Boolean(data && selectedId && !selected && !data.redirects[selectedId]);

  const termLink = (item: { id: string; name: string }) => (
    <li key={item.id}>
      <a href={hrefFor(item.id)} className="text-sm font-semibold text-amber-900 underline decoration-amber-700/60 underline-offset-4 hover:decoration-2" onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        navigate(item.id);
      }}>{item.name}</a>
    </li>
  );

  const detail = selected ? (
    <article className="paper-card border border-stone-300 p-5 sm:p-7" data-testid="glossary-detail">
      <button type="button" onClick={backToList} className="detail-mono mb-4 inline-flex min-h-9 items-center gap-1 text-[11px] text-stone-600 underline-offset-4 hover:underline lg:hidden">
        <ArrowLeft className="h-3.5 w-3.5" />{copy.backToList}
      </button>
      <h2 ref={headingRef} tabIndex={-1} className="display-serif text-3xl font-bold outline-none sm:text-4xl">{selected.name}</h2>
      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 detail-mono text-[10px] text-stone-500">
        <div className="flex gap-1"><dt>{copy.reading}</dt><dd>{selected.reading}</dd></div>
        <div className="flex gap-1"><dt>{copy.category}</dt><dd>{categoryLabel.get(selected.category) ?? selected.category}</dd></div>
        {selected.aliases.length > 0 && <div className="flex gap-1"><dt>{copy.aliases}</dt><dd>{selected.aliases.join(", ")}</dd></div>}
      </dl>
      <p className="mt-5 border-l-2 border-amber-700 pl-4 font-serif text-base leading-7 text-stone-800">{selected.summary}</p>
      {selected.spoiler && !revealed ? (
        <div className="mt-6 border border-dashed border-stone-400 p-4">
          <p className="text-sm text-stone-600">{copy.spoilerNote}</p>
          <button type="button" onClick={() => setRevealed(true)} className="mt-3 min-h-9 border border-stone-500 px-3 text-xs font-semibold text-stone-800 hover:bg-stone-100">{copy.showBody}</button>
        </div>
      ) : (
        <GlossaryText paragraphs={selected.body} hrefFor={hrefFor} summaryFor={summaryFor} onNavigate={navigate} className="mt-6 text-sm leading-7 text-stone-700" />
      )}
      {selected.related.length > 0 && <section className="mt-8"><h3 className="detail-mono border-b border-stone-300 pb-2 text-[10px] text-stone-500">{copy.related}</h3><ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{selected.related.map(termLink)}</ul></section>}
      {selected.mentionedBy.length > 0 && <section className="mt-6"><h3 className="detail-mono border-b border-stone-300 pb-2 text-[10px] text-stone-500">{copy.mentionedBy}</h3><ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{selected.mentionedBy.map(termLink)}</ul></section>}
      {selected.characters.length > 0 && <section className="mt-6"><h3 className="detail-mono border-b border-stone-300 pb-2 text-[10px] text-stone-500">{copy.characters}</h3><ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{selected.characters.map((character) => <li key={character.identityKey}><a href={charactersHref(game, character.name)} className="text-sm font-semibold text-stone-800 underline underline-offset-4">{character.name}</a></li>)}</ul></section>}
      <section className="mt-8 border-t border-stone-300 pt-4 text-xs leading-5 text-stone-600">
        <h3 className="detail-mono text-[10px] text-stone-500">{copy.sources}</h3>
        <ul className="mt-2 space-y-1">{selected.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer noopener" className="underline underline-offset-4">{source.label}</a></li>)}</ul>
        <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 detail-mono text-[10px] text-stone-500">
          <div className="flex gap-1"><dt>{copy.gameVersion}</dt><dd>{selected.gameVersion}</dd></div>
          <div className="flex gap-1"><dt>{copy.dataAsOf}</dt><dd>{selected.dataAsOf}</dd></div>
        </dl>
      </section>
    </article>
  ) : (
    <div className="border border-dashed border-stone-300 p-6 text-sm text-stone-600" data-testid="glossary-detail-empty">{missingTerm ? copy.notFound : copy.selectHint}</div>
  );

  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader activePage="glossary" game={available ? game : undefined}><LanguageSwitcher /></SiteHeader>
      <main className="container pb-20 pt-10 sm:pt-14">
        <section className="max-w-3xl">
          <p className="detail-mono text-[10px] text-amber-800">{copy.eyebrow}</p>
          <h1 className="display-serif mt-3 text-5xl font-semibold tracking-[-.045em] sm:text-6xl">{copy.title}</h1>
          <p className="mt-5 max-w-2xl font-serif text-base leading-7 text-stone-600">{copy.intro}</p>
          <p role="note" className="mt-4 inline-block border border-amber-700/60 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-900" data-testid="glossary-editing-notice">{copy.editingNotice}</p>
        </section>

        {AVAILABLE_GAMES.length > 0 && (
          <div role="group" aria-label={copy.gameLabel} className="mt-10 flex flex-wrap gap-1 border border-stone-300 bg-stone-100/60 p-1 sm:inline-flex">
            {AVAILABLE_GAMES.map((id) => (
              <button key={id} type="button" aria-pressed={game === id} onClick={() => changeGame(id)} className={cn("min-h-9 px-3 text-[11px] font-semibold", game === id ? "bg-stone-900 text-stone-50" : "text-stone-600 hover:bg-stone-200")}>{gameNames[id]}</button>
            ))}
          </div>
        )}

        {!available ? (
          <p className="mt-10 border-y border-stone-300 py-10 text-center text-sm text-stone-600" data-testid="glossary-preparing">{copy.preparing}</p>
        ) : glossaryQuery.isLoading ? (
          <p className="mt-10 flex items-center justify-center gap-2 border-y border-stone-300 py-10 text-sm text-stone-600"><Loader2 className="h-4 w-4 animate-spin" />{copy.loading}</p>
        ) : glossaryQuery.isError || !data ? (
          <div className="mt-10 border-y border-stone-300 py-10 text-center text-sm text-stone-600">
            <p>{copy.failed}</p>
            <button type="button" onClick={() => glossaryQuery.refetch()} className="mt-3 min-h-9 border border-stone-500 px-3 text-xs font-semibold">{copy.retry}</button>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <section aria-label={copy.listLabel} className={cn(selected ? "hidden lg:block" : "block")}>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-stone-400" />
                <Input value={keyword} onChange={(event) => setKeyword(event.target.value)} aria-label={copy.searchLabel} placeholder={copy.searchPlaceholder} className="h-10 rounded-none border-stone-300 bg-transparent pl-9 text-sm shadow-none" />
              </div>
              <div role="group" aria-label={copy.categoryLabel} className="mt-3 flex flex-wrap gap-1">
                {[{ id: "all", label: copy.all }, ...data.categories].map((item) => (
                  <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => setCategory(item.id)} className={cn("min-h-8 border px-2.5 text-[11px]", category === item.id ? "border-stone-900 bg-stone-900 text-stone-50" : "border-stone-300 text-stone-600 hover:bg-stone-100")}>{item.label}</button>
                ))}
              </div>
              <p className="detail-mono mt-4 text-[10px] text-stone-500">{uiFormat("ui.pages_Glossary.dictionary1.count", { count: entries.length }, language)}</p>
              {entries.length ? (
                <ul className="mt-2 border-t border-stone-300" data-testid="glossary-list">
                  {entries.map((entry) => (
                    <li key={entry.id} className="border-b border-stone-200">
                      <a href={hrefFor(entry.id)} aria-current={entry.id === selectedId ? "true" : undefined} onClick={(event) => {
                        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                        event.preventDefault();
                        navigate(entry.id);
                      }} className={cn("block px-2 py-3 hover:bg-stone-100", entry.id === selectedId && "bg-amber-50")}>
                        <span className="block font-serif text-base font-semibold text-stone-900">{entry.name}</span>
                        <span className="mt-1 block text-xs leading-5 text-stone-600">{entry.summary}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : <p className="mt-4 text-sm text-stone-600">{copy.noMatch}</p>}
            </section>
            <section className={cn(selected || missingTerm ? "block" : "hidden lg:block")}>{detail}</section>
          </div>
        )}
      </main>
    </div>
  );
}
