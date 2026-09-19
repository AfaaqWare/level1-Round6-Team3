import FilterButton from "../molecules/FilterButton";
import SearchInput from "../molecules/SearchInput";

import React from "react";
import SortDown from "../molecules/SortDown";
import DateRangePicker from "../molecules/DateRangePicker";

function ResponseToolbar({
  setSearchTerm,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="ds-bg-card p-6 gap-10 grid mt-[20px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <SearchInput  setSearchTerm={setSearchTerm}  />
      <SortDown />
      <DateRangePicker />
      <FilterButton />
    </div>
  );
}

export default ResponseToolbar;
