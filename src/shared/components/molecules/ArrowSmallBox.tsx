import React from "react";
import Text from "../atoms/Text";
import { ArrowRight } from "lucide-react";

interface Props {
  text: string;
}

export default function ArrowSmallBox({ text }: Props) {
  return (
    <div className="ds-bg-card ds-rounded-lg ds-border ds-shadow-sm flex items-center justify-between border-gray-100 p-3">
      <Text size="sm" className="font-medium">
        {text}
      </Text>
      <ArrowRight className="ds-text-alt h-4 w-4" />
    </div>
  );
}
