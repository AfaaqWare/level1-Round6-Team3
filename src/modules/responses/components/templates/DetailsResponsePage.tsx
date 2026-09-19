"use client";

import { EmptyState, ErrorState, LoadingState } from "@/core/ui-states";
import { useSurvey } from "@/modules/survey-response/hooks/useSurvey";
import useGetResponseById from "../../hooks/useGetResponseById";
import DetailsResponseHeader from "../organismas/DetailsResponseHeader";
import DetailsResponeInformation from "../molecules/DetailsResponeInformation";
import DetailsResponseSurveyAnswers from "../molecules/DetailsResponseSurveyAnswers";

interface DetailsResponsePageProps {
  responseId: string;
}

const DetailsResponsePage = ({ responseId }: DetailsResponsePageProps) => {
  const {
    data: responseResult,
    isLoading: isResponseLoading,
    isError: isResponseError,
    refetch: refetchResponse,
  } = useGetResponseById(responseId);

  const response = responseResult?.data;
  const {
    data: survey,
    isLoading: isSurveyLoading,
    isError: isSurveyError,
    refetch: refetchSurvey,
  } = useSurvey(response?.surveyId ?? "");
  const isLoading = isResponseLoading || isSurveyLoading;

  return (
    <section>
      <DetailsResponseHeader />

      <div className="mt-10">
        {isLoading && <LoadingState />}

        {!isLoading && isResponseError && !response && (
          <ErrorState onRetry={() => void refetchResponse()} />
        )}

        {!isLoading && isSurveyError && !survey && (
          <ErrorState onRetry={() => void refetchSurvey()} />
        )}

        {!isLoading && response && survey && (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
            <DetailsResponeInformation response={response} survey={survey} />
            <DetailsResponseSurveyAnswers response={response} survey={survey} />
          </div>
        )}

        {!isLoading && !response && !isResponseError && <EmptyState />}

        {!isLoading && response && !survey && !isSurveyError && <EmptyState />}
      </div>
    </section>
  );
};

export default DetailsResponsePage;
