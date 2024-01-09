import { createSlice } from '@reduxjs/toolkit';

export type ClipType = {
  id: number;
  text: string;
  title: string;
  updatedAt: string;
};

const clipContext: ClipType = {
  id: 0,
  text: '',
  title: '',
  updatedAt: '',
};

export type ClipsType = {
  clips(clips: any): import('./clip.state').ClipType[];
  memos: ClipType[];
};

const initialState: ClipsType = {
  memos: [],
};

interface CounterState {
  clips: number;
}

// const initialState: CounterState = {
//   clips: 0,
// };

const clipSlice = createSlice({
  initialState: initialState,
  name: 'clip',
  reducers: {
    addClip: (state, action) => {
      state.memos = [{ ...state, ...action.payload }];
    },
  },
});

export const { addClip } = clipSlice.actions;
export default clipSlice.reducer;
