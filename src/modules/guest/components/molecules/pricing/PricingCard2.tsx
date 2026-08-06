import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import { Check } from "@/assets/icons/icons";

interface PricingCard2Props {
  title: string;
  description: string;
  price: string;
  period: string;
  featuresTitle: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

export default function PricingCard2({
  title,
  description,
  price,
  period,
  featuresTitle,
  features,
  buttonText,
  highlighted,
}: PricingCard2Props) {
  const baseClasses =
    "ds-rounded-xl ds-shadow-card flex flex-col gap-3 p-8 relative transition-transform";
  const highlightedClasses = "ds-bg-primary -translate-y-10 z-10 ";
  const defaultClasses = "ds-bg-card ds-border-card";
  const variantClasses = highlighted ? highlightedClasses : defaultClasses;

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <div>
        <Title
          size="md"
          variant={highlighted ? "white" : "primary"}
          className="ds-font-heading mb-3 font-medium"
        >
          {title}
        </Title>
        <Text
          size="base"
          variant={highlighted ? "white" : "secondary"}
          className="ds-font-sans mb-3 font-normal"
        >
          {description}
        </Text>
      </div>

      <div className="mb-2 flex items-end gap-2">
        <Title
          size="xl"
          variant={highlighted ? "white" : "primary"}
          className="ds-font-sans leading-none font-bold"
        >
          {price}
        </Title>
        <Text size="base" variant="disabled" className="ds-font-sans mb-1 font-medium">
          {period}
        </Text>
      </div>

      <div>
        <Title
          size="base"
          variant={highlighted ? "white" : "primary"}
          className="ds-font-sans mb-4 font-semibold"
        >
          {featuresTitle}
        </Title>
        <ul className="mb-3 flex flex-col gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  highlighted ? "bg-white" : "ds-bg-primary"
                }`}
              >
                <Check size={14} className={highlighted ? "text-primary" : "text-white"} />
              </div>
              <Text
                size="base"
                variant={highlighted ? "white" : "primary"}
                className="ds-font-sans font-normal"
              >
                {feature}
              </Text>
            </li>
          ))}
        </ul>
      </div>

      <Button size="md" fullWidth isRounded variant={highlighted ? "white" : "primary"}>
        {buttonText}
      </Button>
    </div>
  );
}
