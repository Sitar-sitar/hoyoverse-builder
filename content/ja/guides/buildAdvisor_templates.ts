import type { SourceText } from "../../../shared/content/types";
const block0: SourceText[] = [
  {
    "id": "guide.legacy.buildAdvisor_templates.b00001",
    "ja": "目標 {v0}{v1} まで{v2}",
    "context": "buildAdvisor_templates: rationale; preserved guide template with compiler-checked variables",
    "audience": "public",
    "placeholders": {
      "v0": "number",
      "v1": "string",
      "v2": "string"
    },
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "guide.legacy.buildAdvisor_templates.b00002",
    "ja": "ガイドの主ステータスは別の役割で埋まっています。部位は問わないので、{v0}のサブステータスが付く装備を優先して厳選します。",
    "context": "buildAdvisor_templates: reason; preserved guide template with compiler-checked variables",
    "audience": "public",
    "placeholders": {
      "v0": "string"
    },
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "guide.legacy.buildAdvisor_templates.b00003",
    "ja": "{v0}の主ステータスは{v1}です。{v2}のサブステータスが付く個体を優先して厳選します。",
    "context": "buildAdvisor_templates: reason; preserved guide template with compiler-checked variables",
    "audience": "public",
    "placeholders": {
      "v0": "string",
      "v1": "string",
      "v2": "string"
    },
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "guide.legacy.buildAdvisor_templates.b00004",
    "ja": "{v0}{v1}です。{v2}を主ステータスにした{v3}へ変更すると不足分を補いやすくなります。",
    "context": "buildAdvisor_templates: reason; preserved guide template with compiler-checked variables",
    "audience": "public",
    "placeholders": {
      "v0": "string",
      "v1": "string",
      "v2": "string",
      "v3": "string"
    },
    "dependencies": [],
    "protectedTokens": []
  },
  {
    "id": "guide.legacy.buildAdvisor_templates.b00005",
    "ja": "{v0}専用の有効ステータス目標です。編成・光円錐・戦闘中バフによる変動分は含みません。",
    "context": "buildAdvisor_templates: targetContext; preserved guide template with compiler-checked variables",
    "audience": "public",
    "placeholders": {
      "v0": "string"
    },
    "dependencies": [],
    "protectedTokens": []
  }
];
export const sources: SourceText[] = [...block0];
