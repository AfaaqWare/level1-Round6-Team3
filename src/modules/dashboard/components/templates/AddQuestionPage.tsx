"use client";

import React, { useState } from "react";
import {
  Eye,
  Pencil,
  Send,
  CalendarDays,
  ClipboardList,
  FileText,
  Plus,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import AddQuestionCard, { QuestionItem } from "../molecules/AddQuestionCard";
import AddQuestionDrawer from "../organisms/AddQuestionDrawer";
import { useGetQuestions } from "../../hooks/useGetQuestions";
import { useAddQuestion } from "../../hooks/useAddQuestion";
import { useDeleteQuestion } from "../../hooks/useDeleteQuestion";

const INITIAL_QUESTIONS: QuestionItem[] = [
  {
    id: "q-1",
    number: 1,
    title: "What's your favorite language?",
    type: "mcq",
    choices: ["JavaScript", "Python", "Go"],
    required: true,
  },
  {
    id: "q-2",
    number: 2,
    title: "Tell us about your experience with the training.",
    type: "textarea",
    required: true,
  },
  {
    id: "q-3",
    number: 3,
    title: "ما مدى رضاك عن المحتوي ؟",
    type: "mcq",
    choices: ["ممتاز", "جيد", "ضعيف"],
    required: true,
  },
];

export default function AddQuestionPage({ surveyIdProp }: { surveyIdProp?: string }) {
  const searchParams = useSearchParams();
  const surveyId = surveyIdProp || searchParams.get("surveyId") || "";

  const [localQuestions, setLocalQuestions] = useState<QuestionItem[]>(INITIAL_QUESTIONS);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { data: apiQuestions, isLoading } = useGetQuestions(surveyId);
  const addQuestionMutation = useAddQuestion(surveyId);
  const deleteQuestionMutation = useDeleteQuestion(surveyId);

  // Map API questions to QuestionItem structure if surveyId is present
  const displayQuestions: QuestionItem[] = surveyId && apiQuestions
    ? apiQuestions.map((q, idx) => ({
        id: q.id,
        number: idx + 1,
        title: q.title,
        type: q.type,
        choices: q.choices,
        required: q.required,
      }))
    : localQuestions;

  const handleAddQuestion = (newQ: Omit<QuestionItem, "id" | "number">) => {
    if (surveyId) {
      addQuestionMutation.mutate(
        {
          surveyId,
          title: newQ.title,
          type: newQ.type,
          required: newQ.required ?? false,
          choices: newQ.choices,
        },
        {
          onSuccess: () => {
            toast.success("Question added successfully!");
            setIsDrawerOpen(false);
          },
          onError: () => {
            toast.error("Failed to add question. Please try again.");
          },
        }
      );
    } else {
      const nextItem: QuestionItem = {
        ...newQ,
        id: `q-${Date.now()}`,
        number: localQuestions.length + 1,
      };
      setLocalQuestions(prev => [...prev, nextItem]);
      toast.success("Question added!");
      setIsDrawerOpen(false);
    }
  };

  const handleDeleteQuestion = (id: string) => {
    if (surveyId) {
      deleteQuestionMutation.mutate(
        { surveyId, questionId: id },
        {
          onSuccess: () => {
            toast.success("Question deleted successfully!");
          },
          onError: () => {
            toast.error("Failed to delete question. Please try again.");
          },
        }
      );
    } else {
      setLocalQuestions(prev =>
        prev
          .filter(q => q.id !== id)
          .map((q, idx) => ({
            ...q,
            number: idx + 1,
          }))
      );
      toast.success("Question deleted!");
    }
  };

  return (
    <div className="min-h-screen pb-12 transition-colors">
      {/* Top Header Section */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] sm:text-3xl">
            My Surveys
          </h1>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary-dark)]">
            Manage, Edit and track all your Survey
          </p>
        </div>

        {/* Action Controls Header */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-color)] bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-[#181a1b] dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Eye size={15} />
            preview
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-color)] bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-[#181a1b] dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Pencil size={15} />
            Publish
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#00b7c1] px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-[#009da5] dark:bg-[#00d1dc] dark:text-black dark:hover:bg-[#00b7c1]"
          >
            <Send size={15} />
            Open builder
          </button>
        </div>
      </div>

      {/* Survey Info Metadata Summary Card */}
      <div className="mb-6 rounded-2xl border border-[var(--border-color)] bg-white p-4 shadow-sm dark:border-[var(--border-color-dark)] dark:bg-[#181a1b]">
        <div className="grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center gap-3 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <CalendarDays size={20} />
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-400">Deadline</p>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                10 May 2025, 11:59PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <ClipboardList size={20} />
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-400">Questions</p>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                {displayQuestions.length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-400">Last updated</p>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                10 May 2025, 11:59PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: Questions List + Add Question Drawer */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Questions Container */}
        <div className="min-w-0 flex-1 space-y-4 rounded-2xl border border-[var(--border-color)] bg-white p-5 shadow-sm dark:border-[var(--border-color-dark)] dark:bg-[#181a1b]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
              Questions
            </h2>
            {!isDrawerOpen && (
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#00b7c1] px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#009da5] dark:bg-[#00d1dc] dark:text-black dark:hover:bg-[#00b7c1]"
              >
                <Plus size={16} />
                Add New Question
              </button>
            )}
          </div>

          {/* Questions Cards */}
          <div className="space-y-4 pt-2">
            {isLoading ? (
              <p className="py-8 text-center text-sm text-gray-400">Loading questions...</p>
            ) : displayQuestions.length === 0 ? (
              <p className="py-8 text-center text-sm text-gray-400">No questions added yet.</p>
            ) : (
              displayQuestions.map(q => (
                <AddQuestionCard key={q.id} question={q} onDelete={handleDeleteQuestion} />
              ))
            )}
          </div>
        </div>

        {/* Add Question Right Drawer Side Panel */}
        {isDrawerOpen && (
          <div className="shrink-0 lg:w-96">
            <AddQuestionDrawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              onSaveQuestion={handleAddQuestion}
            />
          </div>
        )}
      </div>
    </div>
  );
}
