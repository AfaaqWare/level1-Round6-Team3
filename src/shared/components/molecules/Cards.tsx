"use client";
import { StaticImageData } from "next/image";
import Button from "../atoms/Button";
import Images from "../atoms/Images";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { card1 } from "@/assets/images/images";
import { useTranslations } from "next-intl";
interface Props {
  src: string | StaticImageData;
  alt: string;
  title: string;
  text: string;
}
export default function Cards({ src = card1, alt, title, text }: Props) {
  const t = useTranslations("publicPages.home.educationSection");
  return (
    <div className="ds-bg-alt ds-border-card ds-shadow-card flex flex-col items-center justify-center rounded-lg px-5 py-10">
      <Images src={src} alt={alt} className="w-full" />
      <Title size="md" isCenter={true} className="my-5">
        {t(title)}
      </Title>
      <Text isCenter={true} className="mb-5">
        {t(text)}
      </Text>
      <Button>{t("cards.btn")}</Button>
    </div>
  );
}
