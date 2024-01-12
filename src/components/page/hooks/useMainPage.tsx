import { useDispatch, useSelector } from 'react-redux';
import { Clip } from 'src/entity/clip';
import { clipsSelector, selectedClipSelector } from 'src/store/clip.selectors';
import { clipActions } from 'src/store/clip.slice';

export const useMainPage = () => {
  // store関連
  const dispatch = useDispatch();

  const selectedClip = useSelector(selectedClipSelector);
  const clips = useSelector(clipsSelector);

  // 新規クリップ追加
  const handleAddClip = () => {
    dispatch(clipActions.addClip());
  };

  // クリップ選択
  const handleSelectClip = (clipId: number) => {
    dispatch(clipActions.selectedClipId(clipId));
  };

  // テキスト保存
  const handleSaveText = (editClip: Clip) => {
    dispatch(clipActions.editClip(editClip));
  };

  return {
    clips,
    handleAddClip,
    handleSaveText,
    handleSelectClip,
    selectedClip,
  };
};
