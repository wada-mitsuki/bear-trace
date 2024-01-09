import { useCallback, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { addClip } from 'src/store/clipReducer';

// export type useSideBarHeaderHookProps = {

// }

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSideBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [memo, setMemo] = useState(1);

  // store関連
  const memos = useAppSelector((state) => state.clip.memos);
  const memoCnt = memos.length;
  const dispatch = useDispatch();

  const handleAddMemo = useCallback(() => {
    const test = {
      id: memos.length + 1,
      text: '',
      title: '',
      updatedAt: '',
    };
    dispatch(addClip(test));
    // setMemo(memo + 1);
  }, [memo]);

  return { handleAddMemo, memo, memoCnt, setIsSearch };
};

// export type SideBarHeaderReturn = ReturnType<typeof useSideBarHeader>
