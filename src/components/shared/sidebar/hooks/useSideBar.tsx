import { useSelector } from 'react-redux';
import { clipsSelector } from 'src/store/clip.selectors';

export const useSideBar = () => {
  // store関連
  const clips = useSelector(clipsSelector);

  return { clips };
};
