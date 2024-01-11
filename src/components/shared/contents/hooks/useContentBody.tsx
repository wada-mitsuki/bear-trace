import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

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

  // TODO:markdownでtitleTextとtextがもしかしたら一つになるかも
  const onChangeTitleText = (text: string) => {
    setTitleText(text);
    debounceSaveText();
  };
  const onChangeText = (text: string) => {
    setText(text);
    debounceSaveText();
  };

  const debounceSaveText = useDebouncedCallback(() => {
    onSaveText();
  }, 1000);

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

  return {
    onChangeText,
    onChangeTitleText,
    onSaveText,
    text,
    titleText,
  };
};
