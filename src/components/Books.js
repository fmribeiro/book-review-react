import React from "react";
import { Card } from "antd";

const Books = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Card
        title="Livro"
        bordered={false}
        style={{ width: 300, margin: "10px 5px" }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card
        title="Livro"
        bordered={false}
        style={{ width: 300, margin: "10px 5px" }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card
        title="Livro"
        bordered={false}
        style={{ width: 300, margin: "10px 5px" }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card
        title="Livro"
        bordered={false}
        style={{ width: 300, margin: "10px 5px" }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default Books;
