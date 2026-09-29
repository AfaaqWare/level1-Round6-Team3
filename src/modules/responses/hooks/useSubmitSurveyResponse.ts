import { useMutation } from "@tanstack/react-query";
import { SubmitSurveyPayload } from "@/modules/responses/type/responses";
import { submitSurveyResponseByLink } from "./../api/submitSurveyResponse";

export function useSubmitPublicSurveyResponse(surveyLink: string) {
  return useMutation({
    mutationFn: (payload: SubmitSurveyPayload) => submitSurveyResponseByLink(surveyLink, payload),
  });
}
