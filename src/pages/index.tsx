import { Layout } from 'antd';
import { Contents } from 'src/components/shared/contents';
import { SideBar } from 'src/components/shared/sidebar';

const MainContents = () => {
  return (
    // TODO:今は恩恵が特にないが、いずれcomponents/page配下へ。
    <Layout className="bg-white">
      <SideBar />
      <Contents />
    </Layout>
  );
};

export default MainContents;
