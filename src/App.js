import React from 'react';
import { Layout } from 'antd';
import MainPage from './pages/MainPage';

const { Header, Content } = Layout;

const App = () => (
  <Layout>
    <Header style={{ color: 'white', textAlign: 'center' }}>Weather Dashboard</Header>
    <Content>
      <MainPage />
    </Content>
  </Layout>
);

export default App;
