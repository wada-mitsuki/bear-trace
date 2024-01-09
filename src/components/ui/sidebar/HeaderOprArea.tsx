import { Flex } from 'antd';
import React, { ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
};

export const HeaderOprArea = ({ children }: PropsType) => {
  return (
    <Flex className="text-xl" gap="small">
      {children}
    </Flex>
  );
};
