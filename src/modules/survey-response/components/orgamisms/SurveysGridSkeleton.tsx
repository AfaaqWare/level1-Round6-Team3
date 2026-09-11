import SurveyCardSkeleton from "./SurveyCardSkeleton";

const SKELETON_COUNT = 6;
const GRID_CLASSNAME = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";

export default function SurveysGridSkeleton() {
  return (
    <div className={GRID_CLASSNAME}>
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <SurveyCardSkeleton key={index} />
      ))}
    </div>
  );
}
