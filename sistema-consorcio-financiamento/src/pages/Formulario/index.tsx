import React from "react";
import { Button, Checkbox, Col, Form, Input, Radio, Row, Switch } from "antd";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "./styles.css";

export const Formulario: React.FC = () => {
  return (
    <Card>
      <Header />
      <span>Preencha alguns campos</span>
      <Form
        name="basic"
        wrapperCol={{ span: 22 }}
        style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Input.Group compact>
          <Form.Item
            name="name"
            label="Qual seu nome"
            rules={[{ required: true, message: "Por favor insira seu nome" }]}
            style={{ width: "70%" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Qual a sua idade"
            rules={[{ required: true, message: "Por favor insira sua idade" }]}
            style={{ width: "30%" }}
          >
            <Input type="number" />
          </Form.Item>
        </Input.Group>

        <Input.Group compact>
          <Form.Item
            name="homeValue"
            label="Qual valor do imóvel"
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="monthtlyValue"
            label="Quanto deseja pagar por mês"
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>
        </Input.Group>
        <Input.Group compact>
          <span>Necessita o imóvel a curto ou longo prazo?</span>
          <Form.Item name="username">
            <Radio>Radio</Radio>
          </Form.Item>
          <Form.Item name="username">
            <Radio>Radio</Radio>
          </Form.Item>
        </Input.Group>

        <Input.Group>
          <Row>
            <Col>
              <span>Necessita o imóvel a curto ou longo prazo?</span>
            </Col>
            <Col>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>
        <Input.Group>
          <Row>
            <Col>
              <span>Necessita o imóvel a curto ou longo prazo?</span>
            </Col>
            <Col>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>
        <Input.Group>
          <Row>
            <Col>
              <span>Necessita o imóvel a curto ou longo prazo?</span>
            </Col>
            <Col>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>
        <Input.Group>
          <Row>
            <Col>
              <span>Necessita o imóvel a curto ou longo prazo?</span>
            </Col>
            <Col>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>
        <Input.Group>
          <Row>
            <Col>
              <span>Necessita o imóvel a curto ou longo prazo?</span>
            </Col>
            <Col>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                />
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
