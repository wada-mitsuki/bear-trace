import Sider from 'antd/lib/layout/Sider';
import React from 'react';

import { SideBarContents, SideBarHeader } from '@/components/shared/sidebar';

export const SideBar = () => {
  return (
    <Sider className="border-r-2" theme="light" width="320">
      <SideBarHeader />
      <SideBarContents />
    </Sider>
  );
};
