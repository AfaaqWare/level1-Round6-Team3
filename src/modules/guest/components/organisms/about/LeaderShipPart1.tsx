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
    <section className="py-10">
      <div className="ds-container">
        <div className="mb-2 text-center">
          <Title size="xl" className="ds-text-heading font-semibold normal-case">
            {t("gridHeading.title")}{" "}
            <span className="ds-text-alt">{t("gridHeading.highlightTitle")}</span>
          </Title>
        </div>

        <div className="mx-auto mb-8">
          <TopBarCards
            title={t("topBar.title")}
            highlightText={t("topBar.highlightText")}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((member, index) => (
            <ImgCard
              key={member.id}
              titleSize="base"
              titleVariant="alt"
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
