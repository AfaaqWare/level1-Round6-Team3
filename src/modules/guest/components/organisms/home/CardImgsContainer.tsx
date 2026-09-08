"use client";
import React from "react";
import { StaticImageData } from "next/image";
import ImageCard from "@/shared/components/molecules/ImgCard";
import { useTranslations } from "next-intl";
import TopBarCards from "../../molecules/Home/TobBarCards";
interface Props {
  cards: {
    id: number;
    img: StaticImageData;
    title: string;
    text: string;
  }[];
  trans: string;
}

export default function CardImgsContainer({ cards, trans }: Props) {
  const t = useTranslations(trans);

  return (
    <div className="ds-container py-10">
      <TopBarCards
        number={t("number")}
        title={t("title")}
        highlightText={t("subtitle")}
        isNumber
      />

      {/* cards container  */}
      <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4">
        {cards.map(card => (
          <ImageCard
            key={card.id}
            src={card.img}
            title={t(card.title)}
            titleSize="base"
            text={t(card.text)}
            btn={t("cards.btn")}
          />
        ))}
      </div>
      {/* // ----------------------------- // */}
    </div>
  );
}
