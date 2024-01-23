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
    return this.getStorageClips();
  }

  async addClip() {
    const clips = this.getStorageClips();

    const createdAt = nowDate();
    const clipId = clips.length > 0 ? clips[clips.length - 1].id : 0;

    const newClip = {
      createdAt: createdAt,
      id: clipId + 1,
      text: '',
      title: '',
    };
    const newClips = [...clips, newClip];
    this.setStorageClips(newClips);
    return newClips;
  }

  async editClip(editedClip: Clip) {
    const clips = this.getStorageClips();

    const newClips = clips.map((clip: Clip) =>
      clip.id === editedClip.id ? editedClip : clip,
    );
    this.setStorageClips(newClips);
    return newClips;
  }

  async deleteClip(clipId: number) {
    const clips = this.getStorageClips();

    const deletedClips = clips.filter(
      (clip: { id: number }) => clip.id !== clipId,
    );

    this.setStorageClips(deletedClips);
    return deletedClips;
  }

  // storageからClip情報を取得
  private getStorageClips() {
    const clipsJson = localStorage.getItem(`clips`);
    const clips = clipsJson ? JSON.parse(clipsJson) : [];
    return clips;
  }

  // storageにClip情報を格納
  private setStorageClips(clips: Clip[]) {
    localStorage.setItem(`clips`, JSON.stringify(clips));
    return;
  }
}
