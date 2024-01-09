import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from 'src/store';

// eslint-disable-next-line no-restricted-imports
import { CLIP_KEY, clipAdapter } from '../store/clip.state';

const { selectAll } = clipAdapter.getSelectors();

const clipFeatureSelector = (state: StoreState) => state[CLIP_KEY];

/**
 * ユーザー一覧
 */
export const usersSelector = createSelector(clipFeatureSelector, (state) =>
  selectAll(state.clips),
);
