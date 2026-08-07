"use client";

import { useTranslations } from "next-intl";
import BackToSignInLink from "./BackToSignInLink";
import ForgetPasswordForm from "./ForgetPasswordForm";
import ForgetPasswordHeader from "./ForgetPasswordHeader";

function ForgetPasswordSection() {
  const t = useTranslations("auth.forget-password");

  return (
    <section className="mx-auto flex w-full max-w-[496px] flex-col items-center gap-10 text-center">
      <div className="flex w-full flex-col items-center gap-8">
        <ForgetPasswordHeader title={t("title")} subtitle={t("subtitle")} />
        <ForgetPasswordForm
          emailLabel={t("emailLabel")}
          emailPlaceholder={t("emailPlaceholder")}
          submitLabel={t("submit")}
        />
      </div>

      <BackToSignInLink label={t("backToSignIn")} />
    </section>
  );
}

export default ForgetPasswordSection;
