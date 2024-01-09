import { Content } from 'antd/lib/layout/layout';
import React from 'react';

import { ContentsHeader } from '@/components/shared/contents';

export const Contents = () => {
  return (
    <Content className="overflow-auto">
      <ContentsHeader />

      {/* コンテンツ*/}
      <main className="mt-20 mx-14">
        <div>さあ始めましょう</div>
      </main>
    </Content>
  );
};
