import apiClient from "@/services/ApiClient";

export interface SurveyById {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  deadline: string;
  questions: [];
  link: string;
  cover: string;
}


export const getSurveyByIdAPI = (id: string) => {
  return apiClient.get<SurveyById>(`/survey/${id}`);
};