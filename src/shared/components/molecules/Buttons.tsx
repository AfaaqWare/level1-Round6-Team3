import React from "react";
import Button from "../atoms/Button";
interface Props {
  btn1: string;
  btn2: string;
  variant1?: "primary" | "secondary" | "outline" | "ghost" | "primary200" | "disabled";
  variant2?: "primary" | "secondary" | "outline" | "ghost" | "primary200" | "disabled";
}
export default function Buttons({ btn2, btn1, variant1 = "primary", variant2 = "outline" }: Props) {
  return (
    <div className="flex gap-4">
      <Button size="md" variant={variant1}>
        {btn1}
      </Button>
      <Button size="md" variant={variant2}>
        {btn2}
      </Button>
    </div>
  );
}
