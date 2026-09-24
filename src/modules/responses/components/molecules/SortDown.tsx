import React from "react";
import { ChevronDown } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";

function SortDown({
  getReverseData,
  isReversedData,
}: {
  getReverseData: () => void;
  isReversedData: boolean;
}) {
  return (
    <Button onClick={getReverseData}  className="flex justify-between  h-12 w-full rounded-lg border ds-border-input ds-bg-form !text-gray-500">
      {" "}
      {isReversedData ? "Newest first" : "Oldest first"}
      <ChevronDown />
    </Button>
  );
}

export default SortDown;
