import { ArrowRight, ArrowLeft } from "@/assets/icons/icons";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { useTranslations, useLocale } from "next-intl";

interface Props {
  number?: string;
  title?: string;
  highlightText?: string;
  isNumber?: boolean;
}

export default function TopBarCards({
  number = "3",
  title = "title",
  highlightText = "highlightText",
  isNumber = false,
}: Props) {
  const t = useTranslations("publicPages");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <div className="mt-7 flex flex-wrap items-center justify-between gap-2">
      <div className="flex min-w-0 items-center gap-2">
        {isNumber && <span className="shrink-0 text-lg font-semibold">{number}.</span>}

        <Title variant="primary" size="lg" className="min-w-0 font-semibold normal-case">
          {title} <span className="ds-text-alt">{highlightText}</span>
        </Title>
      </div>

      <div className="flex shrink-0 cursor-pointer items-center gap-1">
        <Text size="md">{t("viewAll")}</Text>
        <Icon IconComponent={isRtl ? ArrowLeft : ArrowRight} />
      </div>
    </div>
  );
}
