import ResponseCard from "@/modules/all-responses/components/molecules/ResponseCard";
import React from "react";
import File from "@/assets/images/file.png";
import Excel from "@/assets/images/excel.png";
import File2 from "@/assets/images/file2.png";
import Calendar from "@/assets/images/calendar.png";
import { useTranslations } from "next-intl";

function ResponseCardsSection() {
  const t = useTranslations("dashboard.responses");

  return (
    <section className=" grid gap-6  mt-[44px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <ResponseCard
        iconCard={File2}
        text1={t("cards.totalResponses.title")}
        text2="3"
        text3={t("cards.totalResponses.text")}
        bg="bg-[#EAF8F8]"
      />
      <ResponseCard
        iconCard={File}
        text1={t("cards.uniqueSurveys.title")}
        text2="4"
        text3={t("cards.uniqueSurveys.text")}
        bg="bg-[#F3EEFA]"
      />
      <ResponseCard
        iconCard={Calendar}
        text1={t("cards.latestResponse.title")}
        text2="5"
        text3="recent"
        bg="bg-[#FEF5EA]"
      />
      <ResponseCard
        iconCard={Excel}
        text1={t("cards.exportReady.title")}
        text2="6"
        text3={t("cards.exportReady.text")}
        bg="bg-[#F2FBF1]"
      />
    </section>
  );
}

export default ResponseCardsSection;
