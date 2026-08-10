"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import SignInForm from "./SignInForm";
import { useSignIn } from "@/modules/auth/hooks/useSignIn";
import { signInSchema, type SignInFormData } from "@/validator/authValidation";
import { useEffect } from "react";
import { showToast } from "@/shared/utils/toast";
import { useSignInError } from "@/modules/auth/hooks/useSignInError";

export default function SignInFormContainer() {
  const t = useTranslations("auth.forms.signIn");
  const locale = useLocale();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      trigger();
    }
  }, [locale]);

  const signInMutation = useSignIn();
  const errorMessage = useSignInError(signInMutation.error);

  const onSubmit = (data: SignInFormData) => {
    signInMutation.reset();

    signInMutation.mutate(data, {
      onSuccess: () => {
        showToast({
          type: "success",
          message: t("toast.loginSuccess"),
          locale,
        });
      },
      onError: () => {
        showToast({
          type: "error",
          message: t("toast.loginFailed"),
          locale,
        });
      },
    });
  };

  return (
    <SignInForm
      register={register}
      errors={errors}
      email={watch("email")}
      password={watch("password")}
      onSubmit={handleSubmit(onSubmit)}
      isPending={signInMutation.isPending}
      errorMessage={errorMessage}
    />
  );
}
