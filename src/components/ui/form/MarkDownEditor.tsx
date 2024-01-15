import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import dynamic from 'next/dynamic';
import React, { FC, useEffect, useState } from 'react';

type PropsType = {
  isEditOption: boolean;
  onChange: (text?: string) => void;
  text: string;
};

// ここで宣言しないと文字が入力できなくなる
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export const MarkDownEditor: FC<PropsType> = ({
  isEditOption,
  onChange,
  text,
  ...props
}) => {
  /*
   * react-md-editorのheightがnumber型しか受け付けない。
   * そのため初期処理で画面サイズを取得してheightを設定。
   */
  const [editorHeight, setEditorHeight] = useState(300);

  useEffect(() => {
    // ビューポートの高さの80%
    const heightInPixels = window.innerHeight * 0.8;
    setEditorHeight(heightInPixels);
  }, []);

  return (
    <div data-color-mode="light">
      <MDEditor
        enableScroll={false}
        height={editorHeight}
        hideToolbar={isEditOption}
        preview="edit"
        value={text}
        visiableDragbar={false}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
