import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { Clip } from 'src/entity/clip';

export const CLIP_FEATURE_KEY = 'clip';

export const clipAdapter = createEntityAdapter<Clip>();

export interface ClipsState {
  clips: EntityState<Clip, number>;
  searchText: string;
  selectedClipId: number | null;
}

export const initialClipsState: ClipsState = {
  clips: clipAdapter.getInitialState(),
  searchText: '',
  selectedClipId: null,
};
