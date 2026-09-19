"use client"
import React, { useState } from "react";
import ResponseCardsSection from "../organisms/ResponseCardsSection";
import ResponseHeader from "../organisms/ResponseHeader";
import ResponseTable from "../organisms/ResponseTable";
import ResponseToolbar from "../organisms/ResponseToolbar";

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
