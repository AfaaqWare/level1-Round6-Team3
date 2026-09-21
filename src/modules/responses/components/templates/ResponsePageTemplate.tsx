"use client";
import React, { useState } from "react";
import ResponseCardsSection from "../organismas/ResponseCardsSection";
import ResponseHeader from "../organismas/ResponseHeader";
import ResponseTable from "../organismas/ResponseTable";
import ResponseToolbar from "../organismas/ResponseToolbar";

function ResponsePageTemplate() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <ResponseHeader />
      <ResponseCardsSection />
      <ResponseToolbar setSearchTerm={setSearchTerm} />
      <ResponseTable searchTerm={searchTerm} />
    </>
  );
}

export default ResponsePageTemplate;
