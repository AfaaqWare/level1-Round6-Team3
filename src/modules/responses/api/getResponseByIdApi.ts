import ApiClient from "@/services/ApiClient";
import { GetResponseById } from "../type/responses";

export function getResponseByIdApi(responseId: string) {
  return ApiClient.get<GetResponseById>(`/responses/${responseId}`);
}
