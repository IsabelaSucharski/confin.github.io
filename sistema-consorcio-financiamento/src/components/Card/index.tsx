import React from "react";
import "./styles.css";

interface ICard {
  children: any;
}
export const CardComponent: React.FC<ICard> = ({ children }) => {
  return <div className="card">{children}</div>;
};
