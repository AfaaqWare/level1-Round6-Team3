"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { LoaderCircle, Send } from "@/assets/icons/icons";
import Input from "@/shared/components/atoms/Input";
import TextArea from "@/shared/components/atoms/TextArea";
import Button from "@/shared/components/atoms/Button";
import { showToast } from "@/shared/utils/toast";
import { useUpdateSurvey } from "../../hooks/useUpdateSurvey";
import { publishSurveyLinkApi } from "@/modules/survey-response/api/publishSurveyLinkApi";
import {
  editSurveySchema,
  type EditSurveyFormData,
} from "@/validator/editSurveyValidation";
import DateTimeInput, { toDateTimeLocalValue } from "../molecules/DateTimeInput";
import SurveyStatusField from "../molecules/SurveyStatusField";
import type { Survey, SurveyStatus } from "@/modules/survey-response/types/survey";

interface EditSurveyFormProps {
  survey: Survey;
  coverFile: File | null;
}

export default function EditSurveyForm({ survey, coverFile }: EditSurveyFormProps) {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("dashboard.surveyEdit");
  const statusesT = useTranslations("dashboard.surveyEdit.statuses");
  const { mutate, isPending } = useUpdateSurvey(survey.id);

  const translateValidator = (key: string) => t(`validation.${key}`);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<EditSurveyFormData>({
    resolver: zodResolver(editSurveySchema(translateValidator)),
    values: {
      title: survey.title,
      description: survey.description,
      deadline: toDateTimeLocalValue(survey.deadline),
      status: survey.status,
    },
  });

  const statusLabels: Record<SurveyStatus, string> = {
    draft: statusesT("draft"),
    published: statusesT("published"),
    closed: statusesT("closed"),
  };

  const onSubmit = (data: EditSurveyFormData) => {
    mutate(
      {
        surveyId: survey.id,
        payload: {
          title: data.title,
          description: data.description,
          deadline: new Date(data.deadline).toISOString(),
          status: data.status,
          cover: survey.cover ?? undefined,
        },
      },
      {
        onSuccess: async () => {
          if (data.status === "published") {
            try {
              await publishSurveyLinkApi(survey.id);
            } catch (error) {
              console.error(error);
            }
          }
          showToast({ type: "success", message: t("toast.saveSuccess"), locale });
          router.back();
        },
        onError: () => {
          showToast({ type: "error", message: t("toast.saveError"), locale });
        },
      }
    );
  };

  const handleCancel = () => {
    const hasChanges = isDirty || coverFile !== null;

    if (!hasChanges) {
      router.back();
      return;
    }

    void Swal.fire({
      title: t("actions.discardTitle"),
      text: t("actions.discardText"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("actions.discardConfirm"),
      cancelButtonText: t("actions.discardCancel"),
      confirmButtonColor: "var(--color-error)",
      cancelButtonColor: "var(--color-text-secondary)",
      reverseButtons: locale === "ar",
    }).then(result => {
      if (result.isConfirmed) {
        router.back();
      }
    });
  };

  return (
    <form
      id="edit-survey-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="create-survey-form"
    >
      {/* Title */}
      <div className="create-survey-field">
        <Input
          id="edit-survey-title"
          label={t("fields.title.label")}
          required
          hint={t("fields.title.helper")}
          placeholder={t("fields.title.placeholder")}
          dir="auto"
          state={errors.title ? "error" : "default"}
          errorMessage={errors.title?.message}
          {...register("title")}
        />
      </div>

      {/* Description */}
      <div className="create-survey-field">
        <TextArea
          id="edit-survey-description"
          label={t("fields.description.label")}
          required
          hint={t("fields.description.helper")}
          placeholder={t("fields.description.placeholder")}
          dir="auto"
          rows={4}
          state={errors.description ? "error" : "default"}
          errorMessage={errors.description?.message}
          {...register("description")}
        />
      </div>

      {/* Deadline */}
      <div className="create-survey-field">
        <Controller
          control={control}
          name="deadline"
          render={({ field }) => (
            <DateTimeInput
              id="edit-survey-deadline"
              label={t("fields.deadline.label")}
              required
              helper={t("fields.deadline.helper")}
              placeholder={t("fields.deadline.placeholder")}
              clearLabel={t("fields.deadline.clear")}
              error={errors.deadline?.message}
              value={field.value}
              onChange={field.onChange}
              locale={locale}
            />
          )}
        />
      </div>

      {/* Status */}
      <div className="create-survey-field">
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <SurveyStatusField
              id="edit-survey-status"
              label={t("fields.status.label")}
              helper={t("fields.status.helper")}
              value={field.value}
              onChange={field.onChange}
              labels={statusLabels}
              error={errors.status?.message}
            />
          )}
        />
      </div>

      {/* Actions */}
      <div className="mt-2 flex flex-col-reverse items-stretch justify-end gap-3 sm:flex-row sm:items-center">
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={handleCancel}
          disabled={isPending}
        >
          {t("actions.cancel")}
        </Button>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={isPending}
          id="edit-survey-save-btn"
        >
          {isPending ? t("actions.saving") : t("actions.save")}
          {isPending ? (
            <LoaderCircle size={16} className="animate-spin" />
          ) : (
            <Send size={16} />
          )}
        </Button>
      </div>
    </form>
  );
}