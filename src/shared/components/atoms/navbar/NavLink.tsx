import Link from "next/link";

interface Props {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({ to, children, onClick, className = "" }: Props) {
  return (
    <Link
      href={to}
      onClick={onClick}
      className={`active:text-primary focus:text-primary transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
