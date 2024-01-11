import { useDispatch } from 'react-redux';
import { clipActions } from 'src/store/clip.slice';

export const useSideBarContents = () => {
  // store関連
  const dispatch = useDispatch();

  // クリップ選択処理
  const onSelectClip = (clipId: number) => {
    dispatch(clipActions.selectedClipId(clipId));
  };

  return { onSelectClip };
};
