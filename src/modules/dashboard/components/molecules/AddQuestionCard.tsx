"use client";

import React from "react";
import { MoreVertical, Pencil, Trash2, CheckCircle2 } from "lucide-react";

export interface QuestionItem {
  id: string;
  number: number;
  title: string;
  type: "mcq" | "textarea";
  choices?: string[];
  required?: boolean;
}

interface AddQuestionCardProps {
  question: QuestionItem;
  onEdit?: (question: QuestionItem) => void;
  onDelete?: (id: string) => void;
}

export default function AddQuestionCard({
  question,
  onEdit,
  onDelete,
}: AddQuestionCardProps) {
  return (
    <div className="ds-bg-card rounded-2xl border border-[var(--border-color)] p-5 shadow-sm transition-colors dark:border-[var(--border-color-dark)] dark:bg-[#181a1b]">
      {/* Header Row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Question Number Badge */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00b7c1] font-bold text-white shadow-sm">
            {question.number}
          </div>
          {/* Question Title */}
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
            {question.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Question Type Tag */}
          <span
            className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
              question.type === "mcq"
                ? "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300"
                : "bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300"
            }`}
          >
            {question.type === "mcq" ? "MCQ" : "Text Area"}
          </span>
          <button
            type="button"
            className="p-1 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] dark:text-gray-400"
            aria-label="More options"
          >
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div className="my-4 pl-12">
        {question.type === "mcq" && question.choices && (
          <div className="space-y-2">
            {question.choices.map((choice, index) => (
              <label
                key={index}
                className="flex items-center gap-3 text-sm text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)] cursor-default"
              >
                <input
                  type="radio"
                  name={`q-${question.id}`}
                  disabled
                  className="h-4 w-4 border-gray-300 text-[#00b7c1] focus:ring-[#00b7c1] dark:border-gray-600 dark:bg-[#222325]"
                />
                <span>{choice}</span>
              </label>
            ))}
          </div>
        )}

        {question.type === "textarea" && (
          <div className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--color-form)] px-4 py-3 text-sm text-gray-400 dark:border-[var(--border-color-dark)] dark:bg-[#222325] dark:text-gray-500">
            Write your answer here..
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-3 dark:border-[var(--border-color-dark)]">
        <div className="pl-12">
          {question.required && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dbf8fa] px-3 py-1 text-xs font-medium text-[#00b7c1] dark:bg-teal-950/80 dark:text-[#00d1dc]">
              <CheckCircle2 size={13} />
              Required
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit?.(question)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-color)] bg-white px-3.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#222325] dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Pencil size={14} />
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete?.(question.id)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50/50 px-3.5 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/70"
          >
            <Trash2 size={14} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
