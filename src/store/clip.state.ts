import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { Clip } from 'src/entity/clip';

export const CLIP_FEATURE_KEY = 'clip';

export const clipAdapter = createEntityAdapter<Clip>();

export interface ClipsState {
  clips: EntityState<Clip, number>;
  selectedClip: Clip;
}

export const initialClipsState: ClipsState = {
  clips: clipAdapter.getInitialState(),
  selectedClip: {
    createdAt: '',
    id: 0,
    text: '',
    title: '',
  },
};
