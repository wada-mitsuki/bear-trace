import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC, useState } from 'react';

import { SearchInput } from '@/components/ui/form/SearchInput';
import { SideBarHeaderActions } from '@/components/ui/sidebar/SideBarHeaderActions';
import { SideBarHeaderTitle } from '@/components/ui/sidebar/SideBarHeaderTitle';

export type SideBarHeaderType = {
  handleSetSearchText: (text: string) => void;
  onClickAddClip: () => void;
  searchText: string;
};

export const SideBarHeader: FC<SideBarHeaderType> = ({
  handleSetSearchText,
  onClickAddClip,
  searchText,
}) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <Header className="border-b-2 px-5 w-80 fixed bg-white border-r-2">
      {isSearch ? (
        <SearchInput
          value={searchText}
          onChange={(e) => handleSetSearchText(e.target.value)}
          onClose={() =>
            searchText ? handleSetSearchText('') : setIsSearch(false)
          }
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
