/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Form, Input, InputNumber, Radio, Switch } from "antd";
import { CardComponent } from "../../components/Card";
import { Header } from "../../components/Header";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./styles.css";
import { ButtonNext } from "../../components/ButtonNext";
import { Link } from "react-router-dom";

export const Formulario: React.FC = () => {
  const onFinish = async () => {
    let response = await fetch("http://localhost:3001/consorcio");
    console.log(await response.json());
  };


  return (
    <CardComponent>
      <Header />
      <h3>Preencha alguns campos</h3>
      <Form
        name="basic"
        wrapperCol={{ span: 23 }}
        onFinish={onFinish}
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Input.Group compact>
          <Form.Item name="nome" label="Qual seu nome" style={{ width: "70%" }}>
            <Input />
          </Form.Item>
          <Form.Item
            name="idade"
            label="Qual a sua idade"
            rules={[{ required: true, message: "Por favor insira sua idade" }]}
            style={{ width: "30%" }}
          >
            <InputNumber min={18} />
          </Form.Item>
        </Input.Group>

        <Input.Group compact>
          <Form.Item
            name="valorImovel"
            label="Qual valor do imóvel"
            style={{ width: "50%" }}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            name="valorMensal"
            label="Quanto deseja pagar por mês"
            style={{ width: "50%" }}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
        </Input.Group>
        <Input.Group
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "15px",
            width: "100%",
          }}
        >
          <Form.Item
            name="prazo"
            label="Necessita o imóvel a curto ou longo prazo"
          >
            <Radio.Group>
              <Radio value={1}>Curto prazo</Radio>
              <Radio value={2}>Longo prazo</Radio>
            </Radio.Group>
          </Form.Item>
        </Input.Group>

        <Input.Group>
          <span>Você possui 3 anos de carteira assinada?</span>
          <Form.Item name="carteiraAssinada" initialValue={false}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
        </Input.Group>

        <Input.Group>
          <span>Deseja utilizar o fgts como parte do pagamento?</span>
          <Form.Item name="fgtsPagamento" initialValue={false}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
        </Input.Group>
        <Input.Group>
          <span>Possui algum outro imovel em seu nome?</span>

          <Form.Item name="imovelNome" initialValue={false}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
        </Input.Group>
        <Input.Group>
          <span>Possui algum outro financiamento imobiliário vigente?</span>

          <Form.Item name="financiamentoVigente" initialValue={false}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
        </Input.Group>
        <Input.Group>
          <span>Esse imóvel é para fins residenciais?</span>

          <Form.Item name="residencial" initialValue={false}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
        </Input.Group>

        <div className="divButton">
          <ButtonNext onclick={onFinish}/>
        </div>
      </Form>
    </CardComponent>
  );
};
