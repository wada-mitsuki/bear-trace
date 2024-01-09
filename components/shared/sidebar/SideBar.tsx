import Sider from 'antd/lib/layout/Sider';
import React from 'react';

import { SideBarContents, SideBarHeader } from '@/components/shared/sidebar';
import { useSideBar } from '@/components/shared/sidebar/hooks';

export const SideBar = () => {
  const { handleAddMemo, memoCnt } = useSideBar();
  return (
    <Sider
      className="border-r-2 overflow-auto h-screen"
      theme="light"
      width="320"
    >
      <SideBarHeader handleClickAddMemo={handleAddMemo} />
      <SideBarContents memo={memoCnt} />
    </Sider>
  );
};
