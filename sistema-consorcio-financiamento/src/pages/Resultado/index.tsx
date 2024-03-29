import React, { useEffect, useState } from "react";
import { Card, Form, Select } from "antd";
import { Header } from "../../components/Header";
import { CardComponent } from "../../components/Card";
import { useLocation } from "react-router-dom";
import {
  getConsorcio,
  getFinanciamento,
  getValorImovel,
  getValorParcela,
  getPorBanco,
} from "../../api";

export const Resultado: React.FC = () => {
  const [dados, setDados] = useState<any>([]);
  const [resultadoPorValor, setResultadoPorValor] = useState<boolean>(false);
  const location = useLocation();

  const { prazo } = location.state;

  useEffect(() => {
    const onFinish = async () => {
      const {
        carteiraAssinada,
        fgtsPagamento,
        financiamentoVigente,
        idade,
        imovelNome,
        nome,
        prazo,
        residencial,
        valorImovel,
        valorMensal,
      } = location.state;
      if (
        idade >= 18 &&
        (prazo === 1 ||
          carteiraAssinada ||
          fgtsPagamento ||
          financiamentoVigente ||
          imovelNome ||
          residencial)
      ) {
        if (valorImovel) {
          let response = await getValorImovel(valorImovel, "financiamento");
          setResultadoPorValor(true);
          return response;
        }

        if (valorMensal) {
          let response = await getValorParcela(valorMensal, "financiamento");
          setResultadoPorValor(true);
          return response;
        }
        let response = await getFinanciamento();
        return response;
      } else if (
        idade >= 18 &&
        (prazo === 2 ||
          !carteiraAssinada ||
          !fgtsPagamento ||
          !financiamentoVigente ||
          !imovelNome ||
          !residencial)
      ) {
        if (valorImovel) {
          let response = await getValorImovel(valorImovel, "consorcio");
          setResultadoPorValor(true);
          return response;
        }

        if (valorMensal) {
          let response = await getValorParcela(valorMensal, "consorcio");
          setResultadoPorValor(true);
          return response;
        }
        let response = await getConsorcio();
        return response;
      }
    };

    async function getData() {
      const data = await onFinish();
      setDados(data);
    }

    getData();
  }, [location.state]);

  const handleFilter = async (e: any, tipo: string) => {
    if (e.target.value === "Todos") {
      window.location.reload();
    }
    const result = await getPorBanco(e.target.value, tipo);
    setDados(result);
  };

  return (
    <CardComponent>
      <Header />
      <div
        style={{
          display: "flex",
          width: "-webkit-fill-available",
          justifyContent: "space-between",
          padding: "0 15px",
        }}
      >
        {prazo === 2 ? <span>Consórcios</span> : <span>Financiamentos</span>}
        {!resultadoPorValor && (
          <select
            id="filtro"
            onChange={(e) =>
              handleFilter(e, prazo === 2 ? "consorcio" : "financiamento")
            }
          >
            <option value="Todos" key="Todos" label="Todos">
              Todos
            </option>
            <option value="Santander" key="Santander" label="Santander">
              Santander
            </option>
            <option value="Bradesco" key="Bradesco" label="Bradesco">
              Bradesco
            </option>
            <option value="Itaú" key="Itaú" label="Itaú">
              Itaú
            </option>
            <option value="Caixa" key="Caixa" label="Caixa">
              Caixa
            </option>
          </select>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        {dados.map((d: any) => {
          return (
            <Card title={d.banco} style={{ width: 275 }}>
              <p>{`Valor do ${
                prazo === 2 ? `consórcio` : `financiamento`
              }: R$ ${d.valorCredito}`}</p>
              <p>{`Valor da parcela: R$ ${d.valorParcela}`}</p>
              <p>{`Quantidade de parcelas: ${d.parcelas}`}</p>
            </Card>
          );
        })}
      </div>
      {!dados.length && "Nenhum serviço disponível"}
    </CardComponent>
  );
};
