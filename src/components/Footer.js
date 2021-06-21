import React from "react";
import { Layout } from "antd";
import {
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import "../App.css";

const { Footer } = Layout;

// const styles = { backgroundColor: "lightgrey" };

const FooterComponent = (props) => {
  return (
    <Footer
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: "5px",
        }}
      >
        <InstagramOutlined style={{ fontSize: "24px", marginRight: ".1em" }} />
        <LinkedinOutlined style={{ fontSize: "24px", marginRight: ".1em" }} />
        <GithubOutlined style={{ fontSize: "24px", marginRight: ".1em" }} />
        <TwitterOutlined style={{ fontSize: "24px", marginRight: ".1em" }} />
      </div>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Resenhas &#169; 2021
      </p>
    </Footer>
  );
};

export default FooterComponent;
