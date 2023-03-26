const getConsorcio = async () => {
  const response = await fetch("http://localhost:3001/consorcio");
  const resp = await response.json();

  return Object.values(resp).map((r: any) => {
    return { ...r, valorParcela: Math.round(r.valorParcela) };
  });
};

const getFinanciamento = async () => {
  const response = await fetch("http://localhost:3001/financiamento");
  const resp = await response.json();

  return Object.values(resp).map((r: any) => {
    return { ...r, valorParcela: Math.round(r.valorParcela) };
  });
};

const getValorImovel = async (valor: number, tipo: string) => {
  const response = await fetch(`http://localhost:3001/${tipo}`);
  const resp = await response.json();

  return Object.values(resp).filter((r: any) => {
    return valor >= r.valorImovel && valor <= r.valorImovel;
  });
};

const getValorParcela = async (valor: number, tipo: string) => {
  const response = await fetch(`http://localhost:3001/${tipo}`);
  const resp = await response.json();

  return Object.values(resp).filter((r: any) => {
    return valor >= r.valorParcela && valor <= r.valorParcela;
  });
};

const getPorBanco = async (banco: any, tipo: string) => {
  const response = await fetch(`http://localhost:3001/${tipo}`);
  const resp = await response.json();

  return Object.values(resp).filter((r: any) => {
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
