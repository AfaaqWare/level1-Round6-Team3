"use client";

import React, { useState } from "react";

import SurveyOverview from "../molecules/SurveyOverview";
import SurveyQuestions from "../molecules/SurveyQuestions";
import SurveyAction from "../molecules/SurveyAction";

import { useGetSurveyById } from "@/modules/survey/hooks/useGetSurveyById";
import { useParams } from "next/navigation";
import { publishSurveyLinkApi } from "@/modules/survey-response/api/publishSurveyLinkApi";
function SurveyByIdBottomCards() {
  const [publicLink, setPublicLink] = useState("");

  const params = useParams();

  const { data } = useGetSurveyById(params.id as string);

  async function handlePublishLink() {
    try {
      const response = await publishSurveyLinkApi(params.id as string);
      setPublicLink(response.link ?? "");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="grid w-full grid-cols-1 items-start gap-8 xl:grid-cols-[1fr_1.2fr_0.8fr]">
      {/* ================= Overview ================= */}
      <SurveyOverview publicLink={publicLink || data?.link || ""} />

      {/* ================= Questions ================= */}
      <SurveyQuestions />

      {/* ================= Quick Actions ================= */}
      <SurveyAction handlePublishLink={handlePublishLink} />
    </section>
  );
}

export default SurveyByIdBottomCards;
