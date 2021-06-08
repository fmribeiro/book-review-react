import "../App.css";

import { BookOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import React from "react";

const { Header } = Layout;
const { Text } = Typography;

const styles = { backgroundColor: "lightblue", display: "flex" };

const HeaderComponent = (props) => {
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
            flexDirection: "row-reverse",
            flex: 2,
          }}
        >
          <Text>Usuario: fmribeiro21</Text>
          <Text style={{ marginRight: "1em" }}>Buscar resenha&#x1F50D;</Text>
        </div>
      </div>

      <div id="bottom_header" style={{ height: "30%", lineHeight: "16px" }}>
        <span style={{}}>Resenhas Recentes</span>
      </div>
    </Header>
  );
};

export default HeaderComponent;
