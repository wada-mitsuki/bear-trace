import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import dynamic from 'next/dynamic';
import React, { FC } from 'react';

type PropsType = {
  isEditOption: boolean;
  onChange: (text?: string) => void;
  text: string;
};

// ここで宣言しないと文字が入力できなくなる
const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false },
);

export const MarkDownEditor: FC<PropsType> = ({
  isEditOption,
  onChange,
  text,
  ...props
}) => {
  return (
    <MDEditor
      hideToolbar={isEditOption}
      preview="edit"
      value={text}
      onChange={onChange}
    />
  );
};
