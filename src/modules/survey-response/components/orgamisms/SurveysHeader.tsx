"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import { Plus } from "@/assets/icons/icons";

export default function SurveysHeader() {
  const t = useTranslations("dashboard.surveys.header");

  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <Title size="lg">{t("title")}</Title>
        <Text variant="disabled" className="mt-1">
          {t("subtitle")}
        </Text>
      </div>

      <Link href="/dashboard/create-survey">
        <Button variant="primaryWhite" size="md">
          <Icon IconComponent={Plus} size="xs" color="primaryWhite" className="!font-medium" />
          {t("createButton")}
        </Button>
      </Link>
    </div>
  );
}
