import { CHARACTER_GUIDE_CATALOG, HSR_RUNTIME_PATHS, ZZZ_RUNTIME_PROFESSIONS, type CatalogGameId } from "./characterGuideCatalog";
import { partyRecommendationsFor } from "./partyRecommendations";
import { resolvePartyMember, type PartyMemberKind, type PartyMemberResolution } from "./partyMemberAliases";

export type PartyImpactMention = {
  owner: string;
  optionId: string;
  rank: number;
  sourceUrl: string;
  dataAsOf: string;
  matchedAs: PartyMemberKind;
};

export type PartyImpactReport = {
  target: { game: CatalogGameId; name: string; role: string | null; element: string | null };
  /** 対象を既に言及している既存キャラクターの案。実装後の再検証が必須。 */
  mentioned: PartyImpactMention[];
  /** 対象と同じ役割を持つ既存キャラクターの rank 1 の案と、同役割の置換候補枠。 */
  sameRoleOwners: Array<{ owner: string; role: string; optionId: string; replaceable: string[] }>;
  /** 推奨PTが自動生成のままの既存キャラクター（個別化の候補）。 */
  genericOwners: string[];
  /** 同ゲームの案に登場する回数が多いメンバー上位10名。 */
  frequentSupports: Array<{ name: string; count: number }>;
  selfStatus: "curated" | "generated" | "absent";
};

/** 解決表を差し替え可能にするための注入点（テストのフィクスチャ用）。既定は本番の解決表。 */
export type PartyMemberResolver = (game: CatalogGameId, name: string) => PartyMemberResolution;

/**
 * 役割の判定元。
 * 原神は公開メタデータに役割区分が無く、element / weaponType では役割の代替にならないため
 * 同役割候補を出さない（設計書 §10-2 の決定。§7 の割り切りを最初から採用する）。
 */
function roleOf(game: CatalogGameId, name: string): string | null {
  if (game === "hsr") return HSR_RUNTIME_PATHS[name] ?? null;
  if (game === "zzz") return ZZZ_RUNTIME_PROFESSIONS[name] ?? null;
  return null;
}

const isGenerated = (optionId: string) => optionId.startsWith("generated-");

export function partyImpactFor(
  game: CatalogGameId,
  name: string,
  resolve: PartyMemberResolver = resolvePartyMember,
): PartyImpactReport {
  const owners = CHARACTER_GUIDE_CATALOG[game] as readonly string[];
  const targetRole = roleOf(game, name);

  const mentioned: PartyImpactMention[] = [];
  const sameRoleOwners: PartyImpactReport["sameRoleOwners"] = [];
  const genericOwners: string[] = [];
  const supportCounts = new Map<string, number>();

  for (const owner of owners) {
    const set = partyRecommendationsFor(game, owner);
    if (set.options.length > 0 && isGenerated(set.options[0]!.id)) genericOwners.push(owner);
    const ownerRole = roleOf(game, owner);

    for (const option of set.options) {
      const resolved = option.members.map((member) => ({ raw: member.name.ja, ...resolve(game, member.name.ja) }));

      // 対象自身の案は影響レビューの対象にしない（本人の登録はモード C の別ステップ）。
      if (owner !== name) {
        for (const member of resolved) {
          if (member.canonical !== name) continue;
          mentioned.push({
            owner,
            optionId: option.id,
            rank: option.rank,
            sourceUrl: option.sourceUrl,
            dataAsOf: option.dataAsOf,
            matchedAs: member.kind,
          });
        }
        for (const member of resolved) {
          if (member.canonical === owner) continue;
          supportCounts.set(member.canonical, (supportCounts.get(member.canonical) ?? 0) + 1);
        }
      }

      // 同役割候補は rank 1 の案だけを見る。原神は targetRole が null になるため常に空。
      if (targetRole !== null && option.rank === 1 && owner !== name && ownerRole !== null) {
        const replaceable = resolved
          .filter((member) => member.canonical !== owner && member.canonical !== name && roleOf(game, member.canonical) === targetRole)
          .map((member) => member.canonical);
        if (replaceable.length > 0) sameRoleOwners.push({ owner, role: ownerRole, optionId: option.id, replaceable });
      }
    }
  }

  const selfSet = owners.includes(name) ? partyRecommendationsFor(game, name) : null;
  const selfStatus: PartyImpactReport["selfStatus"] = selfSet === null
    ? "absent"
    : selfSet.options.length > 0 && isGenerated(selfSet.options[0]!.id) ? "generated" : "curated";

  const frequentSupports = [...supportCounts.entries()]
    .map(([supportName, count]) => ({ name: supportName, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, 10);

  return {
    target: { game, name, role: targetRole, element: null },
    mentioned,
    sameRoleOwners,
    genericOwners,
    frequentSupports,
    selfStatus,
  };
}

/** 根拠メモの「推奨PT影響レビュー」節へそのまま貼れるチェックリスト。 */
export function formatPartyImpactMarkdown(report: PartyImpactReport): string {
  const { target } = report;
  const lines: string[] = [];
  lines.push(`### ${target.game}:${target.name} の推奨PT影響レビュー`);
  lines.push("");
  lines.push(`- 対象の役割: ${target.role ?? "（判定対象外）"} / 本人の推奨PT: ${report.selfStatus}`);
  lines.push("");
  lines.push(`#### 言及済みPT（${report.mentioned.length}件・全行を「更新した」または「据え置き（根拠URL・確認日）」で埋める）`);
  lines.push("");
  if (report.mentioned.length === 0) lines.push("- なし");
  for (const entry of report.mentioned) {
    lines.push(`- [ ] ${entry.optionId}（${entry.owner} / rank ${entry.rank} / ${entry.matchedAs}） ${entry.sourceUrl} ${entry.dataAsOf}`);
  }
  lines.push("");
  lines.push(`#### 同役割・置換候補（${report.sameRoleOwners.length}件・機械提示。採否は出典で判断し、根拠が無ければ据え置く）`);
  lines.push("");
  if (report.sameRoleOwners.length === 0) lines.push("- なし");
  for (const entry of report.sameRoleOwners) {
    lines.push(`- [ ] ${entry.optionId}（${entry.owner} / ${entry.role}） 置換候補: ${entry.replaceable.join(" , ")}`);
  }
  lines.push("");
  lines.push(`#### 参考`);
  lines.push("");
  lines.push(`- 自動生成PTのままのキャラクター: ${report.genericOwners.length}名`);
  lines.push(`- 同ゲームで登場回数が多いメンバー: ${report.frequentSupports.map((entry) => `${entry.name}(${entry.count})`).join(" , ") || "なし"}`);
  lines.push("");
  return lines.join("\n");
}
