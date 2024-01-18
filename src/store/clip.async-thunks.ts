import { createAsyncThunk } from '@reduxjs/toolkit';
import { repositories } from 'src/lib';
import { CLIP_FEATURE_KEY } from 'src/store/clip.state';

// export const fetchAllClips = createAsyncThunk(
//   `${CLIP_FEATURE_KEY}/fetchClips`,
//   async () => {
//     return repositories.users.getLoggedInUser();
//   },
// );

export const fetchAllClips = createAsyncThunk(
  `${CLIP_FEATURE_KEY}/addClips`,
  async () => {
    return repositories.clips.setClip();
    // return clipsRepository.setClip();
  },
);
