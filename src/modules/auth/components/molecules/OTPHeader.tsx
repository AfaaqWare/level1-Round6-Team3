import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { useTranslations } from "next-intl";

export default function OTPHeader() {
  const t = useTranslations();

  return (
    <div className="text-center">
      <Title size="xl" isCenter className="text-center md:whitespace-nowrap">
        {t("auth.otp.verify")}
      </Title>

      <Text size="md" variant="secondary" isCenter className="text-center">
        {t("auth.otp.description")}
      </Text>
    </div>
  );
}
