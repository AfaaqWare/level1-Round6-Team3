import { CalendarDays, FileText, Send } from "@/assets/icons/icons";
import SurveyStatisticCard from "./SurveyStatisticCard";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import { useTranslations } from "next-intl";

type SurveyFooterProps = {
  totalQuestions: number;
  requiredQuestions: number;
};

export default function SurveySubmissionPanel({
  totalQuestions,
  requiredQuestions,
}: SurveyFooterProps) {
  const t = useTranslations("surveyResponse.SurveySubmission");

  return (
    <div className="flex flex-col flex-wrap items-center justify-between gap-4 rounded-b-xl border border-[var(--border-color)] bg-[var(--color-bg-survyForm)] px-4 py-7 sm:flex-row">
      <div className="grid grid-cols-2 gap-3">
        <SurveyStatisticCard
          icon={CalendarDays}
          title={t("totalQuestions")}
          value={totalQuestions}
        />

        <SurveyStatisticCard
          variant="secondary"
          icon={FileText}
          title={t("required")}
          value={requiredQuestions}
        />
      </div>

      <Button type="submit" size="md">
        <Icon IconComponent={Send} variant="white" /> {t("submit")}
      </Button>
    </div>
  );
}
