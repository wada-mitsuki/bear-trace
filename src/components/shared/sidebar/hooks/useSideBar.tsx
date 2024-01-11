import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clipsSelector } from 'src/store/clip.selectors';
import { clipActions } from 'src/store/clip.slice';

export const useSideBar = () => {
  // store関連
  const clips = useSelector(clipsSelector);
  const dispatch = useDispatch();

  // クリップ追加処理
  const handleAddClip = useCallback(() => {
    dispatch(clipActions.addClip());
  }, [clips]);

  return { clips, handleAddClip };
};
