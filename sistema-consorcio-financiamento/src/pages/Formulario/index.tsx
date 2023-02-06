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
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Input.Group size="large">
          <Row>
            <Col>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Por favor insira seu nome" },
                ]}
              >
                <Input placeholder="Qual seu nome?" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="age"
                rules={[
                  { required: true, message: "Por favor insira sua idade" },
                ]}
              >
                <Input placeholder="Qual a sua idade?" />
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>

        <Input.Group size="large">
          <Row>
            <Col>
              <Form.Item name="homeValue">
                <Input placeholder="Qual valor que deseja do imóvel? " />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="monthtlyValue">
                <Input placeholder="Quanto deseja pagar por mês?" />
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
                <Radio>Radio</Radio>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Radio>Radio</Radio>
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
