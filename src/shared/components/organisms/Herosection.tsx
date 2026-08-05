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
  imagePosition?: "left" | "right";
}

export default function HeroSection({
  src = heroImage,
  alt = "hero-image",
  imgHeight = 450,
  imgWidth = 450,
  className = "",
  children,
  content,
  imagePosition = "right",
}: Props) {
  const innerContent = children || content;

  return (
    <div
      className={cn(
        "ds-container flex flex-col items-center justify-between gap-8 md:h-[90vh]",
        imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row",
        className
      )}
    >
      <div className="w-full md:w-1/2">{innerContent}</div>

      <div className="flex w-full justify-center md:w-1/2">
        <Images src={src} alt={alt} width={imgWidth} height={imgHeight} />
      </div>
    </div>
  );
}
