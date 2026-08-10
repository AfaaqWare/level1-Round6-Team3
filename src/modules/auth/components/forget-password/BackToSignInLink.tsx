import type { SVGProps } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Icon from "@/shared/components/atoms/Icon";

type BackToSignInLinkProps = {
  label: string;
};

function BackArrowIcon(props: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return <ArrowLeft {...props} strokeWidth={2.5} />;
}

function BackToSignInLink({ label }: BackToSignInLinkProps) {
  return (
    <Link
      href="/sign-in"
      className="ds-text-base ds-text-secondary hover:ds-text-alt inline-flex items-center gap-[5px] font-bold transition-colors duration-[var(--motion-fast)] focus-visible:shadow-[0_0_0_var(--focus-ring-width)_var(--focus-ring-color)] focus-visible:outline-none"
    >
      <Icon IconComponent={BackArrowIcon} size={24} variant="secondary" className="size-6" />
      {label}
    </Link>
  );
}

export default BackToSignInLink;
