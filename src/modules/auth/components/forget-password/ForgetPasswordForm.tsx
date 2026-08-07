"use client";

import { useForgetPasswordForm } from "@/modules/auth/hooks/useForgetPasswordForm";
import type {
  ForgetPasswordFormValues,
  ForgetPasswordValidationMessages,
} from "@/modules/auth/validations/forgetPassword.schema";
import Button from "@/shared/components/atoms/Button";
import ForgetPasswordEmailField from "./ForgetPasswordEmailField";

type ForgetPasswordFormProps = {
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  validationMessages: ForgetPasswordValidationMessages;
  onSubmit?: (values: ForgetPasswordFormValues) => void | Promise<void>;
};

function ForgetPasswordForm({
  emailLabel,
  emailPlaceholder,
  submitLabel,
  validationMessages,
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
        register={register}
      />
      <Button
        type="submit"
        isFullWidth
        className="h-10 rounded-[8px] py-0 font-semibold shadow-none"
      >
        {submitLabel}
      </Button>
    </form>
  );
}

export default ForgetPasswordForm;
