import React from "react";
import Images from "../atoms/Images";
import { StaticImageData } from "next/image";
import { heroImage } from "@/assets/images/images";
import { cn } from "@/lib/cn";

interface Props {
  src?: string | StaticImageData;
  alt?: string;
  imgHeight?: number;
  imgWidth?: number;
  className?: string;
  children?: React.ReactNode;
  content?: React.ReactNode;
}

export default function HeroSection({
  src = heroImage,
  alt = "hero-image",
  imgHeight = 450,
  imgWidth = 450,
  className = "",
  children,
  content,
}: Props) {
  const innerContent = children || content;
  return (
    <div className={cn("ds-container flex h-[90vh] flex-col items-center justify-between md:flex-row gap-8", className)}>
      <div className="w-full md:w-[50%]">{innerContent}</div>
      <div className="w-full md:w-[50%] flex justify-center">
        <Images src={src} alt={alt} width={imgWidth} height={imgHeight} />
      </div>
    </div>
  );
}
