import { useState } from 'react';

export const useSideBarHeader = () => {
  const [isSearch, setIsSearch] = useState(false);

  return { isSearch, setIsSearch };
};
