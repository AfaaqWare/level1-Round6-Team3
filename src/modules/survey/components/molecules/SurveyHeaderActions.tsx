import React from 'react'
import { useTranslations } from "next-intl";
import Button from "@/shared/components/atoms/Button";
import { Eye, Send, Pencil } from "@/assets/icons/icons";
function SurveyHeaderActions() {
      const t = useTranslations("dashboard.mySurveys");

  return (
    <div className="flex flex-wrap gap-[14px]">
          <Button size="sm" variant="outline" className="border-1 border-[#E7E8ED]">
            <Eye size={13}   className="text-[#636978]" />
            <span  className="text-[#636978] text-[10px]">{t("actions.preview")} </span>
          </Button>

          <Button size="sm" variant="outline" className="border-1 border-[#E7E8ED] ">
            <Pencil size={13}   className="text-[#636978]" />
            <span  className="text-[#636978] text-[10px]">{t("actions.edit")} </span>
          </Button>

          <Button size="sm"  >
            <Send size={13} className="text-[10px]"/>
            <span  className="text-[10px]">{t("actions.openBuilder")} </span>
          </Button>
        </div>
  )
}

export default SurveyHeaderActions
