import { DownOutlined, FormOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';

export const SideBar = () => {
  return (
    <Sider className="border-r-2" theme="light" width="320">
      {/* サイドバーヘッダー */}
      <Header className="border-b-2 px-5 w-80 fixed bg-white border-r-2">
        <Flex align="center" justify="space-between">
          <Flex gap="small">
            <p className="font-bold">メモ</p>
            <DownOutlined className="text-xs" />
          </Flex>
          <Flex className="text-xl" gap="small">
            <FormOutlined />
            <SearchOutlined />
          </Flex>
        </Flex>
      </Header>
      <div className="mt-20">
        {/* サイドバーコンテンツ */}
        {Array.from({ length: 24 }, (_, i) => (
          <div className="m-2 border-b-2 text-gray-400" key={i}>
            <Flex vertical align="start" gap="start">
              <p className="font-bold text-inherit mb-1">素敵な新しいメモ</p>
              <p className="">落ち着いて、何か書いてみましょう</p>
              <p className="text-xs mt-5 mb-3">たった今</p>
            </Flex>
          </div>
        ))}
      </div>
    </Sider>
  );
};
