import { Form, Input, Button } from "antd";
import { useState } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: "80%", marginTop: 10 }}
    >
      {!isLogin && (
        <div>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: "Digite o seu nome" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Apelido"
            name="nickname"
            rules={[{ required: true, message: "Digite o seu apelido" }]}
          >
            <Input />
          </Form.Item>
        </div>
      )}

      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Digite o seu e-mail" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Digite a sua senha" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <div
          id="bottom-btn"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button type="primary" htmlType="submit">
            {isLogin ? "Login" : "Cadastrar"}
          </Button>
          <span
            style={{ margin: "0 2px", display: "flex", alignItems: "center" }}
          >
            |
          </span>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => setIsLogin(!isLogin)}
          >
            Ir para o {!isLogin ? "login" : "cadastro"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Auth;
