import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';

import { useSideBarHeader } from '@/components/shared/sidebar/hooks';
import { SearchInput } from '@/components/ui/form/SearchInput';
import { SideBarHeaderActions } from '@/components/ui/sidebar/SideBarHeaderActions';
import { SideBarHeaderTitle } from '@/components/ui/sidebar/SideBarHeaderTitle';

export type SideBarHeaderType = {
  handleSearchClip: (text: string) => void;
  onClickAddClip: () => void;
};

export const SideBarHeader: FC<SideBarHeaderType> = ({
  handleSearchClip,
  onClickAddClip,
}) => {
  const {
    isSearch,
    onChangeSearchText,
    onCloseSearch,
    searchText,
    setIsSearch,
  } = useSideBarHeader({
    handleSearchClip,
  });

  return (
    <Header className="border-b-2 px-5 w-80 fixed bg-white border-r-2">
      {isSearch ? (
        <SearchInput
          value={searchText}
          onChange={(e) => onChangeSearchText(e.target.value)}
          onClose={onCloseSearch}
        />
      ) : (
        <Flex align="center" justify="space-between">
          <SideBarHeaderTitle title="メモ" />
          <SideBarHeaderActions>
            <FormOutlined onClick={onClickAddClip} />
            <SearchOutlined onClick={() => setIsSearch(true)} />
          </SideBarHeaderActions>
        </Flex>
      )}
    </Header>
  );
};
