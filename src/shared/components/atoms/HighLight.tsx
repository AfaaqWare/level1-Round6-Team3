import React from "react";
interface props {
  children: React.ReactNode;
}
const HighLight = ({ children }: props) => {
  return <span className="ds-text-alt">{children}</span>;
};

export default HighLight;
