import Link from "next/link";
import Icon from "@/shared/components/atoms/Icon";

type BackToSignInLinkProps = {
  label: string;
};

function BackToSignInLink({ label }: BackToSignInLinkProps) {
  return (
    <Link
      href="/sign-in"
      className="ds-text-base ds-text-secondary hover:ds-text-alt inline-flex items-center gap-[5px] font-bold transition-colors duration-[var(--motion-fast)] focus:shadow-[0_0_0_var(--focus-ring-width)_var(--focus-ring-color)] focus:outline-none"
    >
      <Icon name="ic:round-arrow-back" size={24} variant="secondary" className="size-6" />
      {label}
    </Link>
  );
}

export default BackToSignInLink;
