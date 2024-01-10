import { configureStore } from '@reduxjs/toolkit';
import { clipReducer } from 'src/store/clip.slice';
import { CLIP_FEATURE_KEY } from 'src/store/clip.state';

export const reducer = {
  [CLIP_FEATURE_KEY]: clipReducer,
};

export const store = configureStore({
  reducer,
});
export type AppStore = typeof store;
export type StoreState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
