import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

interface Props {
  title: string;
  text: string;
}

export default function StepText({ title, text }: Props) {
  return (
    <div className="ds-bg-card ds-border-card ds-rounded-md ds-shadow-card flex flex-col gap-2 px-4 py-6 text-center">
      <Title
        size="sm"
        variant="secondary"
        isCenter
        className="font-semibold tracking-wider uppercase"
      >
        {title}
      </Title>
      <Text size="lg" className="ds-text-alt font-bold" isCenter>
        {text}
      </Text>
    </div>
  );
}
