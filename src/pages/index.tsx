import { Layout } from 'antd';

import { Contents } from '@/components/shared/contents';
import { SideBar } from '@/components/shared/sidebar';

const MainContents = () => {
  return (
    <Layout className="bg-white">
      <SideBar />
      <Contents />
    </Layout>
  );
};

export default MainContents;
