import React from "react";
import { Layout } from "antd";
import "../App.css";

const { Footer } = Layout;

const styles = { backgroundColor: "lightgrey" };

const FooterComponent = (props) => {
  return (
    <Footer
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p>Resenhas &#169; 2021</p>
    </Footer>
  );
};

export default FooterComponent;
