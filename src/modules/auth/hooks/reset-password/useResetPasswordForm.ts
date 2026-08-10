"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "../../schemas/resetPassword.schema";

export function useResetPasswordForm() {
  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const values = form.watch();
  const isFormFilled = Boolean(values.password && values.confirmPassword);
  const canSubmit = isFormFilled && form.formState.isValid;

  return { ...form, canSubmit };
}
