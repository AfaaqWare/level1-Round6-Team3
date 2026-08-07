import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthPanel({ children }: Props) {
  return (
    <section className="ds-bg flex w-full flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-md">{children}</div>
    </section>
  );
}
