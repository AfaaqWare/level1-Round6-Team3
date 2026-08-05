import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Buttons from "./Buttons";
interface Props {
  title: string | React.ReactNode;
  text: string;
  btn1: string;
  btn2: string;
}
export default function ContentHeroection2({ title, text, btn1, btn2 }: Props) {
  return (
    <div>
      <Title>{title}</Title>
      <Text className="mt-6 mb-8">{text}</Text>
      <Buttons btn1={btn1} btn2={btn2} />
    </div>
  );
}
