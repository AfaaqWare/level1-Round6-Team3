import Link from "next/link";

interface Props {
  size?: "sm" | "lg";
}

export default function NavLogo({ size = "sm" }: Props) {
  return (
    <Link
      href="/"
      className={`text-light ds-text-primary font-bold ${size === "lg" ? "ds-title-lg" : "ds-title-sm"}`}
    >
      <span className="ds-text-alt">Survey</span>
      Land
    </Link>
  );
}
