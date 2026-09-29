"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import { Plus } from "@/assets/icons/icons";
import DashboardHeader from "@/shared/components/organisms/DashboardHeader";

export default function SurveysHeader() {
  const t = useTranslations("dashboard.surveys.header");

  return (
    <DashboardHeader
      title={t("title")}
      subtitle={t("subtitle")}
      titleSize="lg"
      subtitleVariant="disabled"
    >
      <Link href="/dashboard/create-survey">
        <Button variant="primaryWhite" size="md">
          <Icon IconComponent={Plus} size="xs" color="primaryWhite" className="!font-medium" />
          {t("createButton")}
        </Button>
      </Link>
    </DashboardHeader>
  );
}
