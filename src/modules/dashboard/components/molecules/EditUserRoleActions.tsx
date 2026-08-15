type EditUserRoleActionsProps = {
  cancelLabel: string;
  saveLabel: string;
  onCancel: () => void;
};

export default function EditUserRoleActions({
  cancelLabel,
  saveLabel,
  onCancel,
}: EditUserRoleActionsProps) {
  return (
    <section className="flex min-h-[95px] w-full max-w-full items-center justify-end rounded-[var(--radius-xl)] border border-[var(--border-color-alt)] bg-[var(--color-bg-card)] px-[18px] py-[29px] text-[var(--color-text-primary)] shadow-[var(--shadow-faq-card)]">
      <div className="flex flex-row gap-[9px]">
        <button
          type="button"
          onClick={onCancel}
          className="focus:ds-focus h-[35px] w-[89px] rounded-[8px] border border-[var(--color-primary)] bg-[var(--color-bg)] text-[15px] leading-none font-[var(--font-medium)] font-[var(--font-sans)] whitespace-nowrap text-[var(--color-primary)] uppercase transition-colors hover:bg-[var(--color-primary-300)]"
        >
          {cancelLabel}
        </button>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="focus:ds-focus h-[35px] w-[89px] cursor-not-allowed rounded-[8px] bg-[var(--color-primary)] text-[15px] leading-none font-[var(--font-medium)] font-[var(--font-sans)] whitespace-nowrap text-[var(--color-text-panel)] uppercase"
        >
          {saveLabel}
        </button>
      </div>
    </section>
  );
}
