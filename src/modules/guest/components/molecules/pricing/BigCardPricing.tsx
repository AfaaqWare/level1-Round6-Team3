import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { Check } from "@/assets/icons/icons";

interface Props {
  title: string;
  text: string;
  duration: Duration;
  features: string[];
  btn: string;
  isPrimary?: boolean;
  billingPeriod: "month" | "year";
}

interface Duration {
  month: Price;
  year: Price;
}

interface Price {
  price: number;
}

export default function BigCardPricing({
  title,
  text,
  duration,
  features,
  btn,
  isPrimary = false,
  billingPeriod,
}: Props) {
  const bgCard = isPrimary ? "ds-bg-primary" : "ds-bg-card";

  const colorButtonIcon = isPrimary ? "bg-white ds-text-alt" : "ds-bg-primary text-white";

  const position = isPrimary ? "-translate-y-10" : "";

  const price = billingPeriod === "year" ? duration.year.price : duration.month.price;

  return (
    <div className={`${bgCard} ${position} mt-8 flex w-80 flex-col gap-5 rounded-md p-7`}>
      <Title size="lg" className="font-semibold">
        {title}
      </Title>

      <Text>{text}</Text>

      <div>
        <span className="text-4xl font-semibold">${price}</span>
        <span className="ml-1">/{billingPeriod === "year" ? "yearly" : "monthly"}</span>
      </div>

      <Text className="font-semibold">What s included</Text>

      <ul className="flex flex-col gap-3">
        {features.map(feature => (
          <li key={feature} className="flex items-center gap-3">
            <div
              className={`${colorButtonIcon} flex h-6 w-6 items-center justify-center rounded-full`}
            >
              <Check size={14} />
            </div>

            <Text size="base" variant="primary" className="ds-font-sans font-normal">
              {feature}
            </Text>
          </li>
        ))}
      </ul>

      <button className={`ds-title-base rounded-full p-4 ${colorButtonIcon}`}>{btn}</button>
    </div>
  );
}
