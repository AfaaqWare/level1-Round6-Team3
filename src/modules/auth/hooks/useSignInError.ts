import { useTranslations } from "next-intl";
import { SignInError } from "@/core/errors/SignInError";

export const useSignInError = (error: unknown) => {
  const t = useTranslations("auth.forms.signIn");

  if (!(error instanceof SignInError)) {
    return undefined;
  }

  if (error.status === 400) {
    return t("errors.invalidCredentials");
  }

  if (error.status === 429) {
    return t("errors.tooManyRequests");
  }

  if (error.status && error.status >= 500) {
    return t("errors.serverError");
  }

  return t("errors.genericError");
};
