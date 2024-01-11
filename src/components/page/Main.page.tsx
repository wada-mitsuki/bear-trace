import { Layout } from 'antd';
import { Contents } from 'src/components/shared/contents';
import { SideBar } from 'src/components/shared/sidebar';

import { useMainPage } from '@/components/page/hooks';

const MainPage = () => {
  const { handleAddClip, handleSaveText, handleSelectClip } = useMainPage();
  return (
    <Layout className="bg-white">
      <SideBar
        handleAddClip={handleAddClip}
        handleSelectClip={handleSelectClip}
      />
      <Contents handleSaveText={handleSaveText} />
    </Layout>
  );
};

export default MainPage;
