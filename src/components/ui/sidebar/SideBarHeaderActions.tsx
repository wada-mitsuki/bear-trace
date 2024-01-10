import { Flex } from 'antd';
import React, { ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
};

export const SideBarHeaderActions = ({ children }: PropsType) => {
  return (
    <Flex className="text-xl" gap="small">
      {children}
    </Flex>
  );
};
