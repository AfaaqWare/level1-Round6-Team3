import ApiClient from "@/services/ApiClient";
import { GetAllResponses } from "../type/responses";

export function getAllResponsesApi() {
  return ApiClient.get<GetAllResponses>("/responses");
}
