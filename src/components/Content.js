import "../App.css";

import { Layout } from "antd";
import React from "react";

import AppRouter from "../router/Router";

const { Content } = Layout;

const ContentComponent = (props) => {
  return (
    <Content style={{ minHeight: "100vh" }}>
      <AppRouter />
    </Content>
  );
};

export default ContentComponent;
