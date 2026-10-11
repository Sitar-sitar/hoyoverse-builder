import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ getDisplaySettingRows: vi.fn(), upsertDisplaySettings: vi.fn() }));
vi.mock("./db", () => mocks);
import { languageSettingsRouter } from "./languageSettings";
const caller = (role?: string) => languageSettingsRouter.createCaller({ req: {}, res: {}, user: role ? { id: 1, openId: "owner", role } : null } as any);

describe("公開言語設定", () => {
  beforeEach(() => {
    mocks.getDisplaySettingRows.mockReset().mockResolvedValue([]);
    mocks.upsertDisplaySettings.mockReset().mockResolvedValue(undefined);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
  });
  afterEach(() => vi.restoreAllMocks());
  it("未設定・破損・DB障害では日本語のみ、管理取得失敗はエラー", async () => {
    expect(await caller().settings()).toEqual({ enabledLanguages: ["ja"] });
    for (const variant of ["broken", '["en"]', '["ja","fr"]']) {
      mocks.getDisplaySettingRows.mockResolvedValue([{ settingKey: "enabledLanguages", variant }]);
      expect(await caller().settings()).toEqual({ enabledLanguages: ["ja"] });
    }
    mocks.getDisplaySettingRows.mockRejectedValue(new Error("offline"));
    expect(await caller().settings()).toEqual({ enabledLanguages: ["ja"] });
    await expect(caller("admin").adminSettings()).rejects.toMatchObject({ code: "INTERNAL_SERVER_ERROR" });
  });
  it("匿名・非管理者の取得と保存を拒否", async () => {
    for (const role of [undefined, "user"]) {
      await expect(caller(role).adminSettings()).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(caller(role).publish({ enabledLanguages: ["ja", "en"] })).rejects.toMatchObject({ code: "FORBIDDEN" });
    }
    expect(mocks.upsertDisplaySettings).not.toHaveBeenCalled();
  });
  it("不明言語・全無効・日本語欠落・重複を拒否", async () => {
    for (const enabledLanguages of [[], ["en"], ["ja", "fr"], ["ja", "ja"]]) {
      await expect(caller("admin").publish({ enabledLanguages } as any)).rejects.toMatchObject({ code: "BAD_REQUEST" });
    }
    expect(mocks.upsertDisplaySettings).not.toHaveBeenCalled();
  });
  it("準備段階では保存済み言語を日本語へ絞り、英中の公開をDB更新前に拒否", async () => {
    mocks.getDisplaySettingRows.mockResolvedValue([{ settingKey: "enabledLanguages", variant: '["ja","en","zh-CN"]' }]);
    expect(await caller().settings()).toEqual({ enabledLanguages: ["ja"] });
    for (const language of ["en", "zh-CN"] as const) await expect(caller("admin").publish({ enabledLanguages: ["ja", language] })).rejects.toMatchObject({ code: "PRECONDITION_FAILED" });
    expect(mocks.upsertDisplaySettings).not.toHaveBeenCalled();
    expect(await caller("admin").adminSettings()).toMatchObject({ preparation: { mode: "preparation" } });
    mocks.upsertDisplaySettings.mockImplementation(async changes => {
      mocks.getDisplaySettingRows.mockResolvedValue(changes.map((change: any) => ({ settingKey: change.key, variant: change.variant })));
    });
    await caller("admin").publish({ enabledLanguages: ["ja"] });
    expect(await caller().settings()).toEqual({ enabledLanguages: ["ja"] });
  });
  it("保存失敗を成功として返さない", async () => {
    mocks.upsertDisplaySettings.mockRejectedValue(new Error("offline"));
    await expect(caller("admin").publish({ enabledLanguages: ["ja"] })).rejects.toMatchObject({ code: "INTERNAL_SERVER_ERROR" });
  });
});
