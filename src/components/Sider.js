import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  FormOutlined,
  HeartOutlined,
  BookOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "../App.css";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SiderComponent = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

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
      <Menu mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.ItemGroup title="Geral">
          <Menu.Item key="1" icon={<FormOutlined />}>
            <Link to="/reviews">Resenhas recentes</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<HeartOutlined />}>
            <Link to="/reviews/liked">Resenhas curtidas</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            <Link to="/books">Livros</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/users">Leitores</Link>
          </Menu.Item>
        </Menu.ItemGroup>

        {isLogged && (
          <div>
            <Menu.ItemGroup title="Meu Perfil">
              <Menu.Item key="5" icon={<HeartOutlined />} disabled>
                <Link to="/user/reviews/favorites">Resenhas Favoritas</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<FormOutlined />} disabled>
                <Link to="/user/reviews/mine">Minhas resenhas</Link>
              </Menu.Item>
              <Menu.Item key="7" icon={<BookOutlined />} disabled>
                <Link to="/user/books/read">Livros lidos</Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<BookOutlined />} disabled>
                <Link to="/user/books/wishlist">Livros a ler</Link>
              </Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup title="Seguindo">
              <Menu.Item key="9" icon={<UserOutlined />} disabled>
                <Link to="/user/following">Leitores</Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<FormOutlined />} disabled>
                <Link to="/user/reviews/following">Resenhas</Link>
              </Menu.Item>
              <Menu.Item key="11" icon={<MessageOutlined />} disabled>
                <Link to="/user/messages">Mensagens</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </div>
        )}
      </Menu>
    </Sider>
  );
};

export default SiderComponent;
