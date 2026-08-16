import React from "react";
import StatsCard from "../molecules/StatsCard";

type StatsIcon = "clipboard" | "send" | "chart" | "users";

interface SurveyStat {
  id: string;
  title: string;
  variant: "teal" | "orange" | "green" | "purple" | "blue";
  icon: StatsIcon;
}

interface SurveyStatsSectionProps {
  stats: SurveyStat[];
  className?: string;
}

export default function SurveyStatsSection({ stats, className }: SurveyStatsSectionProps) {
  return (
    <section className={className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {stats.map(stat => (
          <StatsCard key={stat.id} variant={stat.variant} icon={stat.icon} title={stat.title} />
        ))}
      </div>
    </section>
  );
}
