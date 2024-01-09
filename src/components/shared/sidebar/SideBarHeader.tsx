import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';

import { SearchInput } from '@/components/ui/form/SearchInput';
import { HeaderOprArea } from '@/components/ui/sidebar/HeaderOprArea';
import { HeaderTitle } from '@/components/ui/sidebar/HeaderTitle';

export type SideBarHeaderType = {
  handleClickAddMemo: () => void;
  handleSetSearch: (value: boolean) => void;
  isSearch: boolean;
};

export const SideBarHeader = ({
  handleClickAddMemo,
  handleSetSearch,
  isSearch,
}: SideBarHeaderType) => {
  return (
    // Headerをui化したらエラーになる
    <Header className="border-b-2 px-5 w-80 fixed bg-white border-r-2">
      {isSearch ? (
        <SearchInput onClick={() => handleSetSearch(false)} />
      ) : (
        <Flex align="center" justify="space-between">
          <HeaderTitle title="メモ" />
          <HeaderOprArea>
            <FormOutlined onClick={handleClickAddMemo} />
            <SearchOutlined onClick={() => handleSetSearch(true)} />
          </HeaderOprArea>
        </Flex>
      )}
    </Header>
  );
};
