import React from 'react'
import Title from "@/shared/components/atoms/Title";
import Button from "@/shared/components/atoms/Button";
import { Pencil, Eye, Trash2 ,Link } from "@/assets/icons/icons";
import { useTranslations } from "next-intl";


function SurveyAction({handlePublishLink}) {
       

  const t = useTranslations("dashboard.mySurveys");
  return (
    <div className="ds-bg-card min-w-0 rounded-[15px] p-[18px] sm:p-[29px]">
          <Title size="md" className="mb-5">
            {t("quickActions.title")}
          </Title>

          <div className="flex flex-col gap-3">
            <Button size="md"  variant="outline" className="border-1 border-[#E7E8ED] justify-start">
              <Pencil size={13} />
             <span className="text-[10px]">{t("actions.edit")}</span> 
            </Button>

            <Button size="md"  variant="outline" className="border-1 border-[#E7E8ED] justify-start" onClick={handlePublishLink}>
              <Link size={13} />
             <span className="text-[10px]"> {t("actions.PublishLink")} </span>
            </Button>

            <Button size="md"  variant="outline" className="border-1 border-[#E7E8ED] justify-start" >
              <Eye  size={13}/>
             <span className="text-[10px]"> {t("actions.viewResponses")} </span>
            </Button>

            <Button size="md"  variant="outline" className="border-1 border-[#E7E8ED] justify-start ">
              <Trash2 className="text-red-500" size={13} />
              <span className="text-red-500 text-[10px]">{t("actions.delete")} </span>
            </Button>
          </div>
        </div>
  )
}

export default SurveyAction
