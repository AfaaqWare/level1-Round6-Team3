"use client";

import { useForgetPasswordForm } from "@/modules/auth/hooks/forget-password/useForgetPasswordForm";
import type {
  ForgetPasswordFormValues,
  ForgetPasswordValidationMessages,
} from "@/modules/auth/validations/forgetPassword.schema";
import { LoaderCircle } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import ForgetPasswordEmailField from "./ForgetPasswordEmailField";

type ForgetPasswordFormProps = {
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  validationMessages: ForgetPasswordValidationMessages;
  isPending?: boolean;
  onSubmit?: (values: ForgetPasswordFormValues) => void | Promise<void>;
};

function ForgetPasswordForm({
  emailLabel,
  emailPlaceholder,
  submitLabel,
  validationMessages,
  isPending = false,
  onSubmit,
}: ForgetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    handleValidSubmit,
    emailError,
  } = useForgetPasswordForm({ validationMessages, onSubmit });

  return (
    <form
      className="flex w-full max-w-[408px] flex-col gap-[var(--space-sm)] text-start"
      onSubmit={handleSubmit(handleValidSubmit)}
      noValidate
    >
      <ForgetPasswordEmailField
        emailLabel={emailLabel}
        emailPlaceholder={emailPlaceholder}
        emailError={emailError}
        disabled={isPending}
        register={register}
      />
      <Button
        type="submit"
        isFullWidth
        disabled={isPending}
        className="h-10 rounded-[8px] py-0 font-semibold shadow-none dark:bg-[var(--color-primary-button-dark)]"
      >
        {isPending && (
          <LoaderCircle
            aria-hidden="true"
            className="h-4 w-4 animate-spin"
          />
        )}
        {submitLabel}
      </Button>
    </form>
  );
}

export default ForgetPasswordForm;
