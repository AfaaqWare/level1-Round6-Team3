"use client";
import React, { useState, useEffect } from "react";
import ResponseCardsSection from "../organismas/ResponseCardsSection";
import ResponseHeader from "../organismas/ResponseHeader";
import ResponseTable from "../organismas/ResponseTable";
import ResponseToolbar from "../organismas/ResponseToolbar";
import useGetAllResponses from "@/modules/responses/hooks/useGetAllResponses";
import { getAllSurveysApi } from "@/modules/survey-response/api/getAllSurveysApi";
import type { AllResponses } from "@/modules/responses/type/allResponses";

function ResponsePageTemplate() {
  const { data } = useGetAllResponses();
  const [searchTerm, setSearchTerm] = useState("");
  const [reversedData, setReversedData] = useState<AllResponses[]>([]);
  const [isReversedData, setIsReversedData] = useState(false);
  const [myResponses, setMyResponses] = useState<AllResponses[]>([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    async function getSurveys() {
      const response = await getAllSurveysApi();

      const surveysIds = response?.data.map(survey => survey.id) ?? [];
      const myResponses = data?.data.filter(response => surveysIds.includes(response.surveyId)) ?? [];
      setMyResponses(myResponses);
    }

    getSurveys();
  }, [data]);

  function getReverseData() {
    if (!isReversedData) {
      const reversedDataArray = myResponses.toReversed();
      setReversedData(reversedDataArray);
      setIsReversedData(true);
      console.log(reversedDataArray);
    } else {
      setReversedData([]);
      setIsReversedData(false);
    }
  }

  return (
    <>
      <ResponseHeader myResponses={myResponses} />
      <ResponseCardsSection myResponses={myResponses} />
      <ResponseToolbar
        setSearchTerm={setSearchTerm}
        getReverseData={getReverseData}
        isReversedData={isReversedData}
        
      />
      <ResponseTable
        searchTerm={searchTerm}
        reversedData={reversedData}
        myResponses={myResponses}
      />
    </>
  );
}

export default ResponsePageTemplate;
