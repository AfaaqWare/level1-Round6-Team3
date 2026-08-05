"use client";
import Heading from "../../molecules/Home/Heading";
import StepCard from "../../molecules/Home/StepCard";
import { useTranslations } from "next-intl";
import { steps } from "../../../utils/data";

export default function WorkStepsSection() {
  const t = useTranslations("publicPages.home.howItWorksSection");

  return (
    <div className="ds-container my-3 flex min-h-[90vh] flex-col justify-center md:my-1 md:min-h-0 md:justify-center">
      <Heading
        title={t("Heading.title")}
        highlightText={t("Heading.highlightText")}
        text={t("Heading.text")}
      />

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(step => (
          <StepCard key={step.id} title={t(step.titleKey)} description={t(step.descriptionKey)} />
        ))}
      </div>
    </div>
  );
}
