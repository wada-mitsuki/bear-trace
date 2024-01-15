import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import { Flex } from 'antd';
import React, { FC } from 'react';

import { ContentsPropsType } from '@/components/shared/contents';
import { useContentBody } from '@/components/shared/contents/hooks';
import { MarkDownEditor, MarkdownPreview } from '@/components/ui/form';

export type ContentBodyPropsType = {
  isEditOption: boolean;
} & ContentsPropsType;

export const ContentBody: FC<ContentBodyPropsType> = ({
  handleSaveText,
  isEditOption,
  selectedClip,
}) => {
  const { editedText, onChangeEditText, onSaveText } = useContentBody({
    handleSaveText,

    selectedClip,
  });

  return (
    <main className="mt-20 mx-12" onBlur={onSaveText}>
      <Flex gap="5rem">
        <div className="pt-5 w-full">
          <MarkDownEditor
            editedText={editedText}
            isEditOption={isEditOption}
            onChange={onChangeEditText}
          />
        </div>

        {/* プレビュー画面 */}
        <MarkdownPreview editedText={editedText} />
      </Flex>
    </main>
  );
};
