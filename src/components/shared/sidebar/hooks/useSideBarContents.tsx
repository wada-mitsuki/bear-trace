import { useDispatch } from 'react-redux';
import { Clip } from 'src/entity/clip';
import { clipActions } from 'src/store/clip.slice';

export const useSideBarContents = () => {
  // store関連
  const dispatch = useDispatch();

  // クリップ選択処理
  const onSelectClip = (clip: Clip) => {
    console.log(clip);
    dispatch(clipActions.selectedClip(clip));
  };

  return { onSelectClip };
};
