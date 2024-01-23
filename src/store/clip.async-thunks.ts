import { createAsyncThunk } from '@reduxjs/toolkit';
import { Clip } from 'src/entity/clip';
import { repositories } from 'src/lib/repositories';
import { CLIP_FEATURE_KEY } from 'src/store/clip.state';

export const fetchAllClips = createAsyncThunk(
  `${CLIP_FEATURE_KEY}/getClips`,
  async () => {
    return repositories.clips.getAllClips();
  },
);

export const addNewClip = createAsyncThunk(
  `${CLIP_FEATURE_KEY}/addClip`,
  async () => {
    return repositories.clips.addClip();
  },
);

export const editedClip = createAsyncThunk(
  `${CLIP_FEATURE_KEY}/editClip`,
  async (clip: Clip) => {
    return repositories.clips.editClip(clip);
  },
);

export const deleteClip = createAsyncThunk(
  `${CLIP_FEATURE_KEY}/deleteClip`,
  async (clipId: number) => {
    return repositories.clips.deleteClip(clipId);
  },
);
