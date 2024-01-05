import { Layout } from 'antd';
import { NextPage } from 'next';

import { Contents, SideBar } from '@/components/base/';

const Home: NextPage = () => {
  return (
    <Layout className="bg-white" style={{ minHeight: '100vh' }}>
      <SideBar />
      <Contents />
    </Layout>
  );
};

export default Home;
