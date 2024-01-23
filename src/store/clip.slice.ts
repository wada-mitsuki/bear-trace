import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addNewClip,
  deleteClip,
  editedClip,
  fetchAllClips,
} from 'src/store/clip.async-thunks';
import {
  CLIP_FEATURE_KEY,
  clipAdapter,
  initialClipsState,
} from 'src/store/clip.state';

export const clipSlice = createSlice({
  initialState: initialClipsState,
  name: CLIP_FEATURE_KEY,
  reducers: {
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
    // ローカルストレージに保存してるクリップ取得
    builder.addCase(fetchAllClips.fulfilled, (state, action) => {
      const clips = action.payload;
      clipAdapter.setAll(state.clips, clips);
    });
    // 新規追加
    builder.addCase(addNewClip.fulfilled, (state, action) => {
      clipAdapter.setAll(state.clips, action.payload);
    });
    // 編集
    builder.addCase(editedClip.fulfilled, (state, action) => {
      clipAdapter.setAll(state.clips, action.payload);
    });
    // 削除
    builder.addCase(deleteClip.fulfilled, (state, action) => {
      clipAdapter.setAll(state.clips, action.payload);
    });
  },
});

export const clipReducer = clipSlice.reducer;
export const clipActions = clipSlice.actions;
