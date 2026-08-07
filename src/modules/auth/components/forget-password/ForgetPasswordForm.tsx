import { Mail } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import IconInput from "@/shared/components/molecules/IconInput";

type ForgetPasswordFormProps = {
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
};

function ForgetPasswordForm({
  emailLabel,
  emailPlaceholder,
  submitLabel,
}: ForgetPasswordFormProps) {
  return (
    <form
      className="flex w-full max-w-[408px] flex-col gap-6"
      onSubmit={event => event.preventDefault()}
    >
      <label htmlFor="forgot-password-email" className="sr-only">
        {emailLabel}
      </label>
      <IconInput
        id="forgot-password-email"
        type="email"
        autoComplete="email"
        placeholder={emailPlaceholder}
        aria-label={emailLabel}
        icon={
          <Mail
            aria-hidden="true"
            className="h-[18px] w-6"
            strokeWidth={1.5}
          />
        }
        className="h-10 rounded-[8px] border-0 ps-12 text-xs shadow-none"
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
