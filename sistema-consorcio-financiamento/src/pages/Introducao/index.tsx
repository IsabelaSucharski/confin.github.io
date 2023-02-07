import React from "react";
import { Link } from "react-router-dom";
import { ButtonNext } from "../../components/ButtonNext";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import "./styles.css";

export const Introducao: React.FC = () => {
  return (
    <Card>
      <Header />
      <div className="divText">
        Somos um sistema que oferece dicas a voce!!
        <p>
          Se você quer comprar um imóvel e não sabe por onde começar, nós te
          ajudamos...
        </p>
        <p>
          Comece preenchendo algumas perguntinhas de nosso formulário e, no fim,
          te daremos uma dica valiosa.
        </p>
        Vamos lá?
      </div>

      <div className="divButton">
        <Link to={"formulario"}>
          <ButtonNext />
        </Link>
      </div>
    </Card>
  );
};
