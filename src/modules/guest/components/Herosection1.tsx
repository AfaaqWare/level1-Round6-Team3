import React from "react";
import HeroSection from "@/shared/components/organisms/Herosection";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import Buttons from "@/shared/components/molecules/Buttons";
export default function Herosection1() {
  return (
    <HeroSection>
      <Title size="lg" variant="primary">
        Turn <span className="ds-text-alt">Questions</span> into Clarity and Transform{" "}
        <span className="ds-text-alt">Responses</span> into Valuable Insights{" "}
      </Title>
      <Text size="md" variant="disabled">
        Effortlessly build surveys that deliver the answers you need to grow, improve, and connect
        with your audience.
      </Text>
      <Buttons>
        <Button size="md" variant="primary">
          Create Your Survey{" "}
        </Button>
        <Button variant="outline1" size="md">
          See How It Works{" "}
        </Button>
      </Buttons>
    </HeroSection>
  );
}
