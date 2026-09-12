"use client";

import React from "react";
import { useTranslations } from "next-intl";
import ImageDropZone from "../molecules/ImageDropZone";

interface CoverImageCardProps {
  initialCover: string | null;
  onCoverChange: (file: File | null) => void;
}

export default function CoverImageCard({ initialCover, onCoverChange }: CoverImageCardProps) {
  const t = useTranslations("dashboard.surveyEdit.cover");

  return (
    <ImageDropZone
      id="edit-survey-cover-input"
      variant="card"
      initialPreview={initialCover}
      onFileSelect={onCoverChange}
      label={t("label")}
      helper={t("helper")}
      labels={{
        dragAndDrop: t("dragAndDrop"),
        or: t("or"),
        chooseFile: t("chooseFile"),
        hint: t("hint"),
        remove: t("remove"),
        alt: t("previewAlt"),
        errorType: t("errorType"),
        errorSize: t("errorSize"),
      }}
    />
  );
}