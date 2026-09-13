import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import {
  LEGACY_VARIANT,
  parseDisplayCache,
  parseDisplayPreview,
  resolveDisplayVariants,
  sanitizeDisplaySettings,
  serializeDisplayCache,
  type DisplayVariants,
  type PublishedDisplayState,
} from "@shared/displayVariants";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/**
 * 表示バリアントの解決（設計: docs/実装設計書_表示デザインの管理画面切替_2026-09-13.md §4.2.3・§4.2.4）。
 */

export const DISPLAY_CACHE_STORAGE_KEY = "hb.displaySettings.v1";
export const DISPLAY_PREVIEW_STORAGE_KEY = "hb.displayPreview.v1";
/** 前回値が無い初回訪問だけ、公開値の取得をこの時間まで待つ（§10 Q2）。 */
export const DISPLAY_INITIAL_WAIT_MS = 600;
export const DISPLAY_REFETCH_INTERVAL_MS = 60_000;

type DisplaySettingsContextValue = {
  /** プレビューを含めた、画面に使う値 */
  variants: DisplayVariants;
  /** プレビューを除いた、公開中の値（プレビュー帯の差分に使う） */
  publishedVariants: DisplayVariants;
  /** false の間はルートを描かずに待つ */
  ready: boolean;
  isAdmin: boolean;
  preview: DisplayVariants | null;
  previewActive: boolean;
  setPreview: (variants: DisplayVariants) => void;
  clearPreview: () => void;
};

const DEFAULT_VALUE: DisplaySettingsContextValue = {
  variants: {},
  publishedVariants: {},
  ready: true,
  isAdmin: false,
  preview: null,
  previewActive: false,
  setPreview: () => undefined,
  clearPreview: () => undefined,
};

// Provider の外（ページ単体のテストなど）では全キー legacy として振る舞う。
const DisplaySettingsContext = createContext<DisplaySettingsContextValue>(DEFAULT_VALUE);

function readStorage(storage: () => Storage, key: string) {
  try {
    return storage().getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(storage: () => Storage, key: string, value: string | null) {
  try {
    if (value === null) storage().removeItem(key);
    else storage().setItem(key, value);
  } catch {
    // 保存できなくても表示は続ける。
  }
}

const local = () => window.localStorage;
const session = () => window.sessionStorage;

export function DisplaySettingsProvider({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading, error: authError } = useAuth();
  const query = trpc.display.settings.useQuery(undefined, {
    staleTime: DISPLAY_REFETCH_INTERVAL_MS,
    refetchInterval: DISPLAY_REFETCH_INTERVAL_MS,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: true,
    retry: 1,
  });

  // キャッシュは初回取得中の表示にだけ使うため、マウント時に一度だけ読む。
  const [cached] = useState(() => parseDisplayCache(readStorage(local, DISPLAY_CACHE_STORAGE_KEY), Date.now()));
  const [preview, setPreviewState] = useState(() => parseDisplayPreview(readStorage(session, DISPLAY_PREVIEW_STORAGE_KEY)));
  const [waitExpired, setWaitExpired] = useState(false);

  const isAdmin = !authLoading && user?.role === "admin";

  const published: PublishedDisplayState = query.status === "success"
    ? { status: "success", variants: sanitizeDisplaySettings(query.data?.variants) }
    : query.status === "error"
      ? { status: "error" }
      : { status: "loading" };

  useEffect(() => {
    if (cached || waitExpired) return;
    const timer = window.setTimeout(() => setWaitExpired(true), DISPLAY_INITIAL_WAIT_MS);
    return () => window.clearTimeout(timer);
  }, [cached, waitExpired]);

  // 次回の初回表示用に、DB から読めた公開値だけを保存する。
  useEffect(() => {
    if (query.status !== "success" || query.data?.source !== "database") return;
    writeStorage(local, DISPLAY_CACHE_STORAGE_KEY, serializeDisplayCache(query.data.variants, Date.now()));
  }, [query.status, query.data]);

  const clearPreview = useCallback(() => {
    setPreviewState(null);
    writeStorage(session, DISPLAY_PREVIEW_STORAGE_KEY, null);
  }, []);

  const setPreview = useCallback((variants: DisplayVariants) => {
    const sanitized = sanitizeDisplaySettings(variants);
    if (!Object.keys(sanitized).length) {
      clearPreview();
      return;
    }
    setPreviewState(sanitized);
    writeStorage(session, DISPLAY_PREVIEW_STORAGE_KEY, JSON.stringify(sanitized));
  }, [clearPreview]);

  // 認証の取得が成功し、管理者でないと確定したときだけプレビューを破棄する（取得中・通信失敗では消さない）。
  useEffect(() => {
    if (authLoading || authError || !preview) return;
    if (user?.role !== "admin") clearPreview();
  }, [authLoading, authError, user?.role, preview, clearPreview]);

  const publishedKey = published.status === "success" ? JSON.stringify(published.variants) : published.status;
  const value = useMemo<DisplaySettingsContextValue>(() => {
    const variants = resolveDisplayVariants({ published, cached, preview, isAdmin });
    const publishedVariants = resolveDisplayVariants({ published, cached, preview: null, isAdmin: false });
    return {
      variants,
      publishedVariants,
      ready: Boolean(cached) || published.status !== "loading" || waitExpired,
      isAdmin,
      preview,
      previewActive: isAdmin && preview !== null,
      setPreview,
      clearPreview,
    };
    // published はレンダーごとに作り直すため、内容を表す publishedKey で依存を取る。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publishedKey, cached, preview, isAdmin, waitExpired, setPreview, clearPreview]);

  return <DisplaySettingsContext.Provider value={value}>{children}</DisplaySettingsContext.Provider>;
}

export function useDisplaySettings() {
  return useContext(DisplaySettingsContext);
}

export function useDisplayVariant(key: string) {
  return useContext(DisplaySettingsContext).variants[key] ?? LEGACY_VARIANT;
}
