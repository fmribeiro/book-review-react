import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import {
  FormOutlined,
  HeartOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../App.css";
const { Text } = Typography;

const { Sider } = Layout;

const SiderComponent = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider
      collapsible
      breakpoint="sm"
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<FormOutlined />}>
          Resenhas recentes
        </Menu.Item>
        <Menu.Item key="2" icon={<HeartOutlined />}>
          Resenhas curtidas
        </Menu.Item>
        <Menu.Item key="3" icon={<BookOutlined />}>
          Livros
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Leitores
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderComponent;

// <div style={{ display: "flex", marginLeft: 10, height: "5rem" }}>
// <div
//   style={{
//     display: "flex",
//     flex: 1,
//     lineHeight: "32px",
//   }}
// >
//   <BookOutlined
//     style={{
//       display: "flex",
//       alignItems: "center",
//       fontSize: "32px",
//     }}
//   />
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       lineHeight: "0.9em",
//       justifyContent: "center",
//     }}
//   >
//     <Text strong>Resenhas</Text>
//     <Text italic="true" style={{ fontSize: "xx-small" }}>
//       Opine sobre um livro lido
//     </Text>
//   </div>
// </div>
// </div>
