export default function SurveyCardSkeleton() {
  return (
    <div
      className="ds-bg-card ds-border-card ds-rounded-2xl flex animate-pulse flex-col overflow-hidden"
      role="status"
      aria-hidden="true"
    >
      {/* Cover */}
      <div className="ds-bg-form aspect-16/9 w-full" />

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="ds-bg-form h-5 w-16 rounded-full" />
        <div className="ds-bg-form h-4 w-3/4 rounded" />
        <div className="ds-bg-form h-3 w-full rounded" />

        <div className="flex items-center justify-between">
          <div className="ds-bg-form h-3 w-20 rounded" />
          <div className="ds-bg-form h-3 w-24 rounded" />
        </div>

        <div className="ds-bg-form h-3 w-28 rounded" />

        <div className="mt-auto flex items-center gap-2 pt-2">
          <div className="ds-bg-form h-8 flex-1 rounded-md" />
          <div className="ds-bg-form h-8 flex-1 rounded-md" />
          <div className="ds-bg-form h-8 flex-1 rounded-md" />
        </div>
      </div>
    </div>
  );
}
