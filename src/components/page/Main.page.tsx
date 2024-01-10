import { Layout } from 'antd';
import { Contents } from 'src/components/shared/contents';
import { SideBar } from 'src/components/shared/sidebar';

const MainPage = () => {
  return (
    <Layout className="bg-white">
      <SideBar />
      <Contents />
    </Layout>
  );
};

export default MainPage;
