import { Clip } from 'src/entity/clip';

export interface IClipsRepository {
  getAllClips(): Promise<Clip[]>;
  setClip(clips: Clip[]): Promise<void>;
}

export class ClipsRepository implements IClipsRepository {
  async setClip(clips: Clip[]) {
    localStorage.setItem(`clips`, JSON.stringify(clips));
    return;
  }
  async getAllClips() {
    const clipsJson = localStorage.getItem(`clips`);
    const clips = clipsJson ? JSON.parse(clipsJson) : [];
    return clips;
  }
}
