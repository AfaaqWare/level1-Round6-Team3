"use client";
import IconInput from "@/shared/components/molecules/IconInput";
import React from "react";
import { Search } from "@/assets/icons/icons";

function SearchInput({
  setSearchTerm,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  

  function filterByName(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  

  return (
    <IconInput placeholder="search by name or email" icon={<Search />} onChange={filterByName} />
  );
}

export default SearchInput;
