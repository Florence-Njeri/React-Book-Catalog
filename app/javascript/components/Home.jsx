import { Layout } from "antd";
import React from "react";
import Books from "./Books";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Book Catalog</h1>
        <Books />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>Florence Njeri ©2022.</Footer>
  </Layout>
);