import Heading from "../../molecules/home/Heading";
import StepCard from "../../molecules/home/StepCard";
import { useTranslations } from "next-intl";

export default function WorkStepsSection() {
  const t = useTranslations("publicPages.home.howItWorksSection");

  return (
    <div className="ds-container mt-20">
      <Heading
        title={t("Heading.title")}
        highlightText={t("Heading.highlightText")}
        text={t("Heading.text")}
      />

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <StepCard title={t("StepCard1.title")} text={t("StepCard1.text")} />

        <StepCard title={t("StepCard2.title")} text={t("StepCard2.text")} />

        <StepCard title={t("StepCard3.title")} text={t("StepCard3.text")} />
      </div>
    </div>
  );
}
