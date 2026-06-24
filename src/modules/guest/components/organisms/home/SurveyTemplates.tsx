import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import TopBarCards from "../../molecules/Home/TobBarCards";
import ImgCard from "@/shared/components/molecules/ImgCard";
import {
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
} from "@/assets/images/images";

interface Template {
  id: number;
  title: string;
  text: string;
}

export default function SurveyTemplates() {
  const t = useTranslations("publicPages.home.popularTemplatesSection");

  const templates = t.raw("templates") as Template[];

  const images = [cardImg1, cardImg2, cardImg3, cardImg4];

  return (
    <section className="ds-container">
      <Title size="lg" className="mt-5 font-semibold">
        {t("title")}
        <span className="ds-text-alt">{t("highlightTitle")}</span>
      </Title>

      <TopBarCards
        number={t("topBar.number")}
        title={t("topBar.title")}
        highlightText={t("topBar.highlightText")}
        isNumber
      />

      <div className="mt-7 flex gap-7 overflow-x-auto pb-2">
        {templates.map((template, index) => (
          <ImgCard
            key={template.id}
            src={images[index % images.length]}
            title={template.title}
            titleSize="md"
            text={template.text}
            btn={t("button")}
          />
        ))}
      </div>
    </section>
  );
}