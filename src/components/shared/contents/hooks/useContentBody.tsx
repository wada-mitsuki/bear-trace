import { useEffect, useState } from 'react';

import { ContentBodyPropsType } from '@/components/shared/contents';

type ContentBodyHooksType = ContentBodyPropsType;

export const useContentBody = ({
  clip,
  handleSaveText,
}: ContentBodyHooksType) => {
  const [titleText, setTitleText] = useState('');
  const [text, setText] = useState('');

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
    handleSaveText(editClip);
  };

  return { onSaveText, setText, setTitleText, text, titleText };
};
