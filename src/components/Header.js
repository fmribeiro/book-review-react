import "../App.css";

import {
  BookFilled,
  BookOutlined,
  DownOutlined,
  FormOutlined,
  LoginOutlined,
  PlusCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Input,
  Layout,
  Menu,
  Tooltip,
  Typography,
} from "antd";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header } = Layout;
const { Text } = Typography;

// const styles = { backgroundColor: "lightblue", display: "flex" };
const menuLogout = (
  <Menu>
    <Menu.Item icon={<LoginOutlined />}>Sair</Menu.Item>
  </Menu>
);

const menuAdd = (
  <Menu>
    <Menu.Item icon={<BookFilled />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Livro
      </a>
    </Menu.Item>
    <Menu.Item icon={<FormOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Resenha
      </a>
    </Menu.Item>
  </Menu>
);

const HeaderComponent = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  // const [isLogged, setIsLogged] = useState(false);
  // const params = useParams();

  // console.log(`location: ${JSON.stringify(params)}`);

  return (
    <Header
      style={{
        display: "flex",
        flexDirection: "column",
        height: "5rem",
      }}
    >
      <div id="top_header" style={{ display: "flex", height: "70%" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            lineHeight: "32px",
          }}
        >
          <BookOutlined
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "32px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "0.9em",
              justifyContent: "center",
            }}
          >
            <Text strong>Resenhas</Text>
            <Text italic="true" style={{ fontSize: "xx-small" }}>
              Opine sobre um livro lido
            </Text>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 2,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Input
            size="large"
            placeholder="Buscar resenhas"
            prefix={<SearchOutlined />}
            style={{
              marginRight: "1em",
              width: 300,
              height: 40,
            }}
          />

          {!isAuth && (
            <Tooltip title="login">
              <Link to="/auth">
                <Button size="middle" shape="circle" icon={<LoginOutlined />} />
              </Link>
            </Tooltip>
          )}
        </div>

        {isAuth && (
          <Dropdown overlay={menuLogout}>
            <span>
              username <DownOutlined />
            </span>
          </Dropdown>
        )}
      </div>

      <div
        id="bottom_header"
        style={{
          height: "30%",
          lineHeight: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ width: "50%" }}></span>
        {isAuth && (
          <Dropdown overlay={menuAdd}>
            <PlusCircleFilled style={{ fontSize: 18 }} />
          </Dropdown>
        )}
      </div>
    </Header>
  );
};

export default HeaderComponent;
