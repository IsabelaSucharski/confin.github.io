import React from "react";
import "./styles.css";

export const Header: React.FC = () => {
  const logo = require("../../assets/logo.png");

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1>ConFin</h1>
      <h5>Para tirar suas ideias do papel</h5>
    </div>
  );
};
