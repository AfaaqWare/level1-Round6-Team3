import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";

interface StepCardProps {
  title: string;
  description: string;
}

export default function StepCard({ title, description }: StepCardProps) {
  return (
    <div className="ds-bg-card ds-border-card ds-rounded-md ds-shadow-card flex flex-col gap-3 py-9 text-center">
      <Title size="md" variant="alt" isCenter className="ds-font-heading mx-auto font-semibold">
        {title}
      </Title>

      <Text size="base" variant="disabled" isCenter className="mx-auto px-8 font-medium">
        {description}
      </Text>
    </div>
  );
}
