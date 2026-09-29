"use client";

import React from "react";

import SurveyByIdHeader from "../organism/SurveyByIdHeader";
import SurveyByIdHero from "../organism/SurveyByIdHero";
import SurveyByIdBottomCards from "../organism/SurveyByIdBottomCards";

function SurveyById() {
  return (
    <main className="w-full px-4 py-6 sm:px-6 lg:px-[30px]">
      <SurveyByIdHeader />
      <SurveyByIdHero  />
      <SurveyByIdBottomCards />
    </main>
  );
}

export default SurveyById;
