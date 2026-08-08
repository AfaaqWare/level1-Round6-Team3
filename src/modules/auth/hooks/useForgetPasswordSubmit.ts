"use client";

import { isAxiosError } from "axios";
import { useTranslations } from "next-intl";
import Swal from "sweetalert2";
import { useResetFlow } from "@/modules/auth/guards/useResetFlow";
import type { ForgetPasswordFormValues } from "@/modules/auth/validations/forgetPassword.schema";
import type { ApiErrorResponse } from "@/shared/types/api-error-response";
import { useForgetPasswordMutation } from "./useForgetPasswordMutation";

export function useForgetPasswordSubmit() {
  const t = useTranslations("auth.forget-password");
  const { start } = useResetFlow();
  const { mutate, isPending } = useForgetPasswordMutation();

  const submitForgetPassword = (values: ForgetPasswordFormValues) => {
    mutate(values, {
      onSuccess: () => start(values.email),
      onError: error => {
        const apiMessage = isAxiosError<ApiErrorResponse>(error)
          ? error.response?.data.message ?? error.response?.data.error
          : error.message;

        void Swal.fire({
          icon: "error",
          title: t("apiError.title"),
          text: apiMessage || t("apiError.message"),
        });
      },
    });
  };

  return {
    submitForgetPassword,
    isPending,
  };
}
