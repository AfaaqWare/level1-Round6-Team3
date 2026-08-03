import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import { Check } from "@/assets/icons/icons";

interface PricingCard2Props {
  title?: string;
  description?: string;
  price?: number;
  billingCycle?: "monthly" | "yearly";
  features?: string[];
  buttonText?: string;
}

export default function PricingCard2({
  title = "title",
  description = "description",
  price = 0,
  billingCycle = "monthly",
  features = ["feature1", "feature2"],
  buttonText = "Choose Plan",
}: PricingCard2Props) {
  return (
    <div className={`ds-bg-card ds-border-card ds-rounded-xl ds-shadow-card flex flex-col gap-3 p-8`}>
      <div>
        <Title size="md" variant="primary" className="ds-font-heading mb-3 font-medium">
          {title}
        </Title>
        <Text size="base" variant="secondary" className="ds-font-sans mb-3 font-normal">
          {description}
        </Text>
      </div>

      <div className="mb-2 flex items-end gap-2">
        <Title size="xl" variant="primary" className="ds-font-sans leading-none font-bold">
          ${price}
        </Title>
        <Text size="base" variant="disabled" className="ds-font-sans mb-1 font-medium">
          /{billingCycle}
        </Text>
      </div>

      <div>
        <Title size="base" variant="primary" className="ds-font-sans mb-4 font-semibold">
          What&apos;s included
        </Title>
        <ul className="mb-3 flex flex-col gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="ds-bg-primary flex h-6 w-6 items-center justify-center rounded-full">
                <Check size={14} className="text-white" />
              </div>
              <Text size="base" variant="primary" className="ds-font-sans font-normal">
                {feature}
              </Text>
            </li>
          ))}
        </ul>
      </div>

      <Button size="md" fullWidth isRounded>
        {buttonText}
      </Button>
    </div>
  );
}
