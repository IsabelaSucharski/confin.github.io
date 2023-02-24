import React from "react";
import { Card } from "antd";
import { Header } from "../../components/Header";
import { CardComponent } from "../../components/Card";

export const Resultado: React.FC = () => {
  return (
    <CardComponent>
      <Header />
      <Card title="Santander" style={{ width: 300 }}>
        <p>Valor do consórcio: R$ 154.900,90</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </CardComponent>
  );
};
