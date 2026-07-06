import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { cn } from "@/lib/cn";
interface props {
  title: React.ReactNode;
  text?: string;
  isCenter?: boolean;
  className?: string;
  classNameTitle?: string;
}
const Heading = ({ title, text, isCenter = true, classNameTitle, className }: props) => {
  return (
    <div
      className={cn(
        "flex w-fit flex-col items-center justify-center gap-2",
        isCenter ? "m-auto" : "",
        className
      )}
    >
      <Title className={cn(classNameTitle)}>{title}</Title>
      {text && (
        <Text variant="disabled" size="md">
          {text}
        </Text>
      )}
    </div>
  );
};

export default Heading;
