import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from 'src/store';
import { CLIP_FEATURE_KEY, clipAdapter } from 'src/store/clip.state';

const { selectAll } = clipAdapter.getSelectors();

const clipFeatureSelector = (state: StoreState) => state[CLIP_FEATURE_KEY];

/**
 * 記事一覧
 */
export const clipsSelector = createSelector(clipFeatureSelector, (state) =>
  selectAll(state.clips),
);
/**
 * 選択中
 */
export const selectedClipSelector = createSelector(
  clipFeatureSelector,
  (state) => state.selectedClip,
);
