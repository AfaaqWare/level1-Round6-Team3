import React, { useState } from "react";
import { Clock3, Link, Copy } from "@/assets/icons/icons";
import Title from "@/shared/components/atoms/Title";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useGetSurveyById } from "@/modules/survey/hooks/useGetSurveyById";

import { ENV } from "@/config/env";
function SurveyOverview({ publicLink }: { publicLink: string }) {
  const [copyText, setCopyText] = useState(false);
  const t = useTranslations("dashboard.mySurveys");
  const params = useParams();

  const { data } = useGetSurveyById(params.id as string);

  return (
    <div className="ds-bg-card min-w-0 rounded-[15px] p-[18px] sm:p-[29px_18px_19px]">
      <Title size="md">{t("overview.title")}</Title>

      <div className="flex flex-col">
        {/* Survey ID */}
        <div className="flex min-w-0 items-center gap-3 py-3">
          <Clock3 size={14} className="shrink-0 text-[#636978]" />

          <span className="shrink-0 text-[10px] text-[#636978]">{t("overview.surveyId")}</span>

          <span className="min-w-0 truncate text-sm text-[10px] text-[#636978]">{data?.id}</span>

        </div>

        <div className="h-[1px] w-full bg-[#E7E8ED]" />

        {/* Status */}
        <div className="flex items-center gap-3 py-3">
          <Clock3 size={14} className="shrink-0 text-[#636978]" />

          <span className="text-[10px] text-[#636978]">{t("overview.status")}</span>

          <span className="rounded-md bg-[#FEEDDA] px-3 py-1 text-[10px] text-orange-500">
            {data?.status}
          </span>
        </div>

        <div className="h-[1px] w-full bg-[#E7E8ED]" />

        {/* Created At */}
        <div className="flex flex-wrap items-center gap-3 py-3">
          <Clock3 size={14} className="shrink-0 text-[#636978]" />

          <span className="text-[10px] text-[#636978]">{t("overview.createdAt")}</span>

          <span className="text-[10px] text-[#636978]">{data?.createdAt}</span>
        </div>

        <div className="h-[1px] w-full bg-[#E7E8ED]" />

        {/* Updated At */}
        <div className="flex flex-wrap items-center gap-3 py-3">
          <Clock3 size={14} className="shrink-0 text-[#636978]" />

          <span className="text-[10px] text-[#636978]">{t("overview.updatedAt")}</span>

          <span className="text-[10px] text-[#636978]">{data?.updatedAt}</span>
        </div>

        <div className="h-[1px] w-full bg-[#E7E8ED]" />

        {/* Link */}
        <div className="flex min-w-0 items-center gap-3 py-3">
          <Link size={14} className="shrink-0 text-[#636978]" />

          <span className="shrink-0 text-[10px] text-[#636978]">{t("overview.link")}</span>

          <button
            className="flex w-75 justify-between"
            onClick={() => {
              if(!publicLink) return;
              navigator.clipboard.writeText(`${ENV.SITE_URL}/survey/${publicLink}`);
              setCopyText(true);
              setTimeout(()=>setCopyText(false),1500)
            }}
          >
            <span className="min-w-0 truncate text-[10px] text-[#636978]">
              {publicLink ? ` ${ENV.SITE_URL}/survey/${publicLink}` : t("overview.noPublishedLink")}
            </span>

            <div className="relative">
              <Copy size={14} className="shrink-0 cursor-pointer text-[#636978]" />

              {copyText && (
                <span className="absolute right-0 bottom-5 rounded bg-black px-2 py-1 text-[10px] whitespace-nowrap text-white">
                  Copied!
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SurveyOverview;
