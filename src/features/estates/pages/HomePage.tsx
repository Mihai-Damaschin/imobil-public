import { ReactNode, useEffect } from "react";
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from "antd";
import { MainLayout } from "ui/organisms/MainLayout";
import {
  MoreOutlined,
  InfoCircleOutlined,
  PayCircleOutlined,
} from "@ant-design/icons";

import { useRequest } from "estafette";
import axios from "axios";
import { GalleryItem } from "../organisms/GaleryItem";

const { Paragraph } = Typography;

export const HomePage = () => {
  const estates = useRequest<any[]>({ data: [] });

  useEffect(() => {
    estates.request(axios.get("http://localhost:8000/api/estates/"));
  }, []);

  return (
    <>
      <MainLayout>
        {estates.data.map((i) => (
          <PageHeader
            key={i.id}
            title={i.title}
            subTitle={i.price}
            className="site-page-header header-card"
            tags={<Tag color="green">Active</Tag>}
            extra={[
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>,
              <DropdownMenu key="more" />,
            ]}
            avatar={{
              src: i.photo,
            }}
            breadcrumb={{
              routes: [
                {
                  path: "index",
                  breadcrumbName: "Moldova",
                },
                {
                  path: "first",
                  breadcrumbName: "Chisinau",
                },
              ],
            }}
          >
            <Content extraContent={<GalleryItem media={i.media} />}>
              <Paragraph>
                <span dangerouslySetInnerHTML={{ __html: i.description }} />
              </Paragraph>
              <div>
                <IconLink icon={<PayCircleOutlined />} text="Pay" />
                <IconLink icon={<InfoCircleOutlined />} text="More Info" />
              </div>
            </Content>
          </PageHeader>
        ))}
      </MainLayout>
    </>
  );
};

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu} placement="bottomRight">
    <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }} />} />
  </Dropdown>
);

const Content: React.FC<{
  children: React.ReactNode;
  extraContent: React.ReactNode;
}> = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const IconLink = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <a className="example-link" href="#">
    {icon}
    {text}
  </a>
);
