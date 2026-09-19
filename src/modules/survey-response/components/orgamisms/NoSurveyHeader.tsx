"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";

import { Plus } from "@/assets/icons/icons";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";

const NoSurveyHeader = () => {
  const t = useTranslations("dashboard");
  const { data: profile } = useGetProfile();
  const name = profile?.name?.trim().split(/\s+/)[0];
  return (
    <div className="mt-7 mb-5 flex flex-col items-start justify-between gap-16 sm:flex-row sm:items-center">
      <div className="flex flex-col items-start justify-start gap-1">
        <Title size="lg">
          {t("surveys.noSurveyHeader.title")}
          {" " + name}!
        </Title>
        <Text variant="disabled" className="mt-1">
          {t("surveys.noSurveyHeader.subtitlePart1")}
          {" " + name + "! "}
          {t("surveys.noSurveyHeader.subtitlePart2")}
        </Text>
      </div>

      <Link href="/dashboard/create-survey">
        <Button variant="primaryWhite" size="md">
          <Icon IconComponent={Plus} size="xs" color="primaryWhite" className="!font-medium" />

          {t("surveys.noSurveyHeader.createButton")}
        </Button>
      </Link>
    </div>
  );
};

export default NoSurveyHeader;
