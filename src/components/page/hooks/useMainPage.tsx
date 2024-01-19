import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Clip } from 'src/entity/clip';
import { AppDispatch } from 'src/store';
import { fetchAllClips, setStorageClips } from 'src/store/clip.async-thunks';
import {
  clipsSelector,
  searchedClipSelector,
  searchTextSelector,
  selectedClipSelector,
} from 'src/store/clip.selectors';
import { clipActions } from 'src/store/clip.slice';

export const useMainPage = () => {
  // store関連
  const dispatch = useDispatch<AppDispatch>();

  const clips = useSelector(clipsSelector);
  const selectedClip = useSelector(selectedClipSelector);
  const searchedClip = useSelector(searchedClipSelector);
  const searchText = useSelector(searchTextSelector);

  useEffect(() => {
    // 初回マウント時、ローカルストレージに保存してるクリップを取得しstoreへセット
    dispatch(fetchAllClips());
  }, []);

  useEffect(() => {
    dispatch(setStorageClips(clips));
  }, [clips]);

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

  // 検索テキスト
  const handleSetSearchText = (text: string) => {
    dispatch(clipActions.searchText(text));
  };

  return {
    clips,
    handleAddClip,
    handleDeleteClip,
    handleSaveText,
    handleSelectClip,
    handleSetSearchText,
    searchText,
    searchedClip,
    selectedClip,
  };
};
