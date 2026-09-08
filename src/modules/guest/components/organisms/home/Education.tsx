import React from "react";
import CardImgsContainer from "./CardImgsContainer";
import { educationCardData } from "@/shared/utils/data";
export default function Education() {
  return (
    <div>
      <CardImgsContainer cards={educationCardData} trans="publicPages.home.educationSection" />
    </div>
  );
}
