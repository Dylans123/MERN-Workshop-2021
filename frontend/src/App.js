import React from 'react';
import { Layout, Menu, Breadcrumb, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

const App = () => {
  const onFinish = (values) => {
    fetch('/api', { method: 'POST', headers: { ContentType: 'application/json'}, body: JSON.stringify(values)})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', margin: '20px', background: 'white' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Form onFinish={onFinish} size={'large'}>
          <Form.Item name='title' label="Title">
            <Input />
          </Form.Item>
          <Form.Item name='description' label="Description">
            <Input />
          </Form.Item>
          <Form.Item name='author' label="Author">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
