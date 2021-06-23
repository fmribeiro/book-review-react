import {
  BookOutlined,
  FormOutlined,
  HeartOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../App.css";

const { Sider } = Layout;

const SiderComponent = (props) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const isAuth = useSelector((state) => !!state.auth.token);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  console.log(`isAuth: ${isAuth}`);

  const handleClick = (e) => {
    // console.log("click ", e);
    history.push(e.key);
  };

  return (
    <Sider
      collapsible
      breakpoint="sm"
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu mode="inline" defaultSelectedKeys={["4"]} onClick={handleClick}>
        <Menu.ItemGroup title="Geral">
          <Menu.Item key="/reviews" icon={<FormOutlined />}>
            Resenhas recentes
          </Menu.Item>
          <Menu.Item key="/reviews/liked" icon={<HeartOutlined />}>
            Resenhas curtidas
          </Menu.Item>
          <Menu.Item key="/books" icon={<BookOutlined />}>
            Livros
          </Menu.Item>
          <Menu.Item key="/users" icon={<UserOutlined />}>
            Leitores
          </Menu.Item>
        </Menu.ItemGroup>

        {isAuth && (
          <div>
            <Menu.ItemGroup title="Meu Perfil">
              <Menu.Item key="/user/reviews/favorites" icon={<HeartOutlined />}>
                Resenhas Favoritas
              </Menu.Item>
              <Menu.Item key="/user/reviews/mine" icon={<FormOutlined />}>
                Minhas resenhas
              </Menu.Item>
              <Menu.Item key="/user/books/read" icon={<BookOutlined />}>
                Livros lidos
              </Menu.Item>
              <Menu.Item key="/user/books/wishlist" icon={<BookOutlined />}>
                Livros a ler
              </Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup title="Seguindo">
              <Menu.Item key="/user/following" icon={<UserOutlined />}>
                Leitores
              </Menu.Item>
              <Menu.Item key="/user/reviews/following" icon={<FormOutlined />}>
                Resenhas
              </Menu.Item>
              <Menu.Item
                key="/user/messages"
                icon={<MessageOutlined />}
                disabled
              >
                Mensagens
              </Menu.Item>
            </Menu.ItemGroup>
          </div>
        )}
      </Menu>
    </Sider>
  );
};

export default SiderComponent;
