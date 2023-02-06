import React from "react";
import usePage from "../../usePage";

import "./styles.css";

interface IButtonProps {
  toPage: number;
}

export const ButtonNext: React.FC<IButtonProps> = ({ toPage }) => {
  const { page, setPage } = usePage();

  return (
    <button
      className="button"
      onClick={() => {
        console.log("button", toPage);
        setPage(toPage);
      }}
    >
      Próximo
    </button>
  );
};
