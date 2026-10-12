import { UI_TEXT, UI_ERROR_FALLBACK } from "./ui.admin.generated";
import { displayErrorText } from "@shared/content/errorDisplay";

export const uiErrorText = (error: unknown) =>
  displayErrorText(error, UI_TEXT, "admin", UI_ERROR_FALLBACK);
