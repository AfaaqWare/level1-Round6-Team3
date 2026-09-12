"use client";

import React from "react";

import SurveyByIdHeader from "./SurveyByIdHeader";
import SurveyByIdHero from "./SurveyByIdHero";
import SurveyByIdBottomCards from "./SurveyByIdBottomCards";

function SurveyById() {
  

  return (
    <main className="w-full px-4 py-6 sm:px-6 lg:px-[30px]">
      <SurveyByIdHeader />
      <SurveyByIdHero />
      <SurveyByIdBottomCards />
    </main>
  );
}

export default SurveyById;
