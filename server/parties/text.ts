import type { LocalizedText, PartyMember } from "./types";

export const t = (ja: string, en: string, zh: string): LocalizedText => ({ ja, en, "zh-CN": zh });
export const member = (ja: string, en: string, zh: string, roleJa: string, roleEn: string, roleZh: string): PartyMember => ({ name: t(ja, en, zh), role: t(roleJa, roleEn, roleZh) });
