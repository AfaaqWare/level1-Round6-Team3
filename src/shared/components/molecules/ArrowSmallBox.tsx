import React from "react";
import Text from "../atoms/Text";
import { ArrowRight } from "lucide-react";

interface Props {
  text: string;
}

export default function ArrowSmallBox({ text }: Props) {
  return (
    <div className="flex items-center justify-between ds-bg-card ds-rounded-lg p-3 ds-border border-gray-100 ds-shadow-sm">
      <Text size="sm" className="font-medium">{text}</Text>
      <ArrowRight className="h-4 w-4 ds-text-alt" />
    </div>
  );
}
