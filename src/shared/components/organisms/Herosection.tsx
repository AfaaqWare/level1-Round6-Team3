import React from "react";
import Images from "../atoms/Images";
import { StaticImageData } from "next/image";
import { heroImage } from "@/assets/images/images";
interface Props {
  content: React.ReactNode;
  alt?: string;
  src?: string | StaticImageData;
}
export default function Herosection({ content, src = heroImage, alt = "hero-image" }: Props) {
  return (
    <div className="ds-container flex h-[90vh] flex-col items-center justify-between md:flex-row">
      <div className="w-full md:w-[50%]">{content}</div>
      <div>
        <Images src={src} alt={alt} width={450} height={450} />
      </div>
    </div>
  );
}
