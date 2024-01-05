import {
  CloseCircleFilled,
  DownOutlined,
  FormOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Flex, Input } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useState } from 'react';

export const SideBarHeader = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <Header className="border-b-2 px-5 w-80 fixed bg-white border-r-2">
      {isSearch ? (
        <Input
          className="border-red-200 border-4"
          placeholder="検索"
          prefix={<SearchOutlined className="site-form-item-icon" />}
          suffix={
            <CloseCircleFilled
              style={{ color: 'rgba(0,0,0,.45)' }}
              onClick={() => setIsSearch(false)}
            />
          }
        />
      ) : (
        <Flex align="center" justify="space-between">
          <Flex gap="small">
            <p className="font-bold">メモ</p>
            <DownOutlined className="text-xs" />
          </Flex>
          <Flex className="text-xl" gap="small">
            <FormOutlined />
            <SearchOutlined onClick={() => setIsSearch(true)} />
          </Flex>
        </Flex>
      )}
    </Header>
  );
};
