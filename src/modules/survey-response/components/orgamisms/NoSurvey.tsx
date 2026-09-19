import React from "react";
import NoSurveyHeader from "./NoSurveyHeader";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { empty1 } from "@/assets/images/images";
import Link from "@/shared/components/atoms/navbar/Link";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import { Plus } from "@/assets/icons/icons";
const NoSurvey = () => {
  const t = useTranslations("dashboard");
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <NoSurveyHeader />
      <Image src={empty1} alt="No Survey" />
      <p className="text-center text-gray-500">{t("surveys.noSurveyFooter.text")}</p>
      <Link href="/dashboard/create-survey">
        <Button variant="primaryWhite" size="md">
          <Icon IconComponent={Plus} size="xs" color="primaryWhite" className="!font-medium" />

          {t("surveys.noSurveyHeader.createButton")}
        </Button>
      </Link>
    </div>
  );
};

export default NoSurvey;
