import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { ILayout } from "../interfaces/layout";
import { items } from "../constants/headerText";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
  };
});

const AppLayout: React.FC<ILayout> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider style={siderStyle} width={70}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", position: "sticky" }}
          items={items2}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items.map((x, index) => {
              const key = index + 1;
              return {
                key,
                label: x,
              };
            })}
          />
        </Header>
        <Content style={contentStyle}>
          <div
            style={{
              padding: 24,
              // minHeight: 380,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

const headerStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  display: "flex",
  alignItems: "center",
};

const contentStyle: React.CSSProperties = {
  // textAlign: "center",
  // minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  position: "relative",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  // lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#ffffff",
  position: "sticky",
  // width: "50px",
};
