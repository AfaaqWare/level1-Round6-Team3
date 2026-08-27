"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useForgetPasswordSubmit } from "@/modules/auth/hooks/forget-password/useForgetPasswordSubmit";
import BackToSignInLink from "./BackToSignInLink";
import ForgetPasswordForm from "./ForgetPasswordForm";
import ForgetPasswordHeader from "./ForgetPasswordHeader";
import { TokenService } from "@/services/tokenService";

function ForgetPasswordSection() {
  const t = useTranslations("auth.forget-password");
  const { submitForgetPassword, isPending } = useForgetPasswordSubmit();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setHasToken(Boolean(TokenService.getToken()));
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-[496px] flex-col items-center gap-10 text-center">
      <div className="flex w-full flex-col items-center gap-8">
        <ForgetPasswordHeader title={t("title")} subtitle={t("subtitle")} />
        <ForgetPasswordForm
          emailLabel={t("emailLabel")}
          emailPlaceholder={t("emailPlaceholder")}
          submitLabel={t("submit")}
          isPending={isPending}
          onSubmit={submitForgetPassword}
          validationMessages={{
            emailRequired: t("validation.emailRequired"),
            emailInvalid: t("validation.emailInvalid"),
          }}
        />
      </div>

      <BackToSignInLink label={hasToken ? t("backToHome") : t("backToSignIn")} href={hasToken ? "/" : "/sign-in"} />
    </section>
  );
}

export default ForgetPasswordSection;
