import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { ContentBody, ContentsHeader } from 'src/components/shared/contents';
import { Clip } from 'src/entity/clip';

export type ContentsPropsType = {
  handleSaveText: (editClip: Clip) => void;
  selectedClip: Clip;
};

export const Contents: FC<ContentsPropsType> = ({
  handleSaveText,
  selectedClip,
}) => {
  return (
    <Content className="overflow-auto">
      <ContentsHeader title={selectedClip.title} />
      <ContentBody
        handleSaveText={handleSaveText}
        selectedClip={selectedClip}
      />
    </Content>
  );
};
