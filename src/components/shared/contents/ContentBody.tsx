import { Flex } from 'antd';
import React, { FC } from 'react';

import { ContentsPropsType } from '@/components/shared/contents';
import { useContentBody } from '@/components/shared/contents/hooks';
import { ClipTextInput, ClipTitleInput } from '@/components/ui/form/';

export type ContentBodyPropsType = ContentsPropsType;

export const ContentBody: FC<ContentBodyPropsType> = ({
  handleSaveText,
  selectedClip,
}) => {
  const { onChangeText, onChangeTitleText, onSaveText, text, titleText } =
    useContentBody({ handleSaveText, selectedClip });
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
