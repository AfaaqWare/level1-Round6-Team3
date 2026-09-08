import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";

interface Props {
  value?: number;
  text?: string;
}

export default function TradingCard({ value = 2000, text = "text" }: Props) {
  return (
    <div className="ds-bg-card ds-border-card ds-shadow-card ds-rounded-md flex flex-col gap-3 py-6">
      <Title size="md" variant="primary" isCenter className="ds-font-heading mx-auto font-normal">
        ${value}
      </Title>

      <Text
        size="base"
        variant="primary"
        isCenter
        className="ds-font-heading mx-auto px-4 font-semibold"
      >
        {text}
      </Text>
    </div>
  );
}
