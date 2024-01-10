import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { SideBarContents, SideBarHeader } from 'src/components/shared/sidebar';
import { useSideBar } from 'src/components/shared/sidebar/hooks';

export const SideBar = () => {
  const { clips, handleAddClip } = useSideBar();
  return (
    // TODO:ここのSiderもui化したいがなぜかレイアウトが崩れる
    <Sider
      className="border-r-2 overflow-auto h-screen"
      theme="light"
      width="320"
    >
      <SideBarHeader handleClickAddMemo={handleAddClip} />
      <SideBarContents clips={clips} />
    </Sider>
  );
};
