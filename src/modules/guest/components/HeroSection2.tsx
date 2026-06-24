import React from "react";
import HeroSection from "@/shared/components/organisms/HeroSection";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { hero2 } from "@/assets/images/images";
import Buttons from "@/shared/components/molecules/Buttons";
import Button from "@/shared/components/atoms/Button";
interface Props {
  className?: string;
}
export default function Herosection2({ className = "" }: Props) {
  return (
    <HeroSection className={className} src={hero2}>
      <Title variant="primary" size="lg">
        Simple Smart <span className="ds-text-alt">Surveys</span>
      </Title>
      <Text size="md" variant="disabled" className="w-full text-lg text-white md:w-2/3">
        Create surveys, share them easily, and get real feedback. Survey Land lets you build MCQs,
        comment boxes, and more — all in one simple platform.
      </Text>
      <Buttons>
        <Button variant="primary" size="md">
          Exolore
        </Button>
        <Button variant="outline1" size="md">
          Create
        </Button>
      </Buttons>
    </HeroSection>
  );
}
