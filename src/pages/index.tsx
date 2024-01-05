import { Layout } from 'antd';
import { NextPage } from 'next';

import { Contents, SideBar } from '@/components/base/';

const Home: NextPage = () => {
  return (
    <Layout className="bg-white min-h-40">
      <SideBar />
      <Contents />
    </Layout>
  );
};

export default Home;
