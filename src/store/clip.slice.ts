import { createSlice } from '@reduxjs/toolkit';
import { CLIP_KEY, clipAdapter, initialState } from 'src/store/clip.state';

export const clipSlice = createSlice({
  initialState: initialState,
  name: CLIP_KEY,
  reducers: {
    addClip: (state, action) => {
      const { data } = action.payload;
      clipAdapter.setAll(state.clips, data);
    },
  },
});

export const userReducer = clipSlice.reducer;
export const userActions = clipSlice.actions;
