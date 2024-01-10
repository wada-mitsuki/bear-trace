import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Clip } from 'src/entity/clip';
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
    addClip(state, action: PayloadAction<Clip>) {
      clipAdapter.addOne(state.clips, action.payload);
    },
  },
});

export const clipReducer = clipSlice.reducer;
export const clipActions = clipSlice.actions;
