import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import remarkBreaks from 'remark-breaks';

type PropsType = {
  editedText: string;
};

const HTMLPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false },
);

export const MarkdownPreview: FC<PropsType> = ({ editedText, ...props }) => {
  return (
    <div className="w-full mt-5" data-color-mode="light">
      <HTMLPreview
        components={{
          p: ({ children }) => (
            <p style={{ marginBottom: '1em' }}>{children}</p>
          ),
        }}
        remarkPlugins={[remarkBreaks]}
        source={editedText}
        wrapperElement={{
          'data-color-mode': 'light',
        }}
      />
    </div>
  );
};
