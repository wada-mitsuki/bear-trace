import { Flex } from 'antd';
import React, { FC } from 'react';
import { Clip } from 'src/entity/clip';

import { ContentsPropsType } from '@/components/shared/contents';
import { useContentBody } from '@/components/shared/contents/hooks';
import { ClipTextInput, ClipTitleInput } from '@/components/ui/form/';

export type ContentBodyPropsType = {
  clip: Clip;
} & ContentsPropsType;

export const ContentBody: FC<ContentBodyPropsType> = ({
  clip,
  handleSaveText,
}) => {
  const { onChangeText, onChangeTitleText, onSaveText, text, titleText } =
    useContentBody({ clip, handleSaveText });
  return (
    <main className="mt-20 mx-12" onBlur={onSaveText}>
      <Flex vertical gap={32}>
        <ClipTitleInput
          value={titleText}
          onChange={(e) => onChangeTitleText(e.target.value)}
        />
        <ClipTextInput
          value={text}
          onChange={(e) => onChangeText(e.target.value)}
        />
      </Flex>
    </main>
  );
};