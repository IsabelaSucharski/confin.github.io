import React from "react";
import "./styles.css";

interface IButton {
  onclick?(): Promise<void> | any
}


export const ButtonNext: React.FC<IButton> = ({ onclick }) => {
  return (
    <button className="button" type="submit" onClick={onclick}>
      Próximo
    </button>
  );
};
