import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";

interface Props {
  title?: string;
  highlightText?: string;
  text?: string;
}

export default function Heading({
  title = "title",
  highlightText = "highlightText",
  text = "text",
}: Props) {
  return (
    <div className="flex flex-col gap-0.5 text-center">
      <Title variant="primary" size="lg" className="font-bold">
        {title} <span className="ds-text-alt">{highlightText}</span>
      </Title>
      <Text variant="disabled" size="md">
        {text}
      </Text>
    </div>
  );
}
