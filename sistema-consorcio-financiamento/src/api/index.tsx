export interface IServico {
  banco: string;
  parcelas: string;
  valorParcela: number;
  valorCredito: number;
  valorFinanciamento?: number;
  taxaJuros?: string;
}

const getConsorcio = async () => {
  const response = await fetch("http://localhost:3001/consorcio");
  const resp = await response.json();

  return Object.values(resp).map((r: IServico) => {
    return { ...r, valorParcela: Math.round(r.valorParcela) };
  });
};

const getFinanciamento = async () => {
  const response = await fetch("http://localhost:3001/financiamento");
  const resp = await response.json();

  return Object.values(resp).map((r: IServico) => {
    return { ...r, valorParcela: Math.round(r.valorParcela) };
  });
};

const getValorImovel = async (valor: number, tipo: string) => {
  const response = await fetch(`http://localhost:3001/${tipo}`);
  const resp = await response.json();
  const valores = [];

  Object.values(resp).filter((r: IServico) => {
    return valores.push(r.valorCredito);
  });

  let maisProximo = valores.reduce(function (
    anterior: number,
    corrente: number
  ) {
    return Math.abs(corrente - valor) < Math.abs(anterior - valor)
      ? corrente
      : anterior;
  });

  return Object.values(resp).filter((r: IServico) => {
    return maisProximo === r.valorCredito;
  });
};

const getValorParcela = async (valor: number, tipo: string) => {
  const response = await fetch(`http://localhost:3001/${tipo}`);
  const resp = await response.json();
  const parcelas = [];

  Object.values(resp).filter((r: IServico) => {
    return parcelas.push(r.valorParcela);
  });

  let maisProximo = parcelas.reduce(function (
    anterior: number,
    corrente: number
  ) {
    return Math.abs(corrente - valor) < Math.abs(anterior - valor)
      ? corrente
      : anterior;
  });

  return Object.values(resp).filter((r: IServico) => {
    return maisProximo === r.valorParcela;
  });
};

const getPorBanco = async (banco: any, tipo: string) => {
  const response = await fetch(`http://localhost:3001/${tipo}`);
  const resp = await response.json();

  return Object.values(resp).filter((r: IServico) => {
    return banco === r.banco;
  });
};

export {
  getConsorcio,
  getFinanciamento,
  getValorImovel,
  getValorParcela,
  getPorBanco,
};
