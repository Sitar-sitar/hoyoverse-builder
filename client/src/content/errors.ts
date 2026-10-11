import { UI_TEXT, UI_ERROR_FALLBACK } from "./ui.generated";
import { displayErrorText } from "@shared/content/errorDisplay";

export const uiErrorText = (error: unknown) =>
  displayErrorText(error, UI_TEXT, "public", UI_ERROR_FALLBACK);
