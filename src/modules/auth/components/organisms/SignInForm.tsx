"use client";

import type { FormEventHandler } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

import { Lock, Mail } from "@/assets/icons/icons";
import PasswordField from "@/modules/auth/components/molecules/PasswordField";
import RememberMeSection from "@/modules/auth/components/molecules/RememberMeSection";
import FormHeader from "@/modules/auth/components/molecules/FormHeader";

import Button from "@/shared/components/atoms/Button";
import Checkbox from "@/shared/components/atoms/Checkbox";
import Input from "@/shared/components/atoms/Input";
import AuthPanel from "@/shared/components/templates/AuthPanel";

import type { SignInFormData } from "@/validator/authValidation";
import { useTranslations } from "next-intl";

interface SignInFormProps {
  register: UseFormRegister<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  email: string;
  password: string;
  isPending: boolean;
  errorMessage?: string;
}

export default function SignInForm({
  register,
  errors,
  email,
  password,
  onSubmit,
  isPending,
  errorMessage,
}: SignInFormProps) {
  const t = useTranslations("auth.forms.signIn");
  return (
    <AuthPanel>
      <FormHeader title={t("title")} description={t("description")} />
      {errorMessage && !errors.email && !errors.password && (
        <div role="alert" className="text-md my-5 px-4 py-3 text-center text-red-600">
          {errorMessage}
        </div>
      )}
      <form
        onSubmit={onSubmit}
        className="mt-[var(--space-2xl)] flex flex-col gap-[var(--space-2xl)]"
      >
        <Input
          leftIcon={!email ? <Mail size={18} /> : undefined}
          size="lg"
          type="email"
          placeholder={t("placeholderEmail")}
          {...register("email")}
          state={errors.email ? "error" : "default"}
          errorMessage={errors.email?.message}
          className="ds-rounded-md border-0 !bg-[var(--color-bg-disabled)] placeholder:text-sm placeholder:!text-[var(--color-text-disabled)]"
        />

        <PasswordField
          leftIcon={!password ? <Lock size={18} /> : undefined}
          size="lg"
          placeholder={t("placeholderPass")}
          {...register("password")}
          state={errors.password ? "error" : "default"}
          errorMessage={errors.password?.message}
          className="ds-rounded-md border-0 !bg-[var(--color-bg-disabled)] placeholder:text-sm placeholder:!text-[var(--color-text-disabled)]"
        />

        <RememberMeSection
          forgotPasswordHref="/forget-password"
          forgotPasswordLabel={t("forgotPassword")}
          checkbox={<Checkbox label={t("rememberMe")} />}
        />
        <Button
          type="submit"
          isRounded
          className="mx-auto mt-5 font-semibold text-nowrap sm:px-16 md:w-fit"
          disabled={isPending}
          isFullWidth
        >
          {isPending ? t("pendingSignIn") : t("cta")}
        </Button>
      </form>
    </AuthPanel>
  );
}
