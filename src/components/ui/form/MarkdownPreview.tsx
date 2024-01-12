import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import remarkBreaks from 'remark-breaks';

type PropsType = {
  text: string;
  title: string;
};

const HTMLPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false },
);

export const MarkdownPreview: FC<PropsType> = ({ text, title, ...props }) => {
  return (
    <div className="w-full">
      <div className="mt-3">
        <HTMLPreview source={'# ' + title} />
      </div>
      <div className="mt-5">
        <HTMLPreview
          components={{
            p: ({ children }) => (
              <p style={{ marginBottom: '1em' }}>{children}</p>
            ),
          }}
          remarkPlugins={[remarkBreaks]}
          source={text}
        />
      </div>
    </div>
  );
};
