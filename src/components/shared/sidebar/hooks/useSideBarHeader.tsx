import { useState } from 'react';

export type SideBarHeaderHooksType = {
  handleSearchClip: (text: string) => void;
};

export const useSideBarHeader = ({
  handleSearchClip,
}: SideBarHeaderHooksType) => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const onChangeSearchText = (text: string) => {
    setSearchText(text);
    handleSearchClip(text);
  };

  const onCloseSearch = () => {
    if (searchText) {
      setSearchText('');
      handleSearchClip('');
    } else {
      setIsSearch(false);
    }
  };

  return {
    isSearch,
    onChangeSearchText,
    onCloseSearch,
    searchText,
    setIsSearch,
  };
};
