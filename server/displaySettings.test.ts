import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  DISPLAY_CACHE_MAX_AGE_MS,
  diffDisplayVariants,
  parseDisplayCache,
  parseDisplayPreview,
  resolveDisplayVariants,
  sanitizeDisplaySettings,
  serializeDisplayCache,
} from "@shared/displayVariants";

const mocks = vi.hoisted(() => ({
  getDisplaySettingRows: vi.fn(),
  upsertDisplaySettings: vi.fn(),
  recordLookupAnalyticsEvent: vi.fn(),
}));

vi.mock("./db", () => ({
  getDisplaySettingRows: mocks.getDisplaySettingRows,
  upsertDisplaySettings: mocks.upsertDisplaySettings,
  recordLookupAnalyticsEvent: mocks.recordLookupAnalyticsEvent,
}));

import { invalidateDisplaySettingsCache, readPublicDisplaySettings } from "./displaySettings";
import { appRouter } from "./routers";

const publicContext = { req: {}, res: {}, user: null } as any;
const adminContext = { req: {}, res: {}, user: { id: 1, openId: "owner", role: "admin" } } as any;
const row = (settingKey: string, variant: string) => ({ settingKey, variant, updatedAt: new Date("2026-09-13T08:00:00.000Z") });

describe("T1 表示バリアントの解決規則", () => {
  it("取得成功時は公開スナップショットだけを使い、欠落は legacy（過去キャッシュへ戻らない）", () => {
    const cached = { progressionStepper: "stepper" };
    expect(resolveDisplayVariants({ published: { status: "success", variants: {} }, cached, preview: null, isAdmin: false }))
      .toEqual({ progressionStepper: "legacy" });
    expect(resolveDisplayVariants({ published: { status: "success", variants: { progressionStepper: "stepper" } }, cached: null, preview: null, isAdmin: false }))
      .toEqual({ progressionStepper: "stepper" });
  });

  it("取得中は期限内キャッシュ、取得失敗は全キー legacy", () => {
    const cached = { progressionStepper: "stepper" };
    expect(resolveDisplayVariants({ published: { status: "loading" }, cached, preview: null, isAdmin: false })).toEqual({ progressionStepper: "stepper" });
    expect(resolveDisplayVariants({ published: { status: "loading" }, cached: null, preview: null, isAdmin: false })).toEqual({ progressionStepper: "legacy" });
    expect(resolveDisplayVariants({ published: { status: "error" }, cached, preview: null, isAdmin: false })).toEqual({ progressionStepper: "legacy" });
  });

  it("プレビューは管理者だけに適用し、取得失敗中も維持する", () => {
    const preview = { progressionStepper: "stepper" };
    expect(resolveDisplayVariants({ published: { status: "success", variants: {} }, cached: null, preview, isAdmin: false })).toEqual({ progressionStepper: "legacy" });
    expect(resolveDisplayVariants({ published: { status: "success", variants: {} }, cached: null, preview, isAdmin: true })).toEqual({ progressionStepper: "stepper" });
    expect(resolveDisplayVariants({ published: { status: "error" }, cached: null, preview, isAdmin: true })).toEqual({ progressionStepper: "stepper" });
  });

  it("未知のキー・未知の値・プロトタイプ由来のキーは除外し、全登録キーが値を持つ", () => {
    expect(sanitizeDisplaySettings({ progressionStepper: "hexagon", unknownKey: "stepper" })).toEqual({});
    expect(sanitizeDisplaySettings(Object.create({ progressionStepper: "stepper" }))).toEqual({});
    expect(sanitizeDisplaySettings(["stepper"])).toEqual({});
    expect(resolveDisplayVariants({ published: { status: "success", variants: { progressionStepper: "hexagon" } }, cached: null, preview: { progressionStepper: 1 as any }, isAdmin: true }))
      .toEqual({ progressionStepper: "legacy" });
  });

  it("キャッシュは24時間以内・正しい形だけを使い、プレビューは有効値が無ければ null", () => {
    const now = Date.parse("2026-09-13T08:00:00.000Z");
    expect(parseDisplayCache(serializeDisplayCache({ progressionStepper: "stepper" }, now), now + 1000)).toEqual({ progressionStepper: "stepper" });
    expect(parseDisplayCache(serializeDisplayCache({ progressionStepper: "stepper" }, now), now + DISPLAY_CACHE_MAX_AGE_MS + 1)).toBeNull();
    expect(parseDisplayCache("{broken", now)).toBeNull();
    expect(parseDisplayCache(JSON.stringify({ savedAt: "now", variants: {} }), now)).toBeNull();
    expect(parseDisplayCache(JSON.stringify({ savedAt: now, variants: ["stepper"] }), now)).toBeNull();
    expect(parseDisplayPreview(JSON.stringify({ progressionStepper: "legacy" }))).toEqual({ progressionStepper: "legacy" });
    expect(parseDisplayPreview(JSON.stringify({ progressionStepper: "hexagon" }))).toBeNull();
    expect(parseDisplayPreview("null")).toBeNull();
  });

  it("差分は登録表の順に、未知値を legacy とみなして返す", () => {
    expect(diffDisplayVariants({ progressionStepper: "legacy" }, { progressionStepper: "stepper" })).toEqual([{ key: "progressionStepper", from: "legacy", to: "stepper" }]);
    expect(diffDisplayVariants({ progressionStepper: "hexagon" }, {})).toEqual([]);
  });
});

describe("display API", () => {
  beforeEach(() => {
    invalidateDisplaySettingsCache();
    mocks.getDisplaySettingRows.mockReset();
    mocks.upsertDisplaySettings.mockReset();
    mocks.recordLookupAnalyticsEvent.mockReset();
    vi.spyOn(console, "error").mockImplementation(() => undefined);
  });
  afterEach(() => vi.restoreAllMocks());

  it("T2 DB 未接続・取得失敗では例外を投げず、全キー legacy の既定値を返す", async () => {
    mocks.getDisplaySettingRows.mockRejectedValue(new Error("Display settings storage is unavailable"));
    await expect(appRouter.createCaller(publicContext).display.settings()).resolves.toEqual({ variants: {}, source: "default" });
  });

  it("T3 登録表外の値と legacy 行は公開応答に出さない", async () => {
    mocks.getDisplaySettingRows.mockResolvedValue([row("progressionStepper", "hexagon"), row("removedKey", "stepper")]);
    await expect(appRouter.createCaller(publicContext).display.settings()).resolves.toEqual({ variants: {}, source: "database" });
    invalidateDisplaySettingsCache();
    mocks.getDisplaySettingRows.mockResolvedValue([row("progressionStepper", "legacy")]);
    await expect(appRouter.createCaller(publicContext).display.settings()).resolves.toEqual({ variants: {}, source: "database" });
    invalidateDisplaySettingsCache();
    mocks.getDisplaySettingRows.mockResolvedValue([row("progressionStepper", "stepper")]);
    await expect(appRouter.createCaller(publicContext).display.settings()).resolves.toEqual({ variants: { progressionStepper: "stepper" }, source: "database" });
  });

  it("T4 公開操作は管理者だけが行え、登録表外のキー・値・重複キーを拒否する", async () => {
    const publicCaller = appRouter.createCaller(publicContext);
    await expect(publicCaller.display.publish({ changes: [{ key: "progressionStepper", variant: "stepper" }] })).rejects.toMatchObject({ code: "FORBIDDEN" });
    await expect(publicCaller.display.adminSettings()).rejects.toMatchObject({ code: "FORBIDDEN" });

    const admin = appRouter.createCaller(adminContext);
    await expect(admin.display.publish({ changes: [{ key: "unknownKey", variant: "stepper" }] })).rejects.toMatchObject({ code: "BAD_REQUEST" });
    await expect(admin.display.publish({ changes: [{ key: "progressionStepper", variant: "hexagon" }] })).rejects.toMatchObject({ code: "BAD_REQUEST" });
    await expect(admin.display.publish({ changes: [{ key: "progressionStepper", variant: "stepper" }, { key: "progressionStepper", variant: "legacy" }] })).rejects.toMatchObject({ code: "BAD_REQUEST" });
    await expect(admin.display.publish({ changes: [] })).rejects.toMatchObject({ code: "BAD_REQUEST" });
    expect(mocks.upsertDisplaySettings).not.toHaveBeenCalled();
  });

  it("T4 保存の失敗は INTERNAL_SERVER_ERROR、管理用の取得失敗も既定値にせずエラーにする", async () => {
    const admin = appRouter.createCaller(adminContext);
    mocks.upsertDisplaySettings.mockRejectedValue(new Error("write failed"));
    await expect(admin.display.publish({ changes: [{ key: "progressionStepper", variant: "stepper" }] })).rejects.toMatchObject({ code: "INTERNAL_SERVER_ERROR", message: "Unable to save display settings" });
    mocks.getDisplaySettingRows.mockRejectedValue(new Error("read failed"));
    await expect(admin.display.adminSettings()).rejects.toMatchObject({ code: "INTERNAL_SERVER_ERROR" });
  });

  it("管理用の取得は登録表の全キーを、未保存は legacy・更新日時 null で返す", async () => {
    mocks.getDisplaySettingRows.mockResolvedValue([]);
    await expect(appRouter.createCaller(adminContext).display.adminSettings()).resolves.toEqual({ entries: [{ key: "progressionStepper", variant: "legacy", updatedAt: null }] });
    mocks.getDisplaySettingRows.mockResolvedValue([row("progressionStepper", "stepper")]);
    await expect(appRouter.createCaller(adminContext).display.adminSettings()).resolves.toEqual({ entries: [{ key: "progressionStepper", variant: "stepper", updatedAt: "2026-09-13T08:00:00.000Z" }] });
  });

  it("T5 公開の成功でキャッシュを破棄し、新しい値を返す", async () => {
    const caller = appRouter.createCaller(adminContext);
    mocks.getDisplaySettingRows.mockResolvedValue([]);
    await expect(caller.display.settings()).resolves.toEqual({ variants: {}, source: "database" });
    // キャッシュが効いている間は DB を読まない。
    mocks.getDisplaySettingRows.mockResolvedValue([row("progressionStepper", "stepper")]);
    await expect(caller.display.settings()).resolves.toEqual({ variants: {}, source: "database" });

    mocks.upsertDisplaySettings.mockResolvedValue(undefined);
    await expect(caller.display.publish({ changes: [{ key: "progressionStepper", variant: "stepper" }] })).resolves.toEqual({ variants: { progressionStepper: "stepper" }, source: "database" });
    expect(mocks.upsertDisplaySettings).toHaveBeenCalledWith([{ key: "progressionStepper", variant: "stepper" }]);
    await expect(caller.display.settings()).resolves.toEqual({ variants: { progressionStepper: "stepper" }, source: "database" });
  });

  it("T5 破棄より前に始まった読み取りの結果でキャッシュを埋め直さない", async () => {
    let releaseStaleRead: (rows: unknown[]) => void = () => undefined;
    mocks.getDisplaySettingRows.mockImplementationOnce(() => new Promise((resolve) => { releaseStaleRead = resolve; }));
    const staleRead = readPublicDisplaySettings();

    invalidateDisplaySettingsCache();
    releaseStaleRead([]);
    await expect(staleRead).resolves.toEqual({ variants: {}, source: "database" });

    mocks.getDisplaySettingRows.mockResolvedValue([row("progressionStepper", "stepper")]);
    await expect(readPublicDisplaySettings()).resolves.toEqual({ variants: { progressionStepper: "stepper" }, source: "database" });
  });

  it("保存後の再読み取りに失敗しても保存は成功扱いで、source: default を返す", async () => {
    mocks.upsertDisplaySettings.mockResolvedValue(undefined);
    mocks.getDisplaySettingRows.mockRejectedValue(new Error("read failed"));
    await expect(appRouter.createCaller(adminContext).display.publish({ changes: [{ key: "progressionStepper", variant: "stepper" }] }))
      .resolves.toEqual({ variants: {}, source: "default" });
  });

  it("T15 表示設定の取得は照会分析を記録しない", async () => {
    mocks.getDisplaySettingRows.mockResolvedValue([]);
    await appRouter.createCaller(publicContext).display.settings();
    expect(mocks.recordLookupAnalyticsEvent).not.toHaveBeenCalled();
  });
});
