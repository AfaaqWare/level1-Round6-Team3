"use client";

import { useState } from "react";

import { SurveyAnswers } from "@/modules/survey-response/types/question";
import SurveyDetailsCard from "@/modules/survey-response/components/orgamisms/SurveyDetailsCard";
import { mockSurvey } from "@/modules/survey-response/utils/data";
import SurveyQuestionsForm from "@/modules/survey-response/components/orgamisms/SurveyQuestionsForm";
import SurveyInformationForm from "@/modules/survey-response/components/orgamisms/SurveyInformationForm";
import PublicLayout from "@/shared/components/Layout/PublicLayout";
import { useSurvey } from "@/modules/survey-response/hooks/useSurvey";
import { useParams } from "next/navigation";

export default function SurveyResponseTemplate() {
  const params = useParams();
  const id = params.id as string;
  const { data, isLoading, error } = useSurvey(id);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [answers, setAnswers] = useState<SurveyAnswers>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);
  };

  return (
    <PublicLayout>
      <main className="ds-bg min-h-screen pt-10 sm:pt-14 lg:pt-16">
        <div className="ds-container mx-auto max-w-[1232px]">
          <SurveyDetailsCard
            title={mockSurvey.title}
            description={mockSurvey.description}
            deadline={mockSurvey.deadline}
            duration={mockSurvey.duration}
            image={mockSurvey.coverImage}
          />
          <form onSubmit={handleSubmit} className="mt-10 space-y-12">
            <SurveyInformationForm
              fullName={fullName}
              email={email}
              onFullNameChange={setFullName}
              onEmailChange={setEmail}
            />
            <SurveyQuestionsForm
              questions={mockSurvey.questions}
              answers={answers}
              onAnswerChange={handleAnswerChange}
            />
          </form>
        </div>
      </main>
    </PublicLayout>
  );
}
