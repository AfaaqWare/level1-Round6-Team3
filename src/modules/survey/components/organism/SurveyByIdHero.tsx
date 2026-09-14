import React from "react";

import SurveyCover from "../molecules/SurveyCover";
import SurveyInfo from "../molecules/SurveyInfo";

function SurveyByIdHero() {
  return (
    <>
      {/* ================= Survey Hero ================= */}
      <section className=" ds-bg-card mb-10 grid w-full grid-cols-1 gap-8 rounded-[15px] p-[18px] sm:p-6 lg:grid-cols-[361px_minmax(0,1fr)] lg:gap-[60px] lg:p-[18px_45px_19px]">
        {/* Cover */}

        <SurveyCover />

        {/* Survey Info */}
        <SurveyInfo />
      </section>
    </>
  );
}

export default SurveyByIdHero;
