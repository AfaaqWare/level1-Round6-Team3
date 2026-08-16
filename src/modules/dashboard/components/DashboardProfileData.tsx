"use client";

import React from "react";

import { useGetProfileData } from "@/modules/dashboard/hooks/useGetProfileData";
import Image from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";

function DashboardProfileData() {
  const { data } = useGetProfileData();
  if (!data) return null;

  return (
    <div className="flex">
      <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
        <Image src={data?.image} alt={data?.name}  width={70} height={70} className={"rounded-full"} objectFit={"cover"} />
      </div>

      <div className="ms-[24px] mt-[12px]">
        <Text size="sm" >{data?.name}</Text>
        <Text size="base" variant="alt" className="ds-font-bold">{data?.role}</Text>
      </div>
    </div>
  );
}

export default DashboardProfileData;
