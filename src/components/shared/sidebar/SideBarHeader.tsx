import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { useSideBarHeader } from 'src/components/shared/sidebar/hooks';

import { SearchInput } from '@/components/ui/form/SearchInput';
import { HeaderOprArea } from '@/components/ui/sidebar/HeaderOprArea';
import { HeaderTitle } from '@/components/ui/sidebar/HeaderTitle';

export type SideBarHeaderType = {
  handleClickAddMemo: () => void;
};

export const SideBarHeader = ({ handleClickAddMemo }: SideBarHeaderType) => {
  const { isSearch, setIsSearch } = useSideBarHeader();

  return (
    // Headerをui化したらエラーになる
    <Header className="border-b-2 px-5 w-80 fixed bg-white border-r-2">
      {isSearch ? (
        <SearchInput onClick={() => setIsSearch(false)} />
      ) : (
        <Flex align="center" justify="space-between">
          <HeaderTitle title="メモ" />
          <HeaderOprArea>
            <FormOutlined onClick={handleClickAddMemo} />
            <SearchOutlined onClick={() => setIsSearch(true)} />
          </HeaderOprArea>
        </Flex>
      )}
    </Header>
  );
};
