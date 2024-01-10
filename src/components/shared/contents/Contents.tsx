import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import { ContentBody, ContentsHeader } from 'src/components/shared/contents';

import { useContents } from '@/components/shared/contents/hooks';

export const Contents = () => {
  const { selectedClip } = useContents();
  return (
    <Content className="overflow-auto">
      <ContentsHeader title={selectedClip.title} />
      <ContentBody clip={selectedClip} />
    </Content>
  );
};
