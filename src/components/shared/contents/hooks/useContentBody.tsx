import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Clip } from 'src/entity/clip';
import { clipActions } from 'src/store/clip.slice';

type ContentBodyHooksType = {
  clip: Clip;
};

export const useContentBody = ({ clip }: ContentBodyHooksType) => {
  const [titleText, setTitleText] = useState('');
  const [text, setText] = useState('');

  // store関連
  const dispatch = useDispatch();

  useEffect(() => {
    setTitleText(clip.title);
    setText(clip.text);
  }, [clip]);

  const onSaveText = () => {
    const updateDay = new Date().toLocaleDateString();

    const editClip = {
      ...clip,
      text: text,
      title: titleText,
      updateAt: updateDay,
    };
    dispatch(clipActions.editClip(editClip));
  };

  return { onSaveText, setText, setTitleText, text, titleText };
};
