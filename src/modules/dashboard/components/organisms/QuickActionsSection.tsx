import Title from "@/shared/components/atoms/Title";
import { quickActions } from "../../utils/data";
import QuickActionCard from "../molecules/QuickActionCard";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

export default function QuickActionsSection() {
  const t = useTranslations("dashboard.home.quickActions");

  return (
    <section className="ds-rounded-lg ds-bg-card w-full p-10">
      <Title size="sm" className="font-bold !text-[var(--color-text-dash-secondary)]">
        {t("title")}
      </Title>

      <div
        className={cn(
          "mt-10",
          "grid w-full gap-5",
          "grid-cols-1",
          "sm:grid-cols-2",
          "lg:grid-cols-4"
        )}
      >
        {quickActions.map(action => (
          <QuickActionCard key={action.id} {...action} />
        ))}
      </div>
    </section>
  );
}
