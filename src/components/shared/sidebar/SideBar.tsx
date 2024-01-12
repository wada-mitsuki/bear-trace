import Sider from 'antd/lib/layout/Sider';
import React, { FC } from 'react';
import { SideBarContents, SideBarHeader } from 'src/components/shared/sidebar';
import { Clip } from 'src/entity/clip';

export type SideBarType = {
  clips: Clip[];
  handleAddClip: () => void;
  handleSelectClip: (clipId: number) => void;
};

export const SideBar: FC<SideBarType> = ({
  clips,
  handleAddClip,
  handleSelectClip,
}) => {
  return (
    // TODO:ここのSiderもui化したいがなぜかレイアウトが崩れる
    <Sider
      className="border-r-2 overflow-auto h-screen"
      theme="light"
      width="320"
    >
      <SideBarHeader onClickAddClip={handleAddClip} />
      <SideBarContents clips={clips} onSelectClip={handleSelectClip} />
    </Sider>
  );
};
