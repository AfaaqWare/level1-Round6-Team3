import React from 'react'
import CoverPlaceHolder from "@/assets/images/surveyCoverPlaceholder.png";
import Image from "@/shared/components/atoms/Image";
import { useGetSurveyById } from "@/modules/survey/hooks/useGetSurveyById";
import { useParams } from "next/navigation";

function SurveyCover() {
const params = useParams();
    
  const { data } = useGetSurveyById(params.id as string);


  return (
      <div className="flex w-full items-center justify-center">
              <Image
                width={361}
                height={241}
                src={data?.cover || CoverPlaceHolder}
                alt={data?.title || "Survey cover"}
                className="w-full max-w-[361px] overflow-hidden rounded-[10px]"
              />
            </div>
  )
}

export default SurveyCover
