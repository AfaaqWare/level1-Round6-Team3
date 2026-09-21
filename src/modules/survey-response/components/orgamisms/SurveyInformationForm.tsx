import { User } from "@/assets/icons/icons";
import Input from "@/shared/components/atoms/Input";
import Text from "@/shared/components/atoms/Text";
import IconText from "../molecules/IconText";
import Title from "@/shared/components/atoms/Title";
import { useTranslations } from "next-intl";
import { isEmail, isValidFullName } from "@/shared/utils/validators";

type SurveyInformationFormProps = {
  fullName: string;
  email: string;
  onFullNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
};

export default function SurveyInformationForm({
  fullName,
  email,
  onFullNameChange,
  onEmailChange,
}: SurveyInformationFormProps) {
  const inputClassName = "!border-[var(--border-color)] mt-2";

  const t = useTranslations("surveyResponse.SurveyInformation");

  const nameError = fullName.length > 0 && !isValidFullName(fullName) ? t("nameError") : undefined;

  const emailError = email.length > 0 && !isEmail(email) ? t("emailError") : undefined;

  return (
    <section className="ds-bg-card ds-rounded-xl px-5 py-4 sm:px-6">
      <header className="mb-6">
        <IconText IconComponent={User} iconSize="md">
          <Title size="md" className="!font-regular normal-case">
            {t("title")}
          </Title>
        </IconText>
      </header>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        <Input
          id="fullName"
          name="fullName"
          label={t("fullName")}
          value={fullName}
          required
          size="lg"
          className={inputClassName}
          onChange={event => onFullNameChange(event.target.value)}
          state={nameError ? "error" : "default"}
          errorMessage={nameError}
        />

        <Input
          id="email"
          name="email"
          type="email"
          label={t("email")}
          value={email}
          required
          size="lg"
          className={inputClassName}
          onChange={event => onEmailChange(event.target.value)}
          state={emailError ? "error" : "default"}
          errorMessage={emailError}
        />
      </div>

      <Text variant="disabled" size="sm" className="mt-6">
        {t("confidential")}
      </Text>
    </section>
  );
}
