export interface CreateSurveyPayload {
  title: string;
  description: string;
  deadline: string;
  cover?: File;
}

export interface CreateSurveyResponse {
  id: string;
  title: string;
  description: string;
  deadline: string;
  cover: string;
  status: "draft" | "published" | "closed";
  createdAt: string;
}
