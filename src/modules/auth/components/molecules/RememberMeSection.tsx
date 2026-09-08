import Link from "next/link";

interface RememberMeSectionProps {
  checkbox: React.ReactNode;
  forgotPasswordHref: string;
  forgotPasswordLabel?: string;
}

export default function RememberMeSection({
  checkbox,
  forgotPasswordHref = "/forgot-password",
  forgotPasswordLabel,
}: RememberMeSectionProps) {
  return (
    <div className="-mt-3 flex flex-wrap items-center justify-between gap-[var(--space-md)]">
      {checkbox}

      <Link
        href={forgotPasswordHref}
        className="ds-text-sm ds-text-alt font-medium hover:underline"
      >
        {forgotPasswordLabel}
      </Link>
    </div>
  );
}
