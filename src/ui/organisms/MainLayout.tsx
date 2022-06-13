import { FC } from "react";
import { Breadcrumb, Carousel, Layout, Menu } from "antd";

import Carousel1 from "assets/images/carousel-1.webp";
import Carousel2 from "assets/images/carousel-2.jpeg";
import Carousel3 from "assets/images/carousel-3.webp";
import Carousel4 from "assets/images/carousel-4.jpg";

export const MainLayout: FC<any> = ({ children }) => {
  return (
    <Layout className="layout">
      <Layout.Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="main-menu"
          items={[
            { key: 1, label: "Home" },
            { key: 2, label: "Other Products" },
            { key: 3, label: "About Us" },
            { key: 4, label: "Contacts" },
          ]}
        />
      </Layout.Header>
      <Layout.Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Estates</Breadcrumb.Item>
        </Breadcrumb>

        <Carousel autoplay draggable className="main-carousel">
          <div>
            <img src={Carousel1} alt="carousel-1" />
          </div>
          <div>
            <img src={Carousel2} alt="carousel-2" />
          </div>
          <div>
            <img src={Carousel3} alt="carousel-3" />
          </div>
          <div>
            <img src={Carousel4} alt="carousel-4" />
          </div>
        </Carousel>

        <div className="site-layout-content">{children}</div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>By Mishanea</Layout.Footer>
    </Layout>
  );
};
