import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchedClipSelector } from 'src/store/clip.selectors';
import { clipActions } from 'src/store/clip.slice';

import { SearchInput } from '@/components/ui/form/SearchInput';
import { SideBarHeaderActions } from '@/components/ui/sidebar/SideBarHeaderActions';
import { SideBarHeaderTitle } from '@/components/ui/sidebar/SideBarHeaderTitle';

export type SideBarHeaderType = {
  onClickAddClip: () => void;
};

export const SideBarHeader: FC<SideBarHeaderType> = ({ onClickAddClip }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  // store関連
  const dispatch = useDispatch();

  const selectedClip = useSelector(searchedClipSelector);

  const test = (text: string) => {
    setSearchText(text);
    dispatch(clipActions.searchClip(text));
  };

  return (
    // Headerをui化したらエラーになる
    <Header className="border-b-2 px-5 w-80 fixed bg-white border-r-2">
      {isSearch ? (
        <SearchInput
          value={searchText}
          onChange={(e) => test(e.target.value)}
          onClick={() => setIsSearch(false)}
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
