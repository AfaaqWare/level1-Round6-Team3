"use client";

import React, { useState } from "react";
import { X, MinusCircle, PlusCircle, List, AlignLeft, Check } from "lucide-react";
import { QuestionItem } from "../molecules/AddQuestionCard";

interface AddQuestionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveQuestion: (question: Omit<QuestionItem, "id" | "number">) => void;
}

export default function AddQuestionDrawer({
  isOpen,
  onClose,
  onSaveQuestion,
}: AddQuestionDrawerProps) {
  const [questionType, setQuestionType] = useState<"mcq" | "textarea">("mcq");
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState<string[]>(["", "", ""]);
  const [isRequired, setIsRequired] = useState(true);

  if (!isOpen) return null;

  const handleAddChoice = () => {
    setChoices(prev => [...prev, ""]);
  };

  const handleRemoveChoice = (index: number) => {
    setChoices(prev => prev.filter((_, i) => i !== index));
  };

  const handleChoiceChange = (index: number, value: string) => {
    setChoices(prev => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    onSaveQuestion({
      title: questionText.trim(),
      type: questionType,
      choices: questionType === "mcq" ? choices.filter(c => c.trim().length > 0) : undefined,
      required: isRequired,
    });

    // Reset form
    setQuestionText("");
    setChoices(["", "", ""]);
    setIsRequired(true);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border-color)] bg-white p-6 shadow-xl transition-all dark:border-[var(--border-color-dark)] dark:bg-[#181a1b]">
      {/* Drawer Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
          Add New Question
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          aria-label="Close panel"
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Select Question Type */}
        <div>
          <label className="mb-3 block text-xs font-semibold text-gray-700 dark:text-gray-300">
            1. Select question type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {/* MCQ Option */}
            <button
              type="button"
              onClick={() => setQuestionType("mcq")}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 p-5 transition-all ${
                questionType === "mcq"
                  ? "border-[#00b7c1] bg-[#f2fafb] dark:border-[#00d1dc] dark:bg-teal-950/30"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300 dark:border-gray-800 dark:bg-[#222325]"
              }`}
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100/60 text-[#00b7c1] dark:bg-teal-900/40 dark:text-[#00d1dc]">
                <List size={22} />
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
                Multiple Choice
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">MCQ</span>
            </button>

            {/* Text Area Option */}
            <button
              type="button"
              onClick={() => setQuestionType("textarea")}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 p-5 transition-all ${
                questionType === "textarea"
                  ? "border-[#00b7c1] bg-[#f2fafb] dark:border-[#00d1dc] dark:bg-teal-950/30"
                  : "border-gray-200 bg-gray-50 hover:border-gray-300 dark:border-gray-800 dark:bg-[#222325]"
              }`}
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200/60 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                <AlignLeft size={22} />
              </div>
              <span className="text-xs font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
                Text Area
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">Long answer</span>
            </button>
          </div>
        </div>

        {/* Step 2: Configure Question */}
        <div className="space-y-4">
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
            2. Configure your question
          </label>

          {/* Question Text */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
              Question Text
            </label>
            <input
              type="text"
              required
              value={questionText}
              onChange={e => setQuestionText(e.target.value)}
              placeholder="Enter Your Question Here..."
              className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--color-form)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder-gray-400 focus:border-[#00b7c1] focus:outline-none dark:border-gray-800 dark:bg-[#222325] dark:text-[var(--color-text-primary-dark)] dark:placeholder-gray-500"
            />
          </div>

          {/* Choices Input List (for MCQ) */}
          {questionType === "mcq" && (
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                Choices
              </label>
              <div className="space-y-2">
                {choices.map((choice, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={choice}
                      onChange={e => handleChoiceChange(index, e.target.value)}
                      placeholder={`Choice ${index + 1}`}
                      className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--color-form)] px-4 py-2 text-sm text-[var(--color-text-primary)] placeholder-gray-400 focus:border-[#00b7c1] focus:outline-none dark:border-gray-800 dark:bg-[#222325] dark:text-[var(--color-text-primary-dark)] dark:placeholder-gray-500"
                    />
                    {choices.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveChoice(index)}
                        className="p-1 text-red-500 hover:text-red-700 dark:text-red-400"
                        aria-label="Remove choice"
                      >
                        <MinusCircle size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Choice Action */}
              <button
                type="button"
                onClick={handleAddChoice}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00b7c1] hover:underline dark:text-[#00d1dc]"
              >
                <PlusCircle size={16} />
                Add choice
              </button>
            </div>
          )}

          {/* Required Question Checkbox */}
          <div className="pt-2">
            <label className="inline-flex cursor-pointer items-center gap-2.5 text-xs font-medium text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={isRequired}
                  onChange={e => setIsRequired(e.target.checked)}
                  className="peer h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:border-[#00b7c1] checked:bg-[#00b7c1] dark:border-gray-700 dark:bg-[#222325]"
                />
                <Check
                  size={12}
                  className="pointer-events-none absolute left-0.5 text-white opacity-0 peer-checked:opacity-100"
                />
              </div>
              <span>Required Question</span>
            </label>
          </div>
        </div>

        {/* Save Question Submit Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-[#00b7c1] py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#009da5] active:scale-[0.99] dark:bg-[#00d1dc] dark:text-black dark:hover:bg-[#00b7c1]"
        >
          Save Question
        </button>
      </form>
    </div>
  );
}
