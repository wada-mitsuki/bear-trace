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
    handleSelectClip,
    handleSetSearchText,
    searchText,
    searchedClip,
    selectedClip,
  } = useMainPage();

  return (
    <Layout className="bg-white">
      <SideBar
        clips={clips}
        handleAddClip={handleAddClip}
        handleDeleteClip={handleDeleteClip}
        handleSelectClip={handleSelectClip}
        handleSetSearchText={handleSetSearchText}
        searchText={searchText}
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
