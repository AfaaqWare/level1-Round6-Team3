"use client";
import ResponseCard from "@/modules/responses/components/molecules/ResponseCard";
import React, { useEffect, useState } from "react";
import Excel from "@/assets/images/excel.png";
import File2 from "@/assets/images/file2.png";
import Calendar from "@/assets/images/calendar.png";
import { useTranslations } from "next-intl";
import type { AllResponses } from "@/modules/responses/type/allResponses";

function ResponseCardsSection({ myResponses }: { myResponses: AllResponses[] }) {
  const [lastDate, setLastData] = useState("");
  const t = useTranslations("dashboard.responses");

  useEffect(() => {
    const response = myResponses?.toReversed();
    if (response?.length) {
      const stringDate = new Date(response[0].submittedAt).toLocaleString();
      setLastData(stringDate);
    }
  }, [myResponses]);

  return (
    <section className="mt-[44px] grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ResponseCard
        iconCard={File2}
        text1={t("cards.totalResponses.title")}
        text2={myResponses?.length}
        text3={t("cards.totalResponses.text")}
        bg="bg-[#EAF8F8]"
      />

      <ResponseCard
        iconCard={Calendar}
        text1={t("cards.latestResponse.title")}
        text2={lastDate}
        text3="Recent"
        bg="bg-[#FEF5EA]"
      />
      <ResponseCard
        iconCard={Excel}
        text1={t("cards.exportReady.title")}
        text2={myResponses?.length}
        text3={t("cards.exportReady.text")}
        bg="bg-[#F2FBF1]"
      />
    </section>
  );
}

export default ResponseCardsSection;
