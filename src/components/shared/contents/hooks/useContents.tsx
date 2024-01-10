import { useSelector } from 'react-redux';
import { selectedClipSelector } from 'src/store/clip.selectors';

export const useContents = () => {
  const selectedClip = useSelector(selectedClipSelector);

  return { selectedClip };
};
