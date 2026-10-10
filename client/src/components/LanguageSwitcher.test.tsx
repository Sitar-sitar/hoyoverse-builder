// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import React from "react";

function Probe() {
  const { t } = useLanguage();
  return <p>{t("nextUpgrade")}</p>;
}

describe("言語切替", () => {
  afterEach(cleanup);
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "ja";
  });

  it("英語・中国語へ切り替え、選択言語を端末内に保存する", () => {
    render(<LanguageProvider enabledLanguages={["ja", "en", "zh-CN"]}><LanguageSwitcher /><Probe /></LanguageProvider>);

    expect(screen.getByText("優先して強化する項目")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "English" }));
    expect(screen.getByText("Priority Upgrades")).toBeTruthy();
    expect(window.localStorage.getItem("starrail-build-advisor.language")).toBe("en");
    expect(document.documentElement.lang).toBe("en");

    fireEvent.click(screen.getByRole("button", { name: "简体中文" }));
    expect(screen.getByText("优先强化项目")).toBeTruthy();
    expect(window.localStorage.getItem("starrail-build-advisor.language")).toBe("zh-CN");
    expect(document.documentElement.lang).toBe("zh-CN");
  });

  it("初期状態では翻訳を無効にし、保存済みの英語も日本語へ戻す", () => {
    window.localStorage.setItem("starrail-build-advisor.language", "en");
    render(<LanguageProvider><LanguageSwitcher /><Probe /></LanguageProvider>);
    expect(screen.queryByRole("button", { name: "English" })).toBeNull();
    expect(screen.queryByRole("group", { name: "言語" })).toBeNull();
    expect(screen.getByText("優先して強化する項目")).toBeTruthy();
    expect(document.documentElement.lang).toBe("ja");
    expect(window.localStorage.getItem("starrail-build-advisor.language")).toBe("ja");
  });

  it("言語が停止されたら即座に日本語へ戻り、再開後も日本語を維持する", () => {
    const view = render(<LanguageProvider enabledLanguages={["ja", "en"]}><LanguageSwitcher /><Probe /></LanguageProvider>);
    fireEvent.click(screen.getByRole("button", { name: "English" }));
    view.rerender(<LanguageProvider><LanguageSwitcher /><Probe /></LanguageProvider>);
    expect(screen.getByText("優先して強化する項目")).toBeTruthy();
    view.rerender(<LanguageProvider enabledLanguages={["ja", "en"]}><LanguageSwitcher /><Probe /></LanguageProvider>);
    expect(screen.getByText("優先して強化する項目")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "简体中文" })).toBeNull();
  });

  it("初回取得中は日本語、取得後は有効な保存済み言語を復元する", () => {
    window.localStorage.setItem("starrail-build-advisor.language", "en");
    const view = render(<LanguageProvider settingsPending><LanguageSwitcher /><Probe /></LanguageProvider>);
    expect(screen.getByText("優先して強化する項目")).toBeTruthy();
    expect(window.localStorage.getItem("starrail-build-advisor.language")).toBe("en");
    view.rerender(<LanguageProvider enabledLanguages={["ja", "en"]}><LanguageSwitcher /><Probe /></LanguageProvider>);
    expect(screen.getByText("Priority Upgrades")).toBeTruthy();
    expect(document.documentElement.lang).toBe("en");
  });
});
