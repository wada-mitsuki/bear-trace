import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from 'src/store';
import { CLIP_FEATURE_KEY, clipAdapter } from 'src/store/clip.state';

const { selectAll, selectById } = clipAdapter.getSelectors();

const clipFeatureSelector = (state: StoreState) => state[CLIP_FEATURE_KEY];

/**
 * 記事一覧
 */
export const clipsSelector = createSelector(clipFeatureSelector, (state) =>
  selectAll(state.clips),
);
/**
 * 選択中記事
 */
export const selectedClipSelector = createSelector(
  clipFeatureSelector,
  (state) =>
    state.selectedClipId ? selectById(state.clips, state.selectedClipId) : null,
);
/**
 * 検索ワード
 */
export const searchTextSelector = createSelector(
  clipFeatureSelector,
  ({ searchText }) => searchText,
);

/**
 * 記事検索
 */
export const searchedClipSelector = createSelector(
  clipsSelector,
  searchTextSelector,
  (clips, searchText) => {
    return clips.filter(
      (clip) =>
        clip.title.includes(searchText) || clip.text.includes(searchText),
    );
  },
);
