import React from "react";
import Title from "@/shared/components/atoms/Title";
import StepText from "../../../../../shared/components/molecules/StepText";

export default function TreadingAction() {
  return (
    <div className="container mx-auto">
      <Title variant="primary" size="lg" className="m-8">
        {"Treading"} <span className="ds-text-alt">{"Action"}</span>
      </Title>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StepText text="$45,345,654" title="ALL TIME TRADE VALUE" />
        <StepText text="$45,345,654" title="ALL TIME TRADE VALUE" />
        <StepText text="$45,345,654" title="ALL TIME TRADE VALUE" />
      </div>
    </div>
  );
}
