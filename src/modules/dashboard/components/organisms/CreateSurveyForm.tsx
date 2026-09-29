"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Send, CalendarDays } from "@/assets/icons/icons";
import Input from "@/shared/components/atoms/Input";
import TextArea from "@/shared/components/atoms/TextArea";
import Button from "@/shared/components/atoms/Button";
import ImageDropZone from "../molecules/ImageDropZone";
import { useCreateSurvey } from "../../hooks/useCreateSurvey";
import {
  createSurveySchema,
  type CreateSurveyFormData,
} from "@/validator/createSurveyValidation";
import { toast } from "sonner";

export default function CreateSurveyForm() {
  const router = useRouter();
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const { mutate, isPending } = useCreateSurvey();

  // Simple validation error translator
  const t = (key: string) => {
    const messages: Record<string, string> = {
      titleRequired: "Title is required",
      titleMax: "Title must be at most 100 characters",
      descriptionRequired: "Description is required",
      descriptionMax: "Description must be at most 500 characters",
      deadlineRequired: "Deadline is required",
    };
    return messages[key] || key;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSurveyFormData>({
    resolver: zodResolver(createSurveySchema(t)),
    defaultValues: {
      title: "",
      description: "",
      deadline: "",
    },
  });

  // Get today's date in YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = (data: CreateSurveyFormData) => {
    mutate(
      {
        title: data.title,
        description: data.description,
        deadline: data.deadline,
        cover: coverFile ?? undefined,
      },
      {
        onSuccess: (response) => {
          toast.success("Survey created successfully!");
          const surveyId =
            response?.id ||
            (response as { _id?: string })?._id ||
            (response as { data?: { id?: string; _id?: string } })?.data?.id ||
            (response as { data?: { id?: string; _id?: string } })?.data?._id;

          if (surveyId) {
            router.push(`/dashboard/my-surveys/${surveyId}/add-question`);
          } else {
            router.push("/dashboard/my-surveys");
          }
        },
        onError: () => {
          toast.error("Failed to create survey. Please try again.");
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="create-survey-form"
      id="create-survey-form"
      noValidate
    >
      {/* Title */}
      <div className="create-survey-field">
        <Input
          label="Title"
          required
          hint="Give your survey a clear and descriptive title."
          placeholder="e.g. Customer Satisfaction Survey"
          state={errors.title ? "error" : "default"}
          errorMessage={errors.title?.message}
          id="create-survey-title"
          {...register("title")}
        />
      </div>

      {/* Description */}
      <div className="create-survey-field">
        <TextArea
          label="Description"
          required
          hint="Give your survey a clear and descriptive title."
          placeholder="e.g. Help us improve by sharing your experience"
          rows={4}
          state={errors.description ? "error" : "default"}
          errorMessage={errors.description?.message}
          id="create-survey-description"
          {...register("description")}
        />
      </div>

      {/* Deadline */}
      <div className="create-survey-field">
        <div className="flex flex-col gap-[var(--space-xs)]">
          <label
            htmlFor="create-survey-deadline"
            className="text-sm font-medium leading-none text-[var(--color-text-primary)]"
          >
            Deadline <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          </label>
          <p className="text-xs leading-snug text-[var(--color-text-secondary)]">
            Choose the last date of receiving responses
          </p>
          <div className="relative flex items-center">
            <span className="pointer-events-none absolute start-3 flex items-center text-[var(--color-text-disabled)]">
              <CalendarDays size={18} />
            </span>
            <input
              type="date"
              id="create-survey-deadline"
              min={today}
              className={`create-survey-date-input ${errors.deadline ? "has-error" : ""}`}
              {...register("deadline")}
            />
          </div>
          {errors.deadline && (
            <p role="alert" className="text-xs leading-snug text-red-500">
              {errors.deadline.message}
            </p>
          )}
        </div>
      </div>

      {/* Cover Image */}
      <div className="create-survey-field">
        <ImageDropZone onFileSelect={setCoverFile} />
      </div>

      {/* Submit */}
      <div className="create-survey-submit">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isPending}
          id="create-survey-submit-btn"
        >
          {isPending ? "Creating..." : "Create Survey"}
          <Send size={16} />
        </Button>
      </div>
    </form>
  );
}
