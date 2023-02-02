import React from "react";
import "./styles.css";

interface ICard {
  children: any;
}
export const Card: React.FC<ICard> = ({ children }) => {
  return <div className="card">{children}</div>;
};
