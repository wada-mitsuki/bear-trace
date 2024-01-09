import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export const CLIP_KEY = 'clip';

export interface ClipModel {
  createdAt: string;
  id: string;
  text: string;
  title: string;
  updatedAt?: string;
}

export const clipAdapter = createEntityAdapter<ClipModel>();

export interface ClipState {
  clips: EntityState<ClipModel, string>;
}

export const initialState: ClipState = {
  clips: clipAdapter.getInitialState(),
};
