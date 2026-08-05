interface FAQFormTypePillProps {
  text: string;
}

export default function FAQFormTypePill({ text }: FAQFormTypePillProps) {
  return (
    <div className="ds-primary-200 ds-border-sm ds-border-muted ds-rounded-md flex min-h-[calc(var(--space-lg)*2)] w-full min-w-0 items-center gap-[var(--space-sm)] px-[var(--space-md)] py-[var(--space-sm)] text-start">
      <span
        aria-hidden="true"
        className="ds-bg-primary flex size-[var(--space-lg)] shrink-0 items-center justify-center rounded-full text-[var(--color-bg-alt)] rtl:rotate-180 dark:text-[var(--color-bg-dark)]"
      >
        <svg
          aria-hidden="true"
          className="h-[63.64%] w-[36.82%]"
          fill="none"
          focusable="false"
          preserveAspectRatio="none"
          viewBox="0 0 7.36379 12.728"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </span>
      <p className="ds-text-md min-w-0 font-medium break-words text-[var(--color-text-primary)] dark:text-[var(--color-bg-dark)]">
        {text}
      </p>
    </div>
  );
}
