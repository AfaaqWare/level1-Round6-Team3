"use client";

import { useResetFlow } from "../../guards/useResetFlow";
import { useResetPasswordMutation } from "./useResetPasswordMutation";
import type { ResetPasswordSchema } from "../../schemas/resetPassword.schema";

export function useResetPasswordSubmit() {
  const { email, otp, finish } = useResetFlow();
  const { mutate, isPending, error } = useResetPasswordMutation();

  const onSubmit = (data: ResetPasswordSchema) => {
    mutate(
      { email, otp, password: data.password },
      {
        onSuccess: () => {
          finish();
        },
      }
    );
  };

  return { onSubmit, isPending, error };
}
