import { DownOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import React from 'react';

type PropsType = {
  title: string;
};

export const SideBarHeaderTitle = ({ title }: PropsType) => {
  return (
    <Flex gap="small">
      <p className="font-bold">{title}</p>
      <DownOutlined className="text-xs" />
    </Flex>
  );
};
