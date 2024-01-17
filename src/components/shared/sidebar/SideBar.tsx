import Sider from 'antd/lib/layout/Sider';
import React, { FC } from 'react';
import { SideBarContents, SideBarHeader } from 'src/components/shared/sidebar';
import { Clip } from 'src/entity/clip';

export type SideBarType = {
  clips: Clip[];
  handleAddClip: () => void;
  handleDeleteClip: () => void;
  handleSearchText: (text: string) => void;
  handleSelectClip: (clipId: number) => void;
  searchedClip: Clip[];
  selectedClipId?: number;
};

export const SideBar: FC<SideBarType> = ({
  clips,
  handleAddClip,
  handleDeleteClip,
  handleSelectClip,
  searchedClip,
  selectedClipId,
}) => {
  return (
    // TODO:ここのSiderもui化したいがなぜかレイアウトが崩れる
    <Sider
      className="border-r-2 overflow-auto h-screen"
      theme="light"
      width="320"
    >
      <SideBarHeader onClickAddClip={handleAddClip} />

      <SideBarContents
        clips={clips}
        handleDeleteClip={handleDeleteClip}
        searchedClip={searchedClip}
        selectedClipId={selectedClipId}
        onSelectClip={handleSelectClip}
      />
    </Sider>
  );
};
