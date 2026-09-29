import { AllResponsesResponse } from "../type/allResponses";

import ApiClient from "@/services/ApiClient";

export async function getAllResponses() {
  //URl
  const response = await ApiClient.get<AllResponsesResponse>("/responses");
  return response;
}
