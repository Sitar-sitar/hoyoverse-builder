/**
 * 用語集のカテゴリ（全ゲーム共通）。配列の順が画面の並び順になる。
 * 追加するときは 1 行足して `pnpm glossary:sync` を実行する（手順は content/glossary/README.md）。
 */
export const GLOSSARY_CATEGORIES = [
  { id: "battle", label: "戦闘" },
  { id: "growth", label: "育成" },
  { id: "content", label: "コンテンツ" },
  { id: "world", label: "世界観" },
  { id: "faction", label: "組織・勢力" },
  { id: "place", label: "地名" },
  { id: "being", label: "人物・存在" },
] as const;

export type GlossaryCategoryId = typeof GLOSSARY_CATEGORIES[number]["id"];
