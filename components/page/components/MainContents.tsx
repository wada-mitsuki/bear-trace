import { Layout } from 'antd';

import { Contents } from '@/components/model/contents';
import { SideBar } from '@/components/model/sidebar';

export const MainContents = () => {
  return (
    <Layout className="bg-white min-h-40">
      <SideBar />
      <Contents />
    </Layout>
  );
};
