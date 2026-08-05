import React from "react";
import HeroSection from "@/shared/components/organisms/Herosection";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { hero3 } from "@/assets/images/images";
import Button from "@/shared/components/atoms/Button";
interface Props {
  className?: string;
}
export default function Herosection3({ className = "" }: Props) {
  return (
    <HeroSection className={className} src={hero3}>
      <div className="flex flex-col items-center gap-5">
        <Title variant="primary" size="xl">
          Our <span className="ds-text-alt">mission</span>
        </Title>
        <Text
          size="md"
          variant="disabled"
          className="w-full text-center text-lg text-white md:w-2/3"
        >
          Founded in 2012, Typeform is now a remote-first company with an international team of over
          250 employees. We offer competitive compensation, benefits, and career opportunites to
          support your professional growth.
        </Text>
        <Button variant="primary" size="md">
          Browse Open Roles
        </Button>
      </div>
    </HeroSection>
  );
}
