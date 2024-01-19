import { createAsyncThunk } from '@reduxjs/toolkit';
import { Clip } from 'src/entity/clip';
import { repositories } from 'src/lib/repositories';
import { CLIP_FEATURE_KEY } from 'src/store/clip.state';

export const setStorageClips = createAsyncThunk(
  `${CLIP_FEATURE_KEY}/addClips`,
  async (clips: Clip[]) => {
    return repositories.clips.setClip(clips);
  },
);
export const fetchAllClips = createAsyncThunk(
  `${CLIP_FEATURE_KEY}/getClips`,
  async () => {
    return repositories.clips.getAllClips();
  },
);
