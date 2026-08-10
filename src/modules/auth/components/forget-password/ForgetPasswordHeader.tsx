type ForgetPasswordHeaderProps = {
  title: string;
  subtitle: string;
};

function ForgetPasswordHeader({ title, subtitle }: ForgetPasswordHeaderProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="ds-text-primary text-4xl leading-[1.48] font-[var(--font-heading)] font-semibold md:text-5xl">
        {title}
      </h1>
      <p className="ds-text-base ds-text-secondary font-bold">{subtitle}</p>
    </div>
  );
}

export default ForgetPasswordHeader;
