import React from "react";
import { useDisplaySettings } from "@/contexts/DisplaySettingsContext";
import { diffDisplayVariants } from "@shared/displayVariants";
import { Eye } from "lucide-react";
import { Link, useLocation } from "wouter";

/** 管理者のプレビュー中だけ、公開画面の上端に出す帯（設計 §4.2.4）。管理画面では出さない。 */
export default function DisplayPreviewBanner() {
  const [location] = useLocation();
  const { previewActive, variants, publishedVariants, clearPreview } = useDisplaySettings();
  if (!previewActive || location.startsWith("/admin")) return null;

  const differences = diffDisplayVariants(publishedVariants, variants).length;

  return (
    <div role="status" className="sticky top-0 z-50 border-b border-amber-900 bg-amber-100 text-stone-900">
      <div className="container flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
        <p className="flex items-center gap-2 font-semibold">
          <Eye className="h-4 w-4 text-amber-900" aria-hidden="true" />
          プレビュー表示中：公開中の見せ方と {differences} 件異なります
        </p>
        <div className="flex items-center gap-2">
          <Link href="/admin/display" className="inline-flex min-h-9 items-center border border-stone-900 px-3 font-semibold hover:bg-stone-900 hover:text-stone-50">
            管理画面へ戻る
          </Link>
          <button type="button" onClick={clearPreview} className="inline-flex min-h-9 items-center bg-stone-900 px-3 font-semibold text-stone-50 hover:bg-amber-900">
            プレビューを終了
          </button>
        </div>
      </div>
    </div>
  );
}
