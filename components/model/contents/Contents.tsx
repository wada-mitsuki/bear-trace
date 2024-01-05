import {
  BoldOutlined,
  ExclamationCircleOutlined,
  ItalicOutlined,
  MoreOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React from 'react';

export const Contents = () => {
  return (
    <Content>
      {/* コンテンツヘッダー */}
      <Header className="top-0 right-0 bg-white border-b-2 fixed top-0 left-80 min-w-96">
        <Flex align="center" justify="space-between">
          <Flex gap="small">
            <p className="font-bold">デモアプリへようこそ</p>
          </Flex>
          <Flex className="text-base text-gray-400">
            <BoldOutlined />
            <ItalicOutlined />
            <UnderlineOutlined className="mr-4" />
            <ExclamationCircleOutlined className="mr-4" />
            <MoreOutlined />
          </Flex>
        </Flex>
      </Header>

      {/* コンテンツヘッダー */}
      <main className="mt-20 mx-14">
        <div>さあ始めましょう</div>
      </main>
    </Content>
  );
};
