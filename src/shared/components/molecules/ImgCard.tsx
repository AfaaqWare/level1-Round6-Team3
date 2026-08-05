import React from "react";
import { StaticImageData } from "next/image";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import AppImage from "../atoms/Image";

interface Props {
  src: string | StaticImageData;
  alt?: string;
  title: string;
  titleSize?: "sm" | "base" | "md" | "lg" | "xl";
  titleVariant?: "primary" | "disabled" | "secondary" | "alt";
  text: string;
  btn: string;
}

export default function ImgCard({
  src,
  alt = "card image",
  title,
  titleSize = "md",
  titleVariant,
  text,
  btn,
}: Props) {
  return (
    <div className="ds-bg-card ds-border-card ds-rounded-md ds-shadow-card flex w-full flex-col p-5 transition-all duration-200 hover:scale-[1.01]">
      <div className="ds-rounded-md relative h-[200px] w-full overflow-hidden">
        <AppImage src={src} alt={alt} fill objectFit="cover" />
      </div>

      <div className="flex flex-1 flex-col items-center justify-between gap-4 pt-6 pb-3 text-center">
        <div className="flex flex-col gap-3">
          <Title
            size={titleSize}
            variant={titleVariant}
            className="ds-card-title leading-tight font-semibold normal-case"
          >
            {title}
          </Title>
          <Text size="sm" variant="secondary" isCenter className="ds-card-text leading-relaxed">
            {text}
          </Text>
        </div>
        <Button variant="primary" size="md" className="ds-btn-text mx-auto mt-2 min-w-[160px]">
          {btn}
        </Button>
      </div>
    </div>
  );
}
