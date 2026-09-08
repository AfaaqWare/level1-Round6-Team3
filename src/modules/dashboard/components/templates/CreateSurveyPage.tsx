"use client";

import React from "react";
import CreateSurveyForm from "../organisms/CreateSurveyForm";

export default function CreateSurveyPage() {
  return (
    <div className="create-survey-page">
      {/* Page Header */}
      <div className="create-survey-header">
        <h1 className="create-survey-title">Create Survey</h1>
        <p className="create-survey-subtitle">
          Create a new Survey and start collecting responses
        </p>
      </div>

      {/* Form Card */}
      <div className="create-survey-card">
        <CreateSurveyForm />
      </div>
    </div>
  );
}
