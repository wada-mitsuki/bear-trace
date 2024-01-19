import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Clip } from 'src/entity/clip';
import { fetchAllClips } from 'src/store/clip.async-thunks';
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
      state.createdId += 1;
      const clipId = state.createdId;
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
      state.selectedClipId = null;
    },
    // 編集
    editClip(state, action: PayloadAction<Clip>) {
      clipAdapter.upsertOne(state.clips, action.payload);
    },
    // 検索
    searchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    // 選択中クリップ
    selectedClipId(state, action: PayloadAction<number>) {
      state.selectedClipId = action.payload;
    },
  },
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  extraReducers: (builder) => {
    builder.addCase(fetchAllClips.fulfilled, (state, action) => {
      const clips = action.payload;
      clipAdapter.setAll(state.clips, clips);
      const id = clips.length > 0 ? clips[clips.length - 1].id : 0;
      state.createdId = id;
    });
  },
});

export const clipReducer = clipSlice.reducer;
export const clipActions = clipSlice.actions;
