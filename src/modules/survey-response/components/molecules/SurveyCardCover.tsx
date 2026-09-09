"use client";

import { useTranslations } from "next-intl";
import Text from "@/shared/components/atoms/Text";
import AppImage from "@/shared/components/atoms/Image";
import { ImageIcon } from "@/assets/icons/icons";
import SurveyCardMenu from "./SurveyCardMenu";

interface SurveyCardCoverProps {
  cover: string;
  title: string;
  surveyId: string;
  onPublish: () => void;
  onCopyLink: () => void;
  onDelete: () => void;
  isPublishing?: boolean;
  isDeleting?: boolean;
}

export default function SurveyCardCover({
  cover,
  title,
  surveyId,
  onPublish,
  onCopyLink,
  onDelete,
  isPublishing,
  isDeleting,
}: SurveyCardCoverProps) {
  const t = useTranslations("dashboard.surveys.card");

  return (
    <div className="ds-bg-form pointer-events-none relative aspect-16/9 w-full shrink-0">
      <SurveyCardMenu
        surveyId={surveyId}
        onPublish={onPublish}
        onCopyLink={onCopyLink}
        onDelete={onDelete}
        isPublishing={isPublishing}
        isDeleting={isDeleting}
        className="pointer-events-auto absolute end-3 top-3 z-10"
      />

      {cover ? (
        <AppImage
          src={cover}
          alt={title}
          fill
          className="!absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
        />
      ) : (
        <div className="ds-bg-form flex h-full w-full flex-col items-center justify-center gap-1.5">
          <ImageIcon size={32} className="ds-text-disabled" />
          <Text size="xs" variant="disabled">
            {t("noCover")}
          </Text>
        </div>
      )}
    </div>
  );
}
