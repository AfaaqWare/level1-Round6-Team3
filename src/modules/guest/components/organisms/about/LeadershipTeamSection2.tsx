"use client";
import { useTranslations } from "next-intl";
import ImgCard from "@/shared/components/molecules/ImgCard";
import { leadership } from "@/modules/guest/utils/data";

import React from "react";

const LeadershipTeamSection2 = () => {
  const t = useTranslations("publicPages.about.leadeship-section");

  return (
    <div className="ds-container grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {leadership.map(member => (
        <ImgCard
          titleSize="md"
          titleVariant="alt"
          btn={t("join-team")}
          key={member.key}
          src={member.src}
          title={t(`${member.key}.title`)}
          text={t(`${member.key}.text`)}
        />
      ))}
    </div>
  );
};

export default LeadershipTeamSection2;
