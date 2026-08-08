"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { resetPasswordSchema } from "../../schemas/resetPassword.schema";
import PasswordInput from "./PasswordInput";
import Button from "../ui/Button";

export default function ResetPasswordForm() {
  const router = useRouter();
  const t = useTranslations("auth");

  // Local state for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Future API integration states placeholder
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

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

  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerError(null);
    
    console.log(data);

    // TODO:
    // Integrate Reset Password API here.
    // Example:
    // try {
    //   await resetPasswordApi(data);
    //   router.push("/reset-password/success");
    // } catch (err) {
    //   setServerError(err.message);
    // } finally {
    //   setIsLoading(false);
    // }

    // Mocking success transition:
    setTimeout(() => {
      setIsLoading(false);
      router.push("/reset-password/success");
    }, 1000);
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
          <div className="mb-4 p-3 rounded bg-red-100 text-red-700 text-sm font-medium" role="alert">
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
          disabled={isLoading}
        />

        {/* Confirm Password */}
        <PasswordInput
          register={register}
          name="confirmPassword"
          placeholder={t("new-password.confirmPasswordLabel")}
          showPassword={showConfirmPassword}
          togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          error={errors.confirmPassword?.message ? t(`new-password.validation.${errors.confirmPassword.message}`) : undefined}
          disabled={isLoading}
        />

        {/* Password Requirement Text */}
        <p className="ds-text-secondary ds-text-xs text-start mt-1 leading-snug">
          {t("new-password.requirements")}
        </p>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          disabled={isLoading}
          className="mt-4 h-[50px] font-bold"
        >
          {t("new-password.submit")}
        </Button>
      </form>
      </div>
    </div>
  );
}
