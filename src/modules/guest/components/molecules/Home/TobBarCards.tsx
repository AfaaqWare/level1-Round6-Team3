import { ArrowRight } from "lucide-react";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

interface Props {
  number?: string;
  title?: string;
  highlightText?: string;
  isNumber?: boolean;
  btn?:string;
}

export default function TopBarCards({
  number = "3",
  title = "title",
  highlightText = "highlightText",
  btn,
  isNumber = false,
}: Props) {
  return (
    <div className="mt-7 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {isNumber && <span className="text-lg font-semibold">{number}.</span>}

        <Title variant="primary" size="lg" className="font-semibold normal-case">
          {title} <span className="ds-text-alt">{highlightText}</span>
        </Title>
      </div>

      <div className="flex cursor-pointer items-center gap-1">
        <Text size="md">View all</Text>
        <Icon IconComponent={ArrowRight} />
      </div>
    </div>
  );
}
