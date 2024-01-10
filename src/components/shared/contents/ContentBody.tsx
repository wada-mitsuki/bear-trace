import { Flex } from 'antd';
import React, { FC } from 'react';
import { Clip } from 'src/entity/clip';

import { useContentBody } from '@/components/shared/contents/hooks';
import { ClipTextInput, ClipTitleInput } from '@/components/ui/form/';

type PropsType = {
  clip: Clip;
};

export const ContentBody: FC<PropsType> = ({ clip }) => {
  const { onSaveText, setText, setTitleText, text, titleText } = useContentBody(
    { clip },
  );
  return (
    <main className="mt-20 mx-12" onBlur={onSaveText}>
      <Flex vertical gap={32}>
        <ClipTitleInput
          value={titleText}
          onChange={(e) => setTitleText(e.target.value)}
        />
        <ClipTextInput value={text} onChange={(e) => setText(e.target.value)} />
      </Flex>
    </main>
  );
};
