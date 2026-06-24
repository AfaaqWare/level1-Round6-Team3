import React from "react";
import Title from "@/shared/components/atoms/Title";
import ImgCard from "@/shared/components/molecules/ImgCard";
import TopBarCards from "@/modules/guest/components/molecules/Home/TobBarCards";
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
    <section className="ds-container px-4 py-10">
      <div className="mx-auto mb-2">
        <TopBarCards
          number="1"
          title={t("topBar.title")}
          highlightText={t("topBar.highlightText")}
        />
      </div>

      <Title size="lg" className="ds-text-heading mb-8 text-center font-normal">
        {t("heading.title")} <span className="ds-text-alt">{t("heading.highlightTitle")}</span>
      </Title>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {team.map((member, index) => (
          <ImgCard
            titleSize="md"
            titleVariant="alt"
            key={member.id}
            src={LeadershipData[index].src}
            title={member.title}
            text={member.text}
            btn={t("button")}
          />
        ))}
      </div>
    </section>
  );
}
