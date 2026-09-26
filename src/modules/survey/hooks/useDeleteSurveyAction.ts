"use client";

import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Swal from "sweetalert2";
import useDeleteSurvey from "@/modules/survey-response/hooks/useDeleteSurvey";

export interface UseDeleteSurveyActionResult {
  confirmDelete: (surveyId: string, onSuccess?: () => void) => void;
  isPending: boolean;
}

export default function useDeleteSurveyAction(): UseDeleteSurveyActionResult {
  const menuT = useTranslations("dashboard.surveys.card.menu");
  const locale = useLocale();
  const deleteMutation = useDeleteSurvey();

  const showSuccess = (title: string) => {
    void Swal.fire({ icon: "success", title, confirmButtonText: menuT("ok") });
  };

  const showError = (text: string) => {
    void Swal.fire({ icon: "error", title: menuT("errorTitle"), text, confirmButtonText: menuT("ok") });
  };

  const confirmDelete = (surveyId: string, onSuccess?: () => void) => {
    void Swal.fire({
      title: menuT("deleteConfirmTitle"),
      text: menuT("deleteConfirmText", { title: "" }),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: menuT("delete"),
      cancelButtonText: menuT("cancel"),
      confirmButtonColor: "var(--color-error)",
      cancelButtonColor: "var(--color-text-secondary)",
      reverseButtons: locale === "ar",
    }).then(result => {
      if (!result.isConfirmed) return;

      deleteMutation.mutate(surveyId, {
        onSuccess: () => {
          showSuccess(menuT("deleteSuccessTitle"));
          onSuccess?.();
        },
        onError: () => showError(menuT("deleteErrorText")),
      });
    });
  };

  return { confirmDelete, isPending: deleteMutation.isPending };
}