import { Clip } from 'src/entity/clip';
import { nowDate } from 'src/utils/day';

export interface IClipsRepository {
  addClip(): Promise<Clip[]>;
  deleteClip(clipId: number): Promise<Clip[]>;
  editClip(clip: Clip): Promise<Clip[]>;
  getAllClips(): Promise<Clip[]>;
}

export class ClipsRepository implements IClipsRepository {
  async getAllClips() {
    // STRAT==ここの処理共通化していいものなんですかね
    const clipsJson = localStorage.getItem(`clips`);
    const clips = clipsJson ? JSON.parse(clipsJson) : [];
    // ===END

    return clips;
  }

  async addClip() {
    const clipsJson = localStorage.getItem(`clips`);
    const clips = clipsJson ? JSON.parse(clipsJson) : [];

    const createdAt = nowDate();
    const clipId = clips.length > 0 ? clips[clips.length - 1].id : 0;

    const newClip = {
      createdAt: createdAt,
      id: clipId + 1,
      text: '',
      title: '',
    };
    const newClips = [...clips, newClip];
    localStorage.setItem(`clips`, JSON.stringify(newClips));
    return newClips;
  }

  async editClip(editedClip: Clip) {
    const clipsJson = localStorage.getItem(`clips`);
    const clips = clipsJson ? JSON.parse(clipsJson) : [];

    const newClips = clips.map((clip: Clip) =>
      clip.id === editedClip.id ? editedClip : clip,
    );
    localStorage.setItem(`clips`, JSON.stringify(newClips));
    return newClips;
  }

  async deleteClip(clipId: number) {
    const clipsJson = localStorage.getItem(`clips`);
    const clips = clipsJson ? JSON.parse(clipsJson) : [];

    const deletedClips = clips.filter(
      (clip: { id: number }) => clip.id !== clipId,
    );

    localStorage.setItem(`clips`, JSON.stringify(deletedClips));
    return deletedClips;
  }
}
