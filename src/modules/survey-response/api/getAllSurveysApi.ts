import { PaginatedSurveys } from "../types/survey";

import ApiClient from "@/services/ApiClient";
export async function getAllSurveysApi(page = 1, pageSize = 10) {
  const response = await ApiClient.get<PaginatedSurveys>("/survey", { page, pageSize });

  return response;
}
