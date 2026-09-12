"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { EmptyState, ErrorState, LoadingState } from "@/core/ui-states";
import { useSurvey } from "@/modules/survey-response/hooks/useSurvey";
import EditSurveyForm from "../organisms/EditSurveyForm";
import CoverImageCard from "../organisms/CoverImageCard";

interface EditSurveyPageProps {
  surveyId: string;
}

export default function EditSurveyPage({ surveyId }: EditSurveyPageProps) {
  const t = useTranslations("dashboard.surveyEdit");
  const statesT = useTranslations("dashboard.surveyEdit.states");
  const { data: survey, isLoading, isError, refetch } = useSurvey(surveyId);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  if (isLoading) {
    return (
      <div className="edit-survey-page">
        <LoadingState message={statesT("loading")} />
      </div>
    );
  }

  if (isError && !survey) {
    return (
      <div className="edit-survey-page">
        <ErrorState
          message={statesT("error")}
          retryLabel={statesT("retry")}
          onRetry={() => {
            void refetch();
          }}
        />
      </div>
    );
  }

  if (!survey) {
    return (
      <div className="edit-survey-page">
        <EmptyState message={statesT("notFound")} />
      </div>
    );
  }

  return (
    <div className="edit-survey-page">
      {/* Page Header */}
      <div className="create-survey-header">
        <h1 className="create-survey-title">{t("title")}</h1>
        <p className="create-survey-subtitle">{t("subtitle")}</p>
      </div>

      {/* Two-column layout: form + cover card */}
      <div className="edit-survey-layout">
        <div className="create-survey-card">
          <EditSurveyForm survey={survey} coverFile={coverFile} />
        </div>

        <aside className="edit-survey-cover-column">
          <div className="create-survey-card">
            <CoverImageCard initialCover={survey.cover} onCoverChange={setCoverFile} />
          </div>
        </aside>
      </div>
    </div>
  );
}