import React from "react";
import { Card, Col, Row } from "antd";

const Cards = () => {
  const elements = Array.from(Array(18).keys());

  return elements.map((elem) => {
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={6} key={elem}>
        <Card title="Resenha" bordered={false} key={elem}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    );
  });
};

const Reviews = (props) => {
  const elements = Array.from(Array(10).keys());

  return (
    <div
      id="card-container"
      style={{
        display: "flex",
        margin: "10px",
      }}
    >
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        <Cards />
      </Row>
    </div>
  );
};

export default Reviews;
