import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { ContentBody, ContentsHeader } from 'src/components/shared/contents';
import { Clip } from 'src/entity/clip';

import { useContents } from '@/components/shared/contents/hooks';

export type ContentsPropsType = {
  handleSaveText: (editClip: Clip) => void;
};

export const Contents: FC<ContentsPropsType> = ({ handleSaveText }) => {
  const { selectedClip } = useContents();
  return (
    <Content className="overflow-auto">
      {selectedClip && (
        <>
          <ContentsHeader title={selectedClip.title} />
          <ContentBody clip={selectedClip} handleSaveText={handleSaveText} />
        </>
      )}
    </Content>
  );
};
