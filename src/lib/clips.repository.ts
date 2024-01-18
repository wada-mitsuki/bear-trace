import { Clip } from 'src/entity/clip';

export interface IClipsRepository {
  /**
   * ログイン済みユーザーの取得
   */
  setClip(): Promise<Clip>;
}

export class ClipsRepository implements IClipsRepository {
  async setClip() {
    const newClip = {
      createdAt: '',
      id: 0,
      text: '',
      title: '',
    };
    localStorage.setItem(`${newClip.id}`, JSON.stringify(newClip));
    return newClip;
  }
}
