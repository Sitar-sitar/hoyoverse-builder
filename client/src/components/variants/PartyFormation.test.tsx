// @vitest-environment jsdom
import { LanguageProvider } from "@/contexts/LanguageContext";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import React, { useState } from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import PartyFormation, { baseGoalFor, roleGroupFor, type FormationLabels, type FormationOption } from "./PartyFormation";

const text = (value: string) => ({ ja: value, en: `${value} (EN)`, "zh-CN": `${value}（中）` });
const labels: FormationLabels = {
  select: "編成を選択", members: "編成メンバー", synergy: "シナジー", targets: "この編成での目標変更",
  version: "対応バージョン", dataAsOf: "編成基準日", updated: "最終更新日", source: "編成の参照",
  community: "SNS・コミュニティ照合", checked: "確認日", noData: "推奨PTは準備中です。", battleNote: "戦闘中のバフは加算しません。",
};

const options: FormationOption[] = [
  {
    id: "plan-1", rank: 1, title: text("超撃破"),
    members: [
      { name: text("ホタル"), role: text("主力") },
      { name: text("ルアン・メェイ"), role: text("撃破支援") },
      { name: text("霊砂"), role: text("耐久・シールド") },
      { name: text("ギャラガー"), role: text("回復・支援") },
    ],
    synergy: [text("撃破で回す。"), text("速度を合わせる。")],
    targetChanges: [
      { key: "speed", label: text("速度"), unit: "", targets: { "厳選": 154, "目標": 150, "妥協": 145 }, reason: text("戦闘中の速度補正を加味する。") },
      { key: "impact", label: text("衝撃力"), unit: "", targets: { "厳選": 150, "目標": 130, "妥協": 100 }, reason: text("追加の目標。") },
    ],
    targetSummary: text("速度は戦闘外の公開値で比較する。"),
    gameVersion: "3.6", dataAsOf: "2026-09-01", updatedAt: "2026-09-02",
    sourceLabel: text("公開ガイド"), sourceUrl: "https://example.com/plan-1",
    communitySources: [{ label: text("コミュニティ"), url: "https://example.com/community", checkedAt: "2026-09-03", note: text("照合済み。") }],
  },
  {
    id: "plan-2", rank: 2, title: text("代替"),
    members: [
      { name: text("ホタル（別実装）"), role: text("副火力") },
      { name: text("アスター"), role: text("サポート") },
      { name: text("ナターシャ"), role: text("デバッファー") },
    ],
    synergy: [text("入手しやすい。")],
    targetChanges: [],
    targetSummary: text("基本目標を維持する。"),
    gameVersion: "3.6", dataAsOf: "2026-09-01", updatedAt: "2026-09-02",
    sourceLabel: text("公開ガイド"), sourceUrl: "https://example.com/plan-2", communitySources: [],
  },
];

function Controlled({ initial = "plan-1", items = options, withBattleNote = true }: { initial?: string; items?: FormationOption[]; withBattleNote?: boolean }) {
  const [selectedId, setSelectedId] = useState(initial);
  return (
    <LanguageProvider>
      <PartyFormation
        options={items}
        selectedId={selectedId}
        onSelect={setSelectedId}
        selectedName="ホタル"
        baseTargets={[{ key: "speed", targets: { "厳選": 143, "目標": 134, "妥協": 120 } }]}
        language="ja"
        tone="dark"
        labels={withBattleNote ? labels : { ...labels, battleNote: undefined }}
      />
    </LanguageProvider>
  );
}

const selectedTab = () => screen.getAllByRole("tab").find((tab) => tab.getAttribute("aria-selected") === "true")!;
const memberItems = () => within(screen.getByTestId("party-formation-members")).getAllByRole("listitem");

describe("PartyFormation", () => {
  beforeEach(() => window.localStorage.setItem("starrail-build-advisor.language", "ja"));
  afterEach(() => cleanup());

  it("役割の語は回復→耐久→弱体→支援→主力の順で最初に一致したものを使い、未知語は unknown", () => {
    expect(roleGroupFor("回復・支援")).toBe("healer");
    expect(roleGroupFor("耐久・支援")).toBe("sustain");
    expect(roleGroupFor("デバッファー")).toBe("debuffer");
    expect(roleGroupFor("サポート")).toBe("support");
    expect(roleGroupFor("主力・副火力")).toBe("attacker");
    expect(roleGroupFor("副火力")).toBe("unknown");
    // 隣り合う優先順位の語を両方含む役割で、順位そのものを確かめる。
    expect(roleGroupFor("回復・耐久")).toBe("healer");
    expect(roleGroupFor("シールド・弱体")).toBe("sustain");
    expect(roleGroupFor("デバッファー・支援")).toBe("debuffer");
    expect(roleGroupFor("バッファー・主力")).toBe("support");
    expect(baseGoalFor("speed", [{ key: "speed", targets: { "目標": 134 } }])).toBe(134);
    expect(baseGoalFor("speed", [{ key: "speed", targets: { "厳選": 143 } }])).toBeNull();
    expect(baseGoalFor("impact", [])).toBeNull();
  });

  it("C1 4人の案: 役割の色帯と原文の役割、完全一致したキャラだけの強調を出す", () => {
    render(<Controlled />);
    expect(screen.getAllByRole("tab")).toHaveLength(2);
    expect(selectedTab().textContent).toContain("PLAN 01");
    expect(screen.getByRole("tabpanel").getAttribute("aria-labelledby")).toBe(selectedTab().id);

    const items = memberItems();
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.dataset.roleGroup)).toEqual(["attacker", "support", "sustain", "healer"]);
    expect(within(items[3]).getByText("回復・支援")).toBeTruthy();
    expect(items.filter((item) => item.dataset.current === "true")).toHaveLength(1);
    expect(within(items[0]).getByText("表示中のキャラクター")).toBeTruthy();
  });

  it("C1 目標変更は「基礎目標 → 編成目標」で出し、基礎目標が無いキーは矢印以降だけ、理由は初期閉", () => {
    render(<Controlled />);
    const targets = within(screen.getByTestId("party-formation-targets")).getAllByRole("listitem");
    expect(targets[0].querySelector("summary")?.textContent).toBe("速度 基礎目標 134 → 編成目標 150");
    expect(targets[1].querySelector("summary")?.textContent).toBe("衝撃力 → 編成目標 130");
    expect(targets.every((item) => item.querySelector("details")?.open === false)).toBe(true);
    expect(within(targets[0]).getByText("戦闘中の速度補正を加味する。")).toBeTruthy();
  });

  it("C1 シナジー全件・目標の要約・版・日付・出典・コミュニティ照合を省略しない", () => {
    render(<Controlled />);
    expect(screen.getByText("撃破で回す。")).toBeTruthy();
    expect(screen.getByText("速度を合わせる。")).toBeTruthy();
    expect(screen.getByText("速度は戦闘外の公開値で比較する。")).toBeTruthy();
    const sources = screen.getByTestId("party-formation-sources");
    expect(sources.textContent).toContain("3.6");
    expect(sources.textContent).toContain("2026-09-01 JST");
    expect(sources.textContent).toContain("2026-09-02 JST");
    expect(within(sources).getByRole("link", { name: "公開ガイド" }).getAttribute("href")).toBe("https://example.com/plan-1");
    expect(sources.textContent).toContain("確認日 2026-09-03 JST");
    expect(within(sources).getByText("照合済み。")).toBeTruthy();
  });

  it("C1 3人の案: 名前が完全一致しなければ強調せず、未知の役割は無彩色、目標変更が無ければ注記を出す", () => {
    render(<Controlled initial="plan-2" />);
    const items = memberItems();
    expect(items).toHaveLength(3);
    expect(items.map((item) => item.dataset.roleGroup)).toEqual(["unknown", "support", "debuffer"]);
    expect(items.some((item) => item.dataset.current === "true")).toBe(false);
    expect(screen.queryByTestId("party-formation-targets")).toBeNull();
    expect(screen.getByText("戦闘中のバフは加算しません。")).toBeTruthy();
    cleanup();

    render(<Controlled initial="plan-2" withBattleNote={false} />);
    expect(screen.queryByText("戦闘中のバフは加算しません。")).toBeNull();
  });

  it("C3 左右キー・Home・End で選択とフォーカスが一致し、存在しない id は先頭を選ぶ", () => {
    render(<Controlled initial="missing" />);
    const list = screen.getByRole("tablist");
    expect(selectedTab().textContent).toContain("PLAN 01");
    expect(screen.getAllByRole("tab").filter((tab) => tab.tabIndex === 0)).toHaveLength(1);

    fireEvent.keyDown(list, { key: "ArrowRight" });
    expect(selectedTab().textContent).toContain("PLAN 02");
    expect(document.activeElement).toBe(selectedTab());
    expect(memberItems()).toHaveLength(3);
    fireEvent.keyDown(list, { key: "ArrowRight" });
    expect(selectedTab().textContent).toContain("PLAN 01");
    fireEvent.keyDown(list, { key: "End" });
    expect(selectedTab().textContent).toContain("PLAN 02");
    fireEvent.keyDown(list, { key: "Home" });
    expect(selectedTab().textContent).toContain("PLAN 01");
    expect(document.activeElement).toBe(selectedTab());
    fireEvent.keyDown(list, { key: "ArrowLeft" });
    expect(selectedTab().textContent).toContain("PLAN 02");
  });

  it("C1 推奨PTが0件ならタブも隊列も出さず、準備中の文言を出す", () => {
    render(<Controlled items={[]} />);
    expect(screen.queryByRole("tablist")).toBeNull();
    expect(screen.queryByTestId("party-formation")).toBeNull();
    expect(screen.getByText("推奨PTは準備中です。")).toBeTruthy();
  });
});
