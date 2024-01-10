import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clipsSelector } from 'src/store/clip.selectors';
import { clipActions } from 'src/store/clip.slice';

export const useSideBar = () => {
  const [clip, setClip] = useState(1);

  // store関連
  const clips = useSelector(clipsSelector);
  const dispatch = useDispatch();

  // クリップ追加処理
  const handleAddClip = useCallback(() => {
    const clipId = clips.length + 1;
    const createdDay = new Date().toLocaleDateString();

    const newClip = {
      createdAt: createdDay,
      id: clipId,
      text: '落ち着いて、何か書いてみましょう',
      title: '素敵な新しいメモ',
    };

    dispatch(clipActions.addClip(newClip));
  }, [clips]);

  return { clips, handleAddClip };
};
