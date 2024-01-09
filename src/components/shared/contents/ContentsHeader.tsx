import {
  BoldOutlined,
  ExclamationCircleOutlined,
  ItalicOutlined,
  MoreOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';

import { ContentsHeaderOprArea } from '@/components/ui/contents/ContentsHeaderOprArea';
import { ContentsHeaderTitle } from '@/components/ui/contents/ContentsHeaderTitle';

export const ContentsHeader = () => {
  return (
    // Headerをui化したらエラーになる
    <Header className="top-0 right-0 bg-white border-b-2 fixed left-80 min-w-96">
      <Flex align="center" justify="space-between">
        <ContentsHeaderTitle title="デモアプリへようこそ" />
        <ContentsHeaderOprArea>
          <Flex>
            <BoldOutlined />
            <ItalicOutlined />
            <UnderlineOutlined />
          </Flex>
          <ExclamationCircleOutlined />
          <MoreOutlined />
        </ContentsHeaderOprArea>
      </Flex>
    </Header>
  );
};
