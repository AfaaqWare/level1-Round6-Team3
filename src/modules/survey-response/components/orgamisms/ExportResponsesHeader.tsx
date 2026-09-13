"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Swal from "sweetalert2";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import { Pencil, Send } from "@/assets/icons/icons";
import usePublishSurveyLink from "../../hooks/usePublishSurveyLink";
import type { Survey } from "../../types/survey";

interface ExportResponsesHeaderProps {
  survey: Survey;
}

export default function ExportResponsesHeader({ survey }: ExportResponsesHeaderProps) {
  const t = useTranslations("dashboard.surveysExport");
  const tMenu = useTranslations("dashboard.surveys.card.menu");
  const publishMutation = usePublishSurveyLink();

  const showSuccess = (title: string, value?: string | null) => {
    void Swal.fire({
      icon: "success",
      title,
      html: value
        ? `<div style="font-weight:700;word-break:break-all">${value}</div><div style="opacity:.7;margin-top:4px">${tMenu(
            "operationSuccess"
          )}</div>`
        : `<div style="opacity:.7">${tMenu("operationSuccess")}</div>`,
      confirmButtonText: tMenu("ok"),
    });
  };

  const showError = (text: string) => {
    void Swal.fire({
      icon: "error",
      title: tMenu("errorTitle"),
      text,
      confirmButtonText: tMenu("ok"),
    });
  };

  const handleShare = async () => {
    let link = survey.link;

    if (!link) {
      try {
        const updated = await publishMutation.mutateAsync(survey.id);
        link = updated.link;
      } catch {
        showError(tMenu("copyLinkErrorText"));
        return;
      }
    }

    if (!link) {
      showError(tMenu("copyLinkErrorText"));
      return;
    }

    try {
      await navigator.clipboard.writeText(link);
      showSuccess(tMenu("copyLinkSuccessTitle"), link);
    } catch {
      showError(tMenu("copyLinkErrorText"));
    }
  };

  return (
    <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <Title size="md">{t("title")}</Title>
        <Text variant="secondary" size="sm" className="mt-1">
          {t("subtitle")}
        </Text>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link href={`/dashboard/my-surveys/${survey.id}/edit`}>
          <Button
            variant="outline"
            size="md"
            className="!border-[var(--border-color)] !px-10 !text-[var(--color-text-secondary)]"
          >
            <Icon IconComponent={Pencil} size="xs" variant="secondary" />
            {t("edit")}
          </Button>
        </Link>

        <Button
          variant="primaryWhite"
          size="md"
          onClick={() => void handleShare()}
          disabled={publishMutation.isPending}
        >
          <Icon IconComponent={Send} size="xs" color="#ffffff" />
          {t("shareSurvey")}
        </Button>
      </div>
    </section>
  );
}
