"use client";

import React from "react";
import Title from "@/shared/components/atoms/Title";
import ImgCard from "@/shared/components/molecules/ImgCard";
import TopBarCards from "../../molecules/Home/TobBarCards";
import { LeadershipData } from "@/shared/utils/data";
import { useTranslations } from "next-intl";

export default function LeadershipSection() {
  const t = useTranslations("publicPages.about.teamleaderSection");

  const team = t.raw("team") as {
    id: number;
    title: string;
    text: string;
  }[];

  return (
    <section className="py-14 md:py-20">
      <div className="ds-container">
        {/* Section Title: "Our leadership team" */}
        <div className="mb-4">
          <Title
            size="lg"
            variant="primary"
            isCenter
            className="pb-6 text-[17px] leading-tight font-semibold normal-case md:pb-8 md:text-[20px]"
          >
            {t("gridHeading.title")}{" "}
            <span className="ds-text-alt">{t("gridHeading.highlightTitle")}</span>
          </Title>
        </div>

        {/* TopBar with "Leadership" + "detail →" */}
        <div className="mb-10">
          <TopBarCards title={t("topBar.title")} highlightText={t("topBar.highlightText")} />
        </div>

        {/* Cards Grid: 4 columns on large, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <ImgCard
              key={member.id}
              titleSize="base"
              titleVariant="primary"
              src={LeadershipData[index]?.src ?? LeadershipData[0].src}
              title={member.title}
              text={member.text}
              btn={t("button")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
