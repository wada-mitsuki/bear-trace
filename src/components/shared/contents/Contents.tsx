import { Content } from 'antd/lib/layout/layout';
import React, { FC, useState } from 'react';
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
  const [isEditOption, setIsEditOption] = useState(false);

  return (
    <Content className="overflow-auto">
      <ContentsHeader
        isEditOption={isEditOption}
        setIsEditOption={setIsEditOption}
        title={selectedClip.title}
      />
      <ContentBody
        handleSaveText={handleSaveText}
        isEditOption={isEditOption}
        selectedClip={selectedClip}
      />
    </Content>
  );
};
