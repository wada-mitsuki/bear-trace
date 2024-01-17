import { useDispatch, useSelector } from 'react-redux';
import { Clip } from 'src/entity/clip';
import {
  clipsSelector,
  searchedClipSelector,
  selectedClipSelector,
} from 'src/store/clip.selectors';
import { clipActions } from 'src/store/clip.slice';

export const useMainPage = () => {
  // store関連
  const dispatch = useDispatch();

  const selectedClip = useSelector(selectedClipSelector);
  const clips = useSelector(clipsSelector);
  const searchedClip = useSelector(searchedClipSelector);

  // 新規クリップ追加
  const handleAddClip = () => {
    dispatch(clipActions.addClip());
  };

  // クリップ選択
  const handleSelectClip = (clipId: number) => {
    dispatch(clipActions.selectedClipId(clipId));
  };
  // クリップ削除
  const handleDeleteClip = () => {
    selectedClip && dispatch(clipActions.deleteClip(selectedClip.id));
  };

  // テキスト保存
  const handleSaveText = (editClip: Clip) => {
    dispatch(clipActions.editClip(editClip));
  };

  // 検索
  const handleSearchClip = (text: string) => {
    dispatch(clipActions.searchClip(text));
  };

  return {
    clips,
    handleAddClip,
    handleDeleteClip,
    handleSaveText,
    handleSearchClip,
    handleSelectClip,
    searchedClip,
    selectedClip,
  };
};
