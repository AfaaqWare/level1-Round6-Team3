"use client";

import { useParams } from "next/navigation";

import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";

import { Pencil, Share2, CalendarDays, ClipboardList, Lock } from "@/assets/icons/icons";

import { useGetSurveyById } from "@/modules/survey/hooks/useGetSurveyById";

export default function PreviewSurveyPage() {
  const params = useParams();

  const { data, isLoading } = useGetSurveyById(params.surveyId as string);

  // Loading
  if (isLoading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <Text>Loading...</Text>
      </div>
    );
  }

  // Survey not found
  if (!data) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <Text>Survey not found</Text>
      </div>
    );
  }

  const questions = data.questions ?? [];

  const mcqQuestions = questions.filter(question => question.type === "mcq");

  const textQuestions = questions.filter(question => question.type === "textarea");

  const requiredQuestions = questions.filter(question => question.isRequired);

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      {/* ================= HEADER ================= */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Title size="lg">Preview Survey</Title>

          <Text variant="disabled" className="mt-2">
            This is how your survey will look for respondents.
          </Text>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button size="sm" variant="white">
            <Icon IconComponent={Pencil} size="xs" />
            Edit
          </Button>

          <Button size="sm" variant="primary">
            <Icon IconComponent={Share2} size="xs" />
            Share Survey
          </Button>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.6fr_0.9fr]">
        {/* ================= SURVEY PREVIEW ================= */}
        <div className="min-w-0 rounded-[15px] bg-white p-5 sm:p-8">
          {/* Progress */}
          <div className="mb-8 flex items-center">
            <div className="h-2 flex-1 rounded-full bg-[#03A8B1]" />

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D8F4F5] text-[#03A8B1]">
              <Icon IconComponent={ClipboardList} size="sm" />
            </div>

            <div className="h-2 flex-1 rounded-full bg-[#03A8B1]" />
          </div>

          {/* Survey Title */}
          <div className="mb-7 text-center">
            <Title size="md">{data.title}</Title>

            {data.description && (
              <Text variant="disabled" className="mt-2">
                {data.description}
              </Text>
            )}
          </div>

          {/* ================= SURVEY INFO ================= */}
          <div className="mb-7 flex flex-wrap justify-center gap-3">
            {data.deadline && (
              <div className="flex items-center gap-2 rounded-md border border-[#D5D6DA] px-4 py-2 text-sm text-[#636978]">
                <CalendarDays size={16} />

                <span>Deadline: {new Date(data.deadline).toLocaleDateString("en-GB")}</span>
              </div>
            )}
          </div>

          {/* ================= QUESTIONS ================= */}
          <div className="flex flex-col gap-4">
            {questions.length === 0 ? (
              <div className="rounded-[10px] border border-dashed border-[#D5D6DA] p-8 text-center">
                <Text variant="disabled">No questions have been added to this survey yet.</Text>
              </div>
            ) : (
              questions.map((question, index) => (
                <div
                  key={question.qid}
                  className="rounded-[10px] border border-[#D5D6DA] p-4 sm:p-5"
                >
                  <div className="flex gap-3">
                    {/* Question Number */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-[#03A8B1] text-sm font-medium text-white">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* Question Text */}
                      <div className="mb-3 flex items-start gap-1">
                        <p className="text-sm font-medium text-[#202124]">
                          {question.questionText}
                        </p>

                        {question.isRequired && <span className="text-red-500">*</span>}
                      </div>

                      {/* ================= MCQ ================= */}
                      {question.type === "mcq" &&
                        question.choices &&
                        question.choices.length > 0 && (
                          <div className="flex flex-col gap-2">
                            {question.choices.map((choice, choiceIndex) => (
                              <label
                                key={choiceIndex}
                                className="flex cursor-pointer items-center gap-2 text-sm text-[#636978]"
                              >
                                <input
                                  type="radio"
                                  name={`question-${question.qid}`}
                                  className="h-4 w-4"
                                />
                                <span>{choice}</span>
                              </label>
                            ))}
                          </div>
                        )}

                      {/* ================= TEXTAREA ================= */}
                      {question.type === "textarea" && (
                        <textarea
                          placeholder="Write your answer here..."
                          className="min-h-[100px] w-full resize-none rounded-[8px] border border-[#D5D6DA] p-3 text-sm text-[#202124] transition-colors outline-none placeholder:text-[#9A9CA5] focus:border-[#03A8B1]"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ================= SUBMIT ================= */}
          {questions.length > 0 && (
            <div className="mt-8 flex flex-col items-center">
              <Button size="md" variant="primary" className="min-w-[210px]">
                Submit Survey
              </Button>

              <div className="mt-3 flex items-center gap-2 text-xs text-[#636978]">
                <Lock size={14} />

                <span>Your response is secure and anonymous.</span>
              </div>
            </div>
          )}
        </div>

        {/* ================= OVERVIEW ================= */}
        <div className="h-fit min-w-0 rounded-[15px] bg-white p-5 sm:p-7">
          <Title size="md" className="mb-6">
            Survey Overview
          </Title>

          <div className="flex flex-col gap-5">
            {/* Total Questions */}
            <div>
              <Text variant="disabled">Total Questions</Text>

              <p className="mt-1 text-sm font-medium">{questions.length}</p>
            </div>

            {/* Question Types */}
            <div>
              <Text variant="disabled">Question Types</Text>

              <div className="mt-3 flex flex-col gap-2">
                {/* Text Area */}
                <div className="flex items-center justify-between rounded-md bg-[#D8F4F5] px-3 py-2">
                  <span className="text-sm text-[#03A8B1]">Text Area</span>

                  <span className="text-sm">{textQuestions.length}</span>
                </div>

                {/* MCQ */}
                <div className="flex items-center justify-between rounded-md bg-[#E7E3FA] px-3 py-2">
                  <span className="text-sm text-[#4338A8]">MCQ</span>

                  <span className="text-sm">{mcqQuestions.length}</span>
                </div>
              </div>
            </div>

            {/* Required Questions */}
            <div>
              <Text variant="disabled">Required Questions</Text>

              <p className="mt-1 text-sm font-medium">{requiredQuestions.length}</p>
            </div>

            {/* Deadline */}
            <div>
              <Text variant="disabled">Deadline</Text>

              <p className="mt-1 text-sm font-medium">
                {data.deadline
                  ? new Date(data.deadline).toLocaleDateString("en-GB")
                  : "No deadline"}
              </p>
            </div>

            {/* Last Updated */}
            <div>
              <Text variant="disabled">Last Updated</Text>

              <p className="mt-1 text-sm font-medium">
                {data.updatedAt ? new Date(data.updatedAt).toLocaleDateString("en-GB") : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
