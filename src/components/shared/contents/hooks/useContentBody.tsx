import { useEffect, useState } from 'react';
import { nowDate } from 'src/utils/day';
import { useDebouncedCallback } from 'use-debounce';

import { ContentsPropsType } from '@/components/shared/contents';

type ContentBodyHooksType = ContentsPropsType;

export const useContentBody = ({
  handleSaveText,
  selectedClip: clip,
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
  const onChangeText = (text?: string) => {
    // マークダウンエディタのライブラリがundifineを許容してるのでこの書き方
    setText(text ?? '');
    debounceSaveText();
  };

  const debounceSaveText = useDebouncedCallback(() => {
    onSaveText();
  }, 1000);

  const onSaveText = () => {
    const updateAt = nowDate();

    const editClip = {
      ...clip,
      text: text,
      title: titleText,
      updateAt: updateAt,
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
