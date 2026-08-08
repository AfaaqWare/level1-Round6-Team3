"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  createForgetPasswordSchema,
  type ForgetPasswordFormValues,
  type ForgetPasswordValidationMessages,
} from "@/modules/auth/schemas/forgetPassword.schema";

type UseForgetPasswordFormParams = {
  validationMessages: ForgetPasswordValidationMessages;
  onSubmit?: (values: ForgetPasswordFormValues) => void | Promise<void>;
};

export function useForgetPasswordForm({
  validationMessages,
  onSubmit,
}: UseForgetPasswordFormParams) {
  const schema = createForgetPasswordSchema(validationMessages);
  const form = useForm<ForgetPasswordFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const {
    handleSubmit,
    trigger,
    formState: { errors },
  } = form;
  const emailError = errors.email?.message;
  const handleValidSubmit: SubmitHandler<ForgetPasswordFormValues> = values =>
    onSubmit?.(values);

  useEffect(() => {
    if (emailError) {
      void trigger("email");
    }
  }, [
    emailError,
    trigger,
    validationMessages.emailInvalid,
    validationMessages.emailRequired,
  ]);

  return {
    emailError,
    handleSubmit,
    handleValidSubmit,
    register: form.register,
  };
}
