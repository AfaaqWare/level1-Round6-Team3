import React from "react";

import SurveyOverview from "../molecules/SurveyOverview";
import SurveyQuestions from "../molecules/SurveyQuestions";
import SurveyAction from "../molecules/SurveyAction";
function SurveyByIdBottomCards() {
  return (
    <section className="grid w-full grid-cols-1 items-start gap-8 xl:grid-cols-[1fr_1.2fr_0.8fr]">

      {/* ================= Overview ================= */}
      <SurveyOverview />

      {/* ================= Questions ================= */}
      <SurveyQuestions />

      {/* ================= Quick Actions ================= */}
      <SurveyAction />
      
    </section>
  );
}

export default SurveyByIdBottomCards;
