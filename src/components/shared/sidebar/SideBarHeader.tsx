import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { useSideBarHeader } from 'src/components/shared/sidebar/hooks';

import { SearchInput } from '@/components/ui/form/SearchInput';
import { SideBarHeaderActions } from '@/components/ui/sidebar/SideBarHeaderActions';
import { SideBarHeaderTitle } from '@/components/ui/sidebar/SideBarHeaderTitle';

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
          <SideBarHeaderTitle title="メモ" />
          <SideBarHeaderActions>
            <FormOutlined onClick={handleClickAddMemo} />
            <SearchOutlined onClick={() => setIsSearch(true)} />
          </SideBarHeaderActions>
        </Flex>
      )}
    </Header>
  );
};
