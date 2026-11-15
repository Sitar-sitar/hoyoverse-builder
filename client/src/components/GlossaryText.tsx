import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { GlossaryNode } from "@shared/content/glossary";
import React, { type MouseEvent } from "react";

/**
 * 用語集の本文（段落 → 「文字／用語リンク」）を描く部品。
 * 設計: docs/実装設計書_ゲーム内用語集の基盤_2026-11-15.md §4.4・§4.7.2・§4.9（ガイド側でもそのまま使える形にする）
 * - リンクは実際の URL を持つ <a> にし、新しいタブで開く・URL のコピーができるようにする。
 * - 通常のクリックだけ onNavigate へ渡し、同じ画面のまま切り替える。
 * - ポインタを載せる・フォーカスすると、リンク先の要約を Tooltip で出す。
 */

export type GlossaryTextProps = {
  paragraphs: GlossaryNode[][];
  /** 用語ID → リンク先 URL */
  hrefFor: (id: string) => string;
  /** 用語ID → 要約（Tooltip 用）。無ければ Tooltip を出さない。 */
  summaryFor?: (id: string) => string | undefined;
  onNavigate?: (id: string) => void;
  className?: string;
};

export function glossaryHref(game: string, term: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/glossary?${new URLSearchParams({ game, term }).toString()}`;
}

function isPlainClick(event: MouseEvent) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

export default function GlossaryText({ paragraphs, hrefFor, summaryFor, onNavigate, className }: GlossaryTextProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {paragraphs.map((nodes, paragraphIndex) => (
        <p key={paragraphIndex} className="whitespace-pre-line">
          {nodes.map((node, index) => {
            if (node.type === "text") return <React.Fragment key={index}>{node.text}</React.Fragment>;
            const link = (
              <a
                href={hrefFor(node.id)}
                data-term={node.id}
                className="font-semibold text-amber-900 underline decoration-amber-700/60 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                onClick={(event) => {
                  if (!onNavigate || !isPlainClick(event)) return;
                  event.preventDefault();
                  onNavigate(node.id);
                }}
              >
                {node.label}
              </a>
            );
            const summary = summaryFor?.(node.id);
            if (!summary) return <React.Fragment key={index}>{link}</React.Fragment>;
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>{link}</TooltipTrigger>
                <TooltipContent className="max-w-xs text-left leading-5">{summary}</TooltipContent>
              </Tooltip>
            );
          })}
        </p>
      ))}
    </div>
  );
}
