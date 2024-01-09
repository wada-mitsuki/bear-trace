import { useCallback, useState } from 'react';

// export type useSideBarHeaderHookProps = {

// }

export const useSideBarHeader = () => {
  const [isSearch, setIsSearch] = useState(false);

  const addMemo = useCallback(() => {}, []);

  return setIsSearch;
};

// export type SideBarHeaderReturn = ReturnType<typeof useSideBarHeader>
