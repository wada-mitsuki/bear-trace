import {
  BoldOutlined,
  ExclamationCircleOutlined,
  ItalicOutlined,
  MoreOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import removeMd from 'remove-markdown';

import { ContentsHeaderActions } from '@/components/ui/contents/ContentsHeaderActions';
import { ContentsHeaderTitle } from '@/components/ui/contents/ContentsHeaderTitle';

type PropsType = {
  isEditOption: boolean;
  setIsEditOption: (boolean: boolean) => void;
  title: string;
};

export const ContentsHeader: FC<PropsType> = ({
  isEditOption,
  setIsEditOption,
  title,
}) => {
  return (
    // Headerをui化したらエラーになる
    <Header className="top-0 right-0 border-b-2 fixed bg-white left-80 min-w-96 z-50 items-center">
      {title ? (
        <Flex align="center" justify="space-between">
          <ContentsHeaderTitle title={removeMd(title)} />
          <ContentsHeaderActions>
            <Flex
              className="cursor-pointer"
              onClick={() => setIsEditOption(!isEditOption)}
            >
              <BoldOutlined />
              <ItalicOutlined />
              <UnderlineOutlined />
            </Flex>
            <ExclamationCircleOutlined />
            <MoreOutlined />
          </ContentsHeaderActions>
        </Flex>
      ) : (
        <ContentsHeaderActions justify="flex-end" minHeight="h-16">
          <Flex
            className="cursor-pointer"
            onClick={() => setIsEditOption(!isEditOption)}
          >
            <BoldOutlined />
            <ItalicOutlined />
            <UnderlineOutlined />
          </Flex>
          <ExclamationCircleOutlined />
          <MoreOutlined />
        </ContentsHeaderActions>
      )}
    </Header>
  );
};
