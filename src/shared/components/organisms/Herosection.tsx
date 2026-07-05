import React from "react";
import Images from "../atoms/Images";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { StaticImageData } from "next/image";
import { heroImage } from "@/assets/images/images";
import { cn } from "@/lib/cn";

interface Props {
  title: string;
  titleHighlight?: string;
  text: string;
  button1: string;
  button2?: string;
  imagePosition?: "left" | "right";
  textAlign?: "center" | "start";
  textAlignment?: "center" | "start";
  src?: string | StaticImageData;
  alt?: string;
  className?: string;
}

function highlightTitle(title: string, highlight?: string) {
  if (!highlight) return title;
  const index = title.indexOf(highlight);
  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <span className="ds-text-alt">{highlight}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

export default function Herosection({
  title,
  titleHighlight,
  text,
  button1,
  button2,
  imagePosition = "right",
  textAlign = "start",
  textAlignment,
  src = heroImage,
  alt = "hero-image",
  className = "",
}: Props) {
  return (
    <section className={cn("ds-container py-16 md:py-20 lg:py-24", className)}>
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12 lg:gap-16">
        <div
          className={cn(
            "w-full md:w-1/2",
            imagePosition === "left" ? "md:order-2" : "md:order-1"
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-6",
              textAlign === "center"
                ? "items-center text-center"
                : "items-start text-start"
            )}
          >
            <Title
              variant="primary"
              size="xl"
              className={cn(
                "ds-font-heading font-semibold",
                textAlign === "center" && "text-center lg:text-start"
              )}
            >
              {highlightTitle(title, titleHighlight)}
            </Title>
            <Text
              size="md"
              variant="secondary"
              className={cn(
                "ds-font-sans w-full font-normal",
                (textAlignment ?? textAlign) === "center"
                  ? "md:w-2/3 lg:w-full text-center"
                  : "text-start"
              )}
            >
              {text}
            </Text>
            <div
              className={cn(
                "flex w-full flex-col gap-4 sm:w-auto sm:flex-row",
                textAlign === "center" && "mx-auto lg:mx-0"
              )}
            >
              <Button
                variant="primary"
                size="md"
                className="ds-font-sans w-full !px-16 sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                {button1}
              </Button>
              {button2 && (
                <Button
                  variant="outline"
                  size="md"
                  className="ds-font-sans ds-bg-alt w-full !px-16 sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  {button2}
                </Button>
              )}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "w-full md:w-1/2 flex justify-center",
            imagePosition === "left" ? "md:order-1" : "md:order-2"
          )}
        >
          <Images src={src} className="rounded-xl" alt={alt} width={600} height={600} />
        </div>
      </div>
    </section>
  );
}
