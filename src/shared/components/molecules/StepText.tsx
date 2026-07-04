import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

interface Props {
  title: string;
  text: string;
}

export default function StepText({ title, text }: Props) {
  return (
    <div className="ds-bg-card ds-border-card ds-rounded-md ds-shadow-card flex flex-col gap-2 py-6 px-4 text-center">
      <Title size="sm" variant="secondary" isCenter className="font-semibold uppercase tracking-wider">
        {title}
      </Title>
      <Text size="lg" className="font-bold ds-text-alt" isCenter>
        {text}
      </Text>
    </div>
  );
}
