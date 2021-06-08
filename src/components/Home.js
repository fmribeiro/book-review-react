import "../App.css";

import { Layout } from "antd";
import React from "react";

import ContentComponent from "./Content";
import FooterComponent from "./Footer";
import SiderComponent from "./Sider";
import HeaderComponent from "./Header";

const Home = (props) => {
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <SiderComponent />
        <Layout>
          <ContentComponent />
          <FooterComponent />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
