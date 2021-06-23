import { Form, Input, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as authActions from "../store/actions/auth";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Auth = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();
  // const location = useLocation();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    onSubmitHandler(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onSubmitHandler = async (data) => {
    console.log("authenticateUser");

    try {
      if (isSignUp) {
        const { email, password, name, username } = data;
        await dispatch(authActions.signup(email, password, name, username));
      } else {
        const { email, password } = data;
        await dispatch(authActions.signin(email, password));
      }
      history.goBack();
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  return (
    <Form
      form={form}
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: "80%", marginTop: 10 }}
    >
      {isSignUp && (
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
            name="username"
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
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Digite a sua senha" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} form={form}>
        <div
          id="bottom-btn"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button type="primary" htmlType="submit">
            {isSignUp ? "Login" : "Cadastrar"}
          </Button>
          <span
            style={{ margin: "0 2px", display: "flex", alignItems: "center" }}
          >
            |
          </span>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            Ir para o {!isSignUp ? "login" : "cadastro"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Auth;
