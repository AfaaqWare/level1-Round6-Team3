import React from "react";
import Text from "@/shared/components/atoms/Text";
import type { ResponseCardProps2 } from "@/modules/responses/type/allResponses";
import Image from "next/image";
import { cn } from "@/lib/cn";

function ResponseCard({ iconCard, text1, text2, text3, bg }: ResponseCardProps2) {
  return (
    <main className="ds-bg-card flex gap-[10px] rounded-[6px] p-[17px_32px_32px_18px]">
      <section className={cn("mt-[17px] h-[50px] w-[50px] rounded-[4px] p-[9px_9px_9px_11px]", bg)}>
        <Image className="w-[30px]" src={iconCard} alt="icon-card" />
      </section>

      <section className="ms-[17px] mt-[19px]">
        <Text size="xs">{text1}</Text>
        <Text className="my-[10px]">{text2}</Text>
        <Text size="xs">{text3}</Text>
      </section>
    </main>
  );
}

export default ResponseCard;
