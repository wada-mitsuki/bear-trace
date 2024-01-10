import { useCallback, useState } from 'react';

export const useSideBar = () => {
  const [clip, setClip] = useState(1);

  const handleAddMemo = useCallback(() => {
    setClip(clip + 1);
  }, [clip]);

  return { clip, handleAddMemo };
};
