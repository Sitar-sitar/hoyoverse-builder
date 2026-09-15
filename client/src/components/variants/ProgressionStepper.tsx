import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Film, Sparkle } from "lucide-react";
import React, { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

/**
 * 案 D: 凸の6段を縦のタイムラインで表示する（設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.4 D、G-D 確定）。
 * ページが持つ凸データと文言を受け取り、表示する段の選択だけを状態として持つ。比較の目標や解放数は変えない（U14）。
 */

type LocalizedText = { ja: string; en: string; "zh-CN": string };
type GameId = "hsr" | "genshin" | "zzz";
type TargetChange = { key: string; label: LocalizedText; unit: string; targets: Record<string, number>; reason: LocalizedText };

export type ProgressionEffect = { level: number; name: LocalizedText; description: LocalizedText; targetChanges?: TargetChange[]; caution?: LocalizedText };
export type ProgressionProfile = {
  rankLabel: LocalizedText;
  acquiredRank: number;
  dataStatus: string;
  effects: ProgressionEffect[];
  gameVersion?: string;
  dataAsOf?: string;
  updatedAt?: string;
  sourceLabel?: LocalizedText;
  sourceUrl?: string;
};

export type ProgressionFootnoteLabels = { version: string; asOf: string; updated: string; source: string };

type Props = {
  game: GameId;
  /** UID照会は濃色、図鑑は淡色の背景 */
  tone: "dark" | "light";
  /** lookup は解放状態を示し、catalog は解放の概念を持たない */
  mode: "lookup" | "catalog";
  profile: ProgressionProfile | null | undefined;
  /** 表示中のキャラクターを表す値。変わったら初期選択へ戻す */
  resetKey: string;
  emptyText: string;
  note?: string;
  footnoteLabels?: ProgressionFootnoteLabels;
};

const PLACEHOLDER_LEVELS = [1, 2, 3, 4, 5, 6];

/** 原神（命ノ星座）の記号。公式アイコンは使わず、点と線の星座で表す。 */
function ConstellationGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4.5 17.5 9.5 9l5 4 5-8.5" />
      <circle cx="4.5" cy="17.5" r="1.9" fill="currentColor" />
      <circle cx="9.5" cy="9" r="1.9" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1.9" fill="currentColor" />
      <circle cx="19.5" cy="4.5" r="1.9" fill="currentColor" />
    </svg>
  );
}

/** ゲームごとの記号: HSR 星魂＝4本光の星、原神 命ノ星座＝星座、ZZZ 心象映画＝フィルム。 */
const GAME_SYMBOLS: Record<GameId, { name: string; Icon: (props: { className?: string }) => React.ReactElement }> = {
  hsr: { name: "star", Icon: ({ className }) => <Sparkle className={className} aria-hidden="true" /> },
  genshin: { name: "constellation", Icon: ConstellationGlyph },
  zzz: { name: "film", Icon: ({ className }) => <Film className={className} aria-hidden="true" /> },
};

export default function ProgressionStepper({ game, tone, mode, profile, resetKey, emptyText, note, footnoteLabels }: Props) {
  const { t, language } = useLanguage();
  const idBase = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const curated = profile?.dataStatus === "curated" && profile.effects.length > 0;
  const effects = curated ? [...profile.effects].sort((left, right) => left.level - right.level) : [];
  const levels = curated ? effects.map((effect) => effect.level) : PLACEHOLDER_LEVELS;
  const acquired = mode === "lookup" ? Math.max(0, profile?.acquiredRank ?? 0) : 0;
  const levelsKey = levels.join(",");

  const initialLevel = () => {
    if (!curated || mode === "catalog") return levels[0];
    return levels.find((level) => level > acquired) ?? levels[levels.length - 1];
  };
  const [selected, setSelected] = useState(initialLevel);

  // 表示中のキャラクター・解放数・段の構成が変わったら初期選択へ戻す（U13）。
  useEffect(() => {
    setSelected(initialLevel());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey, acquired, curated, levelsKey, mode]);

  const rankLabel = profile ? profile.rankLabel[language] : "";
  const selectedEffect = curated ? effects.find((effect) => effect.level === selected) : undefined;
  const panelId = `${idBase}-panel`;
  const tabId = (level: number) => `${idBase}-tab-${level}`;
  const { name: symbolName, Icon } = GAME_SYMBOLS[game];

  const dark = tone === "dark";
  const accentStyle = { "--stepper-accent": dark ? "var(--game-accent-on-dark, #fde68a)" : "var(--game-accent, #92400e)" } as CSSProperties;

  const statusFor = (level: number) => {
    if (mode !== "lookup" || !curated) return null;
    if (level <= acquired) return t("progressionUnlockedStage");
    if (level === acquired + 1) return t("progressionNextUnlock");
    return t("progressionLockedStage");
  };

  const moveSelection = (event: KeyboardEvent<HTMLOListElement>) => {
    if (!curated) return;
    const index = levels.indexOf(selected);
    const nextIndex = event.key === "ArrowDown" ? Math.min(levels.length - 1, index + 1)
      : event.key === "ArrowUp" ? Math.max(0, index - 1)
        : event.key === "Home" ? 0
          : event.key === "End" ? levels.length - 1
            : null;
    if (nextIndex === null) return;
    event.preventDefault();
    setSelected(levels[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="mt-5" style={accentStyle} data-testid="progression-stepper" data-game={game} data-symbol={symbolName}>
      {curated && note && <p className={cn("mb-4 text-sm leading-6", dark ? "text-stone-200" : "text-stone-600")}>{note}</p>}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]">
        <ol role="tablist" aria-orientation="vertical" aria-label={`${rankLabel} ${t("progressionStepList")}`.trim()} onKeyDown={moveSelection} className={cn(!curated && "opacity-50")}>
          {levels.map((level, index) => {
            const effect = effects.find((item) => item.level === level);
            const isSelected = curated && level === selected;
            const unlocked = mode === "lookup" && curated && level <= acquired;
            const isNext = mode === "lookup" && curated && level === acquired + 1;
            const hasTargetChange = Boolean(effect?.targetChanges?.length);
            const status = statusFor(level);
            return (
              <li key={level} role="presentation" className="relative pb-3 last:pb-0">
                {index < levels.length - 1 && (
                  <span aria-hidden="true" className={cn("absolute bottom-0 left-5 top-11 w-px", unlocked ? "bg-[color:var(--stepper-accent)]" : dark ? "bg-stone-700" : "bg-stone-300")} />
                )}
                <button
                  type="button"
                  role="tab"
                  id={tabId(level)}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  aria-selected={isSelected}
                  aria-controls={panelId}
                  tabIndex={isSelected || (!curated && index === 0) ? 0 : -1}
                  disabled={!curated}
                  onClick={() => setSelected(level)}
                  className={cn(
                    "flex w-full items-start gap-3 p-1 pr-3 text-left transition-colors disabled:cursor-not-allowed",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--stepper-accent)]",
                    isSelected && (dark ? "bg-stone-800" : "bg-stone-100"),
                    !isSelected && curated && (dark ? "hover:bg-stone-800/60" : "hover:bg-stone-100/70"),
                  )}
                >
                  <span
                    data-testid={`progression-node-${level}`}
                    className={cn(
                      "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border",
                      unlocked || (mode === "catalog" && isSelected)
                        ? cn("border-[color:var(--stepper-accent)] bg-[color:var(--stepper-accent)]", dark ? "text-stone-950" : "text-white")
                        : isNext
                          ? cn("border-[color:var(--stepper-accent)] text-[color:var(--stepper-accent)] ring-2", dark ? "ring-amber-200/30" : "ring-amber-800/20")
                          : curated && mode === "catalog"
                            ? cn("border-[color:var(--stepper-accent)] text-[color:var(--stepper-accent)]")
                            : dark ? "border-stone-600 text-stone-400" : "border-stone-300 text-stone-400",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {hasTargetChange && (
                      <span className={cn("absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border", dark ? "border-stone-900 bg-rose-300" : "border-white bg-rose-700")}>
                        <span className="sr-only">{t("progressionTargetChange")}</span>
                      </span>
                    )}
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className={cn("detail-mono block text-[10px]", dark ? "text-stone-300" : "text-stone-500")}>
                      {rankLabel} {level}{status ? ` / ${status}` : ""}
                    </span>
                    <span className={cn("mt-0.5 block text-sm font-semibold leading-5", dark ? "text-stone-50" : "text-stone-900")}>
                      {effect ? effect.name[language] : "—"}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div
          role="tabpanel"
          id={panelId}
          aria-labelledby={curated ? tabId(selected) : undefined}
          tabIndex={0}
          className={cn("border p-4 sm:p-5", dark ? "border-stone-700 bg-stone-800/70" : "border-stone-300 bg-stone-50/60")}
        >
          {selectedEffect ? (
            <>
              <p className={cn("detail-mono text-[10px]", dark ? "text-amber-200" : "text-amber-800")}>
                {rankLabel} {selectedEffect.level}{statusFor(selectedEffect.level) ? ` / ${statusFor(selectedEffect.level)}` : ""}
              </p>
              <h4 className={cn("mt-2 font-serif text-xl font-semibold", dark ? "text-stone-50" : "text-stone-900")}>{selectedEffect.name[language]}</h4>
              <p className={cn("mt-2 text-sm leading-6", dark ? "text-stone-200" : "text-stone-600")}>{selectedEffect.description[language]}</p>
              {selectedEffect.targetChanges?.length ? (
                <div className={cn("mt-4 border-t pt-3", dark ? "border-stone-700" : "border-stone-200")}>
                  <p className={cn("detail-mono text-[10px]", dark ? "text-amber-200" : "text-amber-800")}>{t("progressionTargetHeading")}</p>
                  {selectedEffect.targetChanges.map((change) => (
                    <div key={change.key} className="mt-2">
                      <p className={cn("font-serif text-lg font-semibold", dark ? "text-amber-100" : "text-stone-900")}>
                        {change.label[language]} {t("target")} {change.targets["目標"]}{change.unit}
                      </p>
                      <p className={cn("mt-1 text-xs leading-5", dark ? "text-stone-300" : "text-stone-600")}>{change.reason[language]}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {selectedEffect.caution && (
                <p className={cn("mt-4 border-l pl-3 text-xs leading-5", dark ? "border-rose-300 text-rose-100" : "border-rose-700 text-rose-900")}>
                  <span className="sr-only">{t("progressionCaution")}: </span>{selectedEffect.caution[language]}
                </p>
              )}
            </>
          ) : (
            <p className={cn("text-sm leading-6", dark ? "text-stone-200" : "text-stone-600")}>{emptyText}</p>
          )}
        </div>
      </div>

      {curated && footnoteLabels && profile && (
        <div className={cn("mt-4 border-t pt-3 text-[10px] leading-5", dark ? "border-stone-700 text-stone-300" : "border-stone-200 text-stone-500")}>
          <p><span className={cn("detail-mono mr-2 text-[8px]", dark ? "text-amber-200" : "text-amber-800")}>{footnoteLabels.version}</span>{profile.gameVersion}</p>
          <p><span className={cn("detail-mono mr-2 text-[8px]", dark ? "text-amber-200" : "text-amber-800")}>{footnoteLabels.asOf}</span>{profile.dataAsOf} JST</p>
          <p><span className={cn("detail-mono mr-2 text-[8px]", dark ? "text-amber-200" : "text-amber-800")}>{footnoteLabels.updated}</span>{profile.updatedAt} JST</p>
          {profile.sourceUrl && profile.sourceLabel && (
            <p><span className={cn("detail-mono mr-2 text-[8px]", dark ? "text-amber-200" : "text-amber-800")}>{footnoteLabels.source}</span><a className="underline underline-offset-2" href={profile.sourceUrl} target="_blank" rel="noreferrer">{profile.sourceLabel[language]}</a></p>
          )}
        </div>
      )}
    </div>
  );
}
