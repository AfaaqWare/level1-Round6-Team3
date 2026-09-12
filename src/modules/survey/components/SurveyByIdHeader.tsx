import React from "react";

import { useTranslations } from "next-intl";

import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";

import { Eye, Send, Pencil } from "@/assets/icons/icons";

function SurveyByIdHeader() {
  const t = useTranslations("dashboard.mySurveys");

  return (
    <>
      {/* ================= Header ================= */}
      <section className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Title */}
        <div className="min-w-0">
          <Title size="lg">{t("heading.title")}</Title>

          <Text className="mt-2">{t("heading.subtitle")}</Text>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-[14px]">
          <Button size="md" variant="white">
            <Eye />
            {t("actions.preview")}
          </Button>

          <Button size="sm" variant="white">
            <Pencil />
            {t("actions.edit")}
          </Button>

          <Button size="sm" variant="primary">
            <Send />
            {t("actions.openBuilder")}
          </Button>
        </div>
      </section>
    </>
  );
}

export default SurveyByIdHeader;
