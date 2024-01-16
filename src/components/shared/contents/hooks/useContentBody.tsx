import { useEffect, useState } from 'react';
import { nowDate } from 'src/utils/day';
import { useDebouncedCallback } from 'use-debounce';

import { ContentsPropsType } from '@/components/shared/contents';

type ContentBodyHooksType = ContentsPropsType;

export const useContentBody = ({
  handleSaveText,
  selectedClip: clip,
}: ContentBodyHooksType) => {
  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    setEditedText(clip.title + clip.text);
  }, [clip]);

  const onChangeEditText = (text?: string) => {
    setEditedText(text ?? '');
    debounceSaveText();
  };
  const onBlurEditText = () => {
    onSaveText();
  };

  const debounceSaveText = useDebouncedCallback(() => {
    onSaveText();
  }, 1000);

  const onSaveText = () => {
    const firstRowIndex = editedText.indexOf('\n', 0);
    let title = '';
    let subText = '';

    // 改行がない場合
    if (firstRowIndex === -1) {
      title = editedText;

      // 改行がある場合、一行目のみをタイトルとする
    } else {
      title = editedText.slice(0, firstRowIndex);
      title = `${title}\n`;
      subText = editedText.slice(firstRowIndex + 1);
    }

    const updateAt = nowDate();

    const editClip = {
      ...clip,
      text: subText,
      title: title,
      updateAt: updateAt,
    };
    handleSaveText(editClip);
  };

  return {
    editedText,
    onBlurEditText,
    onChangeEditText,
    onSaveText,
  };
};
