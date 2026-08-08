import type { UseFormRegister } from "react-hook-form";
import { Mail } from "@/assets/icons/icons";
import IconInput from "@/shared/components/molecules/IconInput";
import type { ForgetPasswordFormValues } from "@/modules/auth/schemas/forgetPassword.schema";

type ForgetPasswordEmailFieldProps = {
  emailLabel: string;
  emailPlaceholder: string;
  emailError?: string;
  disabled?: boolean;
  register: UseFormRegister<ForgetPasswordFormValues>;
};

function ForgetPasswordEmailField({
  emailLabel,
  emailPlaceholder,
  emailError,
  disabled = false,
  register,
}: ForgetPasswordEmailFieldProps) {
  return (
    <>
      <label htmlFor="forgot-password-email" className="sr-only">
        {emailLabel}
      </label>
      <div className="flex flex-col gap-[var(--space-xs)] pb-[var(--space-2xs)]">
        <IconInput
          {...register("email")}
          id="forgot-password-email"
          type="email"
          disabled={disabled}
          autoComplete="email"
          placeholder={emailPlaceholder}
          aria-label={emailLabel}
          aria-invalid={Boolean(emailError)}
          aria-describedby="forgot-password-email-error"
          icon={
            <Mail
              aria-hidden="true"
              className="h-[18px] w-6"
              strokeWidth={1.5}
            />
          }
          className="h-10 rounded-[8px] border-0 ps-12 text-xs shadow-none dark:ds-bg-card"
        />
        <p
          id="forgot-password-email-error"
          role={emailError ? "alert" : undefined}
          className="ds-text-xs min-h-[calc(var(--text-xs)*var(--leading-normal))] text-[var(--color-error)]"
        >
          {emailError}
        </p>
      </div>
    </>
  );
}

export default ForgetPasswordEmailField;
