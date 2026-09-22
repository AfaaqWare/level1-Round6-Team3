import React from "react";
import Text from "@/shared/components/atoms/Text";
import { useTranslations } from "next-intl";
import DashboardHeader from "@/shared/components/organisms/DashboardHeader";
import Link from "@/shared/components/atoms/navbar/Link";
import { ChevronLeft } from "@/assets/icons/icons";

const DetailsResponseHeader = () => {
  const t = useTranslations("dashboard.responses.detailsResponse.header");
  return (
    <DashboardHeader
      title={t("title")}
      subtitle={t("description")}
      subtitleSize="sm"
      subtitleVariant="disabled"
    >
      <Link
        className="ds-bg ds-border-color flex items-center gap-2 rounded-md border px-3 py-2 no-underline"
        href="/dashboard/all-responses"
      >
        <ChevronLeft className="size-3 rtl:rotate-180" />

        <Text variant="secondary" size="xs">
          {t("backToResponse")}
        </Text>
      </Link>
    </DashboardHeader>
  );
};

export default DetailsResponseHeader;
