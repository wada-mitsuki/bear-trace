import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Clip } from 'src/entity/clip';
import {
  CLIP_FEATURE_KEY,
  clipAdapter,
  initialClipsState,
} from 'src/store/clip.state';
import { nowDate } from 'src/utils/day';

export const clipSlice = createSlice({
  initialState: initialClipsState,
  name: CLIP_FEATURE_KEY,
  reducers: {
    // 新規追加
    addClip(state) {
      const clips = clipAdapter.getSelectors().selectAll(state.clips);
      const clipId = clips.length + 1;
      const createdAt = nowDate();

      const newClip = {
        createdAt: createdAt,
        id: clipId,
        text: '',
        title: '',
      };
      clipAdapter.addOne(state.clips, newClip);
    },

    // 削除
    deleteClip(state, action: PayloadAction<number>) {
      clipAdapter.removeOne(state.clips, action.payload);
    },
    // 編集
    editClip(state, action: PayloadAction<Clip>) {
      clipAdapter.upsertOne(state.clips, action.payload);
      state.selectedClipId = null;
    },
    // 選択中クリップ
    selectedClipId(state, action: PayloadAction<number>) {
      state.selectedClipId = action.payload;
    },
  },
});

export const clipReducer = clipSlice.reducer;
export const clipActions = clipSlice.actions;
