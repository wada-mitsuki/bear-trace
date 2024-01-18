import { ClipsRepository, IClipsRepository } from 'src/lib';

interface IRepositories {
  clips: IClipsRepository;
}

class Repositories implements IRepositories {
  private static instance: IRepositories;
  readonly clips: IClipsRepository;

  constructor(repositories: IRepositories) {
    const { clips } = repositories;
    this.clips = clips;
  }

  static getInstance() {
    if (!Repositories.instance) {
      const clips = new ClipsRepository();
      // Repositories.instance = new Repositories({
      //   clips,
      // });
    }
    return Repositories.instance;
  }
}

export const repositories = Repositories.getInstance();
// export const clipsRepository = repositories.clips;
