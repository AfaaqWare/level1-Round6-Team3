import React from "react";


import SurveyHeaderTitle from "../molecules/SurveyHeaderTitle";
import SurveyHeaderActions from "../molecules/SurveyHeaderActions";

function SurveyByIdHeader() {

  return (
    <>
      {/* ================= Header ================= */}
      <section className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Title */}
       <SurveyHeaderTitle />

        {/* Actions */}
        <SurveyHeaderActions />
        
      </section>
    </>
  );
}

export default SurveyByIdHeader;
