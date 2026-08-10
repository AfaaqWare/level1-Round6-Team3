"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import PasswordInput from "@/shared/components/molecules/PasswordInput";
import Button from "@/shared/components/atoms/Button";
import { lockIcon } from "@/assets/images/images";
import { useResetPasswordForm } from "../hooks/reset-password/useResetPasswordForm";
import { useResetPasswordSubmit } from "../hooks/reset-password/useResetPasswordSubmit";

export default function FormResetPassword() {
  const t = useTranslations("auth.new-password");

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
    canSubmit,
  } = useResetPasswordForm();

  const { onSubmit, isPending, error } = useResetPasswordSubmit();

  const fieldError = (code?: string) =>
    code ? t(`validation.${code}`) : undefined;

  return (
    <div className="flex flex-col items-center">
      <h1 className="ds-title-lg ds-text-primary text-center mb-2 font-semibold tracking-tight">
        {t("title")}
      </h1>

      <p className="ds-text-sm ds-text-secondary text-center mb-8 max-w-sm">
        {t("description")}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex w-full max-w-md flex-col gap-4"
      >
        <PasswordInput
          icon={
            <Image
              src={lockIcon}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          }
          placeholder={t("passwordLabel")}
          autoComplete="new-password"
          errorMessage={fieldError(errors.password?.message)}
          {...registerField("password")}
        />

        <PasswordInput
          icon={
            <Image
              src={lockIcon}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          }
          placeholder={t("confirmPasswordLabel")}
          autoComplete="new-password"
          errorMessage={fieldError(errors.confirmPassword?.message)}
          {...registerField("confirmPassword")}
        />

        <p className="ds-text-xs ds-text-secondary leading-snug">
          {t("requirements")}
        </p>

        {error && (
          <p role="alert" className="text-xs leading-snug text-red-500 text-center">
            {(error as { response?: { data?: { message?: string } } })?.response
              ?.data?.message ||
              error?.message ||
              t("validation.passwordRequired")}
          </p>
        )}

        <Button
          type="submit"
          variant={canSubmit && !isPending ? "primary" : "disabled"}
          isFullWidth
          disabled={!canSubmit || isPending}
          className="mt-2 ds-rounded-lg"
        >
          {t("submit")}
        </Button>
      </form>
    </div>
  );
}
