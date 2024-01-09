import { Layout } from 'antd';

import { Contents } from '@/components/shared/contents';
import { SideBar } from '@/components/shared/sidebar';

const MainContents = () => {
  return (
    <Layout className="bg-white min-h-40">
      <SideBar />
      <Contents />
    </Layout>
  );
};

export default MainContents;
