import { useLanguage, type AppLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import React, { useId, useRef, type KeyboardEvent } from "react";

/**
 * 案 C: 推奨PTを PLAN の横タブと矩形のメンバーカードで表示する
 * （設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.4 C、G-C 確定）。
 * 選択中の案はページが持ち、この部品は表示と選択の通知だけを行う（選択状態を重複して持たない）。
 */

type LocalizedText = { ja: string; en: string; "zh-CN": string };
type Tier = "厳選" | "目標" | "妥協";

export type FormationTargetChange = { key: string; label: LocalizedText; unit: string; targets: Record<Tier, number>; reason: LocalizedText };
export type FormationCommunitySource = { label: LocalizedText; url: string; checkedAt: string; note: LocalizedText };
export type FormationOption = {
  id: string;
  rank: number;
  title: LocalizedText;
  members: Array<{ name: LocalizedText; role: LocalizedText }>;
  synergy: LocalizedText[];
  targetChanges: FormationTargetChange[];
  targetSummary: LocalizedText;
  gameVersion: string;
  dataAsOf: string;
  updatedAt: string;
  sourceLabel: LocalizedText;
  sourceUrl: string;
  communitySources: FormationCommunitySource[];
};
export type FormationBaseTarget = { key: string; targets: Partial<Record<Tier, number>> };

export type FormationLabels = {
  select: string;
  members: string;
  synergy: string;
  targets: string;
  version: string;
  dataAsOf: string;
  updated: string;
  source: string;
  community: string;
  checked: string;
  noData: string;
  /** 目標変更が無い案で出す注記（無ければ出さない） */
  battleNote?: string;
};

export type RoleGroup = "healer" | "sustain" | "debuffer" | "support" | "attacker" | "unknown";

/** 役割の語は、この順で最初に一致したものを使う（U18）。 */
const ROLE_GROUPS: Array<{ group: Exclude<RoleGroup, "unknown">; words: string[] }> = [
  { group: "healer", words: ["回復", "ヒーラー"] },
  { group: "sustain", words: ["耐久", "シールド"] },
  { group: "debuffer", words: ["デバッファー", "弱体"] },
  { group: "support", words: ["サポート", "バッファー", "支援"] },
  { group: "attacker", words: ["アタッカー", "主力"] },
];

export function roleGroupFor(roleJa: string): RoleGroup {
  return ROLE_GROUPS.find((entry) => entry.words.some((word) => roleJa.includes(word)))?.group ?? "unknown";
}

/** 役割の色帯（緑 / 灰青 / 紫 / 青 / 赤茶、未知語は無彩色）。色だけに頼らず、原文の役割も必ず表示する。 */
const ROLE_BAND: Record<RoleGroup, { dark: string; light: string }> = {
  healer: { dark: "border-l-emerald-300", light: "border-l-emerald-700" },
  sustain: { dark: "border-l-slate-300", light: "border-l-slate-600" },
  debuffer: { dark: "border-l-violet-300", light: "border-l-violet-700" },
  support: { dark: "border-l-sky-300", light: "border-l-sky-700" },
  attacker: { dark: "border-l-orange-300", light: "border-l-red-800" },
  unknown: { dark: "border-l-stone-500", light: "border-l-stone-300" },
};

/** 基礎目標（キー一致の「目標」値）。無ければ null。 */
export function baseGoalFor(key: string, baseTargets: FormationBaseTarget[]) {
  const value = baseTargets.find((item) => item.key === key)?.targets["目標"];
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

type Props = {
  options: FormationOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  /** 表示中キャラクターの日本語名。メンバー名と完全一致したときだけ強調する */
  selectedName: string;
  baseTargets: FormationBaseTarget[];
  language: AppLanguage;
  tone: "dark" | "light";
  labels: FormationLabels;
};

export default function PartyFormation({ options, selectedId, onSelect, selectedName, baseTargets, language, tone, labels }: Props) {
  const { t } = useLanguage();
  const idBase = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dark = tone === "dark";

  if (!options.length) {
    return <p className={cn("mt-5 border-l pl-3 text-sm leading-6", dark ? "border-amber-200 text-stone-200" : "border-amber-700 text-stone-600")}>{labels.noData}</p>;
  }

  const selectedIndex = Math.max(0, options.findIndex((option) => option.id === selectedId));
  const selected = options[selectedIndex];
  const panelId = `${idBase}-panel`;
  const tabId = (index: number) => `${idBase}-tab-${index}`;
  const local = (text: LocalizedText) => text[language];

  const moveSelection = (event: KeyboardEvent<HTMLDivElement>) => {
    const nextIndex = event.key === "ArrowRight" ? (selectedIndex + 1) % options.length
      : event.key === "ArrowLeft" ? (selectedIndex - 1 + options.length) % options.length
        : event.key === "Home" ? 0
          : event.key === "End" ? options.length - 1
            : null;
    if (nextIndex === null) return;
    event.preventDefault();
    onSelect(options[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  const muted = dark ? "text-stone-300" : "text-stone-500";
  const accent = dark ? "text-amber-200" : "text-amber-800";
  const body = dark ? "text-stone-200" : "text-stone-700";
  const rule = dark ? "border-stone-700" : "border-stone-200";

  return (
    <div className="mt-5" data-testid="party-formation">
      <div role="tablist" aria-label={labels.select} onKeyDown={moveSelection} className="flex gap-2 overflow-x-auto pb-1">
        {options.map((option, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              id={tabId(index)}
              ref={(element) => { tabRefs.current[index] = element; }}
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onSelect(option.id)}
              className={cn(
                "min-w-28 shrink-0 border px-3 py-2 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                dark ? "focus-visible:outline-amber-200" : "focus-visible:outline-amber-800",
                isSelected
                  ? dark ? "border-amber-200 bg-amber-100 text-stone-950" : "border-stone-900 bg-stone-900 text-stone-50"
                  : dark ? "border-stone-600 text-stone-200 hover:border-stone-300" : "border-stone-300 text-stone-700 hover:border-stone-700",
              )}
            >
              <span className="detail-mono block text-[11px] opacity-70">PLAN {String(option.rank).padStart(2, "0")}</span>
              <span className="mt-1 block text-xs font-semibold">{local(option.title)}</span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={panelId} aria-labelledby={tabId(selectedIndex)} className="mt-5">
        <p className={cn("detail-mono text-[11px]", accent)}>{labels.members}</p>
        <ol className="mt-3 flex gap-2 overflow-x-auto pb-1" data-testid="party-formation-members">
          {selected.members.map((member, index) => {
            const isCurrent = member.name.ja === selectedName;
            const group = roleGroupFor(member.role.ja);
            return (
              <li
                key={`${member.name.ja}-${index}`}
                data-role-group={group}
                data-current={isCurrent ? "true" : undefined}
                className={cn(
                  "min-w-[9rem] flex-1 border border-l-4 p-3",
                  dark ? ROLE_BAND[group].dark : ROLE_BAND[group].light,
                  isCurrent
                    ? dark ? "border-y-amber-200 border-r-amber-200 bg-amber-50/15" : "border-y-stone-900 border-r-stone-900 bg-stone-100"
                    : dark ? "border-y-stone-700 border-r-stone-700 bg-stone-800/70" : "border-y-stone-300 border-r-stone-300",
                )}
              >
                <p className={cn("text-[11px]", muted)}>{local(member.role)}</p>
                <p className={cn("mt-1 font-serif text-base font-semibold", dark ? "text-stone-50" : "text-stone-900")}>{local(member.name)}</p>
                {isCurrent && <p className={cn("detail-mono mt-1 text-[11px]", accent)}>{t("formationCurrentCharacter")}</p>}
              </li>
            );
          })}
        </ol>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div>
            <p className={cn("detail-mono text-[11px]", accent)}>{labels.synergy}</p>
            <ul className={cn("mt-2 space-y-2 text-sm leading-6", body)}>
              {selected.synergy.map((synergy, index) => (
                <li key={index} className={cn("border-l pl-3", dark ? "border-amber-200" : "border-amber-700")}>{local(synergy)}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className={cn("detail-mono text-[11px]", accent)}>{labels.targets}</p>
            <p className={cn("mt-2 text-sm leading-6", body)}>{local(selected.targetSummary)}</p>
            {selected.targetChanges.length ? (
              <ul className="mt-3 space-y-2" data-testid="party-formation-targets">
                {selected.targetChanges.map((change) => {
                  const base = baseGoalFor(change.key, baseTargets);
                  return (
                    <li key={change.key}>
                      <details className={cn("border p-3", dark ? "border-amber-200/30 bg-amber-50/10" : "border-stone-300 bg-stone-50")}>
                        <summary className={cn("cursor-pointer text-sm", dark ? "text-amber-100" : "text-stone-900")}>
                          <span className="font-serif font-semibold">{local(change.label)}</span>{" "}
                          <span className="text-xs">
                            {base !== null && <>{t("formationBaseTarget")} {base}{change.unit} </>}→ {t("formationTeamTarget")} {change.targets["目標"]}{change.unit}
                          </span>
                        </summary>
                        <p className={cn("mt-2 text-xs leading-5", body)}>{local(change.reason)}</p>
                      </details>
                    </li>
                  );
                })}
              </ul>
            ) : labels.battleNote ? (
              <p className={cn("mt-3 border-l pl-3 text-xs leading-5", dark ? "border-amber-200 text-stone-300" : "border-amber-700 text-stone-600")}>{labels.battleNote}</p>
            ) : null}
          </div>
        </div>

        <div className={cn("mt-5 border-t pt-3 text-[11px] leading-5", rule, muted)} data-testid="party-formation-sources">
          <p><span className={cn("detail-mono mr-2", accent)}>{labels.version}</span>{selected.gameVersion}</p>
          <p><span className={cn("detail-mono mr-2", accent)}>{labels.dataAsOf}</span>{selected.dataAsOf} JST</p>
          <p><span className={cn("detail-mono mr-2", accent)}>{labels.updated}</span>{selected.updatedAt} JST</p>
          <p><span className={cn("detail-mono mr-2", accent)}>{labels.source}</span><a className="underline underline-offset-2" href={selected.sourceUrl} target="_blank" rel="noreferrer">{local(selected.sourceLabel)}</a></p>
          {selected.communitySources.map((source) => (
            <div key={source.url} className={cn("mt-3 border-l pl-3", dark ? "border-stone-600" : "border-stone-300")}>
              <p className={cn("detail-mono", accent)}>{labels.community} / {labels.checked} {source.checkedAt} JST</p>
              <a className="mt-1 block underline underline-offset-2" href={source.url} target="_blank" rel="noreferrer">{local(source.label)}</a>
              <p className="mt-1">{local(source.note)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
