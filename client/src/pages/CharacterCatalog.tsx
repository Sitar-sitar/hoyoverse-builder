import { uiText as resolveUiText } from "@/content/ui";
import { uiDictionary } from "@/content/ui";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { selectPresentation } from "@/content/presentation";
import PartyAppearances from "@/components/PartyAppearances";
import SiteHeader from "@/components/SiteHeader";
import CatalogShelf, { SHELF_SECTION_IDS, shelfBatchOptions, shelfEntries, type ShelfSort, type ShelfStatusFilter } from "@/components/variants/CatalogShelf";
import PartyFormation, { type FormationOption } from "@/components/variants/PartyFormation";
import ProgressionStepper, { type ProgressionProfile } from "@/components/variants/ProgressionStepper";
import { useDisplayVariant } from "@/contexts/DisplaySettingsContext";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, BookOpen, CheckCircle2, Loader2, Search, Users } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";

type GameId = "hsr" | "genshin" | "zzz";
type LocalizedText = { ja: string; en: string; "zh-CN": string };

const GAMES: Record<GameId, { short: string; name: string }> = {
  hsr: { short: "HSR", name: resolveUiText("ui.pages_CharacterCatalog_literals1.literal1") },
  genshin: { short: "GI", name: resolveUiText("ui.pages_CharacterCatalog_literals1.literal2") },
  zzz: { short: "ZZZ", name: resolveUiText("ui.pages_CharacterCatalog_literals1.literal3") },
};

const uiText = uiDictionary({
  "back": "ui.pages_CharacterCatalog.dictionary1.back",
  "baseline": "ui.pages_CharacterCatalog.dictionary1.baseline",
  "batch": "ui.pages_CharacterCatalog.dictionary1.batch",
  "batchAll": "ui.pages_CharacterCatalog.dictionary1.batchAll",
  "batchFilter": "ui.pages_CharacterCatalog.dictionary1.batchFilter",
  "build": "ui.pages_CharacterCatalog.dictionary1.build",
  "catalogFailed": "ui.pages_CharacterCatalog.dictionary1.catalogFailed",
  "catalogStatus": "ui.pages_CharacterCatalog.dictionary1.catalogStatus",
  "close": "ui.pages_CharacterCatalog.dictionary1.close",
  "context": "ui.pages_CharacterCatalog.dictionary1.context",
  "detailDescription": "ui.pages_CharacterCatalog.dictionary1.detailDescription",
  "detailEmpty": "ui.pages_CharacterCatalog.dictionary1.detailEmpty",
  "detailFailed": "ui.pages_CharacterCatalog.dictionary1.detailFailed",
  "eyebrow": "ui.pages_CharacterCatalog.dictionary1.eyebrow",
  "goal": "ui.pages_CharacterCatalog.dictionary1.goal",
  "jump": "ui.pages_CharacterCatalog.dictionary1.jump",
  "loading": "ui.pages_CharacterCatalog.dictionary1.loading",
  "mainStats": "ui.pages_CharacterCatalog.dictionary1.mainStats",
  "noFixedTarget": "ui.pages_CharacterCatalog.dictionary1.noFixedTarget",
  "noMatch": "ui.pages_CharacterCatalog.dictionary1.noMatch",
  "notFound": "ui.pages_CharacterCatalog.dictionary1.notFound",
  "parties": "ui.pages_CharacterCatalog.dictionary1.parties",
  "partyChecked": "ui.pages_CharacterCatalog.dictionary1.partyChecked",
  "partyCommunity": "ui.pages_CharacterCatalog.dictionary1.partyCommunity",
  "partyDataAsOf": "ui.pages_CharacterCatalog.dictionary1.partyDataAsOf",
  "partyMembers": "ui.pages_CharacterCatalog.dictionary1.partyMembers",
  "partyNone": "ui.pages_CharacterCatalog.dictionary1.partyNone",
  "partySelect": "ui.pages_CharacterCatalog.dictionary1.partySelect",
  "partySource": "ui.pages_CharacterCatalog.dictionary1.partySource",
  "partyTargets": "ui.pages_CharacterCatalog.dictionary1.partyTargets",
  "partyUpdated": "ui.pages_CharacterCatalog.dictionary1.partyUpdated",
  "partyVersion": "ui.pages_CharacterCatalog.dictionary1.partyVersion",
  "pending": "ui.pages_CharacterCatalog.dictionary1.pending",
  "preparing": "ui.pages_CharacterCatalog.dictionary1.preparing",
  "progression": "ui.pages_CharacterCatalog.dictionary1.progression",
  "relic": "ui.pages_CharacterCatalog.dictionary1.relic",
  "retry": "ui.pages_CharacterCatalog.dictionary1.retry",
  "reviewed": "ui.pages_CharacterCatalog.dictionary1.reviewed",
  "search": "ui.pages_CharacterCatalog.dictionary1.search",
  "secondary": "ui.pages_CharacterCatalog.dictionary1.secondary",
  "sectionProgression": "ui.pages_CharacterCatalog.dictionary1.sectionProgression",
  "sectionStats": "ui.pages_CharacterCatalog.dictionary1.sectionStats",
  "sort": "ui.pages_CharacterCatalog.dictionary1.sort",
  "sortBatch": "ui.pages_CharacterCatalog.dictionary1.sortBatch",
  "sortCatalog": "ui.pages_CharacterCatalog.dictionary1.sortCatalog",
  "source": "ui.pages_CharacterCatalog.dictionary1.source",
  "statusAll": "ui.pages_CharacterCatalog.dictionary1.statusAll",
  "statusFilter": "ui.pages_CharacterCatalog.dictionary1.statusFilter",
  "strict": "ui.pages_CharacterCatalog.dictionary1.strict",
  "subtitle": "ui.pages_CharacterCatalog.dictionary1.subtitle",
  "synergy": "ui.pages_CharacterCatalog.dictionary1.synergy",
  "targets": "ui.pages_CharacterCatalog.dictionary1.targets",
  "title": "ui.pages_CharacterCatalog.dictionary1.title",
  "uidFree": "ui.pages_CharacterCatalog.dictionary1.uidFree",
  "updated": "ui.pages_CharacterCatalog.dictionary1.updated"
});

function localText(text: LocalizedText, language: "ja" | "en" | "zh-CN") {
  return text[language];
}

export default function CharacterCatalog() {
  const { language } = useLanguage();
  const copy = uiText[language];
  const progressionVariant = useDisplayVariant("progressionStepper");
  const formationVariant = useDisplayVariant("partyFormation");
  const chromeVariant = useDisplayVariant("siteChrome");
  const isShelf = useDisplayVariant("catalogShelf") === "shelf";
  const initialParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const requestedGame = initialParams.get("game");
  const initialGame = (requestedGame && requestedGame in GAMES ? requestedGame : "hsr") as GameId;
  const [game, setGame] = useState<GameId>(initialGame);
  const [selectedName, setSelectedName] = useState(initialParams.get("character") ?? "");
  const [filter, setFilter] = useState("");
  // 案 C の図鑑だけで使う推奨PTの選択。legacy の全案一覧では使わない。
  const [selectedPartyId, setSelectedPartyId] = useState("");
  // 案 B のカード棚だけで使う絞り込み・並び順・不正な直リンクの案内・閉じたあとのフォーカス先。
  const [statusFilter, setStatusFilter] = useState<ShelfStatusFilter>("all");
  const [batchFilter, setBatchFilter] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<ShelfSort>("catalog");
  const [notFound, setNotFound] = useState(false);
  const [openerName, setOpenerName] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const catalogQuery = trpc.build.referenceCatalog.useQuery(undefined, { staleTime: 10 * 60_000 });
  const catalog = useMemo(() => selectPresentation(catalogQuery.data), [catalogQuery.data]);
  const entries = catalog?.games[game] ?? [];
  const filteredEntries = useMemo(() => {
    const keyword = filter.trim().toLocaleLowerCase();
    if (!keyword) return entries;
    return entries.filter((entry) => entry.name.toLocaleLowerCase().includes(keyword));
  }, [entries, filter]);

  useEffect(() => {
    // カード棚は自動で選ばない。取得できた一覧に無い名前だけを不正と判断し、取得中・失敗中は断定しない。
    if (isShelf) {
      if (selectedName && catalogQuery.isSuccess && !entries.some((entry) => entry.name === selectedName)) {
        setSelectedName("");
        setNotFound(true);
      }
      return;
    }
    if (!entries.length) return;
    if (!entries.some((entry) => entry.name === selectedName)) {
      setSelectedName(entries[0]?.name ?? "");
    }
  }, [entries, selectedName, isShelf, catalogQuery.isSuccess]);

  useEffect(() => {
    if (!selectedName) {
      // カード棚で閉じたときは character だけを消し、game・他のパラメータ・hash は残す。
      if (!isShelf) return;
      const url = new URL(window.location.href);
      if (!url.searchParams.has("character") && url.searchParams.get("game") === game) return;
      url.searchParams.set("game", game);
      url.searchParams.delete("character");
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
      return;
    }
    const url = new URL(window.location.href);
    url.searchParams.set("game", game);
    url.searchParams.set("character", selectedName);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }, [game, selectedName, isShelf]);

  // ゲーム・キャラクターが変わったら先頭の案へ戻す（存在しない id も部品側で先頭に戻る）。
  useEffect(() => {
    setSelectedPartyId("");
  }, [game, selectedName]);

  const referenceQuery = trpc.build.reference.useQuery(
    { game, name: selectedName || "-" },
    { enabled: Boolean(selectedName), staleTime: 10 * 60_000 },
  );
  const reference = selectPresentation(referenceQuery.data);

  const detail = reference ? (
    <div className="space-y-8">
      <section className="paper-card border border-stone-300 p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="detail-mono text-[9px] text-stone-500">{GAMES[game].short} / {reference.guide.profileId ?? "BUILD"}</p>
            <h2 className="display-serif mt-2 text-3xl font-bold sm:text-4xl">{reference.name}</h2>
          </div>
          <span className={cn("inline-flex items-center gap-1.5 border px-2.5 py-1 detail-mono text-[9px]", reference.status === "reviewed" ? "border-emerald-700 text-emerald-800" : "border-stone-400 text-stone-500")}>
            {reference.status === "reviewed" && <CheckCircle2 className="h-3.5 w-3.5" />}
            {reference.status === "reviewed" ? `${copy.reviewed} / ${copy.batch} ${reference.batch}` : copy.pending}
          </span>
        </div>
        <p className="mt-5 max-w-3xl font-serif text-base leading-7 text-stone-700">{reference.guide.headline}</p>
      </section>

      <section id={SHELF_SECTION_IDS[0]} className="scroll-mt-20">
        <div className="flex items-center gap-2 border-b border-stone-400 pb-3">
          <BookOpen className="h-4 w-4 text-amber-800" />
          <h3 className="display-serif text-2xl font-semibold">{copy.build}</h3>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="border border-stone-300 p-4">
            <p className="detail-mono text-[9px] text-stone-500">{copy.relic}</p>
            <p className="mt-2 text-sm font-semibold leading-6">{reference.guide.relicSet}</p>
          </div>
          <div className="border border-stone-300 p-4">
            <p className="detail-mono text-[9px] text-stone-500">{copy.secondary}</p>
            <p className="mt-2 text-sm font-semibold leading-6">{reference.guide.planarSet}</p>
          </div>
        </div>

        <div className="mt-4 border border-stone-300 p-4">
          <p className="detail-mono text-[9px] text-stone-500">{copy.mainStats}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {reference.guide.mainStats.map((stat) => (
              <div key={`${stat.slot}:${stat.value}`} className="flex items-start justify-between gap-4 border-b border-stone-200 py-2 text-sm last:border-b-0">
                <span className="text-stone-500">{stat.slot}</span>
                <span className="text-right font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id={SHELF_SECTION_IDS[1]} className="scroll-mt-20">
        <div className="border-b border-stone-400 pb-3"><h3 className="display-serif text-2xl font-semibold">{copy.targets}</h3></div>
        {reference.guide.targets.length ? (
          <div className="mt-4 overflow-x-auto border border-stone-300">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead className="bg-stone-100 detail-mono text-[9px] text-stone-500">
                <tr><th className="px-4 py-3 text-left">STAT</th><th className="px-4 py-3 text-right">{copy.strict}</th><th className="px-4 py-3 text-right">{copy.goal}</th><th className="px-4 py-3 text-right">{copy.baseline}</th></tr>
              </thead>
              <tbody>
                {reference.guide.targets.map((target) => (
                  <tr key={target.key} className="border-t border-stone-200">
                    <td className="px-4 py-3 font-semibold">{target.label}</td>
                    <td className="px-4 py-3 text-right font-mono">{target.targets["厳選"]}{target.unit}</td>
                    <td className="bg-amber-50/70 px-4 py-3 text-right font-mono font-bold text-amber-900">{target.targets["目標"]}{target.unit}</td>
                    <td className="px-4 py-3 text-right font-mono">{target.targets["妥協"]}{target.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p className="mt-4 border border-stone-300 p-4 text-sm leading-6 text-stone-600">{copy.noFixedTarget}</p>}
        {reference.guide.targetContext && <div className="mt-4 border-l-2 border-amber-700 pl-4"><p className="detail-mono text-[9px] text-stone-500">{copy.context}</p><p className="mt-2 text-sm leading-6 text-stone-600">{reference.guide.targetContext}</p></div>}
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 detail-mono text-[9px] text-stone-500">
          {reference.guide.sourceLabel && <span>{copy.source}: {reference.guide.sourceLabel}</span>}
          {reference.guide.updatedAt && <span>{copy.updated}: {reference.guide.updatedAt}</span>}
        </div>
      </section>

      <section id={SHELF_SECTION_IDS[2]} className="scroll-mt-20">
        <div className="flex items-center gap-2 border-b border-stone-400 pb-3"><Users className="h-4 w-4 text-amber-800" /><h3 className="display-serif text-2xl font-semibold">{copy.parties}</h3></div>
        {formationVariant === "formation" ? (
          <PartyFormation
            options={reference.partyRecommendations.options as unknown as FormationOption[]}
            selectedId={selectedPartyId}
            onSelect={setSelectedPartyId}
            selectedName={reference.name}
            baseTargets={reference.guide.targets}
            language={language}
            tone="light"
            labels={{ select: copy.partySelect, members: copy.partyMembers, synergy: copy.synergy, targets: copy.partyTargets, version: copy.partyVersion, dataAsOf: copy.partyDataAsOf, updated: copy.partyUpdated, source: copy.partySource, community: copy.partyCommunity, checked: copy.partyChecked, noData: copy.partyNone }}
          />
        ) : (
        <div className="mt-4 grid gap-4 xl:grid-cols-3">
          {reference.partyRecommendations.options.map((option) => (
            <article key={option.id} className="border border-stone-300 p-4">
              <p className="detail-mono text-[9px] text-amber-800">PLAN {option.rank}</p>
              <h4 className="mt-2 font-serif text-lg font-semibold">{localText(option.title as LocalizedText, language)}</h4>
              <div className="mt-4 space-y-2">
                {option.members.map((member, index) => (
                  <div key={`${option.id}:${index}`} className="flex items-center justify-between gap-3 border-b border-stone-200 pb-2 text-xs last:border-b-0">
                    <span className="font-semibold">{localText(member.name as LocalizedText, language)}</span>
                    <span className="text-stone-500">{localText(member.role as LocalizedText, language)}</span>
                  </div>
                ))}
              </div>
              {option.synergy[0] && <div className="mt-4"><p className="detail-mono text-[8px] text-stone-500">{copy.synergy}</p><p className="mt-1 text-xs leading-5 text-stone-600">{localText(option.synergy[0] as LocalizedText, language)}</p></div>}
            </article>
          ))}
        </div>
        )}
        <PartyAppearances appearances={reference.partyAppearances} language={language} />
      </section>

      <section id={SHELF_SECTION_IDS[3]} className="scroll-mt-20">
        <div className="border-b border-stone-400 pb-3"><h3 className="display-serif text-2xl font-semibold">{copy.progression}</h3></div>
        {progressionVariant === "stepper" ? (
          <ProgressionStepper game={game} tone="light" mode="catalog" profile={reference.constellations as unknown as ProgressionProfile} resetKey={`${game}:${reference.name}`} emptyText={copy.preparing} />
        ) : reference.constellations.dataStatus === "curated" && reference.constellations.effects.length ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {reference.constellations.effects.map((effect) => (
              <article key={effect.level} className="border border-stone-300 p-4">
                <div className="flex items-center justify-between gap-3"><span className="detail-mono text-[9px] text-amber-800">{localText(reference.constellations.rankLabel as LocalizedText, language)} {effect.level}</span></div>
                <h4 className="mt-2 text-sm font-bold">{localText(effect.name as LocalizedText, language)}</h4>
                <p className="mt-2 text-xs leading-5 text-stone-600">{localText(effect.description as LocalizedText, language)}</p>
              </article>
            ))}
          </div>
        ) : <p className="mt-4 border border-stone-300 p-4 text-sm leading-6 text-stone-600">{copy.preparing}</p>}
      </section>
    </div>
  ) : null;

  const changeGame = (next: GameId) => {
    setGame(next);
    setSelectedName("");
    setFilter("");
    setStatusFilter("all");
    setBatchFilter(null);
    setNotFound(false);
    setOpenerName("");
  };
  const openShelfCard = (name: string) => {
    setOpenerName(name);
    setNotFound(false);
    setSelectedName(name);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" data-site-chrome={chromeVariant === "unified" ? "unified" : undefined} data-game={chromeVariant === "unified" ? game : undefined}>
      {chromeVariant === "unified" ? <SiteHeader activePage="catalog" game={game}><span className="detail-mono hidden text-[11px] text-stone-500 sm:inline">{copy.uidFree} / {copy.catalogStatus.replace("{count}", catalogQuery.data ? String(catalogQuery.data.total) : "…")}</span><LanguageSwitcher /></SiteHeader> : (
      <header className="container pt-6 sm:pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-stone-400 py-3">
          <Link href="/" className="detail-mono inline-flex items-center gap-2 text-[9px] text-amber-800 underline-offset-4 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" />{copy.back}
          </Link>
          <div className="flex items-center gap-3">
            <span className="detail-mono text-[9px] text-stone-500">{copy.uidFree} / {copy.catalogStatus.replace("{count}", catalogQuery.data ? String(catalogQuery.data.total) : "…")}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      )}

      <main className="container pb-20 pt-10 sm:pt-14">
        <section className="border-b border-stone-300 pb-8">
          <p className="detail-mono text-[10px] text-amber-800">{copy.eyebrow}</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h1 className="display-serif text-4xl font-bold tracking-[-.04em] sm:text-6xl">{copy.title}</h1>
              <p className="mt-4 max-w-2xl font-serif text-sm leading-7 text-stone-600 sm:text-base">{copy.subtitle}</p>
            </div>
            {catalogQuery.data && (
              <p className="detail-mono text-[9px] text-stone-500">
                REVIEWED {catalogQuery.data.reviewed} / {catalogQuery.data.total}
              </p>
            )}
          </div>
        </section>

        {isShelf ? (
          <CatalogShelf
            game={game}
            games={GAMES}
            onGameChange={changeGame}
            totalInGame={entries.length}
            entries={shelfEntries(entries, { keyword: filter, status: statusFilter, batch: batchFilter, sort: sortOrder })}
            batchOptions={shelfBatchOptions(entries)}
            keyword={filter}
            onKeywordChange={setFilter}
            status={statusFilter}
            onStatusChange={setStatusFilter}
            batch={batchFilter}
            onBatchChange={setBatchFilter}
            sort={sortOrder}
            onSortChange={setSortOrder}
            catalogState={catalogQuery.isError ? "error" : catalogQuery.isSuccess ? "ready" : "loading"}
            onCatalogRetry={() => void catalogQuery.refetch()}
            notFound={notFound}
            selectedName={selectedName}
            onSelect={openShelfCard}
            onClose={() => setSelectedName("")}
            detailState={referenceQuery.error ? "error" : reference ? "ready" : referenceQuery.isFetching || referenceQuery.isLoading ? "loading" : "empty"}
            onDetailRetry={() => void referenceQuery.refetch()}
            searchRef={searchRef}
            openerName={openerName}
            labels={{ search: copy.search, noMatch: copy.noMatch, reviewed: copy.reviewed, pending: copy.pending, batch: copy.batch, statusFilter: copy.statusFilter, statusAll: copy.statusAll, batchFilter: copy.batchFilter, batchAll: copy.batchAll, sort: copy.sort, sortCatalog: copy.sortCatalog, sortBatch: copy.sortBatch, catalogFailed: copy.catalogFailed, retry: copy.retry, loading: copy.loading, notFound: copy.notFound, close: copy.close, jump: copy.jump, sections: [copy.build, copy.sectionStats, copy.parties, copy.sectionProgression], detailFailed: copy.detailFailed, detailEmpty: copy.detailEmpty, detailDescription: copy.detailDescription }}
          >
            {detail}
          </CatalogShelf>
        ) : (
        <section className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside>
            <div className="grid grid-cols-3 gap-1 border border-stone-300 bg-stone-100/70 p-1">
              {(Object.keys(GAMES) as GameId[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => changeGame(id)}
                  className={cn("min-h-11 px-2 text-[10px] font-semibold transition-colors", game === id ? "bg-stone-900 text-white" : "text-stone-600 hover:bg-stone-200")}
                  aria-pressed={game === id}
                >
                  {GAMES[id].short}
                </button>
              ))}
            </div>
            <p className="detail-mono mt-2 text-[9px] text-stone-500">{GAMES[game].name} / {entries.length}</p>

            <div className="relative mt-5">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <Input
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                placeholder={copy.search}
                className="h-11 rounded-none border-stone-400 bg-transparent pl-9 shadow-none focus-visible:ring-amber-700"
              />
            </div>

            <div className="mt-3 max-h-[560px] overflow-y-auto border-y border-stone-300">
              {catalogQuery.isLoading && <div className="flex items-center gap-2 px-3 py-5 text-xs text-stone-500"><Loader2 className="h-4 w-4 animate-spin" />Loading</div>}
              {!catalogQuery.isLoading && filteredEntries.length === 0 && <p className="px-3 py-5 text-xs text-stone-500">{copy.noMatch}</p>}
              {filteredEntries.map((entry) => (
                <button
                  key={`${entry.game}:${entry.name}`}
                  type="button"
                  onClick={() => setSelectedName(entry.name)}
                  className={cn("flex w-full items-center justify-between gap-3 border-b border-stone-200 px-3 py-3 text-left transition-colors last:border-b-0", selectedName === entry.name ? "bg-stone-900 text-white" : "hover:bg-stone-100")}
                >
                  <span className="text-sm font-semibold">{entry.name}</span>
                  <span className={cn("detail-mono shrink-0 text-[8px]", selectedName === entry.name ? "text-stone-300" : entry.status === "reviewed" ? "text-emerald-800" : "text-stone-400")}>
                    {entry.status === "reviewed" ? `B${entry.batch}` : "PROFILE"}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="min-w-0">
            {referenceQuery.isFetching && !reference && (
              <div className="flex min-h-72 items-center justify-center border-y border-stone-300">
                <Loader2 className="mr-3 h-5 w-5 animate-spin text-amber-800" />
                <span className="detail-mono text-[10px] text-stone-500">LOADING BUILD REFERENCE</span>
              </div>
            )}

            {referenceQuery.error && (
              <div className="border border-rose-300 bg-rose-50 p-5 text-sm text-rose-800">{referenceQuery.error.message}</div>
            )}

            {detail}
          </div>
        </section>
        )}
      </main>
    </div>
  );
}
