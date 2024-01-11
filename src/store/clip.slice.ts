import { createSlice } from '@reduxjs/toolkit';
import {
  CLIP_FEATURE_KEY,
  clipAdapter,
  initialClipsState,
} from 'src/store/clip.state';

export const clipSlice = createSlice({
  initialState: initialClipsState,
  name: CLIP_FEATURE_KEY,
  reducers: {
    // 新規追加
    addClip(state) {
      const clips = clipAdapter.getSelectors().selectAll(state.clips);
      const clipId = clips.length;
      const createdDay = new Date().toLocaleDateString();

      const newClip = {
        createdAt: createdDay,
        id: clipId,
        text: '落ち着いて、何か書いてみましょう',
        title: '素敵な新しいメモ',
      };
      clipAdapter.addOne(state.clips, newClip);
    },
  },
});

export const clipReducer = clipSlice.reducer;
export const clipActions = clipSlice.actions;
