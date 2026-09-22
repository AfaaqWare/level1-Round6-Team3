import { CalendarDays, Clock3 } from "@/assets/icons/icons";
import AppImage from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import IconText from "../molecules/IconText";
import { StaticImageData } from "next/image";

type SurveyDetailsCardProps = {
  title: string;
  description: string;
  deadline: string;
  duration: string;
  image: string | StaticImageData;
};

export default function SurveyDetailsCard({
  title,
  description,
  deadline,
  duration,
  image,
}: SurveyDetailsCardProps) {
  return (
    <section className="ds-bg-card ds-rounded-xl mt-12 mb-16 px-5 py-8 sm:px-6">
      <div className="space-y-3.5">
        <div className="ds-primary-200 ds-rounded-xl overflow-hidden">
          <AppImage
            src={image}
            alt={`${title} cover image`}
            width={1162}
            height={351}
            priority
            className="w-full [&_img]:h-[300px] [&_img]:w-full [&_img]:object-cover"
          />
        </div>
        <div className="space-y-2.5">
          <Title size="lg" className="normal-case">
            {title}
          </Title>

          <Text size="md" variant="disabled">
            {description}
          </Text>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <IconText IconComponent={CalendarDays} iconVariant="disabled" iconSize="xs">
            <Text size="xs" variant="disabled">
              {deadline}
            </Text>
          </IconText>

          <IconText IconComponent={Clock3} iconVariant="disabled" iconSize="xs">
            <Text size="xs" variant="disabled">
              {duration}
            </Text>
          </IconText>
        </div>
      </div>
    </section>
  );
}
