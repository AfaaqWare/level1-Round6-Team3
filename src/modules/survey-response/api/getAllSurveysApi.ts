import { GetAllSurveys } from "../types/survey";

import ApiClient from "@/services/ApiClient";
export async function getAllSurveysApi() {
  const response = await ApiClient.get<GetAllSurveys>("/survey");

  return response;
}
