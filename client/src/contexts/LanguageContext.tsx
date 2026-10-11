import { uiDictionary } from "@/content/ui";
import React, { createContext, useContext, useEffect, useState } from "react";

import { DEFAULT_ENABLED_LANGUAGES, normalizeEnabledLanguages, type AppLanguage } from "@shared/languages";
export type { AppLanguage } from "@shared/languages";

const STORAGE_KEY = "starrail-build-advisor.language";

export const LANGUAGE_LABELS: Record<AppLanguage, string> = {
  ja: "日本語",
  en: "English",
  "zh-CN": "简体中文",
};

const copy = uiDictionary({
  "acceptable": "ui.contexts_LanguageContext.dictionary1.acceptable",
  "adminAccess": "ui.contexts_LanguageContext.dictionary1.adminAccess",
  "adminOnly": "ui.contexts_LanguageContext.dictionary1.adminOnly",
  "adminPortal": "ui.contexts_LanguageContext.dictionary1.adminPortal",
  "adminSignIn": "ui.contexts_LanguageContext.dictionary1.adminSignIn",
  "adminSignInDescription": "ui.contexts_LanguageContext.dictionary1.adminSignInDescription",
  "adminSignInTitle": "ui.contexts_LanguageContext.dictionary1.adminSignInTitle",
  "all": "ui.contexts_LanguageContext.dictionary1.all",
  "allGames": "ui.contexts_LanguageContext.dictionary1.allGames",
  "allTargetsMet": "ui.contexts_LanguageContext.dictionary1.allTargetsMet",
  "anySlot": "ui.contexts_LanguageContext.dictionary1.anySlot",
  "anySlotSubstatReason": "ui.contexts_LanguageContext.dictionary1.anySlotSubstatReason",
  "applyFilters": "ui.contexts_LanguageContext.dictionary1.applyFilters",
  "archive": "ui.contexts_LanguageContext.dictionary1.archive",
  "archiveAccess": "ui.contexts_LanguageContext.dictionary1.archiveAccess",
  "artifacts": "ui.contexts_LanguageContext.dictionary1.artifacts",
  "backToLookup": "ui.contexts_LanguageContext.dictionary1.backToLookup",
  "baseline": "ui.contexts_LanguageContext.dictionary1.baseline",
  "cacheHitRate": "ui.contexts_LanguageContext.dictionary1.cacheHitRate",
  "cacheHits": "ui.contexts_LanguageContext.dictionary1.cacheHits",
  "cacheMisses": "ui.contexts_LanguageContext.dictionary1.cacheMisses",
  "cached": "ui.contexts_LanguageContext.dictionary1.cached",
  "changeMainStat": "ui.contexts_LanguageContext.dictionary1.changeMainStat",
  "character": "ui.contexts_LanguageContext.dictionary1.character",
  "characterRecords": "ui.contexts_LanguageContext.dictionary1.characterRecords",
  "characterSelector": "ui.contexts_LanguageContext.dictionary1.characterSelector",
  "comparisonPending": "ui.contexts_LanguageContext.dictionary1.comparisonPending",
  "curatedRecommendation": "ui.contexts_LanguageContext.dictionary1.curatedRecommendation",
  "curationLog": "ui.contexts_LanguageContext.dictionary1.curationLog",
  "current": "ui.contexts_LanguageContext.dictionary1.current",
  "currentBuild": "ui.contexts_LanguageContext.dictionary1.currentBuild",
  "currentEquipment": "ui.contexts_LanguageContext.dictionary1.currentEquipment",
  "currentProfile": "ui.contexts_LanguageContext.dictionary1.currentProfile",
  "currentStats": "ui.contexts_LanguageContext.dictionary1.currentStats",
  "dailyBreakdown": "ui.contexts_LanguageContext.dictionary1.dailyBreakdown",
  "dailyBreakdownIntro": "ui.contexts_LanguageContext.dictionary1.dailyBreakdownIntro",
  "dashboardFilters": "ui.contexts_LanguageContext.dictionary1.dashboardFilters",
  "dataAsOf": "ui.contexts_LanguageContext.dictionary1.dataAsOf",
  "date": "ui.contexts_LanguageContext.dictionary1.date",
  "displayDesign": "ui.contexts_LanguageContext.dictionary1.displayDesign",
  "displayLanguage": "ui.contexts_LanguageContext.dictionary1.displayLanguage",
  "driveDiscs": "ui.contexts_LanguageContext.dictionary1.driveDiscs",
  "endDate": "ui.contexts_LanguageContext.dictionary1.endDate",
  "enkaFinalStatsNote": "ui.contexts_LanguageContext.dictionary1.enkaFinalStatsNote",
  "enkaStatsUnavailable": "ui.contexts_LanguageContext.dictionary1.enkaStatsUnavailable",
  "equipmentAction": "ui.contexts_LanguageContext.dictionary1.equipmentAction",
  "equippedSets": "ui.contexts_LanguageContext.dictionary1.equippedSets",
  "estimatedFinalStats": "ui.contexts_LanguageContext.dictionary1.estimatedFinalStats",
  "feedbackCount": "ui.contexts_LanguageContext.dictionary1.feedbackCount",
  "feedbackFailed": "ui.contexts_LanguageContext.dictionary1.feedbackFailed",
  "feedbackIntro": "ui.contexts_LanguageContext.dictionary1.feedbackIntro",
  "feedbackManagement": "ui.contexts_LanguageContext.dictionary1.feedbackManagement",
  "feedbackManagementIntro": "ui.contexts_LanguageContext.dictionary1.feedbackManagementIntro",
  "feedbackNotes": "ui.contexts_LanguageContext.dictionary1.feedbackNotes",
  "feedbackPage": "ui.contexts_LanguageContext.dictionary1.feedbackPage",
  "feedbackPrivacy": "ui.contexts_LanguageContext.dictionary1.feedbackPrivacy",
  "feedbackRequired": "ui.contexts_LanguageContext.dictionary1.feedbackRequired",
  "feedbackSent": "ui.contexts_LanguageContext.dictionary1.feedbackSent",
  "feedbackSuggestion": "ui.contexts_LanguageContext.dictionary1.feedbackSuggestion",
  "feedbackTitle": "ui.contexts_LanguageContext.dictionary1.feedbackTitle",
  "feedbackType": "ui.contexts_LanguageContext.dictionary1.feedbackType",
  "formationBaseTarget": "ui.contexts_LanguageContext.dictionary1.formationBaseTarget",
  "formationCurrentCharacter": "ui.contexts_LanguageContext.dictionary1.formationCurrentCharacter",
  "formationTeamTarget": "ui.contexts_LanguageContext.dictionary1.formationTeamTarget",
  "gameBreakdown": "ui.contexts_LanguageContext.dictionary1.gameBreakdown",
  "gameFilter": "ui.contexts_LanguageContext.dictionary1.gameFilter",
  "gaugeAchieved": "ui.contexts_LanguageContext.dictionary1.gaugeAchieved",
  "gaugeBaseTarget": "ui.contexts_LanguageContext.dictionary1.gaugeBaseTarget",
  "gaugeBelowBaseline": "ui.contexts_LanguageContext.dictionary1.gaugeBelowBaseline",
  "gaugeListLabel": "ui.contexts_LanguageContext.dictionary1.gaugeListLabel",
  "gaugeMissing": "ui.contexts_LanguageContext.dictionary1.gaugeMissing",
  "gaugeNotAchieved": "ui.contexts_LanguageContext.dictionary1.gaugeNotAchieved",
  "gaugeOverallTier": "ui.contexts_LanguageContext.dictionary1.gaugeOverallTier",
  "gaugePending": "ui.contexts_LanguageContext.dictionary1.gaugePending",
  "gaugeTargetsMet": "ui.contexts_LanguageContext.dictionary1.gaugeTargetsMet",
  "gaugeUnknown": "ui.contexts_LanguageContext.dictionary1.gaugeUnknown",
  "genshinDescription": "ui.contexts_LanguageContext.dictionary1.genshinDescription",
  "guideDataAsOf": "ui.contexts_LanguageContext.dictionary1.guideDataAsOf",
  "guideHistory": "ui.contexts_LanguageContext.dictionary1.guideHistory",
  "highest": "ui.contexts_LanguageContext.dictionary1.highest",
  "history": "ui.contexts_LanguageContext.dictionary1.history",
  "historyIntro": "ui.contexts_LanguageContext.dictionary1.historyIntro",
  "howItWorks": "ui.contexts_LanguageContext.dictionary1.howItWorks",
  "hsrDescription": "ui.contexts_LanguageContext.dictionary1.hsrDescription",
  "individualPriority": "ui.contexts_LanguageContext.dictionary1.individualPriority",
  "inputUid": "ui.contexts_LanguageContext.dictionary1.inputUid",
  "inputUidBody": "ui.contexts_LanguageContext.dictionary1.inputUidBody",
  "invalidDateRange": "ui.contexts_LanguageContext.dictionary1.invalidDateRange",
  "language": "ui.contexts_LanguageContext.dictionary1.language",
  "lastCurated": "ui.contexts_LanguageContext.dictionary1.lastCurated",
  "lightCone": "ui.contexts_LanguageContext.dictionary1.lightCone",
  "loading": "ui.contexts_LanguageContext.dictionary1.loading",
  "loadingHistory": "ui.contexts_LanguageContext.dictionary1.loadingHistory",
  "lookup": "ui.contexts_LanguageContext.dictionary1.lookup",
  "lookupDashboard": "ui.contexts_LanguageContext.dictionary1.lookupDashboard",
  "lookupDashboardIntro": "ui.contexts_LanguageContext.dictionary1.lookupDashboardIntro",
  "lookupUid": "ui.contexts_LanguageContext.dictionary1.lookupUid",
  "mainStats": "ui.contexts_LanguageContext.dictionary1.mainStats",
  "mihomoFinalStatsNote": "ui.contexts_LanguageContext.dictionary1.mihomoFinalStatsNote",
  "mihomoStatsUnavailable": "ui.contexts_LanguageContext.dictionary1.mihomoStatsUnavailable",
  "mistranslation": "ui.contexts_LanguageContext.dictionary1.mistranslation",
  "nextReviewBatch": "ui.contexts_LanguageContext.dictionary1.nextReviewBatch",
  "nextStep": "ui.contexts_LanguageContext.dictionary1.nextStep",
  "nextStepBody": "ui.contexts_LanguageContext.dictionary1.nextStepBody",
  "nextUpgrade": "ui.contexts_LanguageContext.dictionary1.nextUpgrade",
  "noFeedback": "ui.contexts_LanguageContext.dictionary1.noFeedback",
  "noRegisteredTargets": "ui.contexts_LanguageContext.dictionary1.noRegisteredTargets",
  "originalText": "ui.contexts_LanguageContext.dictionary1.originalText",
  "otherFeedback": "ui.contexts_LanguageContext.dictionary1.otherFeedback",
  "pendingReview": "ui.contexts_LanguageContext.dictionary1.pendingReview",
  "pieces": "ui.contexts_LanguageContext.dictionary1.pieces",
  "policyDescription": "ui.contexts_LanguageContext.dictionary1.policyDescription",
  "portalCatalog": "ui.contexts_LanguageContext.dictionary1.portalCatalog",
  "portalCatalogCount": "ui.contexts_LanguageContext.dictionary1.portalCatalogCount",
  "portalChangeUid": "ui.contexts_LanguageContext.dictionary1.portalChangeUid",
  "portalCountFailed": "ui.contexts_LanguageContext.dictionary1.portalCountFailed",
  "portalCountRetry": "ui.contexts_LanguageContext.dictionary1.portalCountRetry",
  "portalGameGenshin": "ui.contexts_LanguageContext.dictionary1.portalGameGenshin",
  "portalGameHsr": "ui.contexts_LanguageContext.dictionary1.portalGameHsr",
  "portalGameZzz": "ui.contexts_LanguageContext.dictionary1.portalGameZzz",
  "portalLookup": "ui.contexts_LanguageContext.dictionary1.portalLookup",
  "portalOtherGames": "ui.contexts_LanguageContext.dictionary1.portalOtherGames",
  "portalSubtitle": "ui.contexts_LanguageContext.dictionary1.portalSubtitle",
  "priority": "ui.contexts_LanguageContext.dictionary1.priority",
  "profile": "ui.contexts_LanguageContext.dictionary1.profile",
  "profileSetup": "ui.contexts_LanguageContext.dictionary1.profileSetup",
  "profileSetupBody": "ui.contexts_LanguageContext.dictionary1.profileSetupBody",
  "progressionCaution": "ui.contexts_LanguageContext.dictionary1.progressionCaution",
  "progressionLockedStage": "ui.contexts_LanguageContext.dictionary1.progressionLockedStage",
  "progressionNextUnlock": "ui.contexts_LanguageContext.dictionary1.progressionNextUnlock",
  "progressionStepList": "ui.contexts_LanguageContext.dictionary1.progressionStepList",
  "progressionTargetChange": "ui.contexts_LanguageContext.dictionary1.progressionTargetChange",
  "progressionTargetHeading": "ui.contexts_LanguageContext.dictionary1.progressionTargetHeading",
  "progressionUnlockedStage": "ui.contexts_LanguageContext.dictionary1.progressionUnlockedStage",
  "publicBuildIntelligence": "ui.contexts_LanguageContext.dictionary1.publicBuildIntelligence",
  "publicCharacters": "ui.contexts_LanguageContext.dictionary1.publicCharacters",
  "publicOnly": "ui.contexts_LanguageContext.dictionary1.publicOnly",
  "rationale": "ui.contexts_LanguageContext.dictionary1.rationale",
  "receivedAt": "ui.contexts_LanguageContext.dictionary1.receivedAt",
  "recommended": "ui.contexts_LanguageContext.dictionary1.recommended",
  "records": "ui.contexts_LanguageContext.dictionary1.records",
  "reference": "ui.contexts_LanguageContext.dictionary1.reference",
  "referenceScope": "ui.contexts_LanguageContext.dictionary1.referenceScope",
  "registeredGuides": "ui.contexts_LanguageContext.dictionary1.registeredGuides",
  "relativeDeficit": "ui.contexts_LanguageContext.dictionary1.relativeDeficit",
  "relics": "ui.contexts_LanguageContext.dictionary1.relics",
  "resetFilters": "ui.contexts_LanguageContext.dictionary1.resetFilters",
  "responseStatus": "ui.contexts_LanguageContext.dictionary1.responseStatus",
  "retrieve": "ui.contexts_LanguageContext.dictionary1.retrieve",
  "retrieving": "ui.contexts_LanguageContext.dictionary1.retrieving",
  "reviewCriteria": "ui.contexts_LanguageContext.dictionary1.reviewCriteria",
  "reviewedRecords": "ui.contexts_LanguageContext.dictionary1.reviewedRecords",
  "rollSubstats": "ui.contexts_LanguageContext.dictionary1.rollSubstats",
  "searchCharacter": "ui.contexts_LanguageContext.dictionary1.searchCharacter",
  "secondary": "ui.contexts_LanguageContext.dictionary1.secondary",
  "selectedRecord": "ui.contexts_LanguageContext.dictionary1.selectedRecord",
  "sendFeedback": "ui.contexts_LanguageContext.dictionary1.sendFeedback",
  "sendingFeedback": "ui.contexts_LanguageContext.dictionary1.sendingFeedback",
  "signIn": "ui.contexts_LanguageContext.dictionary1.signIn",
  "siteMenu": "ui.contexts_LanguageContext.dictionary1.siteMenu",
  "siteMenuClose": "ui.contexts_LanguageContext.dictionary1.siteMenuClose",
  "siteNavCatalog": "ui.contexts_LanguageContext.dictionary1.siteNavCatalog",
  "siteNavLabel": "ui.contexts_LanguageContext.dictionary1.siteNavLabel",
  "siteNavLookup": "ui.contexts_LanguageContext.dictionary1.siteNavLookup",
  "siteWideChanges": "ui.contexts_LanguageContext.dictionary1.siteWideChanges",
  "sourceNotice": "ui.contexts_LanguageContext.dictionary1.sourceNotice",
  "sourcePage": "ui.contexts_LanguageContext.dictionary1.sourcePage",
  "startDate": "ui.contexts_LanguageContext.dictionary1.startDate",
  "stat": "ui.contexts_LanguageContext.dictionary1.stat",
  "statusInProgress": "ui.contexts_LanguageContext.dictionary1.statusInProgress",
  "statusNew": "ui.contexts_LanguageContext.dictionary1.statusNew",
  "statusResolved": "ui.contexts_LanguageContext.dictionary1.statusResolved",
  "statusUpdated": "ui.contexts_LanguageContext.dictionary1.statusUpdated",
  "suggestedText": "ui.contexts_LanguageContext.dictionary1.suggestedText",
  "target": "ui.contexts_LanguageContext.dictionary1.target",
  "targetDescription": "ui.contexts_LanguageContext.dictionary1.targetDescription",
  "targetMatrix": "ui.contexts_LanguageContext.dictionary1.targetMatrix",
  "themeDark": "ui.contexts_LanguageContext.dictionary1.themeDark",
  "themeDarkOn": "ui.contexts_LanguageContext.dictionary1.themeDarkOn",
  "themeLightOn": "ui.contexts_LanguageContext.dictionary1.themeLightOn",
  "thirdParty": "ui.contexts_LanguageContext.dictionary1.thirdParty",
  "totalLookups": "ui.contexts_LanguageContext.dictionary1.totalLookups",
  "translationFeedback": "ui.contexts_LanguageContext.dictionary1.translationFeedback",
  "translationImprovement": "ui.contexts_LanguageContext.dictionary1.translationImprovement",
  "uidOnly": "ui.contexts_LanguageContext.dictionary1.uidOnly",
  "uidSaved": "ui.contexts_LanguageContext.dictionary1.uidSaved",
  "updateCoverage": "ui.contexts_LanguageContext.dictionary1.updateCoverage",
  "updateFailed": "ui.contexts_LanguageContext.dictionary1.updateFailed",
  "updatePolicy": "ui.contexts_LanguageContext.dictionary1.updatePolicy",
  "updated": "ui.contexts_LanguageContext.dictionary1.updated",
  "updates": "ui.contexts_LanguageContext.dictionary1.updates",
  "wEngine": "ui.contexts_LanguageContext.dictionary1.wEngine",
  "weapon": "ui.contexts_LanguageContext.dictionary1.weapon",
  "zzzDescription": "ui.contexts_LanguageContext.dictionary1.zzzDescription"
});

export type TranslationKey = keyof typeof copy.ja;

type LanguageContextValue = {
  language: AppLanguage;
  enabledLanguages: AppLanguage[];
  setLanguage: (language: AppLanguage) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function storedLanguage(): AppLanguage {
  try {
    const value = typeof window === "undefined" ? null : window.localStorage.getItem(STORAGE_KEY);
    return value === "en" || value === "zh-CN" || value === "ja" ? value : "ja";
  } catch { return "ja"; }
}

export function LanguageProvider({ children, enabledLanguages: enabled = DEFAULT_ENABLED_LANGUAGES, settingsPending = false }: { children: React.ReactNode; enabledLanguages?: AppLanguage[]; settingsPending?: boolean }) {
  const enabledLanguages = normalizeEnabledLanguages(enabled);
  const [selectedLanguage, setSelectedLanguage] = useState<AppLanguage>(storedLanguage);
  const language = enabledLanguages.includes(selectedLanguage) ? selectedLanguage : "ja";
  const setLanguage = (next: AppLanguage) => {
    if (enabledLanguages.includes(next)) setSelectedLanguage(next);
  };
  useEffect(() => {
    document.documentElement.lang = language;
    // 取得中は日本語で描くが、公開値が確定するまで利用者の選択を消さない。
    if (settingsPending) return;
    setSelectedLanguage(language);
    try { window.localStorage.setItem(STORAGE_KEY, language); } catch { /* 表示は続ける。 */ }
  }, [language, settingsPending]);
  return <LanguageContext.Provider value={{ language, enabledLanguages, setLanguage, t: (key) => copy[language][key] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
