import SearchInput from "../molecules/SearchInput";
import React from "react";
import SortDown from "../molecules/SortDown";
import DateRangePicker from "../molecules/DateRangePicker";

function ResponseToolbar({
  setSearchTerm,
  getReverseData,
  isReversedData,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  getReverseData: () => void;
  isReversedData: boolean;
}) {
  return (
    <div className="ds-bg-card mt-[20px] grid gap-10 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <SearchInput setSearchTerm={setSearchTerm} />
      <SortDown getReverseData={getReverseData} isReversedData={isReversedData} />
      <DateRangePicker  />
    </div>
  );
}

export default ResponseToolbar;
