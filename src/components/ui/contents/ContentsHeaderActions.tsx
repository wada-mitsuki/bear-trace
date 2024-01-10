import { Flex } from 'antd';
import React, { ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
};

export const ContentsHeaderActions = ({ children }: PropsType) => {
  return <Flex className="text-base text-gray-400 gap-4">{children}</Flex>;
};
