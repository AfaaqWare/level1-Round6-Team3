import Link from "next/link";
import Button from "@/shared/components/atoms/Button";

export interface AuthSheetProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function AuthSheet({ title, subtitle, ctaLabel, ctaHref }: AuthSheetProps) {
  return (
    <section className="ds-bg-primary flex w-full flex-1 flex-col items-center justify-center gap-[var(--space-xl)] px-6 py-16 text-center">
      <h2 className="ds-title-lg ds-text-white">{title}</h2>
      {subtitle && <p className="ds-text-base ds-text-white opacity-80">{subtitle}</p>}
      <Link href={ctaHref}>
        <Button variant="white" isRounded>
          {ctaLabel}
        </Button>
      </Link>
    </section>
  );
}
