import { Layout } from 'antd';
import { Contents } from 'src/components/shared/contents';
import { SideBar } from 'src/components/shared/sidebar';

import { useMainPage } from '@/components/page/hooks';

const MainPage = () => {
  const {
    clips,
    handleAddClip,
    handleDeleteClip,
    handleSaveText,
    handleSearchText,
    handleSelectClip,
    searchedClip,
    selectedClip,
  } = useMainPage();

  return (
    <Layout className="bg-white">
      <SideBar
        clips={clips}
        handleAddClip={handleAddClip}
        handleDeleteClip={handleDeleteClip}
        handleSearchText={handleSearchText}
        handleSelectClip={handleSelectClip}
        searchedClip={searchedClip}
        selectedClipId={selectedClip?.id}
      />
      {selectedClip && (
        <Contents handleSaveText={handleSaveText} selectedClip={selectedClip} />
      )}
    </Layout>
  );
};

export default MainPage;
