import React from "react";
import { Link } from "react-router-dom";
import { ButtonNext } from "../../components/ButtonNext";
import { CardComponent } from "../../components/Card";
import { Header } from "../../components/Header";
import "./styles.css";

export const Introducao: React.FC = () => {
  return (
    <CardComponent>
      <Header />
      <div className="divText">
        Somos um sistema que oferece dicas para você!
        <p>
          Se você quer comprar um imóvel e não sabe por onde começar, nós
          podemos ajudá-lo.
        </p>
        <p>
          Comece preenchendo algumas perguntinhas em nosso formulário e, no fim,
          daremos uma dica valiosa para você.
        </p>
        Vamos lá?
      </div>

      <div className="divButton">
        <Link to={"formulario"}>
          <ButtonNext />
        </Link>
      </div>
    </CardComponent>
  );
};
