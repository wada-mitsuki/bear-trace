import { Flex } from 'antd';
import React, { ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
};

export const ClipLayout = ({ children, ...props }: PropsType) => {
  return (
    <div className="m-2 border-b-2 text-gray-400" {...props}>
      <Flex vertical align="start" gap="start">
        {children}
      </Flex>
    </div>
  );
};
