"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Swal from "sweetalert2";
import IconInput from "@/shared/components/molecules/IconInput";
import PasswordInput from "@/shared/components/molecules/PasswordInput";
import Button from "@/shared/components/atoms/Button";
import { cn } from "@/lib/cn";
import SocialAuth from "./SocialAuth";
import { signUpSchema, type SignUpSchema } from "../schemas/signUp.schema";
import { useRegister } from "../hooks/useRegister";
import { useResetFlow } from "../guards/useResetFlow";
import { Check } from "@/assets/icons/icons";
import { penIcon, emailIcon, lockIcon } from "@/assets/images/images";

export default function FormSignUp() {
  const t = useTranslations("auth.signup");
  const { mutate: register, isPending } = useRegister();
  const resetFlow = useResetFlow();

  const {
    register: registerField,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const values = watch();
  const isFormFilled = Boolean(
    values.name?.trim() &&
      values.email?.trim() &&
      values.password &&
      values.confirmPassword &&
      values.terms
  );
  const canSubmit = isFormFilled && isValid;

  const fieldError = (code?: string) => (code ? t(`validation.${code}`) : undefined);

  const onSubmit = (data: SignUpSchema) => {
    register(
      { email: data.email, password: data.password, name: data.name },
      {
        onSuccess: () => {
          resetFlow.start(data.email, "register");
        },
        onError: (err) => {
          const msg =
            (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            err?.message;
          if (msg && /email/i.test(msg) && /exist|already|taken|registered|in use/i.test(msg)) {
            setError("email", { message: "emailExists" });
            return;
          }
          Swal.fire({
            icon: "error",
            title: t("errors.title"),
            text: msg || t("errors.general"),
          });
        },
      }
    );
  };

  return (
    <div className="flex flex-col">
      <h1 className="ds-title-lg ds-text-alt text-center mb-6 font-semibold tracking-tight">
        {t("heading")}
      </h1>

      <SocialAuth />

      <span className="mx-auto my-6 ds-text-sm ds-text-secondary whitespace-nowrap">{t("divider")}</span>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
        <IconInput
          icon={<Image src={penIcon} alt="" width={20} height={20} className="h-5 w-5 object-contain" />}
          placeholder={t("namePlaceholder")}
          autoComplete="name"
          errorMessage={fieldError(errors.name?.message)}
          {...registerField("name")}
        />

        <IconInput
          icon={<Image src={emailIcon} alt="" width={20} height={20} className="h-5 w-5 object-contain" />}
          type="email"
          placeholder={t("emailPlaceholder")}
          autoComplete="email"
          errorMessage={fieldError(errors.email?.message)}
          {...registerField("email")}
        />

        <PasswordInput
          icon={<Image src={lockIcon} alt="" width={20} height={20} className="h-5 w-5 object-contain" />}
          placeholder={t("passwordPlaceholder")}
          autoComplete="new-password"
          errorMessage={fieldError(errors.password?.message)}
          {...registerField("password")}
        />

        <PasswordInput
          icon={<Image src={lockIcon} alt="" width={20} height={20} className="h-5 w-5 object-contain" />}
          placeholder={t("confirmPasswordPlaceholder")}
          autoComplete="new-password"
          errorMessage={fieldError(errors.confirmPassword?.message)}
          {...registerField("confirmPassword")}
        />

        <div className="flex flex-col gap-1">
          <label className="flex cursor-pointer items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border transition-colors duration-[var(--motion-fast)]",
                values.terms
                  ? "ds-bg-primary ds-border-primary"
                  : "ds-bg-form ds-border-muted"
              )}
            >
              {values.terms && <Check className="h-3.5 w-3.5 ds-text-white" />}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              aria-invalid={Boolean(errors.terms)}
              {...registerField("terms")}
            />
            <span className="ds-text-sm ds-text-secondary leading-snug">
              {t("termsPrefix")}{" "}
              <Link href="/faqs" className="ds-text-alt font-medium underline">
                {t("termsLink")}
              </Link>
            </span>
          </label>
          {errors.terms?.message && (
            <p role="alert" className="text-xs leading-snug text-red-500">
              {fieldError(errors.terms.message)}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          isRounded
          disabled={!canSubmit || isPending}
          className="mt-2 self-center"
        >
          {isPending ? t("submitting") : t("submit")}
        </Button>
      </form>
    </div>
  );
}
