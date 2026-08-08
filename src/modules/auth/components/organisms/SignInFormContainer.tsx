"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import SignInForm from "./SignInForm";
import { useSignIn } from "@/modules/auth/hooks/useSignIn";
import { signInSchema, type SignInFormData } from "@/validator/authValidation";
import { useEffect } from "react";

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

  const onSubmit = (data: SignInFormData) => {
    signInMutation.reset();

    signInMutation.mutate(data, {
      onSuccess: () => {
        toast.success(t("toast.loginSuccess"));
        signInMutation.reset();
      },
      onError: () => {
        toast.error(t("toast.loginFailed"));
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
      errorMessage={signInMutation.isError ? t("invalidCredentials") : undefined}
    />
  );
}
