import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";

interface Props {
  title?: string;
  text?: string;
}

export default function StepCard({ title = "title", text = "text" }: Props) {
  return (
    <div className="ds-bg-card ds-border-card ds-rounded-md ds-shadow-card flex flex-col gap-3 py-9 text-center">
      <Title size="md" variant="alt" isCenter className="ds-font-heading mx-auto font-semibold">
        {title}
      </Title>

      <Text size="base" variant="disabled" isCenter className="mx-auto px-8 font-sans font-medium">
        {text}
      </Text>
    </div>
  );
}
