import React from "react";
import { Layout } from "antd";
import "../App.css";
import Reviews from "./Reviews";

const { Content } = Layout;

const ContentComponent = (props) => {
  return (
    <Content style={{ minHeight: "100vh" }}>
      <Reviews />
    </Content>
  );
};

export default ContentComponent;
