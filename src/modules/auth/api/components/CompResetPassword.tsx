"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { resetPasswordSchema } from "../../../../../schemas/resetPassword.schema";
import PasswordInput from "../../../../../components/auth/PasswordInput";
import Button from "../../../../../components/ui/Button";
import { useResetPassword } from "../hooks/useResetPassword";
import { TokenService } from "@/services/tokenService";

export default function CompResetPassword() {
  const router = useRouter();
  const t = useTranslations("auth");
  const { mutate: resetPassword, isPending } = useResetPassword();

  // Local state for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: { password?: string }) => {
    setServerError(null);

    const email = sessionStorage.getItem("resetEmail") || "";
    const otp = TokenService.getToken() || sessionStorage.getItem("resetOtp") || sessionStorage.getItem("otp") || "";

    resetPassword(
      {
        email,
        otp,
        newPassword: data.password || "",
      },
      {
        onSuccess: () => {
          // Navigate to the Done page after success
          router.push("/done");
        },
        onError: (err) => {
          // Extract backend message or validation error
          const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || err?.message || "An error occurred during password reset";
          setServerError(msg);
        },
      }
    );
  };

  return (
    <div className="w-full max-w-[550px] mx-auto text-center px-4">
      {/* Title */}
      <h1 className="ds-title-lg ds-text-primary font-bold mb-2 tracking-tight md:whitespace-nowrap">
        {t("new-password.title")}
      </h1>

      {/* Description */}
      <p className="ds-text-secondary ds-text-base mb-8 whitespace-pre-line leading-relaxed max-w-[450px] mx-auto">
        {t("new-password.description")}
      </p>

      <div className="max-w-[400px] mx-auto w-full">
        {/* API Error Placeholder */}
        {serverError && (
          <div className="mb-4 p-3 rounded bg-red-100 text-red-700 text-sm font-medium text-start" role="alert">
            {serverError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Password */}
          <PasswordInput
            register={register}
            name="password"
            placeholder={t("new-password.passwordLabel")}
            showPassword={showPassword}
            togglePassword={() => setShowPassword(!showPassword)}
            error={errors.password?.message ? t(`new-password.validation.${errors.password.message}`) : undefined}
            disabled={isPending}
            leftIcon={undefined}
          />

          {/* Confirm Password */}
          <PasswordInput
            register={register}
            name="confirmPassword"
            placeholder={t("new-password.confirmPasswordLabel")}
            showPassword={showConfirmPassword}
            togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            error={errors.confirmPassword?.message ? t(`new-password.validation.${errors.confirmPassword.message}`) : undefined}
            disabled={isPending}
            leftIcon={undefined}
          />

          {/* Password Requirement Text */}
          <p className="ds-text-secondary ds-text-xs text-start mt-1 leading-snug">
            {t("new-password.requirements")}
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            loading={isPending}
            disabled={isPending}
            className="mt-4 h-[50px] font-bold"
            onClick={undefined}
          >
            {t("new-password.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
}
